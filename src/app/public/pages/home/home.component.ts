import { Component,HostListener, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  @ViewChild('myElementRef' , { static: true }) myElementRef!: ElementRef;
  @ViewChild('item',{static:true}) myItem! :ElementRef
  private shouldListenScrollEvent = true;

  private scrollLeft = 0;
  private scrollTop = 0;
  
  
  constructor(private renderer: Renderer2){
    

  }
  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void {
  this.onWindowScroll();
  }

  onWindowScroll() {
    this.scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    this.scrollTop = window.scrollY || document.documentElement.scrollTop;
    const element = this.myElementRef.nativeElement;
    const elemtItem = this.myItem.nativeElement;
    if(this.scrollTop > 780){
      this.renderer.setStyle(element, 'backgroundColor', '#121212')
      this.renderer.setStyle(element, 'position','fixed')
      this.renderer.setStyle(elemtItem, 'color', 'white')
    }else{
          this.renderer.setStyle(element, 'backgroundColor', 'transparent')
          this.renderer.setStyle(element, 'position','relative')
          this.renderer.setStyle(elemtItem, 'color', 'black')
        }
  }
  

}
