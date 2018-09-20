import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-submodule-layout',
  templateUrl: './submodule-layout.component.html',
  styleUrls: ['./submodule-layout.component.scss']
})
export class SubmoduleLayoutComponent implements OnInit {
  faHome = faHome;
  moduleName: string;

  modules = [
    {
      segment: 'organizacional',
      name: 'Gestión Organizacional'
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url
      .pipe(
        mergeMap(segments => {
          if (!segments || segments.length === 0) {
            return of('');
          }
          this.mapUrlSegmentToModuleName(segments[0].path);
        })
      )
      .subscribe(moduleName => {
        this.moduleName = moduleName;
      });
  }

  mapUrlSegmentToModuleName(segment: string): Observable<string> {
    const nameMapping = this.modules.find(
      segmentMapping => segmentMapping.segment === segment
    );
    const moduleName = nameMapping ? nameMapping.name : '';
    return of(moduleName);
  }
}
