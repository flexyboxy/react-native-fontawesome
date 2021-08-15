import { StyleProp, ViewStyle } from "react-native";
import { Transform, IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export type FontAwesomeIconStyle = StyleProp<ViewStyle> & {
  color?: string;
};

export interface Props {
  icon: IconProp;
  /**
   * @deprecated
   */
  height?: number;
  /**
   * @deprecated
   */
  width?: number;
  size?: number;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number;
  mask?: IconProp;
  transform?: string | Transform;
  style?: FontAwesomeIconStyle;
  svgObjectMap?: SvgObjectMapping;
}

export interface SvgObjectMapping {
  svg?: React.Component;
  path?: React.Component;
  rect?: React.Component;
  defs?: React.Component;
  mask?: React.Component;
  g?: React.Component;
  clipPath?: React.Component;
}

export function FontAwesomeIcon(props: Props): JSX.Element;
