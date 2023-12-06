import React, {ReactElement,} from 'react';
import { useNavigate } from "react-router-dom";
import { Menu } from '@mui/icons-material';
import './MainSection.css';

interface MainSectionInterface{
  tabTitle: number;
  showBackButton?:boolean;
  children?: Array<ReactElement>;
  menuState: boolean;
  setMenuState: (value:boolean)=>void;
}

const MainSection: React.FC<MainSectionInterface> = (props) => {
  const tabs = ["Dashboard", "Movies", "TV-Shows"];
  const navigate = useNavigate();
  interface TabType  {
    value: string;
    index: number;
  };
  
  const ShowTab: React.FC<TabType> = ({index, value}) => {
    const styles = index === props.tabTitle? {
      borderStyle: 'solid',
      borderColor:'#00B9AE',
      borderWidth: '0',
      borderBottomWidth:'0.2rem',
      fontWeight: 'bold',
      color:'#00B9AE',
    } : {};
    return (
      <a
      href={`../${tabs[index]}`}
      style={styles}>{value}</a>
    );
  };

  return (
    <div className='main-section'>
        <div className='top-bar-section'>
        {!props?.showBackButton?<h1 className='app-title'><strong>Pocket</strong><span>`ICKS</span></h1>:null}
            <div className='tab-titles'>
              {tabs.map((value: string, index:number) => <ShowTab value={value} index={index} key={index}/>)}
            </div>
            <div className='menu-back-button'>
              {props?.showBackButton?<button className='back-button' onClick={()=>navigate(-1)}>Back</button>:null}
                <button className='menu-button'
                onClick={()=>{
                  props.setMenuState(!props.menuState);
                }}><Menu/>
              </button>
            </div>
        </div>
        {
          props?.children?.map(value => value)
        }
    </div>
  )
}

export default MainSection;