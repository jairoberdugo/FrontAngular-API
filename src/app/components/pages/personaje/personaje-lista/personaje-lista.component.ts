import { Component } from '@angular/core';
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

constructor(private PersonajeSvc: PersonajeService){}

ngOnInit(): void{
  this.getDataFromService()
}

private getDataFromService():void{
  this.PersonajeSvc.searchCharacters(this.query,this.NumPage).pipe(
    take(1)
  ).subscribe((res:any)=>{
    console.log('response=> ',res);
    const{info,results}=res;
    this.personajes=[...this.personajes, ...results];
    this.info=info;
  })
}


}
