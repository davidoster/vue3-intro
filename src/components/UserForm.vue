<script setup>
    const fields = defineProps(['fields']);
    console.log("UserForm");
    console.log(fields[0]);
</script>

<template>
  <div>
    <h2>UserForm</h2>
    {{ fields.fields }}
    <!-- <div v-for="field in fields">
        <p>{{ field.label }}</p>
        <input :type="field.type" :placeholder="field.placeholder" :value="field.value" />
    </div> -->
    <!-- <button :type="fields.fields[0].formButton.submit" @click="fields.fields[0].formButton.function">{{ fields[0].formButton.value }}</button> -->
  </div>
</template>

<style scoped>
</style>
