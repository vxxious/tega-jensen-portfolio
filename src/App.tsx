const methods = ['Evaluate', 'Compare', 'Verify', 'Document']

const impact = [
  ['7+ years', 'Quality review, research, and analytical work'],
  ['99%+', 'Annotation accuracy across multiple evaluation projects'],
  ['20%+', 'Review-efficiency improvement through better documentation'],
]

const experience = [
  {
    role: 'AI Content Quality Analyst',
    meta: 'Remote · Contract / Freelance',
    dates: 'January 2022 — Present',
    summary:
      'Evaluates AI-generated responses for factual accuracy, coherence, relevance, and safety; ranks outputs against structured criteria and documents annotation decisions.',
    details: [
      'Identifies hallucinations, logical inconsistencies, grammar problems, and bias.',
      'Supports dataset quality through detailed quality assurance reviews and structured human feedback.',
      'Works independently with distributed teams while consistently meeting deadlines.',
    ],
  },
  {
    role: 'Content Quality & Data Annotation Specialist',
    meta: 'Remote',
    dates: 'June 2018 — December 2021',
    summary:
      'Reviewed, classified, and annotated natural-language datasets while applying strict standards for completeness, consistency, and factual accuracy.',
    details: [
      'Verified information using reliable online sources.',
      'Documented inconsistencies and quality findings.',
      'Improved review efficiency through clearer documentation practices.',
    ],
  },
  {
    role: 'Research & Administrative Specialist',
    meta: 'Research and operations support',
    dates: 'July 2016 — May 2018',
    summary:
      'Conducted internet research, prepared analytical reports, reviewed documentation, and maintained accurate digital records and project databases.',
    details: [
      'Created spreadsheets and organised project information.',
      'Prepared written summaries and research findings.',
      'Supported cross-functional teams through administrative coordination.',
    ],
  },
]

const expertise = [
  ['AI & quality', 'AI response evaluation, LLM testing, prompt evaluation, data annotation, content moderation, quality assurance, fact verification'],
  ['Research & language', 'Online research, data validation, natural-language understanding, critical reasoning, English writing and editing'],
  ['Productivity', 'Microsoft Word, Excel, PowerPoint, Outlook, Google Docs, Sheets, Drive'],
  ['Collaboration', 'Slack, Zoom, Microsoft Teams, Google Meet, Notion, Trello'],
]

const additionalExperience = [
  ['Diesel Technician', '229 Production LLC', 'April 2022 — Present'],
  ['Demolition Laborer', 'Demolition Construction', 'November 2019 — November 2022'],
  ['Truck Driver / Assembly Worker', 'Knight Transportation', 'Date not listed'],
  ['Truck-driving and CDL preparation', 'C1 · Dallas, Texas', 'Present'],
]

const credentials = [
  'Google Data Analytics Fundamentals',
  'Microsoft Office Specialist',
  'AI Foundations and Machine Learning Fundamentals',
  'Prompt Engineering Fundamentals',
  'Data Annotation Best Practices',
  'Remote Work Professional Certificate',
  'MCSE · MCP · CCNP',
  'CDL A · CDL B · Driver’s Licence',
  'Hazmat · Tanker · X Endorsement',
  'ASE · Forklift Certification',
]

function App() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tega Jensen',
    url: 'https://tega-jensen-portfolio.vercel.app/',
    jobTitle: 'AI Evaluation & Content Quality Specialist',
    address: { '@type': 'PostalAddress', addressLocality: 'Richmond', addressRegion: 'TX', addressCountry: 'US' },
    sameAs: ['https://www.linkedin.com/in/tega-jensen-2a5ba82aa'],
    knowsAbout: ['AI evaluation', 'Content quality', 'Data annotation', 'Quality assurance', 'Online research'],
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} />

      <header className="hero-stage" id="about">
        <div className="top-rail">
          <a className="site-name" href="#about" aria-label="Tega Jensen, home">Tega Jensen</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="hero-scale" aria-hidden="true">
          {['100', '80', '60', '40', '20', '0'].map((value) => <span key={value}>{value}</span>)}
        </div>

        <h1 className="pixel-headline" aria-label="Careful evaluation. Clearer AI.">
          <span>Careful</span>
          <span>Evaluation</span>
          <span>Clearer AI</span>
        </h1>
        <div className="hero-dots" aria-hidden="true" />

        <aside className="profile-rail" aria-label="Professional profile">
          <p className="role">AI Evaluation &amp;<br />Content Quality<br />Specialist</p>
          <p className="location">Richmond, Texas</p>
          <div className="profile-links">
            <a href="mailto:ijenyotega2@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/tega-jensen-2a5ba82aa" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p className="positioning">I turn detailed guidelines into consistent, documented quality decisions.</p>
          <div className="profile-dots" aria-hidden="true" />
        </aside>

        <div className="method-strip" aria-label="Evaluation method">
          {methods.map((method, index) => (
            <div className="method" key={method}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{method}</strong>
              <i aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="experience-peek" aria-hidden="true">
          <span>Selected experience</span>
          <span>AI Content Quality Analyst</span>
          <span>2022 — Present</span>
        </div>
      </header>

      <main id="main">
        <section className="section impact-section" aria-labelledby="impact-title">
          <div className="section-heading">
            <h2 id="impact-title">Selected impact</h2>
            <p>CV-reported outcomes from quality-review work.</p>
          </div>
          <div className="impact-grid">
            {impact.map(([value, label]) => (
              <div className="impact-item" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
            <p>AI evaluation, data quality, and research.</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.role}>
                <header>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.meta}</p>
                  </div>
                  <time>{item.dates}</time>
                </header>
                <p className="experience-summary">{item.summary}</p>
                <ul>
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading">
            <h2 id="expertise-title">Expertise</h2>
            <p>Capabilities and working tools.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section credentials-section" aria-labelledby="credentials-title">
          <div className="section-heading">
            <h2 id="credentials-title">Education &amp; credentials</h2>
            <p>Qualifications listed on the supplied CV.</p>
          </div>
          <div className="education">
            <h3>B.Sc. in Economics</h3>
            <p>University of Texas · Brownsville, Texas</p>
          </div>
          <ul className="credentials-list">
            {credentials.map((credential) => <li key={credential}>{credential}</li>)}
          </ul>
        </section>

        <section className="section" aria-labelledby="additional-title">
          <div className="section-heading">
            <h2 id="additional-title">Additional experience</h2>
            <p>Earlier and concurrent safety-critical operations work.</p>
          </div>
          <div className="additional-list">
            {additionalExperience.map(([role, employer, dates]) => (
              <div key={`${role}-${employer}`}>
                <h3>{role}</h3>
                <p>{employer}</p>
                <span>{dates}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Careful review.<br />Clear communication.</h2>
          <p>For AI evaluation, content-quality, data-annotation, and research opportunities.</p>
          <div>
            <a href="mailto:ijenyotega2@gmail.com">ijenyotega2@gmail.com</a>
            <a href="https://www.linkedin.com/in/tega-jensen-2a5ba82aa" target="_blank" rel="noreferrer">LinkedIn profile</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Tega Jensen</span>
        <a href="#about">Back to top</a>
      </footer>
    </>
  )
}

export default App
