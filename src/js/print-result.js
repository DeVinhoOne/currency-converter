const summary = document.querySelector('.summary')

export const printResult = (amount, base, to, result) => {
   const summaryAmount = summary.querySelector('.summary__amount')
   const summaryResult = summary.querySelector('.summary__result')

   summaryAmount.textContent = `${amount} ${base} is equal to`
   summaryResult.textContent = `${result} ${to}`
}
