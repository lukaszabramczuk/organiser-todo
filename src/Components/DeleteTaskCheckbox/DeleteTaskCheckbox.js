import React from 'react'
import {database} from './../../firebase'

import {connect} from 'react-redux'

import {
    Button,
    Modal,
    FormGroup
} from 'react-bootstrap'


class DeleteTaskCheckbox extends React.Component {

    state = {
        show: false

            }


    removeAll = (event) => {
        event.preventDefault();
        this.props.toRemove.forEach((id) => database().ref(`taskNames/${id}`).set(null))

        this.setState({
            show: false
        })
    }

    render() {

        let close = () => this.setState({ show: false });

        return (
            <div className="modal-container">
                <Button bsStyle="danger" onClick={() => this.setState({ show: true })}>Usuń zaznaczone</Button>
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
                                    <Button onClick={this.removeAll} style={{width: 120}}>Tak</Button>
                                    <Button onClick={() => this.setState({ show: false })}  style={{width: 120}}>Nie</Button>
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



