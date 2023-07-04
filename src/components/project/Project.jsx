import { Typography } from '../atom/Typography';

export const Project = ({ name, description, stargazerCount, url, homepageUrl }) => {
  return (
    <div className="flex flex-col gap-4 p-4 projets hover:scale-105 w-60 hover:rounded-2xl bg-paper hover:shadow-xl focus:ring-opacity-50 md:w-80 md:p-8">
      <p className="w-full text-right">⭐ {stargazerCount}</p>
      <a href={url} target="_blank" rel="noreferrer">
        <Typography className="font-bold" variant="h3">
          {name}
        </Typography>
      </a>
      <Typography variant="body1">{description}</Typography>
      {homepageUrl ? (
        <a className="underline text-primary" href={homepageUrl} target="_blank" rel="noreferrer">
          {homepageUrl.replace('https://', '')}
        </a>
      ) : null}
    </div>
  );
};
