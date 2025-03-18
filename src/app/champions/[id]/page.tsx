import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail, SERVER_URL, VERSION } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: "챔피언 상세 정보",
  description: "상세 정보를 확인할 수 있는 페이지",
};

const ChampionsDetailPage = async ({ params }: Props) => {
  const championDetail: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <div className="container mx-auto mt-10 flex flex-col justify-center space-y-4">
      <h1 className="text-3xl font-bold">{championDetail.name}</h1>
      <div className="space-y-2">
        <Image
          src={`${SERVER_URL}/img/champion/splash/${championDetail.id}_0.jpg`}
          alt={championDetail.name}
          width={200}
          height={200}
          className="h-auto w-auto rounded-2xl"
        />
        <p className="max-w-4xl text-sm">{championDetail.lore}</p>
      </div>

      <div>
        {championDetail.spells.map((spell) => (
          <div
            key={spell.id}
            className="flex flex-row items-center space-x-8 space-y-4"
          >
            <Image
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
    </div>
  );
};

export default ChampionsDetailPage;
