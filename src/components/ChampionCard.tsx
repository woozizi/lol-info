import { Champion } from "@/types/Champion";
import { SERVER_URL, VERSION } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionCard = ({ champion }: { champion: Champion }) => {
  return (
    <Link href={`/champions/${champion.id}`}>
      <div className="flex flex-col items-center rounded-2xl border p-8">
        <Image
          priority
          src={`${SERVER_URL}/${VERSION}/img/champion/${champion.image.full}`}
          alt={champion.id}
          width={100}
          height={100}
        />
        <h2 className="mt-2 text-xl font-semibold text-red-500">
          {champion.name}
        </h2>
        <p className="text-sm text-gray-600">{champion.title}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;
