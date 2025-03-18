import { fetchChampionSpells, SERVER_URL, VERSION } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ChampionSpell = async ({ championId }: { championId: string }) => {
  const spells = await fetchChampionSpells(championId);
  return (
    <div>
      {spells.map((spell) => (
        <div
          key={spell.id}
          className="flex flex-row items-center space-x-8 space-y-4"
        >
          <Image
            priority
            src={`${SERVER_URL}/${VERSION}/img/spell/${spell.image.full}`}
            alt={spell.name}
            width={50}
            height={50}
          />
          <div className="mb-2 flex max-w-4xl flex-col">
            <span className="font-bold">
              {spell.name} ({spell.id.slice(-1)})
            </span>
            <span className="font-sm">{spell.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionSpell;
