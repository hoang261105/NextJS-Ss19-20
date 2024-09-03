import { SignIn } from "@clerk/nextjs";

export default function Sign_In() {
  return (
    <SignIn
      appearance={{
        elements: {
          headerTitle: (
            <>
              <h1>OK</h1>
            </>
          ),

          headerSubtitle: "Ok",
        },
      }}
    />
  );
}
