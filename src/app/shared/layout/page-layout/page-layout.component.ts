import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  @Input()
  moduleName: string;
  sidenavOpened = true;
  expanded = false;

  @ViewChild('sidenav') sidenavElement: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        this.sidenavOpened = state.matches;
      });
  }

  changeExpand(expanded: boolean) {
    timer(0).subscribe(() => {
      if (this.sidenavOpened) {
        this.expanded = expanded;
      } else {
        this.sidenavElement.toggle();
      }
    });
  }
}
