import { successResponse } from "@/lib/apiResponse";

export async function POST() {
  const response = successResponse({ message: "Logged out successfully" });

  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
}
