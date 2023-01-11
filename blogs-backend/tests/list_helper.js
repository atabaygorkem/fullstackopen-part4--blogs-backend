const dummy = (blogs) => {
  return 1
}

const totalLikes = (postArr) => {
  return postArr.reduce((sum, item) => sum + item.likes, 0)
}

const favoriteBlog = (postArr) => {
  const ret = postArr.sort((a, b) => b.likes - a.likes)[0]
  // const ret = Math.max(...postArr.map(post => post.likes))
  return ret
}

const mostBlogs = (blogs) => {
  const most = blogs.reduce((count, blog) => {
    if (count[blog.author] === undefined) {
      count[blog.author] = 1
    } else {
      count[blog.author] = count[blog.author] + 1
    }
    return count
  }, {})

  const max = Object.keys(most).reduce((acc, cur) => {
    return most[acc] > most[cur] ? acc : cur
  })

  return { author: max, blogs: most[max] }
}

const mostLikes = (blogs) => {
  const most = blogs.reduce((count, blog) => {
    if (count[blog.author] === undefined) {
      count[blog.author] = blog.likes
    } else {
      count[blog.author] = count[blog.author] + blog.likes
    }
    return count
  }, {})

  const max = Object.keys(most).reduce((acc, cur) => {
    return most[acc] > most[cur] ? acc : cur
  })

  return { author: max, likes: most[max] }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
