import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "Meat", isDone: true},
        {id: 5, title: "Fish", isDone: true},
        {id: 6, title: "Beer", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList title={"What to do"} tasks={tasks_1}/>
            <TodoList title={"What to buy"} tasks={tasks_2}/>
            <TodoList title={"What to read"} tasks={tasks_1}/>

            <TodoList title={"What to learn"} tasks={tasks_2}/>
            {/*<div>*/}
            {/*    <h3>What to learn</h3>*/}
            {/*    <div>*/}
            {/*        <input/>*/}
            {/*        <button>+</button>*/}
            {/*    </div>*/}
            {/*    <ul>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
            {/*        <li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
            {/*        <li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
            {/*    </ul>*/}
            {/*    <div>*/}
            {/*        <button>All</button>*/}
            {/*        <button>Active</button>*/}
            {/*        <button>Completed</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
