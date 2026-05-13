import { Zap, Twitter, Github, Linkedin, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Beta'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Guides', 'Community', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

const SOCIAL_LINKS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Zap size={16} />
              </div>
              <span className={styles.logoText}>Lumora</span>
            </a>
            <p className={styles.tagline}>
              The future of collaborative work. Helping teams ship faster and smarter every day.
            </p>
            <div className={styles.social}>
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} className={styles.socialLink} aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            {Object.entries(FOOTER_LINKS).map(([category, items]) => (
              <div key={category} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className={styles.link}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Lumora, Inc. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with ❤️ for teams everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
