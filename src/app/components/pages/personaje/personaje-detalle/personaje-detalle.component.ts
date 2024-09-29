import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { personaje } from '@app/base/interface/perso.interface';
import { PersonajeService } from '@app/base/service/personaje.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.component.html',
  styleUrls: ['./personaje-detalle.component.scss']
})
export class PersonajeDetalleComponent implements OnInit {
  personaje$: Observable<personaje> | undefined; // Inicializado como undefined

  constructor(
    private route: ActivatedRoute,
    private personajeSvc: PersonajeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.personaje$ = this.personajeSvc.getDetails(id);
    });
  }

  onGoBack(): void {
    this.location.back();
  }
}
