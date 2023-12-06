import React, { useState } from 'react';
import { AllInclusive, Close, Dashboard, Done, Movie, PlaylistPlay, Tv, WatchLater, } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface ISectionItem{
  icon: () => JSX.Element;
  text: string;
  path: string;
  active?:false;
  disableButton?: boolean;
};


  
interface ISideBarSectionsProps{
  title: string;
  items: Array<ISectionItem>;
};

interface LeftSectionProps{
  app_section_class: string;
  menuState: boolean;
  setMenuState: (value:boolean)=>void;
};

const LeftSection: React.FC<LeftSectionProps> = ({menuState, setMenuState}) => {

  const menuItems: Array<ISideBarSectionsProps> = [
    {
      title:'',
      items:[
        {icon:() => <Dashboard className='sidebar-section-item-icon'/>, text:'Dashboard', path:'/Dashboard', disableButton:false, active:false},
        {icon: () =>  <Movie className='sidebar-section-item-icon'/>, text:'Movies',path:'/Movies',disableButton:false, active:false},
        {icon: () =>  <Tv className='sidebar-section-item-icon'/>, text:'TV-Shows', path:'/Tv-Shows', disableButton:false, active:false}
      ]
    }, 
    {
      title:'Pocket Picks',
      items:[
        {icon:() => <AllInclusive className='sidebar-section-item-icon'/>, text:'All', path:'/All', disableButton:true, active:false},
        {icon:() => <PlaylistPlay className='sidebar-section-item-icon'/>, text:'Playlists', path:'/playlist', disableButton:true, active:false},
        {icon: () =>  <WatchLater className='sidebar-section-item-icon'/>, text:'Watchlist', path:'/bookmarks', disableButton:true, active:false},
        {icon: () =>  <Done className='sidebar-section-item-icon'/>, text:'Completed', path:'/Completed', disableButton:true, active:false},
      ]
    }
  ];
  
  const SectionItems: React.FC<ISectionItem> = (sectionItems) => { 
    const [active, setActive] = useState(sectionItems?.active || false);
    const navigator = useNavigate();


    return(
      <div className='sidebar-section-item'>
        {sectionItems.icon? <sectionItems.icon /> : null}
        <button onClick={()=>{
          setActive(!active);
          navigator(sectionItems.path);

        }} className={`sidebar-section-item-title${active?'active':''}`}>{sectionItems.text}</button>
      </div>
    );
  };

  const SideBarSections: React.FC<ISideBarSectionsProps> = ({title, items}) => {

    return(
      <div className='sidebar-section'>
        {title?
          <p className='sidebar-section-title'>{title || "No title"}</p>
          :
          null
        }
        {items.map((value:ISectionItem,index:number) =>{
            return(
              <SectionItems icon={value.icon} text={value.text} path={value.path} disableButton={value.disableButton} key={index}/>
            );
        })}
      </div>
    );
  };

  return (
    <>
    {menuState?
      <div className='menu-bg'>
        <div className='menu-fg'>
          <button className='menu-button open'
          onClick={()=>{
            setMenuState(!menuState);
          }}><Close/>
          </button>
          <h1 className='app-title'><strong>Pocket</strong><span>`ICKS</span></h1>
          {
            menuItems.map((value, index)=>{
              return(
                <SideBarSections title={value.title} items={value.items} key={index}/>
              );
            })
          }
          <p className='copyright-symbol'> &copy; acsono 2023</p>
        </div>
      </div>
      :
      <div className='menu-fg larger-screen-activity'>
          <h1 className='app-title'><strong>Pocket</strong><span>`ICKS</span></h1>
          {
            [menuItems[1]].map((value, index)=>{
              return(
                <SideBarSections title={value.title} items={value.items} key={index}/>
              );
            })
          }
        </div>
      }
    </>
  )
}

export default LeftSection;