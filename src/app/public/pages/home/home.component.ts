import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component,HostListener, ElementRef, OnInit, ViewChild, Renderer2, QueryList, AfterContentInit, AfterViewInit, Inject } from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';
import * as Aos from 'aos';
import { ComunicationService } from 'src/app/service/comunication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('stateChange', [
      state('state1', style({ transform: 'rotate(0deg)', width: '180px', height: '180px' })),
      state('state2', style({ display: 'none' })),
      transition('state1 => state2', 
      animate('2s', keyframes([
        style({ transform: 'translateY(0)', offset: 0 }),
        style({ transform: 'translateY(10px)', offset: 0.2 }),
        style({ transform: 'translateY(-20px)', offset: 0.4 }),
        style({ transform: 'translateY(90px)', offset: 1 })
      ]))
      )
    ])
  ]
})
export class HomeComponent  implements OnInit {

  @ViewChild('myElementRef' , { static: true }) myElementRef!: ElementRef;
  @ViewChild('item',{static:true}) myItem! : ElementRef;
  @ViewChild('item1',{static:true}) myItem1! : ElementRef;
  @ViewChild('item2',{static:true}) myItem2! : ElementRef;
  @ViewChild('item3',{static:true}) myItem3! : ElementRef;
  @ViewChild('itemName',{static:true}) itemName! : ElementRef;
  @ViewChild('itemSubName',{static:true}) itemSubName! : ElementRef;
  @ViewChild('itemImg', {static:true}) itemImg! : ElementRef;
  @ViewChild('luzFoco', {static: false}) itemFoco! : ElementRef;
 
  @ViewChild('tw3') typewriterElement: any;


  public state = '';
  public profession :string = 'Ingeniería de sistemas';
  public paragran : string = 'Soy programador junior con experiencia en la creación y desarrollo de aplicaciones web completas. Desde la interfaz de usuario hasta la lógica del servidor.';
  public slogan : string = 'Frontend y Banckend Designer | Developer';
  public containerText : number = 0;
  public focoContainer : boolean = false;
  private scrollLeft = 0;
  private scrollTop = 0;
  
  
  constructor(
    private renderer: Renderer2,
    private comunicationService: ComunicationService,
    private isLoadingService: IsLoadingService,
  ){
  
  }
  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void {
    Aos.init({disable: 'mobile'});
    Aos.refresh();
    this.onWindowScroll();
    this.onHeaderFoco();
    
   
    
  }

  onWindowScroll() {
    this.scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    this.scrollTop = window.scrollY || document.documentElement.scrollTop;
    const element = this.myElementRef.nativeElement;
    const elemtItem = this.myItem.nativeElement;
    const elemtItem1 = this.myItem1.nativeElement;
    const elemtItem2 = this.myItem2.nativeElement;
    const elemtItem3 = this.myItem3.nativeElement;
    const elementItemName = this.itemName.nativeElement;
    const elemtItemSubName = this.itemSubName.nativeElement;
    const elementItemImg = this.itemImg.nativeElement;
    if(this.scrollTop > 725){
      this.renderer.setStyle(element, 'backgroundColor', '#16324F')
      this.renderer.setStyle(element, 'position','fixed')
      this.renderer.setStyle(elemtItem, 'color', 'white')
      this.renderer.setStyle(elemtItem1, 'color', 'white')
      this.renderer.setStyle(elemtItem2, 'color', 'white')
      this.renderer.setStyle(elemtItem3, 'color', 'white')
      this.renderer.setStyle(elementItemName, 'color', 'white',)
      this.renderer.setStyle(elemtItemSubName, 'color', 'white')
      this.renderer.setStyle(elementItemName, 'font-size', '22px')
      this.renderer.setStyle(elemtItemSubName, 'color', 'white')
      this.state = 'state2';
    }else{
          this.renderer.setStyle(element, 'backgroundColor', 'transparent')
          this.renderer.setStyle(element, 'position','relative')
          this.renderer.setStyle(elemtItem, 'color', 'black')
          this.renderer.setStyle(elemtItem1, 'color', 'black')
          this.renderer.setStyle(elemtItem2, 'color', 'black')
          this.renderer.setStyle(elemtItem3, 'color', 'black')
          this.renderer.setStyle(elementItemImg, 'display', 'initial')
          this.state = 'state1';
        }
  }


  onDataParagram(numer:number){
    if(numer == 0){
      this.containerText = 0;
    }else if(numer == 1){
      this.containerText = 1;
    }else if(numer == 2){
      this.containerText = 2;
    }else{
      this.focoContainer = true;
    }
  }

  onHeaderFoco(){

    this.comunicationService.disparadorFoco
    .subscribe((iten) => {
      
      if(iten === 6){
       this.renderer.setStyle(this.itemFoco.nativeElement, 'background','rgba(19, 41, 61, 0.5)')
       
      }else{
        this.renderer.setStyle(this.itemFoco.nativeElement, 'background','rgba(19, 41, 61, 0.9)')
      }
    }
    )
  }
  

}
