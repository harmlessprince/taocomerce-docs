import {
  DEFAULT_MODELS_SECTION_LABEL,
  HTTP_METHODS,
  OpenAPIDocumentSchema,
  ScalarCopyBackdrop_default,
  ScalarCopyButton_default,
  ScalarFormInput_default,
  Type,
  XAdditionalPropertiesName,
  XBadges,
  XCodeSamples,
  XDefaultScopes,
  XDisabled,
  XDisplayName,
  XDraftExamples,
  XEnumDescriptions,
  XEnumVarNames,
  XExamples,
  XGlobal,
  XInternal,
  XOrder,
  XPostResponse,
  XPreRequest,
  XScalarActiveEnvironment,
  XScalarAuthUrl,
  XScalarCookies,
  XScalarCredentialsLocation,
  XScalarDisableParameters,
  XScalarEnvironments,
  XScalarIcon,
  XScalarIgnore,
  XScalarIsDirty,
  XScalarLinks,
  XScalarOrder,
  XScalarOriginalDocumentHash,
  XScalarOriginalSourceUrl,
  XScalarRegistryMeta,
  XScalarSdkInstallation,
  XScalarSecurityBody,
  XScalarSecurityQuery,
  XScalarSelectedContentType,
  XScalarSelectedServer,
  XScalarStability,
  XScalarTokenUrl,
  XScalarWatchMode,
  XTagGroups,
  XTags,
  XTokenName,
  XVariable,
  XusePkce,
  any,
  array,
  boolean,
  coerce,
  coerceValue,
  convertToLocalRef,
  createAuthStore,
  createDetectChangesProxy,
  createMagicProxy,
  createOverridesProxy,
  deepClone,
  escapeJsonPointer,
  evaluate,
  extensions,
  fn,
  generateHash,
  getId,
  getRaw,
  getSchemas,
  getValueAtPath,
  getValueByPath,
  intersection,
  isAsyncApiDocument,
  isLocalRef,
  isObject,
  isOpenApiDocument,
  isPollutionKey,
  lazy,
  literal,
  mergeObjects,
  nullable,
  number,
  object,
  optional,
  preventPollution,
  record,
  redirectToProxy,
  safeAssign,
  slugify,
  string,
  syncParametersForPathChange,
  traverseAsyncApiDocument,
  traverseDocument,
  union,
  unknown,
  unpackProxyObject,
  useBindCx,
  useClipboard,
  value_exports
} from "./chunk-GMLJFOMH.js";
import {
  browser_default,
  parse
} from "./chunk-OFXDZRG6.js";
import {
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createVNode,
  defineComponent,
  mergeModels,
  mergeProps,
  onMounted,
  openBlock,
  reactive,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  useModel,
  vModelDynamic,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-UEFGQ2CT.js";
import {
  __publicField
} from "./chunk-3KOD66RD.js";

// node_modules/@scalar/schemas/dist/api-reference/api-reference-plugin.js
var openApiExtensionSchema = object({
  name: string({
    typeComment: "Name of specification extension property. Has to start with `x-`."
  }),
  component: unknown({
    typeComment: "Vue component to render the specification extension"
  }),
  renderer: optional(unknown({
    typeComment: "Custom renderer to render the specification extension"
  }))
});
var viewComponentSchema = object({
  component: unknown({
    typeComment: "Vue component to render in the view"
  }),
  renderer: optional(unknown({
    typeComment: "Custom renderer to render the view component (e.g., ReactRenderer)"
  })),
  props: optional(record(string(), any()), {
    typeComment: "Additional props to pass to the component"
  }),
  sidebar: optional(object({
    show: boolean(),
    label: string()
  }), {
    typeComment: "Sidebar configuration. Set show: true to display in sidebar."
  })
});
var viewsSchema = object({
  "content.start": optional(array(viewComponentSchema), {
    typeComment: "Components to render before the Introduction/Info section"
  }),
  "content.end": optional(array(viewComponentSchema), {
    typeComment: "Components to render at specific views in the API Reference"
  })
});
var lifecycleHooksSchema = object({
  onInit: optional(fn()),
  onConfigChange: optional(fn()),
  onDestroy: optional(fn())
});
var apiReferencePluginSchema = fn();

// node_modules/@scalar/schemas/dist/api-reference/base-configuration.js
var externalUrlsSchema = object({
  dashboardUrl: string({ default: "https://dashboard.scalar.com" }),
  registryUrl: string({ default: "https://registry.scalar.com" }),
  proxyUrl: string({ default: "https://proxy.scalar.com" }),
  apiBaseUrl: string({ default: "https://api.scalar.com" })
}, {
  typeComment: "External service URLs used by Scalar packages"
});
var baseConfigurationSchema = object({
  title: optional(string(), {
    typeComment: "The title of the OpenAPI document."
  }),
  slug: optional(string(), {
    typeComment: "The slug of the OpenAPI document used in the URL. If none is passed, the title will be used. If no title is used, it will just use the index."
  }),
  authentication: optional(any(), {
    typeComment: "Prefill authentication"
  }),
  baseServerURL: optional(string(), {
    typeComment: "Base URL for the API server"
  }),
  hideClientButton: boolean({
    default: false,
    typeComment: "Whether to hide the client button"
  }),
  proxyUrl: optional(string(), {
    typeComment: "URL to a request proxy for the API client"
  }),
  oauth2RedirectUri: optional(string(), {
    typeComment: "Default OAuth 2.0 redirect URI used to prefill auth flows in the API client."
  }),
  searchHotKey: optional(union([
    literal("a"),
    literal("b"),
    literal("c"),
    literal("d"),
    literal("e"),
    literal("f"),
    literal("g"),
    literal("h"),
    literal("i"),
    literal("j"),
    literal("k"),
    literal("l"),
    literal("m"),
    literal("n"),
    literal("o"),
    literal("p"),
    literal("q"),
    literal("r"),
    literal("s"),
    literal("t"),
    literal("u"),
    literal("v"),
    literal("w"),
    literal("x"),
    literal("y"),
    literal("z")
  ]), {
    typeComment: "Key used with CTRL/CMD to open the search modal (defaults to 'k' e.g. CMD+k)"
  }),
  servers: optional(array(any()), {
    typeComment: "List of OpenAPI server objects"
  }),
  showSidebar: boolean({
    default: true,
    typeComment: "Whether to show the sidebar"
  }),
  showDeveloperTools: union([literal("localhost"), literal("always"), literal("never")], {
    typeComment: "Whether and when to show the developer tools."
  }),
  showToolbar: union([literal("localhost"), literal("always"), literal("never")], {
    typeComment: "@deprecated Use showDeveloperTools instead"
  }),
  operationTitleSource: union([literal("summary"), literal("path")], {
    typeComment: "Whether to use the operation summary or the operation path for the sidebar and search"
  }),
  theme: union([
    literal("default"),
    literal("alternate"),
    literal("moon"),
    literal("purple"),
    literal("solarized"),
    literal("bluePlanet"),
    literal("deepSpace"),
    literal("saturn"),
    literal("kepler"),
    literal("elysiajs"),
    literal("fastify"),
    literal("mars"),
    literal("laserwave"),
    literal("none")
  ], {
    typeComment: "A string to use one of the color presets"
  }),
  _integration: optional(union([
    literal("adonisjs"),
    literal("astro"),
    literal("docusaurus"),
    literal("dotnet"),
    literal("elysiajs"),
    literal("express"),
    literal("fastapi"),
    literal("fastify"),
    literal("go"),
    literal("hono"),
    literal("html"),
    literal("laravel"),
    literal("litestar"),
    literal("nestjs"),
    literal("nextjs"),
    literal("nitro"),
    literal("nuxt"),
    literal("platformatic"),
    literal("react"),
    literal("rust"),
    literal("svelte"),
    literal("vue"),
    nullable()
  ]), {
    typeComment: "Integration type identifier"
  }),
  onRequestSent: optional(fn(), {
    typeComment: "onRequestSent is fired when a request is sent"
  }),
  persistAuth: boolean({
    default: false,
    typeComment: "Whether to persist auth to local storage"
  }),
  telemetry: boolean({
    default: true,
    typeComment: "Enables / disables telemetry"
  }),
  externalUrls: externalUrlsSchema
});

// node_modules/@scalar/schemas/dist/api-reference/source-configuration.js
var contentSchema = union([string(), nullable(), record(string(), any()), fn()]);
var sourceConfigurationSchema = object({
  default: boolean({ default: false }),
  url: optional(string(), {
    typeComment: "URL to an OpenAPI/Swagger document"
  }),
  content: optional(contentSchema, {
    typeComment: "Directly embed the OpenAPI document. Can be a string, object, function returning an object, or null. It is recommended to pass a URL instead of content."
  }),
  title: optional(string(), {
    typeComment: "The title of the OpenAPI document. Used for the page title and the document name in the dropdown. With multiple `sources`, set this per source."
  }),
  slug: optional(string(), {
    typeComment: "The slug of the OpenAPI document used in the URL. If none is passed, the title will be used. With multiple `sources`, set this per source."
  }),
  spec: optional(object({
    url: optional(string()),
    content: optional(contentSchema)
  }), {
    typeComment: "@deprecated Use `url` and `content` on the top level instead."
  }),
  agent: optional(object({
    key: optional(string()),
    disabled: optional(boolean()),
    hideAddApi: optional(boolean(), {
      typeComment: "When true, hide the control to add more APIs in the agent chat. Only preloaded/registry documents are shown; the public API list is not offered."
    })
  }), {
    typeComment: "Agent Scalar configuration"
  })
});

// node_modules/@scalar/schemas/dist/api-reference/api-reference-configuration.js
var apiReferenceConfigurationSchema = intersection([
  baseConfigurationSchema,
  sourceConfigurationSchema,
  object({
    layout: union([literal("modern"), literal("classic")], {
      typeComment: "The layout to use for the references"
    }),
    proxy: optional(string(), {
      typeComment: "@deprecated Use proxyUrl instead"
    }),
    fetch: optional(fn(), {
      typeComment: "@deprecated Use `customFetch` instead."
    }),
    customFetch: optional(fn(), {
      typeComment: "Custom fetch function used both when loading the OpenAPI document and when sending requests from the API client. Can be used to add custom headers, attach credentials (for example `credentials: 'include'`), handle auth, etc."
    }),
    plugins: optional(array(apiReferencePluginSchema), {
      typeComment: "Plugins for the API reference"
    }),
    pluginUrls: optional(array(string()), {
      typeComment: "URLs of ESM modules that provide additional plugins for the API reference. Each module is loaded with a dynamic `import()` before the API reference mounts, and its default export is registered as a plugin. Unlike `plugins`, this option is JSON-serializable, so integrations that pass their configuration as JSON can load plugins without replacing the whole bundle. Only supported by the standalone browser build (`Scalar.createApiReference`)."
    }),
    isEditable: boolean({
      default: false,
      typeComment: "Allows the user to inject an editor for the spec"
    }),
    hideModels: boolean({
      default: false,
      typeComment: "Whether to show models in the sidebar, search, and content."
    }),
    modelsSectionLabel: optional(union([literal("Models"), literal("Schemas"), string()]), {
      typeComment: "Label for the components.schemas section in the sidebar, content, and search. Use `Schemas` for OpenAPI terminology."
    }),
    localization: optional(object({
      locale: optional(string()),
      // `auto` is listed first so that coerce falls back to it for invalid input,
      // matching the `.catch('auto')` behavior of the Zod schema in @scalar/types.
      direction: optional(union([literal("auto"), literal("ltr"), literal("rtl")])),
      translations: optional(record(string(), any()))
    }), {
      typeComment: "API Reference UI localization. Select a built-in locale, override labels, and control LTR/RTL rendering."
    }),
    documentDownloadType: union([literal("both"), literal("yaml"), literal("json"), literal("direct"), literal("none")], {
      typeComment: "Sets the file type of the document to download, set to `none` to hide the download button"
    }),
    hideDownloadButton: optional(boolean(), {
      typeComment: "@deprecated Use `documentDownloadType: 'none'` instead"
    }),
    hideTestRequestButton: boolean({
      default: false,
      typeComment: 'Whether to show the "Test Request" button'
    }),
    hideSearch: boolean({
      default: false,
      typeComment: "Whether to show the sidebar search bar"
    }),
    showOperationId: boolean({
      default: false,
      typeComment: "Whether to show the operationId"
    }),
    darkMode: optional(boolean(), {
      typeComment: "Whether dark mode is on or off initially (light mode)"
    }),
    forceDarkModeState: optional(union([literal("dark"), literal("light")]), {
      typeComment: "forceDarkModeState makes it always this state no matter what"
    }),
    hideDarkModeToggle: boolean({
      default: false,
      typeComment: "Whether to show the dark mode toggle"
    }),
    metaData: optional(any(), {
      typeComment: "If used, passed data will be added to the HTML header. @see https://unhead.unjs.io/usage/composables/use-seo-meta"
    }),
    favicon: optional(string(), {
      typeComment: "Path to a favicon image"
    }),
    hiddenClients: optional(
      // The client/target names stay permissive strings at runtime, so `coerce` leaves unknown
      // values untouched (a real union would rewrite them to the first literal). The casts only
      // tighten the type so config authors get autocomplete on the known ids.
      union([
        record(string(), union([boolean(), array(string())])),
        array(string()),
        literal(true)
      ]),
      {
        typeComment: "List of httpsnippet clients to hide from the clients menu. By default hides Unirest, pass `[]` to show all clients"
      }
    ),
    defaultHttpClient: optional(
      // The keys stay permissive strings at runtime, so `coerce` leaves an unknown value
      // untouched (a real union would rewrite it to the first client). The cast only tightens
      // the type, so config authors get autocomplete and an error on typos like the display
      // title 'Fetch' (the client id is the lowercase 'fetch').
      object({
        targetKey: string(),
        clientKey: string()
      }),
      {
        typeComment: "Determine the HTTP client that is selected by default"
      }
    ),
    customCss: optional(string(), {
      typeComment: "Custom CSS to be added to the page"
    }),
    onServerChange: optional(fn(), {
      typeComment: "onServerChange is fired on selected server change"
    }),
    onDocumentSelect: optional(fn(), {
      typeComment: "onDocumentSelect is fired when the config is selected"
    }),
    onLoaded: optional(fn(), {
      typeComment: "Callback fired when the reference is fully loaded"
    }),
    onBeforeRequest: optional(fn(), {
      typeComment: "Fired before the outbound request is built; callback receives a mutable request builder. Experimental API."
    }),
    onRequestBuilt: optional(fn(), {
      typeComment: "Fired right before the outbound request is sent; callback receives the exact fetch Request that goes over the wire. Experimental API."
    }),
    onShowMore: optional(fn(), {
      typeComment: 'onShowMore is fired when the user clicks the "Show more" button on the references'
    }),
    onSidebarClick: optional(fn(), {
      typeComment: "onSidebarClick is fired when the user clicks on a sidebar item"
    }),
    pathRouting: optional(object({
      basePath: string()
    }), {
      typeComment: "Route using paths instead of hashes, your server MUST support this. @experimental"
    }),
    mcp: optional(object({
      name: optional(string(), {
        typeComment: "Display name for the MCP server"
      }),
      url: optional(string(), {
        typeComment: "URL of the MCP server"
      }),
      disabled: optional(boolean(), {
        typeComment: "When true, disables the MCP integration"
      })
    }), {
      typeComment: "MCP (Model Context Protocol) configuration. When provided, enables MCP integration with the given name and url."
    }),
    generateHeadingSlug: optional(fn(), {
      typeComment: "Customize the heading portion of the hash"
    }),
    generateModelSlug: optional(fn(), {
      typeComment: "Customize the model portion of the hash"
    }),
    generateTagSlug: optional(fn(), {
      typeComment: "Customize the tag portion of the hash"
    }),
    generateOperationSlug: optional(fn(), {
      typeComment: "Customize the operation portion of the hash"
    }),
    generateWebhookSlug: optional(fn(), {
      typeComment: "Customize the webhook portion of the hash"
    }),
    setPageTitle: optional(fn(), {
      typeComment: "Customize the browser tab title for the section currently in view"
    }),
    redirect: optional(fn(), {
      typeComment: "To handle redirects, pass a function that receives the current path/hash and passes that to history.replaceState"
    }),
    withDefaultFonts: boolean({
      default: true,
      typeComment: "Whether to include default fonts"
    }),
    defaultOpenFirstTag: boolean({
      default: true,
      typeComment: "Whether to expand the first tag in the sidebar when no specific URL target is present"
    }),
    defaultOpenAllTags: boolean({
      default: false,
      typeComment: "Whether to expand all tags by default. Warning: this can cause performance issues on big documents"
    }),
    expandAllModelSections: boolean({
      default: false,
      typeComment: "Whether to expand all models by default. Warning: this can cause performance issues on big documents"
    }),
    expandAllResponses: boolean({
      default: false,
      typeComment: "Whether to expand all responses by default. Warning: this can cause performance issues on big documents"
    }),
    expandAllSchemaProperties: boolean({
      default: false,
      typeComment: "Whether to expand all nested schema properties by default. The Show/Hide Child Attributes toggle remains available so nested sections can still be collapsed manually. Warning: this can cause performance issues on big documents"
    }),
    tagsSorter: optional(union([literal("alpha"), fn()]), {
      typeComment: "Function to sort tags"
    }),
    operationsSorter: optional(union([literal("alpha"), literal("method"), fn()]), {
      typeComment: "Function to sort operations"
    }),
    orderSchemaPropertiesBy: union([literal("alpha"), literal("preserve")], {
      typeComment: "Order the schema properties by"
    }),
    orderRequiredPropertiesFirst: boolean({
      default: true,
      typeComment: "Sort the schema properties by required ones first"
    })
  })
]);
var OLD_PROXY_URL = "https://api.scalar.com/request-proxy";
var NEW_PROXY_URL = "https://proxy.scalar.com";
var apiReferenceConfigurationWithSourceSchema = (rawInput) => {
  var _a, _b;
  const input = coerce(apiReferenceConfigurationSchema, rawInput);
  if (input.hideDownloadButton) {
    console.warn(`[DEPRECATED] You're using the deprecated 'hideDownloadButton' attribute. Use 'documentDownloadType: 'none'' instead.`);
    input.documentDownloadType = "none";
  }
  if ((_a = input.spec) == null ? void 0 : _a.url) {
    console.warn(`[DEPRECATED] You're using the deprecated 'spec.url' attribute. Remove the spec prefix and move the 'url' attribute to the top level.`);
    input.url = input.spec.url;
    delete input.spec;
  }
  if ((_b = input.spec) == null ? void 0 : _b.content) {
    console.warn(`[DEPRECATED] You're using the deprecated 'spec.content' attribute. Remove the spec prefix and move the 'content' attribute to the top level.`);
    input.content = input.spec.content;
    delete input.spec;
  }
  if (input.proxy) {
    console.warn(`[DEPRECATED] You're using the deprecated 'proxy' attribute. Use 'proxyUrl' instead.`);
    if (!input.proxyUrl) {
      input.proxyUrl = input.proxy;
    }
    delete input.proxy;
  }
  if (input.fetch) {
    console.warn(`[DEPRECATED] You're using the deprecated 'fetch' attribute. Use 'customFetch' instead.`);
    if (!input.customFetch) {
      input.customFetch = input.fetch;
    }
    delete input.fetch;
  }
  if (input.proxyUrl === OLD_PROXY_URL) {
    console.warn(`[DEPRECATED] Warning: configuration.proxyUrl points to our old proxy (${OLD_PROXY_URL}).`);
    console.warn(`[DEPRECATED] We are overwriting the value and use the new proxy URL (${NEW_PROXY_URL}) instead.`);
    console.warn(`[DEPRECATED] Action Required: You should manually update your configuration to use the new URL (${NEW_PROXY_URL}). Read more: https://github.com/scalar/scalar`);
    input.proxyUrl = NEW_PROXY_URL;
  }
  if (input.showToolbar && input.showToolbar !== "localhost") {
    console.warn(`[DEPRECATED] You're using the deprecated 'showToolbar' attribute. Use 'showDeveloperTools' instead.`);
    input.showDeveloperTools = input.showToolbar;
    delete input.showToolbar;
  }
  input.modelsSectionLabel ?? (input.modelsSectionLabel = DEFAULT_MODELS_SECTION_LABEL);
  return input;
};

// node_modules/@scalar/schemas/dist/api-reference/html-rendering-configuration.js
var htmlRenderingConfigurationSchema = object({
  /**
   * The URL to the Scalar API Reference JS CDN.
   *
   * Use this to pin a specific version of the Scalar API Reference.
   *
   * @default https://cdn.jsdelivr.net/npm/@scalar/api-reference
   *
   * @example https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.25.122
   */
  cdn: string({
    default: "https://cdn.jsdelivr.net/npm/@scalar/api-reference"
  }),
  pageTitle: string({
    default: "Scalar API Reference"
  }),
  /**
   * A Content Security Policy (CSP) nonce to apply to the generated inline `<script>` and `<style>`
   * tags so the API Reference can render under a strict CSP without `unsafe-inline`.
   *
   * Generate a fresh value per request and match it in your `script-src` and `style-src` directives.
   */
  nonce: optional(string())
});

// node_modules/@scalar/asyncapi-upgrader/dist/1.2-to-2.6/upgrade-from-one-to-two.js
var ASYNCAPI_VERSION = "2.6.0";
var ROOT_CHANNEL = "/";
function upgradeFromOneToTwo(originalDocument) {
  const document = originalDocument;
  if (!isObject(document) || typeof document.asyncapi !== "string" || !document.asyncapi.startsWith("1.")) {
    return document;
  }
  document.asyncapi = ASYNCAPI_VERSION;
  upgradeServers(document);
  upgradeChannels(document);
  upgradeStream(document);
  upgradeEvents(document);
  return document;
}
function upgradeServers(document) {
  if (!Array.isArray(document.servers)) {
    return;
  }
  const result = {};
  const usedKeys = /* @__PURE__ */ new Set();
  for (const [index, server] of document.servers.entries()) {
    if (!isObject(server)) {
      continue;
    }
    const upgraded = {};
    for (const [field, value] of Object.entries(server)) {
      if (field === "scheme") {
        upgraded.protocol = value;
      } else if (field === "schemeVersion") {
        upgraded.protocolVersion = value;
      } else {
        upgraded[field] = value;
      }
    }
    const key = uniqueServerKey(typeof server.description === "string" ? server.description : "", index, usedKeys);
    usedKeys.add(key);
    result[key] = upgraded;
  }
  document.servers = result;
}
function uniqueServerKey(description, index, usedKeys) {
  const base = slugify(description) || `server-${index}`;
  if (!usedKeys.has(base)) {
    return base;
  }
  let suffix = 2;
  while (usedKeys.has(`${base}-${suffix}`)) {
    suffix += 1;
  }
  return `${base}-${suffix}`;
}
function upgradeChannels(document) {
  if (!isObject(document.topics)) {
    if (typeof document.baseTopic === "string") {
      delete document.baseTopic;
    }
    return;
  }
  const baseTopic = typeof document.baseTopic === "string" ? document.baseTopic : "";
  const channels = {};
  for (const [topic, item] of Object.entries(document.topics)) {
    if (!isObject(item)) {
      continue;
    }
    const channelName = baseTopic ? `${baseTopic}.${topic}` : topic;
    const channel = {};
    for (const [field, value] of Object.entries(item)) {
      if (field === "parameters") {
        const parameters = upgradeChannelParameters(value);
        if (parameters) {
          channel.parameters = parameters;
        }
      } else if (field === "publish" || field === "subscribe") {
        channel[field] = { message: value };
      } else {
        channel[field] = value;
      }
    }
    channels[channelName] = channel;
  }
  document.channels = channels;
  delete document.topics;
  delete document.baseTopic;
}
function upgradeChannelParameters(parameters) {
  if (!Array.isArray(parameters)) {
    return void 0;
  }
  const result = {};
  for (const parameter of parameters) {
    if (!isObject(parameter)) {
      continue;
    }
    if (typeof parameter.$ref === "string") {
      const key = parameter.$ref.split("/").pop() ?? "";
      if (key) {
        result[key] = { $ref: parameter.$ref };
      }
      continue;
    }
    if (typeof parameter.name !== "string") {
      continue;
    }
    const { name, ...rest } = parameter;
    result[name] = rest;
  }
  return result;
}
function upgradeStream(document) {
  if (!isObject(document.stream)) {
    return;
  }
  const channel = {};
  if (Array.isArray(document.stream.read)) {
    channel.subscribe = { message: { oneOf: document.stream.read } };
  }
  if (Array.isArray(document.stream.write)) {
    channel.publish = { message: { oneOf: document.stream.write } };
  }
  const channels = isObject(document.channels) ? document.channels : {};
  channels[ROOT_CHANNEL] = channel;
  document.channels = channels;
  delete document.stream;
}
function upgradeEvents(document) {
  if (!isObject(document.events)) {
    return;
  }
  const channel = {};
  if (Array.isArray(document.events.receive)) {
    channel.subscribe = { message: { oneOf: document.events.receive } };
  }
  if (Array.isArray(document.events.send)) {
    channel.publish = { message: { oneOf: document.events.send } };
  }
  const channels = isObject(document.channels) ? document.channels : {};
  channels[ROOT_CHANNEL] = channel;
  document.channels = channels;
  delete document.events;
}

// node_modules/@scalar/asyncapi-upgrader/dist/2.6-to-3.0/upgrade-from-two-to-three.js
var ASYNCAPI_VERSION2 = "3.0.0";
function upgradeFromTwoToThree(originalDocument) {
  const document = originalDocument;
  if (!isObject(document) || typeof document.asyncapi !== "string" || !document.asyncapi.startsWith("2.")) {
    return document;
  }
  document.asyncapi = ASYNCAPI_VERSION2;
  upgradeComponentOAuthScopes(document);
  upgradeServers2(document);
  upgradeChannelsAndOperations(document);
  return document;
}
function upgradeServers2(document) {
  if (!isObject(document.servers)) {
    return;
  }
  const securitySchemes = getSecuritySchemes(document);
  for (const server of Object.values(document.servers)) {
    if (!isObject(server)) {
      continue;
    }
    if (typeof server.url === "string") {
      const { host, pathname } = splitUrl(server.url);
      server.host = host;
      if (pathname) {
        server.pathname = pathname;
      }
      delete server.url;
    }
    if (Array.isArray(server.security)) {
      server.security = upgradeSecurity(server.security, securitySchemes);
    }
  }
}
function splitUrl(url) {
  const schemeMatch = url.match(/^[a-zA-Z][a-zA-Z0-9+\-.]*:\/\/(.*)$/);
  const rest = schemeMatch ? schemeMatch[1] : url;
  const slashIndex = rest.indexOf("/");
  if (slashIndex === -1) {
    return { host: rest, pathname: "" };
  }
  return { host: rest.slice(0, slashIndex), pathname: rest.slice(slashIndex) };
}
function upgradeSecurity(security, securitySchemes) {
  return security.map((requirement) => upgradeSecurityRequirement(requirement, securitySchemes)).filter((entry) => entry !== void 0);
}
function upgradeSecurityRequirement(requirement, securitySchemes) {
  if (!isObject(requirement)) {
    return void 0;
  }
  const [entry] = Object.entries(requirement);
  if (!entry) {
    return void 0;
  }
  const [name, scopes] = entry;
  const scheme = securitySchemes[name];
  if (isObject(scheme) && scheme.type === "oauth2" && Array.isArray(scopes)) {
    return { ...scheme, scopes };
  }
  return { $ref: `#/components/securitySchemes/${name}` };
}
function getSecuritySchemes(document) {
  if (!isObject(document.components) || !isObject(document.components.securitySchemes)) {
    return {};
  }
  const schemes = {};
  for (const [name, value] of Object.entries(document.components.securitySchemes)) {
    if (isObject(value)) {
      schemes[name] = value;
    }
  }
  return schemes;
}
function upgradeComponentOAuthScopes(document) {
  if (!isObject(document.components) || !isObject(document.components.securitySchemes)) {
    return;
  }
  for (const scheme of Object.values(document.components.securitySchemes)) {
    if (!isObject(scheme) || scheme.type !== "oauth2" || !isObject(scheme.flows)) {
      continue;
    }
    for (const flow of Object.values(scheme.flows)) {
      if (isObject(flow) && "scopes" in flow) {
        flow.availableScopes = flow.scopes;
        delete flow.scopes;
      }
    }
  }
}
function upgradeChannelsAndOperations(document) {
  if (!isObject(document.channels)) {
    return;
  }
  const securitySchemes = getSecuritySchemes(document);
  const channels = {};
  const operations = {};
  const usedChannelIds = /* @__PURE__ */ new Set();
  const usedOperationKeys = /* @__PURE__ */ new Set();
  for (const [path, channel] of Object.entries(document.channels)) {
    if (!isObject(channel)) {
      continue;
    }
    const channelId = uniqueKey(slugifyChannelPath(path), usedChannelIds);
    const newChannel = { address: path };
    const messages = {};
    for (const [field, value] of Object.entries(channel)) {
      if (field === "publish" || field === "subscribe" || field === "parameters") {
        continue;
      }
      if (field === "servers" && Array.isArray(value)) {
        newChannel.servers = value.map((name) => ({ $ref: `#/servers/${name}` }));
        continue;
      }
      newChannel[field] = value;
    }
    if (isObject(channel.parameters)) {
      newChannel.parameters = channel.parameters;
    }
    const publishMessages = collectMessages(channel.publish, messages);
    const subscribeMessages = collectMessages(channel.subscribe, messages);
    newChannel.messages = messages;
    channels[channelId] = newChannel;
    if (isObject(channel.publish)) {
      const opKey = uniqueKey(operationKey(channel.publish, "receive", channelId), usedOperationKeys);
      operations[opKey] = buildOperation(channel.publish, "receive", channelId, publishMessages, securitySchemes);
    }
    if (isObject(channel.subscribe)) {
      const opKey = uniqueKey(operationKey(channel.subscribe, "send", channelId), usedOperationKeys);
      operations[opKey] = buildOperation(channel.subscribe, "send", channelId, subscribeMessages, securitySchemes);
    }
  }
  document.channels = channels;
  document.operations = operations;
}
function collectMessages(operation, channelMessages) {
  if (!isObject(operation) || !isObject(operation.message)) {
    return [];
  }
  const message = operation.message;
  const items = Array.isArray(message.oneOf) ? message.oneOf : [message];
  const ids = [];
  for (const item of items) {
    if (!isObject(item)) {
      continue;
    }
    const id = messageId(item, channelMessages);
    channelMessages[id] = item;
    ids.push(id);
  }
  return ids;
}
function messageId(message, existingMessages) {
  if (typeof message.$ref === "string") {
    const last = message.$ref.split("/").pop();
    if (last) {
      return last;
    }
  }
  if (typeof message.name === "string" && message.name) {
    return message.name;
  }
  let index = 0;
  while (`message-${index}` in existingMessages) {
    index += 1;
  }
  return `message-${index}`;
}
function operationKey(operation, action, channelId) {
  if (typeof operation.operationId === "string" && operation.operationId) {
    return operation.operationId;
  }
  return `${action}-${channelId}`;
}
function buildOperation(operation, action, channelId, messageIds, securitySchemes) {
  const result = { action, channel: { $ref: `#/channels/${channelId}` } };
  for (const [field, value] of Object.entries(operation)) {
    if (field === "message" || field === "operationId") {
      continue;
    }
    if (field === "security" && Array.isArray(value)) {
      result.security = upgradeSecurity(value, securitySchemes);
      continue;
    }
    result[field] = value;
  }
  result.messages = messageIds.map((id) => ({ $ref: `#/channels/${channelId}/messages/${id}` }));
  return result;
}
function slugifyChannelPath(value) {
  return slugify(value.replace(/[^a-zA-Z0-9]+/g, " "));
}
function uniqueKey(base, usedKeys) {
  if (!usedKeys.has(base)) {
    usedKeys.add(base);
    return base;
  }
  let suffix = 2;
  while (usedKeys.has(`${base}-${suffix}`)) {
    suffix += 1;
  }
  const key = `${base}-${suffix}`;
  usedKeys.add(key);
  return key;
}

// node_modules/@scalar/asyncapi-upgrader/dist/3.0-to-3.1/upgrade-from-three-to-three-one.js
var ASYNCAPI_VERSION3 = "3.1.0";
var COMPONENT_MESSAGE_REF = /^#\/components\/messages\/(.+)$/;
function upgradeFromThreeToThreeOne(originalDocument) {
  const document = originalDocument;
  if (!isObject(document) || typeof document.asyncapi !== "string" || !document.asyncapi.startsWith("3.0")) {
    return document;
  }
  document.asyncapi = ASYNCAPI_VERSION3;
  rewriteOperationMessageRefs(document);
  return document;
}
function rewriteOperationMessageRefs(document) {
  if (!isObject(document.operations) || !isObject(document.channels)) {
    return;
  }
  const channels = document.channels;
  for (const operation of Object.values(document.operations)) {
    if (!isObject(operation)) {
      continue;
    }
    rewriteMessageList(operation.messages, operation.channel, channels);
    if (isObject(operation.reply)) {
      rewriteMessageList(operation.reply.messages, operation.reply.channel ?? operation.channel, channels);
    }
  }
}
function rewriteMessageList(messageList, channelRef, channels) {
  if (!Array.isArray(messageList)) {
    return;
  }
  const channelId = extractChannelId(channelRef);
  if (!channelId) {
    return;
  }
  const channel = channels[channelId];
  if (!isObject(channel)) {
    return;
  }
  for (let i = 0; i < messageList.length; i += 1) {
    const entry = messageList[i];
    if (!isObject(entry) || typeof entry.$ref !== "string") {
      continue;
    }
    const [, messageName] = entry.$ref.match(COMPONENT_MESSAGE_REF) ?? [];
    if (!messageName) {
      continue;
    }
    registerChannelMessage(channel, messageName, entry.$ref);
    messageList[i] = { $ref: `#/channels/${channelId}/messages/${messageName}` };
  }
  dedupeRefs(messageList);
}
function dedupeRefs(list) {
  const seen = /* @__PURE__ */ new Set();
  let writeIndex = 0;
  for (const entry of list) {
    if (isObject(entry) && typeof entry.$ref === "string") {
      if (seen.has(entry.$ref)) {
        continue;
      }
      seen.add(entry.$ref);
    }
    list[writeIndex] = entry;
    writeIndex += 1;
  }
  list.length = writeIndex;
}
function extractChannelId(channelRef) {
  if (!isObject(channelRef) || typeof channelRef.$ref !== "string") {
    return void 0;
  }
  const match = channelRef.$ref.match(/^#\/channels\/([^/]+)$/);
  return match ? match[1] : void 0;
}
function registerChannelMessage(channel, name, componentRef) {
  if (!isObject(channel.messages)) {
    channel.messages = {};
  }
  const messages = channel.messages;
  if (!(name in messages)) {
    messages[name] = { $ref: componentRef };
  }
}

// node_modules/@scalar/asyncapi-upgrader/dist/upgrade.js
function upgrade(value) {
  const asyncapi26 = upgradeFromOneToTwo(value);
  const asyncapi30 = upgradeFromTwoToThree(asyncapi26);
  return upgradeFromThreeToThreeOne(asyncapi30);
}

// node_modules/@scalar/helpers/dist/testing/measure.js
var measureSync = (name, fn2) => {
  const start = performance.now();
  const result = fn2();
  const end = performance.now();
  const duration = Math.round(end - start);
  console.info(`${name}: ${duration} ms`);
  return result;
};
var measureAsync = async (name, fn2) => {
  const start = performance.now();
  const result = await fn2();
  const end = performance.now();
  const duration = Math.round(end - start);
  console.info(`${name}: ${duration} ms`);
  return result;
};

// node_modules/@scalar/json-magic/dist/helpers/is-http-url.js
function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

// node_modules/@scalar/json-magic/dist/helpers/is-json-object.js
function isJsonObject(value) {
  if (!/^\s*(\{)/.test(value.slice(0, 500))) {
    return false;
  }
  try {
    const val = JSON.parse(value);
    return isObject(val);
  } catch {
    return false;
  }
}

// node_modules/@scalar/json-magic/dist/helpers/is-yaml.js
function isYaml(value) {
  return /^\s*(?:-\s*)?[\w\-]+\s*:\s*.+\n.*/.test(value);
}

// node_modules/@scalar/json-magic/dist/helpers/is-file-path.js
function isFilePath(value) {
  return !isHttpUrl(value) && !isYaml(value) && !isJsonObject(value);
}

// node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs
var _lazyMatch = () => {
  var __lib__ = (() => {
    var m = Object.defineProperty, V = Object.getOwnPropertyDescriptor, G = Object.getOwnPropertyNames, T = Object.prototype.hasOwnProperty, q = (r, e3) => {
      for (var n in e3) m(r, n, { get: e3[n], enumerable: true });
    }, H = (r, e3, n, a) => {
      if (e3 && typeof e3 == "object" || typeof e3 == "function") for (let t of G(e3)) !T.call(r, t) && t !== n && m(r, t, { get: () => e3[t], enumerable: !(a = V(e3, t)) || a.enumerable });
      return r;
    }, J = (r) => H(m({}, "__esModule", { value: true }), r), w = {};
    q(w, { default: () => re });
    var A = (r) => Array.isArray(r), d = (r) => typeof r == "function", Q = (r) => r.length === 0, W = (r) => typeof r == "number", K = (r) => typeof r == "object" && r !== null, X = (r) => r instanceof RegExp, b = (r) => typeof r == "string", h = (r) => r === void 0, Y = (r) => {
      const e3 = /* @__PURE__ */ new Map();
      return (n) => {
        const a = e3.get(n);
        if (a) return a;
        const t = r(n);
        return e3.set(n, t), t;
      };
    }, rr = (r, e3, n = {}) => {
      const a = { cache: {}, input: r, index: 0, indexMax: 0, options: n, output: [] };
      if (v(e3)(a) && a.index === r.length) return a.output;
      throw new Error(`Failed to parse at index ${a.indexMax}`);
    }, i = (r, e3) => A(r) ? er(r, e3) : b(r) ? ar(r, e3) : nr(r, e3), er = (r, e3) => {
      const n = {};
      for (const a of r) {
        if (a.length !== 1) throw new Error(`Invalid character: "${a}"`);
        const t = a.charCodeAt(0);
        n[t] = true;
      }
      return (a) => {
        const t = a.index, o = a.input;
        for (; a.index < o.length && o.charCodeAt(a.index) in n; ) a.index += 1;
        const u = a.index;
        if (u > t) {
          if (!h(e3) && !a.options.silent) {
            const s = a.input.slice(t, u), c = d(e3) ? e3(s, o, String(t)) : e3;
            h(c) || a.output.push(c);
          }
          a.indexMax = Math.max(a.indexMax, a.index);
        }
        return true;
      };
    }, nr = (r, e3) => {
      const n = r.source, a = r.flags.replace(/y|$/, "y"), t = new RegExp(n, a);
      return g((o) => {
        t.lastIndex = o.index;
        const u = t.exec(o.input);
        if (u) {
          if (!h(e3) && !o.options.silent) {
            const s = d(e3) ? e3(...u, o.input, String(o.index)) : e3;
            h(s) || o.output.push(s);
          }
          return o.index += u[0].length, o.indexMax = Math.max(o.indexMax, o.index), true;
        } else return false;
      });
    }, ar = (r, e3) => (n) => {
      if (n.input.startsWith(r, n.index)) {
        if (!h(e3) && !n.options.silent) {
          const t = d(e3) ? e3(r, n.input, String(n.index)) : e3;
          h(t) || n.output.push(t);
        }
        return n.index += r.length, n.indexMax = Math.max(n.indexMax, n.index), true;
      } else return false;
    }, C = (r, e3, n, a) => {
      const t = v(r);
      return g(_(M((o) => {
        let u = 0;
        for (; u < n; ) {
          const s = o.index;
          if (!t(o) || (u += 1, o.index === s)) break;
        }
        return u >= e3;
      })));
    }, tr = (r, e3) => C(r, 0, 1), f = (r, e3) => C(r, 0, 1 / 0), x = (r, e3) => {
      const n = r.map(v);
      return g(_(M((a) => {
        for (let t = 0, o = n.length; t < o; t++) if (!n[t](a)) return false;
        return true;
      })));
    }, l = (r, e3) => {
      const n = r.map(v);
      return g(_((a) => {
        for (let t = 0, o = n.length; t < o; t++) if (n[t](a)) return true;
        return false;
      }));
    }, M = (r, e3 = false) => {
      const n = v(r);
      return (a) => {
        const t = a.index, o = a.output.length, u = n(a);
        return (!u || e3) && (a.index = t, a.output.length !== o && (a.output.length = o)), u;
      };
    }, _ = (r, e3) => {
      const n = v(r);
      return n;
    }, g = /* @__PURE__ */ (() => {
      let r = 0;
      return (e3) => {
        const n = v(e3), a = r += 1;
        return (t) => {
          var _a;
          var o;
          if (t.options.memoization === false) return n(t);
          const u = t.index, s = (o = t.cache)[a] || (o[a] = /* @__PURE__ */ new Map()), c = s.get(u);
          if (c === false) return false;
          if (W(c)) return t.index = c, true;
          if (c) return t.index = c.index, ((_a = c.output) == null ? void 0 : _a.length) && t.output.push(...c.output), true;
          {
            const Z = t.output.length;
            if (n(t)) {
              const D = t.index, U = t.output.length;
              if (U > Z) {
                const ee = t.output.slice(Z, U);
                s.set(u, { index: D, output: ee });
              } else s.set(u, D);
              return true;
            } else return s.set(u, false), false;
          }
        };
      };
    })(), E = (r) => {
      let e3;
      return (n) => (e3 || (e3 = v(r())), e3(n));
    }, v = Y((r) => {
      if (d(r)) return Q(r) ? E(r) : r;
      if (b(r) || X(r)) return i(r);
      if (A(r)) return x(r);
      if (K(r)) return l(Object.values(r));
      throw new Error("Invalid rule");
    }), P = "abcdefghijklmnopqrstuvwxyz", ir = (r) => {
      let e3 = "";
      for (; r > 0; ) {
        const n = (r - 1) % 26;
        e3 = P[n] + e3, r = Math.floor((r - 1) / 26);
      }
      return e3;
    }, O = (r) => {
      let e3 = 0;
      for (let n = 0, a = r.length; n < a; n++) e3 = e3 * 26 + P.indexOf(r[n]) + 1;
      return e3;
    }, S = (r, e3) => {
      if (e3 < r) return S(e3, r);
      const n = [];
      for (; r <= e3; ) n.push(r++);
      return n;
    }, or = (r, e3, n) => S(r, e3).map((a) => String(a).padStart(n, "0")), R = (r, e3) => S(O(r), O(e3)).map(ir), p = (r) => r, z = (r) => ur((e3) => rr(e3, r, { memoization: false }).join("")), ur = (r) => {
      const e3 = {};
      return (n) => e3[n] ?? (e3[n] = r(n));
    }, sr = i(/^\*\*\/\*$/, ".*"), cr = i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]+)$/, (r, e3, n) => `.*${e3 ? "" : "(?:^|/)"}${n.replaceAll(".", "\\.")}`), lr = i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]*)\{([ a-zA-Z0-9._-]+(?:,[ a-zA-Z0-9._-]+)*)\}$/, (r, e3, n, a) => `.*${e3 ? "" : "(?:^|/)"}${n.replaceAll(".", "\\.")}(?:${a.replaceAll(",", "|").replaceAll(".", "\\.")})`), y = i(/\\./, p), pr = i(/[$.*+?^(){}[\]\|]/, (r) => `\\${r}`), vr = i(/./, p), hr = i(/^(?:!!)*!(.*)$/, (r, e3) => `(?!^${L(e3)}$).*?`), dr = i(/^(!!)+/, ""), fr = l([hr, dr]), xr = i(/\/(\*\*\/)+/, "(?:/.+/|/)"), gr = i(/^(\*\*\/)+/, "(?:^|.*/)"), mr = i(/\/(\*\*)$/, "(?:/.*|$)"), _r = i(/\*\*/, ".*"), j = l([xr, gr, mr, _r]), Sr = i(/\*\/(?!\*\*\/)/, "[^/]*/"), yr = i(/\*/, "[^/]*"), N = l([Sr, yr]), k = i("?", "[^/]"), $r = i("[", p), wr = i("]", p), Ar = i(/[!^]/, "^/"), br = i(/[a-z]-[a-z]|[0-9]-[0-9]/i, p), Cr = i(/[$.*+?^(){}[\|]/, (r) => `\\${r}`), Mr = i(/[^\]]/, p), Er = l([y, Cr, br, Mr]), B = x([$r, tr(Ar), f(Er), wr]), Pr = i("{", "(?:"), Or = i("}", ")"), Rr = i(/(\d+)\.\.(\d+)/, (r, e3, n) => or(+e3, +n, Math.min(e3.length, n.length)).join("|")), zr = i(/([a-z]+)\.\.([a-z]+)/, (r, e3, n) => R(e3, n).join("|")), jr = i(/([A-Z]+)\.\.([A-Z]+)/, (r, e3, n) => R(e3.toLowerCase(), n.toLowerCase()).join("|").toUpperCase()), Nr = l([Rr, zr, jr]), I = x([Pr, Nr, Or]), kr = i("{", "(?:"), Br = i("}", ")"), Ir = i(",", "|"), Fr = i(/[$.*+?^(){[\]\|]/, (r) => `\\${r}`), Lr = i(/[^}]/, p), Zr = E(() => F), Dr = l([j, N, k, B, I, Zr, y, Fr, Ir, Lr]), F = x([kr, f(Dr), Br]), Ur = f(l([sr, cr, lr, fr, j, N, k, B, I, F, y, pr, vr])), Vr = Ur, Gr = z(Vr), L = Gr, Tr = i(/\\./, p), qr = i(/./, p), Hr = i(/\*\*\*+/, "*"), Jr = i(/([^/{[(!])\*\*/, (r, e3) => `${e3}*`), Qr = i(/(^|.)\*\*(?=[^*/)\]}])/, (r, e3) => `${e3}*`), Wr = f(l([Tr, Hr, Jr, Qr, qr])), Kr = Wr, Xr = z(Kr), Yr = Xr, $ = (r, e3) => {
      const n = Array.isArray(r) ? r : [r];
      if (!n.length) return false;
      const a = n.map($.compile), t = n.every((s) => /(\/(?:\*\*)?|\[\/\])$/.test(s)), o = e3.replace(/[\\\/]+/g, "/").replace(/\/$/, t ? "/" : "");
      return a.some((s) => s.test(o));
    };
    $.compile = (r) => new RegExp(`^${L(Yr(r))}$`, "s");
    var re = $;
    return J(w);
  })();
  return __lib__.default || __lib__;
};
var _match;
var zeptomatch = (path, pattern) => {
  if (!_match) {
    _match = _lazyMatch();
    _lazyMatch = null;
  }
  return _match(path, pattern);
};
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
var _EXTNAME_RE = /.(\.[^./]+|\.)$/;
var _PATH_ROOT_RE = /^[/\\]|^[a-zA-Z]:[/\\]/;
var sep = "/";
var normalize = function(path) {
  if (path.length === 0) {
    return ".";
  }
  path = normalizeWindowsPath(path);
  const isUNCPath = path.match(_UNC_REGEX);
  const isPathAbsolute = isAbsolute(path);
  const trailingSeparator = path[path.length - 1] === "/";
  path = normalizeString(path, !isPathAbsolute);
  if (path.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path += "/";
  }
  if (_DRIVE_LETTER_RE.test(path)) {
    path += "/";
  }
  if (isUNCPath) {
    if (!isPathAbsolute) {
      return `//./${path}`;
    }
    return `//${path}`;
  }
  return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
var join = function(...segments) {
  let path = "";
  for (const seg of segments) {
    if (!seg) {
      continue;
    }
    if (path.length > 0) {
      const pathTrailing = path[path.length - 1] === "/";
      const segLeading = seg[0] === "/";
      const both = pathTrailing && segLeading;
      if (both) {
        path += seg.slice(1);
      } else {
        path += pathTrailing || segLeading ? seg : `/${seg}`;
      }
    } else {
      path += seg;
    }
  }
  return normalize(path);
};
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
var toNamespacedPath = function(p) {
  return normalizeWindowsPath(p);
};
var extname = function(p) {
  if (p === "..") return "";
  const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
  return match && match[1] || "";
};
var relative = function(from, to) {
  const _from = resolve(from).replace(_ROOT_FOLDER_RE, "$1").split("/");
  const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
  if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) {
    return _to.join("/");
  }
  const _fromCopy = [..._from];
  for (const segment of _fromCopy) {
    if (_to[0] !== segment) {
      break;
    }
    _from.shift();
    _to.shift();
  }
  return [..._from.map(() => ".."), ..._to].join("/");
};
var dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
var format = function(p) {
  const ext = p.ext ? p.ext.startsWith(".") ? p.ext : `.${p.ext}` : "";
  const segments = [p.root, p.dir, p.base ?? (p.name ?? "") + ext].filter(
    Boolean
  );
  return normalizeWindowsPath(
    p.root ? resolve(...segments) : segments.join("/")
  );
};
var basename = function(p, extension) {
  const segments = normalizeWindowsPath(p).split("/");
  let lastSegment = "";
  for (let i = segments.length - 1; i >= 0; i--) {
    const val = segments[i];
    if (val) {
      lastSegment = val;
      break;
    }
  }
  return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};
