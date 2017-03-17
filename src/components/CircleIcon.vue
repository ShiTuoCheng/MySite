<template>
    <div class='outCircle'>
        <div class='innerCircle'></div>
    </div>
</template>

<script>
import $ from 'jquery'
    export default{
        data() {
            return{
                
            }
        },

        beforeMount() {

            //this.ligntning();
        },

        mounted() {
            //setInterval(this.lightning, 1000);
        }, 

        methods: {
            lightning() {
                $('div.innerCircle').fadeToggle(500);
            }
        }
    }
</script>

<style lang="less" scoped>
    div.outCircle{
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        position: relative;
        border-radius: 50%;
        display: inline-block;

        div.innerCircle{

            width: 20px;
            height: 20px;
            position: absolute;
            top: 15%;
            left: 15%;
            background-color: #000;
            border-radius: 50%;
            display: inline-block;
        }
    }
</style>