import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";
import { ArtistType } from "./artistSchema";
import { getArtistById } from "../db/artist";

export const BannerType = new GraphQLObjectType({
  name: "Banner",
  fields: () => ({
    imgUrl: { type: GraphQLString },
    _id: { type: GraphQLID },
    createdBy: {
      type: ArtistType,
      async resolve(parent, args) {
        return await getArtistById(parent.creatorId)
        
      }
     },
    creatorId: { type: GraphQLString },
    assetName: { type: GraphQLString },
  }),
});
