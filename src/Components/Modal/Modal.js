import React from 'react';
import styles from './Modal.css';
import Backdrop from './Backdrop/Backdrop';

const modal = props => {
  return props.show ?(    <React.Fragment>

                <Backdrop hidden={props.hide} 
                />
    <div className={`${styles.Modal} animated ${!props.shows ? 'slideInUp' :'slideOutDown'}`}>
                        
                {props.children}
                  </div>

                </React.Fragment>
  ):null;
}
export default modal;
