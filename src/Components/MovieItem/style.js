import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : `none`};
  border-radius: 10px;

  height: 56px;
  gap: 16px;
  padding: 16px;

  > input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
