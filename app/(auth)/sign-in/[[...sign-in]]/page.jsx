import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="pb-10">
        <Image
          src={"/image.png"}
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
