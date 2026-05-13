import { ArrowRight, Play, Star } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.grid} />

      <div className={styles.container}>
        <div className={styles.badge}>
          <Star size={12} fill="currentColor" />
          <span>Trusted by 50,000+ teams worldwide</span>
        </div>

        <h1 className={styles.heading}>
          Build, collaborate &amp;
          <br />
          <span className={styles.headingGradient}>ship 10x faster</span>
        </h1>

        <p className={styles.subheading}>
          Lumora unifies your team's workflow — from ideation to deployment.
          Real-time collaboration, AI-powered insights, and integrations that just work.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.btnPrimary}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <button className={styles.btnSecondary}>
            <div className={styles.playIcon}>
              <Play size={14} fill="currentColor" />
            </div>
            Watch demo
          </button>
        </div>

        <div className={styles.social}>
          <div className={styles.avatarGroup}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.avatar} style={{ '--i': i } as React.CSSProperties}>
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div className={styles.socialText}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span>4.9/5 from 2,000+ reviews</span>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <span className={styles.dot} style={{ background: '#ff5f57' }} />
              <span className={styles.dot} style={{ background: '#febc2e' }} />
              <span className={styles.dot} style={{ background: '#28c840' }} />
              <span className={styles.mockupTitle}>lumora.app/workspace</span>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupSidebar}>
                {['Dashboard', 'Projects', 'Tasks', 'Messages', 'Analytics', 'Settings'].map((item) => (
                  <div key={item} className={styles.sidebarItem}>
                    <div className={styles.sidebarDot} />
                    {item}
                  </div>
                ))}
              </div>
              <div className={styles.mockupMain}>
                <div className={styles.mockupHeader}>
                  <span className={styles.mockupHeaderTitle}>Sprint Overview</span>
                  <span className={styles.mockupStatus}>🟢 On Track</span>
                </div>
                <div className={styles.cards}>
                  {[
                    { title: 'Tasks Done', value: '24', color: 'var(--color-success)' },
                    { title: 'In Progress', value: '8', color: 'var(--color-primary)' },
                    { title: 'Blockers', value: '2', color: 'var(--color-accent)' },
                  ].map(({ title, value, color }) => (
                    <div key={title} className={styles.card}>
                      <span className={styles.cardValue} style={{ color }}>{value}</span>
                      <span className={styles.cardLabel}>{title}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.progressSection}>
                  <span className={styles.progressLabel}>Sprint Progress</span>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '72%' }} />
                  </div>
                  <span className={styles.progressPct}>72%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
