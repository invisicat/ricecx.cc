import { useState, useEffect } from 'react';
import { Spotify, useLanyard } from 'use-lanyard';

function useSpotifyStatus(snowflake: string) {
  const [currentSpotifyStatus, setSpotifyStatus] = useState<Spotify | null>(
    null
  );

  const { data: activity } = useLanyard(snowflake);

  useEffect(() => {
    activity?.listening_to_spotify
      ? setSpotifyStatus(activity.spotify)
      : setSpotifyStatus(null);
  }, [activity]);

  return currentSpotifyStatus;
}

export default useSpotifyStatus;
