import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { NAV_TABS_AND_ASSOCIATION } from '../../constants/UI_Constants';
import { INavElements } from '../../interfaces/nav-element';
import { BucketService } from '../../services/bucket.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [BucketService],
})
export class HeaderComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<string>();
  @Output() exportExcel = new EventEmitter<string>();
  NavElements: Array<INavElements>;
  tabValue: string = '';
  bucketName: string = '';

  constructor(private bucketService: BucketService) {
    this.NavElements = NAV_TABS_AND_ASSOCIATION;
    this.tabValue = NAV_TABS_AND_ASSOCIATION[0].value;
  }

  ngOnInit(): void {
    this.selectedTab.emit(this.tabValue);
  }

  selectedTabValue(event: Event, value: string) {
    event.preventDefault();
    this.tabValue = value;
    this.selectedTab.emit(this.tabValue);
  }

  makeAPICall() {
    const name = environment.bucketName;
    if (name) {
      this.bucketService.addBucketName(name).subscribe({
        next: () => console.log('Bucket name pushed'),
        error: () => console.log('Failed to push'),
      });
      this.bucketName = '';
    }
  }

  exportToExcel() {
    this.exportExcel.next();
  }
}
