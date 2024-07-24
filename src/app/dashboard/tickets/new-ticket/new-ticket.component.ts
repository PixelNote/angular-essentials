import { Component } from '@angular/core';
import { ControlComponent } from "../../../shared-components/control/control.component";
import { ButtonComponent } from '../../../shared-components/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
