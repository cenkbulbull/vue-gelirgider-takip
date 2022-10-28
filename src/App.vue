<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>

  </div>
</template>

<script>
  import Header from "./components/common/Header";
  import Footer from "./components/common/Footer";

  export default {
    components:{
      Header,
      Footer
    },
    created(){
      this.$store.dispatch("getChangeState")
    }
  }
</script>

<style>
 body {
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
html {
  scroll-behavior: smooth;
}
/*Transition Class */
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: all .3s ease;    
}
.fade-leave {

}
.fade-leave-active {
  transition: all .3s ease;
  opacity: 0;
}
</style>
