<template>
  <div class="wrapper" ref="aaa">
    <!-- .wrapper里面只能放一个元素，不能并列出现多个元素 -->
    <ul class="content">
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
      <li>hahaha</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "Category",
    data(){
      return {
        scroll: null
      }
    },
    created(){
      
    },
    //组件挂载后调用
    mounted(){
      // console.log(this.$refs.aaa);
       //console.log(document.querySelector('.wrapper'));
      this.scroll = new BScroll(document.querySelector('.wrapper'), {

      })
    }
}
</script>

<style scoped>
  .wrapper{
    height: 100px;
    background-color: rgb(181, 133, 228);
    overflow: hidden;
  }

</style>