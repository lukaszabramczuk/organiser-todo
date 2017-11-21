import React from 'react'
import {database} from './../../firebase'

import {connect} from 'react-redux'

import {
    Button,
    Modal
} from 'react-bootstrap'


class EditTask extends React.Component {

    getInitialState() {
        return { show: false };
    }

    render() {

        let close = () => this.setState({ show: false });

        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    Launch contained modal
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Edytuj zadanie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        sdf
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={close}>Zapisz</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default connect(
    null
)(EditTask)



