import styled from 'styled-components'

export const Container = styled.section`
  margin: 24px 0;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  margin-bottom: 24px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.OFFWHITE};
    font-size: 36px;
    font-weight: 500;
  }
`
