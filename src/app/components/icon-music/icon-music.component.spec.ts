import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMusicComponent } from './icon-music.component';

describe('IconMusicComponent', () => {
  let component: IconMusicComponent;
  let fixture: ComponentFixture<IconMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
