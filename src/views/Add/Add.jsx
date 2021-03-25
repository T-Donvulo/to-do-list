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

const Add = (props) => {
    const { onSave } = props;
    const [name, setName] = useState('')

    const handleTextChange = (event) => {
        const { value } = event.target;
        setName(value);
    };
     

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(name);
    }
    return <Layout activePage="add">
        <Form onSubmit={handleSubmit}>
            <TextField
                onChange={handleTextChange}
                label=" Task Name"
                variant="outlined"
                fullWidth
                value={name}
            />
            <StyleButton type="submit" variant="contained" color="primary" size=" Large" disabled={name.trim() === ''}>
                Saved Task
                </StyleButton>
        </Form>

        
        </Layout>
}

export default Add;