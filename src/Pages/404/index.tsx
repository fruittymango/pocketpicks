const PageNotFound = () => {
    return(
      <>
        <div className='logo-bg'>
          <h1 className='logo'><strong>Pocket</strong><span>`ICKS</span></h1>
        </div>
  
        <div className="content">
          
          <h2 className="main-title">404 - Page Not Found</h2>
  
          <div className='horizontal-bar'>
          </div>
  
          <div className='sub-title-wrapper'>
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
          <p className='slogan'>Cinematic picks in your pocket..</p>
        </div>
  
  
        <div className='footer'><h4>&copy; Acsono 2023 <span>
          <img src='/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' height="20rem" alt='The movie database logo'/>
        </span></h4>
        </div>
  
      </>
    );
}

export default PageNotFound;