import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { registerSchema } from "@/lib/validations";
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
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      return validationErrorResponse(errors);
    }

    const { firstName, lastName, email, password, role } = result.data;

    // 3. Connect to MongoDB
    await connectDB();

    // 4. Check if email already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return errorResponse("Email is already registered", 409);
    }

    // 5. Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 6. Create user
    const newUser = await User.create({
      fullName: `${firstName} ${lastName}`,
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
    });

    return successResponse(
      {
        message: "Account created successfully",
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.fullName,
          role: newUser.role,
        },
      },
      201
    );
  } catch (error) {
    console.error("Register error:", error);
    return errorResponse("Internal server error", 500);
  }
}
