// src/app/categories/page.tsx
import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

interface Category {
  _id: string;
  name: string;
  image: string;
}

// Server Component
const CategoriesPage = async () => {
  let categories: Category[] = [];

  try {
    const res = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    categories = res.data.data;
  } catch (err) {
    console.error("Failed to fetch categories:", err);
  }

  return (
    <>
      <Head>
        <title>Categories</title>
      </Head>

      <div className="container mx-auto p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <Link
                href={`/subCat/${cat._id}/${cat.name}`}
                key={cat._id}
                className="cursor-pointer border rounded hover:shadow-md transition"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover rounded-t"
                />
                <div className="text-2xl font-semibold text-center text-green-700 p-4">
                  {cat.name}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center mt-10 text-gray-500">
              No categories found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
