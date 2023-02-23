import styled from 'styled-components'

export const Container = styled.span`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.OFFWHITE};
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  margin-right: 8px;
`
