<!--
@author: pengjia
@date: 2020/12/14
@description:
-->
<template>
  <div class="wrapper">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse' : collapse}">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vSidebar from './Sidebar'
  import vTags from './Tags'
  import bus from "./bus";
  export default {
    name: "Home",
    data() {
      return {
        tagList: [],
        collapse: false
      }
    },
    components: {
      vHeader,
      vSidebar,
      vTags
    },
    created() {
      bus.$on('collapse-content',msg => {
        this.collapse = msg
      });
      //只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了
      bus.$on('tags',msg => {
        let arr = []
        for (let i = 0,len = msg.length;i < len;i++) {
          msg[i].name && arr.push(msg[i].name)
        }
        this.tagList = arr
      })
    }
  }
</script>

<style scoped>

</style>
