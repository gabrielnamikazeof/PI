import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  titulo: string;

  constructor(public router: Router) {
    this.titulo = 'Mecânico';
  }

  ngOnInit() {
  }
  btn1() {
    this.router.navigateByUrl('/inicio');
  }

}
