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

import { FeatureFlagRequestDto, FeatureFlagResponseDto, PageDataFeatureFlagResponseDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class AdminFeatureFlags<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name SearchFeatureFlagWithAdmin
   * @summary Required bearer token with admin role.
   * @request GET:/admin/feature-flags
   * @secure
   */
  searchFeatureFlagWithAdmin = (
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
      path: `/admin/feature-flags`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name Create
   * @summary Required bearer token with admin role.
   * @request POST:/admin/feature-flags
   * @secure
   */
  create = (data: FeatureFlagRequestDto, params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto, any>({
      path: `/admin/feature-flags`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name GetAllFeatureFlagWithAdmin
   * @summary Required bearer token with admin role.
   * @request GET:/admin/feature-flags/all
   * @secure
   */
  getAllFeatureFlagWithAdmin = (params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto[], any>({
      path: `/admin/feature-flags/all`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name ReloadAll
   * @summary Required bearer token with admin role.
   * @request GET:/admin/feature-flags/reload
   * @secure
   */
  reloadAll = (params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto[], any>({
      path: `/admin/feature-flags/reload`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name Remove
   * @summary Required bearer token with admin role.
   * @request DELETE:/admin/feature-flags/{id}
   * @secure
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto, any>({
      path: `/admin/feature-flags/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name FindById
   * @summary Required bearer token with admin role.
   * @request GET:/admin/feature-flags/{id}
   * @secure
   */
  findById = (id: string, params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto, any>({
      path: `/admin/feature-flags/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Admin | Feature Flags
   * @name Update
   * @summary Required bearer token with admin role.
   * @request PUT:/admin/feature-flags/{id}
   * @secure
   */
  update = (id: string, data: FeatureFlagRequestDto, params: RequestParams = {}) =>
    this.request<FeatureFlagResponseDto, any>({
      path: `/admin/feature-flags/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
