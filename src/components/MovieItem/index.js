// Write your code here
import {Component} from 'react'

import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

class MovieItem extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    //  const {isPlaying} = this.state
    const {eachDetails} = this.props
    const {thumbnailUrl, videoUrl, categoryId} = eachDetails
    // const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="item" />}
      >
        {close => (
          <div className="popupvideocontainer">
            <IoMdClose
              onClick={() => close()}
              className="crossmark"
              data-testid="closeButton"
            />
            <ReactPlayer url={videoUrl} controls className="videocontainer" />
          </div>
        )}
      </Popup>
    )
  }
}

export default MovieItem
