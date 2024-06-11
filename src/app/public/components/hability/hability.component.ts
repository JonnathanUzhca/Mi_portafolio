import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hability',
  templateUrl: './hability.component.html',
  styleUrls: ['./hability.component.scss'],
})
export class HabilityComponent implements OnInit {
  

  // public ImgIcons = document.querySelectorAll('.imgIcons')
  // public ContentIcons = document.querySelectorAll('.contentIcons')

  @ViewChild('imgIcons', { static: true }) myDivContentIconos : ElementRef
  public Valor : number = 12;

  constructor() {}

  ngOnInit(): void {
    
  }

  onActive(valor){
    this.Valor = valor;
  }
  
}
