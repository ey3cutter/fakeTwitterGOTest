<template>
  <div id="app" class="min-h-screen p-4">
    <Test />
  </div>
</template>

<script>
// import Chat from './components/Chat.vue';
import Test from './components/Test.vue';

export default {
  components: {
    Test,
  },
  data() {
    return {
      mounted: false
    }
  },
  mounted() {
    this.mounted = true
    console.log('App mounted!')
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-100;
}
</style>
