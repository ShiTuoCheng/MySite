<template>
    <section class="wrapper">
    </section>
</template>

<script>
    export default {
        components:{

        },

        mounted() {
            this.init();
        },

        methods: {
            init() {
                this.$store.dispatch('setArticleDetail', false);
            }
        }
    }
</script>

<style lang="less">
@import "../css/common.less";
section.wrapper{
    width: 100%;

}
</style>
