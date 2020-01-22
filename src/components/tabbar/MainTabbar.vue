<template>
  <tabbar>
    <tabbar-item path="/home" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe6ce;</i>
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe7f8;</i>
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe600;</i>
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="#FF507B">
      <i slot="item-icon" class="iconfont">&#xe699;</i>
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from './tabbar'
import TabbarItem from './tabberItem'
export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>