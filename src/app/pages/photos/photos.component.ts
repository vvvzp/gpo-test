import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { IPhoto } from '../../shared/models/photo';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public sortedList: IPhoto[];
  public sortType: number;

  constructor(
      private dataService: DataService,
  ) { }

  ngOnInit(): void {

    this.dataService.getImages().subscribe(res => {
      this.sortedList = res;
      this.changeSortType(1);
      let totalSize = 0;
      res.forEach(v => totalSize += parseInt(v.size, 10));
      this.dataService.setTotalSize(totalSize);
    });
  }

  public changeSortType(sortType: number): void {
    this.sortType = sortType;
    const sortField = ['', 'name', 'size', 'lastModify'][sortType];
    this.sortedList.sort((a, b) => {
      return this.getValueBySortType(sortType, a[sortField]) > this.getValueBySortType(sortType, b[sortField]) ? 1 : -1;
    });
  }

  private getValueBySortType(sortType: number, value: string): string | number {
    return sortType === 2 ? parseInt(value, 10) : value.toLowerCase();
  }

}
