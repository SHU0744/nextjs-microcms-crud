import { client } from "@/libs/client";

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
      <h1>{crud.title}</h1>
      <p>{crud.publishedAt}</p>
      <div>{crud.content}</div>
    </main>
  );
}
