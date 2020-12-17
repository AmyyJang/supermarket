<template>
<!-- 所有的item都展示同一个图片，同一个文字 -->
    <div class="tab-bar-item" @click="itemClick" >
      <!-- 插槽都用div包起来，这样改变插槽样式的时候不会改变到替换的内容 -->
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
        
      <div :style="activeColor">
          <slot name="item-text"></slot> 
      </div>
       
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default: 'red'
      }
  },
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      //动态绑定属性
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
}
</script>

<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  
}

  
</style>