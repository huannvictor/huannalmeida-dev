import Link from "next/link";

import { Button } from "@/components/ui/button";

interface WorkTextContentProps {
  title: string
  description: string
  btnText: string
}

export default function WorkTextContent ({
  title, description, btnText
}: WorkTextContentProps){
  return (
    <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center lg:mx-0 lg:h-[400px] lg:items-start lg:text-left">
      <h2 className="section-title mb-4">
        {title}
      </h2>
      <p className="subtitle mb-8">
        {description}
      </p>

      <Link href="/projects">
        <Button>{btnText}</Button>
      </Link>
    </div>
  );
};