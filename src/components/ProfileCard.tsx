import {
  getTitleIcon,
  PlatformInfo,
  platformVariants,
} from "@/lib/codingProfileConfig";
import { ArrowUp, ExternalLink, TrophyIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProfileCardProps {
  platformInfo: PlatformInfo;
}

export function ProfileCard({ platformInfo }: ProfileCardProps) {
  const {
    platform,
    username,
    profileUrl,
    rating,
    maxRating,
    problemSolved,
    contests,
    stars,
    achievements = [],
    title,
    top,
  } = platformInfo;

  const lowerPlatform = platform.toLowerCase();
  const variant = platformVariants[lowerPlatform] || {
    bgGradient: "bg-gradient-to-r from-slate-600 to-slate-800",
    rankColor: "bg-slate-500",
    icon: <div className="w-6 h-6 bg-slate-500 rounded" />,
  };

  const platformVariant = platformVariants[lowerPlatform];

  const { rankIcon, rankColor, rankBgColor } = getTitleIcon(title);


  return (
    <motion.div
      initial={{x:0,y:0}}
      whileHover={{x:0,y:-5}}
      transition={{duration:"0.2"}}
      className="w-full relative bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden"
    >
      <div
        className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 ${variant.bgGradient}`}
      />

      <div className="relative flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="py-2 px-3 bg-gray-700 rounded-sm">
            {platformVariant.icon && (
              <Image
                src={platformVariant.icon}
                width={18}
                height={18}
                alt={`${platform}-icon`}
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              <Link href={profileUrl} className="flex gap-2 items-center">
                <span>{platform}</span>
                <ExternalLink size={18} />
              </Link>
            </h3>
            <p className="text-sm text-gray-400">@{username}</p>
          </div>
        </div>
      </div>

      <div className="relative mb-4 tracking-wide">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium  text-gray-300 flex items-center flex-nowrap gap-2">
            <TrophyIcon size={18} /> <span className="">Contest Rating</span>
          </span>
          <span className="text-sm text-orange-300 flex items-center flex-nowrap gap-1">
            <ArrowUp size={18} /> <span>Max: {maxRating}</span>
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="text-3xl font-bold text-white">{rating}</div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-4 gap-2">
        <div className={`${rankColor} text-3xl flex items-center gap-2`}>
          {!stars && <span>{title}</span>}
          {rankIcon && (
            <span>
              <Image
                src={rankIcon}
                width={32}
                height={32}
                alt={`${title}-icon`}
              />
            </span>
          )}
          {stars && lowerPlatform === "codechef" && (
            <div className="flex gap-1">
              {Array.from({ length: stars }, (_, i) => {
                return (
                  <span
                    key={`stars-${i}`}
                    className={`text-gray-300 block p-0.5 ${rankBgColor}`}
                  >
                    ★
                  </span>
                );
              })}
            </div>
          )}
        </div>

        <div className="h-3 text-xs">
          {top && (
            <span>
              Global:{" "}
              <span className="text-blue-500 font-semibold">Top&nbsp;5%</span>
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-700/50 rounded-lg">
          <div className="text-lg font-bold text-green-400">
            {problemSolved}+
          </div>
          <div className="text-xs text-gray-400">Problems Solved</div>
        </div>
        <div className="text-center p-3 bg-gray-700/50 rounded-lg">
          <div className="text-lg font-bold text-purple-400">{contests}</div>
          <div className="text-xs text-gray-400">Contests</div>
        </div>
      </div>

      {achievements.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">
            Recent Achievements
          </h4>
          <div className="space-y-1">
            {achievements.slice(0, 2).map((achievement, index) => (
              <div
                key={index}
                className="text-xs text-gray-400 flex justify-center gap-2"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
                {achievement}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
