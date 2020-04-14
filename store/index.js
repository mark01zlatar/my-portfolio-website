export const state = () => ({
  projectDialogOverlay: false,
  projectDialogContent: false,
  projectDialogData: null,
  mobileNavbar: false,
  cookiesAccepted: true,
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
  },
  isCookiesAccepted(state) {
    return state.cookiesAccepted
  },
  getLocaleLang(state, getters, rootState, rootGetters) {
    return rootState.i18n.locale
  },
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
  },
  SET_COOKIES_ACCEPTED(state, payload) {
    state.cookiesAccepted = payload
  },
}

export const actions = {
  openDialog(context, payload) {
    context.commit('SET_PROJECT_DIALOG_OVERLAY', true)
    context.commit('SET_PROJECT_DIALOG_DATA', payload)
  },
}
