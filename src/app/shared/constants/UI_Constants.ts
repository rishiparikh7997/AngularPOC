import { INavElements } from '../interfaces/nav-element';
import { ITable } from '../interfaces/table';

export const TABLE_1: ITable = {
  id: 'table-tab-1',
  headers: ['#', 'First', 'Last', 'Handle'],
  data: [['1', 'Mark', 'Otto', '@mdo']],
};
export const TABLE_2: ITable = {
  id: 'table-tab-2',
  headers: ['#', 'First', 'Last', 'Handle'],
  data: [['2', 'Jacob', 'Thornton', '@fat']],
};
export const TABLE_3: ITable = {
  id: 'table-tab-3',
  headers: ['#', 'First', 'Last', 'Handle'],
  data: [['3', 'Larry', 'Wilson', '@twitter']],
};

export const NAV_TABS_AND_ASSOCIATION: Array<INavElements> = [
  {
    id: 1,
    value: 'Tab-1',
    href: '#',
    style: 'nav-link',
    table: TABLE_1,
  },
  {
    id: 2,
    value: 'Tab-2',
    href: '#',
    style: 'nav-link',
    table: TABLE_2,
  },
  {
    id: 3,
    value: 'Tab-3',
    href: '#',
    style: 'nav-link',
    table: TABLE_3,
  },
];
