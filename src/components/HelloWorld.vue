<script setup>
import { ref, onMounted } from 'vue'
import { defineProps } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['update:count'])


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

let countElement;

onMounted(() => {
  // countElement.value = 100;
  countElement = props.count.valueOf();
  console.log(`countElement: ${countElement}`);
})

function increaseCount() {
  console.log(`countElement: ${countElement}}`);
  countElement++;
  props.count = countElement;
  emit('update:count', props.count);
  console.log(`props.count: ${props.count.valueOf()}, countElement: ${countElement}}`);
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">HW - Count: {{ props.count }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <button v-on:click="$emit('countEventIncrease')">Increase Count</button>
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
