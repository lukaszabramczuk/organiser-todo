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


        let pathRealisationStatusDate = database().ref(`taskNames/${this.state.id}/realisationStatusDate`)
        let pathReadyStatusDate = database().ref(`taskNames/${this.state.id}/readyStatusDate`)
        let date = Date().slice(0, 21)

        if (status === 'czekające') {
            path.set('realizowane')
            pathRealisationStatusDate.set(date)
            this.setState({taskStatus: 'realizowane'})

        }
        else if (status === 'realizowane') {
            path.set('gotowe')
            pathReadyStatusDate.set(date)
            this.setState({taskStatus: 'gotowe'})
        }
    }

    buttonColor = () => {
        let status = this.state.taskStatus;
        let buttonColor = 'danger'

        status === 'czekające' ? buttonColor = 'warning'
            : status === 'realizowane' ? buttonColor = 'info'
            : buttonColor = 'success'

        return buttonColor
    }

    render() {

        return (
            <Button bsSize="xsmall" bsStyle={this.buttonColor()} style={{width: '80px'}} onClick={this.handleStatusButton}>{this.state.taskStatus}</Button>

        )
    }
}

export default StatusButton



