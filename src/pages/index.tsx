import Layout from '@/components/layout/Layout';
import { FiGithub } from 'react-icons/fi';
import { SiKofi, SiDiscord, SiGmail } from 'react-icons/si';
import type { NextPage } from 'next';
import { IconType } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';
import clsxm from '../lib/clsxm';
import { useEffect, useState } from 'react';
import PageArrow from '@/components/page/PageArrow';
import { ToolSubset, UserTools } from '@/lib/tools';
import { FeaturedProject, UserFeaturedProjects } from '@/lib/projects';
import { HiOutlineExternalLink } from 'react-icons/hi';
import TextLink from '@/components/links/TextLink';
import { useTransition, animated, config, useSpring } from 'react-spring';
import { GMAIL, GITHUB_URL, KOFI_URL, DISCORD_BIO } from '@/lib/links';
import { getDiscordStatusColor } from '@/lib/hooks/useDiscordActivity';
import { useLanyard } from 'use-lanyard';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen max-h-max">
        <div className="flex xs:self-center xs:flex-col-reverse lg:flex-row justify-between">
          <div className="self-center flex flex-col">
            <div id="header" className="mb-8">
              <h1 className="xs:text-center text-6xl font-extrabold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800 animate-text">
                Hi, I&apos;m RiceCX
              </h1>
              <p className="xs:px-3 xs:text-center text-xl max-w-4xl dark:text-gray-400">
                16 y/o Full-stack software developer with over 6 years of
                experience. Interested in building scalable backends and
                marvelous APIs.
              </p>
              <br />
              <p className="xs:text-center text-xl max-w-4xl dark:text-gray-400">
                I am currently available for hire. Feel free to{' '}
                <TextLink href="/contact">contact me</TextLink>.
              </p>
            </div>
            <SocialMediaButtons />
            {/*<MiscButtons /> */}
          </div>
          <HeaderAvatar />
        </div>
        <div className="self-center xs:invisible">
          <PageArrow offset={-1000} clickToId="information" />
        </div>
      </div>
      <section id="information" className="flex flex-col">
        <FrostlessNetworkInfo />
        <FeaturedProjects />
        <Tools />
      </section>
    </Layout>
  );
};

const HeaderAvatar = () => {
  const [discordState, setDiscordState] = useState<string | undefined>(
    undefined
  );
  const { data: lanyardData } = useLanyard('201825529333153792');

  useEffect(() => setDiscordState(lanyardData?.discord_status), [lanyardData]);

  return (
    <div
      id="avatar"
      className={clsxm(
        'flex flex-col rounded-full border-4',
        getDiscordStatusColor(discordState)
      )}
    >
      <Image
        src="/images/github_avatar.jpg"
        width={450}
        height={450}
        alt="avatar"
        className="rounded-full p-1"
      />
    </div>
  );
};

const FrostlessNetworkInfo = () => {
  const logoBounceSpring = useSpring({
    loop: { reverse: true },
    delay: 100,
    from: { y: 0 },
    to: { y: 35 },
    config: {
      bounce: 0.0,
      duration: 1000
    }
  });
  return (
    <div>
      <h1 className="xs:text-center text-5xl font-medium leading-loose">
        My Communities
      </h1>
      <div className="flex xs:flex-col-reverse lg:flex-row justify-between">
        <p
          id="community"
          className="xs:text-lg xs:p-2 lg:text-xl leading-relaxed align-middle xs:text-center self-center max-w-3xl"
        >
          As of 2022, I own{' '}
          <TextLink href="https://frostless.network">
            Frostless Network
          </TextLink>
          , a Minecraft server which specializes in survival and minigames. It
          started back in January of 2022 with <code>frostyeah_</code> and
          <code> brasher21</code> alongside members of the McGamerZone community
          such as
          <code> maxomees</code> and <code>Chroxy</code>. I started it as a side
          project to keep my programming skills in touch while experimenting
          with new technologies. At the moment, the{' '}
          <TextLink href="https://discord.frostless.network">
            Frostless Network Discord
          </TextLink>{' '}
          has <code>272</code> members. If you would like to join, the IP is{' '}
          <code>play.frostless.network</code> (1.18+)
        </p>
        <animated.div style={{ ...logoBounceSpring }}>
          <Image
            src="/images/frostless-net.png"
            width={450}
            height={450}
            alt="Frostless Network Logo (by Doggo)"
            className="shadow-2xl"
          />
        </animated.div>
      </div>
    </div>
  );
};

const SocialMediaButtons = () => {
  return (
    <div className="xs:self-center lg:self-left flex flex-row">
      <SocialMediaButton icon={SiGmail} href={GMAIL} />
      <SocialMediaButton icon={FiGithub} href={GITHUB_URL} />
      <SocialMediaButton icon={SiKofi} href={KOFI_URL} />
      <SocialMediaButton icon={SiDiscord} href={DISCORD_BIO} />
    </div>
  );
};

type SocialMediaButtonType = {
  icon: IconType;
  color?: string;
} & React.ComponentPropsWithRef<'a'>;

