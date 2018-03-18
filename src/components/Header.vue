<template>
  <div class="navHeader">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="handleSelect">

    <el-menu-item index="/article">首页</el-menu-item>
    <el-menu-item index="/admin" >博客管理</el-menu-item>

  </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',

    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    /*
      back1(){
        this.$router.push({path:'/article'});

      },
      */
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navHeader{
  top:0;
  left:0;
  position: fixed;
  width:100%;
  opacity: 0.8;
}

</style>
