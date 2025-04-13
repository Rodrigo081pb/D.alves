import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-lovers',
  imports: [],
  templateUrl: './lovers.component.html',
  styleUrl: './lovers.component.css',
  standalone: true
})
export class LoversComponent implements OnInit, OnDestroy{

  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  private startDate: Date = new Date('2025-04-12T00:00:00');
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    // Evita travar a renderização com atualizações fora da zona do Angular
    this.ngZone.runOutsideAngular(() => {
      this.updateCounter(); // Primeira atualização já na entrada
      this.intervalId = setInterval(() => {
        this.updateCounter();
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCounter(): void {
    const now = new Date();
    const diffMs = now.getTime() - this.startDate.getTime();

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    this.days = String(days).padStart(2, '0');
    this.hours = String(hours).padStart(2, '0');
    this.minutes = String(minutes).padStart(2, '0');
    this.seconds = String(seconds).padStart(2, '0');

    // Atualiza a view manualmente
    this.cdr.detectChanges();
  }
}
