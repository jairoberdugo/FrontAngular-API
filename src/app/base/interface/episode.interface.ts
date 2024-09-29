// Deberá mostrarse el nombre del episodio, la fecha de emisión, 
//la temporada y el número de episodio. El número de temporada y episodio
// se estructura así: "S01E01", donde el número seguido de 'S' representa 
//la temporada y el número seguido de 'E'
export interface episodes {
    id: number;
    name: string; // show
    episode: string; // show destroyed
    url: string; 
    created: string; 
    air_date:string; // show destroyed
}