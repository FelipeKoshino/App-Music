import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 2.44rem;

  font-size: ${({theme}) => theme.fontSize['4xl']};
  font-weight: 500;

  &::before {
    background: ${({theme}) => theme.colors.white};
    width: 42px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 4px;

    @media (max-width: 720px) {
      font-size: ${({theme}) => theme.fontSize['3xl']};
      justify-content: center;

      &::before {
        display: none;
      }
    }
  }
`
