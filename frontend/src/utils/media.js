import api from "../api/axios";

const DEFAULT_BACKEND_ORIGIN = "http://localhost:8000";

function resolveBackendOrigin() {
  const baseURL = api?.defaults?.baseURL;
  if (!baseURL || typeof baseURL !== "string") return DEFAULT_BACKEND_ORIGIN;

  try {
    return new URL(baseURL).origin;
  } catch {
    return DEFAULT_BACKEND_ORIGIN;
  }
}

const BACKEND_ORIGIN = resolveBackendOrigin();

export function toStorageUrl(pathOrUrl) {
  if (!pathOrUrl) return null;
  if (typeof pathOrUrl !== "string") return null;

  // Already a full URL or data/blob URI
  if (/^(https?:\/\/|data:|blob:)/i.test(pathOrUrl)) return pathOrUrl;

  const trimmed = pathOrUrl.replace(/^\/+/, "");

  // Already contains storage prefix
  if (trimmed.startsWith("storage/")) {
    return `${BACKEND_ORIGIN}/${trimmed}`;
  }

  if (trimmed.startsWith("public/storage/")) {
    return `${BACKEND_ORIGIN}/${trimmed.replace(/^public\//, "")}`;
  }

  return `${BACKEND_ORIGIN}/storage/${trimmed}`;
}
