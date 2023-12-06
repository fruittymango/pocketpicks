import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactElement,
} from 'react';
import { createPortal } from 'react-dom';
import {
  updateCompletedTVShows,
  updateFavouritesTVShows,
  updateTVShowsToWatch
} from '../../utils/persist.localstorage';
import { BookmarkAdd, Close, Done, ThumbUpAlt } from '@mui/icons-material';
import { TVShow } from './model';
import { 
  getTVShowVideos,
} from './apiCalls';

export type TVShowModalType = {
  modalData: TVShow | {}, 
  setModalData: (value: TVShow | {})=> void, 
  modalState:boolean, 
  setModalState: (value: boolean)=> void,
}

export interface ChildrenProps {
  children: Array<ReactElement>
}

export const TVShowModalContext = createContext<TVShowModalType | null>(null);


export const TVShowModal = () => {
    const [officialTrailer, setOfficialTrailer] = useState('');
    const {modalData, setModalData, modalState, setModalState} = useContext(TVShowModalContext)  as TVShowModalType;

  
    useEffect(()=>{
  
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
          if (isNotCombinedKey) {
            setModalData({});
            setModalState(false);
            return true;
          }
        }
      });
  
      if (!modalState) {
        document.removeEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            return;
          }
        });  
      }
  
    }, []);

  
    useEffect(()=>{
      if ( modalState && 'id' in modalData) {
        getTVShowVideos(''+modalData.id).then((response) => {
          if (!response) {
            return;
          }
    
          if (response.status >= 200 && response.status <= 400) {
            const temp = response.data.results.filter((value:any,) =>value.name==='Official Trailer' || value.name==='Trailer');
            setOfficialTrailer(temp[0]);
          }
        }).catch(error=>console.log(error));
      }  
    }, [modalState]);

    if (('name' in modalData) && 'poster_path' in modalData && 'overview' in modalData) {
       return ( modalState &&  (createPortal(
           <div className="modal-background">
             <div 
               className="modal-foreground"
               style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${modalData.poster_path })`}}
             >
               <button className="modal-close-button" onClick={()=>setModalState(false)}>
                 <Close/>
               </button>
             </div>
             <div className='item-content-wrapper'>
               <div className='modal-tabs'>
                  <button className='modal-tab-button' onClick={()=>updateFavouritesTVShows(modalData)}>
                    <ThumbUpAlt/>
                    <span className='block-span'>Like</span>
                  </button>
                  <button className='modal-tab-button' onClick={()=>updateTVShowsToWatch(modalData)}>
                    <BookmarkAdd/>
                    <span className='block-span'>Save</span>
                  </button>
                  <button className='modal-tab-button' onClick={()=>updateCompletedTVShows(modalData)}>
                    <Done/>
                    <span className='block-span'>Completed</span>
                  </button>
                  <button className='modal-tab-button' onClick={()=>setModalState(false)}>
                    <Close/>
                    <span className='block-span'>Close</span>
                  </button>
               </div>
               <h3>{modalData.name}</h3>
               <p>{modalData.overview}</p>
               {officialTrailer ? 
               <div className='video-carousel'>
                 <iframe 
                   loading="lazy"  
                   src={`https://www.youtube.com/embed/${officialTrailer}`}  
                   title={modalData.name} 
                   allowFullScreen>
                     Youtube video not available
                 </iframe>
               </div>
               :
                 null
               }
             </div>
           </div>
   
           ,
           document.body
         ))
       );
     }
     return(null);
};