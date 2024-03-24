import { submitForm } from '../../public-cms.ts'

let recaptchaVerified = false

// @ts-expect-error intentionally setting global function
window.itmayziiiContactFormRecapatchaCb = () => {
  recaptchaVerified = true
}
// @ts-expect-error intentionally setting global function
window.itmayziiiContactFormRecapatchaExpiredCb = () => {
  recaptchaVerified = false
}

document.addEventListener('astro:page-load', function onAstroPageLoad () {
  const contactForms = document.querySelectorAll('[data-js-contact-form]')

  contactForms.forEach(el => {
    if (!(el instanceof HTMLFormElement)) return

    el.addEventListener('submit', function onContactSubmit (event) {
      event.preventDefault()
      if (!(event.currentTarget instanceof HTMLFormElement)) return

      if (!recaptchaVerified) {
        window.alert('reCAPTCHA is required')
        return
      }

      const formData = new FormData(el)
      submitForm('contact', {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        'g-recaptcha-response': formData.get('g-recaptcha-response')
      })
        .then(console.log)
        .catch(console.error)
    })
  })
})
