import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit{
  // Accessing class using @HostBinding
  //  @HostBinding ('class') className = "control"


  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>> ('input');


  constructor(){
    afterRender(()=>{
      console.log('After render');
    });


    afterNextRender(()=>{
      console.log('After next render');
    });
  }
  ngAfterContentInit(): void {
    console.log('After content Init');
    console.log(this.control()?.nativeElement)
  }

  onClick() {
    console.log('clicked!@!!')
    console.log (this.el);
    console.log(this.control());
  }
}
