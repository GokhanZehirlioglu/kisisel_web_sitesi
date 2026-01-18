import { ReactNode } from "react";
import { Check } from "lucide-react";

interface StatCardProps {
    value: string;
    label: string;
    tooltipTitle?: string;
    items?: string[];
    children?: ReactNode;
}

const StatCard = ({ value, label, tooltipTitle, items, children }: StatCardProps) => {
    const hasTooltip = tooltipTitle || items || children;

    return (
        <div className={`flex flex-col items-center gap-1 ${hasTooltip ? "relative group cursor-pointer" : ""}`}>
            <span className="text-3xl font-semibold gradient-text">{value}</span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</span>

            {/* Tooltip */}
            {hasTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 min-w-[280px] bg-card border border-border rounded-xl p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {tooltipTitle && (
                        <div className="text-xs font-mono uppercase tracking-wider text-primary mb-3 pb-2 border-b border-border">
                            {tooltipTitle}
                        </div>
                    )}
                    <ul className="space-y-2">
                        {items ? (
                            items.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-primary" />
                                    {item}
                                </li>
                            ))
                        ) : (
                            children
                        )}
                    </ul>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card" />
                </div>
            )}
        </div>
    );
};

export default StatCard;
