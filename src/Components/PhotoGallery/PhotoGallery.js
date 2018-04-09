import React, { Component } from 'react'
import photosInfo from '../../photoInfo'
import styles from './PhotoGallery.css'
import BigImg from '../Modal/BigImg/BigImg'
import Info from '../Info/Info'
import Modal from '../Modal/Modal'
import BgSlider from '../bgSlider/bgSlider'
import LandingPage from '../LandingPage/Landing'

;
class PhotoGallery extends Component {

   
state={
currentPhoto:0,
showBigImg:false

}
nextImg=()=>{
    let x = this.state.currentPhoto
  
    x < photosInfo.length - 1 ? x++ : x = 0;
 
        this.setState({currentPhoto:x})
 

}
  prevImg = (e) => {
    e.stopPropagation();
    let x = this.state.currentPhoto

    x > 0 ? x-- : x = photosInfo.length - 1;

    this.setState({ currentPhoto: x 
    })


  }
showLightBox=(e)=>{
      let id=e.target.id;  
  e.stopPropagation();
    this.setState({
      currentPhoto: id,
      showBigImg: !this.state.showBigImg})
  
  }
  hideLightBox=()=>{
    this.setState({
      showBigImg: !this.state.showBigImg
    })
}
showAllImg=()=>{
  return !this.state.showBigImg ?(<div className={styles.Grid} >
    { photosInfo.map(
      (el, i) => {

        return (
          <div className={styles.Small} key={i} >
            <img
              src={require(`../../photos/${el.src}`)}
              alt=''
              id={i}
              onClick={(e) => this.showLightBox(e)}
            />

          </div>)
      }
    ) }
  </div>) : null 
}

  render() {
      let  x = this.state.currentPhoto
      return (
              <React.Fragment>
          <React.Fragment>
                <Modal
                show={this.state.showBigImg}
                hide={this.hideLightBox}
                >
                  <Info
                  x={x}/>  
                  <BigImg
                    source={photosInfo[x].src}
                    nextImg={this.nextImg}
                    prevImg={this.prevImg}
                    hide={this.hideLightBox}
                    />
                    
                </Modal>
            </React.Fragment>
            <BgSlider
            show={this.state.showBigImg}/>

         { this.showAllImg()}
         {!this.state.showBigImg ? <LandingPage/>:null}
        
      </React.Fragment>
    )
  }
}

export default PhotoGallery;