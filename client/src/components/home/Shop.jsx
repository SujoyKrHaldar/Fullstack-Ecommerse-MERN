import ProductList from "./ProductList";

function Shop() {
  return (
    <section className="w-full h-auto py-16 bg-gray-100">
      <div className="w-full h-full container">
        <div className="max-w-[800px]">
          <p className="tag py-1 px-4 bg-orange-500 text-white w-fit mb-3">
            Best collections
          </p>
          <h2 className="mb-2">Discover limited clothes without limitation.</h2>
        </div>
        <ProductList />
      </div>
    </section>
  );
}

export default Shop;
