import styled from 'styled-components'

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 20px;

  > svg {
    margin-right: 10px;
  }

  > svg:nth-child(-n + ${({ grade }) => grade}) {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`
