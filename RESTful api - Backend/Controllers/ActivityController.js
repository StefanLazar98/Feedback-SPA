const Feedback = require('../Models/sequelizeConfig').Feedback
const app = require('../serverConfig').app
const router = require('../serverConfig').router
const Activity = require('../Models/sequelizeConfig').Activity
const User = require('../Models/sequelizeConfig').User

const getActivities = ('/activities', async (req, res) => {
    try {
        const result = await Activity.findAll();
        res.json(result);
    } catch (error) {
        console.error("An error occured while getting the activities", error);
        res.send(error)
    }
})

const getActivityByCode = ('/activity/:code', async (req, res) => {
    try {
        const code = req.params.code
        const result = await Activity.findOne({
            where: {
                Code: code
            },
            include: {
                model: Feedback,
                as: 'Feedback',

            }
        })
        res.json(result);
    } catch (error) {
        console.error('An error occurd while getting the activity by id');
    }
})

const getActivityById = ('/activityById/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await Activity.findOne({
            where: {
                ActivityId: id
            },
            include: {
                model: Feedback,
                as: 'Feedback',

            }
        })
        res.json(result);
    } catch (error) {
        console.error('An error occurd while getting the activity by id');
    }
})

const putActivity = ('/activity/:id', async (req, res) => {
    try {
        const id = req.params.id
        const [updated] = await Activity.update(
            {
                Description: req.body.Description,
                StartedAt: req.body.StartedAt,
                FinishedAt: req.body.FinishedAt,
                Active: req.body.Active,
                Code: req.body.Code,
                userId: req.body.userId,
                accountId: req.body.accountId
            },
            {
                where: { ActivityId: id }
            });
        res.json(updated)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

const postActivity = ('/activity', async (req, res) => {
    try {
        const result = await Activity.create({
            Description: req.body.Description,
            StartedAt: req.body.StartedAt,
            FinishedAt: req.body.FinishedAt,
            Active: req.body.Active,
            Code: req.body.Code,
            accountId: req.body.accountId,
            userId: req.body.userId

        })

        res.json(result)
    } catch (error) {
        console.error('An error occured while posting the activity', error);
    }
})

const getUserActivities = ('/activities/user', async (req, res) => {
    try {
        const result = await User.findAll({
            include: {
                model: Activity,
                as: 'Activities',
                required: true,
            }
        });

        res.json(result)
    } catch (error) {
        console.error(error)
    }
})

module.exports = {
    getActivities,
    getActivityByCode,
    putActivity,
    postActivity,
    getUserActivities,
    getActivityById
}
