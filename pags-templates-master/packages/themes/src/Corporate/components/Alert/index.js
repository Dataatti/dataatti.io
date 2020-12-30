import { css } from 'styled-components';

export default {
  main: css`
    display: flex;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: calc(100% - 4rem);
    max-width: 500px;
    font-size: 18px;
    padding: 2rem;
    background-color: ${props => props.theme.colors.muted};
    border-radius: 16px;
    z-index: 99999;

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  `,
  InfoIcon: {
    main: css`
      font-size: 32px;
      margin-right: 1.5rem;
      color: ${props => props.theme.colors.brand};
    `,
  },
  Button: {
    main: css`
      background: none;
      border: none;
      margin-bottom: auto;
      cursor: pointer;
      color: inherit;
      padding: 0;
      font-size: 32px;
      outline: none;
    `,
  },
};