const SocialMediaButton: React.FC<SocialMediaButtonType> = props => {
  const ICON_SIZE = 36;
  return (
    <Link target="_blank" href={props.href ?? '/'} passHref>
      <a
        target="_blank"
        className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-gray-600 bg-opacity-10 transition-colors"
      >
        <props.icon color={props.color} size={ICON_SIZE} />
      </a>
    </Link>
  );
};

const FeaturedProjects = () => {
  return (
    <div className="xs:self-center">
      <div id="feat-head">
        <h1 className="xs:text-center text-5xl font-medium leading-loose">
          Featured Projects
        </h1>
        <p className="xs:text-center text-xl max-w-3xl dark:text-gray-400">
          A mix of personal and comissioned projects.
        </p>
      </div>
      <div className="grid xs:grid-cols-1 lg:grid-cols-4 gap-12 xs:p-4 my-6">
        {UserFeaturedProjects.map(c => (
          <FeaturingProject key={c.name} project={c} />
        ))}
      </div>
    </div>
  );
};

const FeaturingProject: React.FC<{ project: FeaturedProject }> = props => {
  const { name, description, headerImage, tags, share } = props.project;
  return (
    <div className="group flex flex-col rounded-t-xl rounded-b-md shadow-xl bg-crack-ee dark:bg-grek max-w-sm transition-all transform-gpu hover:scale-105">
      <Image
        src={headerImage}
        alt={description}
        width={200}
        height={200}
        className="rounded-t-xl shadow-xl object-cover"
      />
      <div id="rootproject" className="h-full flex flex-col justify-between">
        <div className="p-4 flex flex-col">
          <p className="text-grek-tasty dark:text-gray-500 font-bold text-sm my-3">
            {tags.map(c => `#${c.toUpperCase()} `)}
          </p>
          <h1 className="text-2xl font-semibold leading-relaxed my-2">
            {name}
          </h1>
          <p className="flex-grow dark:text-gray-400 font-semibold">
            {description}
          </p>
        </div>
        <div className="flex flex-row my-4 p-2 align-bottom items-end justify-self-end">
          {share &&
            share.map(c => (
              <a
                key={c?.link}
                href={c?.link}
                target={!c?.newTab ? '_blank' : undefined}
                rel="noreferrer"
                className="flex flex-row text-blue-500 font-semibold mx-4"
              >
                <HiOutlineExternalLink size={24} /> {c?.type}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

type ToolCategoryProps = {
  name: string;
  selected?: boolean;
  icon: IconType;
} & React.ComponentPropsWithRef<'button'>;
const ToolType: React.FC<ToolCategoryProps> = props => {
  const { className, selected, name, icon: PropIcon, ...other } = props;
  return (
    <button
      className={clsxm('flex flex-col justify-center', className)}
      {...other}
    >
      <PropIcon
        size={64}
        className={clsxm(
          'transition-colors my-2 xs:self-center',
          selected ? 'text-gray-800 dark:text-amber-400' : 'text-gray-500'
        )}
      />
      <p
        className={clsxm(
          'transition-colors self-center font-bold',
          selected ? 'text-gray-800 dark:text-amber-400' : 'text-gray-400'
        )}
      >
        {name}
      </p>
    </button>
  );
};

const Tools = () => {
  const [items, setItems] = useState<{ name: string; tools: ToolSubset[] }>({
    name: UserTools[0].name,
    tools: UserTools[0].list
  });

  const transitions = useTransition(items.tools, {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' },
    delay: 200,
    config: config.gentle
  });

  const onSelect = (name: string) => {
    setItems({
      name: name,
      tools: UserTools.filter(v => v.name === name)[0].list
    });
    console.log(items);
  };
  return (
    <div className="flex flex-col my-16">
      <h1 className="xs:text-center text-5xl font-medium leading-loose">
        Toolbox
      </h1>
      <p className="xs:text-center text-xl max-w-3xl text-grek-tasty dark:text-gray-400 dark:schene">
        Tools that I know &amp; use to get work done in the most efficient
        manner possible.
      </p>
      <div id="toolsroot" className="p-6">
        <div
          id="toolpicker"
          className="flex xs:flex-col lg:flex-row lg:space-x-12"
        >
          {UserTools.map(c => (
            <ToolType
              key={c.name}
              name={c.name}
              icon={c.icon}
              onClick={() => onSelect(c.name)}
              selected={items && items.name === c.name}
            />
          ))}
        </div>

        <div className="grid xs:grid-cols-1 lg:grid-cols-5 grid-flow-row gap-4 p-6">
          {transitions(
            (s, i) =>
              i && (
                <animated.div
                  style={s}
                  key={i.name}
                  className="bg-crack-ee dark:bg-xiketic-darker rounded-lg flex flex-row p-3"
                >
                  <i.icon size={48} />
                  <h1 className="text-xl dark:text-white text-grek-tasty font-semibold align-middle self-center text-center px-4">
                    {i.name}
                  </h1>
                </animated.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

type SkillSetProps = {
  name: string;
};

const Checkmark = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 512 512"
      className="self-center text-green-400 mr-2"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
    </svg>
  );
};

export default Home;
