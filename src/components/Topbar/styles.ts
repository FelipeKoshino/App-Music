import styled from "styled-components";

export const SearchContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: -39px;
color: black;
align-items: center;

@media (max-width: 720px){
  div {
    margin-right: 60%;
  }
}

div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  padding: 6px 12px;
  border: 0;
  background-color: #fff;
  transition:  all 0.2s ease;
  cursor: pointer;
}

section {
  display: flex;
  width: 21rem;
  height: 25px;
  flex-direction: column;
  z-index: 2;
  border: 1px solid gray;
}
section:empty {
  border: none;
}
input{
  width: 100%;
  border: none;
  margin-top: -9px;
  text-align: center;
}
`

export const DropdownRow = styled.div`
  cursor: pointer;
  text-align: start;
  margin-top: 8px;
  margin-left: 60%;
  background: transparent;
  color: #fff;
  width: 16rem;

@media (min-width: 721px){
  margin-left: 2%;
}
`

export const ListSongs = styled.div`
a {
  color: #4197fa;
  font-style: italic;
  background-color: #e4e4e4;
}
p span {
  color: #545454;
  font-style: bold;
  background-color: transparent;
}

@media (min-width: 721px){
height: 70vh;
width: 100vw;
max-width: 1000px;
margin-right: 11rem;
margin-left: 11rem;
margin-top: -3px;
color: black;

article {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 470px;
  position: relative;
  margin: 1rem auto;
  gap: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 15px -7px #000;
  border-radius: 1rem;
}
span {
  top: 0px;
  left: 0;
  padding: 8px;
  font-size: 1.1rem;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  background: #4197fa;
  opacity: 0.8;
  color: #fff;
}
img {
  width: 130px;
  height: 130px;
  margin-left: 170px;
  margin-right: 200px;
}
}

@media(max-width:720px){
    display: flex;
    flex-direction: column;
    color: black;
    margin-top: -9px;
    font-size: 19px;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

    margin: 2.6rem 9rem 3rem -7rem;
    gap: 0.6rem;

    background-color: #fff;
    box-shadow: 0 5px 15px -7px #000;
    border-radius: 1rem;
    }

    img {
        width: 140px;
        height: 140px;
        margin-top: -11px;
    }
    span {
      margin-top: -3px;
      padding: 8px;
      font-size: 1rem;
      background: #4197fa;
      opacity: 0.8;
      color: #fff;
    }
  }
`

export const ContentBox = styled.div`
height: 18%;
display: flex;
flex-direction: row;
justify-content: center;
border-radius: 0.65rem;

@media (max-width: 720px){
  background: #ebf2ed;
  margin-top: -1.6rem;
  margin-right: 11rem;
  margin-left: -3rem;
padding-bottow: 1rem;
}

@media (min-width: 721px){
  box-shadow: 0 6px 12px -7px yellow;
  margin-right: 23rem;
  margin-left: 23rem;
}
`
export const ChordBox = styled.div`
  height: 92px;
  padding: 1.9rem;
  opacity: 1;
  font-size: 1.8rem;
  background: #fff; &:hover{
    background: #4197fa;
    opacity: 0.8;
    font-weight: 600;
    color: white;
  }
  box-shadow: 0 5px 15px -7px #000;
  border: 2px solid transparent;
  margin: 7px 9px 7px 9px;

`
