import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from 'src/services/post';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarios: any;
  limit: 15;
  start: 0;
  nome: '';

  titulo: string;

  constructor(
    public router: Router,
    private route: Router,
    private provider: Post
    ) {
    this.titulo = 'Mecânico';
  }

  ngOnInit() {
  }
  btn1() {
    this.router.navigateByUrl('/inicio');
  }

  ionViewWillEnter() {
    this.usuarios = [];
    this.limit = 15;
    this.start = 0;
    this.nome = '';
    this.carregarLista();
  }

  carregarLista() {
    return new Promise(resolve => {
      const dados = {
        requisicao: 'listar',
        nome: this.nome,
        limit: this.limit,
        start: this.start
      };

      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        if (data['result'] !== 0) {
          for (let usuario of data['result']) {
            this.usuarios.push(usuario);
          };
          resolve(true);
        }
      });
    });
  }

  detalheUsuario(id: any, nome: any, email: any, nivel: any) {
    this.route.navigate([
      '/detalhe-usuario/' +
      id + '/' +
      nome + '/' +
      email + '/' +
      nivel
    ]);
  }
}
