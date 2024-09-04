import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { viVN } from "@clerk/localizations";

const localization = {
  signUp: {
    start: {
      title: "Đăng ký tài khoản",
      actionText: "Bạn đã có tài khoản?",
      actionLink: "Đăng nhập tại đây",
    },
    emailLink: {
      title: "Verify your email",
      subtitle: "to continue to {{applicationName}}",
      formTitle: "Verification link",
      formSubtitle: "Use the verification link sent to your email address",
      resendButton: "Didn't receive a link? Resend",
      verified: {
        title: "Đăng ký thành công",
      },
      loading: {
        title: "Signing up...",
      },
      verifiedSwitchTab: {
        title: "Successfully verified email",
        subtitle: "Return to the newly opened tab to continue",
        subtitleNewTab: "Return to previous tab to continue",
      },
    },
    emailCode: {
      title: "Verify your email",
      subtitle: "to continue to {{applicationName}}",
      formTitle: "Verification code",
      formSubtitle: "Enter the verification code sent to your email address",
      resendButton: "Didn't receive a code? Resend",
    },
    phoneCode: {
      title: "Verify your phone",
      subtitle: "to continue to {{applicationName}}",
      formTitle: "Verification code",
      formSubtitle: "Enter the verification code sent to your phone number",
      resendButton: "Didn't receive a code? Resend",
    },
    continue: {
      title: "Fill in missing fields",
      subtitle: "to continue to {{applicationName}}",
      actionText: "Bạn đã có tài khoản?",
      actionLink: "Đăng nhập tại đây",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
