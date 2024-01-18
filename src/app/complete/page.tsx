import Image from "next/image";
import CenteredLayout from "../_component/CenteredLayout";

export default function CompletePage() {
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
