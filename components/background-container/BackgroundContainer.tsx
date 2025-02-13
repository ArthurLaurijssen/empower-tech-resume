import React from "react";
import {
  BackgroundContainerProps,
  BackgroundIntent,
} from "@/components/background-container/types";

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  intent,
  as = "div",
  className,
  ...props
}) => {
  const Element = as;

  return (
    <Element
      className={`${getBackgroundStyles(intent)} ${className || ""}`}
      {...props}
    >
      {children}
    </Element>
  );
};

const getBackgroundStyles = (intent: BackgroundIntent): string => {
  const baseStyles = "mt-8 p-6 rounded-3xl";

  const styles = {
    gray: "bg-gradient-to-b from-primary-start to-primary-end",
    black: "bg-black",
    light_green: "bg-gradient-gray-green",
    light_gray: "bg-gradient-gray",
  };

  return `${baseStyles} ${styles[intent]}`;
};
