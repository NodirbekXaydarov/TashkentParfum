import type { TDefaultFetchData } from "@/types/default-fetch-data";
import type {
  TStaticPage,
  TStaticPageDetails,
  TStatistics,
  TAbout,
} from "@/types/statics.types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface IStaticPages extends TDefaultFetchData {
  results: TStaticPage[];
}

export const useStaticPagesStore = defineStore({
  id: "staticPagesStore",
  state: () => ({
    staticPages: [] as TStaticPage[],
    staticPageDetails: {} as TStaticPageDetails,
    statistics: {} as TStatistics,
    about: {} as TAbout,
  }),
  actions: {
    async getStaticPages() {
      try {
        const data = await $fetch<IStaticPages>(
          `${BASE_URL}/common/staticpages/`,
        );
        this.staticPages = data.results || [];
      } catch (error) {
        console.error("Failed to fetch static pages:", error);
      }
    },
    async getStaticPageDetails(slug: string) {
      try {
        const data = await $fetch<TStaticPageDetails>(
          `${BASE_URL}/common/staticpages/${slug}`,
        );
        this.staticPageDetails = data;
      } catch (error) {
        console.error("Failed to fetch static page details:", error);
      }
    },
    async getStatistics() {
      try {
        const data = await $fetch<TStatistics>(
          `${BASE_URL}/common/statistics`,
        );
        this.statistics = data;
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    },
    async getAbout() {
      try {
        const data = await $fetch<TAbout>(
          `${BASE_URL}/settings/about`,
        );
        this.about = data;
      } catch (error) {
        console.error("Failed to fetch about:", error);
      }
    },
  },
});
