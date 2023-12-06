import  { useState, useEffect } from 'react';
import LeftSection from '../../Atoms/LeftSection';
import MainSection from '../../Atoms/MainSection';
import RightSection from '../../Atoms/RightSection';
import { MovieModalContext, MovieModal} from './MovieModal';
import { Movie } from './model';
import { LowerSection, MoviesBanner, PopularMovies, TrendingMovies, UpcomingMovies } from './atoms';

// Dashboard
function MovieScreen() {
  const [menuState, setMenuState] = useState<boolean>( false );
  const [modalData, setModalData] = useState<Movie | {}>({});
  const [modalState, setModalState] = useState<boolean>( false );

  useEffect(() => {
    document.getElementsByClassName('loading')[0].classList.add('loading-off');
    
    return () => {
      document.getElementsByClassName('loading')[0].classList.remove('loading-off')
    };
  }, []);

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
    </>
  )
}

export default MovieScreen
