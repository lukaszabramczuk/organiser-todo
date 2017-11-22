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
        taskDesc: this.props.taskDesc,
        taskName: this.props.taskName
    }

    getInitialState() {
        return {show: false};
    }


    handleEditedTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }

    handleEditedTaskDesc = (event) => {
        this.setState({
            taskDesc: event.target.value
        })
    }

    handleUpdateTask = (event) => {
        event.preventDefault()

        let id = this.props.id


        database().ref(`taskNames/${id}`).set({
            taskName: this.state.taskName,
            taskDesc: this.state.taskDesc,
        }).then(() => {
            console.log('updated')
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
                                                 onChange={this.handleEditedTaskName}/>
                                </FormGroup>
                                <FormGroup controlId="formControlsTextarea">
                                    <FormControl onChange={this.handleEditedTaskDesc}
                                                 style={{height: 100}}
                                                 componentClass="textarea"
                                                 placeholder="Opis zadania..."
                                                 value={this.state.taskDesc}/>
                                </FormGroup>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Button bsStyle="primary" onClick={this.props.onHide}>Zapisz</Button>*/}
                        <Button bsStyle="primary" onClick={this.handleUpdateTask}>Zapisz</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default connect(
    null
)(EditTask)



