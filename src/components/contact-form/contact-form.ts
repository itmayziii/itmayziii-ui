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

  contactForms.forEach(formEl => {
    if (!(formEl instanceof HTMLFormElement)) return

    formEl.addEventListener('submit', function onContactSubmit (event) {
      event.preventDefault()
      if (!(event.currentTarget instanceof HTMLFormElement)) return

      if (!recaptchaVerified) {
        window.alert('reCAPTCHA is required')
        return
      }

      disableSubmit(formEl)

      const formData = new FormData(formEl)
      submitForm('contact', {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        'g-recaptcha-response': formData.get('g-recaptcha-response')
      })
        .then(function handleSuccess () {
          formEl.outerHTML = `
<p class='text-white text-2xl mt-8'>
Thank you for your submission, I will get back with you as soon as possible.
</p>
`.trim()
        })
        .catch(function handleError (error) {
          console.error(error)
          enableSubmit(formEl)
          window.alert('There was an error submitting the form. Please try again later.')
        })
    })
  })
})

function disableSubmit (formEl: HTMLFormElement): void {
  const submitBtnEl = formEl.querySelector<HTMLButtonElement>('button[type="submit"]')
  if (submitBtnEl == null) {
    console.error('form is somehow missing a submit button')
    return
  }

  submitBtnEl.disabled = true
}

function enableSubmit (formEl: HTMLFormElement): void {
  const submitBtnEl = formEl.querySelector<HTMLButtonElement>('button[type="submit"]')
  if (submitBtnEl == null) {
    console.error('form is somehow missing a submit button')
    return
  }

  submitBtnEl.disabled = false
}
