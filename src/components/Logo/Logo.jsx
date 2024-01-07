import React from 'react'
import s from "./style.module.css"
function Logo({ title, subtitle, img }) {
    return (
        <>
            <div className={s.container}>
                <img src={img} className={s.img} alt="Logo" />
                <div className={s.title}>{title}</div>
            </div>
            <div className={s.subtitle}>{subtitle}</div>

        </>
    )
}

export default Logo
