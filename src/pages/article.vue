<template>
    <section class='article'>
        <div class="wrapper">
            <ul class="articleList">
                <li v-for="(articleItem, index) in articleList">
                    <div class="backgroundDiv"></div>
                    <p class="title">{{articleItem.title}}</p>
                    <p class="content">{{articleItem.content}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
export default{
    data() {
        return{
            articleList: []
        }
    },

    created() {
        this.getArticleList();
    },

    updated() {
        this.initItem();
    },

    watch: {
        articleList: {
            handler: function() {

            },

            deep: true
        }
    },

    methods: {
        getArticleList() {
            
            $.getJSON("/static/falseData/falseData.html", (data) => {
            let i = 0;
            for(; i < data.articleList.length; i++){
                this.articleList.push(data.articleList[i]);
                }
            });
        },

        initItem() {
            let listNum = $('ul.articleList > li').length,
                i = 0;
                console.log(listNum);
            for(; i < listNum; i++){
                $('ul.articleList > li > div.backgroundDiv').eq(i).css('background', 'url('+this.articleList[i].imgUrl+')');
                console.log($('ul.articleList > li > div.backgroundDiv'));
                console.log(this.articleList[i].imgUrl);
                if(i % 2 !== 0){
                    $('ul.articleList > li').eq(i).addClass('last');
                }
            }
        }
    }
}
    
</script>

<style lang="less" scoped>

section.article{

    width: 100%;

    div.wrapper{

        width: 1200px;
        margin: 90px auto 70px auto;
        text-align: center;

        ul.articleList{

            list-style-type: none;

            li{
                width: 500px;
                height:500px;
                margin-bottom: 50px;
                margin-right: 100px;
                display: inline-block;
                box-shadow: 0 0 2px 0 #999;
                border-radius: 5px;
                cursor: pointer;

                &:hover{
                    box-shadow: 0 0 10px 0 #999;
                }

                div.backgroundDiv{
                    width: 400px;
                    height: 300px;
                    margin: 30px auto 20px auto;
                    background-size: cover !important;
                    background-position: center center !important;
                    background-repeat: no-repeat !important;
                }

                p.title{
                    height: 40px;
                    width: 480px;
                    overflow: hidden;
                    padding: 0 10px 0 10px;
                }

                p.content{
                    height: 90px;
                    width: 480px;
                    overflow: hidden;
                    padding: 0 10px 0 10px;
                }
            }

        }
    }
}

.last{
      margin-right: 0 !important; 
}

    
</style>