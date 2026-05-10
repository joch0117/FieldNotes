const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 100

const buckets = new Map()

const securityHeaders = (req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('Referrer-Policy', 'no-referrer')
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  next()
}

const authRateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown'
  const now = Date.now()

  const entry = buckets.get(ip) || { count: 0, startAt: now }
  if (now - entry.startAt > WINDOW_MS) {
    entry.count = 0
    entry.startAt = now
  }

  entry.count += 1
  buckets.set(ip, entry)

  if (entry.count > MAX_REQUESTS) {
    return res.status(429).json({
      message: 'Trop de requêtes. Réessayez plus tard.'
    })
  }

  return next()
}

module.exports = {
  securityHeaders,
  authRateLimit
}

