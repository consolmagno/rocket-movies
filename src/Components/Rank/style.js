import styled from 'styled-components'

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 20px;

  > svg:nth-child(-n + 4) {
    fill: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 10px;
  }
`
