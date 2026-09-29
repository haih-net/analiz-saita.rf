import adopted from './adopted.webp'
import rejected from './rejected.webp'
import unresolved from './unresolved.webp'

const outcomes = [
  {
    title: 'Adopted',
    image: adopted,
    description: 'Works under stated conditions.',
    note: 'Useful. For now.',
    tone: 'adopted',
  },
  {
    title: 'Rejected',
    image: rejected,
    description: 'Here is why it did not fit.',
    note: 'Still valuable.',
    tone: 'rejected',
  },
  {
    title: 'Unresolved',
    image: unresolved,
    description: 'The next thing to test.',
    note: 'Ideas on the list.',
    tone: 'unresolved',
  },
]

export function ExperimentOutcomes() {
  return (
    <section className="main-page__section" aria-labelledby="outcomes-title">
      <div className="main-page__section-heading">
        <div>
          <h2 id="outcomes-title">The dead ends are part of the story.</h2>
          <p>
            Failed attempts, alternative ideas, open questions. They all teach
            us something.
          </p>
        </div>
        <a href="https://github.com/haih-net/haih.site">
          Follow the development <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ul className="main-page__outcomes">
        {outcomes.map(({ title, image, description, note, tone }) => (
          <li
            className={`main-page__outcome main-page__outcome--${tone}`}
            key={title}
          >
            <img src={image} alt="" width={176} height={176} loading="lazy" />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="main-page__muted">{note}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="main-page__muted">
        Ways to record an investigation’s outcome, not claims of completed
        experiments.
      </p>
    </section>
  )
}
