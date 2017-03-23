import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//状态 state
 const state = {
    msg: 'init msg',
    title: '文章标题',
    detailContent: '文章详细',
    isArticleDetail: 'false'
 };

 const actions = {
    saveName:({commit}, msg)=>commit('saveMsg', msg),    
    saveTitle:({commit}, title)=>commit('saveTitle', title),
    saveDetail:({commit}, detailContent)=>commit('saveDetail', detailContent),
    setArticleDetail:({commit}, isArticleDetail)=>commit('setArticleDetail', isArticleDetail)
 };

 const mutations = {
     saveMsg:(state, msg) => state.msg = msg,
     saveTitle:(state, title) => state.title = title,
     saveDetail:(state, detailContent) => state.detailContent = detailContent,
     setArticleDetail:(state, isArticleDetail) => state.isArticleDetail = isArticleDetail
 };

 const getters = {
    showState:(state) => state.msg,
    showTitle:(state) => state.title,
    showDetailContent:(state) => state.detailContent,
    getArticleDetail:(state) => state.isArticleDetail
 };


 export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
 });