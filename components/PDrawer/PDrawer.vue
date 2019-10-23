<style lang="scss" src="./PDrawer.scss"></style>

<template>
  <div>
    <transition name="overlay">
      <div v-show="$store.state.drawerOpened" class="overlay" @click="$store.commit('toggleDrawer')" />
    </transition>
    <transition name="drawer">
      <div v-show="$store.state.drawerOpened" class="drawer elevation-3">
        <nav>
          <ul>
            <li @click="$store.commit('toggleDrawer')">
              <nuxt-link to="/">
                Accueil
              </nuxt-link>
            </li>
            <li @click="$store.commit('toggleDrawer')">
              <nuxt-link to="/works">
                travaux
              </nuxt-link>
            </li>
            <li @click="$store.commit('toggleDrawer')">
              <nuxt-link to="/contact">
                contact
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>
