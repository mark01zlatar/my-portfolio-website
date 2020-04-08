export const state = () => ({
  projectDialogOverlay: false,
  projectDialogContent: false
})

export const getters = {
  isProjectDialogOverlay(state) {
    return state.projectDialogOverlay
  },
  isProjectDialogContent(state) {
    return state.projectDialogContent
  }
}

export const mutations = {
  SET_PROJECT_DIALOG_OVERLAY(state, payload) {
    state.projectDialogOverlay = payload
  },
  SET_PROJECT_DIALOG_CONTENT(state, payload) {
    state.projectDialogContent = payload
  }
}

export const actions = {}
