<template>
    <div>
        {{ year }}
    </div>
</template>

<script>
export default{
    data(){
        return{
            year: 2023
        }
    },
    methods:{
        changeTime(direction){
            this.year +=direction
        }
    },
    mounted(){
        this.year = new Date(this.$store.state.currDate).getFullYear()
    }
}
</script>