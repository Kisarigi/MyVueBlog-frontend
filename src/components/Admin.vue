<template lang="html">
<div>
  <el-table class="tabtab"
      :data="lessarticle"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="文章题目"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="标签"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布日期">
      </el-table-column>
      <el-table-column
        label="操作">

        <template slot-scope="scope">
        <el-button @click="deleteArticle(scope.row._id)" type="text" size="small">删除</el-button>
        </template>

      </el-table-column>
    </el-table>


    <el-table class="tabtab"
        :data="commentsAll.list"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="留言昵称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="留言内容"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="留言日期">
        </el-table-column>
        <el-table-column
          label="操作">

          <template slot-scope="scope">
          <el-button @click="deleteMessage(scope.row._id)" type="text" size="small">删除</el-button>
          </template>

        </el-table-column>
      </el-table>





  <el-form ref="form"  label-width="80px">

    <el-form-item label="文章标题">
      <el-input v-model="title"></el-input>
    </el-form-item>

    <el-form-item label="文章标签">
      <el-input v-model="type"></el-input>
    </el-form-item>

  </el-form>

  <div id="main">
      <mavon-editor :value="value" @change="getContent"/>
  </div>
  <el-button class="sbbutton" v-on:click="submit">提交</el-button>
</div>
</template>

<script>
import axios from 'axios';
import store from '../vuex/store';
export default {
  data () {
    return {
    value:'输入内容...',
    content:'',
    title:'',
    type:'',
    lessContent:'',
    lessarticle:'',
    commentsAll:'',
    }
  },
  methods:{
    getCommentsByAxios(){
      axios.get('/message/getMessage').then(res=>{
      this.commentsAll=res.data.result;
      })
    },
    getComments(){
      this.commentsAll=this.$store.state.message;
    },
    deleteMessage(id){
      axios.post("/message/deleteMessage",{
      _id:id,
      }).then((res)=>{

      this.getCommentsByAxios();
      })
    },
    getContent(value,render){
      this.content=render;
      this.lessContent=render;
    },
    submit(){
      axios.post("/article/addArticle",{
      title:this.title,
      type:this.type,
      content:this.content,
      lessContent:this.lessContent.slice(0,300),
    }).then((res)=>{
      this.getArticle();
      this.value="";
      this.title="";
      this.type ="";
      this.lessContent="";
      })
    },

    getArticle(){
    axios.get('/article/getArticle').then(res=>{
    this.lessarticle=res.data.result.list;
    })
    },

    deleteArticle(id){
      axios.post("/article/deleteArticle",{
      _id:id,
    }).then((res)=>{
      this.getArticle();
      })

    },

  },
  mounted(){
    this.getArticle();
    this.getComments();
  },
  components: {

  },
}
</script>

<style lang="css">
.sbbutton{
  margin-top: 50px;
  margin-bottom: 100px;
}
.tabtab{
  margin-bottom: 50px;
}
</style>
