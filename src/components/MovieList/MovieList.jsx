import React from 'react'
import s from "./style.module.css"
import MovieListItem from "../MovieListItem/MovieListItem"

function MovieList({ movieList, onClickItem }) {
    return (
        movieList.length === 0 ? <h4>Seems like no recommendations are available. Try any other movie?</h4> : <>
            <div className={s.title}>You'll probably like : </div>
            <div className={s.list}>
                {movieList.map(movie => {
                    return (
                        <span className={s.tv_show_item} key={movie.id}>
                            <MovieListItem movie={movie} onClick={onClickItem} />
                        </span>
                    )
                })}
            </div>
        </>
    )
}

export default MovieList
