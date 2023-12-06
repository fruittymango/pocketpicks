import React,  {useEffect, useState, useContext, useRef} from 'react';
import { MovieModalContext,} from './MovieModal';
import { Movie, MovieModalType, Genre } from './model';
import { updateFavouritesMovies, updateMoviesToWatch} from '../../utils/persist.localstorage';
import { 
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getMovieGenres
} from './apiCalls';
import { useNavigate } from 'react-router-dom';

export const MoviesBanner = () => {
  const {setModalData, setModalState} = useContext(MovieModalContext)  as MovieModalType;
  const [trendingTVShows, setTrendingTVShows] = useState<Array<Movie>>([]);
  const [currentIndex, setIndex] = useState(0);
  let timeOutId = useRef<any | null>(null);

  useEffect(()=>{
    getNowPlayingMovies().then((response) => {
      if (!response) {
        return;
      }
      if (response.status >= 200 && response.status <= 400) {
        setTrendingTVShows(response.data.results);
      }
    });
  }, []);

  useEffect(()=>{

    const id = setTimeout( () => {
      setIndex(currentIndex > trendingTVShows.length - 2 ? 0 : currentIndex+1);
    }, 5000);

    timeOutId.current = id;
    return () => {
      clearTimeout(timeOutId.current);
    };

  },[currentIndex, trendingTVShows]);

  return(
    <div className='banner' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingTVShows[currentIndex]?.backdrop_path || '' }`}}>
      <h2 className='banner-title'>{trendingTVShows[currentIndex]?.title || ''}</h2>

      <div className='change-cover-buttons'>
        <button onClick={()=> setIndex(currentIndex - 1 < 0? trendingTVShows?.length-1 : currentIndex - 1)}>{"<"}</button>
        <button onClick={()=> setIndex(currentIndex + 1 > trendingTVShows?.length-1? 0 : currentIndex+1)}>{">"}</button>
      </div>

      <div className="banner-footer">
        <button onClick={()=>updateMoviesToWatch(trendingTVShows[currentIndex])} className='watch-list'>+ Watchlist</button>
        {/* <button className='active-flag'>
          <button onClick={()=>setIndex(0)} style={{backgroundColor: currentIndex < 1? '#00B9AE':'#F9F9F9'}} />
          <button onClick={()=>setIndex(Math.round((trendingTVShows.length-1)/2))} style={{backgroundColor: currentIndex > 0 && currentIndex < trendingTVShows?.length-1? '#00B9AE':'#F9F9F9'}}/>
          <button onClick={()=>setIndex(trendingTVShows.length-1)} style={{backgroundColor: currentIndex == trendingTVShows?.length-1? '#00B9AE':'#F9F9F9'}}/>
        </button> */}
        <button onClick={()=>{
          setModalData(trendingTVShows[currentIndex]);
          setModalState(true);
        }} className='more-button'>More</button>
      </div>
    </div>
  );
};

export const TrendingMovies = () => {
    const navigate = useNavigate();
    const [tvShows, setTrendingTVShowsThisWee] = useState<Array<Movie>>([]);
  
    useEffect(()=>{
      getTrendingMovies().then((response) => {
        if (!response) {
          return;
        }
  
        if (response.status >= 200 && response.status <= 400) {
          setTrendingTVShowsThisWee(response.data.results);
        }
      });
    }, []);
  
    return(
      <div className='carousel'>
          <div className='flex-space-between-row'>
          <h3 className='primary-header'>Trending Movies</h3>
          <button className='primary-header-button' onClick={()=>{
              navigate(`../See-More/Trending-This-Week?filters=false`,{relative:'path', state:{list: tvShows}} );
          }}>{'See All >>'}</button>
          </div>
          <div className='now-playing-movies-carousel'>
          {
              tvShows?.map(
              (value,)=> <ShowTrendingMovie
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
                  title={value.title}
                  video= {value.video}
                  vote_average={value.vote_average}
                  vote_count={value.vote_count}
                  key={value.id}
              />
          )}
          </div>
      </div>
    );
};

export const TrendingMovieTrailers = () => {
  const navigate = useNavigate();
  const [trailers, setTrailers] = useState<Array<Movie>>([]);

  useEffect(()=>{
    getTrendingMovies().then((response) => {
      if (!response) {
        return;
      }

      if (response.status >= 200 && response.status <= 400) {
        setTrailers(response.data.results);

      }
    });
  }, []);

  return(
      <div className='carousel'>
          <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row', }}>
          <h3 style={{fontWeight:'bold', fontSize:'1.8rem', margin:'0 0 2rem',}}>Trailers</h3>
          <button onClick={()=>{
              navigate(`../See-More/Trending-This-Week?filters=false`,{relative:'path', state:{list: trailers}} );
          }} style={{color:'#c5c5c5',fontWeight:'bold', fontSize:'1rem', margin:'0 0 2rem', border:'none', borderRadius:'8px', backgroundColor:'#fafafa33',}}>{'See All >>'}</button>
          </div>
          <div className='now-playing-movies-carousel'>
          {
            trailers.map((value:any, index:number)=>{
              return(
                <iframe className='modal-video-card' loading="lazy"  key={index} src={`https://www.youtube.com/embed/${value.key}`}  title={value.name} allowFullScreen>Youtube video not available</iframe>
              );
            })
          }
          </div>
      </div>
  );
};

