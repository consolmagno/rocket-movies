import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`
