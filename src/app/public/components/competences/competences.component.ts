import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit{
  public cont1:number = 0;
  public cont2:number = 0;
  public cont3:number = 0;
  public cont4:number = 0;
  public cont5:number = 0;
  public cont6:number = 0;
  public cont7:number = 0;
  public cont8:number = 0;
  private scrollTop = 0;

  constructor(private renderer: Renderer2,){

  }

  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void {
    this.onWindowScroll();
    // this.setContador();
  }

  onWindowScroll() {
    this.scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(this.scrollTop)
    if(this.scrollTop > 1600 && this.scrollTop < 1613){
      this.setContador();
    }
  }

  setContador(){
    let cant1=0, cant2=0, cant3=0, cant4=0, cant5=0, cant6=0, cant7=0, cant8=0, tiem=25;

    let timer1 = setInterval(() => {
      this.cont1 = cant1+=1;
      if(cant1 === 100){
        clearInterval(timer1)
      }
    }, 123);

    let timer2 = setInterval(() => {
      this.cont2 = cant2+=1;
      if(cant2 === 95){
        clearInterval(timer2)
      }
    }, 150);

    let timer3 = setInterval(() => {
      this.cont3 = cant3+=1;
      if(cant3 === 100){
        clearInterval(timer3)
      }
    }, 140);

    let timer4 = setInterval(() => {
      this.cont4 = cant4+=1;
      if(cant4 === 99){
        clearInterval(timer4)
      }
    }, 120);

    let timer5 = setInterval(() => {
      this.cont5 = cant5+=1;
      if(cant5 === 85){
        clearInterval(timer5)
      }
    }, 130);
    let timer6 = setInterval(() => {
      this.cont6 = cant6+=1;
      if(cant6 === 98){
        clearInterval(timer6)
      }
    }, 160);
    let timer7 = setInterval(() => {
      this.cont7 = cant7+=1;
      if(cant7 === 100){
        clearInterval(timer7)
      }
    }, 110);
    let timer8 = setInterval(() => {
      this.cont8 = cant8+=1;
      if(cant8 === 95){
        clearInterval(timer8)
      }
    }, 150);
  }

}
