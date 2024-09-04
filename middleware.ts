// import { authMiddleware } from '@clerk/nextjs';
import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export default authMiddleware({
  //@ts-ignore
  afterAuth(auth, req: NextRequest, evt: NextFetchEvent) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL("/sign-in", req.url);
      // signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
