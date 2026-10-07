import { styled } from '@linaria/react'
export const HomeStyled = styled.article`
  background: #f1f2f4;
  .eyebrow {
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
  }
  .home-body {
    max-width: 85rem;
    padding: 2.5rem 1.25rem;
    margin: auto;
  }
  .home-body > section {
    padding-block: 2rem;
    border-top: 1px solid #ccd0d8;
  }
  .home-body > section > p {
    max-width: 44rem;
    color: #424854;
  }
  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }
  .hero-actions a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
  .primary-action {
    display: inline-flex;
    padding: 0.85rem 1.2rem;
    background: #244beb;
    color: white;
    text-decoration: none;
    border-radius: 3px;
  }
  .primary-action:hover {
    background: #1738b0;
  }
  .hero-note {
    color: #424854;
    font-size: 0.85rem;
  }
  .home-body h2 {
    font-size: clamp(1.8rem, 3.4vw, 3rem);
    line-height: 1.16;
    letter-spacing: -0.035em;
    margin-top: 0.75rem;
  }
  .topics {
    display: grid;
    margin-top: 2rem;
  }
  .topics > section {
    padding: 1.5rem 0;
    border-top: 1px solid #ccd0d8;
  }
  .topics h3 {
    font-size: 1.3rem;
    margin: 0 0 0.8rem;
  }
  .topics p {
    color: #424854;
    margin: 0;
  }
  .editorial {
    display: grid;
    gap: 0.5rem;
  }
  .editorial p {
    max-width: 44rem;
    color: #424854;
  }
  .start-section .primary-action {
    margin-block: 1rem;
  }
  @media (min-width: 48rem) {
    .topics {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .editorial {
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
    }
    .home-body {
      padding: 4rem 2.5rem;
    }
  }
`
export const HeroStyled = styled.section`
  min-height: calc(100svh - var(--site-header-height, 112px));
  max-width: 85rem;
  margin: auto;
  padding: 2.5rem 1.25rem;
  display: grid;
  align-items: center;
  gap: 2rem;
  h1 {
    font-size: clamp(2.6rem, 6vw, 5.7rem);
    line-height: 1.05;
    letter-spacing: -0.055em;
    margin: 1.4rem 0;
  }
  h1 span {
    color: #244beb;
  }
  .intro {
    max-width: 35rem;
    font-size: 1.1rem;
    color: #424854;
  }
  .intro-action {
    display: inline-flex;
    padding-block: 1rem;
  }
  figure {
    margin: 0;
    background: #e2e7f1;
    padding: 1.5rem;
    border-top: 3px solid #244beb;
  }
  figcaption,
  figure p {
    color: #424854;
    font-size: 0.8rem;
  }
  ol {
    list-style: none;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #b9c3d5;
  }
  li a {
    display: grid;
    grid-template-columns: 1.5rem 1fr 1rem;
    align-items: center;
    gap: 0.8rem;
    min-height: 56px;
    border-radius: 3px;
    padding-block: 1rem;
    color: #174b9c;
    text-decoration: none;
  }
  li a:hover {
    background: #d4ddf0;
  }
  li a:focus-visible {
    outline: 2px solid #244beb;
    outline-offset: 4px;
  }
  .step-number {
    opacity: 0.7;
    font: 0.8rem monospace;
  }
  .step-arrow {
    text-decoration: none;
  }
  @media (min-width: 48rem) {
    padding: 3rem 2.5rem;
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    figure {
      padding: 2.5rem;
    }
  }
`
