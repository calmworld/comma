module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('customer', {
        date: {
            type: Sequelize.DATEONLY
        }, client: {
            type: Sequelize.STRING
        }, project: {
            type: Sequelize.STRING
        }, projectCode: {
            type: Sequelize.STRING
        }, hours: {
            type: Sequelize.DECIMAL
        }, billable: {
            type: Sequelize.BOOLEAN
        }, firstName: {
            type: Sequelize.STRING
        }, lastName: {
            type: Sequelize.STRING
        }, billableRate: {
            type: Sequelize.INTEGER
        }
    });
    return Customer;
};




/*
    name: String, //project col in CSV
    clients: String, //client col in csv
    hours: Number, // hours col in csv
    billable_hours: Number, // billable col in csv
    billable_amount: Number // billable rate in csv
 */