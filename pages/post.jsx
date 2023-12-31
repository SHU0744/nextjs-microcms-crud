import { PostFrom } from "@/components/PostFrom";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <div>
        <h1 className="text-2xl">投稿ページ</h1>
        <div className="mt-1">
          <PostFrom />
        </div>
        <div className="mt-2">
          <Link href={`/`} className="underline">
            TOPへ戻る
          </Link>
        </div>
      </div>
    </>
  );
}
