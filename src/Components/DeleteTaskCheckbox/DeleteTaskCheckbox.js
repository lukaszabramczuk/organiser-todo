import React from 'react'
import {database} from './../../firebase'

import {connect} from 'react-redux'

import {
    Button,
    Modal,
    FormGroup,
    FormControl
} from 'react-bootstrap'


class DeleteTaskCheckbox extends React.Component {

    state = {
        show: false

            }

    getInitialState() {
        return {show: false};
    }

    removeAll = (event) => {
        event.preventDefault();
        this.state.toRemove.forEach((id) => database().ref(`taskNames/${id}`).set(null))
    }

    render() {

        let close = () => this.setState({ show: false });

        return (
            <div className="modal-container">
                <Button onClick={() => this.setState({ show: true })}>Usuń zaznaczone MOD</Button>
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{textAlign: "left"}} id="contained-modal-title">Czy usunąć zaznaczone ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>

                            <form>

                                <FormGroup style={{textAlign: "center"}}>
                                    <Button onClick={this.props.removeAll} style={{width: 120}}>Tak</Button>
                                    <Button onClick={this.state.onHide}  style={{width: 120}}>Nie</Button>
                                </FormGroup>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}

export default connect(
    null
)(DeleteTaskCheckbox)



