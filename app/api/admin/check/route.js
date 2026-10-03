import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_pass_session");
  const authenticated = session?.value === "true";
  return NextResponse.json({ authenticated });
}
