import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  budget?: string;
  project?: string;
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 100);
  const company = (body.company ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().slice(0, 200);
  const budget = (body.budget ?? "").trim().slice(0, 60);
  const project = (body.project ?? "").trim().slice(0, 4000);

  if (!name || !email || !project) {
    return NextResponse.json(
      { error: "Name, email and project are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
  const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: EMAIL_USER, pass: EMAIL_APP_PASSWORD.replace(/\s+/g, "") },
  });

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#0e1a17;line-height:1.6">
      <h2 style="color:#0a7cff;margin:0 0 12px">New project inquiry — KSoft Solution</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:6px 12px;color:#667069">Name</td><td style="padding:6px 12px"><strong>${esc(name)}</strong></td></tr>
        <tr><td style="padding:6px 12px;color:#667069">Company</td><td style="padding:6px 12px">${esc(company) || "—"}</td></tr>
        <tr><td style="padding:6px 12px;color:#667069">Email</td><td style="padding:6px 12px"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:6px 12px;color:#667069">Budget</td><td style="padding:6px 12px">${esc(budget) || "—"}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px">Project</h3>
      <p style="white-space:pre-wrap;background:#f7f5ef;padding:14px;border-radius:10px;border:1px solid #e2ded2">${esc(project)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"KSoft Website" <${EMAIL_USER}>`,
      to: EMAIL_TO!,
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      html,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nBudget: ${budget}\n\n${project}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }
}
