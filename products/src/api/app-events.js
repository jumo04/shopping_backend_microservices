
module.exports = (app) => {
    
    app.use('/app-events', async (req, res, next) => {
        const  { payload } = req.body;

        await service.SubscribeEvents(payload);
        console.log("++++++++++++PRODUCTS SERVICE RECOVERED ELEMENTS++++++++++++");
        return res.status(200).json(payload);

    })
}