import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './pages/files/files.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { SharingComponent } from './pages/sharing/sharing.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'files', component: FilesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'sharing', component: SharingComponent },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
