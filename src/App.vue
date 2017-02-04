<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods" active-class="activity-link"><a class="tab-item-a">商家</a></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" active-class="activity-link"><a class="tab-item-a">评价</a></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" active-class="activity-link"><a class="tab-item-a">商品</a></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  const ERR_OK = 0;
  export default {
    data(){
      return {seller: {}}
    },
    created(){
      this.$http.get('/api/seller').then((response)=> {
        response = response.body;
        if (response.erro === ERR_OK) {
          console.log(response.data);
          this.seller = response.data;
        }
      }, (response)=> {
        console.log(response.body);
      })
    },
    name: 'app',
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"
  .tab
    display: flex
    flex-direction: row
    width: 100%
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      .activity-link
        color: blue
      & > a
        display: block
        font-size: 20px
        text-decoration: none
        color: red
</style>
