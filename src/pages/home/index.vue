<template>
    <div class="home">
        <header class="g-header-container">
          <home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
        </header>
        <me-scroll
        :data="recommends"
        pullDown
        pullUp
        @pull-down="pullToRefresh"
        @pull-up="pullToLoadMore"
        @scroll-end="scrollEnd"
        @scroll="scroll"
        @pull-down-transition-end="pullDownTransitionEnd"
        ref="scroll"
        >
          <home-slider ref="slider"></home-slider>
          <home-nav></home-nav>
          <home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
        </me-scroll>
        <div class="g-backtop-container">
          <me-backtop :visible="isBacktopVisible" @backtop="backToTop"></me-backtop>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import MeBacktop from 'base/backtop';
  import HomeRecommend from './recommend';
  import MeScroll from 'base/scroll';
  import {HEADER_TRANSITION_HEIGHT} from './config';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSlider,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },
    methods: {
      // updateScroll() {},
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        console.log('下拉刷新');
        this.$refs.slider.update().then(end);
        // setTimeout(() => {
        //   console.log('下拉刷新');
        //   end();
        // }, 1000);
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err);
          }
          end();
          // 处理没有更多数据的情况
          // 禁止继续加载更多数据
          // 替换上拉时的loading，改为没有更多数据了
        });
        // setTimeout(() => {
        //   console.log('上拉刷新');
        //   end();
        // }, 1000);
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
