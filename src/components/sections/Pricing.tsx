import { Check, Zap } from 'lucide-react';
import clsx from 'clsx';
import styles from './Pricing.module.css';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: 'forever',
    description: 'Perfect for small teams just getting started.',
    features: [
      'Up to 5 team members',
      '10 active projects',
      '5GB storage',
      'Basic integrations',
      'Community support',
    ],
    cta: 'Start for free',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 18,
    period: 'per user / month',
    description: 'For growing teams that need more power and collaboration.',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      '100GB storage',
      'All integrations',
      'AI-powered features',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 45,
    period: 'per user / month',
    description: 'For large organizations with custom needs and compliance requirements.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'SSO & SAML',
      'RBAC & audit logs',
      'Custom contracts',
      'Dedicated success manager',
      'SLA guarantees',
    ],
    cta: 'Contact sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Pricing</div>
          <h2 className={styles.heading}>
            Simple, transparent
            <span className={styles.headingAccent}> pricing</span>
          </h2>
          <p className={styles.subheading}>
            No hidden fees. No surprises. Start for free, upgrade when you're ready.
          </p>
        </div>

        <div className={styles.grid}>
          {PLANS.map(({ id, name, price, period, description, features, cta, popular }) => (
            <div key={id} className={clsx(styles.plan, popular && styles.popular)}>
              {popular && (
                <div className={styles.popularBadge}>
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{name}</h3>
                <div className={styles.priceRow}>
                  {price === 0 ? (
                    <span className={styles.price}>Free</span>
                  ) : (
                    <>
                      <span className={styles.currency}>$</span>
                      <span className={styles.price}>{price}</span>
                    </>
                  )}
                </div>
                <p className={styles.period}>{period}</p>
                <p className={styles.description}>{description}</p>
              </div>
              <a href="#" className={clsx(styles.cta, popular && styles.ctaPopular)}>
                {cta}
              </a>
              <ul className={styles.features}>
                {features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <Check size={16} className={styles.check} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
