const ShoppingService = require("../services/shopping-service");
module.exports = (app) => {
    
    const service = new ShoppingService();
    app.use('/app-events', async (req, res, next) => {
        const  { payload } = req.body;

        await service.SubscribeEvents(payload);
        console.log("++++++++++++ SHOPPING SERVICE RECOVERED EVENT ++++++++++++");
        return res.status(200).json(payload);

    })
}