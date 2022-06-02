import { useState, useEffect } from 'react';
import { Activity, useLanyard } from 'use-lanyard';

export enum ActivityTypes {
  PLAYING,
  STREAMING,
  LISTENING,
  WATCHING,
  CUSTOM,
  COMPETING
}

function useDiscordActivity(snowflake: string) {
  const [discordActivity, setDiscordActivity] = useState<Activity | null>(null);

  const { data: activity } = useLanyard(snowflake);

  useEffect(() => {
    if (activity?.activities) {
      activity.activities.length >= 1
        ? setDiscordActivity(activity?.activities[0])
        : setDiscordActivity(null);
    } else {
      setDiscordActivity(null);
    }
  }, [activity]);

  return discordActivity;
}

export function getFriendlyActivityType(type: Number): String {
  const activityName = ActivityTypes[parseActivityType(type)];

  return activityName.toLowerCase().charAt(0).toUpperCase();
}

export function parseActivityType(type: Number): ActivityTypes {
  switch (type) {
    case 0:
      return ActivityTypes.PLAYING;
    case 1:
      return ActivityTypes.STREAMING;
    case 2:
      return ActivityTypes.LISTENING;
    case 3:
      return ActivityTypes.WATCHING;
    case 4:
      return ActivityTypes.CUSTOM;
    case 5:
      return ActivityTypes.COMPETING;
    default:
      return ActivityTypes.PLAYING;
  }
}

// so funny part is i spent 2 hours trying to figure out why
// tailwind wouldn't pick up these classes, but i realized i forgot,
// to include /libs in the tailwind searching shit
export function getDiscordStatusColor(status?: string) {
  switch (status) {
    case 'online':
      return 'border-green-500';
    case 'idle':
      return 'border-amber-500';
    case 'dnd':
      return 'border-red-500';
    case 'offline':
      return 'border-gray-400';
    default:
      return 'border-gray-400';
  }
}
export function fixStatusText(status: String) {
  switch (status) {
    case 'online':
      return 'Online';
    case 'idle':
      return 'Idling';
    case 'dnd':
      return 'Do not Disturb';
    case 'offline':
      return 'Offline';
    default:
      return 'Offline';
  }
}

export default useDiscordActivity;
