import {getbloglists,getblogDetail} from '../../api/blogs'

const state = {
  bloglists:[],
  blogDetail:''
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
    },
    getblog({commit},params){
        getblogDetail(params.type,params.name).then((r)=>{
            commit('getblog',r)
        })
    }
}


// mutations
const mutations = {
    initbloglists (state,data) {
        state.bloglists = data;
    },
    getblog(state,data){
        state.blogDetail = data;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}