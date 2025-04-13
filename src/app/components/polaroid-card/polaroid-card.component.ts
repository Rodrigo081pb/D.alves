import { Component } from '@angular/core';
import { IconMusicComponent } from "../icon-music/icon-music.component";
import { ContadorComponent } from "../contador/contador.component";
import { PhotoSliceComponent } from "../photo-slice/photo-slice.component";
import { LoversComponent } from "../lovers/lovers.component";

@Component({
  standalone:true,
  selector: 'app-polaroid-card',
  imports: [IconMusicComponent, ContadorComponent, PhotoSliceComponent, LoversComponent],
  templateUrl: './polaroid-card.component.html',
  styleUrl: './polaroid-card.component.css'
})
export class PolaroidCardComponent {

}
