import { ICategory } from "@/app/types";
import "./BrowseCategoriesSection.scss";
import { CategoryCard } from "./CategoryCard";
import { BASE_URL } from "@/app/utils/endpoint";

const getCategories = async (): Promise<ICategory[]> => {
  const categories = await fetch("http://localhost:3000/api/home/categories", {
    method: "GET",
  }).then((res) => res.json());

  return categories;
};

export default async function BrowseCategoriesSection() {
  const categories = await getCategories();

  return (
    <section className="container categories">
      <h3 className="categories__title">Browse Categories</h3>
      {categories.length > 0 ? (
        <div className="categories__list">
          {categories.map((category, idx) => {
            return (
              <CategoryCard
                key={category.category}
                imageSrc={`${BASE_URL}/${category.imageUrl}`}
                iconSrc={`${BASE_URL}/${category.iconUrl}`}
                altText={category.category}
                category={category.category}
                href="/marketplace"
              />
            );
          })}
        </div>
      ) : (
        <div className="categories__list-empty-list">
          Sorry, there was some error, so the list of categories is not
          available.
        </div>
      )}
    </section>
  );
}
