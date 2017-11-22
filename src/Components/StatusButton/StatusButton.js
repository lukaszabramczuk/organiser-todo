import React from 'react'
import {database} from './../../firebase'


import {
    Button,
    Modal,
    FormGroup,
    FormControl
} from 'react-bootstrap'


class StatusButton extends React.Component {

    state = {

    }

    handleStatusButton = {


    }

    render() {

        return (
            <Button onClick={this.handleStatusButton}>{this.props.taskStatus}</Button>

        )
    }
}

export default StatusButton


