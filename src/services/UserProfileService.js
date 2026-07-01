import axiosClient from "./axiosClient";

export const userProfileService = {
  getProfile: (userId) => axiosClient.get(`/usuarios/${userId}`),
  updateProfile: (userId, data) => axiosClient.put(`/usuarios/${userId}`, data),
  getMisMascotas: (userId) => axiosClient.get(`/usuarios/${userId}/mascotas`),
  getMisCitas: (userId) => axiosClient.get(`/usuarios/${userId}/citas`),
};
