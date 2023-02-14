import { api } from "src/boot/axios";

export async function PostCategoriesIpi(payload) {
  const data = await api.post("/api/v1/Categories", payload, {
    headers: {
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk5ODk3NDU0MDMzMSIsIk9yZ2FuaXphdGlvbklkIjoiMiIsIlVzZXJJZCI6IjIiLCJEZXZpY2VJZCI6IjMiLCJSb2xlSWQiOiI3IiwibmJmIjoxNjc1ODYxNjE5LCJleHAiOjE2NzY0NjY0MTksImlzcyI6InRhcXNpbS51eiIsImF1ZCI6IkhhbGFsVGFxc2ltIn0.OtPBS6NDgs0KL0rccxoLJBjeWZ-D9pSTdj5evB0a3kg"
    }
  });
  console.log(data);
  return data;
}
