import React, { useState } from 'react';
import { HashRouter, Switch, Route, useParams } from 'react-router-dom'
import { v4 as createId } from 'uuid';

import Home from '../../views/Home/Home';
import Add from '../../views/Add/Add';
import Edit from '../../views/Edit/Edit';

const EditWrapper = (props) => {
    const { list, ...remainingProps } = props;
    const { taskId } = useParams();
    const { name } = list.find((item) => item.id === taskId)
    return <Edit {...remainingProps} taskId={taskId} initialName={name}/>
}

const App = () => {
    const [list, setList] = useState([])

    const handleAddItem = (name) => {
        setList([
            { id: createId(), name, checked: false },
            ...list,
        ]);
        window.location.replace('#/')
    };

    const handleCheckToggle = (taskId) => {
       /* const handleEditItem = (taskId, name) => {*/
            const newList = list.map((item) => {
                if (item.id !== taskId) return item;
                return {
                    ...item,
                    checked: !item.checked,

                };
            });
            setList(newList)
        }

    const handleDeleteItem = (taskId) => {
        const newList = list.filter((item) => item.id !== taskId);
        setList(newList);
        }

    const handleEditItem = (taskId, name) => {
        const newList = list.map((item) => {
            if (item.id !== taskId) return item;
            return {
                ...item,
                name,

            }
        })

        setList(newList);
        window.location.replace('#/')
    }

    return (
        <HashRouter>
            <Switch>
                <Route
                    path="/edit/:taskId"
                ><EditWrapper list={list} onSave={handleEditItem} /></Route>

                <Route path="/add/"> <Add onSave={handleAddItem} /> </Route>
            <Route
                path="/"
            ><Home
                list={list}
                onCheckToggle={handleCheckToggle}
                onDeleteItem={handleDeleteItem}
            /> 
            </Route>
           </Switch>
          </HashRouter>
        );
};

export default App;
