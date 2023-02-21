import { api } from "src/boot/axios";

// Category started
export async function PostCategoriesIpi(obj) {
  const data = await api.post("/api/v1/Categories", obj, {
    headers: {
      'content-type': 'application/json',
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk5ODk3NDU0MDMzMSIsIk9yZ2FuaXphdGlvbklkIjoiMiIsIlVzZXJJZCI6IjIiLCJEZXZpY2VJZCI6IjMiLCJSb2xlSWQiOiI3IiwibmJmIjoxNjc1ODYxNjE5LCJleHAiOjE2NzY0NjY0MTksImlzcyI6InRhcXNpbS51eiIsImF1ZCI6IkhhbGFsVGFxc2ltIn0.OtPBS6NDgs0KL0rccxoLJBjeWZ-D9pSTdj5evB0a3kg"
    },
  });
  console.log(data);
  return data;
}
export async function GetCategoriesIpi() {
  const data = await api.get("/api/v1/Categories", {
    headers: {
      'content-type': 'application/json',
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk5ODk3NDU0MDMzMSIsIk9yZ2FuaXphdGlvbklkIjoiMiIsIlVzZXJJZCI6IjIiLCJEZXZpY2VJZCI6IjMiLCJSb2xlSWQiOiI3IiwibmJmIjoxNjc1ODYxNjE5LCJleHAiOjE2NzY0NjY0MTksImlzcyI6InRhcXNpbS51eiIsImF1ZCI6IkhhbGFsVGFxc2ltIn0.OtPBS6NDgs0KL0rccxoLJBjeWZ-D9pSTdj5evB0a3kg"
    },
  });
  return data;
}
// Category finished

// Brands started
export async function PostBrandIpi(obj) {
  const data = await api.post("/api/v1/Brands", obj, {
    headers: {
      'content-type': 'application/json',
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk5ODk3NDU0MDMzMSIsIk9yZ2FuaXphdGlvbklkIjoiMiIsIlVzZXJJZCI6IjIiLCJEZXZpY2VJZCI6IjMiLCJSb2xlSWQiOiI3IiwibmJmIjoxNjc1ODYxNjE5LCJleHAiOjE2NzY0NjY0MTksImlzcyI6InRhcXNpbS51eiIsImF1ZCI6IkhhbGFsVGFxc2ltIn0.OtPBS6NDgs0KL0rccxoLJBjeWZ-D9pSTdj5evB0a3kg"
    },
  });
  console.log(data);
  return data;
}
export async function GetBrandIpi() {
  const data = await api.get("/api/v1/Brands", {
    headers: {
      'content-type': 'application/json',
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk5ODk3NDU0MDMzMSIsIk9yZ2FuaXphdGlvbklkIjoiMiIsIlVzZXJJZCI6IjIiLCJEZXZpY2VJZCI6IjMiLCJSb2xlSWQiOiI3IiwibmJmIjoxNjc1ODYxNjE5LCJleHAiOjE2NzY0NjY0MTksImlzcyI6InRhcXNpbS51eiIsImF1ZCI6IkhhbGFsVGFxc2ltIn0.OtPBS6NDgs0KL0rccxoLJBjeWZ-D9pSTdj5evB0a3kg"
    },
  });
  return data;
}
// Brands finished
// 1 file api
export async function PostFileIpi(obj) {
  const data = await api.post("/api/v1/Files", obj, {
    headers: {
      'content-type': 'application/json',
      'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Ijk5ODk3NDU0MDMzMSIsIk9yZ2FuaXphdGlvbklkIjoiMiIsIlVzZXJJZCI6IjIiLCJEZXZpY2VJZCI6IjMiLCJSb2xlSWQiOiI3IiwibmJmIjoxNjc1ODYxNjE5LCJleHAiOjE2NzY0NjY0MTksImlzcyI6InRhcXNpbS51eiIsImF1ZCI6IkhhbGFsVGFxc2ltIn0.OtPBS6NDgs0KL0rccxoLJBjeWZ-D9pSTdj5evB0a3kg"
    },
  });
  return data;
}
