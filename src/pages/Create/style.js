import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 1100px;
  margin: 40px auto;

  > header {
    margin-bottom: 24px;

    > h2 {
      color: ${({ theme }) => theme.COLORS.OFFWHITE};
      font-size: 36px;
      font-weight: 500;
    }
  }

  > div {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  .marker {
    display: flex;
    gap: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 16px;
    border-radius: 8px;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`
