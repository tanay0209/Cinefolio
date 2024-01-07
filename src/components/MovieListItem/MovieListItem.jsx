import React from 'react'
import s from "./style.module.css"


const MAX_TITLE_CHAR = 20
function MovieListItem({ movie, onClick }) {
    const onClick_ = () => { onClick(movie) }
    return (
        <div onClick={onClick_} className={s.container}>
            <img src={movie.backdrop_path === null ? "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : `${import.meta.env.VITE_SMALL_IMG_COVER_BASE_URL}` + movie.backdrop_path}
                alt={movie.name}
                className={s.img}
                width={300}
            />
            <div className={s.title}>{movie.title.length > MAX_TITLE_CHAR ? movie.title.slice(0, MAX_TITLE_CHAR) + "..." : movie.title}</div>
        </div>
    )
}

export default MovieListItem
