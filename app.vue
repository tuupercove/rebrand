<template>
  <link rel="stylesheet" href="./assets/css/tailwind.css">
  <link rel="stylesheet" href="./assets/css/main.css">
  <div class="h-screen">
    <!-- <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    ></div> -->

    <NuxtLayout>
      <!-- <NuxtLoadingIndicator color="light-blue" errorColor="red" /> -->
      <NuxtLoadingBar :duration="1000" />
      <ul>
        <li v-for="page of pages">
          <NuxtLink :to="page">{{ page }}</NuxtLink>
        </li>
      </ul>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script lang="ts" setup>
const pages = ['/', '/ind'];

//const nuxtApp = useNuxtApp();
//const loading = ref(false);
//nuxtApp.hook("page:start", () => {
//  loading.value = true;
//});
//nuxtApp.hook("page:finish", () => {
//  loading.value = false;
//})

// const props = useLoadingIndicator();

// const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
//    duration: props.duration,
//    throttle: props.throttle,
//    estimatedProgress: props.estimatedProgress
// })
</script>