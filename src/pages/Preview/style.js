import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;
  }
`

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  > p {
    text-align: justify;
    margin-bottom: 16px;
  }
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`
export const Tags = styled.div`
  margin-bottom: 40px;
`
