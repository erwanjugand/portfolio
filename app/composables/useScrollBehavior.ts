export default () => {
  const preferredMotion = usePreferredReducedMotion()

  return computed(() => (preferredMotion.value === 'reduce' ? 'auto' : 'smooth'))
}
