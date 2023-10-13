import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from "graphql";


export const SocialLinkType: GraphQLObjectType = new GraphQLObjectType({
  name: "SocialLink",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});