import { NextResponse } from "next/server";
import { ICategory } from "../../../types";

import { getClient } from "../../../libs/client";
import { gql } from "@apollo/client";

export async function GET(req: Request) {
  const query = gql`
    query {
      categories {
        category
        imageUrl
        iconUrl
      }
    }
  `;

  const categories = await getClient()
    .query<{ categories: ICategory[] }>({
      query,
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log("ERROR home-categories-route =>", e);
      return { categories: [] };
    });

  return NextResponse.json(categories.categories);
};
