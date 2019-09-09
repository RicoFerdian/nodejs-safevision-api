module.exports = function verifySecurity(req, res, next) {
	if (req.userRole === 'security') next()
	else res.sendStatus(500)
}
