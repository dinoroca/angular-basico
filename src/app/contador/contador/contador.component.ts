import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h2>Hola mundo!!!</h2>

        <h1> {{title}} </h1>

        <h2>La base es: {{base}} </h2>

        <button (click)="sumar(-base)"> -{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="sumar(base)"> +{{base}} </button>
    `
})

export class contadorComponent {
    title : string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    sumar(valor: number) {
        this.numero += valor;
    }
}
