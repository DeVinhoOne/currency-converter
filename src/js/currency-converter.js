const form = document.querySelector('.form')

form.addEventListener('submit', (e) => convertCurrency(e))

const convertCurrency = (e) => {
   e.preventDefault()
   fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then((resposne) => resposne.json())
      .then((data) => console.log(data))
}
