import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    const elemetosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemetosCarousel, {
        duration: 25,
        dist:-130,
        shift:5,
        padding: 5,
        numVisible :5,
        indicators: true,
        noWrap: false

    })
    
  }
}
