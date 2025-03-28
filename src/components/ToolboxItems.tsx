import React, { Fragment } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
  isExpanded = false,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
  isExpanded?: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "flex overflow-auto whitespace-nowrap sm:overflow-scroll scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent md:overflow-hidden",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {isExpanded
          ? items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg border-2 border-blue-300 border-opacity-0 hover:border-opacity-100 transition duration-500"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))
          : [...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg border-2 border-blue-300 border-opacity-0 hover:border-opacity-100 transition duration-500"
                  >
                    <TechIcon component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                ))}
              </Fragment>
            ))}
      </div>
    </div>
  );
};
