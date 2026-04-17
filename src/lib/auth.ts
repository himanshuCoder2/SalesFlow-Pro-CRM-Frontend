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
    return jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
  } catch {
    return null;
  }
}

export function getTokenFromCookies(): string | null {
  const cookieStore = cookies();
  return cookieStore.get("token")?.value || null;
}

export function getCurrentUser(): TokenPayload | null {
  const token = getTokenFromCookies();
  if (!token) return null;
  return verifyToken(token);
}
