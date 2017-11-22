import React from 'react'
import {database} from './../../firebase'

import {
    Button
} from 'react-bootstrap'


class StatusButton extends React.Component {

    state = {
        taskStatus: this.props.taskStatus,
        id: this.props.id,
        buttonColor: ''
    }

    handleStatusButton = () => {
        let path = database().ref(`taskNames/${this.state.id}/taskStatus`)
        let status = this.state.taskStatus


        status === 'czekające' ? this.setState({taskStatus: 'realizowane'})
            : status==='realizowane' ? this.setState({taskStatus: 'gotowe'})
            : this.setState({taskStatus: 'gotowe'});

        path.set(this.state.taskStatus)


    }


    render() {

        return (
            <Button bsStyle={this.state.buttonColor} style={{width: '100px'}} onClick={this.handleStatusButton}>{this.state.taskStatus}</Button>

        )
    }
}

export default StatusButton



