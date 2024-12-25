/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FeatureFlagRequestDto {
  description?: string;
  mode?: string;
  name: string;
  users?: string[];
}

export interface FeatureFlagResponseDto {
  /** @format date-time */
  created?: string;
  description?: string;
  id?: string;
  mode?: string;
  name?: string;
  /** @format date-time */
  updated?: string;
  users?: string[];
}

export interface PageDataFeatureFlagResponseDto {
  items?: FeatureFlagResponseDto[];
  /** @format int64 */
  total?: number;
}
