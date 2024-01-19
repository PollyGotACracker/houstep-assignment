"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isOrderedState } from "@/atoms/order";

export default function SubmitOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOrdered, setIsOrdered] = useRecoilState(isOrderedState);

  useEffect(() => {
    if (!isOrdered) router.back();
    else {
      setTimeout(() => {
        setIsOrdered(false);
        router.replace("/order");
      }, 3000);
    }
  }, [isOrdered]);

  if (!isOrdered) return <></>;
  return <>{children}</>;
}
