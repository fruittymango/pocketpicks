import './index.css';

const PageNotFound = () => {
    return(
      <>
        <div className='logo-bg'>
          <h1 className='logo'><strong>Pocket</strong><span>`ICKS</span></h1>
        </div>
  
        <div className="notfound-content">
          
          <h2 className="main-title">404 - Page Not Found</h2>
  
          <div className='horizontal-bar'>
          </div>
  
          <div className='sub-title-wrapper'>
            <a href='/Dashboard'>
              <p className='menu-item bar'>
                Dashboard
              </p>
            </a>
            <a href='/Movies'>
              <p className='menu-item bar'>
                Movies
              </p>
            </a>
            <a href='/TV-Shows'>
              <p className='menu-item'>
                Series
              </p>
            </a>
          </div>
          <p className='slogan'>Cinematic picks in your pocket..</p>
        </div>  
      </>
    );
}

export default PageNotFound;