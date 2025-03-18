import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Items";

export const SERVER_URL = "https://ddragon.leagueoflegends.com/cdn";
export const VERSION = "15.5.1";
export const LANGUAGES = "ko_KR";

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
  // console.log("API 호출 시간:", new Date().toISOString());
  const res = await fetch(
    `${SERVER_URL}/${VERSION}/data/${LANGUAGES}/champion/${name}.json`,
    { cache: "no-store" },
  );

  const { data } = await res.json();
  const championDetail: ChampionDetail = data[name];
  return championDetail;
}

//아이템 리스트 가져오기
export async function fetchItemList(): Promise<Record<string, Item>> {
  // console.log("서버컴포넌트에서");
  const res = await fetch(
    `${SERVER_URL}/${VERSION}/data/${LANGUAGES}/item.json`,
    { cache: "force-cache" },
  );

  const { data } = await res.json();

  return data;
}
