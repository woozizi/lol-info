import { LANGUAGES, SERVER_URL, VERSION } from "@/app/constants/constants";
import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Items";

//챔피언 리스트 정보 가져오기
export async function fetchChampionList(): Promise<Champion[]> {
  const res = await fetch(
    `${SERVER_URL}/${VERSION}/data/${LANGUAGES}/champion.json`,
    { next: { revalidate: 86400 } },
  );

  const { data } = await res.json();
  const champions: Champion[] = Object.values(data);

  return champions;
}

//챔피언 디테일 정보 가져오기
export async function fetchChampionDetail(
  name: string,
): Promise<ChampionDetail> {
  //suspense효과를 위해 지연
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(
    `${SERVER_URL}/${VERSION}/data/${LANGUAGES}/champion/${name}.json`,
    { cache: "no-store" },
  );

  const { data } = await res.json();
  const championDetail: ChampionDetail = data[name];

  return championDetail;
}

//챔피언 스펠 가져오기
export async function fetchChampionSpells(
  id: string,
): Promise<ChampionDetail["spells"]> {
  //suspense효과를 위해 지연
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const championDetail = await fetchChampionDetail(id);
  return championDetail.spells;
}

//아이템 리스트 가져오기
export async function fetchItemList(): Promise<Record<string, Item>> {
  const res = await fetch(
    `${SERVER_URL}/${VERSION}/data/${LANGUAGES}/item.json`,
    { cache: "force-cache" },
  );

  const { data } = await res.json();

  return data;
}
