import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    articleTitle:'',
    articleDate:'',
    articleContent:'',
    articleType:[],
    typeArticleAll:[],
    articleCount:0,
    oneArticle:[],
    message:[],
  },
  getters: {

  },
  mutations: {
    setArticleTitle(state, title) {
      state.articleTitle = title;
    },
    setArticleDate(state, date) {
      state.articleDate = date;
    },
    setArticleContent(state, content) {
      state.articleContent = content;
    },
    setArticleType(state, type) {
      state.articleType = type;
    },
    setTypeArticleAll(state, all) {
      state.typeArticleAll = all;
    },
    setCount(state, count) {
      state.articleCount = count;
    },
    setOneArticle(state, item) {
      state.oneArticle = item;
    },
    setMessage(state, msg) {
      state.message = msg;
    },
  }
});
