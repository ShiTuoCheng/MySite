<template>
    <section class="developed">
        <div class="wrapper">
            <div class="developBoard">
                <p class="title">进行中</p>
                <ul>
                    <li v-for="(item, index) in developingItems">
                        <p class="itemTitle">{{item.name}}</p>
                        <div class="itemProgress"></div>
                        <span class="progress">{{item.progress + "%"}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        data() {
            return{
                developingItems:[
                    {name: 'SWeather', progress: 45},
                    {name: 'MySite', progress: 25},
                    {name: 'test', progress: 70},
                    {name: '完成项目测试', progress: 100}
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

            div.developBoard{

                width: 300px;
                box-shadow: 0 0 2px 0 #999;
                text-align:center;

                p.title{
                    font-size: 18px;
                    padding-top: 20px;
                }

                ul{

                    list-style-type: none;

                    li{

                        margin: 50px 10px 50px 10px;
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
        }
    }
</style>