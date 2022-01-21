import React from 'react'
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core'
import '../Styles/Intro.page.style.css'
import { ButtonGroup } from '@material-ui/core'

class Intro extends React.Component {

    render() {
        return (
            <div id='container'>
                <Fade in={true} timeout={1000}>
                    <h1 className='title'>Feedback continuu activități</h1>
                </Fade>

                <div className='container-buttons'>
                    <ButtonGroup variant='text' color='primary' aria-label="text primary button group">

                        <Fade in={true} timeout={1000}>
                            <Button className='button' onClick={() => this.props.history.push('/student')}>Student</Button>
                        </Fade>

                        <Fade in={true} timeout={1000}>
                            <Button onClick={() => this.props.history.push('/profesor')}>Profesor</Button>
                        </Fade>

                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

export default Intro