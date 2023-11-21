import styled, {css} from "styled-components";

interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`

background-color: ${({theme}) => theme.colors.gray700};

${({isMenuOpen}) => isMenuOpen
   ? css`
      width: 14.3rem;`
   : css`
      width: 6.1rem;`
}

position: absolute;
transition: 0.3s;
height: 91vh;

padding: 2rem 0;
overflow-y: hidden;

display: flex;
flex-direction: column;

button {
  background: none;
  width: 100%;
  border: none;
}

nav {
  flex: 1;
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  li {
    a{
      width: fit-content;
      position: relative;
      padding-left: 1.875rem;
      padding-right: 1.875rem;

      display: flex;
      align-items: center;
      gap: 2rem;
      margin-top: 5rem;

      svg {
        fill: ${({ theme }) => theme.colors.white};
        transition: fill 0.3s;
      }

      span {
        font-size: 1rem;
        transition: color 0.3s;
      }
      &.active {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          bottom: 0;
          transform: translateY(-50%);
          background-color: ${({theme}) => theme.colors.yellow};
          width: 5px;
          height: calc(100% + 10px);

          border-radius: 0 5px 5px 0;
        }
          svg {
            fill: ${({ theme }) => theme.colors.yellow}
          }
          span {
            color: ${({ theme }) => theme.colors.yellow}
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100vw;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    button {
      display: none;
    }

    nav {
      height: 100%;
      ul{
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: -34px;
      }
      li{
        flex-direction: column;
        padding: 0;

        svg{
          width: 3rem;
          height: 3rem;
        }
        span{
          display: none;
        }

        &.active{
          &::after{
              display: none
        }}
      }
    }
  }
`
