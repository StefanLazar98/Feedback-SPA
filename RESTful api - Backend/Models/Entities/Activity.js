module.exports = (sequelize,DataTypes) => {
    return sequelize.define('Activity',
    {
        ActivityId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        Description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        StartedAt: {
            type: DataTypes.STRING,
            allowNull: false
        },

        FinishedAt: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        Code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        accountId: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
}