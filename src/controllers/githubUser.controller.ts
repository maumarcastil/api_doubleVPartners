/* eslint-disable no-useless-return */
import { type Request, type Response } from 'express'
import { GitHubUser } from '../entities/GitHubUser'

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await GitHubUser.find()
    if (users === undefined || users === null) {
      res.status(404).json({ status: 404, message: 'users not found' })
    }
    res.json({ status: 200, message: 'get all users', data: users })
  } catch (error: any) {
    console.log('🚀 ~ file: githubUser.controller.ts:7 ~ getUsers ~ error:', error)
    res.status(500).json({ status: 500, message: error.message })
    return
  }
}

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const user = await GitHubUser.findOne({
      where: { github_id: Number(id) }
    })
      .catch((err) => {
        console.log('🚀 ~ file: githubUser.controller.ts:16 ~ getUserById ~ err:', err)
        res.status(500).json({ status: 500, message: err.message })
      })
    if (user === undefined || user === null) {
      res.status(404).json({ status: 404, message: 'user not found' })
    }

    res.json({ status: 200, message: 'get user by id', data: user })
  } catch (error: any) {
    console.log('🚀 ~ file: githubUser.controller.ts:16 ~ getUserById ~ error:', error)
    res.status(500).json({ status: 500, message: error.message })
    return
  }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req
    body.github_id = body.id
    delete body.id

    const user = await GitHubUser.create(body).save()
    res.json({ status: 200, message: 'create user', data: user })
  } catch (error: any) {
    console.log('🚀 ~ file: githubUser.controller.ts:38 ~ createUser ~ error:', error)
    res.status(500).json({ status: 500, message: error.message })
    return
  }
}
