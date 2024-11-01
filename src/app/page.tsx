import Bestselling from "./Bestselling";
import Categories from "./Categories";
import Cover from "./Cover";
import Explore from "./Explore";
import Features from "./Feature";
import Flashsection from "./Flashsection";

export default function Home() {
  return (
    <>
      <div className="w-[82%]  mx-auto   ">
        <Cover />
        <Flashsection />
        <Categories />
        <Bestselling />
        <Explore />
        <Features />
      </div>
    </>
  );
}
