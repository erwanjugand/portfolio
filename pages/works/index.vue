<template>
  <main>
    <nuxt-link v-for="work in $store.state.works" :key="work.id" :to="`works/${work.url}`">
      {{ work.title }}
    </nuxt-link>
  </main>
</template>
