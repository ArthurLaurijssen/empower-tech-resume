import React from "react";
import {
  CircleEffectProps,
  CircleEffectIntent,
  CircleEffectSize,
} from "./types";

const baseStyles =
  "aspect-square rounded-[50%] flex items-center justify-center";

const getIntentStyles = (intent: CircleEffectIntent): string => {
  const styles = {
    primary: "bg-yellow-500 text-black",
  };

  return styles[intent];
};

const getSizeStyles = (size: CircleEffectSize): string => {
  const styles = {
    sm: "w-8",
    md: "w-10",
    lg: "w-12",
  };

  return styles[size];
};

export const CircleEffect: React.FC<CircleEffectProps> = ({
  children,
  intent,
  size = "md",
  className,
  ...props
}) => {
  const intentStyle = getIntentStyles(intent);
  const sizeStyle = getSizeStyles(size);

  return (
    <div
      className={`${baseStyles} ${intentStyle} ${sizeStyle} ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
