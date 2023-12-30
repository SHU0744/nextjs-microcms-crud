import UpdatePost from "@/components/UpdatePost";
import { client } from "@/libs/client";
import Link from "next/link";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "crud" });
  const paths = data.contents.map((content) => `/post/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "crud", contentId: id });
  return {
    props: {
      crud: data,
    },
  };
};

export default function CrudId({ crud }) {
  return (
    <main>
      <h2>【投稿の詳細ページです】</h2>
      <div>
        <UpdatePost crud={crud} />
      </div>
      <div>
        <Link href="http://localhost:3000/">TOPに戻る</Link>
      </div>
    </main>
  );
}
