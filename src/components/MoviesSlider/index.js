// Write your code here

import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {filteredList} = props
  return (
    <Slider>
      {filteredList.map(each => (
        <MovieItem eachDetails={each} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
