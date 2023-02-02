<template>
    <div>
        {{day}}
    </div>
</template>

<script>

export default{
    data(){
        return{
            day: 1
        }
    },
    mounted(){
        this.day = new Date(this.$store.state.currDate).getDate();
    }
}
</script>