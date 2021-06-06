import { Component, Input } from '@angular/core';
import { ITable } from 'src/app/shared/interfaces/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableData: ITable;
  constructor() {
    this.tableData = {
      id: '',
      data: [[]],
      headers: [],
    };
  }
}
