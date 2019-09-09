module.exports = function verifySecurity(req, res, next) {
	if (req.userRole === 'resident') next()
	else res.sendStatus(500)
}
