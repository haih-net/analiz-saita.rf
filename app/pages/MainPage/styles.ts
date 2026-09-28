import { styled } from '@linaria/react'

export const MainPageStyled = styled.div`
  & {
    --main-blue: #0052cc;
    --main-muted: #536789;
  }

  & h1,
  & h2,
  & h3,
  & p,
  & figure {
    margin: 0;
  }

  & h1,
  & h2 {
    color: #090f20;
    line-height: 1.12;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }

  & h1 {
    font-size: clamp(2.5rem, 5vw, 3.75rem);
  }

  & h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
  }

  & img {
    display: block;
    width: 100%;
    height: auto;
  }

  & figcaption {
    color: var(--main-muted);
    font-size: 0.8125rem;
    line-height: 1.6;
    margin-top: 0.75rem;
    max-width: 65ch;
  }

  .main-page__hero {
    display: grid;
    align-items: center;
    gap: 2rem;
    padding-block: 0.5rem 2.5rem;
  }

  & .main-page__eyebrow {
    color: var(--main-muted);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1.25rem;
  }

  & .main-page__intro {
    margin-top: 1.25rem;
    max-width: 38ch;
    font-size: 1.125rem;
  }

  .main-page__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-block: 1.5rem 1rem;
  }

  & .main-page__button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    min-height: 2.875rem;
    padding: 0.625rem 1rem;
    border: 1px solid var(--main-blue);
    border-radius: 0.375rem;
    background: var(--main-blue);
    color: #fff;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 650;
  }

  & .main-page__button:hover {
    background: #003f9d;
  }

  & .main-page__button--secondary {
    background: #fff;
    color: #10172a;
    border-color: #8393b0;
  }

  & .main-page__button--secondary:hover {
    background: #f1f5ff;
  }

  .main-page__muted {
    color: var(--main-muted);
    font-size: 0.8125rem;
  }

  & .main-page__note {
    margin-top: 2rem;
    color: #536f9f;
    font-style: italic;
    text-transform: uppercase;
    font-size: 0.8125rem;
    letter-spacing: 0.08em;
  }

  .main-page__section {
    border-top: 1px solid #dce3ee;
    padding-block: 2rem;
    scroll-margin-top: 1.5rem;
  }

  .main-page__section-heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .main-page__section-heading p {
    color: var(--main-muted);
    margin-top: 0.5rem;
  }

  .main-page__section-heading > a,
  .main-page__section-link {
    font-size: 0.875rem;
  }

  .main-page__tag {
    color: var(--main-muted);
    font-size: 0.75rem;
    background: #f1f5ff;
    padding: 0.25rem 0.625rem;
    border-radius: 0.25rem;
  }

  .main-page__evidence-grid {
    display: grid;
    gap: 1.5rem;
  }

  .main-page__section-link {
    display: block;
    width: fit-content;
    margin-top: 1.25rem;
    margin-left: auto;
  }

  & .main-page__question {
    margin: 2rem auto 0;
    max-width: 50ch;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 550;
    text-wrap: balance;
  }

  .main-page__outcomes {
    display: grid;
    gap: 1.5rem;
    padding: 0;
    margin: 2rem 0;
    list-style: none;
  }

  .main-page__outcome {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .main-page__outcome img {
    width: 5.5rem;
    flex: 0 0 5.5rem;
  }

  .main-page__outcome h3 {
    color: var(--main-blue);
    font-size: 1rem;
  }

  .main-page__outcome--rejected h3 {
    color: #be303b;
  }
  .main-page__outcome--unresolved h3 {
    color: #7822d1;
  }
  .main-page__outcome p {
    font-size: 0.875rem;
  }

  @media (min-width: 48rem) {
    .main-page__section-heading {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .main-page__section-heading > a,
    .main-page__tag {
      flex-shrink: 0;
    }

    .main-page__evidence-grid {
      grid-template-columns: 1fr 1fr;
    }
    .main-page__outcomes {
      grid-template-columns: repeat(3, 1fr);
    }
    .main-page__outcome {
      align-items: flex-start;
    }
  }

  @media (min-width: 64rem) {
    .main-page__hero {
      grid-template-columns: 0.85fr 1.15fr;
      gap: 1rem;
      padding-bottom: 3rem;
    }
  }
`
