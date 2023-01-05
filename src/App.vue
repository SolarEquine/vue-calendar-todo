<template>
<div name="App">
  <div class="date">{{ chosenYear }} {{ months[chosenMonth].name }}</div>
  <div class="slider">
    <div @click="slideToRight" class="slider_btn btn-prev">Prev</div>
    <div @click="slideToLeft" class="slider_btn btn-next">Next</div>
    <div class="slider_wrapper">
      <div class="weekdays">
      <div class="weekday" v-for="day in days" :key="day.value"><div class="day_name">{{ day.name }}</div></div>
    </div>
      <div class="slider_body">
        <div class="slider_item">      <my-month
          :chosenMonth="chosenMonth-1"
          :chosenYear="chosenYear"
        ></my-month></div>
        <div class="slider_item">      <my-month
          :chosenMonth="chosenMonth"
          :chosenYear="chosenYear"
        ></my-month></div>
        <div class="slider_item">      <my-month
          :chosenMonth="chosenMonth+1"
          :chosenYear="chosenYear"
        ></my-month></div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import MyMonth from "./components/MyMonth.vue" 


export default {
  components: { MyMonth },
  name: 'App',
  data(){
    return{
      months:[
        {value: 0, name: "Январь"},
        {value: 1, name: "Февраль"},
        {value: 2, name: "Март"},
        {value: 3, name: "Апрель"},
        {value: 4, name: "Май"},
        {value: 5, name: "Июнь"},
        {value: 6, name: "Июль"},
        {value: 7, name: "Август"},
        {value: 8, name: "Сентябрь"},
        {value: 9, name: "Октябрь"},
        {value: 10, name: "Ноябрь"},
        {value: 11, name: "Декабрь"},
      ],
      days: [
              {value: 0, name:"Пн"},
              {value: 0, name:"Вт"},
              {value: 0, name:"Ср"},
              {value: 0, name:"Чт"},
              {value: 0, name:"Пт"},
              {value: 0, name:"Сб"},
              {value: 0, name:"Вс"},
            ],
      chosenMonth: 0,
      chosenYear: 2023,
      direction: 0,
    }
  },
  methods: {
    decreaseMonth(){
      this.chosenMonth -=1;
      if(this.chosenMonth<0){
        this.chosenYear-=1;
        this.chosenMonth=11;
      }
    },
    increaseMonth(){
      this.chosenMonth +=1;
      if(this.chosenMonth>11){
        this.chosenYear+=1;
        this.chosenMonth=0;
      }
    },

    rerenderSlider(){
      let sliderBody = document.querySelector(".slider_body");
      sliderBody.style.transition = "none";
      if(this.direction===1){
        this.increaseMonth();
      }
      else if(this.direction===-1){
        this.decreaseMonth();
      }
      sliderBody.style.transform = "translateX(-100%)";
      setTimeout(()=>{
          sliderBody.style.transition = ".2s linear";
        }, 1)
    },

    slideToLeft(){
      let sliderBody = document.querySelector(".slider_body");
      this.direction = 1;
      sliderBody.addEventListener("transitionend", this.rerenderSlider);
      sliderBody.style.transform = "translateX(-200%)";

    },
    slideToRight(){
      let sliderBody = document.querySelector(".slider_body");
      this.direction = -1;
      sliderBody.addEventListener("transitionend", this.rerenderSlider);
      sliderBody.style.transform = "translateX(0%)";
    }
  },
  mounted(){
    
  },
  watch:{

  }
}

</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.slider{
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
}

.slider_btn{
  position: absolute;
  top:50%;
  transform: translateY(-50%);

  cursor: pointer;

  z-index: 1000;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}

.slider_wrapper{
  border: 1px solid black;
  width: 90%;
  overflow: hidden;
}

.weekdays{
  display: flex;
  justify-content: center;
}

.weekday{
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid black;
  margin-right: 1px;
  vertical-align: middle;
  margin-bottom: 1px;
}

.day_name{
  display: inline-block;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
}

.slider_body{
  display: flex;
  transform: translateX(-100%);
  transition: .2s linear;
}

.slider_item{
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.btn-prev{
  left: 0;
}

.btn-next{
  right: 0;
}


</style>
