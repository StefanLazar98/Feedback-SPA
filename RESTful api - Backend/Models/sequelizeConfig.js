const Sequelize = require('sequelize')
const ActivityModel = require('./Entities/Activity.js')
const FeedbackModel = require('./Entities/Feedback.js')
const UserModel = require('./Entities/User.js')
const Relationships = require('./relationships.js')
const app = require('../serverConfig.js').app;

const sequelize = new Sequelize('myfeedback', 'sqluser', 'password',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            options: {
                trustedConnections: true,
                enableArithAbort: true
            }

        }
    }
);

const User = UserModel(sequelize, Sequelize);
const Activity = ActivityModel(sequelize, Sequelize);
const Feedback = FeedbackModel(sequelize, Sequelize);


Relationships.userActivityRelationship(User, Activity);
Relationships.activityFeedbackRelationship(Activity, Feedback);





(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established!');
    } catch (error) {
        console.error('Unable to connect to the database');
    }
})();

(async () => {
    try {
        await sequelize.sync({ force: true, alter: false });
        console.log('Database synchronized!');
    } catch (error) {
        console.error('An error occured with the databse synchronization!', error);
    }
})();




module.exports = {
    Activity,
    Feedback,
    User,
    sequelize
};