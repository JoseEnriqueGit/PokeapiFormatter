import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
}

export type { IconProps };