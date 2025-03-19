import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">리그 오브 레전드 정보 앱</h1>
      <p className="mb-8 text-lg">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="flex flex-col items-center justify-center space-y-8">
        <Link href={"/champions"}>
          <Image
            src="/images/list.webp"
            alt="챔피언리스트"
            width={500}
            height={400}
          />
          <span>챔피언 목록 보기</span>
        </Link>
        <Link href={"/items"}>
          <Image
            src="/images/item.webp"
            alt="아이템"
            width={500}
            height={400}
          />
          <span>아이템 목록 보기</span>
        </Link>
        <Link href={"/rotation"}>
          <Image
            src="/images/rotation.webp"
            alt="로테이션"
            width={500}
            height={400}
          />
          <span>금주 챔피언 로테이션 확인</span>
        </Link>
      </div>
    </div>
  );
}
