import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/navItem.model'
import {animate, state, style, transition, trigger} from '@angular/animations'; 

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {

  @Input() item: NavItem;
  @Input() depth: number;
  expanded: boolean;

 constructor() { }

  ngOnInit() {
  }

  onItemSelected(item: NavItem) {

    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}