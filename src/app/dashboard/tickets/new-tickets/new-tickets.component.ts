import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';


@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})

export class NewTicketsComponent implements OnInit,  AfterViewInit {
  // @ViewChild('form') private form?:ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('On InIT');
    console.log(this.form().nativeElement);
  }
  ngAfterViewInit(){
    console.log('after view init');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {   
    console.log('Entered value is: ' +title);
    console.log('Entered ticket Text is: ' + ticketText);
    this.form().nativeElement.reset();
  
  }
}