var parse2 = function(p) {
  var _a, _b;
  const root = ((_b = (_a = _PATH_ROOT_RE.exec(p)) == null ? void 0 : _a[0]) == null ? void 0 : _b.replace(/\\/g, "/")) || "";
  const base = basename(p);
  const extension = extname(base);
  return {
    root,
    dir: dirname(p),
    base,
    ext: extension,
    name: base.slice(0, base.length - extension.length)
  };
};
var matchesGlob = (path, pattern) => {
  return zeptomatch(pattern, normalize(path));
};
var _path = {
  __proto__: null,
  basename,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  matchesGlob,
  normalize,
  normalizeString,
  parse: parse2,
  relative,
  resolve,
  sep,
  toNamespacedPath
};

// node_modules/pathe/dist/index.mjs
var delimiter = (() => {
  var _a;
  return ((_a = globalThis.process) == null ? void 0 : _a.platform) === "win32" ? ";" : ":";
})();
var _platforms = { posix: void 0, win32: void 0 };
var mix = (del = delimiter) => {
  return new Proxy(_path, {
    get(_, prop) {
      if (prop === "delimiter") return del;
      if (prop === "posix") return posix;
      if (prop === "win32") return win32;
      return _platforms[prop] || _path[prop];
    }
  });
};
var posix = mix(":");
var win32 = mix(";");

// node_modules/@scalar/json-magic/dist/helpers/resolve-reference-path.js
var resolveReferencePath = (base, relativePath) => {
  if (isHttpUrl(relativePath)) {
    return relativePath;
  }
  if (isHttpUrl(base)) {
    const baseUrl = new URL(base);
    baseUrl.pathname = posix.posix.resolve("/", posix.dirname(baseUrl.pathname), relativePath);
    return baseUrl.toString();
  }
  return posix.resolve(posix.dirname(base), relativePath);
};

// node_modules/@scalar/json-magic/dist/helpers/unescape-json-pointer.js
function unescapeJsonPointer(uri) {
  return decodeURI(uri.replace(/~1/g, "/").replace(/~0/g, "~"));
}

// node_modules/@scalar/json-magic/dist/helpers/get-segments-from-path.js
function getSegmentsFromPath(path) {
  return (
    // /paths/~1test
    path.split("/").slice(1).map(unescapeJsonPointer)
  );
}

// node_modules/@scalar/json-magic/dist/helpers/set-value-at-path.js
function setValueAtPath(obj, path, value) {
  if (path === "") {
    throw new Error("Cannot set value at root ('') pointer");
  }
  const parts = getSegmentsFromPath(path);
  parts.forEach((part) => preventPollution(part));
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    const key = parts[i];
    const isLast = i === parts.length - 1;
    const nextKey = parts[i + 1];
    const shouldBeArray = /^\d+$/.test(nextKey ?? "");
    if (isLast) {
      current[key] = value;
    } else {
      if (!(key in current) || typeof current[key] !== "object") {
        current[key] = shouldBeArray ? [] : {};
      }
      current = current[key];
    }
  }
}

// node_modules/@scalar/json-magic/dist/helpers/to-relative-path.js
var toRelativePath = (input, base) => {
  if (isHttpUrl(input) && isHttpUrl(base)) {
    const inputUrl = new URL(input);
    const baseUrl = new URL(base);
    if (inputUrl.origin !== baseUrl.origin) {
      return input;
    }
    const baseDir2 = posix.dirname(posix.posix.resolve("/", baseUrl.pathname));
    const inputPath2 = posix.posix.resolve("/", inputUrl.pathname);
    return posix.posix.relative(baseDir2, inputPath2);
  }
  if (isHttpUrl(base)) {
    const baseUrl = new URL(base);
    const baseDir2 = posix.dirname(posix.posix.resolve("/", baseUrl.pathname));
    baseUrl.pathname = posix.posix.relative(baseDir2, posix.posix.resolve("/", input));
    return baseUrl.toString();
  }
  if (isHttpUrl(input)) {
    return input;
  }
  const baseDir = posix.dirname(posix.resolve(base));
  const inputPath = posix.resolve(input);
  return posix.relative(baseDir, inputPath);
};

// node_modules/@scalar/json-magic/dist/bundle/value-generator.js
function getHash(value) {
  const hashHex = generateHash(value);
  const hash = hashHex.substring(0, 7);
  return hash.match(/^\d+$/) ? "a" + hash.substring(1) : hash;
}
async function generateUniqueValue(compress, value, compressedToValue, prevCompressedValue, depth = 0) {
  const MAX_DEPTH = 100;
  if (depth >= MAX_DEPTH) {
    throw "Can not generate unique compressed values";
  }
  const compressedValue = await compress(prevCompressedValue ?? value);
  if (compressedToValue[compressedValue] !== void 0 && compressedToValue[compressedValue] !== value) {
    return generateUniqueValue(compress, value, compressedToValue, compressedValue, depth + 1);
  }
  compressedToValue[compressedValue] = value;
  return compressedValue;
}
var uniqueValueGeneratorFactory = (compress, compressedToValue) => {
  const valueToCompressed = Object.fromEntries(Object.entries(compressedToValue).map(([key, value]) => [value, key]));
  return {
    /**
     * Generates a unique compressed value for the given input string.
     * First checks if a compressed value already exists in the cache.
     * If not, generates a new unique compressed value and stores it in the cache.
     *
     * @param value - The original string value to compress
     * @returns A Promise that resolves to the compressed string value
     *
     * @example
     * const generator = uniqueValueGeneratorFactory(compress, {})
     * const compressed = await generator.generate('example.com/schema.json')
     * // Returns a unique compressed value like 'example'
     */
    generate: async (value) => {
      const cache = valueToCompressed[value];
      if (cache) {
        return cache;
      }
      const generatedValue = await generateUniqueValue(compress, value, compressedToValue);
      const compressedValue = generatedValue.match(/^\d+$/) ? `a${generatedValue}` : generatedValue;
      valueToCompressed[value] = compressedValue;
      return compressedValue;
    }
  };
};

