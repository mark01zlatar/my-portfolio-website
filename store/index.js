export const state = () => ({
  projectDialogOverlay: false,
  projectDialogContent: false,
  projectDialogData: null,
  mobileNavbar: false
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
  },
  isMobileNavbar(state) {
    return state.mobileNavbar
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
  },
  SET_MOBILE_NAVBAR(state, payload) {
    state.mobileNavbar = payload
  }
}

export const actions = {
  openDialog(context, payload) {
    context.commit('SET_PROJECT_DIALOG_OVERLAY', true)
    context.commit('SET_PROJECT_DIALOG_DATA', payload)
  }
}
