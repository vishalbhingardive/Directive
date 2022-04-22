import { AfterViewInit, Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
export class HighlightColorDirective implements AfterViewInit {


@Input('bgColor')
highlightColor!:string;

@Input('textColor')
fontColor!:string;
private myElement:any;
  constructor(private element:ElementRef) {
    this.myElement=element.nativeElement;
   }

   ngAfterViewInit(): void {
   
  }
  @HostListener('mouseOver')
  highlightFont()
  {
    console.log("Mouse Moved in");
    this.element.nativeElement.style.color=this.fontColor;
  }
  @HostListener('mouseOver')
  highlightFontOver()
  {
    console.log("Mouse Hover");
    this.element.nativeElement.style.color='';
  }

  @HostListener('click')
  clickMe()
  {
    this.element.nativeElement.style.color=this.fontColor;
    this.element.nativeElement.style.backgroundColor='red';
  }
  @HostListener('dblclick')
  doubleClick()
  {
    this.element.nativeElement.style.color='red';
    this.element.nativeElement.style.backgroundColor='blue';
  }

}
