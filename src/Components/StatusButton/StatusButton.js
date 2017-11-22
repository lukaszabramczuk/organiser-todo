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
        show: false,
        taskDesc: this.props.taskDesc,
        taskName: this.props.taskName,

    }


    render() {

        return (
            <Button></Button>

        )
    }
}

export default StatusButton


