import { printResult } from './print-result'

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => convertCurrency(e))

const convertCurrency = (e) => {
   e.preventDefault()

   const input = form.querySelector('#amount')
   const amount = form.querySelector('#amount').value
   const base = form.querySelector('#from').value
   const to = form.querySelector('#to').value
   fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .then((resposne) => resposne.json())
      .then((data) => {
         const rate = data.rates[to]
         const result = amount * rate
         if (isNaN(result)) {
            printResult(amount, base, to, amount)
         } else {
            printResult(amount, base, to, result.toFixed(2))
         }
         input.value = ''
      })
}
