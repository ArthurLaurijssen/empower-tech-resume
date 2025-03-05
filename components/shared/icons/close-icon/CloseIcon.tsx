import React from "react";
import { IconBase } from "@/components/shared/icons/base/IconBase";
import { IconProps } from "@/components/shared/icons/base/types";

export const CloseIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
  </IconBase>
);
