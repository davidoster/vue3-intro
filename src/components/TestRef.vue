<script setup>
    import { ref, onMounted, onUpdated, onActivated } from 'vue';
    import UserForm from './UserForm.vue';

    const el = ref();
    let fields1;

    onActivated(() => {
        console.log(el.value);
        fields1 = 2000;
    });
</script>

<template>
    <div><UserForm :fields='fields1' /></div>
</template>