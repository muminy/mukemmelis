import Link from "next/link";

export default function ({location}) {
  return (
    <Link href={location ? location : '/'}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width={45}
        height={45}
        id="blobSvg"
        className="logo_svg"
      >
        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3423ca"></stop>
            <stop offset="100%" stopColor="#3423ca"></stop>
          </linearGradient>
        </defs>
        <path
          id="blob"
          d="M415,335Q348,420,241.5,434.5Q135,449,102.5,349.5Q70,250,108.5,161Q147,72,244.5,81Q342,90,412,170Q482,250,415,335Z"
          fill="none"
          strokeWidth="40px"
          stroke="url(#gradient)"
        ></path>
      </svg>
    </Link>
  );
}
