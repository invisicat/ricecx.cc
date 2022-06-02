import useSpotifyStatus from '@/lib/hooks/useSpotify';
import { parseMillisecondsIntoReadableTime } from '@/utils/HumanReadable';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { Spotify, Timestamps } from 'use-lanyard';

const Footer = () => {
  const [spotifyStatus, setSpotifyStatus] = useState<Spotify | null>(null);
  const spotify = useSpotifyStatus('201825529333153792');

  useEffect(() => setSpotifyStatus(spotify), [spotify]);

  return (
    <footer className="flex flex-col text-center p-4 bg-crack-ee dark:bg-xiketic-darker">
      {spotifyStatus === null ? (
        <h1>Currently not playing anything</h1>
      ) : (
        <SpotifyText spotify={spotifyStatus} />
      )}
      <h1> &copy; {new Date().getFullYear()} Made with 💘 by RiceCX</h1>
      <a className="self-end" href="https://github.com/RiceCX/ricecx.cc">
        <button className="flex flex-row hover:opacity-80 transition-opacity">
          <p className="align-middle self-center">View the site&apos;s code</p>{' '}
          <BsGithub className="self-center mx-2" />
        </button>
      </a>
    </footer>
  );
};

type SpotifyTextProps = {
  spotify: Spotify;
};

const convertToHR = (ts: Timestamps) => {
  let now = Date.now();
  return {
    elapsed: now - ts.start,
    timeLeft: now - ts.end,
    totalLength: ts.end - ts.start
  };
};

const SpotifyText: React.FC<SpotifyTextProps> = props => {
  const { song, artist, timestamps } = props.spotify;
  const [elapsedTime, setElapsedTime] = useState(
    convertToHR(timestamps).elapsed
  );

  useEffect(() => {
    const interval = setInterval(() => setElapsedTime(e => e + 1000), 1000);
    return () => clearInterval(interval);
  }, [timestamps]);

  const { totalLength } = convertToHR(timestamps);
  const totalTime = parseMillisecondsIntoReadableTime(totalLength);
  return (
    <>
      <h1>
        Currently listening to {song} by {artist}.
      </h1>
      <p>
        ({parseMillisecondsIntoReadableTime(elapsedTime)}/{totalTime})
      </p>
    </>
  );
};

export default Footer;
