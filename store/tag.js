import request from '@/service'

export const state = () => {
  return {
    data: []
  }
}

export const mutations = {
  updateListData (state, data) {
    state.data = data
  }
}

export const actions = {
  async fetchList ({ commit }, params = {}) {
    const { result } = await request.get('tags', { params })
    commit('updateListData', result)
  }
}