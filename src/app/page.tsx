import getProducts from "@/apis/allProducts";
import { Product } from "@/types/product.t";
import MainSlider from "@/components/ui/MainSlider/MainSlider";
import CategorySlide from "./_components/CategorySlide/CategorySlide";
import HomeCard from "./_components/Navbar/HomeCard/HomeCard";
export default async function Home() {
  const data: Product[] = await getProducts();
  return (
    <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
      <MainSlider />
      <CategorySlide />
      <div className="flex flex-wrap">
        {data.map((product, idx) => (
          <HomeCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
}
