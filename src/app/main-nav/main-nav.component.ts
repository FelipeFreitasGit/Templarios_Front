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
      iconName: 'event',
      route: '',
      children: []
    },
    {
      displayName: 'Cadastro',
      iconName: 'group',
      route: '',
      children: [
        {
          displayName: 'Membro',
          iconName: 'person',
          route: '',
          children: []
        },
        {
          displayName: 'Aniversário',
          iconName: 'person',
          route: '',
          children: []
        },
        {
          displayName: 'Consulta',
          iconName: 'find_in_page',
          route: '',
          children: []
        },
      ]
    },
    {
      displayName: 'Trabalhos',
      iconName: 'work',
      route: '',
      children: []
    },
  ]
}
