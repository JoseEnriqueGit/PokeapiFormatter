import { SVGProps } from "react";

// const Spinner = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     fill={props.fill}
//     width={props.width}
//     height={props.height}
//     id="Layer_1"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     x="0px"
//     y="0px"
//     viewBox="0 0 64 64"
//     // style={{
//     //   enableBackground: "new 0 0 64 64",
//     // }}
//     xmlSpace="preserve"
//     {...props}
//   >
//     <path d="M58.2,26.8c-0.4-1.2-1.6-1.8-2.8-1.5c-1.2,0.4-1.8,1.6-1.5,2.8c0.7,2.2,1.1,4.5,1.1,6.8c0,3.5-0.8,6.8-2.3,9.9 C48.8,52.8,40.9,57.8,32,57.8C19.3,57.8,9,47.5,9,35s10.3-22.8,23-22.8c2.3,0,4.6,0.3,6.7,1l-3.4,1.6c-1.1,0.5-1.6,1.9-1.1,3 c0.4,0.8,1.2,1.3,2,1.3c0.3,0,0.6-0.1,0.9-0.2l8.8-4.1c0.5-0.3,1-0.7,1.2-1.3s0.2-1.2-0.1-1.7L43,3c-0.5-1.1-1.9-1.6-3-1.1 c-1.1,0.5-1.6,1.9-1.1,3l1.9,4.2c-2.8-1-5.8-1.5-8.9-1.5C16.9,7.7,4.5,19.9,4.5,35S16.9,62.3,32,62.3c10.6,0,20.1-5.9,24.7-15.4 c1.8-3.7,2.8-7.7,2.8-11.9C59.5,32.2,59,29.4,58.2,26.8z" />
//   </svg>
// );
// export default Spinner;


const Spinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-rotate-360"
    width={props.width}
    height={props.height}
    stroke={props.stroke}
    viewBox="0 0 24 24"
    strokeWidth={props.strokeWidth || 3}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 16h4v4" />
    <path d="M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515" />
  </svg>
);
export default Spinner;




