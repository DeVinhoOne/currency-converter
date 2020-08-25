const summary = document.querySelector('.summary')

export const clearScreen = () => {
   const summaryAmount = summary.querySelector('.summary__amount')
   const summaryResult = summary.querySelector('.summary__result')
   const summaryArrow = summary.querySelector('.summary__arrow')

   // Cleanup
   summaryAmount.textContent = ''
   summaryResult.textContent = ''
   summaryArrow.style.display = 'none'
   summary.style.opacity = '0'
   summary.style.transform = 'translate(0, 20px)'
   summaryArrow.style.opacity = '0'
}
