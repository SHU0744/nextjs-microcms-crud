import { client } from "@/libs/client";
import Link from "next/link";

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "crud" });
  return {
    props: {
      crud: data.contents,
    },
  };
};

const Home = ({ crud }) => {
  return (
    <div>
      <h3>topページ</h3>
      <ul>
        {crud.map((crud) => (
          <li key={crud.id}>
            <Link href={`/post/${crud.id}`}>{crud.title}</Link>
            <div>{crud.content}</div>
          </li>
        ))}
      </ul>
      <Link href={`/post`}>投稿へ</Link>
    </div>
  );
};

export default Home;
