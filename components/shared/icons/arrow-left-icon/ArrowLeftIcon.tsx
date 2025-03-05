import React from "react";
import { IconBase } from "@/components/shared/icons/base/IconBase";
import { IconProps } from "@/components/shared/icons/base/types";

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path
      fillRule="evenodd"
      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
    />
  </IconBase>
);
