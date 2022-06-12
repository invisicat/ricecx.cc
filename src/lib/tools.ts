import { IconType } from 'react-icons';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { GiSettingsKnobs } from 'react-icons/gi';
import { HiOutlineDatabase } from 'react-icons/hi';
import { IoEarthOutline } from 'react-icons/io5';
import {
  SiApachekafka,
  SiApachemaven,
  SiCss3,
  SiDocker,
  SiGit,
  SiGradle,
  SiGrafana,
  SiHtml5,
  SiJava,
  SiJetbrains,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiProxmox,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVisualstudiocode,
  SiYarn
} from 'react-icons/si';

const Frontend: Tool = {
  name: 'Frontend',
  icon: IoEarthOutline,
  list: [
    {
      icon: SiReact,
      name: 'React'
    },
    {
      icon: SiNextdotjs,
      name: 'Next.js'
    },
    {
      icon: SiTailwindcss,
      name: 'TailwindCSS'
    },
    {
      icon: SiHtml5,
      name: 'HTML'
    },
    {
      icon: SiCss3,
      name: 'CSS'
    },
    {
      icon: SiTypescript,
      name: 'TypeScript'
    }
  ]
};

const Backend: Tool = {
  name: 'Backend',
  icon: HiOutlineDatabase,
  list: [
    {
      icon: SiJava,
      name: 'Java'
    },
    {
      icon: SiNodedotjs,
      name: 'Node.js'
    },
    {
      icon: SiPostgresql,
      name: 'PostgreSQL'
    },
    {
      icon: SiMysql,
      name: 'MySQL'
    },
    {
      icon: SiRust,
      name: 'Rust'
    },
    {
      icon: SiRedis,
      name: 'Redis'
    },
    {
      icon: SiApachekafka,
      name: 'Kafka'
    },
    {
      icon: SiRabbitmq,
      name: 'RabbitMQ'
    }
  ]
};
const DevOps: Tool = {
  name: 'DevOps',
  icon: AiOutlineCloudServer,
  list: [
    {
      icon: SiDocker,
      name: 'Docker'
    },
    {
      icon: SiKubernetes,
      name: 'Kubernetes'
    },
    {
      icon: SiTerraform,
      name: 'Terraform'
    },
    {
      icon: SiLinux,
      name: 'Linux'
    },
    {
      icon: SiGrafana,
      name: 'Grafana'
    },
    {
      icon: SiPrometheus,
      name: 'Prometheus'
    },
    {
      icon: SiProxmox,
      name: 'Proxmox'
    }
  ]
};
const Tools: Tool = {
  name: 'Tools',
  icon: GiSettingsKnobs,
  list: [
    {
      icon: SiGit,
      name: 'Git'
    },
    {
      icon: SiJetbrains,
      name: 'Jetbrains IDE'
    },
    {
      icon: SiGradle,
      name: 'Gradle'
    },
    {
      icon: SiApachemaven,
      name: 'Maven'
    },
    {
      icon: SiYarn,
      name: 'Yarn'
    },
    {
      icon: SiVisualstudiocode,
      name: 'Visual Studio Code'
    }
  ]
};
type ToolSubset = {
  name: string;
  icon: IconType;
};

type Tool = {
  name: string;
  icon: IconType;
  list: ToolSubset[];
};

const UserTools: Tool[] = Array.of(Frontend, Backend, DevOps, Tools);

export { UserTools };
export type { ToolSubset, Tool };
