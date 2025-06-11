import styles from "../../styles/about.module.css";

export default function AboutUs() {
  return (
    <div className={styles.info}>
      <h1>About Us</h1>
      <h2>
        뉴욕타임즈 베스트셀러 목록을 한눈에 확인하고,
        <br />
        Amazon 구매 페이지로 이동할 수 있는 간단한 책 탐색 웹앱입니다.
        <br />
        Next.js 14 기반으로, 카테고리별 도서를 한눈에 볼 수 있도록 구성했습니다.
      </h2>
    </div>
  );
}
