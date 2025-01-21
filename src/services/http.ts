import {PublicFeatureFlags} from "@/rest/PublicFeatureFlags";
import {AdminFeatureFlags} from "@/rest/AdminFeatureFlags";
import {PublicAuth} from "@/rest/PublicAuth";
import {CommonAuth} from "@/rest/CommonAuth";
import nextConfig from "../../next.config";

const config = {
  baseURL: nextConfig.publicRuntimeConfig?.server,
  timeout: 30_000,
}

const api = nextConfig.publicRuntimeConfig?.api ?? {};
const baseURL = `${api.server}${api.context}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interceptor = async (config: any) => {
  const idToken = localStorage.getItem("token");
  if (idToken) {
    config.headers.Authorization = `Bearer ${idToken}`;
  }
  config.baseURL = baseURL;
  return config;
}

export const publicFeatureFlagService = new PublicFeatureFlags({baseURL});
export const publicAuthService = new PublicAuth({baseURL});

export const featureFlagService = new AdminFeatureFlags(config);
export const commonAuthService = new CommonAuth(config);

commonAuthService.instance.interceptors.request.use(interceptor);
featureFlagService.instance.interceptors.request.use(interceptor);