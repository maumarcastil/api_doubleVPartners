import { Router } from 'express'
import GitHubUserRoutes from './GitHubUser.routes'

const router = Router()

router.use('/github-users', GitHubUserRoutes)

export default router
