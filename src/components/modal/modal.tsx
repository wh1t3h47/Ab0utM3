import React, { PureComponent } from "react";
import './modal.scss'

type propsType = {
    renderContent: React.ReactElement,
}
type stateType = {
    show: boolean,
}

class Modal extends PureComponent<propsType, stateType> {
    constructor(props: propsType) {
        super(props);

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        const show = false;
        this.state = {
            show,
        };
    }

    public show(): undefined {
        const show = true;
        this.setState({ show });
        return undefined;
    }

    public hide (): undefined {
        const show = false;
        this.setState({ show });
        return undefined;
    }

    render (): React.ReactElement {
        return <div className='modal-overlay' style={ !this.state.show? {
            display: "none",
        } : {}}
        // onClick={(_ev) => {
        //     this.hide();
        // }}
        >
            <div className='modal'>
                {this.props.renderContent}
            </div>
        </div>
    }
}

export default Modal;
