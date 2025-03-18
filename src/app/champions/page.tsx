import ChampionCard from "@/components/ChampionCard";
import DataList from "@/components/DataList";
import { fetchChampionList } from "@/utils/serverApi";

const ChampionsListPage = async () => {
  const champions = await fetchChampionList();

  return (
    <DataList title="전체 챔피언 목록">
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </DataList>
  );
};

export default ChampionsListPage;
