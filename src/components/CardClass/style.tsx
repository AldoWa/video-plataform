import { rem } from "@/utils/generateRem";
import styled, { css } from "styled-components";

interface Props {
  type: "released" | "blocked";
}

interface WrapperProps {
  selected?: boolean;
  disabled?: boolean;
}

export const Container = styled.div``

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, selected, disabled }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${theme.color.base.stroke_divider};
    padding: ${rem(16)};
    cursor: initial;
    ${!disabled && css`
      cursor: pointer;
      &:hover {
        background-color: ${theme.color.product.green_light};
        ${Title} {
          color: ${theme.color.base.white};
        }
        ${Text} {
          color: ${theme.color.base.white};
        }
        ${Type} {
          color: ${theme.color.base.white};
          border-color: ${theme.color.base.white};
        }
        &::after {
          border-right: 14px solid ${theme.color.product.green_light};
        }
      }
    `}
    ${selected && css`
      background-color: ${ theme.color.product.green };
      ${Text} {
        color: ${theme.color.base.white};
        & svg path {
          stroke: ${theme.color.base.white};
        }
      }
      ${Type} {
        color: ${theme.color.base.white};
        border-color: ${theme.color.base.white};
      }
      ${Title} {
        color: ${theme.color.base.white};
      }
      position: relative;
      &::after {
        content: '';
        position: absolute;
        border-bottom: 14px solid transparent;
        border-left: 14px solid transparent;
        border-right: 14px solid ${theme.color.product.green};
        border-top: 14px solid transparent;
        left: -27px;
        top: 50%; 
        transform: translateY(-50%);
      }
    `}
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
    text-align: start;
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