<template>
  <div class="tab-control">
      <!-- 只是文字不一样的话，不用slot -->
      <div v-for="(item, index) in titles" :key="index" class="tab-control-item"
      :class="{active: index === currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            //将点击的index传出去给到home，然后home再根据你传的index再给你相应的显示数据
            this.$emit('tabClick' ,index)
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 14px;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item span{
        padding: 5px 3px;
    }
    .active span{
        color: var(--color-high-text);
        border-bottom: 3px solid var(--color-high-text);
    }
</style>