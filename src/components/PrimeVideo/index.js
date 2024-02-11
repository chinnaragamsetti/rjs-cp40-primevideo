// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.map(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.map(each => each.categoryId === 'COMEDY')
  return (
    <div className="maincontainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime vedio"
        className="logo"
      />
      <div className="bottomcont">
        <p className="action">Action Movies</p>
        <MovieSlider filteredList={actionList} />
        <p className="comedy">Comedy Movies</p>
        <MovieSlider filteredList={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
