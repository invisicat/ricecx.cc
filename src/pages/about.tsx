import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { SiKofi, SiDiscord, SiGmail } from 'react-icons/si';
import TextLink from '../components/links/TextLink';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { DISCORD_BIO, GITHUB_URL, GMAIL, KOFI_URL } from '@/lib/links';

const About = () => {
  return (
    <Layout title="RiceCX - About me">
      <h1 className="text-5xl xs:text-center font-semibold leading-loose">
        About me
      </h1>
      <hr />
      <div id="rootInfo" className="my-12">
        <div className="flex xs:flex-col lg:flex-row justify-evenly mx-4">
          <div id="contactinfo" className="flex flex-col">
            <Image
              src="/images/github_avatar.jpg"
              width="384"
              height="384"
              alt="avatar"
              className="rounded-full"
            />
            <div className="flex flex-row space-x-8 self-center my-6">
              <AboutHL icon={FiGithub} href={GITHUB_URL} />
              <AboutHL icon={SiKofi} href={KOFI_URL} />
              <AboutHL icon={SiDiscord} href={DISCORD_BIO} />
              <AboutHL icon={SiGmail} href={GMAIL} />
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-4 max-w-xl">
            <p className="text-lg leading-loose">
              Hi, I&apos;m Andy, a student pursuing a BS degree in Computer
              Science. I started programming since I was 9 years old and have
              been developing my skills since. As my interest in programming
              began to grow, I explored many tools and languages alongside the
              rapidly changing ecosystem. With that, I have created many
              projects and prototypes which are on my GitHub.
            </p>
            <p className="text-lg leading-loose">
              I&apos;ve recently started coding professionally for around 2
              years now and have worked in a couple of professional environments
              such as at CraftiGames where I managed updating their minigames
              and monitoring infastructure. I predominantly worked with Java,
              SpringBoot, and Linux alongside the relevant frameworks during my
              time at{' '}
              <TextLink href="https://craftigames.net">CraftiGames</TextLink>.
            </p>
            <p className="text-lg leading-loose">
              Right now, I am currently focusing on my studies though I am also
              looking to expand my network and find a job as a Software
              Engineer. I am fluent in many languages such as Typescript, Java,
              and Rust. Alongside that I also have experience with DevOps tools
              such as Docker, Prometheus, Grafana, Telegraf, and many more.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const AboutHL: React.FC<
  { icon: IconType } & React.ComponentPropsWithoutRef<'a'>
> = props => {
  return (
    <Link href={props.href ?? '/'} target="_blank" passHref>
      <button className="hover:bg-slate-400 bg-opacity-20 p-3 rounded-full">
        <a target="_blank" rel="noreferrer" href={props.href ?? '/'}>
          <props.icon size={28} />
        </a>
      </button>
    </Link>
  );
};

export default About;
