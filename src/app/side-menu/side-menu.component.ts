import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../shared/models/menu';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public menu: IMenuItem[];
  public totalSize: number;
  public maxSize: number;
  public percent: number;
  public activeLink = 'Photos';

  constructor(
      private dataService: DataService,
  ) {
    this.menu = [
      { name: 'Files', route: 'files', ico: 'fa-file' },
      { name: 'Photos', route: 'photos', ico: 'fa-photo-video'},
      { name: 'Sharing', route: 'sharing', ico: 'fa-satellite-dish'},
      { name: 'Links', route: 'links', ico: 'fa-route'}
    ];
  }

  ngOnInit(): void {
    this.dataService.totalSize.asObservable().subscribe(res => {
      this.totalSize = res;
      // set max size for test
      this.maxSize = res * 4.12;
      this.percent = Math.floor(this.totalSize / (this.maxSize / 100));
    });

    const initPath = (window as any).location.href.split('/').pop();
    this.setActiveRoute(initPath);
  }

  public setActiveRoute(val: string): void {
    this.activeLink = val;
  }
}
