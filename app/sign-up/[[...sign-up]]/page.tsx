import { SignUp } from "@clerk/nextjs";

export default function Sign_Up() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp
        appearance={{
          elements: {},
          variables: {},
        }}
      />
    </div>
  );
}
