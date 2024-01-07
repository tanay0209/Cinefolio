import FiveStarRating from "../FiveStarRating/FiveStarRating"
import s from "./style.module.css"

import React from 'react'

function MovieDetail({ movie }) {
    const rating = movie.vote_average / 2
    return (
        <>
            <div className={s.title}>{movie.title}</div>
            <div className={s.rating_container}>
                <FiveStarRating rating={rating} />
                <span className={s.rating}>{rating.toFixed(2)}/5</span>
            </div>
            <div className={s.overview}>{movie.overview}</div>
        </>
    )
}

export default MovieDetail
