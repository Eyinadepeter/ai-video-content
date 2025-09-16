"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { db } from "@/configs/db";

import { EmailAddress } from "@clerk/nextjs/server";

function provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && isNewUser();
  }, [user]);

  const isNewUser = async () => {
    const result = await db
      .select()
      .from(Users)
      .where(eq(user.email, user?.primaryEmailAddress?.emailAddress));

    console.log(result);

    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
    }
  };

  return <div>{children}</div>;
}

export default provider;
