<template>
  <div class="month">
    <div class="week"
      v-for="week in month"
      :key="week"><div class="day" :class="{ 'empty': day==='' }" v-for="day in week" :key="day"><div :class="{'dayNumber': day!=''}">{{day}}</div></div></div>
  </div>
</template>

<script>
export default {
  name: "my-month",
    data(){
        return{
            month:[],
        }
    },
    props:{
        chosenMonth: {
            type: Number,
            required: true
        },
        chosenYear: {
            type: Number,
            required: true
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
            let startDay = new Date(this.chosenYear-1, this.chosenMonth, 1).getDay();
            this.month = this.createMonth(days, startDay);
        }
    },

    mounted(){
      this.createCalendar();
    },

    watch:{
      chosenYear(){
        this.createCalendar();
      },
      chosenMonth(){
        this.createCalendar();
      }
    }
}
</script>

<style scoped>
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