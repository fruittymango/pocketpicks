import React,  {useEffect, useState, useContext, useRef} from 'react';
import { TVShowModalContext, TVShowModalType } from './TVShowModal';
import { TVShow, } from './model';
import { updateFavouritesTVShows, updateTVShowsToWatch} from '../../utils/persist.localstorage';
import {
  getTrendingTVShows,
  getTrendingTVShowsThisWeek,
  getPopularTVShows,
} from './apiCalls';
import { useNavigate } from 'react-router-dom';

export const TVShowsBanner = () => {
  const {setModalData, setModalState} = useContext(TVShowModalContext)  as TVShowModalType;
  const [trendingTVShows, setTrendingTVShows] = useState<Array<TVShow>>([]);
  const [currentIndex, setIndex] = useState(0);
  let timeOutId = useRef<any | null>(null);

  useEffect(()=>{
    getTrendingTVShows().then((response) => {
      if (!response) {
        return;
      }
      if (response.status >= 200 && response.status <= 400) {
        setTrendingTVShows(response.data.results);
      }
    });
  }, []);

  useEffect(()=>{
    if (timeOutId.current) {
      return clearTimeout(timeOutId.current);
    }

    const id = setTimeout( () => {
      setIndex(currentIndex > trendingTVShows.length - 2 ? 0 : currentIndex+1);
    }, 5000);

    timeOutId.current = id;

  },[currentIndex]);

  return(
    <div className='banner' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingTVShows[currentIndex]?.backdrop_path}`}}>
      <h2 className='banner-title'>{trendingTVShows[currentIndex]?.name || ''}</h2>

      <div className='change-cover-buttons' style={{}}>
        <button onClick={()=> currentIndex > 0? setIndex(currentIndex - 1): null}>{"<"}</button>
        <button onClick={()=> currentIndex < trendingTVShows?.length-1? setIndex(currentIndex + 1): null}>{">"}</button>
      </div>

      <div className="banner-footer">
        <button onClick={()=>updateTVShowsToWatch(trendingTVShows[currentIndex])} className='watch-list'>+ Watchlist</button>
        <div className='active-flag'>
          <button onClick={()=>setIndex(0)} style={{backgroundColor: currentIndex < 1? '#00B9AE':'#F9F9F9'}} />
          <button onClick={()=>setIndex(Math.round((trendingTVShows.length-1)/2))} style={{backgroundColor: currentIndex > 0 && currentIndex < trendingTVShows?.length-1? '#00B9AE':'#F9F9F9'}}/>
          <button onClick={()=>setIndex(trendingTVShows.length-1)} style={{backgroundColor: currentIndex == trendingTVShows?.length-1? '#00B9AE':'#F9F9F9'}}/>
        </div>
        <button onClick={()=>{
          setModalData(trendingTVShows[currentIndex]);
          setModalState(true);
        }} className='more-button'>More</button>
      </div>
    </div>
  );
};

export const TrendingTVShows = () => {
    const navigate = useNavigate();
    const [tvShows, setTrendingTVShowsThisWee] = useState<Array<TVShow>>([]);
  
    useEffect(()=>{
      getTrendingTVShowsThisWeek().then((response) => {
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
            <h3 className='primary-header'>Trending Shows</h3>
            <button className='primary-header-button'
              onClick={()=>{
                navigate(`../See-More/Trending-This-Week?filters=false`,{relative:'path', state:{list: tvShows}} );
            }}>{'See All >>'}</button>
            </div>
            <div className='now-playing-movies-carousel'>
            {
                tvShows?.map(
                (value,)=> <ShowTrendingTVShow
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
            )}
            </div>
          </div>
    );
};

export const PopularTVShows = () => {
  const navigate = useNavigate();
  const [tvShows, setPopularTVShowsThisWeek] = useState<Array<TVShow>>([]);

  useEffect(()=>{
    getPopularTVShows().then((response) => {
      if (!response) {
        return;
      }

      if (response.status >= 200 && response.status <= 400) {
        setPopularTVShowsThisWeek(response.data.results);
      }
    });
  }, []);

  return(
      <div className='carousel'>
          <div className='flex-space-between-row'>
          <h3 className='primary-header'>Popular Shows</h3>
          <button className='primary-header-button'
            onClick={()=>{
              navigate(`../See-More/Popular-This-Week?filters=false`,{relative:'path', state:{list: tvShows}} );
          }}>{'See All >>'}</button>
          </div>
          <div className='now-playing-movies-carousel'>
          {
              tvShows?.map(
              (value,)=> <ShowTrendingTVShow
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
          )}
          </div>
        </div>
  );
};

export const DiscoverThisWeek = () => {
  const navigate = useNavigate();
  const [tvShows, setTrendingTVShowsThisWee] = useState<Array<TVShow>>([]);

  useEffect(()=>{
    getTrendingTVShowsThisWeek().then((response) => {
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
          <div className='flex-space-between-row' style={{ }}>
          <h3 className='primary-header'>Discover This Week</h3>
          <button className='primary-header-button'
            onClick={()=>{
              navigate(`../See-More/Trending-This-Week?filters=false`,{relative:'path', state:{list: tvShows}} );
          }}>{'See All >>'}</button>
          </div>
          <div className='now-playing-movies-carousel'>
          {
              tvShows?.map(
              (value,)=> <ShowTrendingTVShow
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
          )}
          </div>
      </div>
  );
};

export const ShowTrendingTVShow: React.FC<TVShow> = (props) => {
    const {setModalData, setModalState} = useContext(TVShowModalContext)  as TVShowModalType;
  
    return(
      <div className='tv-show-container-wrapper' 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${props?.poster_path})`,}}
        onClick={()=>{
          setModalData(props);
          setModalState(true);
        }}
      >
        <div className='movie-description'>
          <div style={{fontSize:'1rem', fontWeight:'bold', padding:'0.8rem 0'}}>{props.name}</div>
          <p  style={{textOverflow:'ellipsis',overflow:'hidden', fontSize:'0.8rem', height:'5.5rem', }}>{props.overview}</p>
          <div style={{display:'flex', flexDirection:'row',right:'-2rem', top:'1rem',width: '7rem', position:'relative', color:'white', padding:'0.5rem', borderRadius:'8px',}}>
              <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px', color:'white', margin:'0.2rem' }} onClick={()=>updateTVShowsToWatch(props)}>+</button>
              <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>updateFavouritesTVShows(props)}>Like</button>
              <button style={{border:'0.5px solid white', background:'none',borderRadius:'8px',  color:'white', margin:'0.2rem' }} onClick={()=>{
                setModalData(props);
                setModalState(true);
              }}>More</button>
          </div>
        </div>
      </div>
    );
} 
