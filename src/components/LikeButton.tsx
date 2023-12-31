import { useState, useEffect, MouseEvent } from "react";
import cs from "classnames";
import "tailwindcss/tailwind.css";
import { getDocumentReference } from "../firebase/config";
import { useAuth } from "../firebase/AuthContext";
import { arrayRemove, arrayUnion, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Heart } from "./Heart";

const LOGIN_ERROR_MSG = "Pokud chcete provést akci, musíte být přihlášeni.";
const LIKE_ACTION_ERROR_MSG = "Nelze dát LIKE, jsi přihlášen?";

type Props = {
  likes: string[];
  collectionName: string;
  docId: string;
  docLikesArrayKey?: string;
  classNames?: string;
  inactiveHeartColor?: string;
};

const getLikesText = (likesCount: number) => {
  if (likesCount === 1) {
    return "1 like";
  }

  return `${likesCount} likes`;
};

const getUpdateOperation = (liked: boolean, userUid: string) =>
  liked ? arrayUnion(userUid) : arrayRemove(userUid);

export const LikeButton = ({
  likes,
  collectionName,
  docId,
  docLikesArrayKey = "likes",
  classNames,
  inactiveHeartColor,
}: Props) => {
  const { user } = useAuth();
  const userUid = user?.uid;
  const [liked, setLiked] = useState(false);
  const docRef = getDocumentReference(collectionName, docId);

  useEffect(() => {
    setLiked(likes?.includes(userUid ?? ""));
  }, [likes, userUid]);

  const updateLikes = async (liked: boolean, uid: string) => {
    try {
      const updateOperation = getUpdateOperation(liked, uid);
      await updateDoc(docRef, { [docLikesArrayKey]: updateOperation });
    } catch (error) {
      console.error(error);
      toast.error(LIKE_ACTION_ERROR_MSG);
      setLiked(!liked);
    }
  };

  const handleLike = (event: MouseEvent<any>) => {
    event.stopPropagation();
    if (!userUid) {
      return toast.error(LOGIN_ERROR_MSG);
    }
    const wantedLike = !liked;

    setLiked(wantedLike);
    updateLikes(wantedLike, userUid);
  };

  return (
    <div
      className={cs(
        classNames,
        "flex items-center sm:justify-end flex-wrap sm:flex-row justify-center gap-1"
      )}
    >
      <div className="h-6 w-6">
        <Heart
          isActive={liked}
          onClick={handleLike}
          inactiveColor={inactiveHeartColor}
        />
      </div>
      <span>{getLikesText(likes?.length ?? 0)}</span>
    </div>
  );
};
