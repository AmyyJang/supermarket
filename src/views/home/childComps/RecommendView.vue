<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div class="recommend-item-text">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        padding: 10px 0px;
        border-bottom: 8px solid #eee;
    }

    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
    }
    .recommend-item .recommend-item-text{
        font-size: 12px;
        margin-top: 6px;
    }
</style>