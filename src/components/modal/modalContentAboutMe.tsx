import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { PureComponent } from "react";
import ProfilePicture from "../profilePicture/profilePicture";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import './modalContent.scss';

type propsType = {
    title: string,
    text: string,
    closeCallback: (_ev: unknown) => undefined,
}

class ModalContentAboutMe extends PureComponent<propsType> {
    render(): React.ReactElement {
        return <>
        <div className="modal-header">
            <div className="modal-title">
                <h1>{this.props.title}</h1>
            </div>
            <button
            onClick={(_ev) => {
                this.props.closeCallback(_ev);
            }}
            className="close-button"><FontAwesomeIcon icon={faWindowClose} /></button>
        </div>
        <div className="modal-body">
            <div className="content">
              <div className="picture-container">
                <ProfilePicture includesModal={false}/>
              </div>
              <div className="line"></div>
              <div className="information-container">
                  <p style={{color: "black",
                    marginTop: '5px',
                }}>
                    {this.props.text}
                  </p>
              </div>
            </div>
        </div>
        </>
    }
}

export default ModalContentAboutMe;
