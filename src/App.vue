<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  const a = "Hello New World!";
  const b = 22;
  const divInner1 = "<p><span>Hello,</span><span>&nbsp;World!</span></p>";
  let dynamicId = "someId";
  let isButtonDisabled;
  console.log(isButtonDisabled);
  function c() {
    return `Hello New World! - b: ${b}`;
  }
  function myAlert(e,text) {
    if(text) {
      alert(text);
    } else {
      alert('You piece of brain master!!!');
    }
  }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
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
    <button :disabled="isButtonDisabled" v-on:click="myAlert">Button</button>
    <TheWelcome />
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
