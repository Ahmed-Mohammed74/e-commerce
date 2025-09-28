import getAllCategories from "@/apis/allCategories";
import React from "react";
import SwiperCategory from "../SwiperCategory/SwiperCategory";
import { categories } from "../../../types/category.t";

const CategorySlide = async () => {
  const data: categories[] = await getAllCategories();

  return (
    <div className="mb-3">
      <SwiperCategory categories={data} />
    </div>
  );
};

export default CategorySlide;
