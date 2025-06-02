export interface PlatformInfo {
  platform: string;
  username: string;
  profileUrl: string;
  rating: number;
  maxRating: number;
  rank: number;
  title: string;
  globalRank?: number;
  problemSolved: number;
  contests: number;
  stars?: number;
  achievements?: string[];
  top?: number;
}

export const platformVariants: Record<
  string,
  { bgGradient: string; textColor: string; icon?: string }
> = {
  leetcode: {
    bgGradient: "bg-gradient-to-br from-orange-500 to-red-500",
    textColor: "text-orange-300",
    icon: "/codingPlatformicons/leetcode-icon.svg",
  },
  codeforces: {
    bgGradient: "bg-gradient-to-br from-blue-500 to-purple-500",
    textColor: "text-blue-500",
    icon: "/codingPlatformicons/codeforces-icon.png",
  },
  codechef: {
    bgGradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    textColor: "bg-gray-500",
    icon:"/codingPlatformicons/codechef-icon.png"
  },
  atcoder: {
    bgGradient: "bg-gradient-to-r from-indigo-400 to-blue-600",
    textColor: "bg-indigo-500",
  },
  hackerrank: {
    bgGradient: "bg-gradient-to-r from-green-400 to-emerald-600",
    textColor: "bg-green-500",
  },
  hackerearth: {
    bgGradient: "bg-gradient-to-r from-cyan-400 to-blue-500",
    textColor: "bg-cyan-500",
  },
};

export const getTitleIcon = (title: string ) => {
  
  const lowerCaseTitle = title.toLowerCase();
  switch (lowerCaseTitle) {
    case "knight":
      return {
        rankIcon: "/codingPlatformicons/knight-icon.png",
        rankColor: "text-green-300",
        rankBgColor: "bg-green-300",
      };
    case "pupil":
      return {
        rankIcon: null,
        rankColor: "text-green-500",
        rankBgColor: "bg-green-500",
      };
    case "3*":
      return { rankColor: "text-blue-800", rankBgColor: "bg-blue-800" };
    default:
      return {
        rankColor: "text-gray-700",
        rankBgColor: "bg-gray-700",
        rankIcon: null,
      };
  }
};
