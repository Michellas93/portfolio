import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getPathReference } from "../firebase/config";

export const useGetImageUrl = (imageRef?: string) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);

  useEffect(() => {
    const getImageUrl = async (imageSrc: string) => {
      setIsImageLoading(true);
      const url = await getDownloadURL(getPathReference(imageSrc));
      setImageUrl(url);
      setIsImageLoading(false);
    };
    if (imageRef) {
      getImageUrl(imageRef);
    }
  }, [imageRef]);

  return { imageUrl, isImageLoading };
};
