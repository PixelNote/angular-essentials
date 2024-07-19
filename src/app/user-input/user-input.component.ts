import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  userInput = signal({
    initialInvestment: +'0',
    annualInvestment: +'0',
    expectedReturn: +'0',
    duration: +'0'
  }) 

  constructor(private investmentService: InvestmentService){

  }
  
  onSubmit(){
    this.investmentService.calculateInvestmentResults(this.userInput());
    this.userInput.set({
    initialInvestment: +'0',
    annualInvestment: +'0',
    expectedReturn: +'0',
    duration: +'0'
    });
  }

}
