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

import { LoginResponseDto } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class CommonAuth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Common | Auth
   * @name LoginAuth
   * @summary Bearer token is not required for this endpoint.
   * @request POST:/common/auth/login
   * @secure
   */
  loginAuth = (params: RequestParams = {}) =>
    this.request<LoginResponseDto, any>({
      path: `/common/auth/login`,
      method: "POST",
      secure: true,
      ...params,
    });
}
