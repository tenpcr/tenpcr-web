"use client";

import { useDispatch, useSelector } from "react-redux";
import MediaModal from "@/components/modal/MediaModal";
import { closeMediaModal } from "@/redux/slices/mediaModalSlice"

export default function MediaModalWrapper() {
  const dispatch = useDispatch();
  const mediaModalState = useSelector((state: any) => state.mediaModal);

  return (
    <MediaModal
      show={mediaModalState?.show}
      title={mediaModalState?.title ?? []}
      detail={mediaModalState?.detail ?? ""}
      button={mediaModalState?.button ?? []}
      tools={mediaModalState?.tools ?? []}
      mediaItems={mediaModalState?.imagesSrcList ?? []}
      detailItems={mediaModalState?.imagesDetailList ?? []}
      type={mediaModalState?.type ?? ""}
      youtube={mediaModalState?.youtube ?? ""}
      onClose={() => dispatch(closeMediaModal())}
    />
  );
}
