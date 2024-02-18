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
        <MovieSlider filteredList={actionList} className="slider" />
        <p className="comedy">Comedy Movies</p>
        <MovieSlider filteredList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
