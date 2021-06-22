import styled from 'styled-components'
import { Loading } from '../../styles/animation'

export const LoaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 47px;
  height: 47px; 
  & div {
    position: absolute;
    margin: auto;
    width: 6px;
    height: 6px;
    background: #fcf;
    border-radius: 50%;
    ${Loading()} 
  }
  &.lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
  }
  &.lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
  }
  &.lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
  }
  &.lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
  }
  &.lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
  }
  &.lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
  }
  &.lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
 }
 &.lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
 }
 &.lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
 } 
 &.lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
 }
 &.lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
 }
 &.lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
 }
`
