import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSliceComponent } from './photo-slice.component';

describe('PhotoSliceComponent', () => {
  let component: PhotoSliceComponent;
  let fixture: ComponentFixture<PhotoSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoSliceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
