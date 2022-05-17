const user="admin"
const password="admin"
const dbName="foodDelivery"
module.exports = {
    url : `mongodb+srv://${user}:${password}@cluster0.trub6.mongodb.net/${dbName}?retryWrites=true&w=majority`
};
