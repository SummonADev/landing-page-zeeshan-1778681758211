import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.glowLeft} />
          <div className={styles.glowRight} />

          <div className={styles.iconWrap}>
            <Sparkles size={28} />
          </div>

          <h2 className={styles.heading}>
            Ready to transform
            <br />
            <span className={styles.headingAccent}>how your team works?</span>
          </h2>

          <p className={styles.subheading}>
            Join 50,000+ teams already using Lumora to collaborate smarter and ship faster.
            Start for free — no credit card required.
          </p>

          <div className={styles.actions}>
            <a href="#" className={styles.btnPrimary}>
              Get started for free
              <ArrowRight size={18} />
            </a>
            <a href="#" className={styles.btnSecondary}>
              Talk to sales
            </a>
          </div>

          <p className={styles.footnote}>
            Free forever plan available · Setup in under 5 minutes · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
