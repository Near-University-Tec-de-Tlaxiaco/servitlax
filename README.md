# Smart Contract SERVITLAX :briefcase:

## ¿Cómo desplejar este contrato inteligente?
---
### Pré-requisitos.
* Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12 o mayor.
* Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando yarn --version . 
* En caso de no tenerlo, puede instalarlo ejecutando el comando: sudo npm install -g yarn.
* Instale las dependencias de yarn ejecutando yarn install.
* Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/) para realizar pruebas.
* Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute near --version. debe tener instalado es mayor a 3.0.0. En caso de no tenerlo, instálelo ejecutando el comando sudo npm install -g near-cli 

Una vez teniendo instalados los requisitos necesarios ahora si puede proceder a ejecutarlo. 

## Instalación.
---
* Clone el repositorio con git clone https://github.com/Near-University-Tec-de-Tlaxiaco/servitlax.git
* Instalar el paquete con sus respectivas dependenciasCon el comando yarn install
* Este contrato en el codigo ya tiene pruebas unitarias se puede ejecutar con el comando yarn test
* Para construir el contrato. Utilizar el siguiente comando yarn build 
* Para ejecutar el contrato localmente se utiliza el siguiente comando yarn mock 
* Con el comando near login se sincronizara  con la cuenta de tesnet (contratoejemplo.testnet) para posteriormente hacer invocación de operaciones en el contrato
* Inicie sesión en su wallet que creó anteriormente con el código: near login.
* Dentro del repositorio, instale las dependencias del proyecto ejecutando npm install.
* Si quiere desplegar el contrato y probar sus funciones, puedes hacerlo con yarn deploy:dev esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red.

   ## Ejecucion del Contrato Inteligente 
 ---
1. Despues de haber instalado el contrato inteligente y despues de logear tu cuenta con near login, se abrira nuestro navegador para poder
compilar el contrato conyarn asb
2. implementar el contrato near deploy --accountId (CUENTA TESTNET) --wasmFile build/release/contrato.wasm
   
### llamar funciones
* Ingresar nuevo comentario
near call (Cuenta testnet) setcomentario '{ "titulo":"buen trabajo","descripcion":"recomendado","calificacion":5}' --accountId=contarto.testnetD
   ---

## Autores

- [Rosa Salazar Doroteo](https://github.com/Rosa218)
- [Irving Salathiel BArrera Valencia](https://github.com/salathiel1999)
- [Adolfo German Vasquez Rojas](https://github.com/bg55-a)
