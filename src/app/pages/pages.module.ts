import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { FilesComponent } from './files/files.component';
import { FilesizePipe } from '../shared/pipes/filesize.pipe';
import { SharingComponent } from './sharing/sharing.component';
import { LinksComponent } from './links/links.component';



@NgModule({
  declarations: [PhotosComponent, FilesComponent, FilesizePipe, SharingComponent, LinksComponent],
  imports: [
    CommonModule,
  ],
  providers: [FilesizePipe],
  exports: [PhotosComponent, FilesComponent, FilesizePipe]
})
export class PagesModule { }
