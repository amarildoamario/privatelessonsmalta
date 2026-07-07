import Head from 'next/head'

const experiences = [
  {
    title: 'Full-Stack Developer & E-commerce Administrator (Remote)',
    organization: 'Frantoio Del Pasqua · delpasqua.vercel.app',
    period: 'Dec 2025 – Present',
    content: (
      <ul>
        <li>Developed and currently maintaining the e-commerce platform fully remotely, overseeing technical operations and site updates.</li>
        <li>Managed automated order workflows, real-time inventory sync, and Stripe payment integrations.</li>
        <li><strong>Tech Stack:</strong> Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma (PostgreSQL), Stripe API, Redis.</li>
      </ul>
    ),
  },
  {
    title: 'Research Assistant',
    organization: 'University of Florence · Department of Chemistry “Ugo Schiff”',
    period: 'Jan 2025 – Feb 2026',
    content: (
      <p>Developed microRNA-21 inhibitors as novel chemotherapeutic agents for pediatric gliomas. Synthesized triazole derivatives via CuAAC click chemistry and designed 2-oxo-piperazine scaffolds through Castagnoli-Cushman reactions to optimize binding affinity.</p>
    ),
  },
  {
    title: 'Research and Training Activity in Organic Chemistry Laboratory',
    organization: 'University of Florence · Department of Chemistry “Ugo Schiff”',
    period: 'Jan 2024 – Jul 2024',
    content: (
      <p>Synthesized peptidomimetic inhibitors through palladium-catalyzed C–H (sp<sup>3</sup>) activation reactions. Designed and synthesized D-proline peptidomimetic derivatives. Used HPLC, NMR and MS analytical instrumentation.</p>
    ),
  },
  {
    title: 'Secondary School Teacher',
    organization: 'Bucine Comprehensive Institute',
    period: 'Sep 2023 – Jun 2024',
    content: <p>Subjects taught: Mathematics and Science.</p>,
  },
  {
    title: 'Research and Training Activity in Chemistry Laboratory',
    organization: 'University of Florence · Department of Chemistry “Ugo Schiff”',
    period: 'Jan 2021 – Jun 2021',
    content: (
      <ul>
        <li>Developed biopolymeric formulations for controlled-permeability membranes.</li>
        <li>Crosslinked gelatin with glutaraldehyde and glyceraldehyde; studied membrane permeability by UV–Vis.</li>
        <li>Performed IR and SEM spectroscopic and morphological analysis.</li>
      </ul>
    ),
  },
  {
    title: 'Private Tutor',
    organization: 'Self-employed',
    period: '2017 – 2025',
    content: <p>Organic, analytical and general chemistry; physics; mathematics.</p>,
  },
  {
    title: 'Production Process Consultant',
    organization: 'Private consultant',
    period: '2022 – 2023',
    content: <p>Developed detergents for the goldsmith industry based on precious-metal ligands.</p>,
  },
]

