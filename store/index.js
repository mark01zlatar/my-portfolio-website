export const state = () => ({
  projectDialogOverlay: false,
  projectDialogContent: false,
  projectDialogData: null
})

export const getters = {
  isProjectDialogOverlay(state) {
    return state.projectDialogOverlay
  },
  isProjectDialogContent(state) {
    return state.projectDialogContent
  },
  getProjectDialogData(state) {
    return state.projectDialogData
  }
}

export const mutations = {
  SET_PROJECT_DIALOG_OVERLAY(state, payload) {
    if (!payload) state.projectDialogData = null
    state.projectDialogOverlay = payload
  },
  SET_PROJECT_DIALOG_CONTENT(state, payload) {
    state.projectDialogContent = payload
  },
  SET_PROJECT_DIALOG_DATA(state, payload) {
    state.projectDialogData = payload
  }
}

export const actions = {
  openDialog(context, payload) {
    context.commit('SET_PROJECT_DIALOG_OVERLAY', true)
    context.commit('SET_PROJECT_DIALOG_DATA', payload)
  }
}
