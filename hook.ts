if (typeof globalThis.Temporal === "undefined") {
  const { Temporal, toTemporalInstant } = await import("temporal-polyfill");

  // @ts-expect-error - polyfilling globalThis
  globalThis.Temporal = Temporal;

  // @ts-expect-error - patching Date.prototype
  Date.prototype.toTemporalInstant = toTemporalInstant;
}

export {};
