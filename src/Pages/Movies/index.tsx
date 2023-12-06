import  { useState, useEffect } from 'react';
import LeftSection from '../../Atoms/LeftSection';
import MainSection from '../../Atoms/MainSection';
import RightSection from '../../Atoms/RightSection';
import { MovieModalContext, MovieModal} from './MovieModal';
import { Movie } from './model';
import { LowerSection, MoviesBanner, PopularMovies, TrendingMovies, UpcomingMovies } from './atoms';
import { useLocation } from 'react-router-dom';

// Dashboard
function MovieScreen() {
  const [loading, setLoading] = useState(true);
  const [menuState, setMenuState] = useState<boolean>( false );
  const [modalData, setModalData] = useState<Movie | {}>({});
  const [modalState, setModalState] = useState<boolean>( false );
  const location = useLocation();

  useEffect(()=>{
    setLoading(false);
  }, [location]);

  return (
    <>
      <MovieModalContext.Provider
        value={{
          modalData,
          setModalData,
          modalState,
          setModalState
        }}>
            <LeftSection app_section_class={'movies-screen'} menuState={menuState} setMenuState={setMenuState}/>
            <MainSection tabTitle={1} menuState={menuState} setMenuState={setMenuState}>
              <MoviesBanner />
              <TrendingMovies />
              <PopularMovies />
            </MainSection>

            <RightSection>
              <UpcomingMovies />
              <LowerSection/>
              <a href='https://www.themoviedb.org' className='backed-by-tmdb-logo'>
                  <img 
                  src={'/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}/>
              </a> 
            </RightSection>
            <MovieModal/>
      </MovieModalContext.Provider>
      {loading?<div className='loading'><span className="loader"></span></div> :null}
    </>
  )
}

export default MovieScreen
