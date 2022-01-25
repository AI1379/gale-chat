<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    <div>Test Element+</div>
        <el-button v-on:click="count++">Click times: {{ count }}</el-button>
  </div>
</template>

<style scoped>

</style>
