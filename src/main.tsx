import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css';

const ComingSoon = () => {

  return(
    <>
      <div style={{position:'absolute', left:'1%', padding:'0rem 1rem',}}>
        <h1 className='app-title' style={{marginTop:'2rem'}}><strong>Pocket</strong><span>`ICKS</span></h1>
      </div>

      <div className="content">
        
        <div className='flex-center'>
          <h1>Coming Soon</h1>
        </div>

        <div className='horizontal-bar'>
        </div>

        <div className='menu-bg'>
          <p className='menu-item bar'>
            Dashboard
          </p>
          <p className='menu-item bar'>
            Movies
          </p>
          <p className='menu-item'>
            Series
          </p>
        </div>

        <div className='menu-bg'>
          <div className='flex-space-between'>
            <p className='slogan'>Cinematic picks in your pocket..</p>
         </div>
        </div>
      </div>


      <div className='footer'><h4>&copy; Acsono 2023 <span>
        <img src='/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' height="20rem" alt='The movie database logo'/>
      </span></h4>
      </div>

    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComingSoon/>
  </React.StrictMode>,
);