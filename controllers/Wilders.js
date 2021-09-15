const WilderModel = require('./../models/Wider');

module.exports = {
    create: (req, res) => {
        const wilder = new WilderModel(req.body);
        wilder
            .save()
            .then(() => {
                res.json({ success: true });
            })
            .catch(() => {
                res.json({ success: false });
            })
    },
    read: (req, res) => {
        WilderModel.find()
        .then((wilders) => {
            res.json(wilders);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err });
        });
    },
    update: (req, res) => {
        // PATCH /api/wilders/update/:wilderId → Body → modifications
        WilderModel.findById(req.params.wilderId).then(wilder => {
            if(wilder) {
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