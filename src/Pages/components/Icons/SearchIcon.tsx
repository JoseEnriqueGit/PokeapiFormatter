import { IconProps } from "./Types/IconProps";

const SearchIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 3,
  ...rest
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-search"
    width={width}
    height={height}
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill="none"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={10} cy={10} r={7} />
    <path d="m21 21-6-6" />
  </svg>
);

export default SearchIcon;
