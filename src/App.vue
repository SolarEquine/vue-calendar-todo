<template>
<div name="App" class="App">
  <my-slider></my-slider>
</div>
</template>

<script>
import MySlider from "./components/MySlider.vue"

export default{
components:{MySlider},
mounted(){
  let timer = setInterval(()=>{
    this.$store.commit('updateDate')
  }, 1000)
}

}

</script>

<style>

*{
  margin: 0;
  padding: 0;
}

.App{
  display: flex;
  justify-content: center;
}



</style>
