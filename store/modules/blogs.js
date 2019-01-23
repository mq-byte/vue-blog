import {getbloglists} from '../../api/blogs'

const state = {
  bloglists:[]
}

// getters
const getters = {
  
}

// actions
const actions = {
    initbloglists ({ commit }) {
        getbloglists().then((r)=>{
            commit('initbloglists',r)
        })
    }
}

// mutations
const mutations = {
    initbloglists (state,data) {
        state.bloglists = data;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}