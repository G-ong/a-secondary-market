<template>
<div>
  <Navigation/>
  <router-view></router-view>
  </div>
</template>
<script>

import Navigation from './components/navigation.vue'
export default {
  name: 'App',
  components:{
    Navigation
  }
}
</script>

