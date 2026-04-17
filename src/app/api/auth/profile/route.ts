import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  const user = await User.findById(currentUser.id).select("-password");

  return NextResponse.json({ success: true, user });
}

export async function PUT(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  await connectDB();

  const updated = await User.findByIdAndUpdate(
    currentUser.id,
    {
      fullName: body.fullName,
      email: body.email,
      role: body.role,
    },
    { new: true }
  ).select("-password");

  return NextResponse.json({ success: true, user: updated });
}
