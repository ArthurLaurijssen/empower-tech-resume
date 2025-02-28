import React from "react";
import { IconBase } from "@/components/shared/icons/base/IconBase";
import { IconProps } from "@/components/shared/icons/base/types";

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
  </IconBase>
);
