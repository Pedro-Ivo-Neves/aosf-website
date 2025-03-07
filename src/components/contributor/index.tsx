import Image from "next/image";
import { PropsTypeContributor } from "@/interfaces";
import { Wrapper } from "./style";

export function Contributor({
  linkYoutube,
  src,
  name,
  href,
  speciality,
}: PropsTypeContributor) {
  return (
    <Wrapper>
      <a href={linkYoutube && linkYoutube}>
        <Image src={src} width={26} height={24} alt="" />
      </a>
      <a href={href} className="linkedin">
        {name}
        <span>{speciality}</span>
      </a>
    </Wrapper>
  );
}
