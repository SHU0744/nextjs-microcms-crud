import { StateContext } from "@/context/StateContext";
import { client } from "@/libs/client";
import { useRouter } from "next/router";
import { useContext } from "react";

export const PostFrom = () => {
  const { selectedContent, setSelectedContent } = useContext(StateContext);
  const router = useRouter();
  const create = async (e) => {
    e.preventDefault();
    client
      .create({
        endpoint: "crud",
        content: {
          title: selectedContent.title,
          content: selectedContent.content,
        },
      })
      .then((res) => {
        if (res.status === 401) {
          alert("登録が出来ませんでした。");
        } else {
          alert("登録されました");
          router.push(`/`);
        }
      });
  };

  return (
    <>
      <div>
        <h2>タイトル</h2>
        <input
          type="text"
          onChange={(e) =>
            setSelectedContent({ ...selectedContent, title: e.target.value })
          }
        />
      </div>
      <div>
        <h2>コンテンツ</h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) =>
            setSelectedContent({ ...selectedContent, content: e.target.value })
          }
        ></textarea>
      </div>
      <div>
        <form onSubmit={create}>
          <button type="submit">
            <p>登録する</p>
          </button>
        </form>
      </div>
    </>
  );
};
