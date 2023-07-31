import React from 'react'
import logo from "./netflix-logo-png-2562.png"
import { Link } from 'react-router-dom'
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="Logo" />
            <div>
                <Link to="./tvshows">Tv Shows</Link>
                <Link to="./movies">Movies</Link>
                <Link to="./recentlyadded">Recently Added</Link>
                <Link to="./mylist">My List</Link>
            </div>
            <ImSearch />
        </nav>
    )
}
// https://api.themoviedb.org/3/movie/popular?api_key=e45463d488f67b1c363e66d82ac559b1&language=en-US&page=1
export default Header
