import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var YT: any;

@Component({
  selector: 'app-icon-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-music.component.html',
  styleUrls: ['./icon-music.component.css']
})
export class IconMusicComponent implements AfterViewInit {
  player: any;
  isPlaying: boolean = false;

  ngAfterViewInit(): void {
    // Evita carregar o script duas vezes
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    // Função chamada automaticamente pela API quando estiver pronta
    (window as any).onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'rTsbSY04s1Y', // <- ID da música do YouTube (Chuva de Arroz)
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1
        },
        events: {
          onReady: () => {
            console.log('🎵 Player carregado e pronto!');
          }
        }
      });
    };
  }

  togglePlayPause(): void {
    if (this.player && typeof this.player.playVideo === 'function') {
      if (this.isPlaying) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
      this.isPlaying = !this.isPlaying;
    } else {
      console.warn('🎧 Player ainda não está disponível.');
    }
  }
}
