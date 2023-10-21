import { html, LitElement, type PropertyValues, type TemplateResult } from 'lit'
import { customElement, queryAssignedElements, property, state } from 'lit/decorators.js'

@customElement('itmayziii-transition-words')
// @ts-expect-error Class is not used directly anywhere, just in html as `<itmayziii-transition-words />`
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TransitionWords extends LitElement {
  @property({ type: Array })
  public words: string[] = []

  @state()
  private position: number = 0

  @queryAssignedElements()
  private readonly elementEls: HTMLElement[] | undefined | null

  private get elementEl (): HTMLElement | null {
    if (this.elementEls == null) return null
    return this.elementEls[0] ?? null
  }

  override render (): TemplateResult {
    return html`<slot @transitionend='${this.handleTransitionEnd}'></slot>`
  }

  protected override firstUpdated (_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties)
    if (this.elementEl == null) return

    setTimeout(() => {
      this.elementEl?.classList.remove('opacity-100')
      this.elementEl?.classList.add('opacity-0')
    }, 3000)
  }

  private handleTransitionEnd (): void {
    if (this.elementEl == null) return

    if (this.elementEl.classList.contains('opacity-0')) {
      this.position++
      if (this.words[this.position] === undefined) {
        this.position = 0
      }

      this.elementEl.textContent = this.words[this.position] ?? null
      this.elementEl.classList.remove('opacity-0')
      this.elementEl.classList.add('opacity-100')
      return
    }

    this.elementEl.classList.remove('opacity-100')
    this.elementEl.classList.add('opacity-0')
  }
}
