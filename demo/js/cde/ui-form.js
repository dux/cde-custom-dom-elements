// render form
$.cde('ui-form', class extends window.BaseCde {
  static nodeName = 'form'

  get data() {
    const formData = new FormData(this.root)
    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    });
    return formObject
  }

  connect() {
    this.root.onsubmit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    console.log(JSON.stringify(this.data))
  }
})