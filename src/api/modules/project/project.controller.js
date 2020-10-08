
class ProjactController {
    ok(req, res) {
        return res.send({ok: true, user: req.userId})
    }
}

module.exports = new ProjactController();