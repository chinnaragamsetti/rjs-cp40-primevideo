// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import './index.css'

class MovieItem extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const {eachDetails} = this.props
    const {thumbnailUrl, videoUrl, categoryId} = eachDetails
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <>
        <Popup
          modal
          trigger={<img src={thumbnailUrl} alt={categoryId} className="item" />}
        >
          {close => (
            <div className="popupvideocontainer">
              <ReactPlayer url={videoUrl} playing={isPlaying} />
              <button type="button" className="button" onClick={() => close()}>
                Close
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onClickPlay}
              >
                {btnText}
              </button>
            </div>
          )}
        </Popup>
      </>
    )
  }
}

export default MovieItem
