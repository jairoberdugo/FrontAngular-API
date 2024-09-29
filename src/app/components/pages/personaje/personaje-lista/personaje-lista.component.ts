import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { personaje } from '@app/base/interface/perso.interface';
import { PersonajeService } from '@app/base/service/personaje.service';
import { take } from 'rxjs';
type RequestInfo={
  next:string | null;
}

@Component({
  selector: 'app-personaje-lista',
  templateUrl: './personaje-lista.component.html',
  styleUrl: './personaje-lista.component.scss'
})
export class PersonajeListaComponent {
personajes: personaje[] =[];

info: RequestInfo={
  next:null,
}


private NumPage=1;
private query: string="";
private hScrollh=200;
private sScrollh=500;

constructor(private PersonajeSvc: PersonajeService,private route:ActivatedRoute){}

ngOnInit(): void{
  this.FiltersByQuery()
  //this.getDataFromService()
}

private getDataFromService():void{
  this.PersonajeSvc.searchCharacters(this.query,this.NumPage).pipe(
    take(1)
  ).subscribe((res:any)=>{
    // comprobacion de ejecucion correcta
    if(res?.results?.length){
    //  console.log('response=> ',res); imprimo json resp api
    const{info,results}=res;
    this.personajes=[...this.personajes, ...results];
    this.info=info;
    }
    else {
      this.personajes=[]; // si no obtengo respuesta,asigno array vacio.
    }
    
  })
}

private FiltersByQuery():void{
 this.route.queryParams.pipe(take(1)).subscribe((params)=>{
  console.log('los params son-----> ', params)
  this.query= params['q'];
  this.getDataFromService();
 });
}


}
