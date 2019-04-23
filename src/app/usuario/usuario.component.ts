import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,
        MatPaginator,
        MatSort} from '@angular/material';
import { UsuarioService } from './usuario.service'
import { Usuario } from '../shared/usuario.model';
import { MatDialog } from '@angular/material';
import { DialogUsuarioComponent } from './dialog-usuario/dialog-usuario.component'


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ UsuarioService ]
})
export class UsuarioComponent implements OnInit {

  dataSource = new MatTableDataSource<Usuario>();
  displayedColumns = [ 'Cadastro', 'Nome', 'Profissão', 'CPF','RG', 'Nascimento',
                        'Telefone', 'E-mail', 'Nivel', 'Excluir','Alterar' ];

  constructor(
      private usuarioService: UsuarioService,
      public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.listaTodos()

    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listaTodos = () => {
    this.usuarioService.listaTodos().subscribe(res => {
      this.dataSource.data = res as Usuario[];
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogUsuarioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
