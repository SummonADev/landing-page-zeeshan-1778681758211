import {
  Zap,
  Users,
  BarChart3,
  GitBranch,
  Bell,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    description: 'Get intelligent suggestions, automated summaries, and smart recommendations to boost your team\'s velocity.',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with live cursors, instant updates, and conflict-free editing.',
  },
  {
    icon: GitBranch,
    title: 'Git Integration',
    description: 'Connect your repos and track code changes directly alongside your tasks and documentation.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep-dive into team performance metrics, sprint velocity, and burndown charts in real time.',
  },
  {
    icon: Zap,
    title: 'Automation Engine',
    description: 'Automate repetitive workflows with powerful no-code rules and triggers across your stack.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay in the loop with context-aware alerts that surface only what matters, when it matters.',
  },
  {
    icon: Layers,
    title: 'Unlimited Integrations',
    description: '300+ native integrations including Slack, GitHub, Figma, Jira, and your custom tools.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified with SSO, RBAC, audit logs, and end-to-end encryption.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Features</div>
          <h2 className={styles.heading}>
            Everything your team needs
            <br />
            <span className={styles.headingAccent}>to do their best work</span>
          </h2>
          <p className={styles.subheading}>
            Lumora brings together all the tools modern teams need — without the chaos of switching between apps.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ icon: Icon, title, description, highlight }) => (
            <div key={title} className={clsx(styles.card, highlight && styles.highlight)}>
              <div className={clsx(styles.iconWrap, highlight && styles.iconHighlight)}>
                <Icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
