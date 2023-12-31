import { StateContext } from "@/context/StateContext";
import { client } from "@/libs/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

const UpdatePost = ({ crud }) => {
  const { selectedContent, setSelectedContent } = useContext(StateContext);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const editingHandler = () => {
    setIsEditing(true);
  };

  const deleteItem = async () => {
    await client
      .delete({
        endpoint: "crud",
        contentId: crud.id,
      })
      .then((res) => {
        alert("削除しました");
        router.push("/");
      })
      .catch((error) => {
        alert("削除できませんでした");
        router.reload;
      });
  };

  const update = async (e) => {
    e.preventDefault();
    client
      .update({
        endpoint: "crud",
        contentId: crud.id,
        content: {
          title: selectedContent.title,
          content: selectedContent.content,
        },
      })
      .then((res) => {
        if (res.status === 400) {
          alert("投稿内容の更新ができませんでした。");
        } else {
          alert("更新されました。");
          router.push(`/`);
        }
      });

    setSelectedContent({
      id: 0,
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div>
        <button onClick={() => [editingHandler(), setSelectedContent(crud)]}>
          <p>編集する</p>
        </button>
      </div>
      <div>
        <h2>タイトル</h2>
        {!isEditing && <p>{crud.title}</p>}
        {isEditing && (
          <div>
            <input
              type="text"
              value={selectedContent.title}
              placeholder=""
              onChange={(e) =>
                setSelectedContent({
                  ...selectedContent,
                  title: e.target.value,
                })
              }
            />
          </div>
        )}
      </div>
      <div>
        <h2>コンテンツ</h2>
        {!isEditing && <p>{crud.content}</p>}
        {isEditing && (
          <div>
            <input
              value={selectedContent.content}
              type="text"
              placeholder=" "
              onChange={(e) =>
                setSelectedContent({
                  ...selectedContent,
                  content: e.target.value,
                })
              }
            />
          </div>
        )}
      </div>
      <form onSubmit={update}>
        <div>
          <button type="submit">更新する</button>
        </div>
      </form>
      <div>
        <p></p>
      </div>
      <div onClick={deleteItem}>
        <button>削除する</button>
      </div>
    </>
  );
};

export default UpdatePost;
