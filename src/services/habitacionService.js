import axiosClient from './axiosClient'

export const habitacionService = {
  getAll: () => axiosClient.get('/admin/habitaciones'),
  create: (data) => axiosClient.post('/admin/habitaciones', data),
  update: (id, data) => axiosClient.put(`/admin/habitaciones/${id}`, data),
  remove: (id) => axiosClient.delete(`/admin/habitaciones/${id}`),
}