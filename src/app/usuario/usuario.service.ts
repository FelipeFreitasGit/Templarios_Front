import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../app.api";
import { retry, map, tap } from "rxjs/operators";
import { Usuario } from "../shared/usuario.model";

@Injectable()
export class UsuarioService {

  user: Usuario

  constructor(private http: HttpClient) {}

  listaTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API}/usuario`);
  }
}
