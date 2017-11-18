import React from 'react'
import {
    BrowserRouter as Router,

} from 'react-router-dom'
import {
    Grid,
    Button,
    FormGroup,
    FormControl,
    Table
} from 'react-bootstrap'


import {connect} from 'react-redux'

import {addNewTask, deleteTask} from './state/tasks'

import './App.css';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            id: '',
            taskName: '',
            taskAddData: '',
            taskStatus: '',
            taskDesc: ''
        }
    }

    handleTaskNameInputChange = (event) => {
        this.setState({
            taskName: event.target.value
        });
    }

    handleTaskDescInputChange = (event) => {
        this.setState({
            taskDesc: event.target.value
        });
    }


    handleAddTask = (event) => {
        event.preventDefault();

        let newTaskData = {
            taskDate: Date().slice(0,21),
            taskName: this.state.taskName,
            taskDesc: this.state.taskDesc,
            taskStatus: this.state.taskStatus
        };

        this.props.addNewTask(newTaskData)

    }

    render() {
        return (
            <Router>
                <Grid>
                    <div style={{
                        border: "1px solid lightgrey",
                        borderRadius: 10,
                        padding: 15,
                        boxShadow: "0px 0px 20px lightgrey"
                    }}>
                        <h3 style={{color: "grey"}}> - = ToDo Organiser = -</h3>
                    </div>
                    <div style={{
                        border: "1px solid lightgrey",
                        borderRadius: 10,
                        padding: 15,
                        boxShadow: "0px 0px 20px lightgrey",
                        backgroundColor: "#cce0ff"
                    }}>
                        <h4>Dodawanie zadania</h4>
                        <div style={{
                            border: "1px solid white",
                            borderRadius: 10,
                            padding: 15,
                            width: "50%"
                        }}>
                            <form>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Nazwa zadania..." value={this.state.taskName}
                                                 onChange={this.handleTaskNameInputChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Opis zadania..." value={this.state.taskDesc}
                                                 onChange={this.handleTaskDescInputChange}/>
                                </FormGroup>
                                <Button bsStyle="primary" onClick={this.handleAddTask}>Dodaj zadanie</Button>
                            </form>
                        </div>
                        <br/>
                        <div style={{textAlign: "right"}}>
                            <Button>Zaznacz wszystkie</Button>
                            <Button>Usuń zaznaczone</Button>
                        </div>
                        <br/>
                        <h4>Lista zadań</h4>
                        <div style={{
                            border: "1px solid white",
                            borderRadius: 10,
                            padding: 15
                        }}>

                            {
                                this.props.tasks !== null ?
                                    <Table striped bordered condensed hover style={{
                                        marginTop: 20, color: "black"
                                    }}>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nazwa</th>
                                            <th>Opis</th>
                                            <th>Status</th>
                                            <th>Data dodania</th>
                                            <th>Akcja</th>
                                            <th>Zaznacz</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.props.tasks.map(
                                                ({id, taskDate, taskName, taskDesc, taskStatus}, index) => (
                                                    <tr key={id}>
                                                        <td>
                                                            {id}
                                                        </td>
                                                        <td>
                                                            {taskName}
                                                        </td>
                                                        <td>
                                                            {taskDesc}
                                                        </td>
                                                        <td>
                                                            {taskStatus}
                                                        </td>
                                                        <td>
                                                            {taskDate}
                                                        </td>
                                                        <td><Button onClick={()=>this.props.deleteTask(id)} bsStyle="danger"> Usuń</Button>
                                                        </td>
                                                        <td style={{textAlign: "center"}}>
                                                            <input type="checkbox"></input>
                                                        </td>

                                                    </tr>
                                                )
                                            )
                                        }
                                        </tbody>

                                    </Table> :
                                    <p>Wczytywanie bazy...</p>
                            }

                        </div>
                    </div>
                    <div style={{
                        border: "1px solid lightgrey",
                        borderRadius: 10,
                        padding: 5,
                        boxShadow: "0px 0px 20px lightgrey"
                    }}>
                        <h5 style={{color: "grey", textAlign: "center"}}> - = by Łukasz Abramczuk = -</h5>
                    </div>
                </Grid>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addNewTask: newTaskData => dispatch(addNewTask(newTaskData)),
    deleteTask: (id) => dispatch(deleteTask(id))
})

const mapStateToProps = state => ({
    tasks: state.tasks.tasksList
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)