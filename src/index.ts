import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import { buildSchema, } from "type-graphql";
import { AbonadoCrudResolver } from './generated/resolvers/crud/Abonado/AbonadoCrudResolver';
import * as path from "path";
import { AbonadoRelationsResolver } from './generated/resolvers/relations/Abonado/AbonadoRelationsResolver';
import { graphql } from "graphql";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 4000;

const ctx = new PrismaClient()

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [AbonadoCrudResolver, AbonadoRelationsResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  })    
  
  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      return { ctx }
    },
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();