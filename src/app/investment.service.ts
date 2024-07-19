import { Injectable, signal } from '@angular/core';
import { userInput } from './user-input/user-input.model';
import { results } from './investment-results/investment-result.model';

@Injectable({providedIn: 'root'})
export class InvestmentService {

  resultsData = signal<undefined | results[]>(undefined);
  constructor() { }
  
  calculateInvestmentResults(data: userInput) {
  const {initialInvestment, duration, expectedReturn, annualInvestment} = data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  this.resultsData.set(annualData);
}
}