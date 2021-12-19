module.exports = (sequelize,DataTypes) => {
    return sequelize.define('User',
    {
        UserID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

       AccountId:{
           type: DataTypes.STRING,
           unique: true
       }
        
    });
}