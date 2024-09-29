import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { episodes } from '@app/base/interface/episode.interface';
import { PersonajeService } from '@app/base/service/personaje.service';
import { take } from 'rxjs';
type RequestInfo={
  next:string | null;
}

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {
  episodes: episodes[] =[];

  info: RequestInfo={
    next:null,
  }
  
  
  private NumPage=1;
  private query: string="";
  
  constructor(private PersonajeSvc: PersonajeService,private route:ActivatedRoute){}
  
  ngOnInit(): void{
    this.getDataFromService()
  }
  
  private getDataFromService():void{
    this.PersonajeSvc.getEpisodes(this.query,this.NumPage).pipe(
      take(1)
    ).subscribe((res:any)=>{
      // comprobacion de ejecucion correcta
      if(res?.results?.length){
      console.log('response=> ',res); //imprimo json resp api EPISODES
      const{info,results}=res;
      this.episodes=[...this.episodes, ...results];
      this.info=info;
      }
      else {
        this.episodes=[]; // si no obtengo respuesta,asigno array vacio.
      }
      
    })
  }
  
}
