import {
  GET_LEFT_POSITION,
  GET_RIGHT_POSITION,
  GET_LEFT_WEIGHT,
  GET_RIGHT_WEIGHT,
  GET_HEIGHT
} from "./types";

export function getLeftPosition(data) {
  return {
    type: GET_LEFT_POSITION,
    data
  };
}
export function getRightPosition(data) {
  return {
    type: GET_RIGHT_POSITION,
    data
  };
}
export function getLeftWeight(data) {
  return {
    type: GET_LEFT_WEIGHT,
    data
  };
}
export function getRightWeight(data) {
  return {
    type: GET_RIGHT_WEIGHT,
    data
  };
}
export function getInnerHeight(data) {
  return {
    type: GET_HEIGHT,
    data
  };
}