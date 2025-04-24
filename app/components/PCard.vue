<script setup lang="ts">
const { tag = 'div' } = defineProps<{
  tag?: keyof HTMLElementTagNameMap
}>()
</script>

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

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--border-radius-large) var(--border-radius-small);
  background-color: var(--c-background-1);
  box-shadow:
    inset 0 0 0 1px var(--c-border),
    0 2px 1px -1px rgba(variables.$grey-100, 0.2),
    0 1px 1px 0 rgba(variables.$grey-100, 0.14),
    0 1px 3px 0 rgba(variables.$grey-100, 0.12);

  &-header {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    padding: 16px 24px;
    transition: padding var(--transition);

    @media #{variables.$medium-and-up} {
      padding: 24px 32px;
    }

    h1,
    h2,
    h3 {
      display: flex;
      align-items: center;
      transition: margin var(--transition);
      font-size: 1.5em;
      font-weight: var(--font-weight-regular);

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
    font-weight: var(--font-weight-light);

    @media #{variables.$medium-and-up} {
      padding: 0 32px 32px;
    }
  }
}
</style>
