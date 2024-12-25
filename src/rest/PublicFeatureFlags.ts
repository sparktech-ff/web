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

import { FeatureFlagResponseDto, PageDataFeatureFlagResponseDto } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PublicFeatureFlags<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Public | Feature Flags
   * @name Search
   * @summary Bearer token is not required for this endpoint.
   * @request GET:/public/feature-flags
   * @secure
   */
  search = (
    query?: {
      filter?: string[];
      order?: string[];
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 12
       */
      limit?: number;
      allData?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageDataFeatureFlagResponseDto, any>({
      path: `/public/feature-flags`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Public | Feature Flags
   * @name GetAll
   * @summary Bearer token is not required for this endpoint.
   * @request GET:/public/feature-flags/all
   * @secure
   */
  getAll = (params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto[], any>({
      path: `/public/feature-flags/all`,
      method: "GET",
      secure: true,
      ...params,
    });
}
