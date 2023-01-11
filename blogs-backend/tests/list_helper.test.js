const listHelper = require("./list_helper")
const { listWithOneBlog, blogs } = require("./tempStuffs.js")

test("dummy returns one", () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe("total likes", () => {
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test("when list has more than one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(36)
  })
})

describe("Favourite post", () => {
  // test("when list has only one blog", () => {

  // })

  test("when list has more than one blog", () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    })
  })
})

describe("author", () => {
  const mostBlogs = {
    author: "Robert C. Martin",
    blogs: 3,
  }

  const mostLikes = {
    author: "Edsger W. Dijkstra",
    likes: 17,
  }
  test("with most blogs", () => {
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual(mostBlogs)
  })

  test("with most likes", () => {
    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual(mostLikes)
  })
})