export default function Home() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print()
  }

  return (
    <>
      <Head>
        <title>Leonardo Mori — Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Resume of Leonardo Mori, chemical sciences graduate and researcher." />
        <link rel="canonical" href="https://privatelessonsmalta.com/cv" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/me_graduation.jpg" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { background: #dce1dd !important; }
        ` }} />
      </Head>

      <main className="page-shell">
        <div className="print-toolbar no-print">
          <span>Preview A4</span>
          <button onClick={handlePrint}>Print / Save PDF</button>
          <a href="/Leonardo-Mori-Resume.pdf" download="Leonardo-Mori-Resume.pdf" className="download-btn">Scarica PDF (Compresso)</a>
        </div>

        <article className="resume">
          <header className="resume-header">
            <div className="header-left">
              <img src="/me.png" alt="Leonardo Mori" className="profile-photo" />
              <div className="header-title">
                <p className="eyebrow">Chemical sciences · Research · Education</p>
                <h1>Leonardo<br /><em>Mori</em></h1>
              </div>
            </div>
            <div className="header-contact">
              <a href="mailto:leonardomori23@gmail.com">leonardomori23@gmail.com</a>
              <a href="tel:+393315263830">+39 331 526 3830</a>
              <span>Bucine, Tuscany, Italy</span>
            </div>
          </header>

          <div className="resume-grid">
            <aside className="sidebar">
              <section>
                <h2>Profile</h2>
                <div className="section-content">
                  <p className="profile-text">With experience in academic research and industrial applications involving precious metals, I focus on the organic synthesis of new bioactive compounds and the improvement of production processes. I am seeking technical-scientific, academic or research opportunities that promote innovation, progress and chemical sustainability.</p>
                </div>
              </section>

              <section>
                <h2>Details</h2>
                <div className="section-content">
                  <dl className="details-list">
                    <div><dt>Address</dt><dd>Via Magiotti 47<br />Bucine, AR, Tuscany, Italy</dd></div>
                    <div><dt>Date of birth</dt><dd>08 May 1997</dd></div>
                    <div><dt>Driver’s license</dt><dd>Yes</dd></div>
                  </dl>
                </div>
              </section>

              <section>
                <h2>Languages</h2>
                <div className="section-content">
                  <div className="level-row"><span>Italian</span><strong>Native</strong></div>
                  <div className="level-row"><span>English</span><strong>B2</strong></div>
                </div>
              </section>

              <section className="skills-section">
                <h2>Technical skills</h2>
                <div className="section-content">
                  <h3>Software</h3>
                  <div className="skills-grid">
                    <span className="skill-tag">Microsoft Office 365</span>
                    <span className="skill-tag">MestreNova</span>
                    <span className="skill-tag">AutoCAD</span>
                  </div>
                  <h3>Programming</h3>
                  <div className="skills-grid">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">Fortran 90</span>
                  </div>
                </div>
              </section>

              <section className="education-section">
                <h2>Education</h2>
                <div className="section-content education-list">
                  <article className="education-item">
                    <p className="period">Jan 2022 – Feb 2025</p>
                    <h3>Master of Science in Chemistry&nbsp;<span>LM-54</span></h3>
                    <p className="organization">University of Florence</p>
                    <p className="education-details">Curriculum: Synthesis, Properties, and Structure of Organic Compounds</p>
                  </article>
                  <article className="education-item">
                    <p className="period">Jan 2017 – Jun 2021</p>
                    <h3>Bachelor’s Degree in Chemistry&nbsp;<span>L-27</span></h3>
                    <p className="organization">University of Florence</p>
                    <p className="education-details">Curriculum: Chemical Technologies</p>
                  </article>
                  <article className="education-item">
                    <p className="period">Sep 2011 – Jun 2016</p>
                    <h3>Scientific High School Diploma</h3>
                    <p className="organization">Liceo Scientifico Benedetto Varchi, Montevarchi (AR)</p>
                  </article>
                </div>
              </section>

            </aside>

            <div className="main-column">
              <section>
                <h2>Professional experience</h2>
                <div className="section-content timeline">
                  {experiences.map((experience) => (
                    <article className="timeline-item" key={`${experience.title}-${experience.period}`}>
                      <p className="period">{experience.period}</p>
                      <h3>{experience.title}</h3>
                      <p className="organization">{experience.organization}</p>
                      {experience.content && <div className="experience-content">{experience.content}</div>}
                    </article>
                  ))}
                </div>
              </section>

              <section className="publication-section">
                <h2>Publication</h2>
                <div className="section-content publication-content">
                  <div className="publication-details">
                    <p><strong>How to Cross-Link Gelatin: The Effect of Glutaraldehyde and Glyceraldehyde on the Hydrogel Properties.</strong></p>
                    <p className="authors">Mugnaini, G.; Gelli, R.; Mori, L.; Bonini, M.</p>
                    <p className="journal"><i>ACS Applied Polymer Materials</i>, 2023, 5(11), 9192–9202.</p>
                    <a href="https://doi.org/10.1021/acsapm.3c01676" target="_blank" rel="noopener noreferrer">doi.org/10.1021/acsapm.3c01676</a>
                  </div>
                  <div className="publication-logo">
                    <img src="/ACS logo.png" alt="ACS Publications" />
                  </div>
                </div>
              </section>

              <section className="prize-section">
                <h2>Prizes</h2>
                <div className="section-content prize-content">
                  <div className="prize-details">
                    <p><strong>The Young Group of the Italian Chemical Society and ACS Publications award the</strong></p>
                    <p style={{ color: 'var(--accent)', fontWeight: 700, margin: '2px 0' }}>BEST POSTER COMMUNICATION</p>
                    <p>at the Merck Young Chemist’s Symposium 2025</p>
                  </div>
                  <div className="prize-logos">
                    <img src="/SCI%20giovani.jpeg" alt="Società Chimica Italiana" />
                    <img src="/mycs%202025_inside.jpg" alt="MYCS 2025" />
                    <img src="/ACS-publications.png" alt="ACS Publications" />
                  </div>
                </div>
              </section>

            </div>
          </div>
        </article>
      </main>
    </>
  )
}
