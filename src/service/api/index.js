import apiClient from '../axios'

export const getListData = (payload) => {
  return apiClient({
    method: 'get',
    url: `recruitment/positions.json`,
    // data: payload,
  })
}