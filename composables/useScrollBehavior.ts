export default () => {
  const preferredMotion = usePreferredReducedMotion()

  const behavior = computed(() => {
    return preferredMotion.value === 'reduce' ? 'auto' : 'smooth'
  })

  return behavior
}
