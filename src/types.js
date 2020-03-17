// @flow
import type { ComponentType } from 'react';

export type Attrs = Array<Function>;

export type Interpolation =
  | ((executionContext: Object) => Interpolation)
  | string
  | ComponentType<*>
  | Array<Interpolation>;

export type RuleSet = Array<Interpolation>;

export type Styles = Array<string> | Object | ((executionContext: Object) => Interpolation);

export type Target = string | ComponentType<*>;

export type NameGenerator = (hash: number) => string;

export type CSSConstructor = (
  strings: Array<string>,
  ...interpolations: Array<Interpolation>
) => RuleSet;
export type StyleSheet = {
  create: Function,
};

export type Flattener = (
  chunks: Array<Interpolation>,
  executionContext: ?Object,
  styleSheet: ?Object
) => Array<Interpolation>;

export type Stringifier = {
  (rules: string, selector: string, prefix: ?string, componentId: ?string): Array<string>,
  hash: string,
};

export type RealmScope = string;
