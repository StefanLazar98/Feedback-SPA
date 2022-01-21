import { useState } from 'react'
import getActivityByCode from '../actions/ActivityActions/getActivityByCode'
import FeedBackGrid from '../Components/FeedBackGrid.component'
import ReactionFeed from '../Components/ReactionFeed.component'
import { ButtonGroup, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { Fade } from '@material-ui/core'
import AlertDialog from '../Components/DialogAlert.component'

const StudentPage = () => {
    const [showGrid, setShowGrid] = useState(false)
    const [activity, setActivity] = useState({})
    const [popUp, setPopUp] = useState(false)
    const [message, setMessage] = useState("")

    async function handleOkButtonClick() {
        const code = document.getElementById("codeInput").value

        if (code && code !== "") {
            const resActivity = await getActivityByCode(code)

            if (resActivity != null) {

                if (resActivity.Active === true) {

                    setActivity(resActivity)
                    setPopUp(false)
                    setMessage("")
                    setShowGrid(true)
                } else {
                    setPopUp(true)
                    setMessage("Codul introdus nu este valid deoarece activitatea nu mai este activă!")
                }
            } else {
                setMessage("Codul introdus nu există!")
                setPopUp(true)
            }
        }
    }

    function handleButtonGoBack() {
        setShowGrid(false)
        setActivity({})
    }

    function handlePopUpClose() {
        setPopUp(false)
    }

    return (
        <div id='container'>
            <div>
                {
                    popUp ? <AlertDialog message={message} popUp={popUp} handlePopUpClose={handlePopUpClose} /> : null
                }
            </div>

            <div>
                {
                    showGrid ?
                        <div>
                            <Fade in={true} timeout={1000}>
                                <h1 className='title'>Acordă un feedback!</h1>
                            </Fade>

                            <div id='reaction-feed-student'>
                                <ReactionFeed feedbackId={activity.Feedback.FeedbackId} />
                            </div>

                            <FeedBackGrid key={activity.ActivityId} activity={activity} />

                            <ButtonGroup id='button-go-back' variant="text" color="primary" aria-label="text primary button group">
                                <Fade in={true} timeout={1000}>
                                    <Button style={{ "margin-left": "20px", "top": "20px" }} onClick={handleButtonGoBack}>Înapoi</Button>
                                </Fade>
                            </ButtonGroup>
                        </div>
                        :
                        <div id='text-button-container-student' style={{ "margin-left": "-20px", "margin-top": "30px" }}>
                            <Fade in={true} timeout={1000}>
                                <h1 className='title'>Introduceți codul:</h1>
                            </Fade>
                            <Fade in={true} timeout={1000}>
                                <TextField id="codeInput" style={{ "margin-left": "75px" }} InputLabelProps={{ style: { color: "#3f51b5" } }} InputProps={{ style: { color: "#3f51b5" } }} label="Cod activitate" variant="outlined" color="primary" />
                            </Fade>

                            <Fade in={true} timeout={1000}>
                                <ButtonGroup variant="text" color="primary">
                                    <Fade in={true} timeout={1000}>
                                        <Button id="button-ok" onClick={handleOkButtonClick} style={{ "margin-top": "10px" }}>OK</Button>
                                    </Fade>
                                </ButtonGroup>
                            </Fade>

                            <ButtonGroup id='button-go-back' variant="text" color="primary" aria-label="text primary button group">
                                <Fade in={true} timeout={1000}>
                                    <Button style={{ "left": "-320px", "top": "-20px" }} onClick={() => window.location.href = "/"}>Înapoi</Button>
                                </Fade>
                            </ButtonGroup>
                        </div>
                }
            </div>
        </div>
    )
}

export default StudentPage