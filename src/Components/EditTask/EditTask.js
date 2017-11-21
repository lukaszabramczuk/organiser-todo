import React from 'react'
import {database} from './../../firebase'

import {connect} from 'react-redux'

import {
    Button,
    Modal,
    FormGroup,
    FormControl
} from 'react-bootstrap'


class EditTask extends React.Component {

    state = {
        show: false,
        taskName: this.props.id

    }

    getInitialState() {
        return {show: false};
    }


    handleEditedTask = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }


    render() {

        return (
            <div className="modal-container">
                <Modal
                    {...this.props}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Edytuj zadanie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <form>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Nazwa zadania..."
                                                 value={this.state.taskName}
                                                 onChange={this.handleEditedTask}/>
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <FormControl onChange={this.handleMessageChange} style={{height: 100}}
                                                 componentClass="textarea"
                                                 placeholder="Opis zadania..." value={this.props.id.taskDesc}/>
                                </FormGroup>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.props.onHide}>Zapisz</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default connect(
    null
)(EditTask)



