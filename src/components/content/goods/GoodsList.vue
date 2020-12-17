<template>
  <div class="goods">
      <goods-list-item :goodsItem="item" v-for="(item, index) in goods" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  
    name: "GoodsList",
    components: { GoodsListItem },
    props: {
        goods: {
            type: Array,
            defalut() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
}

</style>