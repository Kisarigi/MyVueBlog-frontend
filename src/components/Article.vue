<template lang="html">
  <div class="article">
  <navHeader></navHeader>
  <div class="headpic"></div>
  <div class="content">
    <div class="content-main1">
       <div class="one-article-content">
         <div class="article-title special">
         {{this.oneArticleAll.title}}
         </div>
         <div class="article-date">
          发布于  {{this.oneArticleAll.date}}
         </div>
         <div class="article-less-content" v-html="this.oneArticleAll.content" v-highlight>
         </div>
      </div>
    </div>
  </div>
  <navFooter></navFooter>

  </div>
</template>

<script>
import navHeader from './Header'
import navFooter from './Footer'
import store from '../vuex/store';

export default {
  data(){
  return{
    oneArticleAll:[],
    }
  },
  methods:{
    getOne(){
      this.oneArticleAll=this.$store.state.oneArticle;
    }
  },
  mounted(){
    this.getOne();
  },
  components: {
    navHeader,
    navFooter,
  },
}
</script>

<style lang="css">
body {
  background-color: #f4f4f4;
  margin:0;padding:0;
  font-family: 'Open Sans', 'Helvetica Neue',"Microsoft YaHei",'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
}
.special{
  margin-top: 30px;
}
.article{
  width:100%;
}
.headpic {
  height: 380px;
  background: url(../assets/xiyang.gif) center -52px no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}
.content {
  width:80%;
  margin: 0 auto;
}
.content-main1 {
  margin: 0 auto;
  width: 80%;
  margin-top: -90px;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
  background: #fff;
  border:5px solid white;
  border-radius:10px;
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),
              0 6px 50px 1px rgba(0, 0, 0, 0.12),
              0 6px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
