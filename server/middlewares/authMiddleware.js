// server/middleware/authMiddleware.js

exports.isAdmin = (req, res, next) => {
    // Assume req.user is set after authentication (e.g., via a JWT or session)
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  };
  