export const state = () => ({
  drawerOpened: false
})

export const mutations = {
  toggleDrawer (state) {
    state.drawerOpened = !state.drawerOpened
  }
}
