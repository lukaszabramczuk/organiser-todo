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
    }  //wyciagniecie stanu z propsów

    handleStatusButton = () => { //funkcja zmieniająca status, oraz dodająca date po nacisnieciu buttona
        let path = database().ref(`taskNames/${this.state.id}/taskStatus`) //zadeklarowanie sciezki statusu dla wybranego id
        let status = this.state.taskStatus


        let pathRealisationStatusDate = database().ref(`taskNames/${this.state.id}/realisationStatusDate`) //zadeklarowanie sciezki statusu "realizowane" dla wybranego id
        let pathReadyStatusDate = database().ref(`taskNames/${this.state.id}/readyStatusDate`)  //zadeklarowanie sciezki statusu "gotowe" dla wybranego id
        let date = new Date() // przypisanie do zmiennej date aktualnej daty

        if (status === 'czekające') {
            path.set('realizowane')
            pathRealisationStatusDate.set(date.getTime())
            this.setState({taskStatus: 'realizowane'}) //instrukcja warunkowa dla zmiennej status i ustawienie jej nowego stanu względem aktualnego stringa oraz dodanie aktualnej daty

        }
        else if (status === 'realizowane') {
            path.set('gotowe')
            pathReadyStatusDate.set(date.getTime())
            this.setState({taskStatus: 'gotowe'}) // instrukcja warunkowa dla zmiennej status i ustawienie jej nowego stanu względem aktualnego stringa oraz dodanie aktualnej daty
        }
    }

    buttonColor = () => {  //funkcja sprawdzająca stan i zmieniajaca kolor buttona wzgledem jego stanu
        let status = this.state.taskStatus;
        let buttonColor = 'danger'

        status === 'czekające' ? buttonColor = 'warning'
            : status === 'realizowane' ? buttonColor = 'info'
            : buttonColor = 'success'

        return buttonColor
    }


    render() {

        return (
            <Button bsSize="xsmall"
                    bsStyle={this.buttonColor()}
                    style={{width: '80px'}}
                    onClick={this.handleStatusButton}>{this.state.taskStatus}</Button>

        )
    }
}

export default StatusButton



