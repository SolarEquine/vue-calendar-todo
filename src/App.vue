<template>
<div>
  <button @click="createCalendar">Создать календарь</button>
  <select name="monthSelect" id="monthSelect" v-model="chosenMonth">
    <option v-for="option in monthOptions" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
  <input type="text" name="yearSelect" v-model="chosenYear">
  <div class="month">
    <div class="week"
      v-for="week in month"
      :key="week"><div class="day" :class="{ 'empty': day==='' }" v-for="day in week" :key="day"><div :class="{'dayNumber': day!=''}">{{day}}</div></div></div>
  </div>

</div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      month:[],
      monthOptions:[
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
      chosenYear: 0,
    }
  },
  methods: {
    createMonth(days, startDay){
      let createdMonth = [];
      let week=[];
      for (let j=1; j<=startDay; j++){
        week.push("");
      }
      for(let i=1; i<=days; i++){
        week.push(i);
        if(week.length===7 || i===days){
          createdMonth.push(week);
          week=[]
        }
      }
      return createdMonth
    },
    createCalendar(){
      let days = new Date(this.chosenYear, this.chosenMonth+1, 0).getDate();
      let startDay = new Date(this.chosenYear, this.chosenMonth, 1).getDay();

      this.month = this.createMonth(days, startDay);
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

.month{
  display: flex;
  flex-direction: column;
}

.week{
  display: flex;
  flex-direction: row;
  margin-bottom: 1px;
}

.day{
  width: 50px;
  height: 50px;
  position: relative;
  border: 1px solid black;
  margin-right: 1px;
  vertical-align: middle;
}

.dayNumber{
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

.day:hover .dayNumber{
  background-color: #a7e7e9;
  color: white;
  border-radius: 50%;;
}

.day:nth-child(6), .day:nth-child(7){
  color: red;
  border: 1px red solid;
}

.day.empty{
  border: 0px;
}

</style>
