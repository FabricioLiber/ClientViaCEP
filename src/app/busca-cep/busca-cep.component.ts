import { Component, OnInit } from '@angular/core';
import { BuscaCepService } from './service/busca-cep.service';
import { Cep } from './entity/cep';
// import {}


@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  cep: String;

  endereco: Cep = null;

  error: Boolean = false;

  constructor(private cepService: BuscaCepService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.cepService
      .getEndereco(this.cep)
      .subscribe(
        res => this.endereco = res,
        err => {
          this.error = true
          this.endereco = null
        }
      )

  }

}
