import type { TDefaultFetchData } from "@/types/default-fetch-data";
import type {
  TBrandsProduct,
  TPopularCategory,
  TProduct,
  TManufacturer,
  TCategoryDetail,
  TTopComment,
  TProductDetails,
  TProductComment,
  TProductCommentRates,
} from "@/types/products.types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface IBrandsProducts extends TDefaultFetchData {
  results: TBrandsProduct[];
}

interface IPopularCategories extends TDefaultFetchData {
  results: TPopularCategory[];
}

interface IProducts extends TDefaultFetchData {
  results: TProduct[];
}

interface IManufacturerList extends TDefaultFetchData {
  results: TManufacturer[];
}

interface ITopComment extends TDefaultFetchData {
  results: TTopComment[];
}

interface IProductComments extends TDefaultFetchData {
  results: TProductComment[];
}

export const useProductsStore = defineStore({
  id: "productsStore",
  state: () => ({
    brandsProducts: [] as TBrandsProduct[],
    manufacturerList: [] as TManufacturer[],
    popularCategories: [] as TPopularCategory[],
    categoriesById: {} as TCategoryDetail,
    recommendedProducts: [] as TProduct[],
    discountProducts: [] as TProduct[],
    productsByCategoryId: [] as TProduct[],
    bodyProducts: [] as TProduct[],
    womanProducts: [] as TProduct[],
    topComments: [] as TTopComment[],
    productDetails: {} as TProductDetails,
    productComments: [] as TProductComment[],
    productCommentRates: {} as TProductCommentRates,
    similarProducts: [] as TProduct[],
  }),
  actions: {
    // MANUFACTURERS
    async getBrandsProducts() {
      try {
        const data = await $fetch<IBrandsProducts>(
          `${BASE_URL}/products/manufacture-with-products/`,
        );
        this.brandsProducts = data.results || [];
      } catch (error) {
        console.error("Failed to fetch brands with products:", error);
      }
    },
    async getManufacturerList(page: number = 1) {
      try {
        const data = await $fetch<IManufacturerList>(
          `${BASE_URL}/products/manufacture/?page=${page}&size=24`,
        );
        if (page === 1) {
          this.manufacturerList = data.results || [];
        } else {
          this.manufacturerList = [...this.manufacturerList, ...data.results];
        }
      } catch (error) {
        console.error("Failed to fetch manufacturer list:", error);
      }
    },
    // CATEGORIES
    async getPopularCategories() {
      try {
        const data = await $fetch<IPopularCategories>(
          `${BASE_URL}/products/popular-categories/?size=12`,
        );
        this.popularCategories = data.results || [];
      } catch (error) {
        console.error("Failed to fetch popular categories:", error);
      }
    },
    async getCategoriesbyId(id: number) {
      try {
        const data = await $fetch<TCategoryDetail>(
          `${BASE_URL}/products/categories/${id}`,
        );
        this.categoriesById = data || {};
      } catch (error) {
        console.error("Failed to fetch categories by id:", error);
      }
    },

    // PRODUCTS
    async getRecommended() {
      try {
        const data = await $fetch<IProducts>(
          `${BASE_URL}/products/recommended/`,
        );
        this.recommendedProducts = data.results || [];
      } catch (error) {
        console.error("Failed to fetch recommended products:", error);
      }
    },
    async getDiscountProducts() {
      try {
        const data = await $fetch<IProducts>(
          `${BASE_URL}/products/?in_sale=true`,
        );
        this.discountProducts = data.results || [];
      } catch (error) {
        console.error("Failed to fetch discount products:", error);
      }
    },
    async getProductsByCategoryId(id: number) {
      try {
        const data = await $fetch<IProducts>(
          `${BASE_URL}/products/?category=${id}`,
        );
        if (id === 110) {
          this.bodyProducts = data.results || []; // For home page
        } else if (id === 12) {
          this.womanProducts = data.results || []; // For home page
        } else {
          this.productsByCategoryId = data.results || [];
        }
      } catch (error) {
        console.error("Failed to fetch products by cateogry id:", error);
      }
    },
    async getProductDetails(slug: string | string[]) {
      try {
        const data = await $fetch<TProductDetails>(
          `${BASE_URL}/products/detail/${slug}`,
        );
        this.productDetails = data || {};
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    },
    async getSimilarProducts(id: number) {
      try {
        const data = await $fetch<IProducts>(
          `${BASE_URL}/products/${id}/similar/`,
        );
        this.similarProducts = data.results || [];
      } catch (error) {
        console.error("Failed to fetch similar products:", error);
      }
    },
    // COMMENTS
    async getTopComments() {
      try {
        const data = await $fetch<ITopComment>(
          `${BASE_URL}/products/top-comments`,
        );
        this.topComments = data.results || [];
      } catch (error) {
        console.error("Failed to fetch top comments:", error);
      }
    },
    async getCommentsByProductId(id: number) {
      try {
        const data = await $fetch<IProductComments>(
          `${BASE_URL}/products/${id}/comments/`,
        );
        this.productComments = data.results || [];
      } catch (error) {
        console.error("Failed to fetch product comments:", error);
      }
    },
    async getCommentRatesByProductId(id: number) {
      try {
        const data = await $fetch<TProductCommentRates>(
          `${BASE_URL}/products/${id}/comments/rates`,
        );
        this.productCommentRates = data || [];
      } catch (error) {
        console.error("Failed to fetch product comment rates:", error);
      }
    },
  },
});
