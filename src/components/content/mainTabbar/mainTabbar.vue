<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!-- //activeColor="" -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home-selected.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/category-selected.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="item-icon" src="~assets/img/tabbar/shopping-cart.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopping-cart-selected.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-selected.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
               
<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'mainTabbar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
               
<style scoped>
</style>