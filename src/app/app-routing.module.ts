import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'awards',
    loadChildren: () => import('./awards/awards.module').then( m => m.AwardsPageModule)
  },
  {
    path: 'fave',
    loadChildren: () => import('./fave/fave.module').then( m => m.FavePageModule)
  },
  {
    path: 'musics',
    loadChildren: () => import('./musics/musics.module').then( m => m.MusicsPageModule)
  },  {
    path: 'friends',
    loadChildren: () => import('./friends/friends.module').then( m => m.FriendsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
