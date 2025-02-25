import { useState } from "react";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "./ToolboxItems";
import { motion } from "framer-motion";

export const AnimatedCard = ({ toolboxItems }: {
    toolboxItems: {
        title: string;
        iconType: React.ElementType;
    }[];
}

) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded((prev) => !prev);

    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.6, type: 'spring' } }}
            className="overflow-hidden w-full"
        >
            <button onClick={toggleExpand} className="w-full">
                <div className="overflow-x-auto">
                    <Card
                        className={`p-0 w-full transition-all duration-700 ease-in-out md:col-span-3 lg:col-span-2 ${isExpanded ? 'sm:h-[570px] md:h-[400px]' : 'sm:h-[220px] lg:h-[200px]'
                            }`}
                    >
                        <CardHeader
                            title="Skills"
                            description="Explore the technologies and tools I use to craft exceptional digital experiences."
                        />
                        <ToolboxItems
                            items={toolboxItems}
                            isExpanded={isExpanded}
                            itemsWrapperClassName={`transition-all duration-700 ease-in-out ${isExpanded
                                ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6'
                                : 'sm:animate-move-left-fast md:animate-move-left-fast'
                                }`}
                        />
                    </Card>
                </div>
            </button>
        </motion.div>
    );
};

export default AnimatedCard;
