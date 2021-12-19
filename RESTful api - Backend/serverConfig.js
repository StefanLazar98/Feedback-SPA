const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelizeConfig = require('./Models/sequelizeConfig')
const ActivityController = require('./Controllers/ActivityController')
const FeedbackController = require('./Controllers/FeedbackController')
const UserController = require('./Controllers/UserController')
const cors = require('cors')

const app = express();
app.use(cors())
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/activities', ActivityController.getActivities)
app.get('/activity/:code', ActivityController.getActivityByCode)
app.get('/activityById/:id', ActivityController.getActivityById)
app.put('/activity/:id', ActivityController.putActivity)
app.post('/activity', ActivityController.postActivity)
app.get('/activities/user', ActivityController.getUserActivities)

app.get('/feedbacks', FeedbackController.getFeedbacks)
app.get('/feedback/:id', FeedbackController.getFeedbackById)
app.put('/feedback/:id', FeedbackController.putFeedback)
app.post('/feedback', FeedbackController.postFeedback)

app.get('/users', UserController.getUsers)
app.get('/user/:id', UserController.getUserByAccountId)
app.post('/user', UserController.postUser)



const port = 8080;
app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}`);
});

module.exports = {
  app,
  router
}
