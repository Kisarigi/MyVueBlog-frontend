<template lang="html">
  <div class="article-list">

   <div v-for="item in curArticle">
     <div class="article-type">
       <el-tag class="type-size">{{item.type}}</el-tag>
     </div>
      <div class="article-title">
        {{item.title}}
      </div>
      <div class="article-date">
         发布于  {{formatDate(item.date)}}
      </div>
      <div class="article-less-content" v-html="item.lessContent+'......'" v-highlight>
      </div>
      <div class="read-button">
      <el-button @click="Jump1(item)" type="primary" size="medium" plain round>阅读全文</el-button>
      </div>
      <div class="line">
      </div>
   </div>
   <div class="dive-page">
     <el-button-group>
      <el-button @click="LastPage" type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button @click="NextPage" type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
     </el-button-group>
   </div>
  </div>
</template>

<script>
import store from '../vuex/store';
import axios from 'axios';
export default {
  data(){
    return{
    miniarticle:[],
    count:0,
    curArticle:[],
    cur:4,
    type:[],
    typeNewArticle:this.$store.state.typeArticleAll,
    }
  },

  methods:{
    /*
    getArticle(){
      axios.get('/article/getArticle').then((res)=>{
      this.miniarticle = res.data.result.list;
      this.count = res.data.result.count;
      this.curArticle=this.miniarticle.slice(0,4);
      this.$store.commit('setArticleType',res.data.result.list);

        for(let i=0;i<this.miniarticle.length;i++){
        this.type.push(res.data.result.list[i].type);
        }

        this.$store.commit('setArticleType',this.type);
    })},
   */
     Jump1(item){
      this.$store.commit('setOneArticle',item);
      this.$router.push({path:'/showarticle'});
      window.scroll(0,0);
    },
    formatDate(date){
      return date.slice(0,25)
    },
    getList(){
      this.miniarticle = this.$store.state.typeArticleAll;
      this.count = this.$store.state.articleCount;
      this.curArticle=this.miniarticle.slice(0,4);
    },

    NextPage(){
      if(this.cur>=this.count){

      }else{
        if(this.cur+4>this.count){
        this.curArticle=this.miniarticle.slice(this.cur,this.count);
        this.cur+=4;
        window.scroll(0, 0);
        }else{
        this.curArticle=this.miniarticle.slice(this.cur,this.cur+=4);
        window.scroll(0, 0);
        }
      }
    },
    LastPage(){
      if(this.cur<=4){

      }else{
      this.curArticle=this.miniarticle.slice(this.cur-8,this.cur-4);
      this.cur-=4;
      window.scroll(0, 0);
      }
    },
      jumpToArticle(title,date,content){
      this.$store.commit('setArticleTitle',title);
      this.$store.commit('setArticleDate',date);
      this.$store.commit('setArticleContent',content);
    },
  },
  mounted(){

  },
  components: {

  },
}
</script>

<style lang="css">
.article-title{
  text-align: center;
  font-size: 35px;

  color: #303133;
  font-family: "Helvetica Neue";
}
.article-date{
  text-align: center;

  padding-bottom: 20px;
  color:#909399;
}
.article-less-content{
  color:#303133;
  font-family: "Hiragino Sans GB";
  padding:0px 50px;
}
.type-size{
  font-size: 15px;
}
.read-button{
 text-align: center;
 padding: 5px 0px 20px 0px;
}
.line{
  margin: 0 auto;
  width:91%;
  border-bottom: 1px solid #E4E7ED;
}
.dive-page{
  text-align: center;
  padding:20px;
}
</style>
