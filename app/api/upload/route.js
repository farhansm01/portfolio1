import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_pass_session");
  if (session?.value !== "true") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || process.env.IMGBB_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "ImgBB API key is not configured in environment" }, { status: 500 });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString("base64");

    const imgbbForm = new URLSearchParams();
    imgbbForm.append("image", base64Image);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: imgbbForm,
    });

    const data = await res.json();
    if (data.success) {
      return NextResponse.json({
        success: true,
        url: data.data.url,
        display_url: data.data.display_url,
      });
    }

    return NextResponse.json({ error: data.error?.message || "ImgBB upload failed" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Failed to upload image" }, { status: 500 });
  }
}
