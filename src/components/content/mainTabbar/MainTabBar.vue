<template>
  
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item-icon" src="~@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/home-fill.svg" alt="">
        <div slot="item-text" >首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="~@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/category-fill.svg" alt="">
        <div slot="item-text" >分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="~@/assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/cart-fill.svg" alt="">
        <div slot="item-text" >购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-icon" src="~@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~@/assets/img/tabbar/profile-fill.svg" alt="">
        <div slot="item-text" >我的</div>
      </tab-bar-item>
    </tab-bar>
    
</template>

<script>

// 因为有了别名，所以可以直接写别名，不用再找前面的路径
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>