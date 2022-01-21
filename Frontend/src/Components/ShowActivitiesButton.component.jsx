import { useState } from 'react'
import getAllUserActivities from '../actions/ActivityActions/getAllUserActivities'
import CustomPaginationActionsTable from '../Components/Table.component'
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core'
import { Fade } from '@material-ui/core'

const ShowActivitiesButton = (props) => {

    const [showComponent, setShowComponent] = useState(false)
    const [activities, setActivities] = useState([])

    async function fetchAllActivitiesForUser() {

        const result = await getAllUserActivities()
        const user = result.data.filter(u => u.UserID === props.UserId)[0]

        let activ = []
        if (user) {
            activ = user.Activities
        }

        return activ
    }

    (() => {
        const btn = document.getElementById("submitActivity")
        if (btn) {
            btn.addEventListener("click", async () => {
                let activities = await fetchAllActivitiesForUser()
                activities = await fetchAllActivitiesForUser()
                setActivities(activities)
            })
        }

    })()

    async function handleShowActivities() {
        const activities = await fetchAllActivitiesForUser()
        setActivities(activities)
        setShowComponent(true)
    }

    function handleCloseActivities() {
        setShowComponent(false)
    }

    return (
        <div>
            {showComponent ?
                <div>
                    <div id='activities-show-button-close'>
                        <ButtonGroup variant="text" color="primary">
                            <Button onClick={handleCloseActivities}>Închide lista de activități</Button>
                        </ButtonGroup>
                    </div>
                    <Fade in={true} timeout={2000}>
                        <CustomPaginationActionsTable activities={activities} handleSelectActivityButton={props.handleSelectActivityButton} />
                    </Fade>
                </div>
                :
                <div id='activities-show-button-open'>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button onClick={handleShowActivities}>Deschide lista de activități</Button>
                    </ButtonGroup>
                </div>
            }
        </div>

    )
}

export default ShowActivitiesButton