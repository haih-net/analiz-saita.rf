import { styled } from '@linaria/react'

export const ConversationStyled = styled.section`
  & {
    padding: 2.5rem 1.25rem;
  }
  @media (min-width: 48rem) {
    & {
      padding: 3.5rem 2.5rem;
    }
  }

  & p {
    max-width: 42rem;
    color: #424854;
  }
  & h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(1.8rem, 3.3vw, 3rem);
    line-height: 1.12;
    letter-spacing: -0.04em;
    max-width: 25ch;
  }
  & .chat-status {
    font-size: 0.85rem;
    border-left: 2px solid #ccd0d8;
    padding-left: 1rem;
    margin-top: 1.5rem;
  }
`
