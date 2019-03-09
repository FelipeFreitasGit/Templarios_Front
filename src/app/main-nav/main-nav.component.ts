import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NavItem } from '../shared/navItem.model'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  navItems: NavItem[] = [
    {
      displayName: 'Eventos',
      iconName: '',
      route: '',
      children: []
    },
    {
      displayName: 'Cadastro',
      iconName: '',
      route: '',
      children: [
        {
          displayName: 'Membro',
          iconName: '',
          route: '',
          children: []
        },
        {
          displayName: 'Aniversário',
          iconName: '',
          route: '',
          children: []
        },
        {
          displayName: 'Consulta',
          iconName: '',
          route: '',
          children: []
        },
      ]
    },
  ]
}
