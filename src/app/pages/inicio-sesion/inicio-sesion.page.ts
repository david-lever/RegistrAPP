import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'inicio-sesion.page.html',
  styleUrls: ['inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  dato: string;
  password: string;

  constructor(private router: Router) {}
  ngOnInit() {}
  //esto del private router: Router fue necesario hacerlo y debo seleccionar Router para que lo importe.

  inicio() {
    //utilizo api enrutador para llamar la pagina (paso 2 luego del html
    let navigationExtras: NavigationExtras = {
      state: { dato: this.dato, password: this.password }, //asigno un elemento con clave y valor
    };
    //le doy al navigationExtras como parametro para enviar el dato
    this.router.navigate(['/inicio'], navigationExtras);
  }
  restablecer() {
    //esto me manda a reestablecer la clave
    this.router.navigate(['/recuperar-password']);
  }
}
