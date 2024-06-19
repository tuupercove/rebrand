<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <slot />

    <h1>Home Page</h1>
    <h2>Collacted</h2>
    <UButton color="purple" variant="soft">
      <ULink to="/ind">Next page</ULink>
    </UButton>

    <!--<h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>-->
  </div>
</template>