// node_modules/@scalar/json-magic/dist/bundle/bundle.js
var hasRef = (value) => isObject(value) && "$ref" in value && typeof value["$ref"] === "string";
function isLocalRef2(value) {
  return value.startsWith("#");
}
function resolveContents(value, plugins) {
  const plugin = plugins.find((p) => p.validate(value));
  if (plugin) {
    return plugin.exec(value);
  }
  return Promise.resolve({
    ok: false
  });
}
function prefixInternalRef(input, prefix) {
  if (!isLocalRef2(input)) {
    throw "Please provide an internal ref";
  }
  return `#/${prefix.map(escapeJsonPointer).join("/")}${input.substring(1)}`;
}
function prefixInternalRefRecursive(input, prefix) {
  if (Array.isArray(input)) {
    input.forEach((el) => prefixInternalRefRecursive(el, prefix));
    return;
  }
  if (!isObject(input)) {
    return;
  }
  Object.values(input).forEach((el) => prefixInternalRefRecursive(el, prefix));
  if (typeof input === "object" && "$ref" in input && typeof input["$ref"] === "string") {
    const ref2 = input["$ref"];
    if (!isLocalRef2(ref2)) {
      return;
    }
    input["$ref"] = prefixInternalRef(ref2, prefix);
  }
}
var resolveAndCopyReferences = (targetDocument, sourceDocument, referencePath, externalRefsKey, documentKey, bundleLocalRefs = false, processedNodes = /* @__PURE__ */ new Set()) => {
  const referencedValue = getValueByPath(sourceDocument, getSegmentsFromPath(referencePath)).value;
  if (processedNodes.has(referencedValue)) {
    return;
  }
  processedNodes.add(referencedValue);
  setValueAtPath(targetDocument, referencePath, referencedValue);
  const traverse2 = (node) => {
    if (!node || typeof node !== "object") {
      return;
    }
    if ("$ref" in node && typeof node["$ref"] === "string") {
      if (node["$ref"].startsWith(`#/${externalRefsKey}/${escapeJsonPointer(documentKey)}`)) {
        resolveAndCopyReferences(targetDocument, sourceDocument, node["$ref"].substring(1), externalRefsKey, documentKey, bundleLocalRefs, processedNodes);
      } else if (bundleLocalRefs) {
        resolveAndCopyReferences(targetDocument, sourceDocument, node["$ref"].substring(1), externalRefsKey, documentKey, bundleLocalRefs, processedNodes);
      }
    }
    for (const value of Object.values(node)) {
      traverse2(value);
    }
  };
  traverse2(referencedValue);
};
var extensions2 = {
  /**
   * Custom OpenAPI extension key used to store external references.
   * This key will contain all bundled external documents.
   * The x-ext key is used to maintain a clean separation between the main
   * OpenAPI document and its bundled external references.
   */
  externalDocuments: "x-ext",
  /**
   * Custom OpenAPI extension key used to maintain a mapping between
   * hashed keys and their original URLs in x-ext.
   * This mapping is essential for tracking the source of bundled references
   */
  externalDocumentsMappings: "x-ext-urls"
};
async function bundle(input, config) {
  config.externalDocumentsKey = config.externalDocumentsKey ?? extensions2.externalDocuments;
  config.externalDocumentsMappingsKey = config.externalDocumentsMappingsKey ?? extensions2.externalDocumentsMappings;
  const cache = config.cache ?? /* @__PURE__ */ new Map();
  const loaderPlugins = config.plugins.filter((it) => it.type === "loader");
  const lifecyclePlugin = config.plugins.filter((it) => it.type === "lifecycle");
  const resolveInput = async () => {
    if (typeof input !== "string") {
      return input;
    }
    const result = await resolveContents(input, loaderPlugins);
    if (result.ok && typeof result.data === "object") {
      return result.data;
    }
    throw new Error("Failed to resolve input: Please provide a valid string value or pass a loader to process the input");
  };
  const rawSpecification = await resolveInput();
  const documentRoot = config.root ?? rawSpecification;
  const schemas = getSchemas(documentRoot);
  const isPartialBundling = config.root !== void 0 && config.root !== rawSpecification || config.depth !== void 0;
  const processedNodes = config.visitedNodes ?? /* @__PURE__ */ new Set();
  const getDefaultOrigin = () => {
    const id = getId(documentRoot);
    if (id) {
      return id;
    }
    if (config.origin) {
      return config.origin;
    }
    if (typeof input !== "string") {
      return "/";
    }
    if (isHttpUrl(input) || isFilePath(input)) {
      return input;
    }
    return "/";
  };
  const defaultOrigin = getDefaultOrigin();
  if (documentRoot[config.externalDocumentsMappingsKey] === void 0) {
    documentRoot[config.externalDocumentsMappingsKey] = {};
  }
  const { generate } = uniqueValueGeneratorFactory(config.compress ?? getHash, documentRoot[config.externalDocumentsMappingsKey]);
  const executeHooks = async (type, ...args) => {
    var _a;
    const hook = (_a = config.hooks) == null ? void 0 : _a[type];
    if (hook) {
      await hook(...args);
    }
    for (const plugin of lifecyclePlugin) {
      const pluginHook = plugin[type];
      if (pluginHook) {
        await pluginHook(...args);
      }
    }
  };
  const bundler = async (root, origin = defaultOrigin, isChunkParent = false, depth = 0, currentPath = [], parent = null) => {
    if (config.depth !== void 0 && depth > config.depth) {
      return;
    }
    if (!isObject(root) && !Array.isArray(root)) {
      return;
    }
    if (processedNodes.has(root)) {
      return;
    }
    processedNodes.add(root);
    const context = {
      path: currentPath,
      resolutionCache: cache,
      parentNode: parent,
      rootNode: documentRoot,
      loaders: loaderPlugins
    };
    await executeHooks("onBeforeNodeProcess", root, context);
    const id = getId(root);
    if (hasRef(root)) {
      const ref2 = root["$ref"];
      const isChunk = "$global" in root && typeof root["$global"] === "boolean" && root["$global"];
      const localRef = convertToLocalRef(ref2, id ?? origin, schemas);
      if (localRef !== void 0) {
        if (isPartialBundling) {
          const segments = getSegmentsFromPath(`/${localRef}`);
          const parent2 = segments.length > 0 ? getValueByPath(documentRoot, segments.slice(0, -1)).value : void 0;
          const targetValue = getValueByPath(documentRoot, segments);
          await bundler(targetValue.value, targetValue.context, isChunkParent, depth + 1, segments, parent2);
        }
        await executeHooks("onAfterNodeProcess", root, context);
        return;
      }
      const [prefix, path = ""] = ref2.split("#", 2);
      const resolvedPath = resolveReferencePath(id ?? origin, prefix);
      const relativePath = toRelativePath(resolvedPath, defaultOrigin);
      const compressedPath = await generate(relativePath);
      const seen = cache.has(relativePath);
      if (!seen) {
        cache.set(relativePath, resolveContents(resolvedPath, loaderPlugins));
      }
      await executeHooks("onResolveStart", root);
      const result = await cache.get(relativePath);
      if (result.ok) {
        if (!seen) {
          if (!isChunk) {
            prefixInternalRefRecursive(result.data, [extensions2.externalDocuments, compressedPath]);
          }
          await bundler(result.data, isChunk ? origin : resolvedPath, isChunk, depth + 1, [
            config.externalDocumentsKey,
            compressedPath,
            documentRoot[config.externalDocumentsMappingsKey]
          ]);
          setValueAtPath(documentRoot, `/${config.externalDocumentsMappingsKey}/${escapeJsonPointer(compressedPath)}`, relativePath);
        }
        if (config.treeShake === true) {
          resolveAndCopyReferences(documentRoot, { [config.externalDocumentsKey]: { [compressedPath]: result.data } }, prefixInternalRef(`#${path}`, [config.externalDocumentsKey, compressedPath]).substring(1), config.externalDocumentsKey, compressedPath);
        } else if (!seen) {
          setValueAtPath(documentRoot, `/${config.externalDocumentsKey}/${compressedPath}`, result.data);
        }
        root.$ref = prefixInternalRef(`#${path}`, [config.externalDocumentsKey, compressedPath]);
        await executeHooks("onResolveSuccess", root);
        await executeHooks("onAfterNodeProcess", root, context);
        return;
      }
      await executeHooks("onResolveError", root);
      await executeHooks("onAfterNodeProcess", root, context);
      return console.warn(`Failed to resolve external reference "${resolvedPath}". The reference may be invalid, inaccessible, or missing a loader for this type of reference.`);
    }
    for (const key in root) {
      if (key === config.externalDocumentsKey || key === config.externalDocumentsMappingsKey) {
        continue;
      }
      await bundler(root[key], id ?? origin, isChunkParent, depth + 1, [...currentPath, key], root);
    }
    await executeHooks("onAfterNodeProcess", root, context);
  };
  await bundler(rawSpecification);
  if (!config.urlMap && !isPartialBundling) {
    delete documentRoot[config.externalDocumentsMappingsKey];
  }
  return rawSpecification;
}

// node_modules/@scalar/helpers/dist/queue/queue.js
var Node = class {
  constructor(data) {
    __publicField(this, "data");
    __publicField(this, "next");
    this.data = data;
    this.next = null;
  }
};
var Queue = class {
  constructor() {
    __publicField(this, "front");
    __publicField(this, "rear");
    __publicField(this, "size");
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  /**
   * Adds an element to the end of the queue.
   * @param data - The data to add to the queue.
   */
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty() || !this.rear) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  /**
   * Removes and returns the front element of the queue.
   * @returns The data from the removed node, or null if the queue is empty.
   */
  dequeue() {
    if (this.isEmpty() || !this.front) {
      return null;
    }
    const removedNode = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return removedNode.data;
  }
  /**
   * Returns the front element of the queue without removing it.
   * @returns The front data, or null if the queue is empty.
   */
  peek() {
    if (this.isEmpty() || !this.front) {
      return null;
    }
    return this.front.data;
  }
  /**
   * Checks whether the queue is empty.
   * @returns True if the queue has no elements, false otherwise.
   */
  isEmpty() {
    return this.size === 0;
  }
  /**
   * Returns the number of elements in the queue.
   * @returns The size of the queue.
   */
  getSize() {
    return this.size;
  }
  /**
   * Returns a string representation of the queue.
   * @returns Elements of the queue separated by ' -> '.
   */
  toString() {
    let current = this.front;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements.join(" -> ");
  }
};

// node_modules/@scalar/helpers/dist/general/create-limiter.js
function createLimiter(maxConcurrent) {
  let activeCount = 0;
  const queue = new Queue();
  const next = () => {
    if (queue.isEmpty() || activeCount >= maxConcurrent) {
      return;
    }
    const resolve2 = queue.dequeue();
    if (resolve2) {
      resolve2();
    }
  };
  const run = async (fn2) => {
    if (activeCount >= maxConcurrent) {
      await new Promise((resolve2) => queue.enqueue(resolve2));
    }
    activeCount++;
    try {
      const result = await fn2();
      return result;
    } finally {
      activeCount--;
      next();
    }
  };
  return run;
}

// node_modules/@scalar/json-magic/dist/helpers/normalize.js
var stripLeadingUtf8Bom = (value) => value.startsWith("\uFEFF") ? value.slice(1) : value;
function normalize2(content) {
  if (content === null) {
    return void 0;
  }
  if (typeof content === "string") {
    const withoutBom = stripLeadingUtf8Bom(content);
    if (withoutBom.trim() === "") {
      return void 0;
    }
    try {
      return JSON.parse(withoutBom);
    } catch {
      const hasColon = /^[^:]+:/.test(withoutBom);
      const trimmedStart = withoutBom.slice(0, 50).trimStart();
      const looksLikeJson = trimmedStart.startsWith("{") || trimmedStart.startsWith("[");
      if (!hasColon || looksLikeJson) {
        return void 0;
      }
      return parse(withoutBom, {
        maxAliasCount: 1e4,
        merge: true
      });
    }
  }
  return content;
}

// node_modules/@scalar/json-magic/dist/bundle/plugins/fetch-urls/index.js
var getHost = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
};
async function fetchUrl(url, limiter, config) {
  var _a, _b;
  try {
    const host = getHost(url);
    const headers = (_b = (_a = config == null ? void 0 : config.headers) == null ? void 0 : _a.find((a) => a.domains.find((d) => d === host) !== void 0)) == null ? void 0 : _b.headers;
    const exec = (config == null ? void 0 : config.fetch) ?? fetch;
    const result = await limiter(() => exec(url, {
      headers
    }));
    if (result.ok) {
      const body = await result.text();
      return {
        ok: true,
        data: normalize2(body),
        raw: body
      };
    }
    const contentType = result.headers.get("Content-Type") ?? "";
    if (["text/html", "application/xml"].includes(contentType)) {
      console.warn(`[WARN] We only support JSON/YAML formats, received ${contentType}`);
    }
    console.warn(`[WARN] Fetch failed with status ${result.status} ${result.statusText} for URL: ${url}`);
    return {
      ok: false
    };
  } catch {
    console.warn(`[WARN] Failed to parse JSON/YAML from URL: ${url}`);
    return {
      ok: false
    };
  }
}
function fetchUrls(config) {
  const limiter = (config == null ? void 0 : config.limit) ? createLimiter(config.limit) : (fn2) => fn2();
  return {
    type: "loader",
    validate: isHttpUrl,
    exec: (value) => fetchUrl(value, limiter, config)
  };
}

// node_modules/@scalar/json-magic/dist/diff/apply.js
var InvalidChangesDetectedError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidChangesDetectedError";
  }
};
var apply = (document, diff2) => {
  const applyChange = (current, path, d, depth = 0) => {
    if (path[depth] === void 0) {
      throw new InvalidChangesDetectedError(`Process aborted. Path ${path.join(".")} at depth ${depth} is undefined, check diff object`);
    }
    if (depth >= path.length - 1) {
      if (d.type === "add" || d.type === "update") {
        current[path[depth]] = d.changes;
      } else {
        if (Array.isArray(current)) {
          current.splice(Number.parseInt(path[depth]), 1);
        } else {
          delete current[path[depth]];
        }
      }
      return;
    }
    if (current[path[depth]] === void 0 || typeof current[path[depth]] !== "object") {
      throw new InvalidChangesDetectedError("Process aborted, check diff object");
    }
    applyChange(current[path[depth]], path, d, depth + 1);
  };
  for (const d of diff2) {
    if (d.path.length === 0) {
      throw new InvalidChangesDetectedError("Process aborted. Root-level replacement is not supported, the change targets the document itself instead of a property inside it");
    }
    const unsafeSegment = d.path.find(isPollutionKey);
    if (unsafeSegment !== void 0) {
      throw new InvalidChangesDetectedError(`Process aborted. Path ${d.path.join(".")} contains the unsafe segment "${unsafeSegment}", which can modify the prototype chain`);
    }
  }
  for (const d of diff2) {
    applyChange(document, d.path, d);
  }
  return document;
};

// node_modules/@scalar/json-magic/dist/diff/diff.js
var diff = (doc1, doc2) => {
  const diff2 = [];
  const bfs = (el1, el2, prefix = []) => {
    if (typeof el1 !== typeof el2) {
      if (typeof el1 === "undefined") {
        diff2.push({ path: prefix, changes: el2, type: "add" });
        return;
      }
      if (typeof el2 === "undefined") {
        diff2.push({ path: prefix, changes: el1, type: "delete" });
        return;
      }
      diff2.push({ path: prefix, changes: el2, type: "update" });
      return;
    }
    if (typeof el1 === "object" && typeof el2 === "object" && el1 !== null && el2 !== null) {
      if (Array.isArray(el1) !== Array.isArray(el2)) {
        diff2.push({ path: prefix, changes: el2, type: "update" });
        return;
      }
      const keys = [.../* @__PURE__ */ new Set([...Object.keys(el1), ...Object.keys(el2)])].filter((key) => !isPollutionKey(key));
      const orderedKeys = Array.isArray(el1) && Array.isArray(el2) && el1.length >= el2.length ? keys.reverse() : keys;
      for (const key of orderedKeys) {
        bfs(el1[key], el2[key], [...prefix, key]);
      }
      return;
    }
    if (el1 !== el2) {
      diff2.push({ path: prefix, changes: el2, type: "update" });
    }
  };
  bfs(doc1, doc2);
  return diff2;
};

// node_modules/@scalar/json-magic/dist/diff/trie.js
var TrieNode = class {
  constructor(value) {
    __publicField(this, "value");
    /**
     * Children are keyed by path segments taken from untrusted documents, so the map has a null
     * prototype. A plain object would resolve `children['__proto__']` to `Object.prototype`, and
     * `addPath` would then write onto the prototype of every object in the runtime. The map is built
     * here rather than taken as an argument, so a caller cannot hand back a polluting one.
     */
    __publicField(this, "children", /* @__PURE__ */ Object.create(null));
    this.value = value;
  }
};
var Trie = class {
  constructor() {
    __publicField(this, "root");
    this.root = new TrieNode(null);
  }
  /**
   * Adds a value to the trie at the specified path.
   * Creates new nodes as needed to build the path.
   *
   * @param path - Array of strings representing the path to store the value
   * @param value - The value to store at the end of the path
   *
   * @example
   * const trie = new Trie<number>()
   * trie.addPath(['users', 'john', 'age'], 30)
   */
  addPath(path, value) {
    let current = this.root;
    for (const dir of path) {
      if (current.children[dir]) {
        current = current.children[dir];
      } else {
        current.children[dir] = new TrieNode(null);
        current = current.children[dir];
      }
    }
    current.value = value;
  }
  /**
   * Finds all matches along a given path in the trie.
   * This method traverses both the exact path and all deeper paths,
   * executing a callback for each matching value found.
   *
   * The search is performed in two phases:
   * 1. Traverse the exact path, checking for matches at each node
   * 2. Perform a depth-first search from the end of the path to find all deeper matches
   *
   * @param path - Array of strings representing the path to search
   * @param callback - Function to execute for each matching value found
   *
   * @example
   * const trie = new Trie<number>()
   * trie.addPath(['a', 'b', 'c'], 1)
   * trie.addPath(['a', 'b', 'd'], 2)
   * trie.findMatch(['a', 'b'], (value) => console.log(value)) // Logs: 1, 2
   */
  findMatch(path, callback) {
    let current = this.root;
    for (const dir of path) {
      if (current.value !== null) {
        callback(current.value);
      }
      const next = current.children[dir];
      if (!next) {
        return;
      }
      current = next;
    }
    const dfs = (current2) => {
      for (const child of Object.keys((current2 == null ? void 0 : current2.children) ?? {})) {
        if (current2 && Object.hasOwn(current2.children, child)) {
          dfs(current2 == null ? void 0 : current2.children[child]);
        }
      }
      if (current2 == null ? void 0 : current2.value) {
        callback(current2.value);
      }
    };
    dfs(current);
  }
};

// node_modules/@scalar/json-magic/dist/diff/utils.js
var isKeyCollisions = (a, b) => {
  if (typeof a !== typeof b) {
    return true;
  }
  if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
    if (Array.isArray(a) !== Array.isArray(b)) {
      return true;
    }
    const keys = /* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const key of keys) {
      if (isPollutionKey(key)) {
        continue;
      }
      if (a[key] !== void 0 && b[key] !== void 0) {
        if (isKeyCollisions(a[key], b[key])) {
          return true;
        }
      }
    }
    return false;
  }
  return a !== b;
};
var mergeObjects2 = (a, b) => {
  for (const key in b) {
    if (isPollutionKey(key)) {
      continue;
    }
    if (!(key in a)) {
      a[key] = b[key];
    } else {
      const aValue = a[key];
      const bValue = b[key];
      if (typeof aValue === "object" && aValue !== null && typeof bValue === "object" && bValue !== null) {
        a[key] = mergeObjects2(aValue, bValue);
      }
    }
  }
  return a;
};
var isArrayEqual = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i <= a.length; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

// node_modules/@scalar/json-magic/dist/diff/merge.js
var merge = (diff1, diff2) => {
  const trie = new Trie();
  for (const [index, diff3] of diff1.entries()) {
    trie.addPath(diff3.path, { index, changes: diff3 });
  }
  const skipDiff1 = /* @__PURE__ */ new Set();
  const skipDiff2 = /* @__PURE__ */ new Set();
  const conflictsMap1 = /* @__PURE__ */ new Map();
  const conflictsMap2 = /* @__PURE__ */ new Map();
  for (const [index, diff3] of diff2.entries()) {
    trie.findMatch(diff3.path, (value) => {
      if (diff3.type === "delete") {
        if (value.changes.type === "delete") {
          if (value.changes.path.length > diff3.path.length) {
            skipDiff1.add(value.index);
          } else {
            skipDiff2.add(index);
          }
        } else {
          skipDiff1.add(value.index);
          skipDiff2.add(index);
          const conflictEntry = conflictsMap2.get(index);
          if (conflictEntry !== void 0) {
            conflictEntry[0].push(value.changes);
          } else {
            conflictsMap2.set(index, [[value.changes], [diff3]]);
          }
        }
      }
      if (diff3.type === "add" || diff3.type === "update") {
        if (isArrayEqual(diff3.path, value.changes.path) && value.changes.type !== "delete" && !isKeyCollisions(diff3.changes, value.changes.changes)) {
          skipDiff1.add(value.index);
          if (typeof diff3.changes === "object") {
            mergeObjects2(diff3.changes, value.changes.changes);
          }
          return;
        }
        skipDiff1.add(value.index);
        skipDiff2.add(index);
        const conflictEntry = conflictsMap1.get(value.index);
        if (conflictEntry !== void 0) {
          conflictEntry[1].push(diff3);
        } else {
          conflictsMap1.set(value.index, [[value.changes], [diff3]]);
        }
      }
    });
  }
  const conflicts = [...conflictsMap1.values(), ...conflictsMap2.values()];
  const diffs = [
    ...diff1.filter((_, index) => !skipDiff1.has(index)),
    ...diff2.filter((_, index) => !skipDiff2.has(index))
  ];
  return { diffs, conflicts };
};

// node_modules/@scalar/openapi-upgrader/dist/3.1-to-3.2/upgrade-from-three-one-to-three-two.js
function migrateXmlObjects(obj) {
  if (obj === null || typeof obj !== "object") {
    return;
  }
  if (Array.isArray(obj)) {
    for (const item of obj) {
      migrateXmlObjects(item);
    }
    return;
  }
  if (obj.xml && typeof obj.xml === "object") {
    if (obj.xml.wrapped === true && obj.xml.attribute === true) {
      throw new Error("Invalid XML configuration: wrapped and attribute cannot be true at the same time.");
    }
    if (obj.xml.wrapped === true) {
      delete obj.xml.wrapped;
      obj.xml.nodeType = "element";
    }
    if (obj.xml.attribute === true) {
      delete obj.xml.attribute;
      obj.xml.nodeType = "attribute";
    }
  }
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      migrateXmlObjects(obj[key]);
    }
  }
}
function migrateTagGroups(document) {
  if (document["x-tagGroups"] && Array.isArray(document["x-tagGroups"])) {
    const tagGroups = document["x-tagGroups"];
    if (!document.tags) {
      document.tags = [];
    }
    const tagGroupMap = /* @__PURE__ */ new Map();
    for (const group of tagGroups) {
      for (const tagName of group.tags) {
        tagGroupMap.set(tagName, group.name);
      }
    }
    if (Array.isArray(document.tags)) {
      for (const tag of document.tags) {
        if (typeof tag === "object" && tag !== null && "name" in tag) {
          const groupName = tagGroupMap.get(tag.name);
          if (groupName) {
            if (groupName.toLowerCase().includes("nav") || groupName.toLowerCase().includes("navigation")) {
              tag.kind = "nav";
            } else if (groupName.toLowerCase().includes("audience")) {
              tag.kind = "audience";
            } else if (groupName.toLowerCase().includes("badge")) {
              tag.kind = "badge";
            } else {
              tag.kind = "nav";
            }
          }
        }
      }
    }
    delete document["x-tagGroups"];
  }
}
function upgradeFromThreeOneToThreeTwo(originalDocument) {
  var _a;
  const document = originalDocument;
  if (document !== null && typeof document === "object" && typeof document.openapi === "string" && ((_a = document.openapi) == null ? void 0 : _a.startsWith("3.1"))) {
    document.openapi = "3.2.0";
  } else {
    return document;
  }
  migrateTagGroups(document);
  migrateXmlObjects(document);
  return document;
}

// node_modules/@scalar/openapi-upgrader/dist/helpers/traverse.js
function traverse(content, transform, path = []) {
  const result = {};
  for (const [key, value] of Object.entries(content)) {
    const currentPath = [...path, key];
    if (Array.isArray(value)) {
      result[key] = value.map((item, index) => {
        if (typeof item === "object" && !Array.isArray(item) && item !== null) {
          return traverse(item, transform, [...currentPath, index.toString()]);
        }
        return item;
      });
      continue;
    }
    if (typeof value === "object" && value !== null) {
      result[key] = traverse(value, transform, currentPath);
      continue;
    }
    result[key] = value;
  }
  return transform(result, path);
}

