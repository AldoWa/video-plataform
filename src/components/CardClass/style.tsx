import { rem } from "@/utils/generateRem";
import styled, { css } from "styled-components";

interface Props {
  type: "released" | "blocked";
}

export const Container = styled.div``

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${theme.color.base.stroke_divider};
    padding: ${rem(16)};

    &:hover {
      border-color: ${theme.color.product.green};
      transition: border-color 0.3s ease-in-out;
    }
    border-radius: ${rem(4)};
  `}
`

export const Text = styled.span<Props>`
  ${({ theme, type }) => css`
      display: flex;
      align-items: center;
      gap: ${rem(10)};
      font-size: ${theme.font.sizes[14]};
      font-weight: ${theme.font.weigth.semi_bold};
      color: ${type === 'released' ? theme.color.product.blue : theme.color.product.warning};
      & svg {
        font-size: ${rem(20)};

        & path {
          stroke: currentColor;
        }
      }
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    margin-top: ${rem(16)};
    font-weight: ${theme.font.weigth.bold};
    color: ${theme.color.base.text};
  `}
`

export const Type = styled.span<Props>`
  ${({ theme, type }) => css`
      border: 1px solid ${theme.color.product.green_light};
      color: ${type === 'released' ? theme.color.base.white :theme.color.product.green_light };
      padding: ${rem(2)} ${rem(8)};
      border-radius: ${rem(4)};
      font-size: ${theme.font.sizes[12]};
      font-weight: ${theme.font.weigth.bold};
      text-transform: uppercase;
  `}
`

export const Data = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes[16]};
    color: ${theme.color.base.text_apoio};
    margin-bottom: ${rem(8)};
  `}
`