import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  display: flex;
  list-style-type: none;
  align-items: center;
  padding: 0;
  li a {
    border-radius: 3px;
    cursor: pointer;
    color: #7C7C7C;
    font-weight: 600;
    padding: 2px 7px;
  }
  li.previous a,
  li.next a,
  li.break a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  li.previous p {
    margin-left: 8px;
  }
  li.next p {
    margin-right: 8px;
  }
  li.active a {
    background-color: #F54A48;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;