import fetchClient from "./core/fetchClient";

export const getOrderItems = async () => {
  const res = await fetchClient(`/items`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("목록을 불러오는 중 문제가 발생했습니다.");
  }
  return res.json();
};
