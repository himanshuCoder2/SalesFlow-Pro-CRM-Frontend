import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { loginSchema } from "@/lib/validations";
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
} from "@/lib/apiResponse";

export async function POST(req: Request) {
  try {
    // 1. Parse request body
    const body = await req.json();

    // 2. Validate input with Zod
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      return validationErrorResponse(errors);
    }

    const { email, password } = result.data;

    // 3. Connect to MongoDB
    await connectDB();

    // 4. Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return errorResponse("Invalid email or password", 401);
    }

    // 5. Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return errorResponse("Invalid email or password", 401);
    }

    // 6. Create JWT token
    const token = jwt.sign(
      {
        id: user._id.toString(),
        email: user.email,
        role: user.role,
        name: user.fullName,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: (process.env.JWT_EXPIRES_IN ||
          "7d") as SignOptions["expiresIn"],
      }
    );

    // 7. Send response with cookie
    const response = successResponse({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.fullName,
        role: user.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return errorResponse("Internal server error", 500);
  }
}
