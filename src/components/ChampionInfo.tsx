import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail, SERVER_URL } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ChampionInfo = async ({ championId }: { championId: string }) => {
  const championDetail: ChampionDetail = await fetchChampionDetail(championId);
  return (
    <>
      <h1 className="text-3xl font-bold">{championDetail.name}</h1>
      <div className="space-y-2">
        <Image
          priority
          src={`${SERVER_URL}/img/champion/splash/${championDetail.id}_0.jpg`}
          alt={championDetail.name}
          width={200}
          height={200}
          className="h-auto w-auto rounded-2xl"
        />
        <p className="max-w-4xl text-sm">{championDetail.lore}</p>
      </div>
    </>
  );
};

export default ChampionInfo;
