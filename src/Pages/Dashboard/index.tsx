import  { useState,useEffect } from 'react';
import LeftSection from '../../Atoms/LeftSection';
import MainSection from '../../Atoms/MainSection';
import { MovieModalContext, MovieModal} from '../Movies/MovieModal';
import { Movie } from '../Movies/model';
import { LowerSection, MoviesBanner, TrendingMovies, UpcomingMovies } from '../Movies/atoms';
import { TVShowModalContext, } from '../TVShows/TVShowModal';
import { TVShow, } from '../TVShows/model';
import {  TrendingTVShows } from '../TVShows/atoms';
import RightSection from '../../Atoms/RightSection';

function Dashboard() {
  const [menuState, setMenuState] = useState<boolean>( false );
  const [modalData, setModalData] = useState<TVShow | Movie | {}>({});
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
        <MovieModalContext.Provider
          value={{
            modalData,
            setModalData,
            modalState,
            setModalState
          }}>
              <LeftSection app_section_class={'dashboard-screen'} menuState={menuState} setMenuState={setMenuState}/>
              <MainSection tabTitle={0} menuState={menuState} setMenuState={setMenuState}>
                <MoviesBanner />
                <TrendingMovies />
                <TrendingTVShows />
              </MainSection>
              <RightSection>
                <UpcomingMovies />
                <LowerSection />
                <a href='https://www.themoviedb.org' className='backed-by-tmdb-logo'>
                    <img 
                    src={'/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'}/>
                </a> 
            </RightSection>
            <MovieModal/>
        </MovieModalContext.Provider>
      </TVShowModalContext.Provider>
    </>
  )
}

export default Dashboard
