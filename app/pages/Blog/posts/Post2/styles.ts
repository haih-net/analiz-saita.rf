import { styled } from '@linaria/react'
import { BlogStyled } from '../../styles'

export const RuntimePostStyled = styled(BlogStyled)`
  .runtime-summary {
    display: grid;
    gap: 1rem;
    margin-block: 2rem;
    padding: 1.5rem;
    border: 1px solid #dce3ee;
    background: #f5f8fc;
  }
  .runtime-summary p {
    margin: 0;
    line-height: 1.6;
  }
  .runtime-summary strong {
    display: block;
    color: #0052cc;
    margin-bottom: 0.35rem;
  }
  .runtime-example {
    overflow-x: auto;
    padding: 1.25rem;
    background: #10172a;
    color: #f5f8fc;
    border-left: 3px solid #e56448;
    font-size: 0.9rem;
    line-height: 1.7;
  }
  .runtime-example code {
    padding: 0;
    background: transparent;
    font-size: inherit;
  }
  .runtime-evidence {
    padding-left: 1.3rem;
    line-height: 1.8;
  }
  .runtime-evidence li + li {
    margin-top: 0.65rem;
  }
  @media (min-width: 48rem) {
    .runtime-summary {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`
