import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  btncon() {
    this.router.navigateByUrl('/login');
  }

}
