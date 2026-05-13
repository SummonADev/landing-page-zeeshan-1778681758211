import styles from './Stats.module.css';

const STATS = [
  { value: '50K', label: 'Teams worldwide', suffix: '+' },
  { value: '99.9', label: 'Uptime SLA', suffix: '%' },
  { value: '10x', label: 'Faster delivery', suffix: '' },
  { value: '4.9', label: 'Average rating', suffix: '/5' },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.glow} />
          {STATS.map(({ value, label, suffix }) => (
            <div key={label} className={styles.stat}>
              <div className={styles.value}>
                {value}
                <span className={styles.suffix}>{suffix}</span>
              </div>
              <div className={styles.label}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
