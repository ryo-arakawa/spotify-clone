import { AiFillHeart } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const isFavorite = true;

export default function LikeButton() {
  const Icon = isFavorite ? AiFillHeart : LikeButton;

  return (
    <div
      className={twMerge(`
      cursor-pointer
      hover:opacity-75
      transition`)}
    >
      <Icon color={isFavorite && "#22c55e"} size={25} />
    </div>
  );
}
