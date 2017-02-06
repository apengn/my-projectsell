<template>
  <div class="goods">
    <div class="goods-menu" v-if="goods">
      <ul>
        <li v-for="good in goods" class="menu-item">
          <span class="text border-1px">
            <span v-if="good.type>0" :class="classMap[good.type]" class="icon"></span><span
          >{{good.name}}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="goods-wrapper">
      <ul>
        <li v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="good-item border-1px">
              <div class="content">
                <div class="food_img">
                  <img :src="food.icon" width="56" height="56"/>
                </div>
                <div class="foods-des">
                  <span class="name">{{food.name}}</span>
                  <div class="description" v-show="food.description">
                    <span>{{food.description}}</span>
                  </div>
                  <div class="foods-des">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div>
                    <span class="price">¥{{food.price}}</span>
                    <span v-show="food.oldPrice" class="oldPrice">¥{{food.oldPrice}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScrol from 'better-scroll'
  const ERRO_OK = 0;
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        goods: []
      };
    },
    created (){
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
      this.$http.get('/api/goods').then((respones)=> {
        respones = respones.body;
        if (respones.erro === ERRO_OK) {
          this.goods = respones.data;
          console.log(respones.data);
        }
      }, (erro)=> {
        console.log(erro);
      })
    },
    methods: {
      initScroll()
      {
       this.men
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    position: absolute
    display: flex
    top: 182px
    bottom 46px;
    /*overflow hidden*/
    .goods-menu
      flex: 0 0 80px
      width: 80px
      background: #f3f4f5
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        .text
          width: 56px
          vertical-align: middle
          font-size: 12px
          display: table-cell
          border-1px(rgba(7, 17, 27, 0.2))
          .icon
            display inline-block
            width: 12px
            margin-right 2px
            height: 12px
            background-size 12px 12px
            background-repeat no-repeat
            vertical-align top
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('decrease_3')
            &.special
              bg-image('special_3')

    .goods-wrapper
      flex: 1
      .title
        font-size: 12px
        color: rgb(147, 153, 159)
        line-height: 52px
        padding: 0 0 0 14px
        background: #EFE5E5
      .good-item
        border-1px(rgba(7, 17, 27, 0.2))
        margin 15px
        &:last-child
          border-none()
          padding-bottom: 0px
        .content
          display flex
          padding-bottom: 5px

          .food_img
            flex: 0, 0 56px
            width: 56px
            margin-right: 10px
          .foods-des
            flex: 1
            .name
              font-size: 12px
              color: black
              line-height: 12px
              font-weight: 500
            .description, .foods-des
              font-size: 10px
              color: grey
              padding-top: 4px
            .price
              color: red
              font-size: 14px
              line-height: 24px
              font-weight: bold
            .oldPrice
              font-size: 10px
              color: grey
              font-weight: bold
              text-decoration line-through
</style>
