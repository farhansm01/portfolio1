import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (!ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: "Server misconfiguration: ADMIN_PASSWORD not configured" },
        { status: 500 }
      );
    }

    if (password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true, message: "Logged in successfully" });
      response.cookies.set("admin_pass_session", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });
      return response;
    }

    return NextResponse.json(
      { success: false, message: "Incorrect password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
