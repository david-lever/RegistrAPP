# Proyecto

<p align="center">
  <img src="https://github.com/david-lever/RegistrAPP/blob/main/src/assets/logos/registrapp_logo_dark.svg" width="50%" height="50%" />
</p>

## Referencia

<p float="center" align="middle">
  <img src="https://github.com/david-lever/RegistrAPP/blob/main/src/assets/mockup/01_iphone_x_-_start.webp" width="23%" height="23%" /> &nbsp;
  <img src="https://github.com/david-lever/RegistrAPP/blob/main/src/assets/mockup/02_iphone_x_-_login.webp" width="23%" height="23%" /> &nbsp;
  <img src="https://github.com/david-lever/RegistrAPP/blob/main/src/assets/mockup/03_iphone_x_-_home_light.webp" width="23%" height="23%" /> &nbsp;
  <img src="https://github.com/david-lever/RegistrAPP/blob/main/src/assets/mockup/04_iphone_x_-_home_dark.webp" width="23%" height="23%" />
</p>

## Repositorio

Este repositorio contiene el source code de la aplicación móvil híbrida.

## Principales objetivos de la App

- Reducir los tiempos destinados para registrar la asistencia.
- Minimizar errores de registros por motivos ya mencionados.
- Instar a los alumnos a asistir presencialmente a clases.
- Mejorar el proceso de reportes de asistencias.

## Task List

### Sprint 1

- [x] Instalación del ambiente de trabajo node.js.
- [x] Creación e implementación de la App en Ionic.
  - [x] Codificación de las pages.
    - [x] Ingreso de usuario. (Login)
      - [x] Componentes necesarios para el nombre de usuario.
      - [x] Componentes necesarios para la contraseña del usuario.
      - [x] Componentes necesarios para enviar el formulario.
      - [x] Componentes necesarios para restablecer la contraseña.
    - [x] Restablecer contraseña. (Recovery)
      - [x] Componentes necesarios para el nombre de usuario.
      - [x] Componentes necesarios para enviar el formulario.
    - [x] Página de Inicio. (Home)
      - [x] Componentes necesarios para dar la bienvenida al usuario.
      - [x] Componentes a elección en relación con el caso.
  - [x] Utilización de state y datos que cambian en el tiempo.
  - [x] Implementación de animaciones en componentes.
  - [ ] <s>Creación del escáner QR.</s>

### Sprint 2

- [ ] Optimizar las páginas de Ingreso de Usuario (Login), Restablecer Contraseña (Recovery) y Página de Inicio (Home) con las siguientes características:
  - [x] Implementar el diseño según sea el caso generando la lógica de los modelos en los .ts del Page o Component.
  - [x] Implementar el servicio que les permita realizar las consultas hacia el API Rest junto con las funciones permitidas por el servicio.
  - [ ] Ya teniendo el servicio implementado, se deberá implementar las funciones desarrolladas en los Page y Componente que corresponda tanto para casos de éxito como casos de error.
- [x] Aplicar la correcta Persistencia.
  - [x] Integración de Ionic Storage.
- [ ] Los direccionamientos de una página a otra deben ser validados correctamente.
- [x] Creación del escáner QR.

### Sprint 3

- [ ] Optimizar las páginas de Ingreso de Usuario, Restablecer Contraseña y Página de Inicio con las siguientes características:
  - [ ] Realizar pruebas unitarias y pruebas E2E para asegurar la calidad del software, posteriormente deberá preparar la configuración de la aplicación para la generación del APK o Bundle App.
  - [ ] El equipo de trabajo debe firmar el APK sin firmar mediante keytool de Java siguiendo el paso a paso para generar un Key si es que no cuentan con uno.
  - [ ] Una vez firmada la aplicación deberán desarrollar el formulario de “Ficha de Play Store”.
- [ ] Es importante mencionar que la lógica para crear el código QR, cual será desplegado por el Docente en el momento de realizar el proceso de asistencia, se debe desarrollar en esta Evaluación. Para generar este desarrollo existen múltiples herramientas disponibles las cuales los alumnos deben hacer uso de ellas según su preferencia. Se sugiere utilizar https://www.qrcode.com/ que es la versión original de esta tecnología.
- [ ] Registrar la información obtenida en el código QR. Este registro debe ser enviado vía correo al docente, a través del identificador uniforme de recursos URI mailto.

## Grupo N° 12 - Sección 003D

### Integrantes

#### Cesar Gonzales [@cesargonzalesdanton](https://github.com/cesargonzalesdanton)

#### Kristel Mercurino [@KristelMercurino](https://github.com/KristelMercurino)

#### David Lever [@david-lever](https://github.com/david-lever)
