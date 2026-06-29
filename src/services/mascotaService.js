import axiosClient from "./axiosClient";

export const mascotaService = {
  getAll: () => axiosClient.get("/admin/mascotas"),
  create: (data) => axiosClient.post("/admin/mascotas", data),
  update: (id, data) => axiosClient.put(`/admin/mascotas/${id}`, data),
  delete: (id) => axiosClient.delete(`/admin/mascotas/${id}`)
};