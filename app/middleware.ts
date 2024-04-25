import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
//   console.log(process.env);
  return NextResponse.next();
}
