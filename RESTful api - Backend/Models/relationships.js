
// const userActivityRelationship = (user,activity) => {
//     activity.hasOne(activity, {foreignKey: 'userId', targetKey:'AccountId'})
// }

const userActivityRelationship = (user,activity) => {
    user.hasMany(activity, {foreignKey: 'userId'})
}

const activityFeedbackRelationship = (activity, feedback) => {
    activity.hasOne(feedback, {foreignKey:{
        name: 'activityId',
        allowNull: false
    }})
}

module.exports = {
    userActivityRelationship,
    activityFeedbackRelationship
}