import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { NAV_TABS_AND_ASSOCIATION } from '../app/shared/constants/UI_Constants';
import { INavElements } from './shared/interfaces/nav-element';
import { ITable } from './shared/interfaces/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
  selectedTab: string = '';
  table: HTMLElement | null;
  tableData: ITable | undefined;
  navAssociations: Array<INavElements>;

  constructor() {
    this.table = <HTMLElement>document.createElement('table');
    this.tableData = {
      id: '',
      headers: [],
      data: [[]],
    };
    this.navAssociations = NAV_TABS_AND_ASSOCIATION;
  }

  selectedTabValue(value: string) {
    const tabData: INavElements | undefined = NAV_TABS_AND_ASSOCIATION.find(
      (data) => data.value === value
    );
    this.tableData = tabData?.table;
    this.selectedTab = value;
  }

  exportToExcel(): void {
    const fileName = `ExcelSheet-${this.selectedTab}.xlsx`;
    const table = document.getElementById(`${this.tableData?.id}`);

    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Table');

    XLSX.writeFile(workbook, fileName);
  }
}
