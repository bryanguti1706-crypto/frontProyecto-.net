import axiosClient from './axiosClient'

export const tipoMascotaService = {
  getAll: () => axiosClient.get('/admin/tipomascotas'),
  create: (data) => axiosClient.post('/admin/tipomascotas', data),
  update: (id, data) => axiosClient.put(`/admin/tipomascotas/${id}`, data),
  remove: (id) => axiosClient.delete(`/admin/tipomascotas/${id}`),
}