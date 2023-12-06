export interface TVShow{
    name: string;
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
};
  
export  interface TVShows{
    list: Array<TVShow>;
    start?: number;
};
  
export interface TVShowsBannerInterface{
    tvShows: Array<TVShow>;
    setTVShows: (param: Array<TVShow>)=>void;
};

export type TVShowModalType = {
    modalData?: TVShow, 
    setModalData: (value: TVShow)=> void, 
    modalState:boolean, 
    setModalState: (value: boolean)=> void
}

export interface Genre{
    id: number;
    name: string;
    poster_path?: string;
  }