import {PublicFeatureFlags} from "@/rest/PublicFeatureFlags";
import {AdminFeatureFlags} from "@/rest/AdminFeatureFlags";

const config = {
  baseURL: `http://localhost:8080/api/v1`,
  timeout: 30_000,
}

export const publicFeatureFlagService = new PublicFeatureFlags();

export const featureFlagService = new AdminFeatureFlags(config);

featureFlagService.instance.interceptors.request.use(async (config) => {
  const idToken = localStorage.getItem("token");
  if (idToken) {
    config.headers.Authorization = `Bearer ${idToken}`;
  }
  return config;
});