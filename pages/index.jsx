import { client } from "@/libs/client";
import Link from "next/link";

export const getStaticProps = async () => {
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
      <h3 className="text-2xl">topページ</h3>
      <ul className="flex flex-col gap-y-2 mt-5">
        {crud.map((crud) => (
          <li key={crud.id}>
            <Link
              href={`/post/${crud.id}`}
              className="text-l font-bold underline"
            >
              {crud.title}
            </Link>
            <div>{crud.content}</div>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <Link href={`/post`} className="underline">
          投稿へ
        </Link>
      </div>
    </div>
  );
};

export default Home;
