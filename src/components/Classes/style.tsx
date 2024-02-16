import { rem } from "@/utils/generateRem";
import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes[24]};
    font-weight: ${theme.font.weigth.bold};
    color: ${theme.color.base.white};
  `}
` 

export const Wrapper = styled.aside`
  padding: ${rem(24)};
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(32)};
`;

export const Diviser = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.base.stroke_divider};
  margin: ${rem(24)} 0;
`
