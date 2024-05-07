import Link from "next/link";

import {Button} from "@/components/ui/button";

interface CtaButtonProps {
  btnTxt: string
}

export default function CtaButton ({btnTxt}: CtaButtonProps){
  return (
    <Link href="/contact">
      <Button>{btnTxt}</Button>
    </Link>
  );
};