import { useContext, useEffect } from 'react';
import s from './style.module.css';
import TvShowDetail from './components/MovieDetail/MovieDetail';
import logoImage from './assets/images/logo.png';
import Logo from './components/Logo/Logo';
import MovieList from './components/MovieList/MovieList';
import Searchbar from './components/SearchBar/Searchbar';
import MovieContext from './context/MovieContext';
import { BallTriangle } from 'react-loader-spinner'

function App() {
  const {
    currentMovie,
    recommendedMovies,
    fetchMovieByTitle,
    fetchMovieRecommendations,
    fetchPopularMovies,
    updateCurrentMovie,
    isLoading
  } = useContext(MovieContext);

  useEffect(() => {
    fetchPopularMovies();
  }, []);


  useEffect(() => {
    if (currentMovie && currentMovie.length !== 0) {
      fetchMovieRecommendations(currentMovie.id);
    }
  }, [currentMovie]);

  return (
    isLoading ? <div className={s.loading}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div> : <>
      <div
        className={s.main_container}
        style={{
          background: currentMovie.backdrop_path === null
            ? `url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" )`
            : `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)), url("${import.meta.env.VITE_BACKDROP_BASE_URL
            }${currentMovie.backdrop_path}") no-repeat center / cover`,
        }}
      >
        <div className={s.header}>
          <div className='row'>
            <div className='col-4'>
              <Logo
                title={'CineFolio'}
                subtitle={'Find a movie that you may like'}
                img={logoImage}
              />
            </div>
            <div className='col-md-12 col-lg-4'>
              <Searchbar onSubmit={fetchMovieByTitle} />
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
          {currentMovie && <TvShowDetail movie={currentMovie} />}
        </div>
        <div className={s.recommended_tv_shows}>
          {currentMovie && (
            <MovieList
              onClickItem={updateCurrentMovie}
              movieList={recommendedMovies}
            />
          )}
        </div>
      </div >
    </>
  );
}

export default App;
