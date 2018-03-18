<template>
  <div class="blog-main">
  <navHeader></navHeader>
  <div class="headpic"></div>
  <div class="content">
    <div class="content-main">
      <articleList ref="alist"></articleList>
    </div>
    <div class="content-side">
      <div class="me">
        <img src="../assets/avator.jpg" class="avator"/>
        <div class="side">
          <div class="text">Kisarigi</div>
          <div class="icon">
            <i class="fa fa-github fa-2x icon-between"style="color: #909399;"></i>
            <i class="fa fa-qq fa-2x icon-between"  style="color: #55acee;"></i>
            <i class="fa fa fa-envelope fa-2x icon-between" style=" color:#F56C6C;"></i>
          </div>
        </div>
      </div>
      <div class="article-type-content">
        <div class="article-type-text">
          文章标签
        </div>
        <div class="tags" v-for="item in getTheType" >
         <el-button @click="changeArticle(item)"class="tags-button"type="primary" plain>{{item}}</el-button>
        </div>
      </div>

      <message></message>

    </div>
  </div>

  <navFooter></navFooter>
  </div>
</template>

<script>
import navHeader from './Header'
import navFooter from './Footer'
import articleList from './ArticleList'
import store from '../vuex/store'
import message from './Message'
import axios from 'axios';
export default {
  data () {
    return {

    }
  },
  methods:{
    changeArticle(type){
    axios.get('/article/changeArticle?'+'type='+type).then((res)=>{
    this.$store.commit('setTypeArticleAll',res.data.result.list);
    this.$store.commit('setCount',res.data.result.count);
    let child = this.$refs.alist;
    child.getList();
   })
  },

  getArticle(){
    axios.get('/article/getArticle').then((res)=>{
    this.$store.commit('setTypeArticleAll',res.data.result.list);
    this.$store.commit('setCount',res.data.result.count);
    let atemp=[];
      for(let i=0;i<res.data.result.list.length;i++){
      atemp.push(res.data.result.list[i].type);
      }
    let btemp=[]
      for(let j=0;j<atemp.length;j++){
      if(btemp.indexOf(atemp[j])==-1){
        btemp.push(atemp[j]);
      }
      }

      this.$store.commit('setArticleType',btemp);
      let child = this.$refs.alist;
      child.getList();
  })},


  },
  computed:{
    getTheType(){
      return this.$store.state.articleType;
    }
  },
  mounted(){
    this.getArticle();
  },
  components:{
    navHeader,
    navFooter,
    articleList,
    message,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
body {
  background-color: #f4f4f4;
  margin:0;padding:0;
  font-family: 'Open Sans', 'Helvetica Neue',"Microsoft YaHei",'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
}
.blog-main{
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
.content:after {
    display: table;
    content: " ";
    clear: both;
}
.content-main {
  width: 67%;
  float: left;
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
.me{
  border-bottom: 1px solid #E4E7ED;
  text-align: center;
}
.content-side{
  width: 21%;
  float: right;
  padding:50px;

}
.avator{
    display: inline-block;
    width: 120px;
    height:140px;
    vertical-align: middle;
    border-radius: 10%;
    overflow: hidden;
}
.text{
  color:#C0C4CC;
  font-size: 25px;
  padding:10px;

}
.side{


}
.icon{
  padding-bottom: 30px;
  margin-left: 10px;
}
.icon-between{
  margin-left: 5px;
}
.article-type-content{
  margin-top: 100px;
  border-bottom: 1px solid #E4E7ED;

}
.article-type-text{
  color:#909399;
  border-bottom: 1px solid #E4E7ED;
}
.tags{
  margin-top: 10px;
  float: left;
}
.tags-button{
  margin-left: 10px;
}
</style>
