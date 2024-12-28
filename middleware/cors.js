import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:3000', 'http://localhost:5173']

// Middleware to handle CORS
// This middleware will only allow requests from the specified origins
// If the origin is not in the list, it will return an error
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
	cors({
		origin: (origin, callback) => {
			if (acceptedOrigins.includes(origin) || !origin) {
				return callback(null, true)
			}
			return callback(new Error('Not allowed by CORS'))
		},
	})
