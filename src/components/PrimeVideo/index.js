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
        alt="prime vedio"
        className="logo"
      />
      <div className="bottomcont">
        <p className="action">Action Movies</p>
        <div className="slider">
          <MovieSlider filteredList={actionList} />
        </div>
        <p className="comedy">Comedy Movies</p>
        <div className="slider">
          <MovieSlider filteredList={comedyList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
