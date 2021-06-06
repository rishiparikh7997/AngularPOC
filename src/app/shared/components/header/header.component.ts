import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NAV_TABS_AND_ASSOCIATION } from '../../constants/UI_Constants';
import { BucketService } from '../../services/bucket.service';
import { environment } from '../../../../environments/environment';
import { INavElements } from '../../interfaces/nav-element';
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
        next: () => {
          console.log('Bucket name pushed'),
            alert('Zip successful, great job!');
        },
        error: () => {
          console.log('Failed to push');
          alert('Failed to push, try again after some time');
        },
      });
    }
  }

  exportToExcel() {
    this.exportExcel.next();
  }
}
