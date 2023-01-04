<template>
<div>
  <div>{{startingDay}}</div>
  <button class="btn" @click="increaseDays">+</button>
  <button class="btn" @click="decreaseDays">-</button>
  <select name="daySelect" id="daySelect" v-model="startingDay">
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
  <div class="month">
    <div class="week"
      v-for="week in month"
      :key="week"><div class="day" :class="{ 'empty': day==='' }" v-for="day in week" :key="day">{{day}}</div></div>
  </div>

</div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      month:[],
      daysInMonth: 0,
      startingDay: 1,
      options:[
        {value: 1, name:"Понедельник"},
        {value: 2, name:"Вторник"},
        {value: 3, name:"Среда"},
        {value: 4, name:"Четверг"},
        {value: 5, name:"Пятница"},
        {value: 6, name:"Суббота"},
        {value: 7, name:"Воскресенье"},
      ]
    }
  },
  methods: {
    increaseDays(){
      this.daysInMonth+=1;
    },
    decreaseDays(){
      this.daysInMonth-=1;
    },
    createMonth(days, startDay){
      let createdMonth = [];
      let week=[];
      for (let j=2; j<=startDay; j++){
        week.push("");
      }
      for(let i=1; i<=days; i++){
        week.push(i);
        if(week.length===7 || i===days){
          createdMonth.push(week);
          week=[]
        }
      }
      this.month = createdMonth;
    }
  },
  mounted(){
    this.createMonth(this.daysInMonth)
  },
  watch:{
    daysInMonth(){
      this.createMonth(this.daysInMonth, this.startingDay);
    }
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
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
  margin-right: 1px;
  vertical-align: middle;
}

.day:nth-child(6), .day:nth-child(7){
  color: red;
  border: 1px red solid;
}

.day.empty{
  border: 0px;
}

</style>
