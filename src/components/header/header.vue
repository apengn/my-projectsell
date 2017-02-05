<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar"><img width="64" height="64" :src="seller.avatar"/></div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}后到达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bullentin-wrapper" @click="showDetail">
      <span class="bullentin-title"></span>
      <span class="bullentin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img width="100%" height="100%" :src="seller.avatar"/>
    </div>
    <transition name="fade">
      <div class="detailShow" v-show="isShowDetail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="detail-title">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="supports-item" v-for="(item, index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="notice">
              <p class="notice-text">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star.vue'
  export default{
    components: {
      'star': star
    },
    props: {
      seller: {type: Object}
    },
    data(){
      return {
        isShowDetail: false
      }
    },
    methods: {
      showDetail(){
        this.isShowDetail = true;
      },
      hideDetail(){
        this.isShowDetail = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    color: #fff
    position relative
    overflow: hide
    background rgba(7, 17, 27, 0.6)
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size 0px
      position relative
      .avatar
        display inline-block
        vertical-align: top
        img
          border-radius 2px
      .content
        display: inline-block
        margin-left: 16px;
        font-size 14px
        .title
          margin 2px 0px 8px 0px
          .brand
            display inline-block
            width 30px
            vertical-align: top
            height 18px
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-bottom 10px
          line-height 12px
          font-weight 200px
          font-size 12px
        .supports
          margin 2px 0 8px 0
          .icon
            display inline-block
            width: 12px
            height: 12px
            background-size 12px 12px
            background-repeat no-repeat
            vertical-align top
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('decrease_1')
            &.special
              bg-image('special_1')
          .text
            font-size 10px
            line-height 12px
            vertical-align top

      .supports-count
        position absolute
        right 12px
        bottom 14px
        padding 0 10px
        height: 24px
        line-height 24px
        border-radius 20px
        background-color rgba(0, 0, 0, 0.2)
        .count
          font-size 10px
          text-align center
          vertical-align top
        .icon-keyboard_arrow_right
          font-size 10px
          margin-left 2px
          line-height 24px
    .bullentin-wrapper
      height 28px
      position relative
      line-height 28px
      padding: 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7, 17, 27, 0.2)
      .icon-keyboard_arrow_right
        position absolute
        right 10px
        top: 8px
        font-size 10px
      .bullentin-title
        display inline-block
        vertical-align top
        margin-top 8px
        width 22px
        height 12px
        bg-image('bulletin')
        background-size 22px 12px
        background-repeat no-repeat
      .bullentin-text
        vertical-align top
        margin 0 4px
        font-size 10px
    .background
      position absolute
      top: 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .fade-enter-active, .fade-leave-active {
      transition: opacity 1s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .detailShow
      position fixed
      overflow auto
      width 100%
      height 100%
      left 0
      top 0
      z-index 100
      filter blur(10px)
      background: rgba(7, 17, 27, 0.8)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .detail-title
            font-weight 700
            font-size 16px
            line-height 16px
            text-align center
          .star-wrapper
            margin-top 18px
            padding: 2px 0
            text-align center
          .title
            display flex
            margin 30px auto 24px auto
            width 95%
            .line
              position relative
              flex 1
              top -6px
              border-bottom 1px solid rgba(255, 255, 255, 0.2)
            .text
              font-size 20px
              padding 0 10px
              font-weight 100
          .supports
            margin 10px auto 0 auto
            width 80%
            .supports-item
              padding 0 12px
              margin-bottom 12px
              font-size 0
              &.last-child
                margin-bottom 0
              .text
                font-size 12px
                text-align center
                line-height: 16px
                vertical-align top
              .icon
                display inline-block
                width: 16px
                margin-right 6px
                height: 16px
                background-size 16px 16px
                background-repeat no-repeat
                vertical-align top
                &.decrease
                  bg-image('decrease_1')
                &.discount
                  bg-image('discount_1')
                &.guarantee
                  bg-image('guarantee_1')
                &.invoice
                  bg-image('decrease_1')
                &.special
                  bg-image('special_1')
          .notice
            width: 80%
            margin: 0 auto
            .notice-text
              font-size: 12px
              padding: 0 12px
              line-height: 24px
      .detail-close
        position relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear both
        font-size 32px


</style>
