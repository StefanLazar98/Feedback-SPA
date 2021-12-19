module.exports = (sequelize,DataTypes) => {
    return sequelize.define('Feedback',
    {
        FeedbackId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        Smiley: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        Frown: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Confused: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Surprised: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Timestamp: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}