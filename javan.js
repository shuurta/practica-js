


/*
 const damere = ()=>{
     num1 = prompt('cuanto oro tenes?');
     num2 = prompt('cuantos diamantes tienes?');
    return num1 = parseInt(num1),num2 = parseInt(num2)
 }

 const suamar = ()=>{
    res = num1 + num2 ;
    document.write ('usted tiene ' + res + ' piedras preciosas');
 }


    damere();
    suamar();
*/

















/*
const preguntaredad = ()=>{

hora=11
    while(hora <= 14 ){
        alert('son las ' + hora);


        alert('HOLA, te invito a pasar a mi fiesta');
        let edad = prompt('por favor ingrese si edad ');

        if (edad >= 18){
            alert("useted puede pasar a la fiesta.");
        }

        else if (edad < 18){
            alert('usted no puede pasar, por favor retirese.');
        }

        if(hora == 14 & edad>=18)
        alert('usted puede pasar gratis' )
        hora ++;

    }



    return edad=parseInt(edad);
}

preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
preguntaredad()
*/




/*
const alumnospresentes = (dias)=>{


    pregunta = prompt('cuantos alumnos vienieron hoy?')
    if (pregunta == 19){
        alert('hoy vienieron todos los alumnos')
        document.write ('el aula esta completa bro ')
        document.write (' y es el '+dias+' dia' )

    }
    else if(pregunta < 19 && pregunta > 1 ){
        alert("el aula esta incompleta")
        document.write ('hoy vinieron ' + pregunta + ' alumnos')
        document.write (' y es el '+dias+' dia' )



    }
    else if(pregunta == 1 ){
        alert("el aula esta incompleta")
        document.write ('hoy vino ' + pregunta + ' alumno')
        document.write (' y es el '+dias+' dia' )



    }


    pregunta = parseInt(pregunta)


}



alumnospresentes(1)
alumnospresentes(2)
alumnospresentes(3)
alumnospresentes(4)*/


/*
class animal{
    constructor(edad,color,especie){
                this.edad = edad
                this.color = color
                this.especie = especie

}
}
class Perro extends animal
    constructor(edad,color,especie,raza){
    super(edad,color,especie)
    this.raza = null
}

const perro = new animal()*/







// class Celulares {
//     constructor(color, peso, ram, camara, pantalla) {
//         this.color = color;
//         this.peso = peso;
//         this.ram = ram;
//         this.camara = camara;
//         this.pantalla = pantalla;
//         this.prendido = false;

//     }

//     prender() {
//         if (this.prendido == false) {
//             alert('cargando...');
//             alert("el celular se prendio!!!");
//             this.prendido = true;
//         }
//         else if (this.prendido == true) {
//             alert('cargando...')
//             alert('el celular se apago...')
//             this.prendido = false;



//         }

//     }
//     reinicar() {
//         if (this.prendido == true) {
//             aler('reiniciando celular...')
//             aler('el celular se reinicio')
//         }
//         else {
//             aler("el celular esta apagado");
//         }
//     }
//     foto() {
//         if (this.prendido == true) {
//             alert("tomando foto...")
//             alert(`se ha tomado la foto en una resulucion de: ${this.camara}`)
//         }
//         else {
//             alert("el celular esta apagado, no se puede tomar la foto.")
//         }
//     }
//     grabar() {
//         if (this.prendido == true) {
//             alert(`grabando video en: ${this.camara} `)

//         }
//         else {
//             alert("no se puede grabar porque el celular esta apagado.")
//         }
//     }
//     mobileInfo() {
//         return `
//         color: <b>${this.color}</b></br>
//         peso: <b>${this.peso}</b></br>
//         ram: <b>${this.ram}</b></br>
//         camara: <b>${this.camara}</b></br>
//         pantalla: <b>${this.pantalla}</b></br>
//          `;
//     }
// }
// const celular1 = new Celulares('violeta', '500gramos', '1gb', '400mp', '800pixeles');
// const celular2 = new Celulares('celeste', '400gramos', '1gb', '450mp', '1000pixeles');
// const celular3 = new Celulares('plateado', '300gramos', '2gb', '500mp', '1000pixeles');





// class CelularesAltaGama extends Celulares {
//     constructor(color, peso, ram, camara, pantalla, segundacam){
//         super(color, peso, ram, camara, pantalla)
//         this.segundacamara = segundacam;
//         this.prendido = false;
//     }







// camaralenta(){
//     if(this.prendido = true){
//         alert('camara modo lento activada');
//     }

