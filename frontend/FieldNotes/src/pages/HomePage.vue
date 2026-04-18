<template>
  <section class="home">
    <HeroSection />
    <HeroActions />
    <FeatureList />
  </section>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import HeroActions from '../components/home/HeroActions.vue'
import FeatureList from '../components/home/FeatureList.vue'
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>