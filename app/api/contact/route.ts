import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, time, phone } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Beuaty Zone <onboarding@resend.dev>",
      to: "test@resend.dev",
      subject: "New Contact Form Submission (demo)",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>time:</strong> ${time}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "success (demo mode)" });
    }

    return NextResponse.json({ message: "success" });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json(
      { message: "Server error", error: String(err) },
      { status: 500 }
    );
  }
}
