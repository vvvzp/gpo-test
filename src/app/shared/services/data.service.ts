import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IPhoto } from '../models/photo';
import { data } from '../../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public images: IPhoto[];
  public totalSize = new Subject<number>();

  constructor() {
    this.images = data as IPhoto[];
  }

  public getImages(): Observable<IPhoto[]> {
    return of (this.images);
  }

  public setTotalSize(size: number): void {
    this.totalSize.next(size);
  }
}
