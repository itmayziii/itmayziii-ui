class ItmayziiiHeadshot extends HTMLElement {
  private readonly headshotBtnEl: HTMLButtonElement
  private readonly headshotImgEl: HTMLImageElement
  private color: boolean
  constructor () {
    super()

    const headshotBtnEl = this.querySelector<HTMLButtonElement>('[data-js-headshot-btn]')
    const headshotImgEl = this.querySelector<HTMLImageElement>('[data-js-headshot-img]')
    if (headshotBtnEl == null || headshotImgEl == null) {
      throw new Error('Failed to find required elements')
    }

    this.headshotBtnEl = headshotBtnEl
    this.headshotImgEl = headshotImgEl
    this.color = false
  }

  onClick (): void {
    this.color = !this.color
    this.headshotImgEl.style.filter = `grayscale(${this.color ? 0 : 1})`
  }

  connectedCallback (): void {
    this.headshotBtnEl.addEventListener('click', this.onClick.bind(this))
  }

  disconnectedCallback (): void {
    this.headshotBtnEl.removeEventListener('click', this.onClick.bind(this))
  }
}

customElements.define('itmayziii-headshot', ItmayziiiHeadshot)
