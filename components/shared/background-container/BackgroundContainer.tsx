import React from "react";
import {
  BackgroundContainerProps,
  BackgroundIntent,
  SemanticElement,
} from "@/components/shared/background-container/types";

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  intent,
  as = "div",
  className = "",
  ...props
}) => {
  const Element: SemanticElement = as;

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
  const baseStyles = "mt-8 rounded-3xl";

  const styles = {
    primary_gray: "bg-primary-gradient",
    secondary_black: "bg-black",
  };

  return `${baseStyles} ${styles[intent]}`;
};
