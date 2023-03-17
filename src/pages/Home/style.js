import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.div`
  max-width: 1100px;
  margin: 51px auto;

  > header {
    grid-area: header;
    width: 100%;
    display: grid;
    grid-template-columns: 910px 207px;
    margin-bottom: 41px;

    > h1 {
      font-weight: 400;
      font-size: 32px;
    }
  }

  > main {
    grid-area: content;
    /* width: 1137px;
    height: 717px;
    overflow-y: auto;
    overflow-x: visible; */

    > .cards {
      display: grid;
      gap: 24px;
    }
  }
`

export const NewMovie = styled(Link)`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  cursor: pointer;
`
