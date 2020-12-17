<template>
  <div id="home">

    <nav-bar class="home-nav">tab-control
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>
    <ul>
      <li>sss1</li>
      <li>sss2</li>
      <li>sss3</li>
      <li>sss4</li>
      <li>sss5</li>
      <li>sss6</li>
      <li>sss7</li>
      <li>sss8</li>
      <li>sss9</li>
      <li>sss10</li>
      <li>sss11</li>
      <li>sss12</li>
      <li>sss13</li>
      <li>sss14</li>
      <li>sss15</li>
      <li>sss16</li>
      <li>sss17</li>
      <li>sss18</li>
      <li>sss19</li>
      <li>sss20</li>
      <li>sss21</li>
      <li>sss22</li>
      <li>sss23</li>
      <li>sss24</li>
      <li>sss25</li>
      <li>sss26</li>
      <li>sss27</li>
      <li>sss28</li>
      <li>sss29</li>
      <li>sss30</li>
      <li>sss31</li>
      <li>sss32</li>
      <li>sss33</li>
      <li>sss34</li>
      <li>sss35</li>
      <li>sss36</li>
      <li>sss37</li>
      <li>sss38</li>
      <li>sss39</li>
      <li>sss40</li>
      <li>sss41</li>
      <li>sss42</li>
      <li>sss43</li>
      <li>sss44</li>
      <li>sss45</li>
      <li>sss46</li>
      <li>sss47</li>
      <li>sss48</li>
      <li>sss49</li>
      <li>sss50</li>
    </ul>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMultidata, getHomeGoods} from '@/network/home'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'




export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
        GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop':{page: 0,list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType:'pop'
      }
    },
    //组件创建完成之后，发送请求
    created(){
      //1请求多个数据
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    computed:{
      showGoods(){
        return this.goods[currentType].list
      }
    },
    methods: {
      //  事件监听相关的方法
      tabClick(index){
          console.log(index);
          switch (index) {
            case 0:
              this.currentType = 'pop'
              break;
            case 1:
              this.currentType = 'new'
              break;
            case 2:
              this.currentType = 'sell'
              break;
            default:
              break;
          }
      },
      // 网络请求的相关的方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      getHomeGoods(type){
        //最新的page是原来的page加1
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          //将res.data.list中的数据一个个取出来push到goods数组中
          this.goods[type].list.push(...res.data.list)
          //最后将page加1
          this.goods[type].page += 1
      })
      }
    }
    
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: var(--color-background);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control{
  /* 未达到44px时position为static
  达到44px时position为sticky */
  position: sticky;
  top: 44px;
}
</style>