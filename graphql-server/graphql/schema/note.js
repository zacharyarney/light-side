const Note = /* GraphQL */ `
  extend type Query {
    notes: [Note!]!
  }

  type Note {
    id: ID!
    noteTitle: String!
    noteBody: String!
    created_at: String!
    updated_at: String!
    user_id: String!
  }
`;

module.exports = Note;
