import { PanelActionsComponent } from './panel/panel-actions/panel-actions.component';
import { PanelContentComponent } from './panel/panel-content/panel-content.component';
import { PanelHeaderComponent } from './panel/panel-header/panel-header.component';
import { CompanyLogoComponent } from './company-logo/company-logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PanelComponent } from './panel/panel.component';
import { PanelFooterComponent } from './panel/panel-footer/panel-footer.component';

const components = [
  PageLayoutComponent,
  MainMenuComponent,
  FooterComponent,
  CompanyLogoComponent,
  UserInfoComponent,
  PanelComponent,
  PanelHeaderComponent,
  PanelContentComponent,
  PanelActionsComponent,
  PanelFooterComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})
export class LayoutModule {}
