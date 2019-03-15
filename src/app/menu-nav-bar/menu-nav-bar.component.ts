import { Component, OnInit } from '@angular/core';
import { NavItem } from '../shared/navItem.model';
import { MenuService } from '../menu-service';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css'],
  providers: [ MenuService ]
})
export class MenuNavBarComponent implements OnInit {

  public navItems: NavItem[] = []

  constructor(private menuService: MenuService) {
    this.navItems = this.menuService.exibirOptionMenu()
   }

  ngOnInit() {
  }

}
