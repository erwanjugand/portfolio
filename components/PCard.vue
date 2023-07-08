<template>
  <Component :is="tag" class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-content">
      <slot />
    </div>
  </Component>
</template>

<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
}

withDefaults(defineProps<Props>(), {
  tag: 'div',
})
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: $br-large $br-small;
  background-color: var(--c-background-1);
  box-shadow:
    inset 0 0 0 1px var(--c-border),
    0 2px 1px -1px rgba($grey-100, 0.2),
    0 1px 1px 0 rgba($grey-100, 0.14),
    0 1px 3px 0 rgba($grey-100, 0.12);

  &-header {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    padding: 16px 24px;
    transition: padding var(--transition);

    @media #{$medium-and-up} {
      padding: 24px 32px;
    }

    h1,
    h2,
    h3 {
      display: flex;
      align-items: center;
      transition: margin var(--transition);
      font-size: 1.5em;
      font-weight: $fw-regular;

      svg {
        flex-shrink: 0;
        width: 1.5em;
        height: 1em;
        margin-right: 16px;
        fill: var(--c-text);
      }
    }

    time {
      color: var(--c-text-secondary-4);
    }
  }

  &-content {
    padding: 0 24px 16px;
    transition: padding var(--transition);
    font-weight: $fw-light;

    @media #{$medium-and-up} {
      padding: 0 32px 32px;
    }
  }
}
</style>
