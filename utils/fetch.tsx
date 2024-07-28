import { BookList, Book } from "./type";

const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBookLists(): Promise<BookList[]> {
  const response = await fetch(`${BASE_URL}/lists`);
  const json = await response.json();
  return json.results;
}

export async function getBooksInList(id: string): Promise<Book[]> {
  const response = await fetch(`${BASE_URL}/list?name=${id}`);
  const json = await response.json();
  return json.results.books;
}
