export async function updateFavouritesTVShows(movieToWatch: any){
    try{
        const temp = localStorage.getItem('FavouritesTVShows');
        if (temp) {
        const watchList = JSON.parse(temp);
        localStorage.setItem('FavouritesTVShows', JSON.stringify([...watchList?.filter((value:any)=>value.title !== movieToWatch.title), movieToWatch]));
        } else {
        localStorage.setItem('FavouritesTVShows', JSON.stringify([movieToWatch]));
        }
    }catch(error){
        console.log(error);
    };
}
  
export async function updateTVShowsToWatch(movieToWatch: any){
    try{
        const temp = localStorage.getItem('TVShowsToWatch');
        if (temp) {
        const watchList = JSON.parse(temp);
        localStorage.setItem('TVShowsToWatch', JSON.stringify([...watchList?.filter((value:any)=>value.title !== movieToWatch.title), movieToWatch]));
        } else {
        localStorage.setItem('TVShowsToWatch', JSON.stringify([movieToWatch]));
        }
    }catch(error){
        console.log(error);
    };
}
  
export async function updateCompletedTVShows(movieCompleted: any){
    try{
        const temp = localStorage.getItem('CompletedTVShows');
        if (temp) {
        const completed = JSON.parse(temp);
        localStorage.setItem('CompletedTVShows', JSON.stringify([...completed?.filter((value:any)=>value.title !== movieCompleted.title), movieCompleted]));
        } else {
        localStorage.setItem('CompletedTVShows', JSON.stringify([movieCompleted]));
        }
    }catch(error){
        console.log(error);
    };
}


export async function updateFavouritesMovies(movieToWatch: any){
    try{
        const temp = localStorage.getItem('FavouritesMovies');
        if (temp) {
        const watchList = JSON.parse(temp);
        localStorage.setItem('FavouritesMovies', JSON.stringify([...watchList?.filter((value:any)=>value.title !== movieToWatch.title), movieToWatch]));
        } else {
        localStorage.setItem('FavouritesMovies', JSON.stringify([movieToWatch]));
        }
    }catch(error){
        console.log(error);
    };
}
  
export async function updateMoviesToWatch(movieToWatch: any){
    try{
        const temp = localStorage.getItem('MoviesToWatch');
        if (temp) {
        const watchList = JSON.parse(temp);
        localStorage.setItem('MoviesToWatch', JSON.stringify([...watchList?.filter((value:any)=>value.title !== movieToWatch.title), movieToWatch]));
        } else {
        localStorage.setItem('MoviesToWatch', JSON.stringify([movieToWatch]));
        }
    }catch(error){
        console.log(error);
    };
}
  
export async function updateCompletedMovies(movieCompleted: any){
    try{
        const temp = localStorage.getItem('CompletedMovies');
        if (temp) {
        const completed = JSON.parse(temp);
        localStorage.setItem('CompletedMovies', JSON.stringify([...completed?.filter((value:any)=>value.title !== movieCompleted.title), movieCompleted]));
        } else {
        localStorage.setItem('CompletedMovies', JSON.stringify([movieCompleted]));
        }
    }catch(error){
        console.log(error);
    };
}