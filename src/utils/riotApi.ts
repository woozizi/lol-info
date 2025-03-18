export async function getChampionRotation() {
  const res = await fetch("/api/rotation");
  if (!res) {
    throw new Error("데이터 불러오기 실패");
  }
  return res.json();
}
