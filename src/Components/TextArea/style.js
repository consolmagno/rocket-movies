import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  height: 275px;

  > textarea {
    background-color: transparent;
    border: none;
    padding: 16px 19px;
    resize: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
  }
`

