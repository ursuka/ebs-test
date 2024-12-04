import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { ProductDto } from "../interfaces/interfaces";
import { useCart } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";
import Loading from "../componets/loading/Loading";
import ErrorMsg from "../componets/error/Error";
import SearchAndFilterContainer from "../componets/searchAndFilterContainer/SearchAndFilterContainer";
import SearchInput from "../componets/searchBar/SearchBar";
import ProductGrid from "../componets/productGrid/ProductGrid";
import ProductCard from "../componets/productCard/ProductCard";
import Pagination from "../componets/pagination/Pagination";
import Select from "../componets/select/Select";

const HomePage: FC = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const itemsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_BASE_URL + `products`
        );
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_URL + `products/categories`
        );
        const data = await response.json();
        setCategories(["all", ...data]);
      } catch (err) {
        console.error("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "none") return 0;
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    setSearchParams({ page: "1", search: searchQuery });
  };

  const handleSortByPrice = (event: ChangeEvent) => {
    setSortOrder(
      (event.target as HTMLInputElement).value as "asc" | "desc" | "none"
    );
  };

  const handleSortByCategory = (event: ChangeEvent) => {
    setSelectedCategory((event.target as HTMLInputElement).value);
  };

  const handleSearchQuery = (event: ChangeEvent) => {
    setSearchQuery((event.target as HTMLInputElement).value);
  };

  if (loading) return <Loading />;
  if (errorMsg) return <ErrorMsg msg={errorMsg} />;

  return (
    <>
      <SearchAndFilterContainer>
        <form onSubmit={handleSearch} className="w-[65%]">
          <SearchInput
            onChange={handleSearchQuery}
            type="text"
            value={searchQuery}
            placeholder="Search..."
          />
        </form>
        <Select onChange={handleSortByCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        <Select onChange={handleSortByPrice}>
          <option value="none">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Select>
      </SearchAndFilterContainer>

      <ProductGrid>
        {paginatedProducts.map((product) => {
          return (
            <ProductCard
              category={product.category}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              key={product.id}
              addToCart={() =>
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  category: product.category,
                  quantity: 1,
                })
              }
            />
          );
        })}
      </ProductGrid>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomePage;
