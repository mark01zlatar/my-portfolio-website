export default async function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x = 0) => {
    return (
      document.querySelector(hash) ||
      new Promise(resolve => {
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
    console.log('executed 1')

    let el = await findEl(to.hash)
    console.log(el)
    if ('scrollBehavior' in document.documentElement.style) {
      console.log('executed 2')

      return window.scrollTo({
        top: el.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    } else {
      console.log('executed 3')
      return window.scrollTo(0, el.getBoundingClientRect().top)
    }
  }

  return { x: 0, y: 0 }
}
