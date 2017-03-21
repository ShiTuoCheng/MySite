<template>
    <section class="developed">
        <div class="wrapper">
            <div class="developBoard">
                <p class="title">进行中</p>
                <ul>
                    <li v-for="(item, index) in developingItems" @mouseover="detailComeOver(index)" @mouseout="detailComeOut">
                        <p class="itemTitle">{{item.name}}</p>
                        <div class="itemProgress"></div>
                        <span class="progress">{{item.progress + "%"}}</span>
                    </li>
                </ul>
            </div>
            <div class="detailPanel">
                <p class="detailTitle"></p>
                <p class="detailContent"></p>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        data() {
            return{
                developingItems:[
                    {name: 'SWeather', progress: 45, detail: 'SWeather -----A Android Weather App\n 采用material design设计风格glide okhttp3分别作为图片加载和网络请求', screenshot:'../images/SWeather01'},
                    {name: 'MySite', progress: 35, detail:'原先的老项目重新开坑重构：推掉angular用vue.js重构', screenshot: ''},
                    {name: 'test', progress: 20, detail:'', screenshot: ''},
                    {name: '完成项目测试', progress: 100, detail:'', screenshot: ''}
                ]
            }
        },

        mounted() {
            this.initProgressBar();
        },

        methods:{
            initProgressBar() {

                let num = this.developingItems.length,
                    i = 0;

                 setTimeout(() => {
                        for(; i < num; i++){
                            var progress = this.developingItems[i].progress;
                            $('div.itemProgress').eq(i).css('width', this.developingItems[i].progress);

                            if (progress >= 30 && progress <= 60){
                                $('div.itemProgress').eq(i).css('background-color', "#FF9800");
                            }else if(progress > 60 && progress <= 100) {
                                $('div.itemProgress').eq(i).css('background-color', "#009688");
                            }
                     }
                 }, 500);
            },

            detailComeOver(index) {
                $('div.detailPanel').css('top', "90px");
                $('div.screenshot').css('background-image', 'url('+ this.developingItems[index].screenshot +')');
                $('p.detailTitle').html(this.developingItems[index].name);
                $('p.detailContent').html(this.developingItems[index].detail);
            },

            detailComeOut(){
                $('div.detailPanel').css('top', "-1200px");
            }
        }
    }
</script>

<style lang="less" scope>
    section.developed{

        width: 100%;
        div.wrapper{

            width: 1200px;
            margin: 0 auto;
            padding: 90px 0 60px 0;
            position: relative;

            div.developBoard{

                width: 300px;
                box-shadow: 0 0 2px 0 #999;
                display:inline-block;
                text-align:center;

                p.title{
                    font-size: 18px;
                    padding-top: 20px;
                }

                ul{

                    list-style-type: none;

                    li{

                        margin: 50px 10px 50px 10px;
                        cursor: pointer;
                        width: 300px;
                        text-align: left;
                        display: inline-block;
                        position: relative;

                        p.itemTitle{

                            width: 100px;
                            overflow: hidden;
                            text-align: left;
                            display: inline-block;
                        }

                        div.itemProgress{

                            width: 0;
                            height: 20px;
                            border-radius: 10px;
                            background-color: #F44336;
                            display: inline-block;
                            margin-left: 10px;
                            transition:width 1s;
                            -moz-transition: width 1s; /* Firefox 4 */
                            -webkit-transition: width 1s; /* Safari 和 Chrome */
                            -o-transition: width 1s; /* Opera */
                        }

                        span.progress{

                            position: absolute;
                            top: 0;
                            right: 20px;
                        }
                    }
                }
            }

             div.detailPanel{

                width: 800px;
                display:inline-block;
                height: 500px;
                box-shadow: 0 0 5px 0 #999;
                position: absolute;
                top:-1200px;
                right: 0;
                transition:top 1s;
                -moz-transition: top 1s; /* Firefox 4 */
                -webkit-transition: top 1s; /* Safari 和 Chrome */
                -o-transition: top 1s; /* Opera */

                p.detailTitle {
                    text-align: center;
                    margin-top: 50px;
                    font-size: 24px;
                }

                p.detailContent{

                    padding: 50px;
                    text-align: center;
                }
            }
        }
    }
</style>