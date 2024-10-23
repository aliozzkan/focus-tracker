"use client";

import { useModal } from "@/hooks/use-modal";
import { Fragment } from "react";

export function ModalController() {
  const { modal } = useModal();
  return (
    <Fragment>{modal === "tag-create" && <div>Tag Create Modal</div>}</Fragment>
  );
}
