import styled from 'styled-components'

export const Container = styled.section`
  margin: 24px 0;
`
export const Title = styled.span`
  > h2 {
    color: ${({ theme }) => theme.COLORS.OFFWHITE};
    font-size: 36px;
    font-weight: 500;

    margin-bottom: 24px;
  }
`
