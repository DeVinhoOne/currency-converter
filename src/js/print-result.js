const summary = document.querySelector('.summary')

export const printResult = (amount, base, to, result) => {
   const summaryAmount = summary.querySelector('.summary__amount')
   const summaryResult = summary.querySelector('.summary__result')
   const summaryArrow = summary.querySelector('.summary__arrow')

   // Print to the screen
   summaryAmount.textContent = `${amount} ${base}`
   summaryResult.textContent = `${result} ${to}`
   summaryArrow.style.display = 'block'
   summary.style.opacity = '1'
   summary.style.transform = 'translate(0, 0)'
   summaryArrow.style.opacity = '1'
}
