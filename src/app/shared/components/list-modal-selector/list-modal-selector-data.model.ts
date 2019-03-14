import { BasicItem } from './../../../core/models/basic-item.model';
export interface ListModalSelectorModel {
  title: string;
  items: BasicItem[];
  selectedItems: BasicItem[];
  columns?: boolean;
}
