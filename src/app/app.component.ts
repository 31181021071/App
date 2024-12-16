import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    public emailService: EmailService
  ) {}

  content: number = 0;

  audio = new Audio();

  userChoose = {
    food: "",
    foodDetail: "",
    hangOut: "",
    hangOutDetail: "",
    other: ""
  }

  foodList = [
    { label: 'Món nhật', image: 'assets/img/japan-food.jpg', value: 'Món nhật' },
    { label: 'Món hàn', image: 'assets/img/korea-food.jpg', value: 'Món hàn' },
    { label: 'Món âu', image: 'assets/img/america-food.jpeg', value: 'Món âu' },
    { label: 'Món hoa', image: 'assets/img/china-food.jpg', value: 'Món hoa' },
  ];

  hangOutList = [
    { label: 'Cà phê', image: 'assets/img/coffee.jpg', value: 'Cà phê' },
    { label: 'Xem phim', image: 'assets/img/movie.jpg', value: 'Xem phim' },
    { label: 'Đường sách', image: 'assets/img/street-book.jpg.webp', value: 'Đường sách' },
    { label: 'Vincom Grank Park', image: 'assets/img/vincom-q9.png', value: 'Vincom Grank Park' },
  ];

  ngOnInit() {
    this.audio.src = 'assets/music/background-music.mp3';
    this.audio.load();
    this.audio.loop = true;
    this.audio.play();
  }

  toggleMusic() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  openContent(content: number) {
    this.content = content;
  }

  sendMail() {
    this.content = 4;
    this.emailService.sendEmail(this.userChoose);
  }
}
