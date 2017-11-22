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


    render() {

        return (
            <Button>{this.props.statusButton}</Button>

        )
    }
}

export default StatusButton



