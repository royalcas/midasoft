import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { BootstrapModule } from './../ngb.module';
import { ColorConventionsComponent } from './panel/color-conventions/color-conventions.component';
import { ConventionsModalComponent } from './panel/color-conventions/conventions-modal/conventions-modal.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
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
import { MaterialModule } from '../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubmoduleLayoutComponent } from './submodule-layout/submodule-layout.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

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
  PanelFooterComponent,
  EmptyLayoutComponent,
  ConventionsModalComponent,
  ColorConventionsComponent,
  SubmoduleLayoutComponent,
  CurrentTimeComponent,
  HeaderComponent,
  BreadcrumbsComponent,
  MenuComponent,
  MenuItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: components,
  exports: components,
  entryComponents: [ConventionsModalComponent]
})
export class LayoutModule {}
