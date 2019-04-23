import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.router';
import { AppComponent } from './app.component';
import {  MatTableModule,
          MatFormFieldModule,
          MatInputModule,
          MatPaginatorModule,
          MatSortModule,
          MatDialogModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogUsuarioComponent } from './usuario/dialog-usuario/dialog-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MenuListItemComponent,
    MenuNavBarComponent,
    UsuarioComponent,
    DialogUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
  ],
  exports: [
    MatSortModule
  ],
  entryComponents: [
    DialogUsuarioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
