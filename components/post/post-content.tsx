import React from "react";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";
import { getReadingTime, getRealtiveDate } from "@/lib/helpers";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

const PostContent = ({ post, isPostPage = false }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* tags */}
      <div
        className={`flex flex-wrap gap-2 items-center text-neutral-400 ${
          isPostPage ? "text-sm" : "@md:text-sm text-xs"
        }`}
      >
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div className="">{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div className="">{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
        <div className="">{getRealtiveDate(post.date_created)}</div>
      </div>
      {/* title */}
      <h2
        className={`${
          isPostPage
            ? "text-2xl md:text-3xl lg:text-4xl"
            : "font-medium @lg:text-3xl text-xl @md:text-2xl"
        }`}
      >
        {post.title}
      </h2>
      {/* description */}
      <p className="text-base @lg:text-lg text-neutral-600 loading-snug">
        {post.description}
      </p>
      {/* read more */}
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          Read more <ArrowRight size="14" />
        </div>
      )}
    </div>
  );
};

export default PostContent;
