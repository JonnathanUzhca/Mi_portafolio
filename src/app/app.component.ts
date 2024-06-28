import { Component, OnInit } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portafolio';
  public aux : boolean = false;
  constructor(private loadingService : LoadingService){

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadingService.hide();
      this.aux=true
    }, 5000);
    
  }
}
