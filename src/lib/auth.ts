import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
  name: string;
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as TokenPayload;
  } catch {
    return null;
  }
}

export async function getTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value || null;
}

export async function getCurrentUser(): Promise<TokenPayload | null> {
  const token = await getTokenFromCookies();

  if (!token) return null;

  return verifyToken(token);
}