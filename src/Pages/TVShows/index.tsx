import React,  {useEffect, useState, useContext} from 'react';
import LeftSection from '../../Atoms/LeftSection';
import MainSection from '../../Atoms/MainSection';
import RightSection from '../../Atoms/RightSection';
import { TVShowModalContext, TVShowModal, TVShowModalType } from './TVShowModal';
import { TVShow, Genre, } from './model';
import { updateTVShowsToWatch} from '../../utils/persist.localstorage';
import { 
  getTVShowDiscovery,
  getTVShowsGenres
} from './apiCalls';
import { useNavigate, useNavigationType, } from 'react-router-dom';
import { PopularTVShows, TVShowsBanner, TrendingTVShows } from './atoms';

interface DiscoverTvShow {
  backdrop_path: string,
  first_air_date: string,
  genre_ids: Array<number>,
  id: number
  name: string,
  origin_country: Array<string>,
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number
}

const MiddleSection = () => {
  const navigate = useNavigate();
  const [tvShowDiscovery, setTVShowDiscovery] = useState<Array<DiscoverTvShow>>([]);

  useEffect(()=>{
    
    getTVShowDiscovery().then((response)=>{
      if (!response) {
        return;
      }
      if (response.status >= 200 && response.status <= 400) {
        setTVShowDiscovery(response.data.results);
      }
    });
  }, []);

  

  const ShowDiscoverTVShows: React.FC<DiscoverTvShow> = (props) => {
    const {setModalData, setModalState} = useContext(TVShowModalContext)  as TVShowModalType;  
    return (
      <div style={{height:'10rem',}}>
        <div>
          <img style={{width:'8rem', height:'10.1rem', borderRadius:'8px'}} src={`https://image.tmdb.org/t/p/original${props.poster_path}`}/>
          <div style={{position:'relative', top:'-2.5rem',padding:'0.3rem', height:'2rem'}}>
            <div className='card-actions'>
              <button onClick={()=>{updateTVShowsToWatch(props)}}>+</button>
              <button onClick={()=>{
                setModalData(props);
                setModalState(true);
              }}>More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div>
      <div className='actions-setion-header'>
        <h4>Discover</h4>
        <button onClick={()=>navigate(`../See-More/Discover?filters=false`,{relative:'path', state:{list: tvShowDiscovery}} )} style={{color:'#c5c5c5', fontWeight:'bold', fontSize:'0.8rem', border:'none', borderRadius:'8px', backgroundColor:'#fafafa33', height:'1.5rem', alignSelf:'center', marginRight:'0.7rem'}}>{'See All >>'}</button>
      </div>
      <div className='top-rated-cards'>
        {
          tvShowDiscovery?.map(
          (value,)=> {
            return (<ShowDiscoverTVShows
              backdrop_path={value.backdrop_path}
              first_air_date={value.first_air_date}
              genre_ids= {value.genre_ids}
              id= {value.id}
              name={value.name}
              origin_country={value.origin_country}
              original_language= {value.original_language}
              original_name= {value.original_name}
              overview= {value.overview}
              popularity={value.popularity}
              poster_path= {value.poster_path}
              vote_average={value.vote_average}
              vote_count={value.vote_count}
              key={value.id}
          />)}
        )}
      </div>
    </div>
  );
}

const LowerSection = () => {
  const [movieGenres, setMovieGenres] = useState<Array<Genre> | []>([]);
  const navigate = useNavigate();
  useEffect(()=>{  
    getTVShowsGenres().then((response)=>{
      if (!response) {
        return;
      }
      if (response.status >= 200 && response.status <= 400) {
        setMovieGenres(response.data.genres);
      }
    });
  }, []);

  const ShowGenres: React.FC<Genre> = ({name, poster_path}) => {
    return (
    <div style={{display:'flex',width: '8rem', height:'5rem', borderRadius:'8px', backgroundColor:'#16181EB2', justifyContent:'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path}`, backgroundSize:'8rem auto'}}>
        <a href={`/Show-Genre?genre=${name}category=tv-shows`}>
          <p style={{textAlign:'center', alignSelf:'center',fontWeight:'bolder'}}>{name}</p>
        </a>
    </div>
    );
  }

  return (
    <div className='proob'>
      <div className='actions-setion-header' style={{margin:'1rem 0 0',}}>
        <h4>Genres</h4>
        <button 
        onClick={()=>navigate(`../See-More/Genres?TVShows=true?filters=false`,{relative:'path', state:{list: movieGenres}} )}
        style={{color:'#c5c5c5', fontWeight:'bold', fontSize:'0.8rem', border:'none', borderRadius:'8px', backgroundColor:'#fafafa33', height:'1.5rem', alignSelf:'center', marginRight:'0.7rem'}}>{'See All >>'}</button>
      </div>
      <div className='genre-carousel'>
        {
          movieGenres?.map(
          (value: Genre,index:number) => <ShowGenres name={value.name} id={value.id} poster_path={value?.poster_path} key={index}/>
        )}
      </div>
    </div>
  );
}

function TVShowsPage() {
  const [menuState, setMenuState] = useState<boolean>( false );
  const [modalData, setModalData] = useState<TVShow | {}>({});
  const [modalState, setModalState] = useState<boolean>( false );

  useEffect(() => {
    document.getElementsByClassName('loading')[0].classList.add('loading-off');
    
    return () => {
      document.getElementsByClassName('loading')[0].classList.remove('loading-off')
    };
  }, []);

  return (
    <>
      <TVShowModalContext.Provider
        value={{
          modalData,
          setModalData,
          modalState,
          setModalState
        }}>
          <LeftSection app_section_class={'tv-shows-screen'} menuState={menuState} setMenuState={setMenuState}/>
          <MainSection tabTitle={2} menuState={menuState} setMenuState={setMenuState}>
            <TVShowsBanner />
            <TrendingTVShows />
            <PopularTVShows />
            
          </MainSection>

          <RightSection>
            <MiddleSection />
            <LowerSection />
            <a href='https://www.themoviedb.org' className='backed-by-tmdb-logo'>
                <img 
                src={'/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}/>
            </a>  
            
          </RightSection>

          <TVShowModal/>
      </TVShowModalContext.Provider>
    </>
  )
}

export default TVShowsPage;