import styled from 'styled-components'

export const Container = styled.div`
  width: 1121px;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  padding: 32px;
  display: grid;
  gap: 15px;
  border-radius: 16px;

  > h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > .text_card {
    display: -webkit-box;
    width: 1057px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > .tags {
    display: inline;
  }
`
