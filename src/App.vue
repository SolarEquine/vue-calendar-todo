<template>
<div name="App">
  <select name="monthSelect" id="monthSelect" v-model="chosenMonth">
    <option v-for="option in monthOptions" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
  <input type="text"
        v-model="chosenYear"
        />
  <my-month
  ref="myMonth"
  :chosenMonth="chosenMonth"
  :chosenYear="chosenYear"  
  ></my-month>

</div>
</template>

<script>
import MyMonth from "./components/MyMonth.vue" 


export default {
  components: { MyMonth },
  name: 'App',
  data(){
    return{
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



</style>
