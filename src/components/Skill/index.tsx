import { PropsWithChildren } from "react";

export interface SkillProps extends PropsWithChildren {
  skillName: string;
  progressValue: number
}

export function Skill({children, skillName, progressValue: value}: SkillProps) {
  return (
    <span className="w-full bg-white h-20 p-2 rounded-md flex items-center gap-2 text-2xl">
      {children}
      <span className="flex flex-col">
        <span>{skillName}</span>
        <progress
          value={value}
          max="100"
          className="h-2"
        />
      </span>
    </span>
  )
}