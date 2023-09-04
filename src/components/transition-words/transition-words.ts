class ItmayziiiTitles extends HTMLElement {
  private readonly words: string[]
  private readonly elementEl: any
  private position: number
  constructor () {
    super()

    this.words = this.dataset.jsWords?.split(',') ?? []
    this.elementEl = this.querySelector('[data-js-transition-el]')
    this.position = 0
  }

  onTransitionEnd (): void {
    if (this.elementEl.style.opacity === '0') {
      this.position++
      if (this.words[this.position] === undefined) {
        this.position = 0
      }

      this.elementEl.textContent = this.words[this.position]
      this.elementEl.style.opacity = '1'
      return
    }

    this.elementEl.style.opacity = 0
  }

  connectedCallback (): void {
    setTimeout(() => {
      this.elementEl.style.opacity = '0'
    }, 3000)
    this.elementEl.addEventListener('transitionend', this.onTransitionEnd.bind(this))
  }

  disconnectedCallback (): void {
    this.elementEl.removeEventListener('transitionend', this.onTransitionEnd.bind(this))
  }
}

customElements.define('itmayziii-titles', ItmayziiiTitles)
