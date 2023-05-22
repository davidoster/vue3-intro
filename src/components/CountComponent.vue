<script setup>
    let counter = defineProps(['countValue']); // state.count <---- readonly v-bind, state.countValue.count v-model
    console.log(counter.countValue.count);
    function addToCount(i) {
        counter.countValue.count += i;
    }
</script>

<template>
    <div>
        <h2>CountComponent</h2>
        <p>{{ countValue.count }}</p> 
        <p>{{ counter.title }}</p>
        <button @click="addToCount(1)">Add 1</button>
    </div>
</template>

<style scoped>
</style>