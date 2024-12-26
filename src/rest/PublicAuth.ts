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

import { LoginRequestDto, LoginResponseDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class PublicAuth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Public | Auth
   * @name Login
   * @summary Bearer token is not required for this endpoint.
   * @request POST:/public/auth/login
   * @secure
   */
  login = (data: LoginRequestDto, params: RequestParams = {}) =>
    this.request<LoginResponseDto, any>({
      path: `/public/auth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
