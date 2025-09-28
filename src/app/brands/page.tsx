// src/app/brands/page.tsx
import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

interface Brand {
  _id: string;
  name: string;
  image: string;
}

const BrandsPage = async () => {
  let brands: Brand[] = [];

  try {
    const res = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/brands"
    );
    brands = res.data.data;
  } catch (err) {
    console.error("Failed to fetch brands:", err);
  }

  return (
    <>
      <Head>
        <title>All Brands</title>
      </Head>

      <div className="container mx-auto p-3">
        <h2 className="text-center text-5xl text-green-700 my-10">
          All Brands
        </h2>
        {brands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {brands.map((brand) => (
              <Link
                href={`/subBrands/${brand._id}/${brand.name}`}
                key={brand._id}
                className="cursor-pointer border rounded hover:shadow-md transition"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-52 object-cover rounded-t"
                />
                <p className="text-2xl font-semibold text-center text-green-700 p-4">
                  {brand.name}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center mt-10 text-gray-500">No brands found.</p>
        )}
      </div>
    </>
  );
};

export default BrandsPage;
