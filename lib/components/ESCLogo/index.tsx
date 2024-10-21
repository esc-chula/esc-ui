import { forwardRef } from 'react';
import { cn } from "@/utils";
import carmineTh from "./logoStyles/sigma_default_th.svg";
import carmineEn from "./logoStyles/sigma_default_en.svg";
import carbonTh from "./logoStyles/sigma_black_th.svg";
import carbonEn from "./logoStyles/sigma_black_en.svg";
import cloudTh from "./logoStyles/sigma_white_th.svg";
import cloudEn from "./logoStyles/sigma_white_en.svg";

export interface ESCLogoProps {
  color?: "default" | "white" | "black";
  language?: "en" | "th";
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string
}

const logoStyles = {
  default: {
    en: carmineEn,
    th: carmineTh,
  },
  white: {
    en: cloudEn,
    th: cloudTh,
  },
  black: {
    en: carbonEn,
    th: carbonTh,
  },
};

const logoSize = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-16',
  xl: 'h-20',
  full: 'h-full'
};

export const ESCLogo = forwardRef<HTMLDivElement, ESCLogoProps>(
  ({ color = "default", language = "th", size = 'md' , className }, ref) => {
    const imageSrc = logoStyles[color][language] || carmineTh;
    return (
      <div ref={ref}>
        <img
          src={imageSrc}
          alt={`sigma_${color}_${language}`}
          className={cn(logoSize[size], "w-auto", className)}
        />
      </div>
    );
  }
);

ESCLogo.displayName = "ESCLogo";