const { Band } = require('../models');

module.exports = {
    async index (req, res) {
        try {
            const band = await Band.findAll({
                limit: 10
            });
            res.send(band);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured tryin to fetch groups'
            });
        }
    },
    async post (req, res) {
        try {
            const band = await Band.create(req.body);
            res.send(band);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured tryin to create groups'
            });
        }
    },
    async show (req, res) {
        try {
            const band = await Band.findById(req.params.bandId);
            res.send(band);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured tryin to fetch band'
            });
        }
    }
}