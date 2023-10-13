import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from "graphql";

export const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    _id: { type: GraphQLID },
    imageUrl: { type: GraphQLString },
    iconUrl: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
});
