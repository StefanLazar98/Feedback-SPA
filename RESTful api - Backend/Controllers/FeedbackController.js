const app = require('../serverConfig').app
const router = require('../serverConfig').router
const Feedback = require('../Models/sequelizeConfig').Feedback


    const getFeedbacks = ('/feedbacks', async (req,res) => {
        try {
            const result = await Feedback.findAll();
            res.json(result);
        } catch (error) {
            console.error("An error occured while getting the feedbacks",error);
            res.send(error)
        }
    })


    const getFeedbackById = ('/feedback/:id' , async(req,res) => {
        try {
            const reqId = req.params.id
            const result = await Feedback.findByPk(reqId)
            res.json(result);
        } catch (error) {
            console.error('An error occurd while getting the feedback by id');
        }
    })

   


    const putFeedback =('/feedback/:id', async (req, res) => {
        try {
            const  id  = req.params.id
            const [updated] = await Feedback.update(
                { Smiley: req.body.Smiley,
                  Frown: req.body.Frown,
                  Confused: req.body.Confused,
                  Surprised: req.body.Surprised,
                  Timestamp: req.body.Timestamp
                }, 
                { where: { FeedbackId: id }
            });
            res.json(updated)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    })

    const postFeedback = ('/feedback', async (req,res) => {
        try {
            const result  = await Feedback.create({
                Smiley: req.body.Smiley,
                Frown: req.body.Frown,
                Confused: req.body.Confused,
                Surprised: req.body.Surprised,
                Timestamp: req.body.Timestamp,
                activityId: req.body.activityId
            })
            
            res.json(result)
        } catch (error) {
            console.error('An error occured while posting the feedbacks',error);
        }
    })

    
  


    module.exports = {
        getFeedbacks,
        getFeedbackById,
        putFeedback,
        postFeedback
    }