export const PopularMovies = () => {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState<Array<Movie>>([]);

  useEffect(()=>{  
    getPopularMovies().then((response)=>{
      if (!response) {
        return;
      }
      if (response.status >= 200 && response.status <= 400) {
        setPopularMovies(response.data.results);
      }
    });
  }, []);

  return (
    <div className='carousel'>
          <div className='flex-space-between-row'>
          <h3 className='primary-header'>Popular Today</h3>
          <button className='primary-header-button' onClick={()=>{
              navigate(`../See-More/Popular-Today?filters=false`,{relative:'path', state:{list: popularMovies}} );
          }}>{'See All >>'}</button>
          </div>
          <div className='now-playing-movies-carousel'>
          {
            popularMovies?.map(
            (value,)=> <ShowTrendingMovie
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
                title={value.title}
                video= {value.video}
                vote_average={value.vote_average}
                vote_count={value.vote_count}
                key={value.id}
            />
          )}
          </div>
      </div>
  );
}

export const UpcomingMovies = () => {
  const navigate = useNavigate();
  const [upcomingMovies, setUpcomingMovies] = useState<Array<Movie>>([]);

  useEffect(()=>{
    
    getUpcomingMovies().then((response)=>{
      if (!response) {
        return;
      }
      if (response.status >= 200 && response.status <= 400) {
        setUpcomingMovies(response.data.results);
      }
    });
  }, []);

  

  const ShowUpcomingMovie: React.FC<Movie> = (props) => {
    const {setModalData, setModalState} = useContext(MovieModalContext)  as MovieModalType;  
    return (
      <div style={{height:'13rem',}}>
        <div>
          <img style={{width:'9rem', height:'13.1rem', borderRadius:'8px'}} src={`https://image.tmdb.org/t/p/original${props.poster_path}`}/>
          <div style={{position:'relative', top:'-2.5rem',padding:'0.3rem', height:'2rem'}}>
            <div className='card-actions'>
              <button onClick={()=>{updateMoviesToWatch(props)}}>+</button>
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
    <div className='right-section-upcoming-movie'>
      <div className='actions-setion-header'>
        <h4>Coming Soon</h4>
        <button onClick={()=>navigate(`../See-More/Discover?filters=false`,{relative:'path', state:{list: upcomingMovies}} )} style={{color:'#c5c5c5', fontWeight:'bold', fontSize:'0.8rem', border:'none', borderRadius:'8px', backgroundColor:'#fafafa33', height:'1.5rem', alignSelf:'center', marginRight:'0.7rem'}}><span>See All </span>{'>>'}</button>
      </div>
      <div className='top-rated-cards'>
        {
          upcomingMovies?.map(
          (value,)=> {
            return (<ShowUpcomingMovie
                backdrop_path={value.backdrop_path}
                first_air_date={value.first_air_date}
                genre_ids={value.genre_ids}
                id={value.id}
                title={value.title}
                origin_country={value.origin_country}
                original_language={value.original_language}
                original_title={value.original_title}
                overview={value.overview}
                popularity={value.popularity}
                poster_path={value.poster_path}
                vote_average={value.vote_average}
                vote_count={value.vote_count}
                key={value.id} 
                video={value.video}
                adult={value.adult}
                release_date={value.release_date}
              />)}
        )}
      </div>
    </div>
  );
}

export const ShowMovieCard: React.FC<Movie> = (props) => {
  const {setModalData, setModalState} = useContext(MovieModalContext)  as MovieModalType;

  return(
    <div className='tv-show-container-wrapper' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props?.poster_path || ''})`, }}>
      <div className='movie-description'>
        <div style={{fontSize:'1rem', fontWeight:'bold', padding:'0.8rem 0'}}>{props.title}</div>
        <p  style={{textOverflow:'ellipsis',overflow:'hidden', fontSize:'0.8rem', height:'5.5rem', }}>{props.overview}</p>
        <div style={{display:'flex', flexDirection:'row',right:'-2rem', top:'1rem',width: '7rem', position:'relative', color:'white', padding:'0.5rem', borderRadius:'8px',}}>
            <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px', color:'white', margin:'0.2rem' }} onClick={()=>updateMoviesToWatch(props)}>+</button>
            <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>updateFavouritesMovies(props)}>Like</button>
            <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>{
              setModalData(props);
              setModalState(true);
            }}>More</button>
        </div>
      </div>
    </div>
  );
}

export const ShowTrendingMovie: React.FC<Movie> = (props) => {
    const {setModalData, setModalState} = useContext(MovieModalContext)  as MovieModalType;
  
    return(
      <div 
      onClick={()=>{
        setModalData(props);
        setModalState(true);
      }}
      className='tv-show-container-wrapper' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props?.poster_path || ''})`, }}>
        <div className='movie-description'>
          <div style={{fontSize:'1rem', fontWeight:'bold', padding:'0.8rem 0'}}>{props.title}</div>
          <p  style={{textOverflow:'ellipsis',overflow:'hidden', fontSize:'0.8rem', height:'5.5rem', }}>{props.overview}</p>
          <div style={{display:'flex', flexDirection:'row',right:'-2rem', top:'1rem',width: '7rem', position:'relative', color:'white', padding:'0.5rem', borderRadius:'8px',}}>
              <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px', color:'white', margin:'0.2rem' }} onClick={()=>updateMoviesToWatch(props)}>+</button>
              <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>updateFavouritesMovies(props)}>Like</button>
              <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>{
                setModalData(props);
                setModalState(true);
              }}>More</button>
          </div>
        </div>
      </div>
    );
}

