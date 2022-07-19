import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Student Information', url: '/student', icon: 'id-card' },
    { title: 'Volleyball Awards', url: '/awards', icon: 'medal' },
    { title: 'Favorites', url: '/fave', icon: 'heart' },
    { title: 'List of Musics', url: '/musics', icon: 'headset' },
  ];
}
