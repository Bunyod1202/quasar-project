import { api } from "src/boot/axios";

export async function GetMainCategoriesIpi() {
  const data = await api.get("/mainCategory");
  console.log(data);
  return data;
}
export async function PostCategoriesIpi(obj) {
  const data = await api.post("/category", obj);
  console.log(data);
  return data;
}
export async function GetCategoriesIpi() {
  const data = await api.get("/category");
  console.log(data);
  return data;
}

