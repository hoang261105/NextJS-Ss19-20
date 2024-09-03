import { currentUser } from "@clerk/nextjs/server";

export default async function B5_B6() {
  const user = await currentUser();
  console.log(user);

  if (!user) return <div>Not signed in</div>;

  return (
    <>
      <div>Họ và tên: {user?.fullName}</div>
      <div>
        Email:
        {user?.emailAddresses.map((item: any) => (
          <div key={item.id}>{item.emailAddress}</div>
        ))}
      </div>
    </>
  );
}
