const form = document.querySelector('.form')

form.addEventListener('submit', (e) => convertCurrency(e))

const convertCurrency = (e) => {
   e.preventDefault()

   const base = form.querySelector('#from').value
   const to = form.querySelector('#to').value
   fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .then((resposne) => resposne.json())
      .then((data) => console.log(data.rates[to]))
}
