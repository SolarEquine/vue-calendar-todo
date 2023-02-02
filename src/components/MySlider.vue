<template>
    <div @click="changeMode('year')" class="button">Год</div>
    <div @click="changeMode('month')" class="button">Месяц</div>
    <div @click="changeMode('day')" class="button">День</div>
    <div class="slider">
        <div class="slider_controls">
            <div @click="changeTime(-1)" class="controls_prev">Prev</div>
            <div @click="changeTime(1)" class="controls_next">Next</div>
        </div>
        <div class="slider_item">
            <my-month ref="month" v-if="mode==='month'"></my-month>
            <my-day ref="day" v-if="mode==='day'"></my-day>
            <my-year ref="yearComponent" v-if="mode==='year'"></my-year>
        </div>
    </div>
</template>

<script>

import MyYear from "./MyYear.vue"
import MyMonth from "./MyMonth.vue"
import MyDay from "./MyDay.vue"

export default{
    components:{
        MyYear,
        MyMonth,
        MyDay
    },
    data(){
        return{
            mode: "day",
        }
    },
    methods:{
        changeMode(newMode){
            this.mode = newMode;
        },
        changeTime(direction){
            this.$refs.yearComponent.changeTime(direction);
        }
    }
}
</script>

<style scoped>
.slider{
    padding: 30px;
    width: 800px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
}
.slider_item{
    width: 80%;
    height: 100%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px;
}
.slider_controls{
    position: absolute;
    width: 100%;
    top: 50%;
}

.slider_controls div{
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    padding: 30px;
}
.controls_prev{
    position: absolute;
    left: -10%;
}
.controls_next{
    position: absolute;
    right: -10%;
}
.button{
    border: 1px solid black;
    padding: 10px;
    height: fit-content;
}
</style>