// node_modules/@scalar/openapi-upgrader/dist/2.0-to-3.0/upgrade-from-two-to-three.js
var DEFAULT_MEDIA_TYPE = "application/json";
function extractXExampleExtensions(obj) {
  const xExample = obj["x-example"];
  const xExamples = obj["x-examples"];
  delete obj["x-example"];
  delete obj["x-examples"];
  return { xExample, xExamples };
}
function isNonEmptyObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length > 0;
}
function isNamedExamplesCollection(value) {
  return isNonEmptyObject(value) && Object.values(value).every((v) => typeof v === "object" && v !== null && !Array.isArray(v));
}
function isEmptySchema(schema2) {
  if (typeof schema2 !== "object" || schema2 === null) {
    return true;
  }
  const s = schema2;
  const substantiveValidationKeywords = [
    "enum",
    "const",
    "not",
    "format",
    "multipleOf",
    "maximum",
    "exclusiveMaximum",
    "minimum",
    "exclusiveMinimum",
    "maxLength",
    "minLength",
    "pattern",
    "maxItems",
    "minItems",
    "uniqueItems",
    "maxProperties",
    "minProperties",
    "required"
  ];
  if (s.allOf || s.oneOf || s.anyOf || s.items || s.$ref || "additionalProperties" in s || substantiveValidationKeywords.some((key) => key in s)) {
    return false;
  }
  if (typeof s.properties === "object" && s.properties !== null && Object.keys(s.properties).length > 0) {
    return false;
  }
  return true;
}
function removeEmptySchemaOnlyContentEntries(content) {
  const keys = Object.keys(content);
  const hasEntryWithExample = keys.some((key) => {
    const entry = content[key];
    return (entry == null ? void 0 : entry.example) !== void 0 || (entry == null ? void 0 : entry.examples) !== void 0;
  });
  if (!hasEntryWithExample) {
    return;
  }
  for (const key of keys) {
    const entry = content[key];
    if (!entry)
      continue;
    const hasExample = entry.example !== void 0 || entry.examples !== void 0;
    const hasOnlySchema = entry.schema !== void 0 && !hasExample && Object.keys(entry).length === 1;
    if (hasOnlySchema && isEmptySchema(entry.schema)) {
      delete content[key];
    }
  }
}
var EXAMPLE_OBJECT_PROPERTIES = /* @__PURE__ */ new Set(["summary", "description", "value", "externalValue"]);
function isExampleObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const obj = value;
  const hasValueOrExternalValue = "value" in obj || "externalValue" in obj;
  const onlyHasAllowedProperties = Object.keys(obj).every((key) => EXAMPLE_OBJECT_PROPERTIES.has(key));
  return hasValueOrExternalValue && onlyHasAllowedProperties;
}
function wrapAsExampleObject(value) {
  if (isExampleObject(value)) {
    return value;
  }
  return { value };
}
var MEDIA_TYPE_KEY_PATTERN = /^[a-zA-Z0-9*+.-]+\/[a-zA-Z0-9*+.+-]+$/;
function isMediaTypeKey(key) {
  return MEDIA_TYPE_KEY_PATTERN.test(key);
}
function transformXExampleToExamples(xExample) {
  return Object.entries(xExample).reduce((acc, [key, value]) => {
    acc[key] = { value };
    return acc;
  }, {});
}
var upgradeFlow = (flow) => {
  switch (flow) {
    case "application":
      return "clientCredentials";
    case "accessCode":
      return "authorizationCode";
    case "implicit":
      return "implicit";
    case "password":
      return "password";
    default:
      return flow;
  }
};
function upgradeFromTwoToThree2(originalSpecification) {
  var _a, _b, _c;
  let document = originalSpecification;
  if (document !== null && typeof document === "object" && typeof document.swagger === "string" && ((_a = document.swagger) == null ? void 0 : _a.startsWith("2.0"))) {
    document.openapi = "3.0.4";
    delete document.swagger;
  } else {
    return document;
  }
  if (document.host) {
    const schemes = Array.isArray(document.schemes) && ((_b = document.schemes) == null ? void 0 : _b.length) ? document.schemes : ["http"];
    document.servers = schemes.map((scheme) => ({
      url: `${scheme}://${document.host}${document.basePath ?? ""}`
    }));
    delete document.basePath;
    delete document.schemes;
    delete document.host;
  } else if (document.basePath) {
    document.servers = [{ url: document.basePath }];
    delete document.basePath;
  }
  if (document.definitions) {
    document.components = Object.assign({}, document.components, {
      schemas: document.definitions
    });
    delete document.definitions;
    document = traverse(document, (schema2) => {
      if (typeof schema2.$ref === "string" && schema2.$ref.startsWith("#/definitions/")) {
        schema2.$ref = schema2.$ref.replace(/^#\/definitions\//, "#/components/schemas/");
      }
      return schema2;
    });
  }
  document = traverse(document, (schema2) => {
    if (schema2.type === "file") {
      schema2.type = "string";
      schema2.format = "binary";
    }
    return schema2;
  });
  if (Object.hasOwn(document, "parameters")) {
    document = traverse(document, (schema2) => {
      if (typeof schema2.$ref === "string" && schema2.$ref.startsWith("#/parameters/")) {
        const schemaName = schema2.$ref.split("/")[2];
        if (!schemaName) {
          return schema2;
        }
        const param = document.parameters && typeof document.parameters === "object" && schemaName in document.parameters ? document.parameters[schemaName] : void 0;
        if (param && typeof param === "object" && "in" in param && (param.in === "body" || param.in === "formData")) {
          schema2.$ref = schema2.$ref.replace(/^#\/parameters\//, "#/components/requestBodies/");
        } else {
          schema2.$ref = schema2.$ref.replace(/^#\/parameters\//, "#/components/parameters/");
        }
      }
      return schema2;
    });
    document.components ?? (document.components = {});
    const params = {};
    const bodyParams = {};
    const parameters = document.parameters && typeof document.parameters === "object" ? document.parameters : {};
    for (const [name, param] of Object.entries(parameters)) {
      if (param && typeof param === "object") {
        if ("$ref" in param) {
          const convertedParam = transformParameterObject(param);
          params[name] = convertedParam;
        } else if ("in" in param) {
          if (param.in === "body") {
            bodyParams[name] = migrateBodyParameter(param, document.consumes ?? [DEFAULT_MEDIA_TYPE]);
          } else if (param.in === "formData") {
            bodyParams[name] = migrateFormDataParameter([param], document.consumes);
          } else {
            const convertedParam = transformParameterObject(param);
            params[name] = convertedParam;
          }
        }
      }
    }
    if (Object.keys(params).length > 0) {
      ;
      document.components.parameters = params;
    }
    if (Object.keys(bodyParams).length > 0) {
      ;
      document.components.requestBodies = bodyParams;
    }
    delete document.parameters;
  }
  if (Object.hasOwn(document, "responses") && typeof document.responses === "object" && document.responses !== null) {
    document = traverse(document, (schema2) => {
      if (typeof schema2.$ref === "string" && schema2.$ref.startsWith("#/responses/")) {
        schema2.$ref = schema2.$ref.replace(/^#\/responses\//, "#/components/responses/");
      }
      return schema2;
    });
    document.components ?? (document.components = {});
    const migratedResponses = {};
    const responses = document.responses;
    for (const [name, response] of Object.entries(responses)) {
      if (response && typeof response === "object") {
        if ("$ref" in response) {
          migratedResponses[name] = response;
        } else {
          const responseObj = response;
          const produces = document.produces ?? [DEFAULT_MEDIA_TYPE];
          if (responseObj.schema) {
            if (typeof responseObj.content !== "object") {
              responseObj.content = {};
            }
            for (const type of produces) {
              ;
              responseObj.content[type] = {
                schema: responseObj.schema
              };
            }
            delete responseObj.schema;
          }
          if (responseObj.examples && typeof responseObj.examples === "object") {
            if (typeof responseObj.content !== "object") {
              responseObj.content = {};
            }
            const defaultMediaType = produces[0] ?? DEFAULT_MEDIA_TYPE;
            for (const [key, exampleValue] of Object.entries(responseObj.examples)) {
              if (isMediaTypeKey(key)) {
                if (typeof responseObj.content[key] !== "object") {
                  ;
                  responseObj.content[key] = {};
                }
                ;
                responseObj.content[key].example = exampleValue;
              } else {
                if (typeof responseObj.content[defaultMediaType] !== "object") {
                  ;
                  responseObj.content[defaultMediaType] = {};
                }
                const mediaEntry = responseObj.content[defaultMediaType];
                if (typeof mediaEntry.examples !== "object") {
                  mediaEntry.examples = {};
                }
                ;
                mediaEntry.examples[key] = wrapAsExampleObject(exampleValue);
              }
            }
            delete responseObj.examples;
          }
          if (responseObj.content && typeof responseObj.content === "object") {
            removeEmptySchemaOnlyContentEntries(responseObj.content);
          }
          if (responseObj.headers && typeof responseObj.headers === "object") {
            responseObj.headers = Object.entries(responseObj.headers).reduce((acc, [headerName, header]) => {
              if (header && typeof header === "object") {
                return {
                  [headerName]: transformResponseHeader(header),
                  ...acc
                };
              }
              return acc;
            }, {});
          }
          migratedResponses[name] = responseObj;
        }
      }
    }
    if (Object.keys(migratedResponses).length > 0) {
      ;
      document.components.responses = migratedResponses;
    }
    delete document.responses;
  }
  if (typeof document.paths === "object") {
    for (const path in document.paths) {
      if (Object.hasOwn(document.paths, path)) {
        const pathItem = document.paths && typeof document.paths === "object" && path in document.paths ? document.paths[path] : void 0;
        if (!pathItem || typeof pathItem !== "object") {
          continue;
        }
        let requestBodyObject;
        for (const methodOrParameters in pathItem) {
          if (methodOrParameters === "parameters" && Object.hasOwn(pathItem, methodOrParameters)) {
            const pathItemParameters = migrateParameters(pathItem.parameters, document.consumes ?? [DEFAULT_MEDIA_TYPE]);
            pathItem.parameters = pathItemParameters.parameters;
            requestBodyObject = pathItemParameters.requestBody;
          } else if (Object.hasOwn(pathItem, methodOrParameters)) {
            const operationItem = pathItem[methodOrParameters];
            if (requestBodyObject) {
              operationItem.requestBody = requestBodyObject;
            }
            if (operationItem.parameters) {
              const migrationResult = migrateParameters(operationItem.parameters, operationItem.consumes ?? document.consumes ?? [DEFAULT_MEDIA_TYPE]);
              operationItem.parameters = migrationResult.parameters;
              if (migrationResult.requestBody) {
                operationItem.requestBody = migrationResult.requestBody;
              }
            }
            delete operationItem.consumes;
            if (operationItem.responses) {
              for (const response in operationItem.responses) {
                if (Object.hasOwn(operationItem.responses, response)) {
                  const responseItem = operationItem.responses[response];
                  if (responseItem.headers && typeof responseItem.headers === "object") {
                    responseItem.headers = Object.entries(responseItem.headers).reduce((acc, [name, header]) => {
                      if (header && typeof header === "object") {
                        return {
                          [name]: transformResponseHeader(header),
                          ...acc
                        };
                      }
                      return acc;
                    }, {});
                  }
                  if (responseItem.schema) {
                    const produces = document.produces ?? operationItem.produces ?? [DEFAULT_MEDIA_TYPE];
                    if (typeof responseItem.content !== "object") {
                      responseItem.content = {};
                    }
                    for (const type of produces) {
                      responseItem.content[type] = {
                        schema: responseItem.schema
                      };
                    }
                    delete responseItem.schema;
                  }
                  if (responseItem.examples && typeof responseItem.examples === "object") {
                    if (typeof responseItem.content !== "object") {
                      responseItem.content = {};
                    }
                    const produces = document.produces ?? operationItem.produces ?? [DEFAULT_MEDIA_TYPE];
                    const defaultMediaType = produces[0] ?? DEFAULT_MEDIA_TYPE;
                    for (const [key, exampleValue] of Object.entries(responseItem.examples)) {
                      if (isMediaTypeKey(key)) {
                        if (typeof responseItem.content[key] !== "object") {
                          responseItem.content[key] = {};
                        }
                        responseItem.content[key].example = exampleValue;
                      } else {
                        if (typeof responseItem.content[defaultMediaType] !== "object") {
                          responseItem.content[defaultMediaType] = {};
                        }
                        const mediaEntry = responseItem.content[defaultMediaType];
                        if (typeof mediaEntry.examples !== "object") {
                          mediaEntry.examples = {};
                        }
                        mediaEntry.examples[key] = wrapAsExampleObject(exampleValue);
                      }
                    }
                    delete responseItem.examples;
                  }
                  if (responseItem.content && typeof responseItem.content === "object") {
                    removeEmptySchemaOnlyContentEntries(responseItem.content);
                  }
                }
              }
            }
            delete operationItem.produces;
            if (((_c = operationItem.parameters) == null ? void 0 : _c.length) === 0) {
              delete operationItem.parameters;
            }
          }
        }
      }
    }
  }
  if (document.securityDefinitions) {
    if (typeof document.components !== "object" || document.components === null) {
      document.components = {};
    }
    if (document.components && typeof document.components === "object") {
      Object.assign(document.components, { securitySchemes: {} });
    }
    for (const [key, securityScheme] of Object.entries(document.securityDefinitions)) {
      if (typeof securityScheme === "object") {
        if ("type" in securityScheme && securityScheme.type === "oauth2") {
          const { flow, authorizationUrl, tokenUrl, scopes } = securityScheme;
          if (document.components && typeof document.components === "object" && "securitySchemes" in document.components && document.components.securitySchemes) {
            Object.assign(document.components.securitySchemes, {
              [key]: {
                type: "oauth2",
                flows: {
                  [upgradeFlow(flow || "implicit")]: Object.assign({}, authorizationUrl && { authorizationUrl }, tokenUrl && { tokenUrl }, scopes && { scopes })
                }
              }
            });
          }
        } else if ("type" in securityScheme && securityScheme.type === "basic") {
          if (document.components && typeof document.components === "object" && "securitySchemes" in document.components && document.components.securitySchemes) {
            Object.assign(document.components.securitySchemes, {
              [key]: {
                type: "http",
                scheme: "basic"
              }
            });
          }
        } else {
          if (document.components && typeof document.components === "object" && "securitySchemes" in document.components && document.components.securitySchemes) {
            Object.assign(document.components.securitySchemes, {
              [key]: securityScheme
            });
          }
        }
      }
    }
    delete document.securityDefinitions;
  }
  delete document.consumes;
  delete document.produces;
  return document;
}
function transformItemsObject(obj) {
  const schemaProperties = [
    "type",
    "format",
    "default",
    "items",
    "maximum",
    "exclusiveMaximum",
    "minimum",
    "exclusiveMinimum",
    "maxLength",
    "minLength",
    "pattern",
    "maxItems",
    "minItems",
    "uniqueItems",
    "enum",
    "multipleOf"
  ];
  return schemaProperties.reduce((acc, property) => {
    if (Object.hasOwn(obj, property)) {
      acc[property] = obj[property];
      delete obj[property];
    }
    return acc;
  }, {});
}
function getParameterLocation(location) {
  if (location === "formData") {
    throw new Error("Encountered a formData parameter which should have been filtered out by the caller");
  }
  if (location === "body") {
    throw new Error("Encountered a body parameter which should have been filtered out by the caller");
  }
  return location;
}
function transformParameterObject(parameter) {
  if (Object.hasOwn(parameter, "$ref") && typeof parameter.$ref === "string") {
    return {
      $ref: parameter.$ref
    };
  }
  const serializationStyle = getParameterSerializationStyle(parameter);
  const schema2 = transformItemsObject(parameter);
  const { xExample, xExamples } = extractXExampleExtensions(parameter);
  if (isNonEmptyObject(xExample)) {
    parameter.examples = transformXExampleToExamples(xExample);
  } else if (isNonEmptyObject(xExamples)) {
    parameter.examples = Object.entries(xExamples).reduce((acc, [key, exampleValue]) => {
      acc[key] = wrapAsExampleObject(exampleValue);
      return acc;
    }, {});
  }
  delete parameter.collectionFormat;
  delete parameter.default;
  if (!parameter.in) {
    throw new Error('Parameter object must have an "in" property');
  }
  return {
    schema: schema2,
    ...serializationStyle,
    ...parameter,
    in: getParameterLocation(parameter.in)
  };
}
function transformResponseHeader(header) {
  if (Object.hasOwn(header, "$ref") && typeof header.$ref === "string") {
    return {
      $ref: header.$ref
    };
  }
  const schema2 = transformItemsObject(header);
  return {
    ...header,
    schema: schema2
  };
}
var querySerialization = {
  ssv: {
    style: "spaceDelimited",
    explode: false
  },
  pipes: {
    style: "pipeDelimited",
    explode: false
  },
  multi: {
    style: "form",
    explode: true
  },
  csv: {
    style: "form",
    explode: false
  },
  tsv: {}
};
var pathAndHeaderSerialization = {
  ssv: {},
  pipes: {},
  multi: {},
  csv: {
    style: "simple",
    explode: false
  },
  tsv: {}
};
var serializationStyles = {
  header: pathAndHeaderSerialization,
  query: querySerialization,
  path: pathAndHeaderSerialization
};
function getParameterSerializationStyle(parameter) {
  if (parameter.type !== "array" || !(parameter.in === "query" || parameter.in === "path" || parameter.in === "header")) {
    return {};
  }
  const collectionFormat = parameter.collectionFormat ?? "csv";
  if (parameter.in in serializationStyles && collectionFormat in serializationStyles[parameter.in]) {
    return serializationStyles[parameter.in][collectionFormat];
  }
  return {};
}
function getFormDataEncoding(parameter) {
  if (parameter.type !== "array" || typeof parameter.collectionFormat !== "string") {
    return void 0;
  }
  const encoding = querySerialization[parameter.collectionFormat];
  if (!encoding || Object.keys(encoding).length === 0) {
    return void 0;
  }
  return encoding;
}
function migrateBodyParameter(bodyParameter, consumes) {
  const { xExample, xExamples } = extractXExampleExtensions(bodyParameter);
  delete bodyParameter.name;
  delete bodyParameter.in;
  const { schema: schema2, ...requestBody } = bodyParameter;
  const requestBodyObject = {
    content: {},
    ...requestBody
  };
  if (requestBodyObject.content) {
    for (const type of consumes) {
      requestBodyObject.content[type] = {
        schema: schema2
      };
      if (isNonEmptyObject(xExamples) && type in xExamples) {
        const examples = xExamples[type];
        const isExamplesCollection = isNonEmptyObject(examples) && Object.values(examples).every((example) => isExampleObject(example));
        if (isExamplesCollection) {
          requestBodyObject.content[type].examples = examples;
        } else if (isNamedExamplesCollection(examples)) {
          requestBodyObject.content[type].examples = Object.entries(examples).reduce((acc, [key, exampleValue]) => {
            acc[key] = wrapAsExampleObject(exampleValue);
            return acc;
          }, {});
        } else {
          requestBodyObject.content[type].examples = {
            default: wrapAsExampleObject(examples)
          };
        }
      } else if (isNonEmptyObject(xExamples) && !Object.keys(xExamples).some(isMediaTypeKey)) {
        requestBodyObject.content[type].examples = Object.entries(xExamples).reduce((acc, [key, exampleValue]) => {
          acc[key] = wrapAsExampleObject(exampleValue);
          return acc;
        }, {});
      }
      if (!requestBodyObject.content[type].examples && isNonEmptyObject(xExample) && type in xExample) {
        requestBodyObject.content[type].example = xExample[type];
      }
    }
  }
  return requestBodyObject;
}
function migrateFormDataParameter(parameters, consumes = ["multipart/form-data"]) {
  var _a;
  const requestBodyObject = {
    content: {}
  };
  const filtered = consumes.filter((type) => type === "multipart/form-data" || type === "application/x-www-form-urlencoded");
  const contentTypes = filtered.length > 0 ? filtered : ["multipart/form-data"];
  if (requestBodyObject.content) {
    for (const contentType of contentTypes) {
      requestBodyObject.content[contentType] = {
        schema: {
          type: "object",
          properties: {},
          required: []
          // Initialize required array
        }
      };
      const formContent = (_a = requestBodyObject.content) == null ? void 0 : _a[contentType];
      if ((formContent == null ? void 0 : formContent.schema) && typeof formContent.schema === "object" && "properties" in formContent.schema) {
        for (const param of parameters) {
          if (param.name && formContent.schema.properties) {
            formContent.schema.properties[param.name] = {
              ...transformItemsObject(structuredClone(param)),
              // Only carry the description over when it exists, so a parameter without one does not
              // end up with an explicit `description: undefined` on its schema.
              ...param.description !== void 0 ? { description: param.description } : {}
            };
            const encoding = getFormDataEncoding(param);
            if (encoding) {
              formContent.encoding ?? (formContent.encoding = {});
              formContent.encoding[param.name] = encoding;
            }
            if (param.required && Array.isArray(formContent.schema.required)) {
              formContent.schema.required.push(param.name);
            }
          }
        }
      }
    }
  }
  return requestBodyObject;
}
function migrateParameters(parameters, consumes) {
  const result = {
    parameters: parameters.filter((parameter) => !(parameter.in === "body" || parameter.in === "formData")).map((parameter) => transformParameterObject(parameter))
  };
  const bodyParameter = structuredClone(parameters.find((parameter) => parameter.in === "body") ?? {});
  if (bodyParameter && Object.keys(bodyParameter).length) {
    result.requestBody = migrateBodyParameter(bodyParameter, consumes);
  }
  const formDataParameters = parameters.filter((parameter) => parameter.in === "formData");
  if (formDataParameters.length > 0) {
    const requestBodyObject = migrateFormDataParameter(formDataParameters, consumes);
    if (typeof result.requestBody !== "object") {
      result.requestBody = requestBodyObject;
    } else {
      result.requestBody = {
        ...result.requestBody,
        content: {
          ...result.requestBody.content,
          ...requestBodyObject.content
        }
      };
    }
    if (typeof result.requestBody !== "object") {
      result.requestBody = {
        content: {}
      };
    }
  }
  return result;
}

// node_modules/@scalar/openapi-upgrader/dist/3.0-to-3.1/upgrade-from-three-to-three-one.js
var SCHEMA_SEGMENTS = /* @__PURE__ */ new Set([
  "properties",
  "items",
  "allOf",
  "anyOf",
  "oneOf",
  "not",
  "additionalProperties",
  "schema"
]);
function isSchemaPath(path) {
  if (!path) {
    return false;
  }
  if (path.some((segment) => SCHEMA_SEGMENTS.has(segment))) {
    return true;
  }
  if (path.some((segment) => segment.endsWith("Schema"))) {
    return true;
  }
  if (path.length >= 2 && path[0] === "components" && path[1] === "schemas") {
    return true;
  }
  return false;
}
var NAMED_SCHEMA_MAP_SEGMENTS = /* @__PURE__ */ new Set(["properties", "patternProperties", "$defs", "definitions"]);
function isNamedSchemaMap(path) {
  const last = path == null ? void 0 : path[path.length - 1];
  if (last === void 0) {
    return false;
  }
  if (last === "schemas" && (path == null ? void 0 : path[path.length - 2]) === "components") {
    return true;
  }
  return NAMED_SCHEMA_MAP_SEGMENTS.has(last);
}
var DATA_KEYWORDS = /* @__PURE__ */ new Set(["example", "default", "const", "enum"]);
function isInsideDataValue(path) {
  if (!path) {
    return false;
  }
  for (const [index, segment] of path.entries()) {
    if (DATA_KEYWORDS.has(segment) && !isNamedSchemaMap(path.slice(0, index))) {
      return true;
    }
    if (segment === "value" && path[index - 2] === "examples" && !isNamedSchemaMap(path.slice(0, index - 2))) {
      return true;
    }
  }
  return false;
}
function upgradeFromThreeToThreeOne2(originalContent) {
  let content = originalContent;
  if (content === null || typeof content.openapi !== "string" || !content.openapi.startsWith("3.0")) {
    return content;
  }
  content.openapi = "3.1.1";
  content = traverse(content, applyChangesToDocument);
  return content;
}
var applyChangesToDocument = (schema2, path) => {
  if (isInsideDataValue(path)) {
    return schema2;
  }
  if (schema2.type !== void 0 && schema2.nullable === true) {
    schema2.type = [schema2.type, "null"];
    delete schema2.nullable;
  } else if (schema2.nullable === true && schema2.type === void 0) {
    if (typeof schema2.$ref === "string") {
      const { nullable: _nullable, $ref, ...rest2 } = schema2;
      return { ...rest2, anyOf: [{ $ref }, { type: "null" }] };
    }
    if (Array.isArray(schema2.allOf)) {
      const { nullable: _nullable, allOf, ...rest2 } = schema2;
      const base = allOf.length === 1 ? allOf[0] : { allOf };
      return { ...rest2, anyOf: [base, { type: "null" }] };
    }
  }
  if (schema2.exclusiveMinimum === true) {
    schema2.exclusiveMinimum = schema2.minimum;
    delete schema2.minimum;
  } else if (schema2.exclusiveMinimum === false) {
    delete schema2.exclusiveMinimum;
  }
  if (schema2.exclusiveMaximum === true) {
    schema2.exclusiveMaximum = schema2.maximum;
    delete schema2.maximum;
  } else if (schema2.exclusiveMaximum === false) {
    delete schema2.exclusiveMaximum;
  }
  const isInsideExamplesMap = path == null ? void 0 : path.some((segment, index) => {
    if (segment === "examples" && index > 0) {
      return !isNamedSchemaMap(path.slice(0, index));
    }
    return false;
  });
  if (schema2.example !== void 0 && !isInsideExamplesMap && !isNamedSchemaMap(path)) {
    if (isSchemaPath(path)) {
      schema2.examples = [schema2.example];
    } else {
      schema2.examples = {
        default: {
          value: schema2.example
        }
      };
    }
    delete schema2.example;
  }
  if (schema2.type === "object" && schema2.properties !== void 0) {
    const parentPath = path == null ? void 0 : path.slice(0, -1);
    const isMultipart = parentPath == null ? void 0 : parentPath.some((segment, index) => {
      return segment === "content" && (path == null ? void 0 : path[index + 1]) === "multipart/form-data";
    });
    if (isMultipart && schema2.properties !== null) {
      for (const value of Object.values(schema2.properties)) {
        if (typeof value === "object" && value !== null && "type" in value && "format" in value && value.type === "string" && value.format === "binary") {
          value.contentMediaType = "application/octet-stream";
          delete value.format;
        }
      }
    }
  }
  if ((path == null ? void 0 : path.includes("content")) && (path == null ? void 0 : path.includes("application/octet-stream"))) {
    return {};
  }
  const { format: _, ...rest } = schema2;
  if (schema2.type === "string") {
    if (schema2.format === "binary") {
      return {
        ...rest,
        type: "string",
        contentMediaType: "application/octet-stream"
      };
    }
    if (schema2.format === "base64") {
      return {
        ...rest,
        type: "string",
        contentEncoding: "base64"
      };
    }
    if (schema2.format === "byte") {
      const parentPath = path == null ? void 0 : path.slice(0, -1);
      const contentMediaType = parentPath == null ? void 0 : parentPath.find((_2, index) => (path == null ? void 0 : path[index - 1]) === "content");
      return {
        ...rest,
        type: "string",
        contentEncoding: "base64",
        contentMediaType
      };
    }
  }
  if (schema2["x-webhooks"] !== void 0 && (path === void 0 || path.length === 0)) {
    schema2.webhooks = schema2["x-webhooks"];
    delete schema2["x-webhooks"];
  }
  return schema2;
};

// node_modules/@scalar/openapi-upgrader/dist/upgrade.js
function upgrade2(value, targetVersion) {
  const openapi30 = upgradeFromTwoToThree2(value);
  if (targetVersion === "3.0") {
    return openapi30;
  }
  const openapi31 = upgradeFromThreeToThreeOne2(openapi30);
  if (targetVersion === "3.1") {
    return openapi31;
  }
  const openapi32 = upgradeFromThreeOneToThreeTwo(openapi31);
  if (targetVersion === "3.2") {
    return openapi32;
  }
  return openapi32;
}

// node_modules/@scalar/schemas/dist/extensions/type-comment.js
var TYPE_COMMENT_FENCE = "```";
var typeCommentCodeBlock = (language, body) => `${TYPE_COMMENT_FENCE}${language}
${body.trimEnd()}
${TYPE_COMMENT_FENCE}`;
var typeCommentExample = (language, body) => `@example
${typeCommentCodeBlock(language, body)}`;
var typeCommentInlineCode = (text) => `\`${text}\``;
var typeCommentSections = (...sections) => sections.join("\n\n");
var typeCommentWithExample = (description, example) => typeCommentSections(description, typeCommentExample(example.language, example.body));

// node_modules/@scalar/schemas/dist/extensions/document/x-internal.js
var XInternal2 = object({
  "x-internal": optional(boolean({ typeComment: "When true, hides the entity from public documentation" }))
}, {
  typeName: "XInternal",
  typeComment: typeCommentWithExample("Marks an entity as internal (hidden from external consumers).", {
    language: "yaml",
    body: "x-internal: true"
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-original-aas-version.js
var XOriginalAasVersion = object({
  "x-original-aas-version": optional(string({ typeComment: "Original AsyncAPI Specification version the document was loaded with." }))
}, {
  typeName: "XOriginalAasVersion",
  typeComment: typeCommentWithExample("Original AsyncAPI Specification version of the source document before ingestion.", { language: "yaml", body: 'x-original-aas-version: "3.0.0"' })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-original-oas-version.js
var XOriginalOasVersion = object({
  "x-original-oas-version": optional(string({ typeComment: "Original OpenAPI Specification version of the source document." }))
}, {
  typeName: "XOriginalOasVersion",
  typeComment: typeCommentWithExample("Original OpenAPI Specification version of the source document before ingestion.", { language: "yaml", body: 'x-original-oas-version: "3.1.0"' })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-environments.js
var XScalarEnvVar = object({
  name: string({ typeComment: "Variable name" }),
  value: union([object({ description: optional(string()), default: string() }), string()], {
    typeComment: "Variable value as a string, or an object with description and default"
  })
}, {
  typeName: "XScalarEnvVar",
  typeComment: "An environment variable definition"
});
var XScalarEnvironment = object({
  description: optional(string({ typeComment: "Optional description for the environment" })),
  color: string({
    typeComment: "Color for the environment (for example a hex value)"
  }),
  variables: array(XScalarEnvVar, {
    typeComment: "Variables available in this environment"
  })
}, {
  typeName: "XScalarEnvironment",
  typeComment: "A named environment with variables and display color"
});
var XScalarEnvironments2 = object({
  "x-scalar-environments": optional(record(string(), XScalarEnvironment, {
    typeComment: "Environments keyed by name"
  }))
}, {
  typeName: "XScalarEnvironments",
  typeComment: typeCommentWithExample("Named environments with variables for the API client (base URLs, tokens, etc.).", {
    language: "yaml",
    body: `x-scalar-environments:
  production:
    color: "#00ff00"
    variables:
      - name: apiKey
        value: prod-key`
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-icon.js
var XScalarIcon2 = object({
  "x-scalar-icon": optional(string({ typeComment: "Icon identifier or URL for the API description" }))
}, {
  typeName: "XScalarIcon",
  typeComment: typeCommentWithExample("A custom icon representing the API description in the Scalar UI.", {
    language: "yaml",
    body: "x-scalar-icon: rocket"
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-ignore.js
var XScalarIgnore2 = object({
  "x-scalar-ignore": optional(boolean({ typeComment: "When true, the entity is hidden or ignored in the UI" }))
}, {
  typeName: "XScalarIgnore",
  typeComment: typeCommentWithExample("Internal extension to mark an entity as ignored in the Scalar UI.", {
    language: "yaml",
    body: "x-scalar-ignore: true"
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-is-dirty.js
var XScalarIsDirty2 = object({
  "x-scalar-is-dirty": optional(boolean({
    typeComment: "When true, the document has unsaved changes"
  }))
}, {
  typeName: "XScalarIsDirty",
  typeComment: typeCommentWithExample("Tracks whether the document has been modified since it was last saved.", {
    language: "yaml",
    body: "x-scalar-is-dirty: true"
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-links.js
var XScalarLinkItem = object({
  name: string({ typeComment: "The label to display for the link." }),
  url: string({ typeComment: "The URL the link points to." })
}, {
  typeName: "XScalarLinkItem",
  typeComment: "A named link to display alongside the API info"
});
var XScalarLinks2 = object({
  "x-scalar-links": optional(array(XScalarLinkItem, {
    typeComment: "Additional named links to display alongside the API info (e.g. privacy policy, imprint)"
  }))
}, {
  typeName: "XScalarLinks",
  typeComment: typeCommentWithExample("Additional named links to display alongside the API info, for example a privacy policy or an imprint. This is handy for the legal texts that some countries require on public websites.", {
    language: "yaml",
    body: `x-scalar-links:
  - name: Privacy Policy
    url: https://example.com/privacy
  - name: Imprint
    url: https://example.com/imprint`
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-navigation.js
var XScalarNavigation = object({
  "x-scalar-navigation": optional(any({
    typeComment: "Serialized client navigation tree (`TraversedDocument`) for this API description"
  }))
}, {
  typeName: "XScalarNavigation",
  typeComment: "Client-side navigation tree persisted on the document. Matches `TraversedDocumentObjectRef` in strict OpenAPI schemas."
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-original-document-hash.js
var XScalarOriginalDocumentHash2 = object({
  "x-scalar-original-document-hash": string({
    typeComment: "Hash of the document as originally loaded from an external source"
  })
}, {
  typeName: "XScalarOriginalDocumentHash",
  typeComment: typeCommentWithExample("Tracks the original document hash when loading from an external source. Used to detect modifications since last save.", { language: "yaml", body: 'x-scalar-original-document-hash: "abc123"' })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-original-source-url.js
var XScalarOriginalSourceUrl2 = object({
  "x-scalar-original-source-url": optional(string({ typeComment: "Original document source URL when loaded from an external source" }))
}, {
  typeName: "XScalarOriginalSourceUrl",
  typeComment: typeCommentWithExample("Original document source URL when the API description was loaded from an external source.", { language: "yaml", body: "x-scalar-original-source-url: https://example.com/openapi.yaml" })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-registry-meta.js
var XScalarRegistryMetaInner = object({
  namespace: string({ typeComment: "The namespace under which this registry meta is scoped." }),
  slug: string({ typeComment: "A unique slug identifier for this registry meta within the namespace." }),
  version: string({ typeComment: "The version of the registry meta." }),
  commitHash: optional(string({
    typeComment: "Last known commit hash of this document. Is going to be used to track if the document has been modified since it was last saved."
  })),
  conflictCheckedAgainstHash: optional(string({
    typeComment: "Registry commit hash that the cached `hasConflict` flag was computed against. When the registry advertises a different hash later, the cached result is stale and the conflict check must be re-run."
  })),
  hasConflict: optional(boolean({
    typeComment: "Cached outcome of the last conflict check, valid only while `conflictCheckedAgainstHash` matches the registry current hash for this version."
  }))
}, {
  typeName: "XScalarRegistryMetaInner",
  typeComment: "Registry meta namespace and slug"
});
var XScalarRegistryMeta2 = object({
  "x-scalar-registry-meta": optional(XScalarRegistryMetaInner)
}, {
  typeName: "XScalarRegistryMeta",
  typeComment: typeCommentWithExample("Registry sync metadata for a document published to Scalar Registry.", {
    language: "yaml",
    body: `x-scalar-registry-meta:
  namespace: acme
  slug: public-api
  version: "1.0.0"`
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-sdk-installation.js
var XScalarSdkInstallationItem = object({
  lang: string({ typeComment: "Programming language or platform (for example `TypeScript`, `Java`, `Python`)" }),
  description: optional(string({ typeComment: "Installation instructions in Markdown (supports fenced code blocks)" })),
  source: optional(string({
    typeComment: "@deprecated Use `description` instead. When set, it is appended to `description` as a fenced code block (or used on its own when there is no `description`)."
  }))
}, {
  typeName: "XScalarSdkInstallationItem",
  typeComment: "One SDK installation instruction block"
});
var XScalarSdkInstallation2 = object({
  "x-scalar-sdk-installation": optional(array(XScalarSdkInstallationItem, {
    typeComment: "Installation instructions shown in the API reference"
  }))
}, {
  typeName: "XScalarSdkInstallation",
  typeComment: typeCommentWithExample("Scalar SDK installation instructions for the API description.", {
    language: "yaml",
    body: `x-scalar-sdk-installation:
  - lang: TypeScript
    description: Install our SDK from npm with \`npm install @scalar/sdk\``
  })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-scalar-watch-mode.js
var XScalarWatchMode2 = object({
  "x-scalar-watch-mode": optional(boolean({ typeComment: "When true, the document is watched for external file changes" }))
}, {
  typeName: "XScalarWatchMode",
  typeComment: typeCommentWithExample("Whether the document is in watch mode (reloads when the source file changes).", { language: "yaml", body: "x-scalar-watch-mode: true" })
});

// node_modules/@scalar/schemas/dist/extensions/document/x-tags.js
var XTags2 = object({
  "x-tags": optional(array(string(), {
    typeComment: "Ordered list of tag names for this schema object"
  }))
}, {
  typeName: "XTags",
  typeComment: typeCommentWithExample("Custom tag ordering hints for schema objects in the sidebar.", {
    language: "yaml",
    body: `x-tags:
  - users
  - admin`
  })
});

// node_modules/@scalar/schemas/dist/extensions/server/x-scalar-selected-server.js
var XScalarSelectedServer2 = object({
  "x-scalar-selected-server": optional(string({
    typeComment: "The currently selected server. For OpenAPI documents this is the server URL; for AsyncAPI documents this is the server name (key in `document.servers`)."
  }))
}, {
  typeName: "XScalarSelectedServer",
  typeComment: typeCommentWithExample("The currently selected server for this API description. For OpenAPI documents the value is the server URL; for AsyncAPI documents the value is the server name (key in `document.servers`).", {
    language: "yaml",
    body: "x-scalar-selected-server: https://api.example.com"
  })
});

// node_modules/@scalar/schemas/dist/extensions/schema/x-additional-properties-name.js
var XAdditionalPropertiesName2 = object({
  "x-additionalPropertiesName": optional(string({
    typeComment: "Human-readable label for additional properties on this schema"
  }))
}, {
  typeName: "XAdditionalPropertiesName",
  typeComment: typeCommentWithExample("Display name for additional properties on a schema object.", {
    language: "yaml",
    body: "x-additionalPropertiesName: metadata"
  })
});

// node_modules/@scalar/schemas/dist/extensions/schema/x-enum-descriptions.js
var enumDescriptionValue = union([record(string(), string()), array(string())]);
var XEnumDescriptions2 = object({
  "x-enumDescriptions": optional(enumDescriptionValue, {
    typeComment: "Map or list of descriptions keyed by enum value (camelCase spelling)"
  }),
  "x-enum-descriptions": optional(enumDescriptionValue, {
    typeComment: "Map or list of descriptions keyed by enum value (kebab-case spelling)"
  })
}, {
  typeName: "XEnumDescriptions",
  typeComment: typeCommentWithExample("Descriptions for enum values. Keys must match enum values.", {
    language: "yaml",
    body: `x-enumDescriptions:
  other: Other reason`
  })
});

// node_modules/@scalar/schemas/dist/extensions/schema/x-enum-varnames.js
var XEnumVarNames2 = object({
  "x-enum-varnames": optional(array(string(), {
    typeComment: "Display names for enum values (same order as `enum`)"
  })),
  "x-enumNames": optional(array(string(), {
    typeComment: "Alias for x-enum-varnames — display names for enum values"
  }))
}, {
  typeName: "XEnumVarNames",
  typeComment: typeCommentWithExample(`Display names for enum values. Must match the order of the ${typeCommentInlineCode("enum")} array.`, {
    language: "yaml",
    body: `enum: [moon, asteroid]
x-enum-varnames: [Moon, Asteroid]`
  })
});

// node_modules/@scalar/schemas/dist/extensions/schema/x-examples.js
var XExamples2 = object({
  "x-examples": optional(record(string(), any(), {
    typeComment: "Map of example name to example value"
  }))
}, {
  typeName: "XExamples",
  typeComment: typeCommentWithExample("Named examples attached to a schema. Keys are example names; values are the example payloads.", {
    language: "yaml",
    body: `x-examples:
  user:
    id: 1
    name: Ada`
  })
});

// node_modules/@scalar/schemas/dist/extensions/schema/x-variable.js
var XVariable2 = object({
  "x-variable": optional(string({ typeComment: "Variable name used for substitution in the API client" }))
}, {
  typeName: "XVariable",
  typeComment: typeCommentWithExample("References a variable for schema property substitution in the API client.", {
    language: "yaml",
    body: "x-variable: userId"
  })
});

// node_modules/@scalar/schemas/dist/openapi/3.1/discriminator.js
var discriminatorObject = object({
  propertyName: string({
    typeComment: "REQUIRED. The name of the property in the payload that will hold the discriminating value. This property SHOULD be required in the payload schema, as the behavior when the property is absent is undefined."
  }),
  mapping: optional(record(string(), string(), {
    typeComment: "An object to hold mappings between payload values and schema names or URI references."
  }))
}, { typeName: "DiscriminatorObject" });

// node_modules/@scalar/schemas/dist/openapi/3.1/external-docs.js
var externalDocs = object({
  url: string({
    typeComment: "REQUIRED. The URI for the target documentation. This MUST be in the form of a URI."
  }),
  description: optional(string({
    typeComment: "A description of the target documentation. CommonMark syntax MAY be used for rich text representation."
  }))
}, { typeName: "ExternalDocumentationObject" });

// node_modules/@scalar/schemas/dist/general/bundler-extensions.js
var referenceExtensions = object({
  "$status": optional(union([literal("loading"), literal("error")]), {
    typeComment: `Indicates the current status of the reference resolution. Can be either 'loading' while fetching the reference or 'error' if the resolution failed.`
  }),
  "$global": optional(boolean({
    typeComment: "Indicates whether this reference should be resolved globally across all documents, rather than just within the current document context."
  }))
}, { typeName: "ReferenceObjectExtensions" });

// node_modules/@scalar/schemas/dist/openapi/3.1/reference.js
var reference = object({
  "$ref": string({ typeComment: "REQUIRED. The reference identifier. This MUST be in the form of a URI." }),
  summary: optional(string({
    typeComment: "A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect."
  })),
  description: optional(string({
    typeComment: "A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect."
  }))
}, {
  typeName: "ReferenceObject"
});
var normalRef = (inner) => union([reference, inner]);

// node_modules/@scalar/schemas/dist/openapi/3.1/xml.js
var xml = object({
  name: optional(string({
    typeComment: 'Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being "array" (outside the items), it will affect the wrapping element if and only if wrapped is true. If wrapped is false, it will be ignored.'
  })),
  namespace: optional(string({
    typeComment: "The URI of the namespace definition. Value MUST be in the form of a non-relative URI."
  })),
  prefix: optional(string({ typeComment: "The prefix to be used for the name." })),
  attribute: optional(boolean({
    typeComment: "Declares whether the property definition translates to an attribute instead of an element. Default value is false."
  })),
  wrapped: optional(boolean({
    typeComment: 'MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being "array" (outside the items).'
  }))
}, { typeName: "XMLObject" });

// node_modules/@scalar/schemas/dist/openapi/3.1/schema.js
var schemaExtensionObjects = [
  XScalarIgnore2,
  XInternal2,
  XVariable2,
  XExamples2,
  XEnumDescriptions2,
  XEnumVarNames2,
  XAdditionalPropertiesName2,
  XTags2
];
var coreSchemaProperties = object({
  name: optional(string({ typeComment: "Schema name (extension)." })),
  title: optional(string({ typeComment: "A title for the schema." })),
  description: optional(string({ typeComment: "A description of the schema." })),
  default: optional(any({ typeComment: "Default value for the schema." })),
  enum: optional(array(any(), { typeComment: "Array of allowed values.", typeName: "JsonSchemaEnum" })),
  const: optional(any({ typeComment: "Constant value that must match exactly." })),
  contentMediaType: optional(string({ typeComment: "Media type for content validation." })),
  contentEncoding: optional(string({ typeComment: "Content encoding." })),
  contentSchema: optional(normalRef(lazy(() => schema))),
  deprecated: optional(boolean({ typeComment: "Whether the schema is deprecated." })),
  discriminator: optional(discriminatorObject),
  readOnly: optional(boolean({ typeComment: "Whether the schema is read-only." })),
  writeOnly: optional(boolean({ typeComment: "Whether the schema is write-only." })),
  xml: optional(xml),
  externalDocs: optional(externalDocs),
  example: optional(any({
    typeComment: "A free-form field to include an example of an instance for this schema. Deprecated in favor of the JSON Schema examples keyword."
  })),
  examples: optional(array(any(), {
    typeComment: "An array of examples of valid instances for this schema. This keyword follows the JSON Schema Draft 2020-12 specification.",
    typeName: "SchemaExamplesArray"
  })),
  allOf: optional(array(normalRef(lazy(() => schema)), { typeName: "SchemaObjectAllOf" })),
  oneOf: optional(array(normalRef(lazy(() => schema)), { typeName: "SchemaObjectOneOf" })),
  anyOf: optional(array(normalRef(lazy(() => schema)), { typeName: "SchemaObjectAnyOf" })),
  not: optional(normalRef(lazy(() => schema)))
});
var numericValidationKeywords = object({
  multipleOf: optional(number({ typeComment: "Number must be a multiple of this value." })),
  maximum: optional(number({ typeComment: "Maximum value (inclusive)." })),
  exclusiveMaximum: optional(number({ typeComment: "Maximum value (exclusive)." })),
  minimum: optional(number({ typeComment: "Minimum value (inclusive)." })),
  exclusiveMinimum: optional(number({ typeComment: "Minimum value (exclusive)." }))
});
var numericSchema = intersection([
  object({
    type: union([literal("number"), literal("integer")]),
    format: optional(string({ typeComment: "Different subtypes." }))
  }),
  numericValidationKeywords
], { typeName: "NumberSchemaObject" });
var stringValidationKeywords = object({
  maxLength: optional(number({ typeComment: "Maximum string length." })),
  minLength: optional(number({ typeComment: "Minimum string length." })),
  pattern: optional(string({ typeComment: "Regular expression pattern." }))
});
var stringSchema = intersection([
  object({
    type: literal("string"),
    format: optional(string({ typeComment: "Different subtypes." }))
  }),
  stringValidationKeywords
], { typeName: "StringSchemaObject" });
var objectValidationKeywords = object({
  maxProperties: optional(number({ typeComment: "Maximum number of properties." })),
  minProperties: optional(number({ typeComment: "Minimum number of properties." })),
  properties: optional(record(string(), normalRef(lazy(() => schema)), { typeName: "SchemaObjectProperties" })),
  required: optional(array(string(), { typeName: "SchemaObjectRequired" })),
  additionalProperties: optional(union([normalRef(lazy(() => schema)), object({}), boolean()], {
    typeName: "SchemaObjectAdditionalProperties"
  })),
  patternProperties: optional(record(string(), normalRef(lazy(() => schema)), { typeName: "SchemaObjectPatternProperties" })),
  propertyNames: optional(normalRef(lazy(() => schema)))
});
var objectSchema = intersection([
  object({
    type: literal("object")
  }),
  objectValidationKeywords
], { typeName: "ObjectSchemaObject" });
var arrayValidationKeywords = object({
  maxItems: optional(number({ typeComment: "Maximum number of items in array." })),
  minItems: optional(number({ typeComment: "Minimum number of items in array." })),
  uniqueItems: optional(boolean({ typeComment: "Whether array items must be unique." })),
  items: optional(normalRef(lazy(() => schema))),
  prefixItems: optional(array(normalRef(lazy(() => schema)), { typeComment: "Schema for tuple validation." }))
});
var arraySchema = intersection([
  object({
    type: literal("array")
  }),
  arrayValidationKeywords
], { typeName: "ArraySchemaObject" });
var schemaTypeMulti = union([
  literal("null"),
  literal("boolean"),
  literal("string"),
  literal("number"),
  literal("integer"),
  literal("object"),
  literal("array")
], { typeName: "SchemaObjectMultiTypeKeywords" });
var otherTypeSchema = object({
  type: union([literal("null"), literal("boolean")], {
    typeName: "SchemaObjectOtherTypeKeyword"
  })
});
var multiTypeSchema = intersection([
  object({
    type: array(schemaTypeMulti, {
      typeName: "SchemaObjectMultiTypeKeywordArray"
    }),
    format: optional(string({ typeComment: "Different subtypes." }))
  }),
  numericValidationKeywords,
  stringValidationKeywords,
  arrayValidationKeywords,
  objectValidationKeywords
], { typeName: "MultiTypeSchemaObject" });
var schema = intersection([
  coreSchemaProperties,
  ...schemaExtensionObjects,
  union([otherTypeSchema, numericSchema, stringSchema, objectSchema, arraySchema, multiTypeSchema, object({})])
], { typeName: "SchemaObject" });

// node_modules/@scalar/schemas/dist/asyncapi/3.1/reference.js
var asyncApiReferenceObject = object({
  "$ref": string({ typeComment: "REQUIRED. The reference string." })
}, { typeName: "AsyncApiReferenceObject", typeComment: "JSON Reference for AsyncAPI components." });
var e = (value) => {
  if (isObject(value) && "$ref" in value) {
    return e(value["$ref-value"]);
  }
  return value;
};
var asyncApiResolvedReference = (schema2) => intersection([asyncApiReferenceObject, object({ "$ref-value": optional(evaluate(e, schema2)) }), referenceExtensions]);
var recursiveRef = (schema2) => union([schema2, asyncApiResolvedReference(schema2)]);

// node_modules/@scalar/schemas/dist/asyncapi/3.1/schema-payload.js
var asyncApiMultiFormatSchemaObject = object({
  schemaFormat: optional(string({
    typeComment: "Media type identifying the schema format. When omitted, defaults to the AsyncAPI JSON Schema vocabulary for the document version."
  })),
  schema: unknown({
    typeComment: "REQUIRED. Schema definition in the format given by schemaFormat."
  })
}, { typeName: "AsyncApiMultiFormatSchemaObject" });
var asyncApiSchemaJsonShape = union([literal(true), literal(false), schema], {
  typeName: "AsyncApiSchemaJsonShape"
});
var asyncApiSchemaObjectOrReference = recursiveRef(asyncApiSchemaJsonShape);
var asyncApiSchemaPayload = recursiveRef(union([asyncApiMultiFormatSchemaObject, asyncApiSchemaJsonShape], {
  typeName: "AsyncApiMultiFormatSchemaOrSchemaObject"
}));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/ws-binding.js
var asyncApiWsBindingObject = object({
  method: optional(union([literal("GET"), literal("POST")], {
    typeComment: "HTTP method used when establishing the WebSocket connection (typically GET)."
  })),
  query: optional(asyncApiSchemaObjectOrReference, {
    typeComment: "Schema Object describing WebSocket handshake query parameters (type object with properties). May be a Reference Object."
  }),
  headers: optional(asyncApiSchemaObjectOrReference, {
    typeComment: "Schema Object describing HTTP headers sent during the WebSocket handshake (type object with properties). May be a Reference Object."
  }),
  bindingVersion: optional(string({
    typeComment: 'Version of the WebSocket binding. When omitted, "latest" is assumed per the binding spec.'
  }))
}, {
  typeName: "AsyncApiWsBindingObject",
  typeComment: "AsyncAPI WebSocket binding for handshake method, query, and headers."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/bindings.js
var ASYNCAPI_3_1_BINDING_PROTOCOL_KEYS = [
  "http",
  "ws",
  "kafka",
  "anypointmq",
  "amqp",
  "amqp1",
  "mqtt",
  "mqtt5",
  "nats",
  "jms",
  "sns",
  "solace",
  "sqs",
  "stomp",
  "redis",
  "mercure",
  "ibmmq",
  "googlepubsub",
  "pulsar",
  "ros2"
];
var optionalBindingPayload = () => optional(unknown({
  typeComment: "Protocol-specific binding definition (see AsyncAPI protocol bindings)."
}));
var bindingObjectProperties = () => {
  const properties = {};
  for (const key of ASYNCAPI_3_1_BINDING_PROTOCOL_KEYS) {
    properties[key] = key === "ws" ? optional(asyncApiWsBindingObject) : optionalBindingPayload();
  }
  return properties;
};
var makeBindingsObject = (typeName, typeComment) => object(bindingObjectProperties(), { typeName, typeComment });
var asyncApiServerBindingsObject = makeBindingsObject("AsyncApiServerBindingsObject", "Map describing protocol-specific definitions for a server (AsyncAPI 3.1.0).");
var asyncApiChannelBindingsObject = makeBindingsObject("AsyncApiChannelBindingsObject", "Map describing protocol-specific definitions for a channel (AsyncAPI 3.1.0).");
var asyncApiOperationBindingsObject = makeBindingsObject("AsyncApiOperationBindingsObject", "Map describing protocol-specific definitions for an operation (AsyncAPI 3.1.0).");
var asyncApiMessageBindingsObject = makeBindingsObject("AsyncApiMessageBindingsObject", "Map describing protocol-specific definitions for a message (AsyncAPI 3.1.0).");

// node_modules/@scalar/schemas/dist/asyncapi/3.1/external-documentation.js
var asyncApiExternalDocumentationObject = recursiveRef(object({
  description: optional(string({
    typeComment: "A short description of the target documentation. CommonMark syntax MAY be used for rich text representation."
  })),
  url: string({
    typeComment: "REQUIRED. The URL for the target documentation. This MUST be in the form of an absolute URL."
  })
}, { typeName: "AsyncApiExternalDocumentationObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/correlation-id.js
var asyncApiCorrelationIdObject = recursiveRef(object({
  description: optional(string({
    typeComment: "An optional description of the identifier. CommonMark syntax MAY be used for rich text representation."
  })),
  location: string({
    typeComment: "REQUIRED. A runtime expression that specifies the location of the correlation ID."
  })
}, { typeName: "AsyncApiCorrelationIdObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/message-example.js
var asyncApiMessageExampleObject = object({
  headers: optional(record(string(), unknown(), {
    typeComment: "Example headers; MUST validate against the Message Object headers field when present."
  })),
  payload: optional(unknown({ typeComment: "Example payload; MUST validate against the Message Object payload field when present." })),
  name: optional(string({ typeComment: "A machine-friendly name." })),
  summary: optional(string({ typeComment: "A short summary of what the example is about." }))
}, { typeName: "AsyncApiMessageExampleObject" });

// node_modules/@scalar/schemas/dist/asyncapi/3.1/tag.js
var asyncApiTagObject = recursiveRef(object({
  name: string({ typeComment: "REQUIRED. The name of the tag." }),
  description: optional(string({
    typeComment: "A short description for the tag. CommonMark syntax MAY be used for rich text representation."
  })),
  externalDocs: optional(asyncApiExternalDocumentationObject)
}, { typeName: "AsyncApiTagObject" }));
var asyncApiTagsObject = array(asyncApiTagObject, {
  typeName: "AsyncApiTagsObject",
  typeComment: "A list of Tag Objects (entries MAY be Reference Objects)."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/message-trait.js
var asyncApiMessageTraitObject = recursiveRef(object({
  headers: optional(asyncApiSchemaPayload),
  correlationId: optional(asyncApiCorrelationIdObject),
  contentType: optional(string({
    typeComment: "The content type to use when encoding/decoding a message payload (for example application/json)."
  })),
  name: optional(string({ typeComment: "A machine-friendly name for the message." })),
  title: optional(string({ typeComment: "A human-friendly title for the message." })),
  summary: optional(string({ typeComment: "A short summary of what the message is about." })),
  description: optional(string({
    typeComment: "A verbose explanation of the message. CommonMark syntax MAY be used for rich text representation."
  })),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject),
  bindings: optional(recursiveRef(asyncApiMessageBindingsObject)),
  examples: optional(array(recursiveRef(asyncApiMessageExampleObject)))
}, { typeName: "AsyncApiMessageTraitObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/message.js
var asyncApiMessageObject = lazy(() => recursiveRef(object({
  headers: optional(asyncApiSchemaPayload),
  payload: optional(asyncApiSchemaPayload),
  correlationId: optional(asyncApiCorrelationIdObject),
  contentType: optional(string({
    typeComment: "The content type to use when encoding/decoding a message payload (for example application/json)."
  })),
  name: optional(string({ typeComment: "A machine-friendly name for the message." })),
  title: optional(string({ typeComment: "A human-friendly title for the message." })),
  summary: optional(string({ typeComment: "A short summary of what the message is about." })),
  description: optional(string({
    typeComment: "A verbose explanation of the message. CommonMark syntax MAY be used for rich text representation."
  })),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject),
  bindings: optional(recursiveRef(asyncApiMessageBindingsObject)),
  examples: optional(array(recursiveRef(asyncApiMessageExampleObject))),
  traits: optional(array(asyncApiMessageTraitObject))
}, { typeName: "AsyncApiMessageObject" })));
var asyncApiMessagesObject = record(string(), asyncApiMessageObject, {
  typeName: "AsyncApiMessagesObject",
  typeComment: "Map of messageId to Message Object or Reference Object."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/parameter.js
var asyncApiParameterObject = recursiveRef(object({
  enum: optional(array(string(), { typeComment: "An enumeration of string values for substitution." })),
  default: optional(string({
    typeComment: "The default value to use for substitution, and to send, if an alternate value is not supplied."
  })),
  description: optional(string({
    typeComment: "An optional description for the parameter. CommonMark syntax MAY be used for rich text representation."
  })),
  examples: optional(array(string(), { typeComment: "Examples of the parameter value." })),
  location: optional(string({ typeComment: "A runtime expression that specifies the location of the parameter value." }))
}, { typeName: "AsyncApiParameterObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/parameters.js
var asyncApiParametersObject = record(string(), asyncApiParameterObject, {
  typeName: "AsyncApiParametersObject",
  typeComment: "Map of parameter name to Parameter Object or Reference Object."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/oauth.js
var asyncApiOAuthFlowObject = object({
  authorizationUrl: optional(string({
    typeComment: "REQUIRED for implicit and authorizationCode flows. The authorization URL (absolute URL)."
  })),
  tokenUrl: optional(string({
    typeComment: "REQUIRED for password, clientCredentials, and authorizationCode flows. The token URL (absolute URL)."
  })),
  refreshUrl: optional(string({
    typeComment: "The URL to be used for obtaining refresh tokens. This MUST be in the form of an absolute URL."
  })),
  availableScopes: optional(record(string(), string(), {
    typeComment: "REQUIRED for OAuth2 flows. Map of scope name to a short description."
  }))
}, { typeName: "AsyncApiOAuthFlowObject" });
var asyncApiOAuthFlowsObject = object({
  implicit: optional(recursiveRef(asyncApiOAuthFlowObject)),
  password: optional(recursiveRef(asyncApiOAuthFlowObject)),
  clientCredentials: optional(recursiveRef(asyncApiOAuthFlowObject)),
  authorizationCode: optional(recursiveRef(asyncApiOAuthFlowObject))
}, { typeName: "AsyncApiOAuthFlowsObject" });

// node_modules/@scalar/schemas/dist/asyncapi/3.1/security-scheme.js
var asyncApiSecuritySchemeObject = recursiveRef(object({
  type: union([
    literal("userPassword"),
    literal("apiKey"),
    literal("X509"),
    literal("symmetricEncryption"),
    literal("asymmetricEncryption"),
    literal("httpApiKey"),
    literal("http"),
    literal("oauth2"),
    literal("openIdConnect"),
    literal("plain"),
    literal("scramSha256"),
    literal("scramSha512"),
    literal("gssapi")
  ], {
    typeComment: "REQUIRED. Security scheme type: userPassword, apiKey, X509, symmetricEncryption, asymmetricEncryption, httpApiKey, http, oauth2, openIdConnect, plain, scramSha256, scramSha512, gssapi."
  }),
  description: optional(string({
    typeComment: "A short description for security scheme. CommonMark syntax MAY be used for rich text representation."
  })),
  name: optional(string({ typeComment: "REQUIRED for httpApiKey. The name of the header, query or cookie parameter." })),
  "in": optional(union([literal("user"), literal("password"), literal("query"), literal("header"), literal("cookie")], {
    typeComment: "REQUIRED for apiKey and httpApiKey. Location of the API key: user, password, query, header, or cookie."
  })),
  scheme: optional(string({
    typeComment: "REQUIRED for http. The name of the HTTP Authorization scheme to be used in the Authorization header."
  })),
  bearerFormat: optional(string({ typeComment: "A hint to the client to identify how the bearer token is formatted." })),
  flows: optional(recursiveRef(asyncApiOAuthFlowsObject)),
  openIdConnectUrl: optional(string({
    typeComment: "REQUIRED for openIdConnect. OpenId Connect URL to discover OAuth2 configuration values (absolute URL)."
  })),
  scopes: optional(array(string(), { typeComment: "List of the needed scope names for oauth2 and openIdConnect." }))
}, { typeName: "AsyncApiSecuritySchemeObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/server-variable.js
var asyncApiServerVariableObject = recursiveRef(object({
  enum: optional(array(string(), { typeComment: "An enumeration of string values for substitution." })),
  default: optional(string({
    typeComment: "The default value to use for substitution, and to send, if an alternate value is not supplied."
  })),
  description: optional(string({
    typeComment: "An optional description for the server variable. CommonMark syntax MAY be used for rich text representation."
  })),
  examples: optional(array(string(), { typeComment: "Examples of the server variable." }))
}, { typeName: "AsyncApiServerVariableObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/server.js
var asyncApiServerObject = recursiveRef(object({
  host: string({
    typeComment: "REQUIRED. The server host name. It MAY include the port. Supports Server Variables in {braces}."
  }),
  protocol: string({ typeComment: "REQUIRED. The protocol this server supports for connection." }),
  protocolVersion: optional(string({ typeComment: "The version of the protocol used for connection (for example 0-9-1 for AMQP)." })),
  pathname: optional(string({
    typeComment: "The path to a resource in the host. Supports Server Variables in {braces}."
  })),
  description: optional(string({
    typeComment: "An optional string describing the server. CommonMark syntax MAY be used for rich text representation."
  })),
  title: optional(string({ typeComment: "A human-friendly title for the server." })),
  summary: optional(string({ typeComment: "A short summary of the server." })),
  variables: optional(record(string(), asyncApiServerVariableObject, {
    typeComment: "Map between a variable name and its Server Variable Object or Reference Object."
  })),
  security: optional(array(asyncApiSecuritySchemeObject, {
    typeComment: "Alternative security schemes for this server; only one of the security scheme objects need to be satisfied."
  })),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject),
  bindings: optional(recursiveRef(asyncApiServerBindingsObject))
}, { typeName: "AsyncApiServerObject" }));
var asyncApiServersObject = record(string(), asyncApiServerObject, {
  typeName: "AsyncApiServersObject",
  typeComment: "Map of server name to Server Object or Reference Object."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/channel.js
var asyncApiChannelObject = lazy(() => object({
  address: optional(union([string(), nullable()], { typeComment: "Channel address or null when unknown." })),
  messages: optional(asyncApiMessagesObject),
  title: optional(string({ typeComment: "A human-friendly title for the channel." })),
  summary: optional(string({ typeComment: "A short summary of the channel." })),
  description: optional(string({
    typeComment: "An optional description of this channel. CommonMark syntax MAY be used for rich text representation."
  })),
  servers: optional(array(asyncApiResolvedReference(asyncApiServerObject), {
    typeComment: "References to Server definitions where this channel is available (Reference Objects only in the raw document)."
  })),
  parameters: optional(asyncApiParametersObject),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject),
  bindings: optional(recursiveRef(asyncApiChannelBindingsObject))
}, { typeName: "AsyncApiChannelObject" }));
var asyncApiChannelsObject = record(string(), recursiveRef(asyncApiChannelObject), {
  typeName: "AsyncApiChannelsObject",
  typeComment: "Map of channelId to Channel Object or Reference Object."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/operation-reply-address.js
var asyncApiOperationReplyAddressObject = recursiveRef(object({
  description: optional(string({
    typeComment: "An optional description of the address. CommonMark syntax MAY be used for rich text representation."
  })),
  location: string({
    typeComment: "REQUIRED. A runtime expression that specifies the location of the reply address."
  })
}, { typeName: "AsyncApiOperationReplyAddressObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/operation-reply.js
var asyncApiOperationReplyObject = lazy(() => recursiveRef(object({
  address: optional(asyncApiOperationReplyAddressObject),
  channel: optional(asyncApiResolvedReference(asyncApiChannelObject)),
  messages: optional(array(asyncApiResolvedReference(asyncApiMessageObject), {
    typeComment: "List of $ref pointers to Message Objects used as reply payloads (Reference Objects only in the raw document)."
  }))
}, { typeName: "AsyncApiOperationReplyObject" })));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/operation-trait.js
var asyncApiOperationTraitObject = recursiveRef(object({
  title: optional(string({ typeComment: "A human-friendly title for the operation." })),
  summary: optional(string({ typeComment: "A short summary of what the operation is about." })),
  description: optional(string({
    typeComment: "A verbose explanation of the operation. CommonMark syntax MAY be used for rich text representation."
  })),
  security: optional(array(asyncApiSecuritySchemeObject, {
    typeComment: "Security schemes for this operation. Only one of the security scheme objects MUST be satisfied."
  })),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject),
  bindings: optional(recursiveRef(asyncApiOperationBindingsObject))
}, { typeName: "AsyncApiOperationTraitObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/operation.js
var asyncApiOperationObject = lazy(() => recursiveRef(object({
  action: union([literal("send"), literal("receive")], {
    typeComment: "REQUIRED. send when the application sends to the channel; receive when it receives from the channel."
  }),
  channel: asyncApiResolvedReference(asyncApiChannelObject),
  title: optional(string({ typeComment: "A human-friendly title for the operation." })),
  summary: optional(string({ typeComment: "A short summary of what the operation is about." })),
  description: optional(string({
    typeComment: "A verbose explanation of the operation. CommonMark syntax MAY be used for rich text representation."
  })),
  security: optional(array(asyncApiSecuritySchemeObject, {
    typeComment: "Security schemes for this operation. Only one of the security scheme objects MUST be satisfied."
  })),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject),
  bindings: optional(recursiveRef(asyncApiOperationBindingsObject)),
  traits: optional(array(asyncApiOperationTraitObject)),
  messages: optional(array(asyncApiResolvedReference(asyncApiMessageObject), {
    typeComment: "Subset of channel messages as Reference Objects only. Omit to include all channel messages; use [] for none."
  })),
  reply: optional(asyncApiOperationReplyObject)
}, { typeName: "AsyncApiOperationObject" })));
var asyncApiOperationsObject = record(string(), asyncApiOperationObject, {
  typeName: "AsyncApiOperationsObject",
  typeComment: "Map of operationId to Operation Object or Reference Object."
});

// node_modules/@scalar/schemas/dist/asyncapi/3.1/components.js
var asyncApiComponentsObject = lazy(() => object({
  schemas: optional(record(string(), asyncApiSchemaPayload, {
    typeComment: "Reusable Multi Format Schema, Schema Object, or Reference Object."
  })),
  servers: optional(record(string(), asyncApiServerObject)),
  channels: optional(asyncApiChannelsObject),
  operations: optional(record(string(), asyncApiOperationObject)),
  messages: optional(record(string(), asyncApiMessageObject)),
  securitySchemes: optional(record(string(), asyncApiSecuritySchemeObject)),
  serverVariables: optional(record(string(), asyncApiServerVariableObject)),
  parameters: optional(record(string(), asyncApiParameterObject)),
  correlationIds: optional(record(string(), asyncApiCorrelationIdObject)),
  replies: optional(record(string(), asyncApiOperationReplyObject)),
  replyAddresses: optional(record(string(), asyncApiOperationReplyAddressObject)),
  externalDocs: optional(record(string(), asyncApiExternalDocumentationObject)),
  tags: optional(record(string(), asyncApiTagObject)),
  operationTraits: optional(record(string(), asyncApiOperationTraitObject)),
  messageTraits: optional(record(string(), asyncApiMessageTraitObject)),
  serverBindings: optional(record(string(), recursiveRef(asyncApiServerBindingsObject))),
  channelBindings: optional(record(string(), recursiveRef(asyncApiChannelBindingsObject))),
  operationBindings: optional(record(string(), recursiveRef(asyncApiOperationBindingsObject))),
  messageBindings: optional(record(string(), recursiveRef(asyncApiMessageBindingsObject)))
}, {
  typeName: "AsyncApiComponentsObject",
  typeComment: "Reusable objects. Definitions here have no effect unless referenced from outside components."
}));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/contact.js
var asyncApiContactObject = object({
  name: optional(string({ typeComment: "The identifying name of the contact person/organization." })),
  url: optional(string({
    typeComment: "The URL pointing to the contact information. This MUST be in the form of an absolute URL."
  })),
  email: optional(string({ typeComment: "The email address of the contact person/organization." }))
}, { typeName: "AsyncApiContactObject" });

// node_modules/@scalar/schemas/dist/asyncapi/3.1/license.js
var asyncApiLicenseObject = recursiveRef(object({
  name: string({ typeComment: "REQUIRED. The license name used for the API." }),
  url: optional(string({
    typeComment: "A URL to the license used for the API. This MUST be in the form of an absolute URL."
  }))
}, { typeName: "AsyncApiLicenseObject" }));

// node_modules/@scalar/schemas/dist/asyncapi/3.1/info.js
var asyncApiInfoObject = object({
  title: string({ typeComment: "REQUIRED. The title of the application." }),
  version: string({
    typeComment: "REQUIRED. Provides the version of the application API (not to be confused with the AsyncAPI Specification version)."
  }),
  description: optional(string({
    typeComment: "A short description of the application. CommonMark syntax MAY be used for rich text representation."
  })),
  termsOfService: optional(string({ typeComment: "A URL to the Terms of Service for the API (absolute URL)." })),
  contact: optional(asyncApiContactObject),
  license: optional(asyncApiLicenseObject),
  tags: optional(asyncApiTagsObject),
  externalDocs: optional(asyncApiExternalDocumentationObject)
}, { typeName: "AsyncApiInfoObject" });

// node_modules/@scalar/schemas/dist/asyncapi/3.1/asyncapi-object.js
var asyncApiExtensions = intersection([
  XOriginalAasVersion,
  XScalarNavigation,
  XScalarOriginalSourceUrl2,
  XScalarOriginalDocumentHash2,
  XScalarIsDirty2,
  XScalarWatchMode2,
  XScalarRegistryMeta2,
  XScalarSelectedServer2
], {
  typeName: "AsyncApiExtensions",
  typeComment: "AsyncAPI document-level Scalar extensions shared with workspace tooling."
});
var asyncApiDocumentCore = object({
  asyncapi: string({
    typeComment: "REQUIRED. AsyncAPI Specification version (major.minor.patch). Patch MAY include a hyphen suffix."
  }),
  id: optional(string({
    typeComment: "Identifier of the application the AsyncAPI document is defining (URI, RFC3986)."
  })),
  info: asyncApiInfoObject,
  servers: optional(asyncApiServersObject),
  defaultContentType: optional(string({
    typeComment: "Default content type when encoding/decoding a message payload (for example application/json)."
  })),
  channels: optional(asyncApiChannelsObject),
  operations: optional(asyncApiOperationsObject),
  components: optional(recursiveRef(asyncApiComponentsObject))
}, {
  typeName: "AsyncApiDocumentCore",
  typeComment: "Root AsyncAPI 3.1.0 document combining resource listing and API declaration."
});
var asyncApiObjectSchema = intersection([asyncApiDocumentCore, asyncApiExtensions], {
  typeName: "AsyncApiObject",
  typeComment: "Root AsyncAPI 3.1.0 document including Scalar workspace extensions (AsyncApiExtensionsSchema)."
});

// node_modules/@scalar/workspace-store/dist/entities/history/schema.js
var HeaderSchema = Type.Object({
  name: Type.String(),
  value: Type.String()
});
var RequestSchema = Type.Object({
  /** Absolute URL of the request (fragments are not included). */
  url: Type.String(),
  /** Request method (`GET`, `POST`, ...). */
  method: Type.String(),
  /** Request HTTP Version. */
  httpVersion: Type.String(),
  /** List of header objects. */
  headers: Type.Array(HeaderSchema),
  /** List of cookie objects. */
  cookies: Type.Array(HeaderSchema),
  /**
   * Total number of bytes from the start of the HTTP request message until
   * (and including) the double CRLF before the body.
   *
   * Set to `-1` if the info is not available.
   */
  headersSize: Type.Number(),
  /** List of query string objects. */
  queryString: Type.Array(HeaderSchema),
  /**
   * Size of the request body (POST data payload) in bytes.
   *
   * Set to `-1` if the info is not available.
   */
  bodySize: Type.Number(),
  /** Posted data info. */
  postData: Type.Optional(Type.Union([
    Type.Object({
      /** Mime type of posted data. */
      mimeType: Type.String(),
      text: Type.String()
    }),
    Type.Object({
      /** Mime type of posted data. */
      mimeType: Type.String(),
      params: Type.Array(Type.Object({ name: Type.String(), value: Type.Optional(Type.String()) }))
    })
  ]))
});
var ResponseSchema = Type.Object({
  status: Type.Number(),
  statusText: Type.String(),
  headers: Type.Array(HeaderSchema),
  cookies: Type.Array(HeaderSchema),
  httpVersion: Type.String(),
  redirectURL: Type.String(),
  headersSize: Type.Number(),
  bodySize: Type.Number(),
  content: Type.Object({
    size: Type.Number(),
    mimeType: Type.String(),
    encoding: Type.Optional(Type.String()),
    text: Type.Optional(Type.String())
  })
});
var HistoryEntrySchema = Type.Object({
  /**
   * Total elapsed time of the request in milliseconds.
   *
   * This is the sum of all timings available in the timings object
   * (i.e. not including `-1` values).
   */
  time: Type.Number(),
  /** Timestamp of the request. */
  timestamp: Type.Number(),
  /** Detailed info about the request. */
  request: RequestSchema,
  /** Detailed info about the response. */
  response: ResponseSchema,
  /** Meta data about the request. */
  meta: Type.Object({
    /** The example key for the request. */
    example: Type.String()
  }),
  requestMetadata: Type.Object({
    /** Variables used in the request.
     *
     * Since HAR format does not support variables, we need to store them here.
     * This way we can easily re-use the request with the same variables.
     * We don't need to do any server + variables matching and replacement.
     */
    variables: Type.Record(Type.String(), Type.String())
    // Other meta fields (e.g., server) can be added here in the future.
  })
});
var PathMethodHistorySchema = Type.Record(Type.String(), Type.Record(Type.String(), Type.Array(HistoryEntrySchema)));
var DocumentHistorySchema = Type.Record(Type.String(), PathMethodHistorySchema);

// node_modules/@scalar/workspace-store/dist/entities/history/index.js
var HISTORY_LIMIT = 5;
var createHistoryStore = ({ hooks }) => {
  const history = reactive({});
  const getHistory = (documentName, path, method) => {
    var _a, _b;
    return (_b = (_a = history[documentName]) == null ? void 0 : _a[path]) == null ? void 0 : _b[method];
  };
  const addHistory = (documentName, path, method, entry) => {
    var _a, _b, _c;
    history[documentName] || (history[documentName] = {});
    (_a = history[documentName])[path] || (_a[path] = {});
    (_b = history[documentName][path])[method] || (_b[method] = []);
    if (history[documentName][path][method].length >= HISTORY_LIMIT) {
      history[documentName][path][method] = unpackProxyObject(history[documentName][path][method].filter((_, i) => i !== 0), { depth: 1 });
    }
    history[documentName][path][method].push(entry);
    (_c = hooks == null ? void 0 : hooks.onHistoryChange) == null ? void 0 : _c.call(hooks, documentName);
  };
  const clearOperationHistory = (documentName, path, method) => {
    var _a, _b, _c;
    (_b = (_a = history[documentName]) == null ? void 0 : _a[path]) == null ? true : delete _b[method];
    (_c = hooks == null ? void 0 : hooks.onHistoryChange) == null ? void 0 : _c.call(hooks, documentName);
  };
  const clearPathHistory = (documentName, path) => {
    var _a, _b;
    (_a = history[documentName]) == null ? true : delete _a[path];
    (_b = hooks == null ? void 0 : hooks.onHistoryChange) == null ? void 0 : _b.call(hooks, documentName);
  };
  const clearDocumentHistory = (documentName) => {
    var _a;
    delete history[documentName];
    (_a = hooks == null ? void 0 : hooks.onHistoryChange) == null ? void 0 : _a.call(hooks, documentName);
  };
  const load = (data) => {
    const coercedData = coerceValue(DocumentHistorySchema, data);
    safeAssign(history, coercedData);
    Object.keys(coercedData).forEach((documentName) => {
      var _a;
      (_a = hooks == null ? void 0 : hooks.onHistoryChange) == null ? void 0 : _a.call(hooks, documentName);
    });
  };
  const exportHistory = () => {
    return unpackProxyObject(history);
  };
  return {
    getHistory,
    addHistory,
    clearOperationHistory,
    clearPathHistory,
    clearDocumentHistory,
    load,
    export: exportHistory
  };
};

// node_modules/@scalar/workspace-store/dist/helpers/get-fetch.js
var getFetch = (config) => {
  if (config.fetch) {
    return config.fetch;
  }
  return (input, init) => fetch(redirectToProxy(config.proxyUrl, input.toString()), init);
};

// node_modules/@scalar/workspace-store/dist/plugins/bundler/helpers.js
var getResolvedRef = (node, context) => {
  if (node && typeof node === "object" && "$ref" in node && typeof node["$ref"] === "string" && node["$ref"].startsWith("#")) {
    const segments = getSegmentsFromPath(node["$ref"].slice(1));
    return getResolvedRef(getValueAtPath(context.rootNode, segments), context);
  }
  return node;
};

// node_modules/@scalar/workspace-store/dist/plugins/bundler/index.js
var loadingStatus = () => {
  return {
    type: "lifecycle",
    onResolveStart: (node) => {
      node["$status"] = "loading";
    },
    onResolveError: (node) => {
      node["$status"] = "error";
    },
    onResolveSuccess: (node) => {
      delete node["$status"];
    }
  };
};
var externalValueResolver = () => {
  return {
    type: "lifecycle",
    onAfterNodeProcess: async (node, context) => {
      const externalValue = node["externalValue"];
      const cache = context.resolutionCache;
      if (typeof externalValue !== "string") {
        return;
      }
      const loader = context.loaders.find((it) => it.validate(externalValue));
      if (!loader) {
        return;
      }
      if (!cache.has(externalValue)) {
        cache.set(externalValue, loader.exec(externalValue));
      }
      const result = await cache.get(externalValue);
      if (result == null ? void 0 : result.ok) {
        node["value"] = result.data;
      }
    }
  };
};
var refsEverywhere = () => {
  return {
    type: "lifecycle",
    onBeforeNodeProcess: async (node, context) => {
      const { path, resolutionCache, parentNode } = context;
      const ref2 = node["$ref"];
      if (typeof ref2 !== "string") {
        return;
      }
      if (!parentNode || !path.length) {
        return;
      }
      const loader = context.loaders.find((it) => it.validate(ref2));
      if (!loader) {
        return;
      }
      if (path[0] === "info") {
        if (!resolutionCache.has(ref2)) {
          resolutionCache.set(ref2, loader.exec(ref2));
        }
        const result = await resolutionCache.get(ref2);
        if (result == null ? void 0 : result.ok) {
          parentNode[path.at(-1)] = result.data;
        }
      }
    }
  };
};
var restoreOriginalRefs = () => {
  return {
    type: "lifecycle",
    onBeforeNodeProcess: (node, context) => {
      const ref2 = node["$ref"];
      const root = context.rootNode;
      const extUrls = root["x-ext-urls"];
      if (typeof ref2 !== "string" || typeof extUrls !== "object" || extUrls === null || !isLocalRef(ref2)) {
        return;
      }
      const segments = ref2.split("/");
      const key = segments.at(-1) ?? "";
      node["$ref"] = extUrls[key] ?? ref2;
    }
  };
};
var normalizeAuthSchemes = () => {
  return {
    type: "lifecycle",
    onAfterNodeProcess: (node, context) => {
      const { path } = context;
      if (path.length === 3 && path[0] === "components" && path[1] === "securitySchemes") {
        const targetNode = getResolvedRef(node, context);
        if (typeof targetNode === "object" && targetNode !== null && "scheme" in targetNode && typeof targetNode["scheme"] === "string" && targetNode["scheme"].toLowerCase() !== targetNode["scheme"]) {
          targetNode["scheme"] = targetNode["scheme"].toLowerCase();
        }
      }
    }
  };
};
var normalizeRefs = () => {
  return {
    type: "lifecycle",
    onBeforeNodeProcess: (node, context) => {
      const { path } = context;
      if (typeof node["$ref"] === "string" && !(path[0] === "components" && path[1] === "schemas")) {
        const keepProperties = /* @__PURE__ */ new Set([
          "$ref",
          "summary",
          "description",
          "$status",
          "$id",
          "$anchor",
          "$dynamicAnchor",
          "$dynamicRef",
          "$defs"
        ]);
        Object.keys(node).forEach((key) => {
          if (!keepProperties.has(key)) {
            delete node[key];
          }
        });
      }
    }
  };
};
var syncPathParameters = () => {
  return {
    type: "lifecycle",
    onBeforeNodeProcess: (node, context) => {
      const { path } = context;
      if (path.length !== 2 || path[0] !== "paths" || typeof path[1] !== "string") {
        return;
      }
      const pathString = path[1];
      for (const method of HTTP_METHODS) {
        const operation = getResolvedRef(node[method], context);
        if (!isObject(operation)) {
          continue;
        }
        const isParameterNode = (param) => {
          const resolved = getResolvedRef(param, context);
          return isObject(resolved) && "name" in resolved && typeof resolved.name === "string" && "in" in resolved && typeof resolved.in === "string";
        };
        const isPathParameterNode = (param) => {
          const resolved = getResolvedRef(param, context);
          return isParameterNode(resolved) && resolved.in === "path";
        };
        const existingParameters = ("parameters" in operation && Array.isArray(operation.parameters) ? operation.parameters : []).filter(isParameterNode);
        const existingPathParameters = new Set(existingParameters.map((param) => getResolvedRef(param, context)).filter(isPathParameterNode).map((param) => param.name));
        const pathItemParameters = "parameters" in node && Array.isArray(node.parameters) ? node.parameters : [];
        const pathItemPathParameters = pathItemParameters.filter((param) => {
          const resolved = getResolvedRef(param, context);
          if (!isPathParameterNode(resolved)) {
            return false;
          }
          const result2 = !existingPathParameters.has(resolved.name);
          if (result2) {
            existingPathParameters.add(resolved.name);
          }
          return result2;
        });
        const result = syncParametersForPathChange(pathString, pathString, [...existingParameters, ...pathItemPathParameters], (node2) => getResolvedRef(node2, context));
        if (result.length > 0) {
          operation.parameters = result;
        }
      }
    }
  };
};
var NESTED_INTERNAL_KEYS = ["__scalar_", "$status"];
var removeExtraScalarKeys = () => {
  return {
    type: "lifecycle",
    onBeforeNodeProcess: (node) => {
      if (isObject(node)) {
        for (const key of NESTED_INTERNAL_KEYS) {
          if (key in node) {
            delete node[key];
          }
        }
      }
    }
  };
};

// node_modules/@scalar/workspace-store/dist/schemas/v3.1/openapi/index.js
var externalDocs2 = object({
  url: string({
    typeComment: "REQUIRED. The URI for the target documentation. This MUST be in the form of a URI."
  }),
  description: optional(string({
    typeComment: "A description of the target documentation. CommonMark syntax MAY be used for rich text representation."
  }))
}, { typeName: "ExternalDocumentationObject" });
var xml2 = object({
  name: optional(string({
    typeComment: 'Replaces the name of the element/attribute used for the described schema property. When defined within items, it will affect the name of the individual XML elements within the list. When defined alongside type being "array" (outside the items), it will affect the wrapping element if and only if wrapped is true. If wrapped is false, it will be ignored.'
  })),
  namespace: optional(string({
    typeComment: "The URI of the namespace definition. Value MUST be in the form of a non-relative URI."
  })),
  prefix: optional(string({ typeComment: "The prefix to be used for the name." })),
  attribute: optional(boolean({
    typeComment: "Declares whether the property definition translates to an attribute instead of an element. Default value is false."
  })),
  wrapped: optional(boolean({
    typeComment: 'MAY be used only for an array definition. Signifies whether the array is wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect only when defined alongside type being "array" (outside the items).'
  }))
}, { typeName: "XMLObject" });
var discriminatorObject2 = object({
  propertyName: string({
    typeComment: "REQUIRED. The name of the property in the payload that will hold the discriminating value. This property SHOULD be required in the payload schema, as the behavior when the property is absent is undefined."
  }),
  mapping: optional(record(string(), string(), {
    typeComment: "An object to hold mappings between payload values and schema names or URI references."
  }))
}, { typeName: "DiscriminatorObject" });
var generateSchemaObject = (maybeRef) => {
  const schemaExtensionObjects2 = [
    XScalarIgnore,
    XInternal,
    XVariable,
    XExamples,
    XEnumDescriptions,
    XEnumVarNames,
    XAdditionalPropertiesName,
    XOrder,
    XTags
  ];
  const coreSchemaProperties2 = object({
    name: optional(string({ typeComment: "Schema name (extension)." })),
    // JSON Schema 2020-12 core reference keywords. OpenAPI 3.1 Schema Objects may carry these for
    // generic and recursive patterns such as `PaginatedResponse<T>`; keep them typed so coercion
    // does not drop them. Resolution of `$dynamicRef` against the active `$dynamicAnchor` happens
    // separately, see https://github.com/scalar/scalar/issues/9414.
    $id: optional(string({ typeComment: "JSON Schema 2020-12 schema identifier." })),
    $anchor: optional(string({ typeComment: "JSON Schema 2020-12 plain-name anchor." })),
    $dynamicAnchor: optional(string({ typeComment: "JSON Schema 2020-12 dynamic anchor; the target a matching `$dynamicRef` resolves to." })),
    $dynamicRef: optional(string({ typeComment: "JSON Schema 2020-12 dynamic reference, resolved against the active `$dynamicAnchor`." })),
    title: optional(string({ typeComment: "A title for the schema." })),
    description: optional(string({ typeComment: "A description of the schema." })),
    default: optional(any({ typeComment: "Default value for the schema." })),
    enum: optional(array(any(), { typeComment: "Array of allowed values.", typeName: "JsonSchemaEnum" })),
    const: optional(any({ typeComment: "Constant value that must match exactly." })),
    contentMediaType: optional(string({ typeComment: "Media type for content validation." })),
    contentEncoding: optional(string({ typeComment: "Content encoding." })),
    contentSchema: optional(maybeRef(lazy(() => schema2))),
    deprecated: optional(boolean({ typeComment: "Whether the schema is deprecated." })),
    discriminator: optional(discriminatorObject2),
    readOnly: optional(boolean({ typeComment: "Whether the schema is read-only." })),
    writeOnly: optional(boolean({ typeComment: "Whether the schema is write-only." })),
    xml: optional(xml2),
    externalDocs: optional(externalDocs2),
    example: optional(any({
      typeComment: "A free-form field to include an example of an instance for this schema. Deprecated in favor of the JSON Schema examples keyword."
    })),
    examples: optional(array(any(), {
      typeComment: "An array of examples of valid instances for this schema. This keyword follows the JSON Schema Draft 2020-12 specification.",
      typeName: "SchemaExamplesArray"
    })),
    allOf: optional(array(maybeRef(lazy(() => schema2)), { typeName: "SchemaObjectAllOf" })),
    oneOf: optional(array(maybeRef(lazy(() => schema2)), { typeName: "SchemaObjectOneOf" })),
    anyOf: optional(array(maybeRef(lazy(() => schema2)), { typeName: "SchemaObjectAnyOf" })),
    not: optional(maybeRef(lazy(() => schema2)))
  });
  const schemaScalarMarker = object({
    __scalar_: string({ typeComment: "Internal marker for schema object disambiguation." })
  });
  const numericValidationKeywords2 = object({
    multipleOf: optional(number({ typeComment: "Number must be a multiple of this value." })),
    maximum: optional(number({ typeComment: "Maximum value (inclusive)." })),
    exclusiveMaximum: optional(number({ typeComment: "Maximum value (exclusive)." })),
    minimum: optional(number({ typeComment: "Minimum value (inclusive)." })),
    exclusiveMinimum: optional(number({ typeComment: "Minimum value (exclusive)." }))
  });
  const numericSchema2 = intersection([
    object({
      type: union([literal("number"), literal("integer")]),
      format: optional(string({ typeComment: "Different subtypes." }))
    }),
    numericValidationKeywords2
  ], { typeName: "NumberSchemaObject" });
  const stringValidationKeywords2 = object({
    maxLength: optional(number({ typeComment: "Maximum string length." })),
    minLength: optional(number({ typeComment: "Minimum string length." })),
    pattern: optional(string({ typeComment: "Regular expression pattern." }))
  });
  const stringSchema2 = intersection([
    object({
      type: literal("string"),
      format: optional(string({ typeComment: "Different subtypes." }))
    }),
    stringValidationKeywords2
  ], { typeName: "StringSchemaObject" });
  const objectValidationKeywords2 = object({
    maxProperties: optional(number({ typeComment: "Maximum number of properties." })),
    minProperties: optional(number({ typeComment: "Minimum number of properties." })),
    properties: optional(record(string(), maybeRef(lazy(() => schema2)), { typeName: "SchemaObjectProperties" })),
    required: optional(array(string(), { typeName: "SchemaObjectRequired" })),
    additionalProperties: optional(union([boolean(), maybeRef(lazy(() => schema2))], {
      typeName: "SchemaObjectAdditionalProperties"
    })),
    patternProperties: optional(record(string(), maybeRef(lazy(() => schema2)), { typeName: "SchemaObjectPatternProperties" })),
    propertyNames: optional(maybeRef(lazy(() => schema2)))
  });
  const objectSchema2 = intersection([
    object({
      type: literal("object")
    }),
    objectValidationKeywords2
  ], { typeName: "ObjectSchemaObject" });
  const arrayValidationKeywords2 = object({
    maxItems: optional(number({ typeComment: "Maximum number of items in array." })),
    minItems: optional(number({ typeComment: "Minimum number of items in array." })),
    uniqueItems: optional(boolean({ typeComment: "Whether array items must be unique." })),
    items: optional(maybeRef(lazy(() => schema2))),
    prefixItems: optional(array(maybeRef(lazy(() => schema2)), { typeComment: "Schema for tuple validation." }))
  });
  const arraySchema2 = intersection([
    object({
      type: literal("array")
    }),
    arrayValidationKeywords2
  ], { typeName: "ArraySchemaObject" });
  const schemaTypeMulti2 = union([
    literal("null"),
    literal("boolean"),
    literal("string"),
    literal("number"),
    literal("integer"),
    literal("object"),
    literal("array")
  ], { typeName: "SchemaObjectMultiTypeKeywords" });
  const otherTypeSchema2 = object({
    type: union([literal("null"), literal("boolean")], {
      typeName: "SchemaObjectOtherTypeKeyword"
    })
  });
  const multiTypeSchema2 = intersection([
    object({
      type: array(schemaTypeMulti2, {
        typeName: "SchemaObjectMultiTypeKeywordArray"
      }),
      format: optional(string({ typeComment: "Different subtypes." }))
    }),
    numericValidationKeywords2,
    stringValidationKeywords2,
    arrayValidationKeywords2,
    objectValidationKeywords2
  ], {
    typeName: "MultiTypeSchemaObject"
  });
  const schema2 = intersection([
    coreSchemaProperties2,
    ...schemaExtensionObjects2,
    union([
      schemaScalarMarker,
      otherTypeSchema2,
      numericSchema2,
      stringSchema2,
      objectSchema2,
      arraySchema2,
      multiTypeSchema2
    ])
  ], { typeName: "SchemaObject" });
  return schema2;
};
var generateSchema = (maybeRef, options = {}) => {
  const contact = object({
    name: optional(string({ typeComment: "The name of the contact." })),
    url: optional(string({ typeComment: "The URI for the contact information. This MUST be in the form of a URI." })),
    email: optional(string({
      typeComment: "The email address of the contact person/organization. This MUST be in the form of an email address."
    }))
  }, { typeName: "ContactObject" });
  const license = object({
    name: optional(string({ typeComment: "REQUIRED. The license name used for the API." })),
    identifier: optional(string({
      typeComment: "An SPDX license expression for the API. The identifier field is mutually exclusive of the url field."
    })),
    url: optional(string({
      typeComment: "A URI for the license used for the API. This MUST be in the form of a URI. The url field is mutually exclusive of the identifier field."
    }))
  }, { typeName: "LicenseObject" });
  const info = intersection([
    object({
      title: string({ typeComment: "REQUIRED. The title of the API." }),
      version: string({
        typeComment: "REQUIRED. The version of the OpenAPI Document (which is distinct from the OpenAPI Specification version or the version of the API being described or the version of the OpenAPI Description)."
      }),
      summary: optional(string({ typeComment: "A short summary of the API." })),
      description: optional(string({
        typeComment: "A description of the API. CommonMark syntax MAY be used for rich text representation."
      })),
      termsOfService: optional(string({ typeComment: "A URI for the Terms of Service for the API. This MUST be in the form of a URI." })),
      contact: optional(contact),
      license: optional(license)
    }, { typeName: "InfoObject" }),
    XScalarSdkInstallation,
    XScalarLinks
  ]);
  const serverVariable = object({
    enum: optional(array(string(), {
      typeComment: "An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty."
    })),
    default: optional(string({
      typeComment: `The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. If the enum is defined, the value MUST exist in the enum's values. Note that this behavior is different from the Schema Object's default keyword, which documents the receiver's behavior rather than inserting the value into the data.`
    })),
    description: optional(string({
      typeComment: "An optional description for the server variable. CommonMark syntax MAY be used for rich text representation."
    }))
  }, { typeName: "ServerVariableObject" });
  const servers = object({
    url: string({
      typeComment: "REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the document containing the Server Object is being served. Variable substitutions will be made when a variable is named in {braces}."
    }),
    description: optional(string({
      typeComment: "An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation."
    })),
    variables: optional(record(string(), serverVariable, {
      typeComment: `A map between a variable name and its value. The value is used for substitution in the server's URL template.`
    }))
  }, { typeName: "ServerObject" });
  const schema2 = options.schemaObject ?? generateSchemaObject(maybeRef);
  const tag = intersection([
    object({
      name: string({ typeComment: "REQUIRED. The name of the tag." }),
      summary: optional(string({ typeComment: "A short summary of the tag, used for display purposes. (OpenAPI 3.2)" })),
      description: optional(string({
        typeComment: "A description for the tag. CommonMark syntax MAY be used for rich text representation."
      })),
      parent: optional(string({
        typeComment: "The name of a tag that this tag is nested under. The named tag MUST exist in the API description, and circular references MUST NOT be used. (OpenAPI 3.2)"
      })),
      kind: optional(string({
        typeComment: "A machine-readable string to categorize what sort of tag it is, for example `nav`, `badge` or `audience`. (OpenAPI 3.2)"
      })),
      externalDocs: optional(externalDocs2)
    }, { typeName: "TagObject" }),
    XDisplayName,
    XInternal,
    XScalarIgnore,
    XScalarOrder
  ]);
  const securityRequirement = record(string(), array(string()), {
    typeName: "SecurityRequirementObject",
    typeComment: "Lists the required security schemes to execute this operation. An empty object ({}) indicates anonymous access is supported."
  });
  const securitySchemeBase = object({
    description: optional(string({
      typeComment: "A description for security scheme. CommonMark syntax MAY be used for rich text representation."
    }))
  });
  const apiKeySecurityScheme = object({
    ...securitySchemeBase.properties,
    type: literal("apiKey"),
    name: string({ typeComment: "REQUIRED. The name of the header, query or cookie parameter to be used." }),
    in: union([literal("query"), literal("header"), literal("cookie")], {
      typeComment: 'REQUIRED. The location of the API key. Valid values are "query", "header", or "cookie".'
    })
  }, { typeName: "ApiKeySecuritySchemeObject" });
  const httpSecurityScheme = object({
    ...securitySchemeBase.properties,
    type: literal("http"),
    scheme: union([literal("basic"), literal("bearer")], {
      typeName: "HttpSecuritySchemeScheme",
      typeComment: "REQUIRED. The name of the HTTP Authentication scheme to be used in the Authorization header as defined in RFC7235."
    }),
    bearerFormat: optional(string({
      typeComment: "A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes."
    }))
  }, { typeName: "HttpSecuritySchemeObject" });
  const oauthFlowExtensionObjects = [
    XScalarSecurityQuery,
    XScalarSecurityBody,
    XTokenName,
    XScalarAuthUrl,
    XScalarTokenUrl
  ];
  const oauthFlowCore = object({
    refreshUrl: string({
      typeComment: "The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS."
    }),
    scopes: record(string(), string(), {
      typeComment: "REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty.",
      typeName: "OAuthFlowScopes"
    })
  }, { typeName: "OAuthFlowBaseCore" });
  const implicitOAuth2Flow = intersection([
    oauthFlowCore,
    ...oauthFlowExtensionObjects,
    object({
      authorizationUrl: string({
        typeComment: "REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS."
      })
    }, { typeName: "ImplicitOAuthFlowObject" })
  ]);
  const passwordOAuth2Flow = intersection([
    oauthFlowCore,
    ...oauthFlowExtensionObjects,
    object({
      tokenUrl: string({
        typeComment: "REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS."
      })
    }, { typeName: "PasswordOAuthFlowObject" }),
    XScalarCredentialsLocation
  ]);
  const clientCredentialsOAuth2Flow = intersection([
    oauthFlowCore,
    ...oauthFlowExtensionObjects,
    object({
      tokenUrl: string({
        typeComment: "REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS."
      })
    }, { typeName: "ClientCredentialsOAuthFlowObject" }),
    XScalarCredentialsLocation
  ]);
  const authorizationCodeOAuth2Flow = intersection([
    oauthFlowCore,
    ...oauthFlowExtensionObjects,
    object({
      authorizationUrl: string({
        typeComment: "REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS."
      }),
      tokenUrl: string({
        typeComment: "REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS."
      })
    }, { typeName: "AuthorizationCodeOAuthFlowObject" }),
    XusePkce,
    XScalarCredentialsLocation
  ]);
  const oauth2Flows = object({
    implicit: optional(implicitOAuth2Flow),
    password: optional(passwordOAuth2Flow),
    clientCredentials: optional(clientCredentialsOAuth2Flow),
    authorizationCode: optional(authorizationCodeOAuth2Flow)
  }, { typeName: "OAuthFlowsObject" });
  const oauth2SecurityScheme = intersection([
    object({
      ...securitySchemeBase.properties,
      type: literal("oauth2"),
      flows: oauth2Flows
    }, { typeName: "OAuth2SecuritySchemeObject" }),
    XDefaultScopes
  ]);
  const openIdConnectSecurityScheme = object({
    ...securitySchemeBase.properties,
    type: literal("openIdConnect"),
    openIdConnectUrl: string({
      typeComment: "REQUIRED. Well-known URL to discover the [[OpenID-Connect-Discovery]] provider metadata."
    })
  }, { typeName: "OpenIdConnectSecuritySchemeObject" });
  const securityScheme = union([apiKeySecurityScheme, httpSecurityScheme, oauth2SecurityScheme, openIdConnectSecurityScheme], { typeName: "SecuritySchemeObject" });
  const components = object({
    schemas: optional(record(string(), maybeRef(schema2), { typeName: "ComponentsSchemas" })),
    responses: optional(record(string(), maybeRef(lazy(() => response)), { typeName: "ComponentsResponses" })),
    parameters: optional(record(string(), maybeRef(lazy(() => parameter)), { typeName: "ComponentsParameters" })),
    examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "ComponentsExamples" })),
    requestBodies: optional(record(string(), maybeRef(lazy(() => requestBody)), { typeName: "ComponentsRequestBodies" })),
    headers: optional(record(string(), maybeRef(lazy(() => header)), { typeName: "ComponentsHeaders" })),
    securitySchemes: optional(record(string(), maybeRef(lazy(() => securityScheme)), { typeName: "ComponentsSecuritySchemes" })),
    links: optional(record(string(), maybeRef(lazy(() => link)), { typeName: "ComponentsLinks" })),
    callbacks: optional(record(string(), maybeRef(lazy(() => callback)), { typeName: "ComponentsCallbacks" })),
    pathItems: optional(record(string(), lazy(() => pathItem), { typeName: "ComponentsPathItems" }))
  }, { typeName: "ComponentsObject" });
  const example = intersection([
    object({
      summary: optional(string({ typeComment: "Short description for the example." })),
      description: optional(string({
        typeComment: "Long description for the example. CommonMark syntax MAY be used for rich text representation."
      })),
      value: optional(any({
        typeComment: "Embedded literal example. The value field and externalValue field are mutually exclusive."
      })),
      externalValue: optional(string({
        typeComment: "A URI that identifies the literal example. The value field and externalValue field are mutually exclusive."
      }))
    }, { typeName: "ExampleObject" }),
    XDisabled
  ]);
  const headerBase = object({
    description: optional(string({
      typeComment: "A brief description of the header. This could contain examples of use. CommonMark syntax MAY be used for rich text representation."
    })),
    required: optional(boolean({ typeComment: "Determines whether this header is mandatory. The default value is false." })),
    deprecated: optional(boolean({
      typeComment: "Specifies that the header is deprecated and SHOULD be transitioned out of usage. Default value is false."
    }))
  }, { typeName: "HeaderBase" });
  const headerWithSchema = intersection([
    headerBase,
    object({
      style: optional(string({
        typeComment: 'Describes how the header value will be serialized. The default (and only legal value for headers) is "simple".'
      })),
      explode: optional(boolean({
        typeComment: "When this is true, header values of type array or object generate a single header whose value is a comma-separated list of the array items or key-value pairs of the map, see Style Examples."
      })),
      schema: optional(maybeRef(lazy(() => schema2))),
      example: optional(any()),
      examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "HeaderExamples" }))
    }, { typeName: "HeaderObjectWithSchema" })
  ]);
  const headerWithContent = intersection([
    headerBase,
    object({
      content: optional(record(string(), lazy(() => mediaType), { typeName: "HeaderContent" }))
    }, { typeName: "HeaderObjectWithContent" })
  ]);
  const header = union([headerWithSchema, headerWithContent], { typeName: "HeaderObject" });
  const encoding = object({
    contentType: optional(string({
      typeComment: "The Content-Type for encoding a specific property. The value is a comma-separated list, each element of which is either a specific media type (e.g. image/png) or a wildcard media type (e.g. image/*)."
    })),
    headers: optional(record(string(), maybeRef(lazy(() => header)), { typeName: "EncodingHeaders" }))
  }, { typeName: "EncodingObject" });
  const mediaType = object({
    schema: optional(maybeRef(lazy(() => schema2))),
    example: optional(any({ typeComment: "Example of the media type." })),
    examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "MediaTypeExamples" })),
    encoding: optional(record(string(), encoding, {
      typeComment: "A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property.",
      typeName: "MediaTypeEncoding"
    }))
  }, { typeName: "MediaTypeObject" });
  const parameterWithSchema = intersection([
    object({
      name: string({
        typeComment: 'REQUIRED. The name of the parameter. Parameter names are case sensitive. If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object.'
      }),
      in: union([literal("query"), literal("header"), literal("path"), literal("cookie")], {
        typeName: "ParameterLocation",
        typeComment: 'REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie".'
      }),
      description: optional(string({
        typeComment: "A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation."
      })),
      required: optional(boolean({
        typeComment: 'Determines whether this parameter is mandatory. If the parameter location is "path", this field is REQUIRED and its value MUST be true.'
      })),
      deprecated: optional(boolean({
        typeComment: "Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false."
      })),
      allowEmptyValue: optional(boolean({
        typeComment: "If true, clients MAY pass a zero-length string value in place of parameters that would otherwise be omitted entirely. This field is valid only for query parameters."
      })),
      allowReserved: optional(boolean({
        typeComment: "When this is true, parameter values are serialized using reserved expansion, as defined by RFC6570. This field only applies to parameters with an in value of query. The default value is false."
      })),
      style: optional(string({
        typeComment: "Describes how the parameter value will be serialized (depending on the schema type)."
      })),
      explode: optional(boolean({
        typeComment: "When this is true, parameter values of type array or object generate separate parameters for each array item or object property."
      })),
      schema: optional(maybeRef(lazy(() => schema2))),
      example: optional(any()),
      examples: optional(record(string(), maybeRef(lazy(() => example)), { typeName: "ParameterExamples" }))
    }, { typeName: "ParameterObjectWithSchema" }),
    XGlobal,
    XInternal,
    XScalarIgnore
  ]);
  const parameterWithContent = intersection([
    object({
      name: string({
        typeComment: 'REQUIRED. The name of the parameter. Parameter names are case sensitive. If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object.'
      }),
      in: union([literal("query"), literal("header"), literal("path"), literal("cookie")], {
        typeName: "ParameterLocation",
        typeComment: 'REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie".'
      }),
      description: optional(string({
        typeComment: "A brief description of the parameter. This could contain examples of use. CommonMark syntax MAY be used for rich text representation."
      })),
      required: optional(boolean({
        typeComment: 'Determines whether this parameter is mandatory. If the parameter location is "path", this field is REQUIRED and its value MUST be true.'
      })),
      deprecated: optional(boolean({
        typeComment: "Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false."
      })),
      allowEmptyValue: optional(boolean({
        typeComment: "If true, clients MAY pass a zero-length string value in place of parameters that would otherwise be omitted entirely. This field is valid only for query parameters."
      })),
      allowReserved: optional(boolean({
        typeComment: "When this is true, parameter values are serialized using reserved expansion, as defined by RFC6570. This field only applies to parameters with an in value of query. The default value is false."
      })),
      content: optional(record(string(), lazy(() => mediaType), { typeName: "ParameterContent" }))
    }, { typeName: "ParameterObjectWithContent" }),
    XGlobal,
    XInternal,
    XScalarIgnore
  ]);
  const parameter = union([parameterWithSchema, parameterWithContent], { typeName: "ParameterObject" });
  const requestBody = intersection([
    object({
      description: optional(string({
        typeComment: "A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation."
      })),
      content: record(string(), lazy(() => mediaType), {
        typeComment: "REQUIRED. The content of the request body. The key is a media type or media type range and the value describes it.",
        typeName: "RequestBodyContent"
      }),
      required: optional(boolean({ typeComment: "Determines if the request body is required in the request. Defaults to false." }))
    }, { typeName: "RequestBodyObject" }),
    XScalarSelectedContentType
  ]);
  const link = object({
    operationRef: optional(string({
      typeComment: "A URI reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object."
    })),
    operationId: optional(string({
      typeComment: "The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field."
    })),
    parameters: optional(record(string(), any(), {
      typeComment: "A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.",
      typeName: "LinkParameters"
    })),
    requestBody: optional(any({
      typeComment: "A literal value or {expression} to use as a request body when calling the target operation."
    })),
    description: optional(string({
      typeComment: "A description of the link. CommonMark syntax MAY be used for rich text representation."
    })),
    server: optional(servers)
  }, { typeName: "LinkObject" });
  const response = object({
    description: string({
      typeComment: "REQUIRED. A description of the response. CommonMark syntax MAY be used for rich text representation."
    }),
    headers: optional(record(string(), maybeRef(lazy(() => header)), { typeName: "ResponseHeaders" })),
    content: optional(record(string(), lazy(() => mediaType), { typeName: "ResponseContent" })),
    links: optional(record(string(), maybeRef(lazy(() => link)), { typeName: "ResponseLinks" }))
  }, { typeName: "ResponseObject" });
  const responsesObject = record(string(), maybeRef(lazy(() => response)), {
    typeName: "ResponsesObject"
  });
  const callback = record(string(), maybeRef(lazy(() => pathItem)), {
    typeName: "CallbackObject"
  });
  const operation = intersection([
    object({
      tags: optional(array(string(), {
        typeComment: "A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.",
        typeName: "OperationTags"
      })),
      summary: optional(string({ typeComment: "A short summary of what the operation does." })),
      description: optional(string({
        typeComment: "A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation."
      })),
      externalDocs: optional(externalDocs2),
      operationId: optional(string({
        typeComment: "Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive."
      })),
      parameters: optional(array(maybeRef(lazy(() => parameter)), { typeName: "OperationParameters" })),
      requestBody: optional(maybeRef(lazy(() => requestBody))),
      responses: optional(lazy(() => responsesObject)),
      deprecated: optional(boolean({
        typeComment: "Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false."
      })),
      security: optional(array(securityRequirement, { typeName: "OperationSecurity" })),
      servers: optional(array(servers, { typeName: "OperationServers" })),
      callbacks: optional(record(string(), maybeRef(lazy(() => callback)), { typeName: "OperationCallbacks" }))
    }, { typeName: "OperationObject" }),
    XBadges,
    XInternal,
    XScalarIgnore,
    XCodeSamples,
    XScalarStability,
    XScalarDisableParameters,
    XPostResponse,
    XPreRequest,
    XDraftExamples,
    XScalarSelectedServer
  ]);
  const pathItem = object({
    $ref: optional(string({
      typeComment: "Allows for a referenced definition of this path item. The value MUST be in the form of a URI, and the referenced structure MUST be in the form of a Path Item Object."
    })),
    summary: optional(string({
      typeComment: "An optional string summary, intended to apply to all operations in this path."
    })),
    description: optional(string({
      typeComment: "An optional string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation."
    })),
    get: optional(maybeRef(lazy(() => operation))),
    put: optional(maybeRef(lazy(() => operation))),
    post: optional(maybeRef(lazy(() => operation))),
    delete: optional(maybeRef(lazy(() => operation))),
    patch: optional(maybeRef(lazy(() => operation))),
    connect: optional(maybeRef(lazy(() => operation))),
    options: optional(maybeRef(lazy(() => operation))),
    head: optional(maybeRef(lazy(() => operation))),
    trace: optional(maybeRef(lazy(() => operation))),
    servers: optional(array(servers, { typeName: "PathItemServers" })),
    parameters: optional(array(maybeRef(lazy(() => parameter)), { typeName: "PathItemParameters" }))
  }, { typeName: "PathItemObject" });
  const openApiExtensionsPartial = object({
    "x-original-oas-version": optional(string({ typeComment: "Original OpenAPI Specification version of the source document." })),
    [extensions.document.navigation]: optional(any({
      typeComment: "Client navigation tree (TraversedDocument) for this OpenAPI description. Matches TraversedDocumentObjectRef in strict schemas."
    }))
  }, { typeName: "OpenApiExtensionsPartial" });
  const openApiDocumentCore = object({
    openapi: string({
      typeComment: "REQUIRED. This string MUST be the version number of the OpenAPI Specification that the OpenAPI Document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI Document. This is not related to the API info.version string."
    }),
    info,
    jsonSchemaDialect: optional(string({
      typeComment: "The default value for the $schema keyword within Schema Objects contained within this OAS document. This MUST be in the form of a URI."
    })),
    servers: optional(array(servers, {
      typeComment: "An array of Server Objects, which provide connectivity information to a target server. If the servers field is not provided, or is an empty array, the default value would be a Server Object with a url value of /.",
      typeName: "OpenApiServers"
    })),
    paths: optional(record(string(), pathItem, {
      typeComment: "The available paths and operations for the API.",
      typeName: "PathsObject"
    })),
    webhooks: optional(record(string(), pathItem, {
      typeComment: "The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement.",
      typeName: "WebhooksObject"
    })),
    components: optional(components),
    security: optional(array(securityRequirement, {
      typeComment: "A declaration of which security mechanisms can be used across the API. The list of values includes alternative Security Requirement Objects that can be used. Only one of the Security Requirement Objects need to be satisfied to authorize a request.",
      typeName: "OpenApiSecurity"
    })),
    tags: optional(array(tag, {
      typeComment: "A list of tags used by the OpenAPI Description with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools."
    })),
    externalDocs: optional(externalDocs2)
  }, { typeName: "OpenApiDocumentCore" });
  const openapi = intersection([
    openApiDocumentCore,
    openApiExtensionsPartial,
    XScalarOriginalSourceUrl,
    XTagGroups,
    XScalarEnvironments,
    XScalarSelectedServer,
    XScalarIcon,
    XScalarOrder,
    XScalarCookies,
    XScalarOriginalDocumentHash,
    XScalarIsDirty,
    XScalarActiveEnvironment,
    XScalarWatchMode,
    XScalarRegistryMeta,
    XPreRequest,
    XPostResponse
  ], {
    typeName: "OpenApiDocument",
    typeComment: "Root OpenAPI 3.1 document including Scalar workspace extensions (OpenApiExtensionsSchema)."
  });
  return openapi;
};

// node_modules/@scalar/workspace-store/dist/schemas/v3.1/openapi/reference.js
var referenceExtensions2 = object({
  "$status": optional(union([literal("loading"), literal("error")]), {
    typeComment: `Indicates the current status of the reference resolution. Can be either 'loading' while fetching the reference or 'error' if the resolution failed.`
  }),
  "$global": optional(boolean({
    typeComment: "Indicates whether this reference should be resolved globally across all documents, rather than just within the current document context."
  }))
}, { typeName: "ReferenceObjectExtensions" });
var reference2 = object({
  "$ref": string({ typeComment: "REQUIRED. The reference identifier. This MUST be in the form of a URI." }),
  summary: optional(string({
    typeComment: "A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect."
  })),
  description: optional(string({
    typeComment: "A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect."
  }))
}, {
  typeName: "ReferenceObject"
});
var e2 = (value) => {
  if (isObject(value) && "$ref" in value) {
    return e2(value["$ref-value"]);
  }
  return value;
};
var recursiveRef2 = (schema2) => union([schema2, intersection([reference2, object({ "$ref-value": evaluate(e2, schema2) }), referenceExtensions2])]);

// node_modules/@scalar/workspace-store/dist/client.js
var EXTERNAL_FETCH_CONCURRENCY_LIMIT = 10;
function loadDocument(workspaceDocument) {
  if ("url" in workspaceDocument) {
    return fetchUrls({ fetch: workspaceDocument.fetch }).exec(workspaceDocument.url);
  }
  if ("path" in workspaceDocument) {
    const loader = workspaceDocument.fileLoader;
    if (!loader) {
      console.error("No loader provided for loading files");
      return Promise.resolve({
        ok: false
      });
    }
    return loader.exec(workspaceDocument.path);
  }
  return Promise.resolve({
    ok: true,
    data: workspaceDocument.document,
    // string version of the raw document for hashing purposes
    raw: JSON.stringify(workspaceDocument.document)
  });
}
var getDocumentSource = (input) => {
  if ("url" in input) {
    return input.url;
  }
  if ("path" in input) {
    return input.path;
  }
  return void 0;
};
var openapiSchema = generateSchema(recursiveRef2);
var METADATA_ONLY_DOCUMENT_KEYS = /* @__PURE__ */ new Set([
  // The dirty flag itself - flipping it would re-enter this branch forever.
  "x-scalar-is-dirty",
  // Programmatic bookkeeping for registry-backed documents (commit hash,
  // conflict cache).
  "x-scalar-registry-meta"
]);
var purgeInternalDocumentKeys = (input) => {
  const result = deepClone(input);
  const EXCLUDE_KEYS = [
    // Bundler metadata fields added temporarily during document processing
    "x-ext",
    "x-ext-urls",
    // Scalar internal/external metadata fields
    "x-scalar-navigation",
    "x-scalar-is-dirty",
    "x-original-oas-version",
    "x-scalar-original-document-hash",
    "x-scalar-original-source-url",
    "x-scalar-registry-meta"
  ];
  for (const property of EXCLUDE_KEYS) {
    delete result[property];
  }
  return result;
};
var createWorkspaceStore = (workspaceProps) => {
  const { verbose = false } = workspaceProps ?? {};
  const withMeasurementSync = (name, fn2) => verbose ? measureSync(name, fn2) : fn2();
  const withMeasurementAsync = (name, fn2) => verbose ? measureAsync(name, fn2) : fn2();
  const extraDocumentConfigurations = {};
  const fireWorkspaceChange = (event) => {
    var _a;
    (_a = workspaceProps == null ? void 0 : workspaceProps.plugins) == null ? void 0 : _a.forEach((plugin) => {
      var _a2, _b;
      return (_b = (_a2 = plugin.hooks) == null ? void 0 : _a2.onWorkspaceStateChanges) == null ? void 0 : _b.call(_a2, event);
    });
  };
  const workspace = reactive(createDetectChangesProxy({
    ...workspaceProps == null ? void 0 : workspaceProps.meta,
    documents: {},
    /**
     * Returns the currently active document from the workspace.
     * The active document is determined by the 'x-scalar-active-document' metadata field,
     * falling back to the first document in the workspace if no active document is specified.
     *
     * @returns The active document or undefined if no document is found
     */
    get activeDocument() {
      return workspace.documents[getActiveDocumentName()];
    }
  }, {
    hooks: {
      onAfterChange(path) {
        const type = path[0];
        if (type === "documents") {
          if (path.length < 2) {
            console.log("[WARN]: Overriding entire documents object is not supported");
            return;
          }
          const documentName = path[1];
          const document = workspace.documents[documentName] ?? {
            openapi: "3.1.0",
            info: { title: "", version: "" },
            "x-scalar-original-document-hash": ""
          };
          const event2 = {
            type: "documents",
            documentName,
            value: unpackProxyObject(document),
            path: path.slice(2)
          };
          if (event2.path.length > 0 && !METADATA_ONLY_DOCUMENT_KEYS.has(event2.path[0])) {
            document["x-scalar-is-dirty"] = true;
          }
          fireWorkspaceChange(event2);
          return;
        }
        if (type === "activeDocument") {
          const documentName = getActiveDocumentName();
          const document = workspace.documents[documentName] ?? {
            openapi: "3.1.0",
            info: { title: "", version: "" },
            "x-scalar-original-document-hash": ""
          };
          const event2 = {
            type: "documents",
            documentName,
            value: unpackProxyObject(document),
            path: path.slice(2)
          };
          if (event2.path.length > 0 && !METADATA_ONLY_DOCUMENT_KEYS.has(event2.path[0])) {
            document["x-scalar-is-dirty"] = true;
          }
          fireWorkspaceChange(event2);
          return;
        }
        const { activeDocument: _a, documents: _d, ...meta } = workspace;
        const event = {
          type: "meta",
          value: unpackProxyObject(meta, { depth: 1 })
        };
        fireWorkspaceChange(event);
        return;
      }
    }
  }));
  const { originalDocuments, intermediateDocuments, overrides } = createDetectChangesProxy({
    /**
     * Holds the original, unmodified documents as they were initially loaded into the workspace.
     * These documents are stored in their raw form—prior to any reactive wrapping, dereferencing, or bundling.
     * This map preserves the pristine structure of each document, using deep clones to ensure that
     * subsequent mutations in the workspace do not affect the originals.
     * The originals are retained so that we can restore, compare, or sync with the remote registry as needed.
     */
    originalDocuments: {},
    /**
     * Stores the intermediate state of documents after local edits but before syncing with the remote registry.
     *
     * This map acts as a local "saved" version of the document, reflecting the user's changes after they hit "save".
     * The `originalDocuments` map, by contrast, always mirrors the document as it exists in the remote registry.
     *
     * Use this map to stage local changes that are ready to be propagated back to the remote registry.
     * This separation allows us to distinguish between:
     *   - The last known remote version (`originalDocuments`)
     *   - The latest locally saved version (`intermediateDocuments`)
     *   - The current in-memory (possibly unsaved) workspace document (`workspace.documents`)
     */
    intermediateDocuments: {},
    /**
     * Stores per-document overrides for OpenAPI documents.
     * This object is used to override specific fields of a document
     * when you cannot (or should not) modify the source document directly.
     * For example, this enables UI-driven or temporary changes to be applied
     * on top of the original document, without mutating the source.
     * The key is the document name, and the value is a deep partial
     * OpenAPI document representing the overridden fields.
     */
    overrides: {}
  }, {
    hooks: {
      onAfterChange(path) {
        const type = path[0];
        if (!type) {
          return;
        }
        if (path.length < 2) {
          return;
        }
        const documentName = path[1];
        if (type === "originalDocuments") {
          const event = {
            type,
            documentName,
            value: unpackProxyObject(originalDocuments[documentName] ?? {}),
            path: path.splice(2)
          };
          fireWorkspaceChange(event);
        }
        if (type === "intermediateDocuments") {
          const event = {
            type,
            documentName,
            value: unpackProxyObject(intermediateDocuments[documentName] ?? {}),
            path: path.splice(2)
          };
          fireWorkspaceChange(event);
        }
        if (type === "overrides") {
          const event = {
            type,
            documentName,
            value: unpackProxyObject(overrides[documentName] ?? {})
          };
          fireWorkspaceChange(event);
        }
      }
    }
  });
  const history = createHistoryStore({
    hooks: {
      onHistoryChange: (documentName) => {
        fireWorkspaceChange({
          type: "history",
          documentName,
          value: history.export()[documentName] ?? {}
        });
      }
    }
  });
  const auth = createAuthStore({
    hooks: {
      onAuthChange: (documentName) => {
        fireWorkspaceChange({
          type: "auth",
          documentName,
          value: auth.export()[documentName] ?? {
            secrets: {},
            selected: { document: { selectedIndex: 0, selectedSchemes: [] }, path: {} }
          }
        });
      }
    }
  });
  function getActiveDocumentName() {
    return workspace[extensions.workspace.activeDocument] ?? Object.keys(workspace.documents)[0] ?? "";
  }
  function exportDocument(documentName, format2, minify) {
    const savedDocument = originalDocuments[documentName];
    if (!savedDocument) {
      return;
    }
    if (format2 === "json") {
      return minify ? JSON.stringify(savedDocument) : JSON.stringify(savedDocument, null, 2);
    }
    return browser_default.stringify(savedDocument);
  }
  const saveDocument = async (documentName) => {
    const activeDocument = workspace.documents[documentName];
    const newDocument = await getEditableDocument(documentName);
    if (!activeDocument || !newDocument) {
      console.warn("Failed to save document, active document is missing");
      return false;
    }
    originalDocuments[documentName] = newDocument;
    intermediateDocuments[documentName] = deepClone(newDocument);
    activeDocument["x-scalar-is-dirty"] = false;
    return true;
  };
  async function addInMemoryDocument(input, navigationOptions) {
    var _a, _b, _c;
    const { name } = input;
    const meta = deepClone(input.meta);
    const clonedRawInputDocument = withMeasurementSync("deepClone", () => deepClone(input.document));
    withMeasurementSync("initialize", () => {
      if (input.initialize !== false) {
        originalDocuments[name] = deepClone(clonedRawInputDocument);
        intermediateDocuments[name] = deepClone(clonedRawInputDocument);
        overrides[name] = input.overrides ?? {};
        extraDocumentConfigurations[name] = { fetch: input.fetch };
      }
    });
    const loaders = [
      fetchUrls({
        fetch: ((_a = extraDocumentConfigurations[name]) == null ? void 0 : _a.fetch) ?? (workspaceProps == null ? void 0 : workspaceProps.fetch),
        // Cap concurrent fetches so a document with many external references or example
        // `externalValue`s (potentially thousands) does not flood the network on load.
        limit: EXTERNAL_FETCH_CONCURRENCY_LIMIT
      })
    ];
    if (workspaceProps == null ? void 0 : workspaceProps.fileLoader) {
      loaders.push(workspaceProps.fileLoader);
    }
    if (isAsyncApiDocument(clonedRawInputDocument)) {
      const originalAasVersion = clonedRawInputDocument.asyncapi;
      const upgradedAsyncApiDocument = withMeasurementSync("upgrade", () => upgrade(deepClone(clonedRawInputDocument)));
      const asyncApiDocument = createMagicProxy({
        ...upgradedAsyncApiDocument,
        ...meta,
        "x-original-aas-version": originalAasVersion,
        "x-scalar-original-document-hash": input.documentHash,
        "x-scalar-original-source-url": input.documentSource
      });
      await withMeasurementAsync("bundle", async () => await bundle(getRaw(asyncApiDocument), {
        treeShake: false,
        plugins: loaders,
        urlMap: true,
        origin: input.documentSource
        // use the document origin (if provided) as the base URL for resolution
      }));
      const coerced = withMeasurementSync("coerceValue", () => coerce(asyncApiObjectSchema, deepClone(getRaw(asyncApiDocument))));
      withMeasurementSync("mergeObjects", () => mergeObjects(asyncApiDocument, coerced));
      if (asyncApiDocument[extensions.document.navigation] === void 0) {
        const navigation = traverseAsyncApiDocument(name, asyncApiDocument, navigationOptions);
        asyncApiDocument[extensions.document.navigation] = navigation;
      }
      workspace.documents[name] = createOverridesProxy(asyncApiDocument, {
        overrides: unpackProxyObject(overrides[name])
      });
      return;
    }
    const inputDocument = withMeasurementSync("upgrade", () => upgrade2(deepClone(clonedRawInputDocument), "3.1"));
    const strictDocument = createMagicProxy({
      ...inputDocument,
      ...meta,
      "x-original-oas-version": ((_b = originalDocuments[name]) == null ? void 0 : _b.openapi) ?? ((_c = originalDocuments[name]) == null ? void 0 : _c.swagger),
      "x-scalar-original-document-hash": input.documentHash,
      "x-scalar-original-source-url": input.documentSource
    }, { showInternal: true });
    if (strictDocument[extensions.document.navigation] === void 0) {
      await withMeasurementAsync("bundle", async () => await bundle(getRaw(strictDocument), {
        treeShake: false,
        plugins: [
          ...loaders,
          normalizeRefs(),
          externalValueResolver(),
          refsEverywhere(),
          normalizeAuthSchemes(),
          syncPathParameters()
        ],
        urlMap: true,
        origin: input.documentSource
        // use the document origin (if provided) as the base URL for resolution
      }));
      const coerced = withMeasurementSync("coerceValue", () => coerce(openapiSchema, deepClone(strictDocument)));
      withMeasurementSync("mergeObjects", () => mergeObjects(strictDocument, coerced));
    }
    const isValid = value_exports.Check(OpenAPIDocumentSchema, strictDocument);
    if (!isValid) {
      const validationErrors = Array.from(value_exports.Errors(OpenAPIDocumentSchema, strictDocument));
      console.warn("document validation errors: ");
      console.warn(validationErrors.map((error) => ({
        message: error.message,
        path: error.path,
        schema: error.schema,
        value: error.value
      })));
    }
    if (strictDocument[extensions.document.navigation] === void 0) {
      const navigation = traverseDocument(name, strictDocument, navigationOptions);
      strictDocument[extensions.document.navigation] = navigation;
    }
    workspace.documents[name] = createOverridesProxy(createMagicProxy(getRaw(strictDocument)), {
      overrides: unpackProxyObject(overrides[name])
    });
  }
  async function addDocument(input, navigationOptions) {
    const { name, meta } = input;
    const fetch2 = getFetch({
      fetch: input.fetch ?? (workspaceProps == null ? void 0 : workspaceProps.fetch),
      proxyUrl: workspace["x-scalar-active-proxy"] ?? void 0
    });
    const resolve2 = await withMeasurementAsync("loadDocument", async () => await loadDocument({ ...input, fetch: fetch2, fileLoader: workspaceProps == null ? void 0 : workspaceProps.fileLoader }));
    return await withMeasurementAsync("addDocument", async () => {
      if (!resolve2.ok) {
        console.error(`Failed to fetch document '${name}': request was not successful`);
        workspace.documents[name] = {
          ...meta,
          openapi: "3.1.0",
          info: {
            title: `Document '${name}' could not be loaded`,
            version: "unknown"
          },
          "x-scalar-original-document-hash": "not-a-hash"
        };
        return false;
      }
      if (!isObject(resolve2.data)) {
        console.error(`Failed to load document '${name}': response data is not a valid object`);
        workspace.documents[name] = {
          ...meta,
          openapi: "3.1.0",
          info: {
            title: `Document '${name}' could not be loaded`,
            version: "unknown"
          },
          "x-scalar-original-document-hash": "not-a-hash"
        };
        return false;
      }
      await addInMemoryDocument({
        ...input,
        document: resolve2.data,
        documentSource: getDocumentSource(input),
        documentHash: generateHash(resolve2.raw)
      }, navigationOptions);
      return true;
    });
  }
  const getOriginalDocument = (documentName) => {
    const rawDocument = unpackProxyObject(originalDocuments[documentName], { depth: 1 });
    if (!rawDocument) {
      return null;
    }
    return rawDocument;
  };
  const getIntermediateDocument = (documentName) => {
    const rawDocument = unpackProxyObject(intermediateDocuments[documentName], { depth: 1 });
    if (!rawDocument) {
      return null;
    }
    return rawDocument;
  };
  const promoteIntermediateToOriginal = (documentName) => {
    return Boolean(intermediateDocuments[documentName]);
  };
  const getEditableDocument = async (documentName) => {
    const rawDocument = unpackProxyObject(workspace.documents[documentName], { depth: 1 });
    if (!rawDocument) {
      return null;
    }
    const original = await bundle(deepClone(rawDocument), {
      plugins: [restoreOriginalRefs(), removeExtraScalarKeys()],
      treeShake: false,
      urlMap: true
    });
    return purgeInternalDocumentKeys(original);
  };
  const buildSidebar = (documentName) => {
    const document = workspace.documents[documentName];
    if (!document) {
      console.error(`Document '${documentName}' does not exist in the workspace.`);
      return false;
    }
    if (!isOpenApiDocument(document)) {
      return false;
    }
    const navigation = traverseDocument(documentName, document);
    document[extensions.document.navigation] = navigation;
    return true;
  };
  const visitedNodesCache = /* @__PURE__ */ new Set();
  return {
    get workspace() {
      return workspace;
    },
    get history() {
      return history;
    },
    get auth() {
      return auth;
    },
    update(key, value) {
      preventPollution(key);
      Object.assign(workspace, { [key]: value });
    },
    getEditableDocument,
    getOriginalDocument,
    getIntermediateDocument,
    updateDocument(name, key, value) {
      const currentDocument = workspace.documents[name === "active" ? getActiveDocumentName() : name];
      if (!currentDocument) {
        return false;
      }
      preventPollution(key);
      Object.assign(currentDocument, { [key]: value });
      return true;
    },
    async replaceDocument(documentName, input) {
      const currentDocument = unpackProxyObject(workspace.documents[documentName], { depth: 1 });
      if (!currentDocument) {
        return console.error(`Document '${documentName}' does not exist in the workspace.`);
      }
      await addInMemoryDocument({
        name: documentName,
        document: input,
        // Preserve the current metadata. Source url, document hash, and
        // registry meta are typed identically on the OpenAPI and AsyncAPI
        // document shapes, so the union access does not need narrowing.
        documentSource: currentDocument["x-scalar-original-source-url"],
        documentHash: currentDocument["x-scalar-original-document-hash"],
        meta: {
          // Preserve the registry meta
          "x-scalar-registry-meta": currentDocument["x-scalar-registry-meta"],
          // Set the document as dirty
          "x-scalar-is-dirty": true,
          // Clear the navigation to trigger a rebuild
          "x-scalar-navigation": void 0
        },
        initialize: false
      });
    },
    resolve: (path) => {
      const activeDocument = workspace.activeDocument;
      const target = getValueAtPath(activeDocument, path);
      if (!isObject(target)) {
        console.error(`Invalid path provided for resolution. Path: [${path.join(", ")}]. Found value of type: ${typeof target}. Expected an object.`);
        return Promise.resolve();
      }
      return bundle(target, {
        root: activeDocument,
        treeShake: false,
        plugins: [fetchUrls(), loadingStatus(), externalValueResolver()],
        urlMap: true,
        visitedNodes: visitedNodesCache
      });
    },
    addDocument,
    /**
     * Deletes a document from the workspace and all associated data.
     *
     * This function removes the document and all related data structures.
     * If the deleted document was active, it automatically selects the first remaining document.
     */
    deleteDocument: (documentName) => {
      if (!workspace.documents[documentName]) {
        return;
      }
      delete workspace.documents[documentName];
      delete originalDocuments[documentName];
      delete intermediateDocuments[documentName];
      delete overrides[documentName];
      delete extraDocumentConfigurations[documentName];
      history.clearDocumentHistory(documentName);
      auth.clearDocumentAuth(documentName);
      const remainingDocuments = Object.keys(workspace.documents);
      const wasActiveDocument = workspace["x-scalar-active-document"] === documentName;
      if (wasActiveDocument) {
        workspace["x-scalar-active-document"] = remainingDocuments[0] ?? void 0;
      }
      fireWorkspaceChange({
        type: "deleteDocument",
        documentName
      });
    },
    exportDocument,
    exportActiveDocument: (format2, minify) => exportDocument(getActiveDocumentName(), format2, minify),
    buildSidebar,
    saveDocument,
    promoteIntermediateToOriginal,
    async revertDocumentChanges(documentName) {
      const workspaceDocument = unpackProxyObject(workspace.documents[documentName], { depth: 1 });
      const baseline = unpackProxyObject(originalDocuments[documentName], { depth: 1 });
      if (!workspaceDocument || !baseline) {
        return;
      }
      intermediateDocuments[documentName] = deepClone(baseline);
      await addInMemoryDocument({
        name: documentName,
        document: baseline,
        documentSource: workspaceDocument["x-scalar-original-source-url"],
        documentHash: workspaceDocument["x-scalar-original-document-hash"],
        initialize: false,
        meta: {
          // Preserve the registry meta
          "x-scalar-registry-meta": workspaceDocument["x-scalar-registry-meta"]
        }
      });
    },
    commitDocument(documentName) {
      console.warn(`Commit operation for document '${documentName}' is not implemented yet.`);
    },
    exportWorkspace() {
      const { activeDocument: _, documents, ...meta } = unpackProxyObject(workspace);
      return {
        documents: {
          ...Object.fromEntries(Object.entries(documents).map(([name, doc]) => [
            name,
            // Get the raw document without any proxies
            unpackProxyObject(doc)
          ]))
        },
        meta: unpackProxyObject(meta) ?? {},
        originalDocuments: unpackProxyObject(originalDocuments),
        intermediateDocuments: unpackProxyObject(intermediateDocuments),
        overrides: unpackProxyObject(overrides),
        history: history.export(),
        auth: auth.export()
      };
    },
    loadWorkspace(input) {
      safeAssign(workspace.documents, Object.fromEntries(Object.entries(input.documents).map(([name, doc]) => [
        name,
        createOverridesProxy(createMagicProxy(doc), {
          overrides: input.overrides[name]
        })
      ])));
      safeAssign(originalDocuments, input.originalDocuments);
      safeAssign(intermediateDocuments, input.intermediateDocuments);
      safeAssign(overrides, input.overrides);
      safeAssign(workspace, input.meta);
      history.load(input.history);
      auth.load(input.auth);
    },
    importWorkspaceFromSpecification: (specification) => {
      const { documents, overrides: overrides2, info: _info, workspace: _workspaceVersion, ...meta } = specification;
      safeAssign(workspace, meta);
      return Promise.all(Object.entries(documents ?? {}).map(([name, doc]) => addDocument({ url: doc.$ref, name, overrides: overrides2 == null ? void 0 : overrides2[name] })));
    },
    rebaseDocument: async (input) => {
      const { name } = input;
      const originalDocument = unpackProxyObject(originalDocuments[name], { depth: 1 });
      const activeDocumentRaw = unpackProxyObject(workspace.documents[name], { depth: 1 });
      const activeDocument = await getEditableDocument(name);
      if (!originalDocument || !activeDocument || !activeDocumentRaw) {
        return {
          ok: false,
          type: "CORRUPTED_STATE",
          message: `Cannot rebase document '${name}': missing original or active document state`
        };
      }
      const resolve2 = await withMeasurementAsync("loadDocument", async () => await loadDocument({
        ...input,
        fetch: input.fetch ?? (workspaceProps == null ? void 0 : workspaceProps.fetch),
        fileLoader: workspaceProps == null ? void 0 : workspaceProps.fileLoader
      }));
      if (!resolve2.ok || !isObject(resolve2.data)) {
        return {
          ok: false,
          type: "FETCH_FAILED",
          message: `Failed to fetch document '${name}': request was not successful or returned invalid data`
        };
      }
      const newHash = generateHash(resolve2.raw);
      if (activeDocumentRaw["x-scalar-original-document-hash"] === newHash) {
        return {
          ok: false,
          type: "NO_CHANGES_DETECTED",
          message: `No changes detected for document '${name}': document hash matches the active document`
        };
      }
      const newDocumentOrigin = resolve2.data;
      overrides[name] = input.overrides ?? {};
      extraDocumentConfigurations[name] = { fetch: input.fetch };
      const changelogIncoming = diff(originalDocument, newDocumentOrigin);
      if (changelogIncoming.length === 0) {
        return {
          ok: false,
          type: "NO_CHANGES_DETECTED",
          message: `No changes detected for document '${name}' after fetching the latest version.`
        };
      }
      const changelogLocal = diff(originalDocument, activeDocument);
      const merged = merge(changelogIncoming, changelogLocal);
      return {
        ok: true,
        conflicts: merged.conflicts,
        changes: merged.diffs,
        applyChanges: async (applyChangesInput) => {
          const getNewActiveDocument = () => {
            if ("resolvedConflicts" in applyChangesInput) {
              const changeset = merged.diffs.concat(applyChangesInput.resolvedConflicts);
              return apply(deepClone(originalDocument), changeset);
            }
            return applyChangesInput.resolvedDocument;
          };
          const mergedDocument = getNewActiveDocument();
          const hasLocalChangesAgainstUpstream = diff(newDocumentOrigin, mergedDocument).length > 0;
          originalDocuments[name] = mergedDocument;
          intermediateDocuments[name] = deepClone(mergedDocument);
          const isOpenApi = isOpenApiDocument(activeDocumentRaw);
          const environments = isOpenApi ? activeDocumentRaw["x-scalar-environments"] : void 0;
          const order = isOpenApi ? activeDocumentRaw["x-scalar-order"] : void 0;
          const mergedServers = mergedDocument.servers;
          const activeServers = activeDocumentRaw.servers;
          const mergedHasServers = Array.isArray(mergedServers) && mergedServers.length > 0;
          const activeHasServers = Array.isArray(activeServers) && activeServers.length > 0;
          const preservedServers = !isAsyncApiDocument(mergedDocument) && !mergedHasServers && activeHasServers ? deepClone(activeServers) : void 0;
          await addInMemoryDocument({
            ...input,
            document: {
              ...mergedDocument,
              // force regeneration of navigation
              // when we are rebasing, we want to ensure that the navigation is always up to date
              [extensions.document.navigation]: void 0
            },
            documentSource: getDocumentSource(input),
            // Update the original document hash
            documentHash: generateHash(resolve2.raw),
            initialize: false,
            meta: {
              ...input.meta,
              // Preserve the registry meta
              "x-scalar-registry-meta": activeDocumentRaw["x-scalar-registry-meta"],
              // Preserve document-level UI settings (see note above).
              "x-scalar-watch-mode": activeDocumentRaw["x-scalar-watch-mode"],
              "x-scalar-selected-server": activeDocumentRaw["x-scalar-selected-server"],
              ...environments !== void 0 ? { "x-scalar-environments": environments } : {},
              ...order !== void 0 ? { "x-scalar-order": order } : {},
              ...preservedServers !== void 0 ? { servers: preservedServers } : {},
              // Flag local edits that need pushing - see note above.
              "x-scalar-is-dirty": hasLocalChangesAgainstUpstream
            }
          });
        }
      };
    }
  };
};

// node_modules/@scalar/helpers/dist/object/local-storage.js
var REFERENCE_LS_KEYS = {
  /**
   * Store the selected client as a string in localStorage
   */
  SELECTED_CLIENT: "scalar-reference-selected-client-v2",
  /**
   * Store the auth as a string in localStorage
   */
  AUTH: "scalar-reference-auth"
};
var safeLocalStorage = () => typeof window === "undefined" ? {
  getItem: () => null,
  setItem: () => null,
  removeItem: () => null
} : localStorage;

// node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInput.vue.script.js
var _hoisted_1 = { class: "flex items-center flex-1 relative" };
var _hoisted_2 = {
  key: 0,
  class: "select-none whitespace-nowrap text-transparent"
};
var _hoisted_3 = ["aria-readonly", "readonly"];
var _hoisted_4 = {
  key: 1,
  class: "absolute flex items-center inset-0 select-none overflow-hidden whitespace-nowrap"
};
var _hoisted_5 = {
  key: 0,
  class: "text-c-2"
};
var _hoisted_6 = { class: "text-transparent" };
var _hoisted_7 = {
  key: 1,
  class: "text-c-2"
};
var ScalarTextInput_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarTextInput",
  props: mergeModels({ readonly: { type: Boolean } }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: mergeModels(["click"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const model = useModel(__props, "modelValue");
    const input = ref();
    const { stylingAttrsCx, otherAttrs } = useBindCx();
    onMounted(() => {
      var _a;
      if ("autofocus" in otherAttrs.value) (_a = input.value) == null ? void 0 : _a.focus();
    });
    function handleClick(event) {
      var _a, _b;
      emit("click", event);
      if (__props.readonly) (_a = input.value) == null ? void 0 : _a.select();
      else (_b = input.value) == null ? void 0 : _b.focus();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "div" }, unref(stylingAttrsCx)("cursor-text bg-b-1 text-c-1 dark:bg-b-1.5"), { onClick: handleClick }), {
        default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
          _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "prefix")])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", mergeProps({
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            "aria-readonly": __props.readonly || void 0,
            class: "z-1 min-w-0 flex-1 rounded-none border-none bg-transparent placeholder:font-[inherit] focus-within:outline-none",
            readonly: __props.readonly
          }, unref(otherAttrs)), null, 16, _hoisted_3), [[vModelDynamic, model.value]]),
          _ctx.$slots.prefix || _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_4, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_5, [renderSlot(_ctx.$slots, "prefix")])) : createCommentVNode("", true),
            createBaseVNode("span", _hoisted_6, toDisplayString(model.value || _ctx.$attrs.placeholder), 1),
            _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", _hoisted_7, [renderSlot(_ctx.$slots, "suffix")])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]), renderSlot(_ctx.$slots, "aside")]),
        _: 3
      }, 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInput.vue.js
var ScalarTextInput_default = ScalarTextInput_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInputCopy.vue.script.js
var ScalarTextInputCopy_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarTextInputCopy",
  props: mergeModels({
    duration: { default: 1500 },
    editable: { type: Boolean },
    immediate: { type: Boolean }
  }, {
    "modelValue": {},
    "modelModifiers": {},
    "copied": {
      type: Boolean,
      default: false
    },
    "copiedModifiers": {}
  }),
  emits: ["update:modelValue", "update:copied"],
  setup(__props) {
    onMounted(() => {
      if (__props.immediate && model.value) copy(model.value);
    });
    const model = useModel(__props, "modelValue");
    const copied = useModel(__props, "copied");
    const { copy, copied: clipboardCopied } = useClipboard({
      legacy: true,
      copiedDuring: __props.duration
    });
    watch(clipboardCopied, (v) => copied.value = v);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ScalarTextInput_default, {
        modelValue: model.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
        readonly: !__props.editable,
        onClick: _cache[2] || (_cache[2] = ($event) => model.value && unref(copy)(model.value))
      }, {
        aside: withCtx(() => [createVNode(unref(ScalarCopyButton_default), {
          class: "z-1 bg-b-1 hover:bg-b-1.5 dark:bg-b-2 dark:hover:bg-b-2",
          copied: copied.value || unref(clipboardCopied),
          placement: "left",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => model.value && unref(copy)(model.value), ["stop"]))
        }, createSlots({
          backdrop: withCtx(() => [createVNode(unref(ScalarCopyBackdrop_default), { class: "bg-b-1 group-hover/copy-button:bg-b-1.5 dark:bg-b-1.5 dark:group-hover/copy-button:bg-b-1.5" })]),
          _: 2
        }, [_ctx.$slots.copy ? {
          name: "copy",
          fn: withCtx(() => [renderSlot(_ctx.$slots, "copy")]),
          key: "0"
        } : void 0, _ctx.$slots.copied ? {
          name: "copied",
          fn: withCtx(() => [renderSlot(_ctx.$slots, "copied")]),
          key: "1"
        } : void 0]), 1032, ["copied"])]),
        _: 3
      }, 8, ["modelValue", "readonly"]);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarTextInput/ScalarTextInputCopy.vue.js
var ScalarTextInputCopy_default = ScalarTextInputCopy_vue_vue_type_script_setup_true_lang_default;

export {
  REFERENCE_LS_KEYS,
  safeLocalStorage,
  bundle,
  Queue,
  fetchUrls,
  apiReferenceConfigurationSchema,
  apiReferenceConfigurationWithSourceSchema,
  createWorkspaceStore,
  ScalarTextInput_default,
  ScalarTextInputCopy_default
};
//# sourceMappingURL=chunk-HO2CTRUR.js.map
