import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Student Information', url: '/folder/Student Information', icon: 'id-card' },
    { title: 'Volleyball Awards', url: '/folder/Vollebayll Awards', icon: 'medal' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'List of Musics', url: '/folder/List of Musics', icon: 'headset' },
  ];
  public labels = ['Family', 'Friends', 'To do Lists'];
  constructor() {}
}
