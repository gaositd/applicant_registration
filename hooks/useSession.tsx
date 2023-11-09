import axios from "axios";
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

    const { data } = await axios.get<sessionType>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
      {
        withCredentials: true,
        headers: {
          Cookie,
          "Cache-Control": "no-cache",
        },
      }
    );

    return data.user;
  } catch (err: any) {
    return undefined;
  }
};
