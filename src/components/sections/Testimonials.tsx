import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Head of Engineering',
    company: 'Veritas AI',
    initials: 'SC',
    color: '#7c6af7',
    quote: 'Lumora transformed how our 40-person eng team collaborates. We shipped 3x faster in the first quarter after switching. The AI features alone save me 2 hours daily.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'VP of Product',
    company: 'Petal Finance',
    initials: 'MW',
    color: '#f97316',
    quote: 'We evaluated every tool on the market. Lumora is the only one that actually understands modern product development. The integration ecosystem is unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'CTO',
    company: 'NovaBuild',
    initials: 'PS',
    color: '#22c55e',
    quote: 'I was skeptical about another project tool. Six months in, I can\'t imagine going back. The automation engine replaced 4 separate tools we were paying for.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Okafor',
    role: 'Engineering Manager',
    company: 'Skyline Labs',
    initials: 'JO',
    color: '#06b6d4',
    quote: 'Setup took 30 minutes and we were fully migrated in a day. The support team is incredibly responsive. Our team satisfaction scores are the highest ever.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Elena Rossi',
    role: 'Design Lead',
    company: 'Craft Studio',
    initials: 'ER',
    color: '#ec4899',
    quote: 'As a designer, I love that Lumora bridges the gap between design and dev. Figma syncs, handoff notes, and version tracking all in one place. A dream.',
    rating: 5,
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Founder & CEO',
    company: 'Orbit Tech',
    initials: 'DK',
    color: '#a855f7',
    quote: 'From a 3-person startup to 80 employees, Lumora scaled with us every step. It\'s rare to find a tool that works for both scrappy early stages and enterprise needs.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Testimonials</div>
          <h2 className={styles.heading}>
            Loved by teams
            <span className={styles.headingAccent}> everywhere</span>
          </h2>
          <p className={styles.subheading}>
            Don't take our word for it — hear from the teams who've made Lumora their home.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map(({ id, name, role, company, initials, color, quote, rating }) => (
            <div key={id} className={styles.card}>
              <Quote size={24} className={styles.quoteIcon} />
              <p className={styles.quote}>{quote}</p>
              <div className={styles.footer}>
                <div className={styles.avatar} style={{ background: color + '22', borderColor: color + '44' }}>
                  <span style={{ color }}>{initials}</span>
                </div>
                <div className={styles.author}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.meta}>{role} · {company}</span>
                </div>
                <div className={styles.rating}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
