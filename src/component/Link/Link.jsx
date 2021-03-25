import styled from 'styled-components';

const Base = styled.a`
font-weight: 700;
display: inline-block;
background: #F5CCE8;
padding: 1rem;
text-transform: uppercase;
user-select:none;
font-family: Arial, sans-serif;
border: 1px solid #CCC;
border-radius: 25px;
text-decoration: none;
text-align: center;
white-space: nowrap;
width: ${props => props.fullWidth ? '100%' : 'auto'};
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
color: ${props => props.disabled ? '#DDDBF1' : '#3C4F76'};


&:hover{
background: ${props => props.disabled ? '#DDDBF1' : '#000000'}; 
}
&:active{
background:${props => props.disabled ? '#DDDBF1' : '#3C4F76'};

`

const Link = (props) => {
    const { children, disabled, url, fullWidth } = props;

    return(
        <Base
            fullWidth={fullWidth}
        href={disabled ? undefined : url}
        disabled={disabled}
    >
        {children}
        </Base>
        )
}

export default Link;
