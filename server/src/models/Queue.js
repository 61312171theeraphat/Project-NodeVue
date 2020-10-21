module.exports = (sequelize, DataTypes) => {
    const Queue = sequelize.define('Queue', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        tel: DataTypes.STRING,
        facebook: DataTypes.STRING,
        date: DataTypes.STRING,
    })
    return Queue
}