export const ShowTrendingMovieTrailer: React.FC<Movie> = (props) => {
  const {setModalData, setModalState} = useContext(MovieModalContext)  as MovieModalType;

  return(
    <div className='movieCard' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props?.poster_path || ''})`,backgroundSize:'12rem 16rem',paddingBottom:'0rem', paddingRight:'0', paddingLeft:'0' }}>
      <div className='movie-description'>
        <div style={{fontSize:'1rem', fontWeight:'bold', padding:'0.8rem 0'}}>{props.title}</div>
        <p  style={{textOverflow:'ellipsis',overflow:'hidden', fontSize:'0.8rem', height:'5.5rem', }}>{props.overview}</p>
        <div style={{display:'flex', flexDirection:'row',right:'-2rem', top:'1rem',width: '7rem', position:'relative', color:'white', padding:'0.5rem', borderRadius:'8px',}}>
            <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px', color:'white', margin:'0.2rem' }} onClick={()=>updateMoviesToWatch(props)}>+</button>
            <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>updateFavouritesMovies(props)}>Like</button>
            <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>{
              setModalData(props);
              setModalState(true);
            }}>More</button>
        </div>
      </div>
    </div>
  );
}

export const LowerSection = () => {
  const [movieGenres, setMovieGenres] = useState<Array<Genre>>([]);
  const navigate = useNavigate();
  useEffect(()=>{  
    getMovieGenres().then((response)=>{
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
    <div style={{display:'flex',width: '8rem', height:'5rem', borderRadius:'8px', backgroundColor:'#16181EB2', justifyContent:'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path || ''}`, backgroundSize:'8rem auto'}}>
      <a href={`/Genre?category=${name}&for=tv-shows`}>
        <p style={{textAlign:'center', alignSelf:'center',fontWeight:'bolder'}}>{name}</p>
      </a>
    </div>
    );
  }

  return (
    <div className='genres-carousel'>
      <div className='actions-setion-header' style={{margin:'1rem 0 0',}}>
        <h4>Genres</h4>
        <button 
        onClick={()=>navigate(`../See-More/Genres?TVShows=true?&filters=false`,{relative:'path', state:{list: movieGenres}} )}
        style={{color:'#c5c5c5', fontWeight:'bold', fontSize:'0.8rem', border:'none', borderRadius:'8px', backgroundColor:'#fafafa33', height:'1.5rem', alignSelf:'center', marginRight:'0.7rem'}}><span>See All </span>{'>>'}</button>
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
