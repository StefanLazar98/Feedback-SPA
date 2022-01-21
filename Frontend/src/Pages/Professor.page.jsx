import React, { useState, useEffect } from 'react'
import AuthenticationButton from '../Components/AuthenticationButton.component'
import Profile from '../Components/Profile.component'
import getUserByAccountId from '../actions/UserActions/getUserByAccountId'
import postUser from '../actions/UserActions/postUser'
import { useAuth0 } from "@auth0/auth0-react";
import CreateActivityForm from '../Components/CreateActivityForm.component'
import ShowActivitiesButton from '../Components/ShowActivitiesButton.component'
import ReactionFeed from '../Components/ReactionFeed.component'
import getActivityAndFeedbackById from '../actions/ActivityActions/getActivityAndFeedbackById'
import { Box } from '@material-ui/core'
import { Fade } from '@material-ui/core'

const ProfessorPage = () => {
        const { user } = useAuth0(0);
        const [UserId, setUserId] = useState()
        const [feedbackId, setFeedbackId] = useState()

        const fetchAccountData = async () => {
                const existingId = await getUserByAccountId(user.sub)
                if (existingId) {
                        setUserId(existingId)
                } else {
                        const newId = await postUser(user.sub)
                        setUserId(newId.data.UserID)
                }
        }

        const handleSelectActivityButton = async (id) => {

                const feedback = await getActivityAndFeedbackById(id);
                setFeedbackId(feedback.FeedbackId);
                console.log(feedback);
        }


        useEffect(() => {
                fetchAccountData()
        }, [setUserId])

        return (
                <div>
                        <div>
                                <h1 className="title">{`Vizualizare feedback pentru: ${user.name}`}</h1>
                                <Fade in={true} timeout={1000}>
                                        <Box id='user-container' border={1} width={300}>
                                                <Fade in={true} timeout={1000}>
                                                        <Profile />
                                                </Fade>

                                                <Fade in={true} timeout={1000}>
                                                        <AuthenticationButton />
                                                </Fade>
                                        </Box>
                                </Fade>

                                <Fade in={true} timeout={1000}>
                                        <CreateActivityForm UserId={UserId} />
                                </Fade>

                                <Fade in={true} timeout={1000}>
                                        <ShowActivitiesButton UserId={UserId} handleSelectActivityButton={handleSelectActivityButton} />
                                </Fade>

                                <div id='reaction-feed-prof'>
                                        <Fade in={true} timeout={1000}>
                                                <ReactionFeed feedbackId={feedbackId} />
                                        </Fade>
                                </div>
                        </div>
                </div>
        )
}

export default ProfessorPage

