import { NextResponse } from "next/server";

type ChampionRotation = {
  freeChampionIds: number[];
  freeChampionIdsForNewPlaters: number[];
};

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
  const serverKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

  if (!apiKey || !serverKey) {
    throw new Error("api호출 실패");
  }

  try {
    const res = await fetch(serverKey, {
      method: "GET",
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

    const data: ChampionRotation = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    retunr NextResponse.json(err)
  }
}
