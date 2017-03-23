<template>
    <section class="aboutMe">
        <div class="wrapper">
            <ul class="aboutMeList">{{initAnimation()}}
                <li v-for="(item, index) in liItems" @mouseover="lineReady(index)" @mouseout="lineReady(index)" v-on:click="gotoLink(index)">
                    <div>
                        <v-circleIcon class="circle" :style = "circleStyle"></v-circleIcon>
                        <div class='line' v-bind:class = "{active : item.loaded}"></div> 
                        <span>{{item.title}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import vCircleIcon from "../components/CircleIcon"
import $ from "jquery"
export default{

    components: {
        vCircleIcon
    },

    data() {
        return{
            circleStyle: {
                'margin-top': '100px',
                'cursor' : 'pointer'
            },

            liItems: [
                {title: 'Github', loaded: false, url: 'https://github.com/ShiTuoCheng'},
                {title: 'Sina Weibo', loaded: false, url: 'http://weibo.com/1838812817/profile?topnav=1&wvr=6'},
                {title: 'Google+', loaded: false, url: 'https://plus.google.com/u/0/103673313462981488703'}
            ]
        }
    },

    created() {
        
    },

    mounted() {
        
    },

    methods: {

        initAnimation() {
            setInterval(function(){
                $(".circle").css({"-webkit-animation":"twinkling 2s infinite 0.9s ease-in-out alternate","animation":"twinkling 2s infinite 0.9s ease-in-out alternate"});  
            }, 1000);
        },
        lineReady(index) {
            this.liItems[index].loaded = ! this.liItems[index].loaded;
        },

        gotoLink(index) {
            window.location.href = this.liItems[index].url;
        }
    }
}
    
</script>

<style lang="less" scoped>

@import '../css/common.less';

section.aboutMe{

    width: 100%;
    padding-top: 70px;
    padding-bottom: 50px;

    div.wrapper{
        width: 1200px;
        margin: 0 auto;
        position: relative;

        ul.aboutMeList{

            list-style-type:none;
            text-align: left;
            margin-left: 40%;

            li{

                position: relative;
                div.line{

                    width: 0px;
                    display: inline-block;
                    height: 2px;
                    background-color: #000;
                    margin-bottom: 15px;
                    margin-left: 30px;
                    transition:width 1s;
                     -moz-transition: width 1s; /* Firefox 4 */
                    -webkit-transition: width 1s; /* Safari 和 Chrome */
                     -o-transition: width 1s; /* Opera */
                }

                div.active{
                    width: 100px;
                }

                span{
                    position: absolute;
                    left: 200px;
                    top: 105px;
                }
            }
        }
    }
}

@-webkit-keyframes twinkling{   /*透明度由0到1*/  
    0%{  
        opacity:0.1;                /*透明度为0*/  
    }  
    100%{  
        opacity:1;              /*透明度为1*/  
    }  
}  
@keyframes twinkling{   /*透明度由0到1*/  
    0%{  
        opacity:0.1;                /*透明度为0*/  
    }  
    100%{  
        opacity:1;              /*透明度为1*/  
    }  
} 
    
</style>