import { ReactElement, useState } from "react";
import {
  useParams, useLocation,
} from "react-router-dom";
import './index.css';
import LeftSection from "../../Atoms/LeftSection";
import MainSection from "../../Atoms/MainSection";
import { ShowTrendingTVShow } from "../TVShows/atoms";
import { TVShow } from "../TVShows/model";
import { TVShowModal, TVShowModalContext } from "../TVShows/TVShowModal";

/**
 * Use component as a page to see more items that are given by the header button 'See more >>'
 * Use url parameters to retrieve title, and info that indiciate whether to show filters or not
*/
const SeeMorePage = () => {
  const [modalData, setModalData] = useState<TVShow | {}>({});
  const [menuState, setMenuState] = useState<boolean>( false );
  const [modalState, setModalState] = useState<boolean>( false );
  
  let { title } = useParams();
  let location = useLocation();
  let content = location.state.list;

  interface IIndex {
    title: string;
    elem: ReactElement;
  };


  const SeeMoreTVShows = () => {
    
    const TrendingTVShows = () => {
      return (
        <>
        {
          content?.map(
          (value: TVShow, ) => {
            return(
              <ShowTrendingTVShow 
                adult={value.adult}
                backdrop_path={value.backdrop_path}
                genre_ids= {value.genre_ids}
                id= {value.id}
                first_air_date={value.first_air_date}
                original_language= {value.original_language}
                original_title= {value.original_title}
                origin_country={value.origin_country}
                overview= {value.overview}
                popularity={value.popularity}
                poster_path= {value.poster_path}
                release_date= {value.release_date}
                name={value.name}
                video= {value.video}
                vote_average={value.vote_average}
                vote_count={value.vote_count}
                key={value.id}
              />
            );
          }
        )}
        </>
      );
    };
  
    const Discover = () => {
      return (
        <>
          {
            content?.map(
            (value: TVShow,) => {
              return(
                <ShowTrendingTVShow 
                  adult={value.adult}
                  backdrop_path={value.backdrop_path}
                  genre_ids= {value.genre_ids}
                  id= {value.id}
                  first_air_date={value.first_air_date}
                  original_language= {value.original_language}
                  original_title= {value.original_title}
                  origin_country={value.origin_country}
                  overview= {value.overview}
                  popularity={value.popularity}
                  poster_path= {value.poster_path}
                  release_date= {value.release_date}
                  name={value.name}
                  video= {value.video}
                  vote_average={value.vote_average}
                  vote_count={value.vote_count}
                  key={value.id}
                />
              );
            }
          )}
        </>
      );
    };
  
    const Genres = () => {
      return (
        <>
          {
            content?.map(
            (value: any, ) => {
              return (
                <button onClick={()=>null} key={value.id} style={{display:'flex', borderRadius:'8px', justifyContent:'center', height:'7rem', width:'10rem',backgroundColor:'#21242D', border:'none', color:'white' }}>
                  <div style={{borderRadius:'8px', width: '100%',  alignSelf:'center'}}>
                    <p style={{textAlign:'center', fontWeight:'bolder', fontSize:'1rem'}}>{value.name}</p>
                  </div>
                </button>
              );
            }
          )}
        </>
      );
    };

    const index: Array<IIndex> = [
      {title: 'Trending-This-Week', elem: <TrendingTVShows/>},
      {title: 'Discover', elem:  <Discover />},
      {title: 'Genres', elem:  <Genres />}
    ];

    return (
      <TVShowModalContext.Provider
      value={{
        modalData,
        setModalData,
        modalState,
        setModalState
      }}>
          <LeftSection app_section_class="see-more-screen" setMenuState={setMenuState} menuState={menuState}/>
          <MainSection tabTitle={-1} showBackButton={true} setMenuState={setMenuState} menuState={menuState}>
            <h3 className='page-title'>{title?.replace('-', ' ').replace('-', ' ')}</h3>
            <div className="see-more-items-wrapper">
              <div className="see-more-items">
              {index.filter((value:IIndex,)=>value.title === title)[0].elem}
              </div>
            </div>
            <h3 className='pagination-title'><a>1 of 1</a></h3>
          </MainSection>
          <TVShowModal/>
      </TVShowModalContext.Provider>
    );
  }

  return (<SeeMoreTVShows/>);
}

export default SeeMorePage;