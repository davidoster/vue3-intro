

<script setup>
  import { ref, reactive } from 'vue'
  const state = reactive({ count: 0, title: 'Hello Vue 3' })

  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import CountComponent from './components/CountComponent.vue';
  import UserForm from './components/UserForm.vue';
  // const emit = defineEmits(['countEventIncrease'])


  const a = "Hello New World!";
  const b = 22;
  const divInner1 = "<p><span>Hello,</span><span>&nbsp;World!</span></p>";
  const countRef = ref(state.count);
  let dynamicId = "someId";
  let isButtonDisabled;
  let btnAttributes = {
    id: "btnAction1",
    disabled: false,
    class: "btn btn-primary",
    style: "background-color: red; color: white;",
    title: "This is a button",
    koukou: "someValue"
  }
  let date = new Date();
  console.log(isButtonDisabled);
  function c() {
    return `Hello New World! - b: ${b}`;
  }
  function myAlert(e,text) {
    // if(text) {
    //   alert(text);
    // } else {
    //   alert('You piece of brain master!!!');
    // }
    state.count++;
  }
  let fields = [];
  fields.push({
                formItems:  [
                              { label: "First Name", type: "text", placeholder: "John", value: "" }, 
                              { label: "Last Name", type: "text", placeholder: "Doe", value: "" }
                            ], 
                formName: "UserForm1", 
                formId: "UserForm1",
                formButton: { type: "submit", 
                              value: "Add New User",
                              function: () => { alert('You piece of brain master!!!'); }
                            }
              });
</script>

<template>
  <header>
    <h1>{{ state.title }}</h1>
    <h2><span>Count:&nbsp;</span>{{ state.count }}</h2>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" @countEventIncrease="myAlert" v-bind:date="date" v-bind:count="state.count"  /> -->
      <!-- <CountComponent :countValue="state" /> -->
      <UserForm :fields="fields" />
    </div>
  </header>

  <main>
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <!-- <div>{{ b = 11 + 18 }}</div> -->
    <div>{{ b  = 54 }}</div>
    <div>{{ b  = 10 }}</div>
    <div>{{ c() }}</div>
    <div v-html="divInner1"></div>
    <div :id="dynamicId">{{ dynamicId = "otherId" }}</div>
    <button v-bind="btnAttributes" v-on:click="myAlert">Button</button>
    <TheWelcome v-bind:count="state.count" />
  </main>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
