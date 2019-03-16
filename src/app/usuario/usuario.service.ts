import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../app.api";
import { retry, map } from "rxjs/operators";

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {}

  listaTodos(): Observable<any> {
    return this.http.get<any>(`${API}/usuario`)
      .pipe(retry(10), map((resposta: Response) => resposta.json()))
  }
}
