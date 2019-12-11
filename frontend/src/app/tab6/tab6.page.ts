import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registro_PacienteService } from '../Services/registro/registro.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  constructor(private service: Registro_PacienteService) { }

  model: any = {};
  ngOnInit() {
    this.model = {
      nombre : null,
      documento : null,
      tipo_identificacion : null,
      diagnostico : null,
      users_id: 3
      };
  }
  public registro_paciente ( forma: NgForm ) {
    if (forma.valid) {
       this.service.postRegistro_Paciente('registro_paciente', this.model).subscribe( res => {
         console.log('Respuesta', res);
       });
    }
}
public evento(evento:Event) {
  console.log(evento);
}
}
