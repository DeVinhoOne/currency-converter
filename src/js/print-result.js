const summary = document.querySelector('.summary')

export const printResult = (amount, base, to, result) => {
   const summaryAmount = summary.querySelector('.summary__amount')
   const summaryResult = summary.querySelector('.summary__result')
   const summaryArrow = summary.querySelector('.summary__arrow')

   summaryAmount.textContent = `${amount} ${base}`
   summaryArrow.style.display = 'block'
   summaryResult.textContent = `${result} ${to}`
}
