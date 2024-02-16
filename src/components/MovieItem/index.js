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
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <>
        <Popup
          modal
          trigger={<img src={thumbnailUrl} alt={categoryId} className="item" />}
          overlayStyle={overlayStyles}
        >
          {close => (
            <>
              <ReactPlayer url={videoURL} playing={isPlaying} />
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onClickPlay}
              >
                {btnText}
              </button>
            </>
          )}
        </Popup>
      </>
    )
  }
}

export default MovieItem
