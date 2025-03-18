import ChampionInfo from "@/components/ChampionInfo";
import ChampionSpell from "@/components/ChampionSpell";

import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./Loading";

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: "챔피언 상세 정보",
  description: "상세 정보를 확인할 수 있는 페이지",
};

const ChampionsDetailPage = ({ params }: Props) => {
  return (
    <div className="container mx-auto mt-10 flex flex-col justify-center space-y-4">
      <Suspense fallback={<Loading />}>
        <ChampionInfo championId={params.id} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ChampionSpell championId={params.id} />
      </Suspense>
    </div>
  );
};

export default ChampionsDetailPage;
