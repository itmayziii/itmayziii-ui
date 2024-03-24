interface ElData {
  position: number
  words: string[]
}

document.addEventListener('astro:page-load', function onAstroPageLoad () {
  const transitionWordsEls = document.querySelectorAll('[data-js-transition-words]')

  transitionWordsEls.forEach(el => {
    if (!(el instanceof HTMLElement)) return

    let words = JSON.parse(el.dataset.jsTransitionWords ?? '') ?? []
    if (!Array.isArray(words)) {
      words = []
    }

    let elData = {
      position: 0,
      words
    }

    setTimeout(() => {
      el.classList.remove('opacity-100')
      el.classList.add('opacity-0')
    }, 3000)
    el.addEventListener('transitionend', (event: Event): void => {
      elData = handleTransitionEnd(event, elData)
    })
  })
})

function handleTransitionEnd (event: Event, elData: ElData): ElData {
  const el = event.target
  if (el == null || !(el instanceof HTMLElement)) return elData

  if (el.classList.contains('opacity-0')) {
    elData.position++
    if (elData.words[elData.position] === undefined) {
      elData.position = 0
    }

    el.textContent = elData.words[elData.position] ?? null
    el.classList.remove('opacity-0')
    el.classList.add('opacity-100')
    return elData
  }

  el.classList.remove('opacity-100')
  el.classList.add('opacity-0')

  return elData
}
