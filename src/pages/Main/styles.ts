import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1px;
  justify-content: center;

  section{
    flex: 1;
    width: 100%;
    padding: 1rem 1.875rem;
    text-align: center;

    @media (max-width: 720px){
      width: 100vw;
      display: flex;
      flex-direction: column;
      padding-bottow: 8rem;
      align-items: center;
      img {
        margin-bottow: 2rem;
      }
      h1 {
        font-size: 21px
      }
    }
`
export const TopStyle = styled.nav`
  height: 300px;
  grid-area: top;
  margin-right: -8rem;
`

export const Footer = styled.footer`
  grid-area: footer;
`
