export interface Movie{
    title: string;
    video: boolean;
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    origin_country?: Array<string>;
    original_title: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date: string;
    vote_average?: number;
    vote_count?: number;
}
  
export  interface Movies{
    list: Array<Movie>;
    start?: number;
};
  
export interface MovieBannerInterface{
    movies: Array<Movie>;
    setMovies: (param: Array<Movie>)=>void;
};

export type MovieModalType = {
    modalData: Movie | {}, 
    setModalData: (value: Movie | {})=> void, 
    modalState:boolean, 
    setModalState: (value: boolean)=> void
}

export interface Genre{
    id: number;
    name: string;
    poster_path?: string;
  }