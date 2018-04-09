import React from 'react';
import styles from './Info.css';
import photosInfo from '../../photoInfo'

const info =(props) => {
  return (
    <div className={styles.Info}> 
    <h2> This is {`${photosInfo[props.x].firstName}  ${photosInfo[props.x].lastName}`} </h2>
    <hr/>
      <h3> Following are the information about  {photosInfo[props.x].firstName} </h3>
      <h4> Nationality: {photosInfo[props.x].nationality}   </h4>
      <h4> Vision: {photosInfo[props.x].longTermVision}   </h4>
      <h4> Motivation: {photosInfo[props.x].motivatesMe}   </h4>
      <details>
        <summary> Skills</summary>
        {photosInfo[props.x].skills.map((el,i) => { return (<span key={i}>{el} ,</span>)})}
        
      </details>
      <h4> Favourite Quote: {photosInfo[props.x].favoriteQuote}   </h4>
      <h4> Why Software developer: {photosInfo[props.x].whySofterDeveloper}   </h4>
      <h4> Joined on : {photosInfo[props.x].joinedOn}   </h4>

    </div> 
  )
}
export default info;