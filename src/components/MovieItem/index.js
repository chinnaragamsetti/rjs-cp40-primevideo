// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

class MovieItem extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const {thumbnailUrl, videoURL, categoryId} = this.props
    // const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <>
        <Popup
          modal
          trigger={<img src={thumbnailUrl} alt={categoryId} className="item" />}
          overlayStyle={overlayStyles}
        >
          <ReactPlayer url={videoURL} playing={isPlaying} />
        </Popup>
      </>
    )
  }
}

export default MovieItem
