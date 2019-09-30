<style lang="scss" src="./PDrawer.scss"></style>

<template>
  <div>
    <transition name="overlay">
      <div v-show="$store.state.drawerOpened" class="overlay" @click="$store.commit('toggleDrawer')" />
    </transition>
    <transition name="drawer">
      <div class="drawer" v-show="$store.state.drawerOpened">
        Drawer
      </div>
    </transition>
  </div>
</template>
