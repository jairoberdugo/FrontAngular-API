import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.scss',
})
export class FormSearchComponent {

  constructor(private router: Router) { }


  onsearch(value: string) {
    console.log('buscador: ', value) // me aseguro de que si este tomando el valor del buscador
    if (value && value.length > 3) {
      this.router.navigate(['/personaje-lista'], {  // queryParams van en el segundo argumento
        queryParams: { q: value },
      });
    }
  }
  }
