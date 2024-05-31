import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ComunicationService } from 'src/app/service/comunication.service';

@Component({
  selector: 'app-foco-luz',
  templateUrl: './foco-luz.component.html',
  styleUrls: ['./foco-luz.component.scss']
})
export class FocoLuzComponent implements OnInit {

  @ViewChild('myButton', { static: true }) myButton!: ElementRef;
  @ViewChild('foco', { static: true }) foco!: ElementRef;
  @ViewChild('audio', { static: true }) audio! :ElementRef;
  isChecked = false;

  constructor(private comunicationService: ComunicationService){

  }

  ngOnInit(): void {
    this.toggleClass();
    // this.onfoco();
  }

  toggleClass(): void {
    this.myButton.nativeElement.addEventListener('click', this.onClick.bind(this))
    
  }
  playAudio() {
    const audioPlayer = document.getElementById('audio') as HTMLAudioElement;
    audioPlayer.play();
  }

  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isChecked = inputElement.checked;
  }

  onClick(){
    this.foco.nativeElement.classList.toggle('on');
    // console.log(this.isChecked ? 'checked' : 'not checked')
    if(!this.isChecked){
      this.comunicationService.disparadorFoco.emit(6);
      this.playAudio();
    }else{
      this.comunicationService.disparadorFoco.emit(7);
      this.playAudio();
    }
   
   
   
  }

 
  
}
