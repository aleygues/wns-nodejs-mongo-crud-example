const WilderModel = require('./../models/Wilder');

module.exports = {
    create: async (req, res) => {
        await WilderModel.init();
        const wilder = new WilderModel(req.body);
        await wilder.save();
        res.json({ success: true });
    },
    read: async (req, res) => {
        res.json(await WilderModel.find());
    },
    update: (req, res) => {
        // PATCH /api/wilders/update/:wilderId → Body → modifications
        WilderModel.findById(req.params.wilderId).then(wilder => {
            if (wilder) {
                Object.assign(wilder, req.body);
                wilder.save().then(() => {
                    res.json({ success: true });
                }).catch(err => {
                    console.error(err);
                    res.status(500).json({ error: err });
                });
            } else {
                res.status(404).json({ error: 'notfound' });
            }
        })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ error: err });
            });
    }
}