let count = 0;
let posts = [];

const resolvers = {
  Query: {
    description: () =>
      'Getting started with GraphQL. THIS IS STILL A TEST',
    posts: () => posts,
    post: (parent, { id }) => posts.find((post) => post.id === id),
  },
  Mutation: {
    createDraft: (parent, { title, content }) => {
      const post = {
        id: `post_${count++}`,
        title: title,
        content: content,
        published: false,
      };
      posts.push(post);
      console.log(posts);
      return post;
    },
    deletePost: (parent, { id }) => {
      const postIndex = posts.findIndex((post) => post.id === id);
      if (postIndex > -1) {
        const deletedPost = posts.splice(postIndex, 1);
        return deletedPost;
      }
    },
    publish: (parent, { id }) => {
      const postIndex = posts.findIndex((post) => post.id === id);
      posts[postIndex].published = true;
      return posts[postIndex];
    },
  },
};

module.exports = resolvers;
