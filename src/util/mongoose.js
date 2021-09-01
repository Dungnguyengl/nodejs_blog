module.exports = {
    mutipleMongooseToObject: mongooses => {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    singleMongooseToObject: mongoose => {
        return mongoose.toObject();
    },
};