import { MenuItemRaw } from './menu-item-raw.model';

export interface MenuItem extends MenuItemRaw {
  children: MenuItem[];
}
