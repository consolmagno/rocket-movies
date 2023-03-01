import styled from 'styled-components'

export const Container = styled.div`
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

  background-color: ${({ theme, isPink }) =>
    isPink ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, isPink }) =>
    isPink ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
`
