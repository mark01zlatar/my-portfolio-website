export const state = () => ({
  projectDialog: true
})

export const getters = {
  isProjectDialog(state) {
    return state.projectDialog
  }
}

export const mutations = {
  SET_PROJECT_DIALOG(state, payload) {
    state.projectDialog = payload
  }
}

export const actions = {}
