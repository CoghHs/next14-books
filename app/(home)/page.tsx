import Link from "next/link";
import { BookList } from "../../utils/type";
import { getBookLists } from "../../utils/fetch";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const books: BookList[] | undefined = await getBookLists();
  if (!books || books.length === 0) {
    return <div>책 정보를 불러올 수 없습니다.</div>;
  }
  return (
    <div className={styles.list}>
      {books.map((i) => (
        <li key={i.list_name}>
          <Link href={`/list/${i.list_name_encoded}`}>{i.list_name}</Link>
        </li>
      ))}
    </div>
  );
}
