import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArtComponent } from './get-art.component';

describe('GetArtComponent', () => {
  let component: GetArtComponent;
  let fixture: ComponentFixture<GetArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetArtComponent]
    });
    fixture = TestBed.createComponent(GetArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
