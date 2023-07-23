/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createUser, getUserByUsername, getUserById, getUsers } from '../controllers/githubUser.controller'

const router = Router()

// get all users
router.get('/', getUsers)

// get user by id
router.get('/:id', getUserById)

// get user by github id
router.get('/username/:username', getUserByUsername)

// create user
router.post('/', createUser)

export default router
