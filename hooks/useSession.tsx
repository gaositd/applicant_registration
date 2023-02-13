import { UserType } from "../types/userType";
import { headers } from "next/headers";

interface sessionType {
  user?: UserType;
  statusCode?: number;
  error?: string;
}

export const useSession = async () => {
  try {
    const nextHeaders = headers();

    const Cookie = nextHeaders.get("Cookie") ?? "";

    const res = await fetch("http://localhost:4242/auth/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie,
      },
    });

    const data: sessionType = await res.json();

    return data.user;
  } catch (err: any) {
    return undefined;
  }
};
