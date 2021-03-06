import React from 'react'
import {
    BrowserRouter as Router,

} from 'react-router-dom'
import {
    Grid,
    Button,
    FormGroup,
    FormControl,
    Table,
    ButtonToolbar,
    ToggleButton,
    ToggleButtonGroup

} from 'react-bootstrap'

// import {database} from './firebase'
import {connect} from 'react-redux'

import EditTask from './Components/EditTask/EditTask'
import DeleteTaskCheckbox from './Components/DeleteTaskCheckbox/DeleteTaskCheckbox'
import StatusButton from './Components/StatusButton/StatusButton'

import {addNewTask, deleteTask} from './state/tasks'

import './App.css';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            id: '',
            taskName: '',
            taskAddData: '',
            taskStatus: 'czekające',
            taskDesc: '',
            toRemove: [],
            show: false,
            filter: ["czekające", "realizowane", "gotowe"]
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


    handleCheckboxOn = (id) => {
        if (this.state.toRemove.includes(id)) {
            this.setState({
                toRemove: this.state.toRemove.filter(taskId => id !== taskId)
            });
        }
        else {
            this.setState({
                toRemove: this.state.toRemove.concat(id)
            });
        }
    }

    handleAddTask = (event) => {
        event.preventDefault();
        let date = new Date()


        let newTaskData = {
            taskDate: date.getTime(),
            taskName: this.state.taskName,
            taskDesc: this.state.taskDesc,
            taskStatus: this.state.taskStatus
        };

        this.props.addNewTask(newTaskData)
        this.setState({
            taskName: '',
            taskDesc: ''
        })
    }

    filterHandler = (value) => {
        console.log(value)
        this.setState({
            filter: value
        })
    }

    counterTasksInRealise = (tasks) => {
        let inRealise = (this.props.tasks.filter((task) => task.taskStatus === 'realizowane')).length

        return inRealise

    }

    getStyleTaskDate = (firstDate, diff, color, status, cancel, cancel2) => {
        let date = new Date().getTime()
        let dateDiff = date - firstDate

        return status === cancel || status === cancel2 ? null : dateDiff > diff ? {color: color} : null
    }

    convertDate =(x) => {
        let date = new Date(x).toUTCString()
        return x ? date : ' '
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
                        <h4 style={{textAlign: "right", color: "grey"}}>Liczba aktualnie realizowanych zadań: {this.counterTasksInRealise()} </h4>
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

                        <div>
                            <ButtonToolbar>
                                <h4>Filtowanie statusów</h4>
                                <ToggleButtonGroup onChange={this.filterHandler} type="checkbox"
                                                   defaultValue={["czekające", "realizowane", "gotowe"]}>
                                    <ToggleButton bsStyle="default" value={"czekające"}>Czekające</ToggleButton>
                                    <ToggleButton bsStyle="default" value={"realizowane"}>Realizowane</ToggleButton>
                                    <ToggleButton bsStyle="default" value={"gotowe"}>Gotowe</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                            <div style={{textAlign: "right"}}>
                                <DeleteTaskCheckbox toRemove={this.state.toRemove}/>
                            </div>

                        </div>
                        <br/>
                        <h4>Lista zadań</h4>
                        <div style={{
                            border: "1px solid white",
                            borderRadius: 10,
                            padding: 15,
                            backgroundColor: "white"
                        }}>

                            {
                                this.props.tasks !== null ?
                                    <Table striped bordered condensed hover style={{
                                        marginTop: 20, color: "black"
                                    }}>
                                        <thead>
                                        <tr>
                                            <th style={{width: "5px", textAlign: "center"}}>ID</th>
                                            <th style={{width: "150px"}}>Nazwa</th>
                                            <th>Opis</th>
                                            <th style={{width: "18px", textAlign: "center"}}>Status</th>
                                            <th style={{width: "125px", textAlign: "center"}}>Dodano</th>
                                            <th style={{width: "125px", textAlign: "center"}}>W realizacji</th>
                                            <th style={{width: "125px", textAlign: "center"}}>Ukończono</th>
                                            <th style={{width: "20px", textAlign: "center"}}>Edytuj</th>
                                            <th style={{width: "20px", textAlign: "center"}}>Akcja</th>
                                            <th style={{width: "18px", textAlign: "center"}}>Zaznacz</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.tasks
                                            .filter((task) => this.state.filter.includes(task.taskStatus))
                                            .map(
                                                ({id, taskDate, taskName, taskDesc, taskStatus, realisationStatusDate, readyStatusDate}, index) => (
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
                                                            <StatusButton taskStatus={taskStatus} id={id}
                                                                          tasks={this.props.tasks}/>
                                                        </td>
                                                        <td style={this.getStyleTaskDate(taskDate, 432000000, 'red', taskStatus, 'realizowane', 'gotowe')}>
                                                            {this.convertDate(taskDate).slice(0,26)}
                                                        </td>
                                                        <td style={this.getStyleTaskDate(realisationStatusDate, 259200000, 'red', taskStatus, 'gotowe')}>
                                                            {this.convertDate(realisationStatusDate).slice(0,26)}
                                                        </td>
                                                        <td>
                                                            {this.convertDate(readyStatusDate).slice(0,26)}
                                                        </td>
                                                        <td>
                                                            <EditTask taskStatus={taskStatus} taskDate={taskDate}
                                                                      taskDesc={taskDesc} taskName={taskName} id={id}/>
                                                        </td>
                                                        <td><Button bsSize="xsmall"
                                                                    onClick={() => this.props.deleteTask(id)}
                                                                    bsStyle="danger">Usuń</Button>
                                                        </td>
                                                        <td style={{textAlign: "center"}}>
                                                            <input onChange={() => this.handleCheckboxOn(id)}
                                                                   type="checkbox"></input>
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