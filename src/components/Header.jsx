import { PORTFOLIO, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const Header = () => {
  return (
    <header className="flex py-8">
      <span className="text-4xl font-extrabold drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]">
        {PORTFOLIO}
      </span>
      <SocialNetworks className="pr-2 ml-auto" socialNetworks={SOCIAL_NETWORKS} />
      <ToggleThemeButton />
    </header>
  );
};
