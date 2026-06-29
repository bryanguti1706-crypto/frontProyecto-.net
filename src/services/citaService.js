import axiosClient from './axiosClient'

export const citaService = {
  getAll: () => axiosClient.get('/admin/citas'),
  create: (data) => axiosClient.post('/admin/citas', data),
  update: (id, data) => axiosClient.put(`/admin/citas/${id}`, data),
  remove: (id) => axiosClient.delete(`/admin/citas/${id}`),
}