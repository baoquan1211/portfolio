import React from "react";
import Link from "next/link";
import Image from "next/image";
import LINKEDIN from "@/assets/svg/linkedin.svg";
import GITHUB from "@/assets/svg/github.svg";
import { Facebook } from "lucide-react";

export interface IMediaContact {
  name: string;
  link: string;
  component: React.JSX.Element;
}

export const mediaContact: IMediaContact[] = [
  {
    name: "github",
    link: "https://github.com/baoquan1211",
    component: <Image src={GITHUB} alt="github" width={32} height={32} />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/b%E1%BA%A3o-qu%C3%A2n-qu%C3%A1ch-91171227a/",
    component: <Image src={LINKEDIN} alt="linkedin" width={32} height={32} />,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/dung.rui.bao.quan.day/",
    component: (
      <Facebook fill="#ABB2BF" stroke="#ABB2BF" width={32} height={32} />
    ),
  },
];

const Media = () => {
  return (
    <div className="hidden xl:flex flex-col absolute top-3 left-2 items-center justify-center gap-y-2">
      <div className="h-[190px] w-[1px] bg-secondary" />

      {mediaContact.map((media) => (
        <Link key={media.name} href={media.link} className="select-none">
          {media.component}
        </Link>
      ))}
    </div>
  );
};

export default Media;
