import React, { useState } from 'react'
import { Search as SearchIcon } from 'react-bootstrap-icons'
import s from "./style.module.css"

function Searchbar({ onSubmit }) {
    const [input, setInput] = useState("")
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== '') {
            onSubmit(e.target.value)
            setInput("")
        }
    }

    function handleChange(e) {
        setInput(e.target.value)
    }
    return (
        <>
            <SearchIcon size={27} className={s.icon} />
            <input
                value={input}
                onChange={handleChange}
                onKeyUp={submit}
                className={s.input}
                type='text'
                placeholder={"Search a movie you may like"}
            />
        </>
    )
}

export default Searchbar
