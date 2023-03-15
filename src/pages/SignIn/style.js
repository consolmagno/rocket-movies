import styled from 'styled-components'
import ImageSign from '../../assets/img_sign.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const SignInText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 134px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    line-height: 63px;
  }

  > p {
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 48px 0;
  }

  > form {
    display: grid;
    gap: 8px;
  }

  div:nth-child(3) {
    margin: 24px 0;
  }
`
export const Background = styled.div`
  flex: 1;
  background-image: url(${ImageSign});
  background-size: cover;
  opacity: 0.4;
`
