import { rem } from "@/utils/generateRem";
import styled, { css } from "styled-components";

export const TitleVideo = styled.h1`
  ${({ theme }) => css`
    color: ${theme.color.base.white};
    font-weight: ${theme.font.weigth.bold};
    font-size: ${theme.font.sizes[24]};
  `}
`

export const DetailsVideo = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.base.text};
    font-weight: ${theme.font.weigth.regular};
    font-size: ${theme.font.sizes[16]};
    line-height: 160%;
    margin-top: ${rem(16)};
  `}
`

export const WrapperVideoDetails = styled.div`
  display: flex;
  gap: ${rem(60)};
  padding: ${rem(32)};
`

export const WrapperButtonDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  gap: ${rem(16)};
`