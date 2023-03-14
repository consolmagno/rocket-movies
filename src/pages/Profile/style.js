import styled from 'styled-components'

export const Container = styled.div`
  > header {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    height: 144px;
    padding: 54px 144px;
  }

  > form {
    display: grid;
    gap: 8px;
    max-width: 340px;
    margin: 0 auto;

    > div:nth-child(4) {
      margin-top: 16px;
    }
    > div:nth-child(6) {
      margin-top: 16px;
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: -100px auto 64px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    z-index: 1;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`
