export const dynamic = "force-dynamic";
export const revalidate = 0;

import { headers } from "next/headers";
import { UserType } from "../types/userType";

interface sessionType {
  user?: UserType;
  statusCode?: number;
  error?: string;
}

export const useSession = async () => {
  try {
    const nextHeaders = headers();

    const Cookie = nextHeaders.get("Cookie") ?? "";

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      credentials: "include",
      headers: {
        Cookie,
        "Cache-Control": "no-cache",
      },
      cache: "no-store",
    });

    const data: sessionType = await response.json();

    if (!data.user) return null;

    return data.user;
  } catch (err: any) {
    return undefined;
  }
};
