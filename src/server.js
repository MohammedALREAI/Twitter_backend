require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const schema = require("./schema");
import prisma from'./prisma'

const { getUserId } = require("./utils");

const server = new GraphQLServer({
  schema,
  context: (req) => ({ req, prisma, getUserId }),
});

const PORT = process.env.PORT || 7777;

server.start(
  {
    port: PORT,
  },
  () => console.log(`server has started at http://localhost:${PORT}`)
);