// }
// reconocimiento(){
//     if(this.prendido = true){
//         alert("reconociendo rostro....");
//         alert("rostro no guardado.");
//     }
// }
// mobileInfoAltaGama(){
//     return `
//     <b>CELULARES DE ALTA GAMA</b></br>
//     color: <b>${this.color}</b></br>
//     peso: <b>${this.peso}</b></br>
//     ram: <b>${this.ram}</b></br>
//     camara: <b>${this.camara}</b></br>
//     pantalla: <b>${this.pantalla}</b></br>
//     segunda camara: <b>${this.segundacamara} </b></br>
//      `;

// }
// }
// const CelularesAltaGama1 = new CelularesAltaGama('verde','100gramos','8gb','1500mp','3000px','400mp' )
// const CelularesAltaGama2 = new CelularesAltaGama('azul','150gramos','16gb','1550mp','3000px', '400mp' )













// class apps {
//     constructor(cd,puntacion,peso){
//     this.cantidadDeDescargas = cd
//     this.puntacion = puntacion
//     this.peso = peso
//     this.instalada = false
//     this.abierta = false

//     }


//     instalar(){
//         if(this.instalada == false){
//         let resp = prompt('desea instalar esta app?(escriba si o no) ')

//         if(resp == 'si'){
//             alert('se ha descargado la app correctamente!!!')
//         }
//         else{
//             alert('no se ha podido descargar la app')
//         }

//         }

//         this.instalada = true
//     }

//     abrir(){
//         if(this.instalada == true && this.abierta == false){
//         alert("se esta abriendo la app, por favor espere...")
//         alert("la app se ha abierto correctamente!!!")
//         }
//         this.abierta = true


//     }

//     cerrar(){
//         if(this.instalada == true && this.abierta == true){
//         alert("se ha cerrado la app correctamente.")
//      }
//      this.abierta = false

//     }

//     desinstalar(){
//         if(this.instalada == true){
//         let resp1 = prompt('seguro que quieres desinstalar esta app?(responder si o no)')
//            if(resp1 == "si"){
//             alert("se ha desinstalado correctamente.")
//             this.instalada = false
//            }
//             else {
//                 alert("la app no se desinstalo.")

//            }

//         }

//     }
// }
// const app1 = new apps("40k","1 estrellas",'1gb')
// const app2 = new apps("1k","4.5 estrellas",'3gb')
// const app3 = new apps("20k","5 estrellas",'5gb')
// const app4 = new apps("55k","3.4 estrellas",'560mb')
// const app5 = new apps("4k","1 estrellas",'1gb')
// const app6 = new apps("2mil","2 estrellas",'4gb')
// const app7 = new apps("120","2 estrellas",'120mb')


















// calculadora
let num1 
let num2 
const sumar = ()=>{
    let res = num1 + num2
    alert(res)
}
const restar = ()=>{
    let res = num1 - num2
    alert(res)
}
const multiplicar = ()=>{
    let res = num1 * num2
    alert(res)
}
const dividir = ()=>{
    let res = num1 / num2
}
const raiz3 = ()=>{
    let res = num1.cbrt()
    alert(res)
}
const raiz2 = ()=>{
    let res = num1.sqrt()
    alert(res)
}
const potencia = ()=>{
    let res = num1 ** 2
}

const preguntar = ()=>{
    respuesta = Number.isInteger(prompt("que cuanta queres hacer?  1=sumar  2=restar  3=multiplicar  4=dividir  5=raiz cubica  6=raiz cuadrada  7=potencia"))
    if(respuesta == 1){
        num1 = Number.isInteger(prompt('primer numero que desea sumar'))
        num2 = Number.isInteger(prompt('segundo numero'))
        sumar()
    }
    else if(respuesta == 2){
        num1 = Number.isInteger(prompt('primer numero para restar'))
        num2 = Number.isInteger()prompt('segundo numero')
        restar()
    }
    else if(respuesta == 3){
        num1 = Number.isInteger()prompt('primer numero para multiplicar')
        num2 = Number.isInteger()prompt('segundo numero')
        multiplicar()
    }
    else if(respuesta == 4){
        num1 = Number.isInteger()prompt('primer numero para dividir')
        num2 = Number.isInteger()prompt('segundo numero')
        dividir()
    }
    else if(respuesta == 5){
        num1 = Number.isInteger()prompt('a que numero desea sacarle la raiz cubica?')
        raiz3()
    }
    else if(respuesta == 6){
        num1 = Number.isInteger()prompt('a que numero desea sacarle la raiz cuadrada?')
        raiz2()
    }
    else if(respuesta == 7){
        num1 = Number.isInteger()prompt('que numero desea elevar al cuadrado?')
        potencia()
    }
    else{
        alert('el numero ingresado no corresponde a nunguna operacion...')
    }
}






preguntar()










































