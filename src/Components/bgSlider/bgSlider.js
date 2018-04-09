import React, { Component } from 'react'
import styles from './bgSlider.css'



class BgSlider extends Component {

state={
    picIndex:1
}

    tick() {
        let x= this.state.picIndex
        x<5?x++:x=1
        this.setState({
            picIndex:x
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    
  render() {
    return this.props.show?(
      <div className={styles.Slider}> 

            <img src={require(`../../photos/group${this.state.picIndex}.jpg`)} alt="" />
      </div>
    ):null
  }
}
export default BgSlider