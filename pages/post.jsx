import { PostFrom } from "@/components/PostFrom";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <div>
        <h1>投稿ページ!</h1>
        <div>
          <Link href={`/`}>TOPへ</Link>
        </div>
        <div>
          <PostFrom />
        </div>
      </div>
    </>
  );
}
