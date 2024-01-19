"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useResetRecoilState } from "recoil";
import { orderCartState } from "@/atoms/order";
import CenteredLayout from "@/app/_component/CenteredLayout";

export default function CompletePage() {
  const resetCart = useResetRecoilState(orderCartState);

  useEffect(() => resetCart(), []);

  return (
    <CenteredLayout gap="12px">
      <Image
        src="/checked.svg"
        alt="Checked Image"
        width={48}
        height={48}
        priority
      />
      <p>주문이 완료되었습니다.</p>
    </CenteredLayout>
  );
}
