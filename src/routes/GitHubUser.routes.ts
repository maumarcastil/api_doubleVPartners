/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createUser, getUserById, getUsers } from '../controllers/githubUser.controller'
const router = Router()

// get all users
router.get('/', getUsers)

// get user by id
router.get('/:id', getUserById)

// create user
router.post('/', createUser)

export default router
