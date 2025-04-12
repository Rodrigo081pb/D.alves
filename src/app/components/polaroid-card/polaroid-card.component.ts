import { Component } from '@angular/core';
import { IconMusicComponent } from "../icon-music/icon-music.component";
import { ContadorComponent } from "../contador/contador.component";

@Component({
  standalone:true,
  selector: 'app-polaroid-card',
  imports: [IconMusicComponent, ContadorComponent],
  templateUrl: './polaroid-card.component.html',
  styleUrl: './polaroid-card.component.css'
})
export class PolaroidCardComponent {

}
