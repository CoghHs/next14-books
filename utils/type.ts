export interface BookList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export interface Book {
  title: string;
  description: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}
