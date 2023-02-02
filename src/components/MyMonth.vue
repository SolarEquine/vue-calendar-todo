<template>
    <div>
        {{ months[month].name }}
    </div>
</template>

<script>
export default{
    data(){
        return{
            month:0,
            months: [
                {name: "Январь"},
                {name: "Февраль"},
                {name: "Март"},
                {name: "Апрель"},
                {name: "Май"},
                {name: "Июнь"},
                {name: "Июль"},
                {name: "Август"},
                {name: "Сентябрь"},
                {name: "Октябрь"},
                {name: "Ноябрь"},
                {name: "Декабрь"},
            ]
        }

    },
    mounted(){
        this.month = new Date(this.$store.state.currDate).getMonth();
    }
}
</script>