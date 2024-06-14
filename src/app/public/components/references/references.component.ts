import { Component, OnInit, Renderer2} from '@angular/core';


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit{
 
  private currentCarrusel  : number = 0;

  constructor(private renderer: Renderer2){

  }

  ngOnInit(): void {
    if(true){
      this.onAnimateReferen();

    }
      
  }
  
  
  onAnimateReferen(){
    const divs = document.querySelectorAll('.carrusel-item');
    divs.forEach((div , index) => {
      setTimeout(() => {
          div.classList.add('visible');
      }, index * 6000);
    })
  }






  
}
