import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="pb-10">
        <Image
          src={"/WhatsApp Image 2025-09-15 at 14.19.30_2ebafc06.jpg"}
          alt="Login"
          width={500}
          height={500}
          className="object-contain w-full"
        />
      </div>
      <div className="justify-center flex items-center h-screen">
        <SignIn />
      </div>
    </div>
  );
}
