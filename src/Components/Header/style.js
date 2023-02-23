import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 116px;

  padding: 24px 124px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 64px;
    height: 64px;
    border: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-left: 16px;

    strong {
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      color: ${({ theme }) => theme.COLORS.OFFWHITE};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
