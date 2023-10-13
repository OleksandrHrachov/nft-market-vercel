import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const BannerType = new GraphQLObjectType({
  name: "Banner",
  fields: () => ({
    _id: { type: GraphQLID },
    assetName: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    creatorNickName: { type: GraphQLString },
    creatorAvatarUrl: { type: GraphQLString },
  }),
});
