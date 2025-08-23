<script setup lang="ts">
const {
  texts,
  tag = 'div',
  typeSpeed = 75,
  typeDelay = 500,
  eraseSpeed = 50,
  eraseDelay = 2000,
} = defineProps<{
  texts: [string, ...string[]]
  tag?: keyof HTMLElementTagNameMap
  typeSpeed?: number
  typeDelay?: number
  eraseSpeed?: number
  eraseDelay?: number
}>()

const displayedText = ref(texts[0])
const textsIndex = ref(0)
const isDeleting = ref(true)
const speed = computed(() => (isDeleting.value ? eraseSpeed : typeSpeed))

const type = () => {
  const currentText = texts[textsIndex.value] ?? ''

  if (!isDeleting.value) {
    displayedText.value = currentText.substring(0, displayedText.value.length + 1)

    if (displayedText.value === currentText) {
      pause()
      isDeleting.value = true
      setTimeout(resume, eraseDelay)
    }
  } else {
    displayedText.value = currentText.substring(0, displayedText.value.length - 1)

    if (displayedText.value === '') {
      pause()
      isDeleting.value = false
      setTimeout(resume, typeDelay)
      textsIndex.value = (textsIndex.value + 1) % texts.length
    }
  }
}

const { pause, resume } = useIntervalFn(type, speed)
</script>

<template>
  <component :is="tag">
    {{ displayedText }}
  </component>
</template>
