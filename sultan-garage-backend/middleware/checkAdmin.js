
export const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ message: 'Not authenticated' });
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).json({ message: 'Admin access required' });
};
