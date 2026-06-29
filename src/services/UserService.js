import axiosClient from './axiosClient'

export const userService = {
  getAll: () => axiosClient.get('/admin/users'),
  create: (data) => axiosClient.post('/admin/users', data),
  update: (id, data) => axiosClient.put(`/admin/users/${id}`, data),
  remove: (id) => axiosClient.delete(`/admin/users/${id}`),
}