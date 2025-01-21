import {PublicFeatureFlags} from "@/rest/PublicFeatureFlags";
import {AdminFeatureFlags} from "@/rest/AdminFeatureFlags";
import {PublicAuth} from "@/rest/PublicAuth";
import {CommonAuth} from "@/rest/CommonAuth";
import nextConfig from "../../next.config";

const config = {
  baseURL: nextConfig.publicRuntimeConfig?.server,
  timeout: 30_000,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interceptor = async (config: any) => {
  const idToken = localStorage.getItem("token");
  if (idToken) {
    config.headers.Authorization = `Bearer ${idToken}`;
  }
  return config;
}

export const publicFeatureFlagService = new PublicFeatureFlags();
export const publicAuthService = new PublicAuth();

export const featureFlagService = new AdminFeatureFlags(config);
export const commonAuthService = new CommonAuth();

commonAuthService.instance.interceptors.request.use(interceptor);
featureFlagService.instance.interceptors.request.use(interceptor);