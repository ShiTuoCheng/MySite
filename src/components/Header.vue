<template>
  <header class="header">
    <div class="wrapper">
      <div class="avatarDiv">
      </div>
      <span v-on:click="godClick">Welcome to my world!!</span>
      <input v-show="show" class="userInput" placeholder = 'godName' v-model="name"></input>
      <input v-show="show" class="confirmButton" type='button' text='Confirm' v-on:click="confirmGod"></input>
      <ul>
       <router-link to="/index" tag="li">主页<div class="selectBar"></div></router-link>
       <router-link to="/article" tag="li">我的文章<div class="selectBar"></div></router-link>
       <router-link to="/post" tag="li">开发项目~<div class="selectBar"></div></router-link>
       <router-link to="/aboutMe" tag="li">关于我<div class="selectBar"></div></router-link>
      </ul>
    </div>
  </header>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'header',
  data () {
    return {
      scrolled: false,
      show: false,
      name: '',
      godName: 'Shituocheng'
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      var before = $(window).scrollTop();

            if (before > 40) {

                $('header').css('box-shadow', '0px 0px 10px 0 #999');
            }else{

                $('header').css('box-shadow','0px 0px 5px 0px #999');
            }
		},

    godClick() {
      this.show =! this.show;
    },

    confirmGod() {

      (this.name === this.godName) ? alert('you\'ve been in God mode') : alert('name is incorrect');
    }
  }
}
</script>

<style scoped lang="less">

header.header{
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0px 0px 5px 0px #999;

  div.wrapper{
    width: 1000px;
    min-width: 1000px;
    height: 70px;
    margin: 0 auto;
    position: relative;

    input.userInput{
      border: 1px solid #333;
      margin-left: 20px;
    }

    input.confirmButton{
      width: 30px;
    }

    div.avatarDiv{

      width: 70px;
      height: 70px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../assets/author_avatar.png);
      display: inline-block;
      border-radius: 50%;
      border: 1px solid #dfdfdf;
      position: absolute;
      left: 0;
      top: 0;
    }

    span{
        margin-left: 100px;
        height: 70px;
        line-height: 70px;
        cursor: pointer;
      }

    ul {
      position: absolute;
      height: 70px;
      right: 0;
      top: 0;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      height: 70px;
      line-height: 70px;
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;

      div.selectBar:extend(.animationWidth){
          text-align: center;
          height: 2px;
          margin: 0 auto;
          width:0;
          background-color: #ec5f69;
        }

      &.router-link-active{
        color:  #ec5f69;
        div.selectBar{
          width: 100%;
        }
      }

      &:hover{
        color:  #ec5f69;
        opacity: 0.5;

        div.selectBar{
          width: 100%;
        }
      }

      &:active{
        color: 	#ec5f69;
        opacity: 0.5;
      }
    }
  }
}
.animationWidth{

  transition:width 1s;
  -moz-transition: width 1s; /* Firefox 4 */
  -webkit-transition: width 1s; /* Safari 和 Chrome */
  -o-transition: width 1s; /* Opera */
}

</style>
