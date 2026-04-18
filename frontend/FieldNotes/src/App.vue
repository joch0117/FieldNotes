<template>
  <div class="app">
  <AppHeader />
  <main>
  <router-view>

  </router-view>
  </main>
  <app-footer />
  </div>
</template>
<style scoped>
  .app{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main{
    padding: 2rem;
    flex: 1;
  }
</style>
<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
