import {database} from './../firebase'

const SET_TASKS = 'tasks/SET_TASKS'

export const init = () => dispatch => {
    database().ref('taskNames').on('value', snapshot => {
            let tasks = snapshot.val()
            dispatch(setTasks(tasks))
        }
    )
}

export const addNewTask = (newTaskData) => (dispatch, getState) => {
    const nextIndex = getState().tasks.tasksList.length || 0
    database().ref(`taskNames/${nextIndex}`).set({
        ...newTaskData,
        id: nextIndex
    }).then(() => {
        alert('Dodano zadanie!')})
}

const setTasks = tasks => ({
    type: SET_TASKS,
    tasks: tasks
})

const initialState = {
    tasksList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasksList: action.tasks
            }
        default:
            return state
    }
}