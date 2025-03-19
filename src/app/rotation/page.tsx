"use client";

import { Champion } from "@/types/Champion";
import { useChampionRotation, useChampions } from "../../hooks/queries";
import ChampionCard from "@/components/ChampionCard";
import DataList from "@/components/DataList";

export default function RotationPage() {
  const {
    data: rotationData,
    error: rotationError,
    isPending: rotationIsPending,
  } = useChampionRotation();

  const {
    data: champions,
    error: championsError,
    isPending: championsIsPending,
  } = useChampions();

  if (rotationIsPending || championsIsPending) return <div>로딩 중...</div>;
  if (rotationError) return <div>{rotationError.message}</div>;
  if (championsError) return <div>{championsError.message}</div>;

  const rotationChampions = champions.filter((c: Champion) =>
    rotationData?.freeChampionIds?.includes(Number(c.key)),
  );

  return (
    <DataList title={"무료 챔피언 목록"}>
      {rotationChampions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </DataList>
  );
}
