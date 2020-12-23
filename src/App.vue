<template>
   <Baklava></Baklava>
</template>

<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import System from './System.vue';

   @Component({
      components: {
         Baklava: System,
      },
   })
   export default class App extends Vue {}
</script>
