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
        showDel: false

    }

    getInitialState() {
        return {showDel: false};
    }


    handleEditedTask = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }

    removeAll = (event) => {
        event.preventDefault();
        this.state.toRemove.forEach((id) => database().ref(`taskNames/${id}`).set(null))
    }

    render() {

        return (
            <div className="modal-container">
                <Modal
                    {...this.props}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Czy na pewno chcesz skasowac zaznaczone zadania ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form>
                                <FormGroup style={{textAlign: "center"}}>
                                    <Button onClick={this.removeAll}bsStyle="danger" style={{width: 120}}>Tak</Button>
                                    <Button onClick={this.props.onHide} bsStyle="primary" style={{width: 120}}>Nie</Button>
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



