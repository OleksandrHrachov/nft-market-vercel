import { NextRequest, NextResponse } from "next/server";
import { ISocialLink } from "../../types";

import { getClient } from "../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: NextRequest) {
  const query = gql`
    query {
      socialLinks {
        name
        url
      }
    }
  `;

  const socialLinks = await getClient()
    .query<{ socialLinks: ISocialLink[] }>({
      query,
    })
    .then((res) => res.data.socialLinks)
    .catch((e) => {
      console.log("ERROR footer-route =>", e);
      return { socialLinks: [] };
    });

  return NextResponse.json(socialLinks);
}
