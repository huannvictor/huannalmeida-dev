export default function ProficiencyCard({
	icon,
	name,
	score,
	maxScore = 10,
}: ProficiencyItem) {
	return (
		<div className="group flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-4 dark:bg-secondary/40">
			{/* 1. Ícone Oficial + 2. Nome */}
			<div className="flex min-w-0 items-center gap-3 sm:w-[44%]">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary transition-transform duration-300 group-hover:scale-105">
					{icon}
				</div>
				<span
					className="truncate text-sm font-semibold text-foreground md:text-base"
					title={name}
				>
					{name}
				</span>
			</div>

			{/* 3. 10 Bloquinhos (Segmented Matrix) + 4. Badge da Nota (ex: 7/10) */}
			<div className="flex flex-1 items-center gap-3">
				<div
					className="grid flex-1 grid-cols-10 gap-1 sm:gap-1.5"
					role="meter"
					aria-label={name}
					aria-valuenow={score}
					aria-valuemin={0}
					aria-valuemax={maxScore}
				>
					{Array.from({ length: maxScore }).map((_, index) => {
						const isFilled = index < score;
						return (
							<div
								key={index}
								className={`h-2.5 rounded-[3px] transition-all duration-300 ${
									isFilled
										? "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)] group-hover:brightness-110"
										: "bg-muted-foreground/20 dark:bg-muted-foreground/15"
								}`}
							/>
						);
					})}
				</div>

				<span className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-bold tabular-nums text-primary">
					{score}/{maxScore}
				</span>
			</div>
		</div>
	);
}
