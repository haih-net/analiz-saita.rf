import { styled } from '@linaria/react'

export const BlogStyled = styled.div`
  & {
    color: #10172a;
  }
  .journal-kicker {
    color: #536789;
    font-size: 0.75rem;
    font-weight: 650;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  & h1,
  & h2 {
    line-height: 1.08;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }
  & h1 {
    font-size: clamp(2.6rem, 6vw, 5rem);
    margin: 1.25rem 0;
  }
  & h2 {
    font-size: clamp(1.8rem, 3.6vw, 2.7rem);
  }
  .journal-intro {
    max-width: 48rem;
    padding-block: 1rem 3rem;
  }
  .journal-intro > p:last-child {
    max-width: 42rem;
    font-size: 1.2rem;
    color: #536789;
  }
  .journal-card {
    border-top: 3px solid #0052cc;
    padding-block: 1.5rem 3rem;
    max-width: 48rem;
  }
  .journal-card h2 a {
    text-decoration: none;
  }
  .journal-card h2 a:hover {
    text-decoration: underline;
  }
  .journal-revision {
    font-size: 0.85rem;
    color: #536789;
  }
  .journal-back {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }
  .field-note-header {
    max-width: 60rem;
  }
  &.field-note h1 span {
    color: #0052cc;
  }
  .field-note-deck {
    max-width: 43rem;
    font-size: clamp(1.15rem, 2.3vw, 1.5rem);
    color: #536789;
    line-height: 1.5;
  }
  .journal-snapshot {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 2rem;
    border-block: 1px solid #dce3ee;
    padding-block: 1rem;
    margin-top: 2rem;
    font-size: 0.8rem;
  }
  .journal-snapshot strong {
    display: block;
  }
  .journal-snapshot p {
    flex-basis: 100%;
    margin: 0;
    color: #536789;
  }
  &.field-note figure {
    margin: 2rem 0;
  }
  &.field-note img {
    display: block;
    width: 100%;
    height: auto;
    background: #f5f7fa;
  }
  &.field-note figcaption {
    font-size: 0.8rem;
    color: #536789;
    margin-top: 0.75rem;
    max-width: 46rem;
  }
  .field-note-body {
    max-width: 43rem;
    margin-inline: auto;
  }
  .field-note-body section {
    padding-block: 1.75rem;
  }
  .field-note-body section + section {
    border-top: 1px solid #dce3ee;
  }
  .field-note-body p {
    line-height: 1.85;
  }
  .field-note-body h2 {
    margin-block: 0.8rem 1.5rem;
  }
  .field-note-body code {
    font-size: 0.9em;
    background: #f1f5fb;
    padding: 0.1em 0.25em;
  }
  &.field-note blockquote {
    margin: 2rem 0;
    border-left: 3px solid #0052cc;
    padding: 0.5rem 0 0.5rem 1.3rem;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: -0.015em;
  }
  .field-note-margin {
    padding: 1.5rem;
    margin-top: 2rem;
    background: #f1f5fb;
    border-top: 3px solid #e56448;
  }
  .field-note-margin p {
    margin-bottom: 0;
  }
  .field-note-ending h2 {
    color: #0052cc;
  }
  .field-note-footer {
    border-top: 1px solid #dce3ee;
    padding-block: 1rem 2rem;
    color: #536789;
    font-size: 0.85rem;
  }
  @media (min-width: 48rem) {
    .field-note-header {
      padding-top: 1rem;
    }
    &.field-note figure {
      margin-block: 3rem;
    }
    .field-note-body {
      font-size: 1.1rem;
    }
    .field-note-body section {
      padding-block: 2.5rem;
    }
    .field-note-cover img {
      aspect-ratio: 3 / 2;
    }
  }
`
