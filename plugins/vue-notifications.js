import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

let toast = ({
  title,
  message,
  type,
  timeout = 5000,
  position = 'bottomCenter',
  image,
  layout = 1,
  imageWidth = 50,
  progressBarColor,
  theme = 'light',
  backgroundColor
}) => {
  if (type === VueNotifications.types.warn) type = 'warning'
  return iziToast[type]({
    title,
    message,
    timeout,
    position,
    image,
    layout,
    imageWidth,
    theme,
    progressBarColor,
    backgroundColor
  })
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
