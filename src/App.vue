<template>
<div name="App">
  <div class="slider">
    <div @click="decreaseMonth" class="slider_btn btn-prev">Prev</div>
    <div @click="increaseMonth" class="slider_btn btn-next">Next</div>
    <div class="slider_date">{{ chosenYear }} {{ months[chosenMonth].name }}</div>
    <div class="slider_body">
      <my-month
        :chosenMonth="chosenMonth"
        :chosenYear="chosenYear"  
      ></my-month>
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
      chosenMonth: 0,
      chosenYear: 2023,
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
  height: 300px;
}

.slider_btn{
  position: absolute;
  top:50%;
  transform: translateY(-50%);

  cursor: pointer;

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}

.slider_body{
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
