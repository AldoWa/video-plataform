import styled, { css } from "styled-components";

export const Button = styled.button<{ bg: 'transparent' | 'green'}>`
  ${({ bg, theme }) => css`
    background-color: ${bg === 'green' ? 'green' : 'transparent'};
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 15rem;
    color: ${bg === 'transparent' ? theme.color.product.blue : theme.color.base.white};
    font-weight: ${theme.font.weigth.bold};
    font-size: ${theme.font.sizes[14]};
    border-radius: 4px;
    border: ${bg === 'transparent' ? `1px solid ${theme.color.product.blue}` : 'none'};
    &:hover {
      background-color: ${bg === 'green' ? theme.color.product.green_dark : theme.color.product.blue};
      transition: background-color 0.3s ease-in-out;
      color: ${bg === 'transparent' ? theme.color.base.background : theme.color.base.white};
    }
  `}
`;
