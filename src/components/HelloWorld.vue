<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'


const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  count: {
    type: Number,
    default: 0
  }
})
function increaseCount() {
console.log(props.count);
props.count++;
console.log(props.count);
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} - {{ date }} - {{ count }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <button v-on:click="increaseCount">Increase Count</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
