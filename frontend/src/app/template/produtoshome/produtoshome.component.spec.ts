import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoshomeComponent } from './produtoshome.component';

describe('ProdutoshomeComponent', () => {
  let component: ProdutoshomeComponent;
  let fixture: ComponentFixture<ProdutoshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
