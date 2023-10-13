import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const SubscribeType = new GraphQLObjectType({
  name: "Subscribe",
  fields: () => ({
    _id: { type: GraphQLID },
    imgUrl: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
