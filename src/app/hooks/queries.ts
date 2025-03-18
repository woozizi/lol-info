"use client";

import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

export const useChampions = () => {
  return useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampionList,
  });
};

export const useChampionRotation = () => {
  return useQuery({
    queryKey: ["rotation"],
    queryFn: getChampionRotation,
  });
};
