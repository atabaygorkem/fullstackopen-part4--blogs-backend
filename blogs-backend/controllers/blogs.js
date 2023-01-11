const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

//api/blogs path
blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

blogsRouter.get('/:id', async (request, response, next) => {
  const post = await Blog.findById(request.params.id)
  if (post) {
    response.json(post)
  } else {
    response.status(404).end()
  }
  // Blog.findById(request.params.id)
  //   .then(note => {
  //     if (note) {
  //       response.json(note)
  //     } else {
  //       response.status(404).end()
  //     }
  //   })
  //   .catch(error => next(error))
})

blogsRouter.post('/', (request, response, next) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
})

blogsRouter.delete('/:id', async (request, response, next) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
  // Blog.findByIdAndRemove(request.params.id)
  //   .then(() => {
  //     response.status(204).end()
  //   })
  //   .catch(error => next(error))
})

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  const post = {
    likes: body.likes
  }

  const updatedPost = await Blog.findByIdAndUpdate(request.params.id, post, { new: true })
  response.json(updatedPost)
  // Blog.findByIdAndUpdate(request.params.id, note, { new: true })
  //   .then(updatedNote => {
  //     response.json(updatedNote)
  //   })
  //   .catch(error => next(error))
})

module.exports = blogsRouter