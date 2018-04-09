import React from 'react';
import styles from './BigImg.css'

const BigImg = (props) => {
    return (
        <div className={styles.Hero}>
            <span className={styles.Exit}
                onClick={props.hide}><i className="fas fa-times-circle"></i> </span>
            <img src={require(`../../../photos/${props.source}`)} alt="" />
            

            <div>
                
                <span className={styles.Left}
                    onClick={props.prevImg}

                > <i className="fas fa-angle-left"></i> </span>
                <span
                    className={styles.Right}
                    onClick={props.nextImg}
                > <i className="fas fa-angle-right"></i> </span>
            </div>
        </div>
    )
}
export default BigImg