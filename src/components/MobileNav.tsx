import { AlignJustify } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import Socials from "./Socials";

export const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<AlignJustify className="cursor-pointer" />
			</SheetTrigger>

			<SheetContent>
				<div className="flex h-full flex-col items-center justify-between py-8">
					<div className="flex flex-col items-center gap-y-32">
						<Logo />
						<Nav
							containerStyles="flex flex-col items-center gap-y-6"
							linkStyles="text-2xl"
						/>
					</div>
					<Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
				</div>
			</SheetContent>
		</Sheet>
	);
};
