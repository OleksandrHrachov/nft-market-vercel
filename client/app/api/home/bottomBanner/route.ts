import { NextResponse } from "next/server";
import { IBanner } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      bottomBanner {
        _id
        imgUrl
        assetName
        createdBy {
          nickName
          avatarUrl
          _id
        }
      }
    }
  `;

  const bottomBanner = await getClient()
    .query<{ bottomBanner: IBanner }>({
      query,
    })
    .then((res) => res.data.bottomBanner)
    .catch((e) => {
      console.log("ERROR home-banner-route =>", e);
      return {};
    });

  return NextResponse.json(bottomBanner);
}
