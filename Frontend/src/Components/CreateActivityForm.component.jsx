import React from 'react'
import generateId from '../helpers'
import postActivity from '../actions/ActivityActions/postActivity'
import postFeedback from '../actions/FeedBackActions/postFeedback'
import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonGroup, TextField } from '@material-ui/core'
import { Fade } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import AlertDialog from '../Components/DialogAlert.component'

const CreateActivityForm = (props) => {
  const { user } = useAuth0();
  const [popUp, setPopUp] = useState(false)
  const [message, setMessage] = useState("")
  const id = user.sub

  const [getActivity, setActivity] = useState({
    activity: {
      Description: '',
      StartedAt: '',
      FinishedAt: '',
      Code: '',
      accountId: '',
      userId: ''
    }
  })

  const [activityId, setActivityId] = useState(0)

  useEffect(async () => {
    if (getActivity.activity.accountId) {

      let result = await postActivity(getActivity.activity)
      const act = result.data

      const defaultFeedback = {
        Smiley: 0,
        Frown: 0,
        Confused: 0,
        Surprised: 0,
        Timestamp: act.StartedAt,
        activityId: act.ActivityId
      }

      const postedDefaultFeedback = await postFeedback(defaultFeedback)
    }

  }, [getActivity, setActivity]);

  async function submitActivity(evt) {
    evt.preventDefault()

    let description = document.getElementById("descriptionInput").value
    let startedAt = document.getElementById("startedInput").value
    let finishedAt = document.getElementById("finishedInput").value
    let code = generateId(6)

    if (description !== "" && startedAt !== "" && finishedAt !== "") {
      setPopUp(false)
      setMessage("")

      let activ = {
        Description: description,
        StartedAt: startedAt,
        FinishedAt: finishedAt,
        Code: code,
        Active: true,
        accountId: id,
      }

      setActivity({
        activity: {
          Description: activ.Description,
          StartedAt: activ.StartedAt,
          FinishedAt: activ.FinishedAt,
          Code: activ.Code,
          Active: activ.Active,
          accountId: id,
          userId: props.UserId
        }
      })
    } else {
      setMessage("Toate campurile trebuie să fie completate!")
      setPopUp(true)

    }

    document.getElementById("descriptionInput").value = ""
    document.getElementById("startedInput").value = ""
    document.getElementById("finishedInput").value = ""
  }

  const styles = theme => ({
    input: {
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "blue",
        fontSize: 14
      }
    }
  });

  function handlePopUpClose() {
    setPopUp(false)
  }

  return (
    <form id='create-activity-form'>
      <div>
        {
          popUp ? <AlertDialog message={message} popUp={popUp} handlePopUpClose={handlePopUpClose} /> : null
        }
      </div>
      <Fade in={true} timeout={1000}>
        <div>
          <TextField id="descriptionInput" InputLabelProps={{ style: { color: "#3f51b5" } }} InputProps={{ style: { color: "#3f51b5" } }} style={{ "margin-right": "15px" }} type="text" name="Description" label="Descriere" variant="outlined" color="primary" />

          <TextField id="startedInput" InputLabelProps={{ style: { color: "#3f51b5" } }} InputProps={{ style: { color: "#3f51b5" } }} style={{ "margin-right": "15px" }} type="text" name="StartedAt" label="Dată începere" variant="outlined" color="primary" />

          <TextField id="finishedInput" InputLabelProps={{ style: { color: "#3f51b5" } }} InputProps={{ style: { color: "#3f51b5" } }} style={{ "margin-right": "15px" }} type="text" name="FinishedAt" label="Dată terminare" variant="outlined" color="primary" />

          <TextField id="getCodeInput" InputLabelProps={{ style: { color: "#3f51b5" } }} InputProps={{ style: { color: "#3f51b5" } }} style={{ "margin-right": "15px" }} type="text" label="Cod generat" variant="outlined" name="Code" readOnly={true} value={getActivity.activity.Code} color="primary" />

          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button id="submitActivity" type="submit" style={{ "margin-top": "10px" }} onClick={submitActivity}>Adaugă</Button>
          </ButtonGroup>
        </div>
      </Fade>
    </form>
  )
}

export default CreateActivityForm