// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="maincontainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="logo"
      />
      <div className="bottomcont">
        <h1 className="action">Action Movies</h1>
        <div className="slider">
          <MovieSlider filteredList={actionList} />
        </div>
        <h1 className="comedy">Comedy Movies</h1>
        <div className="slider">
          <MovieSlider filteredList={comedyList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
