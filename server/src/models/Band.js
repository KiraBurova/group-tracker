module.exports = (sequelize, DataTypes) => {
    const Band =  sequelize.define('Band', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        imageUrl: DataTypes.STRING,
        youtubeChannel: DataTypes.STRING
    });

    return Band;
}


