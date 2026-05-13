import styles from './LogoBar.module.css';

const LOGOS = [
  { name: 'Stripe', letter: 'S' },
  { name: 'Notion', letter: 'N' },
  { name: 'Vercel', letter: 'V' },
  { name: 'Linear', letter: 'L' },
  { name: 'Figma', letter: 'F' },
  { name: 'GitHub', letter: 'G' },
  { name: 'Slack', letter: 'Sl' },
  { name: 'Jira', letter: 'J' },
];

export default function LogoBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted and integrated with the tools you love</p>
        <div className={styles.logos}>
          {LOGOS.map(({ name, letter }) => (
            <div key={name} className={styles.logo}>
              <span className={styles.logoLetter}>{letter}</span>
              <span className={styles.logoName}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
