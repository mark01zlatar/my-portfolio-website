export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x = 0) => {
    return (
      document.querySelector(hash) ||
      new Promise((resolve) => {
        if (x > 50) {
          return resolve(document.querySelector('#app'))
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1))
        }, 100)
      })
    )
  }

  if (to.hash) {
    let el = await findEl(to.hash)

    let jumpTo =
      el.getBoundingClientRect().top > el.offsetTop
        ? el.getBoundingClientRect().top
        : el.offsetTop

    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({
        top: jumpTo,
        behavior: 'smooth',
      })
    } else {
      return window.scrollTo(0, jumpTo)
    }
  }

  return { x: 0, y: 0 }
}
