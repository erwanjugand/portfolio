<template>
  <section class="container tools">
    <h2 v-text="$t('home.tools.title')" />

    <div class="row">
      <figure v-for="icon in icons" :key="icon.name" tabindex="0" class="xs6 s4 m2 l1 tools-item">
        <PIcon class="tools-icon" type="custom" :title="icon.title" :name="icon.name" />
        <figcaption class="tools-text" v-text="icon.title" />
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Tool } from '~/models'

export default Vue.extend({
  data () {
    return {
      icons: [
        {
          title: 'Git',
          name: 'git'
        },
        {
          title: 'Bash',
          name: 'bash'
        },
        {
          title: 'PhpStorm',
          name: 'phpStorm'
        },
        {
          title: 'EazyPHP',
          name: 'easyphp'
        },
        {
          title: 'Filezilla',
          name: 'filezilla'
        },
        {
          title: 'Atom',
          name: 'atom'
        },
        {
          title: 'VSCode',
          name: 'visualStudioCode'
        },
        {
          title: 'Photoshop',
          name: 'photoshop'
        },
        {
          title: 'Illustrator',
          name: 'illustrator'
        },
        {
          title: 'Premiere Pro',
          name: 'premierePro'
        },
        {
          title: 'After Effects',
          name: 'afterEffects'
        },
        {
          title: 'InDesign',
          name: 'indesign'
        }
      ] as Tool[]
    }
  }
})
</script>

<style lang="scss">
.tools {
  .row {
    width: 100%;
    row-gap: 32px;
  }

  &-item {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &-icon {
    width: min(100%, 80px);
    height: 80px;
    fill: var(--c-primary);
  }

  &-text {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    color: var(--c-primary);
    opacity: 0;
    transform: translateY(-100%);
    transition: transform var(--transition), opacity var(--transition);

    .tools-item:hover &, .tools-item:focus & {
      opacity: 1;
      transform: translateY(20%);
    }
  }
}
</style>
