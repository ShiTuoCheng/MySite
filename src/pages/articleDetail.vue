<template>
    <section class="articleDetail">
        <div class="wrapper">
            <p class="title">{{this.showTitle}}</p>
            <p class="content">{{this.showDetailContent}}</p>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'

export default{
    data() {
        return{
            title: ''
        }
    },

    created() {
        this.init();
    },

    mounted() {

    },

    computed: {
        ...mapGetters([
            'showTitle',
            'showDetailContent'
        ])
    },

    beforeDestroy() {
        this.after();
    },

    methods: {
        init() {
            this.$store.dispatch('setArticleDetail', true);
            console.log('save');
        },

        after() {
            this.$store.dispatch('setArticleDetail', false);
        }
    }
}
</script>

<style lang="less" scoped>
    section.articleDetail{
        padding: 90px 0 70px 0;
        width: 100%;

        div.wrapper{
            width: 1200px;
            margin: 0 auto;

            p.title{
                text-align: center;
                margin: 16px;
            }

            p.content{
                text-align: center;
                margin: 16px;
            }
        }
    }
</style>