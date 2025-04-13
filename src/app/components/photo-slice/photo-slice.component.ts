import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-slice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-slice.component.html',
  styleUrls: ['./photo-slice.component.css']
})
export class PhotoSliceComponent {
  images: string[] = [
    'https://i.pinimg.com/736x/79/d1/17/79d117125ca2917d41af9c92dec30ab1.jpg',
    'https://i.pinimg.com/736x/5c/f5/e1/5cf5e16d3388182203cc7e102cb3bc3e.jpg',
    'https://i.pinimg.com/474x/eb/54/4e/eb544ef55be59671b946a9608bf18829.jpg',
    'https://i.pinimg.com/474x/31/35/a1/3135a11726cf53688f88f0f227bc1c84.jpg',
    'https://i.pinimg.com/474x/2f/17/2c/2f172c69aad40ea253acddb16d90eaee.jpg',
    'https://i.pinimg.com/474x/bb/fb/50/bbfb500d7e7726ded16dfac5246e0055.jpg',
    'https://i.pinimg.com/474x/bb/fb/50/bbfb500d7e7726ded16dfac5246e0055.jpg'
  ];

  currentIndex = 0;

  changeImage(index: number) {
    this.currentIndex = index;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Swipe com dedo - só funciona com hammerjs importado
  @HostListener('swipeleft', ['$event'])
  onSwipeLeft(event: any) {
    this.nextImage();
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight(event: any) {
    this.prevImage();
  }
}
