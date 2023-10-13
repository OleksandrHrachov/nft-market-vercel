import { NextResponse } from "next/server";
import { ICreator, IHowItWorkCard } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      howItWorkCards {
        _id
        title
        imgUrl
        description
      }
    }
  `;

  const cards = await getClient()
    .query<{ howItWorkCards: IHowItWorkCard[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-creators-route =>", e);
      return { howItWorkCards: [] };
    });

  return NextResponse.json(cards.howItWorkCards);
}
