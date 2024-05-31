import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocoLuzComponent } from './foco-luz.component';

describe('FocoLuzComponent', () => {
  let component: FocoLuzComponent;
  let fixture: ComponentFixture<FocoLuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocoLuzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocoLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
