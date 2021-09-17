import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {
  constructor(
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {}
  inicio() {
    //utilizo api enrutador para llamar la pagina (paso 2 luego del html
    this.router.navigate(['/inicio']);
  }

  inicioSesion() {
    this.router.navigate(['/inicio-sesion']);
  }

  saludar() {
    this.presentToast('Tu Contraseña fue enviada');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      // position: 'bottom',
      cssClass: 'toast',
    });
    toast.present();
  }
}
