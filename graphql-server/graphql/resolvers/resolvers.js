let count = 0;
let posts = [];

const resolvers = {
  Query: {
    description: () =>
      'Getting started with GraphQL. THIS IS STILL A TEST',
    posts: () => posts,
    post: (_, { input }) => posts.find((post) => post.id === input.id),
  },
  Mutation: {
    createDraft: (_, { input }) => {
      const post = {
        id: `post_${count++}`,
        title: input.title,
        content: input.content,
        published: false,
      };
      posts.push(post);
      console.log(posts);
      return post;
    },
    deletePost: (_, { input }) => {
      const postIndex = posts.findIndex((post) => post.id === input.id);
      if (postIndex > -1) {
        const deletedPost = posts.splice(postIndex, 1);
        return deletedPost;
      }
    },
    publish: (_, { input }) => {
      const postIndex = posts.findIndex((post) => post.id === input.id);
      posts[postIndex].published = true;
      return posts[postIndex];
    },
  },
};

module.exports = resolvers;
