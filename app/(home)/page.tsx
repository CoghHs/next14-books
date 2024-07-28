import Link from "next/link";
import { BookList } from "../../utils/type";
import { getBookLists } from "../../utils/fetch";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const books: BookList[] = await getBookLists();
  return (
    <div>
      {books.map((i) => (
        <li key={i.list_name}>
          <Link href={`/list/${i.list_name_encoded}`}>{i.list_name}</Link>
        </li>
      ))}
    </div>
  );
}