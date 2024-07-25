export interface TDefaultFetchData {
  // count: number;
  // next: string | null;
  // previous: string | null;
  links?: {
    next?: string;
    previous?: string;
  }
  page_size: number;
  current_page: number;
  total_pages: number;
  page_items: number;
  total: number;
}
