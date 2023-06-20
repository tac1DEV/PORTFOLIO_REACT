import clsx from "clsx";

/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const SocialNetworks = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {socialNetworks.map(({ url, name, icon }) => (
        <a
          key={url}
          target="_blank"
          rel="noreferrer"
          href={url}
          className="flex items-center gap-1 text-base text-primary text"
        >
          {icon} <span className="underline">{name}</span>
        </a>
      ))}
    </div>
  );
};
