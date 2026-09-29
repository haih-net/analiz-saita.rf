import { styled } from '@linaria/react'
import { BlogStyled } from '../../styles'

export const PortalPostStyled = styled(BlogStyled)`
  .portal-facts {
    display: grid;
    gap: 1rem;
    margin-block: 2rem;
    padding: 1.5rem;
    background: #f1f5fb;
    border-top: 3px solid #e56448;
  }
  .portal-facts p {
    margin: 0;
    line-height: 1.5;
  }
  .portal-facts strong {
    display: block;
    font-size: 2rem;
    color: #0052cc;
  }
  .portal-visit {
    display: inline-block;
    font-weight: 650;
    padding-block: 0.65rem;
  }
  .journal-snapshot {
    overflow-wrap: anywhere;
  }
  @media (min-width: 48rem) {
    .portal-facts {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`
