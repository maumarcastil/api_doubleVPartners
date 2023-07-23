/* eslint-disable no-useless-return */
import { type Request, type Response } from 'express'
import { GitHubUser } from '../entities/GitHubUser'
import { HandleError } from '../utils/handleError'

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    GitHubUser.find()
      .then((users) => {
        if (users === undefined || users === null) {
          res.status(404).json({ status: 404, message: 'users not found' })
          return
        }
        res.json({ status: 200, message: 'get all users', data: users })
        return
      })
      .catch((error: any) => {
        HandleError(error, res)
      })
  } catch (error: any) {
    HandleError(error, res)
  }
}

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    GitHubUser.findOneBy({
      id
    })
      .then((user) => {
        if (user === undefined || user === null) {
          res.status(404).json({ status: 404, message: 'user not found' })
          return
        }
        res.json({ status: 200, message: 'get user by id', data: user })
        return
      })
      .catch((error: any) => {
        HandleError(error, res)
      })
  } catch (error: any) {
    HandleError(error, res)
  }
}

export const getUserByUsername = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username } = req.params
    GitHubUser.findOneBy({
      login: username
    })
      .then((user) => {
        console.log('🚀 ~ file: githubUser.controller.ts:48 ~ .then ~ user:', user)
        if (user === undefined || user === null) {
          res.status(404).json({ status: 404, message: 'user not found' })
          return
        }
        res.json({ status: 200, message: 'get user by github id', data: user })
        return
      })
      .catch((error: any) => {
        HandleError(error, res)
      })
  } catch (error: any) {
    HandleError(error, res)
  }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req
    body.github_id = String(body.id)
    delete body.id

    const newUser = new GitHubUser()
    Object.assign(newUser, body)
    newUser.save()
      .then((user) => {
        if (user === undefined || user === null) {
          res.status(404).json({ status: 404, message: 'user not found' })
          return
        }
        res.json({ status: 200, message: 'create user', data: user })
        return
      })
      .catch((error) => {
        HandleError(error, res)
      })
  } catch (error: any) {
    console.log('🚀 ~ file: githubUser.controller.ts:91 ~ createUser ~ error:', error)
    HandleError(error, res)
  }
}
