import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{

  public loading : boolean = false;

  constructor(
    private loadingService: LoadingService
  ){

  }

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((loading:boolean) =>{
      this.loading =loading;
    })
  }
}
