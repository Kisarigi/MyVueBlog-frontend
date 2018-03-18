<template lang="html">
  <div>
    <div class="article-type-content">
      <div class="article-type-text">
       留言栏
      </div>
      <div class="comments-content">
        <div v-for="item in getMsg">
          <div class="comments-one">
      <div class="nam">       {{item.name}}：           </div>
      <div class="cont lineline">                        {{item.content}} </div>
      <div class="time">       {{formatDate1(item.date)}} </div>

        </div>
      </div>
      <div class="but">
      <el-button-group>
        <el-button @click="goBack" type="primary" size="small" plain icon="el-icon-arrow-left">上一页</el-button>
        <el-button @click="goNext" type="primary" size="small" plain>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      </div>
      </div>
      <el-form ref="form"  label-width="40px">

        <el-form-item label="昵称">
          <el-input v-model="name"></el-input>
        </el-form-item>

        <el-form-item label="内容">
          <el-input v-model="content"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="Email"></el-input>
        </el-form-item>

      </el-form>

      <el-button class="but" v-on:click="submit1">提交</el-button>
    </div>

 </div>
</template>

<script>
import axios from 'axios';
import store from '../vuex/store';
export default {
  data () {
    return {
         name:'',
         content:'',
         Email:'',
         comments:[],
         curCom:[],
         comCount:0,
         cur:5,

    }
  },
  methods:{
    goBack(){
      if(this.cur<=5){

      }else{
      this.curCom=this.comments.slice(this.cur-10,this.cur-5);
      this.cur-=5;

      }
    },
    goNext(){
      if(this.cur>=this.comCount){

      }else{
        if(this.cur+5>this.count){
        this.curCom=this.comments.slice(this.cur,this.count);
        this.cur+=5;

        }else{
        this.curCom=this.comments.slice(this.cur,this.cur+=5);
        }
      }
    },
    getMessage(){
      axios.get('/message/getMessage').then((res)=>{
       this.comCount=res.data.result.count;
       this.comments=res.data.result.list;
       this.curCom=this.comments.slice(0,5);
       this.$store.commit('setMessage',res.data.result);
      })
   },
   formatDate1(date){
     return date.slice(4,25)
   },
    submit1(){
      axios.post("/message/addMessage",{
      name:this.name,
      Email:this.Email,
      content:this.content,
    }).then((res)=>{
      this.getMessage();
      this.name="";
      this.Email="";
      this.content ="";
    })
  },

  },
  mounted(){
    this.getMessage();
  },
  computed:{
    getMsg(){
      return this.curCom;
    }
  },

  components: {

  }
}
</script>

<style lang="css">
.but{
  text-align: center;
  margin-bottom: 20px;
}
.cont{
  padding:7px 0px 0px 10px;
  color:#909399;
  font-size: 15px;
  margin-bottom: 5px;
}
.nam{
color:#409EFF;
}
.time{
color:#C0C4CC;
font-size: 15px;
float: right;
}
.lineline{
border-bottom:1px dashed #606266;

}
.comments-one{
  padding:10px;
}
.comments-one::after {
    display: table;
    content: " ";
    clear: both;
}
</style>
