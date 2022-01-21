import { useState } from 'react'
import { putSmiley, putConfused, putFrown, putSurprised } from '../actions/FeedBackActions/putFeedbacks'
import getFeedbackById from '../actions/FeedBackActions/getFeedbackById'
import Button from '@material-ui/core/Button'
import { ButtonGroup } from '@material-ui/core'
import { Fade } from '@material-ui/core'
const FeedBackGrid = ({ activity }) => {

    const [feedback, setFeedback] = useState(activity.Feedback)

    async function handleSmileyClick() {
        const feed = await getFeedbackById(feedback.FeedbackId)
        const count = feed.Smiley
        putSmiley(feedback.FeedbackId, count)
    }

    async function handleFrownClick() {
        const feed = await getFeedbackById(feedback.FeedbackId)
        const count = feed.Frown
        putFrown(feedback.FeedbackId, count)
    }

    async function handleSurprisedClick() {
        const feed = await getFeedbackById(feedback.FeedbackId)
        const count = feed.Surprised
        putSurprised(feedback.FeedbackId, count)
    }

    async function handleConfusedClick() {
        const feed = await getFeedbackById(feedback.FeedbackId)
        const count = feed.Confused
        putConfused(feedback.FeedbackId, count)
    }

    return (
        <div id='feedback-grid'>
            <Fade in={true} timeout={1000}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={handleSmileyClick}>Smiley</Button>
                    <Button onClick={handleSurprisedClick}>Surprised</Button>
                    <Button onClick={handleFrownClick}>Frown</Button>
                    <Button onClick={handleConfusedClick}>Confused</Button>
                </ButtonGroup>
            </Fade>
        </div>
    )
}

export default FeedBackGrid