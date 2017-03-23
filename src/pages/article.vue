<template>
    <section class='article'>
        <div class="wrapper">
            <ul class="articleList">
                <li v-for="(articleItem, index) in articleList" @click="itemClick(index)">
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
import { mapGetters } from 'vuex'
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

    mounted(){
        
    },

    watch: {
        articleList: {
            handler: function() {

            },

            deep: true
        }
    },

    computed: {
        ...mapGetters([
            'showTitle'
        ])
    },

    methods: {

        itemClick(index) {
            this.$store.dispatch('saveTitle', this.articleList[index].title);
            this.$store.dispatch('saveDetail', this.articleList[index].content);
            this.$router.replace('/articleDetail');
            console.log(this.showTitle);
        },

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
            for(; i < listNum; i++){
                $('ul.articleList > li > div.backgroundDiv').eq(i).css('background', 'url('+this.articleList[i].imgUrl+')');
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
                box-shadow: 0 0 1px 0 #999;
                transition:box-shadow 1s;
                -moz-transition: box-shadow 1s; /* Firefox 4 */
                -webkit-transition: box-shadow 1s; /* Safari 和 Chrome */
                -o-transition: box-shadow 1s; /* Opera */
                border-radius: 5px;
                cursor: pointer;

                &:hover{
                    box-shadow: 0 0 15px 0 #999;
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