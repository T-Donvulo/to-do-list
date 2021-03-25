import React, { useState } from 'react';
import styled from 'styled-components'
import Layout from '../../component/Layout/Layout';
import { TextField, Button } from '@material-ui/core';


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
`
const StyleButton = styled(Button)`

&&{
margin-top: 1rem;
}

`

const Edit = (props) => {
    const { onSave, initialName, taskId } = props;
    const [name, setName] = useState(initialName || "");

    const handleTextChange = (event) => {
        const { value } = event.target;
        setName(value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(taskId,name);
    }
    return <Layout activePage="edit">
        <Form onSubmit={handleSubmit}>
            <TextField
                onChange={handleTextChange}
                label=" Task Name"
                variant="outlined"
                fullWidth
                value={name}
            />

            <StyleButton href="#/" type="submit" variant="outlined" size="Large" >
                Cancel
            </StyleButton>

            <StyleButton type="submit" disabled={name.trim() === ''} variant="contained" color="primary" size=" Large">
                Save Changes
            </StyleButton>
        </Form>

    </Layout>
}

export default Edit;