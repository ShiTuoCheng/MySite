<template>
  <footer class="footer">
     <div class="wrapper">
       <div class="timing">{{currentTime}}</div>
       <div class="weatherDiv">{{location}} | {{weatherState}} | {{weatherTemp}}</div>
       <div class="content">
         <span>Powered by </span>
         <img src="../assets/logo.png">
       </div>
     </div>
  </footer>
</template>

<script>
import $ from 'jquery';
import Vue from 'vue';

export default{
  name: 'footer',
  data(){
    return{
      currentTime: '',
      ip: '',
      location: '位置',
      weatherState: '天气状态',
      weatherTemp: '目前温度'
    }
  },

  computed: {
    
  },

  watch: {
    ip: {
      handler: function() {
        $.getJSON("https://free-api.heweather.com/v5/now?city="+this.ip+"&key=56cb41b979f944b58c96e98c457a2f5b", (data) => {
          this.location = data.HeWeather5[0].basic.city;
          this.weatherState = data.HeWeather5[0].now.cond.txt;
          this.weatherTemp = data.HeWeather5[0].now.tmp + '℃';
        });
      },
      deep: true
    }
  },

  created() {
    this.timer();
    setInterval(this.timer, 1000);
    this.getIpAddress();
  },

  mounted() {
  },

  methods: {

    timer(){

      let date = new Date();

      this.currentTime = date.getFullYear()+ "年" + formateNum(date.getMonth()+1)+ "月" + formateNum(date.getDate()) + "日" + " 星期" + formateDay(date.getDay()) + " " + formateNum(date.getHours()) + ":" + formateNum(date.getMinutes()) + ":" + formateNum(date.getSeconds());

      date = null; //gc

      function formateNum(num){
        if (num < 10){

          return "0" + num;
        }else{
          
          return num;
        }
      };

      function formateDay(day){
        if (typeof day  === "number") {
          if (day === 1){
            return "一";
          }else if(day === 2){
            return "二";
          }else if(day === 3){
            return "三";
          }else if(day === 4){
            return "四";
          }else if(day === 5){
            return "五";
          }else if(day === 6){
            return "六";
          }else if(day === 7){
            return "七";
          }
        }
      };
    },

    getIpAddress() {
      $.getJSON("http://jsonip.com/?callback=?", (data) => {
        this.ip = data.ip;
        return this.ip;
      });
    }
  }
}

</script>

<style lang="less" scoped>
footer{

  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #333;
  div.wrapper{

    width: 1000px;
    margin: 0 auto;
    position: relative;

    div.timing{
      color: #ffffff;
      position:absolute;
      top: 20px;
      left: 0;
      display: inline-block;
    }

    div.weatherDiv{
      color: #ffffff;
      display:inline-block;
      position: absolute;
      left: 50%;
      top: 20px;
    }

    div.content{

      float: right;
      position: relative;
      img{

        width: 20px;
        height: 20px;
        margin-top: 20px;
        float: right;
        display: inline-block;
      }

      span{

        position: absolute;
        color: #ffffff;
        top: 20px;
        right: 0;
        width: 100px;
        margin-right: 20px;
      }
    }
  }
}
</style>
