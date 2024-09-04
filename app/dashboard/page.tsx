"use client";
import { useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

export default function ExternalDataPage() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  if (!isLoaded) {
    // Handle loading state however you like
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // Handle signed out state however you like
    router.push("/log-in");
  }

  const fetchDataFromExternalResource = async () => {
    const token = await getToken();
    // Add logic to fetch your data
    return token;
  };

  return <div>Bạn đã đăng nhập thành công</div>;
}
