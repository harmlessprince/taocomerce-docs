import {
  createApiClientModal
} from "./chunk-4RCTY5KE.js";
import "./chunk-7LQZNBC3.js";
import {
  REFERENCE_LS_KEYS,
  ScalarTextInput_default,
  apiReferenceConfigurationSchema,
  bundle,
  createWorkspaceStore,
  fetchUrls,
  safeLocalStorage
} from "./chunk-HO2CTRUR.js";
import {
  AuthSchema,
  AuthSelector_default,
  ScalarButton_default,
  ScalarCodeBlock_default,
  ScalarColorModeToggle_default,
  ScalarDropdownItem_default,
  ScalarDropdown_default,
  ScalarIconArrowRight_default,
  ScalarIconArrowUp_default,
  ScalarIconButton_default,
  ScalarIconCaretDown_default,
  ScalarIconCaretRight_default,
  ScalarIconCheck_default,
  ScalarIconInfo_default,
  ScalarIconLockSimple_default,
  ScalarIconMagnifyingGlass_default,
  ScalarIconPlus_default,
  ScalarIconUpload_default,
  ScalarIconXCircle_default,
  ScalarIconX_default,
  ScalarIcon_default,
  ScalarListbox_default,
  ScalarLoading_default,
  ScalarMarkdown_default,
  ScalarModal_default,
  ScalarPopover_default,
  ScalarSearchInput_default,
  ScalarTooltip_default,
  ServerVariablesForm_default,
  array,
  buildRequestSecurity,
  coerce,
  coerceValue,
  createWorkspaceEventBus,
  debounce,
  encode,
  external_exports,
  getActiveEnvironment,
  getResolvedUrl,
  getSecurityRequirements,
  getSecuritySchemes,
  getSelectedSecurity,
  getSelectedServer,
  getServers,
  isOpenApiDocument,
  mergeSecurity,
  nullable,
  number,
  object,
  optional,
  parseMimeType,
  record,
  redirectToProxy,
  safeParseAsync,
  string,
  toJSONSchema,
  union,
  useDebounceFn,
  useFocusWithin,
  useLoadingState,
  useModal,
  useToasts,
  validate
} from "./chunk-GMLJFOMH.js";
import "./chunk-OFXDZRG6.js";
import "./chunk-WUKPMNDV.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  inject,
  isReadonly,
  isRef,
  nextTick,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  shallowRef,
  toDisplayString,
  toRef,
  toRefs,
  unref,
  useId,
  useTemplateRef,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-UEFGQ2CT.js";
import {
  __commonJS,
  __toESM
} from "./chunk-3KOD66RD.js";

// node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = __commonJS({
  "node_modules/@vercel/oidc/dist/get-context.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name17 in all)
        __defProp2(target, name17, { get: all[name17], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
    var get_context_exports = {};
    __export2(get_context_exports, {
      SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
      getContext: () => getContext3
    });
    module.exports = __toCommonJS(get_context_exports);
    var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
    function getContext3() {
      var _a18, _b17;
      const fromSymbol = globalThis;
      return ((_b17 = (_a18 = fromSymbol[SYMBOL_FOR_REQ_CONTEXT]) == null ? void 0 : _a18.get) == null ? void 0 : _b17.call(_a18)) ?? {};
    }
  }
});

// node_modules/@vercel/oidc/dist/index-browser.js
var require_index_browser = __commonJS({
  "node_modules/@vercel/oidc/dist/index-browser.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name17 in all)
        __defProp2(target, name17, { get: all[name17], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
    var index_browser_exports = {};
    __export2(index_browser_exports, {
      getContext: () => import_get_context.getContext,
      getVercelOidcToken: () => getVercelOidcToken2,
      getVercelOidcTokenSync: () => getVercelOidcTokenSync
    });
    module.exports = __toCommonJS(index_browser_exports);
    var import_get_context = require_get_context();
    async function getVercelOidcToken2() {
      return "";
    }
    function getVercelOidcTokenSync() {
      return "";
    }
  }
});

// node_modules/@scalar/agent-chat/dist/entities/error/helpers.js
function createError(code, detail) {
  return {
    code,
    detail
  };
}

// node_modules/@scalar/agent-chat/dist/entities/registry/document.js
var registryApiMetadata = object({
  id: string(),
  title: string(),
  namespace: string(),
  currentVersion: string(),
  logoUrl: union([string(), nullable()]),
  slug: string()
});

// node_modules/neverpanic/dist/index.js
function safeFn(cb, eh) {
  const createErrorResult = (e) => ({
    success: false,
    error: (eh == null ? void 0 : eh(e)) ?? null
  });
  return (...args) => {
    try {
      const result = cb(...args);
      if (result instanceof Promise)
        return result.catch(createErrorResult);
      return result;
    } catch (e) {
      return createErrorResult(e);
    }
  };
}
function fromUnsafe(cb, eh) {
  const createErrorResult = (e) => ({
    success: false,
    error: (eh == null ? void 0 : eh(e)) ?? null
  });
  const createSuccessResult = (data) => ({
    success: true,
    data
  });
  try {
    const result = cb();
    if (result instanceof Promise)
      return result.then(createSuccessResult).catch(createErrorResult);
    return createSuccessResult(result);
  } catch (e) {
    return createErrorResult(e);
  }
}
function resultsToResult(results) {
  let success = true;
  const error = [];
  const data = [];
  for (const result of results) {
    if (!result.success) {
      success = false;
      error.push(result.error);
    } else {
      data.push(result.data);
    }
  }
  return success ? { success: true, data } : { success: false, error };
}
var n = { safeFn, fromUnsafe, resultsToResult };

// node_modules/@scalar/agent-chat/dist/api.js
function createAuthorizationHeaders({ getAccessToken, getAgentKey }) {
  const token = getAccessToken == null ? void 0 : getAccessToken();
  const agentKey = getAgentKey == null ? void 0 : getAgentKey();
  return {
    ...token && { Authorization: `Bearer ${token}` },
    ...agentKey && { "x-scalar-agent-key": agentKey }
  };
}
function createApi({ baseUrl, getAccessToken, getAgentKey }) {
  const serviceErrorSchema = object({
    message: string(),
    code: string()
  });
  const request = n.safeFn(async ({ path, method = "get", query, body, responseSchema }) => {
    const url = `${baseUrl}${path}${query ? `?${new URLSearchParams(query)}` : ""}`;
    const fetchResult = await n.fromUnsafe(async () => fetch(url, {
      method,
      ...body && { body: JSON.stringify(body) },
      headers: { ...createAuthorizationHeaders({
        getAccessToken,
        getAgentKey
      }) }
    }), (originalError) => createError("FAILED_TO_FETCH", originalError));
    if (!fetchResult.success) return fetchResult;
    const fetchDataResult = await n.fromUnsafe(async () => fetchResult.data.json(), (originalError) => createError("FAILED_TO_FETCH_DATA", originalError));
    if (!fetchDataResult.success) return {
      success: false,
      error: createError("UNKNOWN_ERROR", "Unknown error occurred. Please contact support.")
    };
    if (!fetchResult.data.ok) {
      if (!validate(serviceErrorSchema, fetchDataResult.data)) return {
        success: false,
        error: createError("UNKNOWN_ERROR", "Unknown error occurred. Please contact support.")
      };
      const errorData = coerce(serviceErrorSchema, fetchDataResult.data);
      return {
        success: false,
        error: createError(errorData.code, errorData.message)
      };
    }
    if (!validate(responseSchema, fetchDataResult.data)) return {
      success: false,
      error: createError("INVALID_RESPONSE", "Invalid response. Please contact support")
    };
    return {
      success: true,
      data: coerce(responseSchema, fetchDataResult.data)
    };
  });
  const search = async (query) => request({
    path: "/vector/registry/search",
    query: { query },
    responseSchema: object({ results: array(registryApiMetadata) })
  });
  const getDocument = async (params) => request({
    path: `/vector/registry/document/${params.namespace}/${params.slug}`,
    responseSchema: registryApiMetadata
  });
  const getKeyDocuments = async () => request({
    path: "/vector/registry/documents",
    responseSchema: object({ documents: array(registryApiMetadata) })
  });
  const getCuratedDocuments = async () => request({
    path: "/vector/registry/curated",
    responseSchema: object({ results: array(registryApiMetadata) })
  });
  return {
    search,
    getDocument,
    getKeyDocuments,
    getCuratedDocuments
  };
}

// node_modules/@scalar/agent-chat/dist/registry/create-document-name.js
function createDocumentName(namespace, slug) {
  return `${namespace}/${slug}`;
}

// node_modules/@scalar/agent-chat/dist/entities/tools/execute-request.js
var EXECUTE_CLIENT_SIDE_REQUEST_TOOL_NAME = "execute-request";
var executeClientSideRequestToolInputSchema = object({
  method: string(),
  path: string(),
  headers: optional(record(string(), string())),
  body: optional(string()),
  documentName: string(),
  documentIdentifier: string({ typeComment: "Needed for legacy support for old clients" })
});

// node_modules/guess-json-indent/build/src/main.js
var guessJsonIndent = (jsonString) => {
  const firstIndex = skipWhitespaces(jsonString, 0);
  if (firstIndex === void 0 || !isJsonObjectOrArray(jsonString[firstIndex])) {
    return;
  }
  const secondIndex = skipWhitespaces(jsonString, firstIndex + 1);
  if (secondIndex === void 0) {
    return;
  }
  return getIndent(jsonString, firstIndex, secondIndex);
};
var main_default = guessJsonIndent;
var skipWhitespaces = (jsonString, startIndex) => {
  for (let index = startIndex; index < jsonString.length; index += 1) {
    const character = jsonString[index];
    if (!isJsonWhitespace(character)) {
      return index;
    }
  }
};
var isJsonWhitespace = (character) => character === " " || character === "	" || character === "\n" || character === "\r";
var isJsonObjectOrArray = (character) => character === "{" || character === "[";
var getIndent = (jsonString, firstIndex, secondIndex) => {
  let indent;
  for (let index = secondIndex - 1; index > firstIndex; index -= 1) {
    const character = jsonString[index];
    if (character === "\r") {
      return;
    }
    if (character === "\n") {
      return normalizeIndent(indent);
    }
    if (indent === void 0) {
      indent = character;
    } else if (indent[0] === character) {
      indent += character;
    } else {
      return;
    }
  }
};
var normalizeIndent = (indent) => {
  if (indent === void 0) {
    return 0;
  }
  return indent[0] === " " ? indent.length : indent;
};

// node_modules/truncate-json/build/src/number.js
var truncateNumber = (value, maxSize) => {
  const valueString = truncateNumberPrecision(
    value,
    "toPrecision",
    maxSize,
    maxSize
  );
  return valueString === void 0 ? truncateNumberPrecision(value, "toExponential", maxSize, maxSize) : valueString;
};
var truncateNumberPrecision = (value, methodName, maxSize, size) => {
  const valueString = value[methodName](size);
  const valueStringA = valueString.replace(POSITIVE_EXPONENT, "$1").replace(TRIMMED_NUMBER_REGEXP, "$1");
  if (valueStringA.length <= maxSize) {
    return valueStringA;
  }
  return size === 1 ? void 0 : truncateNumberPrecision(value, methodName, maxSize, size - 1);
};
var POSITIVE_EXPONENT = /(e)\+/iu;
var TRIMMED_NUMBER_REGEXP = /\.?0*($|e)/iu;

// node_modules/truncate-json/build/src/options.js
var validateOptions = (jsonString, maxSize) => {
  if (typeof jsonString !== "string") {
    throw new TypeError(`Input must be a JSON string: ${jsonString}`);
  }
  validateMaxSize(maxSize);
};
var validateMaxSize = (maxSize) => {
  checkMaxSizeType(maxSize);
  if (maxSize < 0) {
    throw new TypeError(`"maxSize" argument must be positive: ${maxSize}`);
  }
  if (maxSize < MIN_MAX_SIZE) {
    throw new TypeError(
      `"maxSize" argument must be at least ${MIN_MAX_SIZE}: ${maxSize}`
    );
  }
};
var checkMaxSizeType = (maxSize) => {
  if (maxSize === void 0) {
    throw new TypeError('"maxSize" argument must be defined');
  }
  if (!Number.isInteger(maxSize)) {
    throw new TypeError(`"maxSize" argument must be an integer: ${maxSize}`);
  }
};
var MIN_MAX_SIZE = 7;

// node_modules/string-byte-slice/build/src/bytes.js
var getByteStart = (buffer, bufferLength, byteStart) => {
  const byteStartA = convertNegativeIndex(bufferLength, byteStart);
  return findByteStart(buffer, bufferLength, byteStartA);
};
var findByteStart = (buffer, bufferLength, byteStart) => {
  if (byteStart >= bufferLength) {
    return byteStart;
  }
  const byte = buffer[byteStart];
  return byte >= NEXT_BYTES_START && byte <= NEXT_BYTES_END ? findByteStart(buffer, bufferLength, byteStart + 1) : byteStart;
};
var getByteEnd = (buffer, bufferLength, byteEnd) => {
  if (byteEnd === void 0) {
    return byteEnd;
  }
  const byteEndA = convertNegativeIndex(bufferLength, byteEnd);
  return findByteEnd(buffer, byteEndA);
};
var findByteEnd = (buffer, byteEndA) => {
  if (isInvalid4Sequence(buffer, byteEndA)) {
    return byteEndA - 3;
  }
  if (isInvalid3Sequence(buffer, byteEndA)) {
    return byteEndA - 2;
  }
  if (isInvalid2Sequence(buffer, byteEndA)) {
    return byteEndA - 1;
  }
  return byteEndA;
};
var isInvalid4Sequence = (buffer, byteEnd) => byteEnd >= 3 && buffer[byteEnd - 3] >= FIRST_BYTE_4_START && buffer[byteEnd - 3] <= FIRST_BYTE_4_END;
var isInvalid3Sequence = (buffer, byteEnd) => byteEnd >= 2 && buffer[byteEnd - 2] >= FIRST_BYTE_3_START;
var isInvalid2Sequence = (buffer, byteEnd) => byteEnd >= 1 && buffer[byteEnd - 1] >= FIRST_BYTE_2_START;
var convertNegativeIndex = (bufferLength, byteIndex) => byteIndex < 0 || Object.is(byteIndex, -0) ? Math.max(bufferLength + byteIndex, 0) : byteIndex;
var FIRST_BYTE_4_START = 240;
var FIRST_BYTE_4_END = 244;
var FIRST_BYTE_3_START = 224;
var FIRST_BYTE_2_START = 194;
var NEXT_BYTES_START = 128;
var NEXT_BYTES_END = 191;

// node_modules/string-byte-slice/build/src/buffer.js
var bufferSlice = (input, byteStart, byteEnd) => {
  const buffer = globalThis.Buffer.from(input);
  const byteStartA = getByteStart(buffer, buffer.length, byteStart);
  const byteEndA = getByteEnd(buffer, buffer.length, byteEnd);
  return byteStartA === 0 && byteEndA >= buffer.length ? buffer.toString() : buffer.toString("utf8", byteStartA, byteEndA);
};

// node_modules/string-byte-slice/build/src/codepoints.js
var LAST_ASCII_CODEPOINT = 127;
var LAST_TWO_BYTES_CODEPOINT = 2047;
var FIRST_HIGH_SURROGATE = 55296;
var LAST_HIGH_SURROGATE = 56319;
var FIRST_LOW_SURROGATE = 56320;
var LAST_LOW_SURROGATE = 57343;
var SURROGATE_REGEXP = /[\uD800-\uDFFF]/gu;
var SURROGATE_REPLACE_CHAR = "�";

// node_modules/string-byte-slice/build/src/surrogate.js
var replaceInvalidSurrogate = (input) => hasSurrogates(input) ? input.replace(SURROGATE_REGEXP, SURROGATE_REPLACE_CHAR) : input;
var hasSurrogates = (input) => {
  for (let index = 0; index < input.length; index += 1) {
    const codepoint = input.codePointAt(index);
    if (codepoint >= FIRST_HIGH_SURROGATE && codepoint <= LAST_LOW_SURROGATE) {
      return true;
    }
  }
  return false;
};

// node_modules/string-byte-slice/build/src/char_code/indices.js
var findCharIndex = ({
  input,
  targetByteCount,
  firstStartSurrogate,
  lastStartSurrogate,
  firstEndSurrogate,
  lastEndSurrogate,
  increment,
  canBacktrack,
  shift,
  charIndexInit
}) => {
  let charIndex = charIndexInit;
  let previousCharIndex = charIndex;
  let byteCount = 0;
  for (; byteCount < targetByteCount; charIndex += increment) {
    previousCharIndex = charIndex;
    const codepoint = input.charCodeAt(charIndex);
    if (Number.isNaN(codepoint)) {
      break;
    }
    if (codepoint <= LAST_ASCII_CODEPOINT) {
      byteCount += 1;
      continue;
    }
    if (codepoint <= LAST_TWO_BYTES_CODEPOINT) {
      byteCount += 2;
      continue;
    }
    byteCount += 3;
    if (codepoint < firstStartSurrogate || codepoint > lastStartSurrogate) {
      continue;
    }
    const nextCodepoint = input.charCodeAt(charIndex + increment);
    if (Number.isNaN(nextCodepoint) || nextCodepoint < firstEndSurrogate || nextCodepoint > lastEndSurrogate) {
      continue;
    }
    byteCount += 1;
    charIndex += increment;
  }
  const finalCharIndex = canBacktrack && byteCount > targetByteCount ? previousCharIndex : charIndex;
  return finalCharIndex + shift;
};

// node_modules/string-byte-slice/build/src/char_code/direction.js
var byteToChar = (input, byteIndex, isStart) => byteIndex < 0 || Object.is(byteIndex, -0) ? byteToCharBackward(input, byteIndex, isStart) : byteToCharForward(input, byteIndex, isStart);
var byteToCharForward = (input, byteIndex, isEnd) => findCharIndex({
  input,
  targetByteCount: byteIndex,
  firstStartSurrogate: FIRST_HIGH_SURROGATE,
  lastStartSurrogate: LAST_HIGH_SURROGATE,
  firstEndSurrogate: FIRST_LOW_SURROGATE,
  lastEndSurrogate: LAST_LOW_SURROGATE,
  increment: 1,
  canBacktrack: isEnd,
  shift: 0,
  charIndexInit: 0
});
var byteToCharBackward = (input, byteIndex, isEnd) => findCharIndex({
  input,
  targetByteCount: -byteIndex,
  firstStartSurrogate: FIRST_LOW_SURROGATE,
  lastStartSurrogate: LAST_LOW_SURROGATE,
  firstEndSurrogate: FIRST_HIGH_SURROGATE,
  lastEndSurrogate: LAST_HIGH_SURROGATE,
  increment: -1,
  canBacktrack: !isEnd,
  shift: 1,
  charIndexInit: input.length - 1
});

// node_modules/string-byte-slice/build/src/char_code/main.js
var charCodeSlice = (input, byteStart, byteEnd) => {
  const charStart = byteToChar(input, byteStart, false);
  const charEnd = getByteEnd2(input, byteEnd);
  const inputA = charStart === 0 && charEnd === void 0 ? input : input.slice(charStart, charEnd);
  return replaceInvalidSurrogate(inputA);
};
var getByteEnd2 = (input, byteEnd) => {
  if (byteEnd === void 0) {
    return byteEnd;
  }
  const charEnd = byteToChar(input, byteEnd, true);
  return charEnd === input.length ? void 0 : charEnd;
};

// node_modules/string-byte-slice/build/src/encoder.js
var textEncoderSlice = (input, byteStart, byteEnd) => {
  const { textEncoder, textDecoder } = getEncoderDecoder();
  const buffer = getBuffer(input);
  const { written } = textEncoder.encodeInto(input, buffer);
  const byteStartA = getByteStart(buffer, written, byteStart);
  const byteEndA = getByteEnd(buffer, written, byteEnd);
  const byteEndB = byteEndA === void 0 ? written : Math.min(byteEndA, written);
  const bufferA = buffer.subarray(byteStartA, byteEndB);
  return textDecoder.decode(bufferA);
};
var getEncoderDecoder = () => {
  if (textEncoderCache === void 0) {
    textEncoderCache = new globalThis.TextEncoder();
    textDecoderCache = new globalThis.TextDecoder("utf8", { fatal: false });
  }
  return { textEncoder: textEncoderCache, textDecoder: textDecoderCache };
};
var textEncoderCache;
var textDecoderCache;
var getBuffer = (input) => {
  const size = input.length * 3;
  if (size > CACHE_MAX_MEMORY) {
    return new Uint8Array(size);
  }
  if (cachedEncoderBuffer === void 0 || cachedEncoderBuffer.length < size) {
    cachedEncoderBuffer = new Uint8Array(size);
  }
  return cachedEncoderBuffer;
};
var CACHE_MAX_MEMORY = 1e5;
var cachedEncoderBuffer;

// node_modules/string-byte-slice/build/src/normalize.js
var normalizeByteEnd = (input, byteEnd) => {
  if (byteEnd === void 0) {
    return byteEnd;
  }
  const byteEndA = normalizeByteIndex(input, byteEnd);
  return byteEndA >= input.length * MAX_UTF8_CHAR_LENGTH ? void 0 : byteEndA;
};
var normalizeByteIndex = (input, byteIndex) => byteIndex <= input.length * -MAX_UTF8_CHAR_LENGTH ? 0 : byteIndex;
var MAX_UTF8_CHAR_LENGTH = 4;

// node_modules/string-byte-slice/build/src/validate.js
var validateInput = (input, byteStart, byteEnd) => {
  if (typeof input !== "string") {
    throw new TypeError(`First argument must be a string: ${input}`);
  }
  validateByteStart(byteStart);
  validateByteEnd(byteEnd);
};
var validateByteStart = (byteStart) => {
  if (byteStart === void 0) {
    throw new TypeError("Second argument is required.");
  }
  validateIndex("Second", byteStart);
};
var validateByteEnd = (byteEnd) => {
  if (byteEnd !== void 0) {
    validateIndex("Third", byteEnd);
  }
};
var validateIndex = (name17, byteIndex) => {
  if (!Number.isInteger(byteIndex)) {
    throw new TypeError(`${name17} argument must be an integer: ${byteIndex}`);
  }
};

// node_modules/string-byte-slice/build/src/width.js
var estimateCharWidth = (input) => {
  let asciiOnly = true;
  let longCharsCount = 0;
  for (let index = 0; index < SAMPLE_SIZE; index += 1) {
    const codepoint = getCodepoint(input, index);
    if (codepoint <= LAST_ASCII_CODEPOINT) {
      continue;
    }
    if (asciiOnly) {
      asciiOnly = false;
    }
    if (codepoint > LAST_TWO_BYTES_CODEPOINT) {
      longCharsCount += 1;
    }
  }
  return { asciiOnly, longCharsPercentage: longCharsCount / SAMPLE_SIZE };
};
var getCodepoint = (input, index) => {
  const sampleSize = SAMPLE_SIZE - 1;
  const percentage = 1 - (sampleSize - index) / sampleSize;
  const charIndex = Math.round(percentage * (input.length - 1));
  return input.charCodeAt(charIndex);
};
var SAMPLE_SIZE = 50;

// node_modules/string-byte-slice/build/src/main.js
var stringByteSlice = (input, byteStart, byteEnd) => {
  validateInput(input, byteStart, byteEnd);
  if (input === "") {
    return input;
  }
  const byteStartA = normalizeByteIndex(input, byteStart);
  const byteEndA = normalizeByteEnd(input, byteEnd);
  if (byteEndA === void 0 && Object.is(byteStartA, 0)) {
    return replaceInvalidSurrogate(input);
  }
  return useBestSlice(input, byteStartA, byteEndA);
};
var main_default2 = stringByteSlice;
var useBestSlice = (input, byteStart, byteEnd) => {
  if (input.length <= CHAR_CODE_MIN_LENGTH) {
    return charCodeSlice(input, byteStart, byteEnd);
  }
  const { asciiOnly, longCharsPercentage } = estimateCharWidth(input);
  if (asciiOnly) {
    return tryBufferSlice(input, byteStart, byteEnd);
  }
  return longCharsPercentage >= CHAR_CODE_MIN_PERC ? charCodeSlice(input, byteStart, byteEnd) : tryTextEncoderSlice(input, byteStart, byteEnd);
};
var CHAR_CODE_MIN_LENGTH = 200;
var CHAR_CODE_MIN_PERC = 0.4;
var tryBufferSlice = (input, byteStart, byteEnd) => "Buffer" in globalThis && "from" in globalThis.Buffer ? bufferSlice(input, byteStart, byteEnd) : (
  /* c8 ignore next */
  tryTextEncoderSlice(input, byteStart, byteEnd)
);
var tryTextEncoderSlice = (input, byteStart, byteEnd) => "TextEncoder" in globalThis ? textEncoderSlice(input, byteStart, byteEnd) : (
  /* c8 ignore next */
  charCodeSlice(input, byteStart, byteEnd)
);

// node_modules/truncate-json/build/src/string.js
var truncateString = (value, maxSize) => {
  const jsonString = JSON.stringify(value);
  const truncatedString = removeQuotes(jsonString);
  const truncatedStringA = main_default2(
    truncatedString,
    0,
    maxSize - ELLIPSIS.length - QUOTE.length * 2
  );
  const truncatedStringB = fixUnicodeSequenceEnd(truncatedStringA);
  const truncatedStringC = `${truncatedStringB}${ELLIPSIS}`;
  return addQuotes(truncatedStringC);
};
var fixUnicodeSequenceEnd = (truncatedString) => truncatedString.replace(INVALID_JSON_END, "");
var INVALID_JSON_END = /(\\|\\u[0-9a-fA-F]{0,3})$/u;
var removeQuotes = (jsonString) => jsonString.slice(QUOTE.length, -QUOTE.length);
var addQuotes = (truncatedString) => `${QUOTE}${truncatedString}${QUOTE}`;
var QUOTE = '"';
var ELLIPSIS = "...";

// node_modules/string-byte-length/build/src/buffer.js
var getNodeByteLength = (string2) => globalThis.Buffer.byteLength(string2);

// node_modules/string-byte-length/build/src/char_code.js
var getCharCodeByteLength = (string2) => {
  const charLength = string2.length;
  let byteLength = charLength;
  for (let charIndex = 0; charIndex < charLength; charIndex += 1) {
    const codepoint = string2.charCodeAt(charIndex);
    if (codepoint <= LAST_ASCII_CODEPOINT2) {
      continue;
    }
    if (codepoint <= LAST_TWO_BYTES_CODEPOINT2) {
      byteLength += 1;
      continue;
    }
    byteLength += 2;
    if (codepoint < FIRST_HIGH_SURROGATE2 || codepoint > LAST_HIGH_SURROGATE2) {
      continue;
    }
    const nextCodepoint = string2.charCodeAt(charIndex + 1);
    if (nextCodepoint < FIRST_LOW_SURROGATE2 || nextCodepoint > LAST_LOW_SURROGATE2) {
      continue;
    }
    charIndex += 1;
  }
  return byteLength;
};
var LAST_ASCII_CODEPOINT2 = 127;
var LAST_TWO_BYTES_CODEPOINT2 = 2047;
var FIRST_HIGH_SURROGATE2 = 55296;
var LAST_HIGH_SURROGATE2 = 56319;
var FIRST_LOW_SURROGATE2 = 56320;
var LAST_LOW_SURROGATE2 = 57343;

// node_modules/string-byte-length/build/src/encoder.js
var createTextEncoderFunc = () => getTextEncoderByteLength.bind(void 0, new TextEncoder());
var getTextEncoderByteLength = (textEncoder, string2) => {
  const encoderBuffer = getBuffer2(string2);
  return textEncoder.encodeInto(string2, encoderBuffer).written;
};
var getBuffer2 = (string2) => {
  const size = string2.length * 3;
  if (size > CACHE_MAX_MEMORY2) {
    return new Uint8Array(size);
  }
  if (cachedEncoderBuffer2 === void 0 || cachedEncoderBuffer2.length < size) {
    cachedEncoderBuffer2 = new Uint8Array(size);
  }
  return cachedEncoderBuffer2;
};
var CACHE_MAX_MEMORY2 = 1e5;
var cachedEncoderBuffer2;
var TEXT_ENCODER_MIN_LENGTH = 100;

// node_modules/string-byte-length/build/src/main.js
var getMainFunction = () => {
  if ("Buffer" in globalThis && "byteLength" in globalThis.Buffer) {
    return getNodeByteLength;
  }
  if ("TextEncoder" in globalThis) {
    return getByteLength.bind(void 0, createTextEncoderFunc());
  }
  return getCharCodeByteLength;
};
var getByteLength = (getTextEncoderByteLength2, string2) => string2.length < TEXT_ENCODER_MIN_LENGTH ? getCharCodeByteLength(string2) : getTextEncoderByteLength2(string2);
var main_default3 = getMainFunction();

// node_modules/truncate-json/build/src/length.js
var getJsonLength = (value) => {
  if (value === null) {
    return NULL_LENGTH;
  }
  if (value === true) {
    return TRUE_LENGTH;
  }
  if (value === false) {
    return FALSE_LENGTH;
  }
  const type = typeof value;
  if (type === "object") {
    return OBJ_ARR_LENGTH;
  }
  if (type === "number") {
    return JSON.stringify(value).length;
  }
  return getJsonStringLength(value);
};
var NULL_LENGTH = 4;
var TRUE_LENGTH = 4;
var FALSE_LENGTH = 5;
var OBJ_ARR_LENGTH = 2;
var getJsonStringLength = (string2) => main_default3(JSON.stringify(string2));

// node_modules/truncate-json/build/src/size.js
var addSize = ({
  size,
  increment,
  maxSize,
  truncatedProps,
  path,
  value
}) => {
  const newSize = size + increment;
  const stop = newSize > maxSize;
  return stop ? { size, stop, truncatedProps: [...truncatedProps, { path, value }] } : { size: newSize, stop, truncatedProps };
};
var getValueSize = (value) => getJsonLength(value);
var getArrayItemSize = (empty, indent, depth) => {
  const indentSize = getIndentSize({ empty, indent, depth, keySpaceSize: 0 });
  const commaSize = getCommaSize(empty);
  return indentSize + commaSize;
};
var getObjectPropSize = ({ key, empty, indent, depth }) => {
  const indentSize = getIndentSize({ empty, indent, depth, keySpaceSize: 1 });
  const keySize = getJsonStringLength(key);
  const commaSize = getCommaSize(empty);
  return indentSize + keySize + COLON_SIZE + commaSize;
};
var COLON_SIZE = 1;
var getIndentSize = ({ empty, indent, depth, keySpaceSize }) => {
  if (indent === void 0) {
    return 0;
  }
  const propSpaces = NEWLINE_SIZE + indent * (depth + 1);
  const parentSpaces = empty ? NEWLINE_SIZE + indent * depth : 0;
  return keySpaceSize + propSpaces + parentSpaces;
};
var NEWLINE_SIZE = 1;
var getCommaSize = (empty) => empty ? 0 : COMMA_SIZE;
var COMMA_SIZE = 1;

// node_modules/truncate-json/build/src/prop.js
var truncateProp = ({
  parent,
  truncatedProps,
  path,
  increment,
  maxSize,
  key,
  empty,
  size,
  truncateValue: truncateValue2,
  indent,
  depth
}) => {
  const value = parent[key];
  const pathA = [...path, key];
  const {
    size: newSize,
    stop,
    truncatedProps: truncatedPropsA
  } = addSize({
    size,
    increment,
    maxSize,
    truncatedProps,
    path: pathA,
    value
  });
  return stop ? { empty, size: newSize, truncatedProps: truncatedPropsA } : truncatePropValue({
    value,
    truncatedProps,
    path: pathA,
    maxSize,
    empty,
    size,
    newSize,
    truncateValue: truncateValue2,
    indent,
    depth
  });
};
var truncatePropValue = ({
  value,
  truncatedProps,
  path,
  maxSize,
  empty,
  size,
  newSize,
  truncateValue: truncateValue2,
  indent,
  depth
}) => {
  const {
    value: valueA,
    size: newSizeA,
    truncatedProps: truncatedPropsB
  } = truncateValue2({
    value,
    truncatedProps,
    path,
    size: newSize,
    maxSize,
    indent,
    depth: depth + 1
  });
  return valueA === void 0 ? { empty, size, truncatedProps: truncatedPropsB } : {
    empty: false,
    size: newSizeA,
    value: valueA,
    truncatedProps: truncatedPropsB
  };
};

// node_modules/truncate-json/build/src/array.js
var truncateArray = ({
  array: array3,
  truncatedProps,
  path,
  size,
  maxSize,
  truncateValue: truncateValue2,
  indent,
  depth
}) => {
  const newArray = [];
  let state = { empty: true, size, truncatedProps };
  for (let index = 0; index < array3.length; index += 1) {
    const increment = getArrayItemSize(state.empty, indent, depth);
    state = truncateProp({
      parent: array3,
      truncatedProps: state.truncatedProps,
      path,
      increment,
      maxSize,
      key: index,
      empty: state.empty,
      size: state.size,
      truncateValue: truncateValue2,
      indent,
      depth
    });
    if (state.value !== void 0) {
      newArray.push(state.value);
    }
  }
  return {
    value: newArray,
    size: state.size,
    truncatedProps: state.truncatedProps
  };
};

// node_modules/truncate-json/build/src/object.js
var truncateObject = ({
  object: object3,
  truncatedProps,
  path,
  size,
  maxSize,
  truncateValue: truncateValue2,
  indent,
  depth
}) => {
  const newObject = {};
  let state = { empty: true, size, truncatedProps };
  for (const key in object3) {
    const increment = getObjectPropSize({
      key,
      empty: state.empty,
      indent,
      depth
    });
    state = truncateProp({
      parent: object3,
      truncatedProps: state.truncatedProps,
      path,
      increment,
      maxSize,
      key,
      empty: state.empty,
      size: state.size,
      truncateValue: truncateValue2,
      indent,
      depth
    });
    if (state.value !== void 0) {
      newObject[key] = state.value;
    }
  }
  return {
    value: newObject,
    size: state.size,
    truncatedProps: state.truncatedProps
  };
};

// node_modules/truncate-json/build/src/value.js
var truncateValue = ({
  value,
  truncatedProps,
  path,
  size,
  maxSize,
  indent,
  depth
}) => {
  const increment = getValueSize(value);
  const {
    size: sizeA,
    stop,
    truncatedProps: truncatedPropsA
  } = addSize({
    size,
    increment,
    maxSize,
    truncatedProps,
    path,
    value
  });
  return stop ? { value: void 0, size: sizeA, truncatedProps: truncatedPropsA } : recurseValue({
    value,
    truncatedProps: truncatedPropsA,
    path,
    size: sizeA,
    maxSize,
    indent,
    depth
  });
};
var recurseValue = ({
  value,
  truncatedProps,
  path,
  size,
  maxSize,
  indent,
  depth
}) => {
  if (typeof value !== "object" || value === null) {
    return { value, size, truncatedProps };
  }
  return Array.isArray(value) ? truncateArray({
    array: value,
    truncatedProps,
    path,
    size,
    maxSize,
    truncateValue,
    indent,
    depth
  }) : truncateObject({
    object: value,
    truncatedProps,
    path,
    size,
    maxSize,
    truncateValue,
    indent,
    depth
  });
};

// node_modules/truncate-json/build/src/main.js
var truncateJson = (jsonString, maxSize) => {
  validateOptions(jsonString, maxSize);
  const indent = getIndent2(jsonString);
  const value = parseJson(jsonString);
  const { value: newValue, truncatedProps } = truncateValue({
    value,
    truncatedProps: [],
    path: [],
    size: 0,
    maxSize,
    indent,
    depth: 0
  });
  const newJsonString = serializeJson({ newValue, value, maxSize, indent });
  return { jsonString: newJsonString, truncatedProps };
};
var main_default4 = truncateJson;
var getIndent2 = (jsonString) => {
  const indent = main_default(jsonString);
  return typeof indent === "string" ? indent.length : indent;
};
var parseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new TypeError(
      `Invalid JSON string: "${jsonString}"
${error.message}`
    );
  }
};
var serializeJson = ({ newValue, value, maxSize, indent }) => {
  if (newValue !== void 0) {
    return JSON.stringify(newValue, void 0, indent);
  }
  return typeof value === "number" ? truncateNumber(value, maxSize) : truncateString(value, maxSize);
};

// node_modules/@scalar/agent-chat/dist/client-tools/execute-request.js
var MAX_RESPONSE_SIZE = 5e4;
var getBody = n.safeFn(async (response) => {
  if (response.headers.get("content-type") === "application/json") return {
    success: true,
    data: await response.json()
  };
  return {
    success: true,
    data: await response.text()
  };
}, (originalError) => createError("FAILED_TO_PARSE_RESPONSE_BODY", { originalError }));
var truncateResponse = (response) => JSON.parse(main_default4(JSON.stringify(response), MAX_RESPONSE_SIZE).jsonString);
var safeFetch = n.safeFn(async (url, init) => {
  const response = await fetch(url, init);
  const responseBodyResult = await getBody(response);
  if (!response.ok) return {
    success: false,
    error: createError("REQUEST_NOT_OK", {
      status: response.status,
      url: response.url,
      responseBody: truncateResponse(responseBodyResult.success ? responseBodyResult.data : void 0),
      headers: Object.fromEntries(response.headers.entries())
    })
  };
  if (!responseBodyResult.success) return responseBodyResult;
  return {
    success: true,
    data: {
      status: response.status,
      responseBody: truncateResponse(responseBodyResult.data),
      headers: Object.fromEntries(response.headers.entries())
    }
  };
}, (originalError) => createError("FAILED_TO_FETCH", { originalError }));
function createUrl({ path, activeServer, proxyUrl, queryParams }) {
  return redirectToProxy(proxyUrl, getResolvedUrl({
    path,
    server: activeServer,
    urlParams: queryParams
  }));
}
var executeRequestTool = n.safeFn(async ({ documentSettings, toolCallId, chat, proxyUrl, input: { method, path, body, headers, documentName } }) => {
  const settings = documentSettings[documentName];
  if (!settings) return {
    success: false,
    error: createError("DOCUMENT_SETTINGS_COULD_NOT_BE_DETERMINED", { documentName })
  };
  const requestSecurity = buildRequestSecurity(settings.securitySchemes).reduce((acc, securityOption) => {
    const securityValue = (() => {
      if (securityOption.format === "basic") return `Basic ${encode(securityOption.value)}`;
      if (securityOption.format === "bearer") return `Bearer ${securityOption.value}`;
      return securityOption.value;
    })();
    if (securityOption.in === "header") acc.headers[securityOption.name] = securityValue;
    else if (securityOption.in === "query") acc.queryParams.set(securityOption.name, securityValue);
    else if (securityOption.in === "cookie") acc.cookies[securityOption.name] = securityValue;
    return acc;
  }, {
    headers: {},
    queryParams: new URLSearchParams(),
    cookies: {}
  });
  const cookieHeader = Object.entries(requestSecurity.cookies).map(([name17, value]) => `${name17}=${value}`).join("; ");
  const fetchOptions = {
    method,
    body,
    headers: {
      ...headers,
      ...requestSecurity.headers,
      Cookie: cookieHeader
    }
  };
  const result = await safeFetch(createUrl({
    path,
    activeServer: settings.activeServer,
    proxyUrl,
    queryParams: requestSecurity.queryParams
  }), fetchOptions);
  chat.addToolOutput({
    tool: EXECUTE_CLIENT_SIDE_REQUEST_TOOL_NAME,
    toolCallId,
    output: result,
    state: "output-available"
  });
  return result;
}, (originalError) => createError("FAILED_TO_EXECUTE_REQUEST", originalError));

// node_modules/@scalar/agent-chat/dist/consts/urls.js
var URLS = {
  DEFAULT_PROXY_URL: "https://proxy.scalar.com",
  PRIVACY_POLICY: "https://scalar.com/legal/privacy-policy",
  TERMS_AND_CONDITIONS: "https://scalar.com/legal/terms-and-conditions",
  AGENT_SCALAR_DOCUMENTATION: "https://scalar.com/products/agent/getting-started",
  PROXY_SOURCE_CODE: "https://github.com/scalar/scalar/tree/main/projects/proxy-scalar-com"
};

// node_modules/@scalar/agent-chat/dist/helpers.js
function getOperations(doc) {
  return Object.values(doc.paths ?? {}).flatMap((path) => Object.values(path ?? {}));
}
function getSecurityFromDocument(documentName, document2, authStore) {
  var _a18;
  const mergedSecurity = mergeSecurity((_a18 = document2 == null ? void 0 : document2.components) == null ? void 0 : _a18.securitySchemes, {}, authStore, documentName);
  const securityRequirements = getSecurityRequirements(document2.security);
  const selectedSecurity = getSelectedSecurity(authStore.getAuthSelectedSchemas({
    type: "document",
    documentName
  }), void 0, securityRequirements);
  return getSecuritySchemes(mergedSecurity, selectedSecurity.selectedSchemes[selectedSecurity.selectedIndex] ?? {});
}
function createDocumentSettings(workspaceStore) {
  const openApiEntries = [];
  for (const [key, document2] of Object.entries(workspaceStore.workspace.documents)) if (isOpenApiDocument(document2)) openApiEntries.push([key, document2]);
  return Object.fromEntries(openApiEntries.map(([key, document2]) => {
    return [key, {
      activeServer: getSelectedServer(document2, null, null, getServers(document2.servers, { documentUrl: document2["x-scalar-original-source-url"] })),
      securitySchemes: getSecurityFromDocument(key, document2, workspaceStore.auth)
    }];
  }));
}
var storage = safeLocalStorage();
var authStorage = () => {
  const getKey = (slug) => {
    return `${REFERENCE_LS_KEYS.AUTH}-${slug}`;
  };
  return {
    /**
    * Retrieves and coerces the authentication schemes stored in local storage.
    */
    getAuth: (slug) => {
      return coerceValue(AuthSchema, JSON.parse(storage.getItem(getKey(slug)) ?? "{}"));
    },
    /**
    * Stores the authentication schemes in local storage.
    * @param value The Auth object to stringify and store.
    */
    setAuth: (slug, value) => {
      storage.setItem(getKey(slug), JSON.stringify(value));
    }
  };
};
var restoreAuthSecretsFromStorage = ({ documentName, workspaceStore }) => {
  const auth = authStorage().getAuth(documentName);
  workspaceStore.auth.load({ [documentName]: auth });
};
function safeParseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return;
  }
}

// node_modules/@scalar/agent-chat/dist/hooks/use-term-and-conditions.js
var TERMS_AND_CONDITIONS_LS_KEY = "scalar/agent-terms-accepted";
function useTermsAndConditions() {
  const accepted = ref(false);
  onMounted(() => {
    accepted.value = localStorage.getItem(TERMS_AND_CONDITIONS_LS_KEY) === "true";
  });
  function accept() {
    accepted.value = true;
    localStorage.setItem(TERMS_AND_CONDITIONS_LS_KEY, "true");
  }
  return {
    accepted,
    accept
  };
}

// node_modules/@scalar/agent-chat/dist/hooks/use-upload-tmp-document.js
var SHOW_UPLOAD_SUCCESS_DELAY = 5e3;
var TMP_DOC_LS_KEY = "scalar-tmp-doc";
function saveTmpDocumentInLocalStorage({ namespace, slug }) {
  localStorage.setItem(TMP_DOC_LS_KEY, JSON.stringify({
    namespace,
    slug
  }));
}
var tmpDocSchema = object({
  namespace: string(),
  slug: string()
});
function getTmpDocFromLocalStorage() {
  const tmpDoc = localStorage.getItem(TMP_DOC_LS_KEY);
  if (!tmpDoc) return;
  return coerce(tmpDocSchema, JSON.parse(tmpDoc));
}
function removeTmpDocFromLocalStorage() {
  if (!localStorage.getItem(TMP_DOC_LS_KEY)) return;
  localStorage.removeItem(TMP_DOC_LS_KEY);
}
function useUploadTmpDocument() {
  const state = useState();
  const uploadState = ref();
  function createUrl2(path) {
    const fullUrl = `${state.baseUrl}${path}`;
    return redirectToProxy(state.platformProxyUrl, fullUrl);
  }
  async function uploadTempDocument(document2, isAgent = false) {
    try {
      uploadState.value = { type: "uploading" };
      const response = await fetch(createUrl2(`/core/share/upload/apis${isAgent ? "?source=agent" : ""}`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: document2 })
      });
      if (!response.ok) {
        uploadState.value = {
          type: "error",
          error: "Failed to upload your OpenAPI document."
        };
        return;
      }
      const json2 = await response.json();
      const uploadResponseSchema = object({
        url: string(),
        namespace: string(),
        slug: string()
      });
      if (!validate(uploadResponseSchema, json2)) {
        uploadState.value = {
          type: "error",
          error: "Failed to process document."
        };
        return;
      }
      const uploadData = coerce(uploadResponseSchema, json2);
      uploadState.value = { type: "processing" };
      const embeddingStatusResponse = await fetch(createUrl2(`/vector/registry/embeddings/${uploadData.namespace}/${uploadData.slug}`), { method: "GET" });
      saveTmpDocumentInLocalStorage({
        namespace: uploadData.namespace,
        slug: uploadData.slug
      });
      await state.addDocument({
        namespace: uploadData.namespace,
        slug: uploadData.slug,
        removable: false,
        tmp: true
      });
      if (!embeddingStatusResponse.ok) {
        uploadState.value = {
          type: "error",
          error: "Failed to embed document."
        };
        return;
      }
      uploadState.value = { type: "done" };
      state.uploadedTmpDocumentUrl.value = uploadData.url;
      setTimeout(() => {
        uploadState.value = void 0;
      }, SHOW_UPLOAD_SUCCESS_DELAY);
      return uploadData;
    } catch {
      uploadState.value = {
        type: "error",
        error: "Failed to upload your OpenAPI document."
      };
      return;
    }
  }
  return {
    uploadTempDocument,
    uploadState
  };
}

// node_modules/@scalar/agent-chat/dist/plugins/persistance.js
var persistencePlugin = ({ debounceDelay = 500, maxWait = 1e4, persistAuth = false }) => {
  const { execute } = debounce({
    delay: debounceDelay,
    maxWait
  });
  const authPersistence = authStorage();
  const getPersistAuth = () => {
    if (typeof persistAuth === "function") return persistAuth();
    return persistAuth;
  };
  return { hooks: {
    /**
    * Handles all workspace state change events.
    * Each write is debounced by a key to prevent frequent writes for the same entity.
    */
    onWorkspaceStateChanges(event) {
      if (getPersistAuth() && event.type === "auth") execute("auth", () => authPersistence.setAuth(event.documentName, event.value));
    }
  } };
};

// node_modules/@scalar/agent-chat/dist/registry/add-documents-to-store.js
var loadDocument = n.safeFn(async ({ namespace, slug, workspaceStore, registryDocuments, getAccessToken, registryUrl, config, api, removable }) => {
  const getDocumentResult = await api.getDocument({
    namespace,
    slug
  });
  if (!getDocumentResult.success) return getDocumentResult;
  registryDocuments.value.push({
    ...getDocumentResult.data,
    removable
  });
  const url = new URL(`/@${namespace}/apis/${slug}/latest`, registryUrl);
  const headers = [];
  const token = getAccessToken == null ? void 0 : getAccessToken();
  if (token) headers.push({
    domains: [new URL(registryUrl).host],
    headers: { "x-scalar-auth": token }
  });
  const document2 = await bundle(url.toString(), {
    plugins: [fetchUrls({ headers })],
    treeShake: false
  });
  const documentName = createDocumentName(namespace, slug);
  await workspaceStore.addDocument({
    name: documentName,
    document: document2
  }, config);
  workspaceStore.update("x-scalar-active-document", documentName);
  restoreAuthSecretsFromStorage({
    documentName,
    workspaceStore
  });
  return {
    success: true,
    data: getDocumentResult.data
  };
}, (originalError) => createError("UNABLE_TO_LOAD_DOCUMENT", originalError));

// node_modules/@ai-sdk/provider/dist/index.mjs
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: name143,
    message,
    cause
  }) {
    super(message);
    this[_a] = true;
    this.name = name143;
    this.cause = cause;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(error) {
    return _AISDKError.hasMarker(error, marker);
  }
  static hasMarker(error, marker153) {
    const markerSymbol = Symbol.for(marker153);
    return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
  }
};
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
  constructor({
    message,
    url,
    requestBodyValues,
    statusCode,
    responseHeaders,
    responseBody,
    cause,
    isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500),
    // server error
    data
  }) {
    super({ name, message, cause });
    this[_a2] = true;
    this.url = url;
    this.requestBodyValues = requestBodyValues;
    this.statusCode = statusCode;
    this.responseHeaders = responseHeaders;
    this.responseBody = responseBody;
    this.isRetryable = isRetryable;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker2);
  }
};
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
  // used in isInstance
  constructor({ message = "Empty response body" } = {}) {
    super({ name: name2, message });
    this[_a3] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker3);
  }
};
function getErrorMessage(error) {
  if (error == null) {
    return "unknown error";
  }
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
  constructor({
    message,
    cause,
    argument
  }) {
    super({ name: name3, message, cause });
    this[_a4] = true;
    this.argument = argument;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker4);
  }
};
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
  constructor({
    prompt,
    message,
    cause
  }) {
    super({ name: name4, message: `Invalid prompt: ${message}`, cause });
    this[_a5] = true;
    this.prompt = prompt;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker5);
  }
};
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
  constructor({
    data,
    message = `Invalid response data: ${JSON.stringify(data)}.`
  }) {
    super({ name: name5, message });
    this[_a6] = true;
    this.data = data;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker6);
  }
};
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
  constructor({ text: text2, cause }) {
    super({
      name: name6,
      message: `JSON parsing failed: Text: ${text2}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a7] = true;
    this.text = text2;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker7);
  }
};
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
  // used in isInstance
  constructor({ message }) {
    super({ name: name7, message });
    this[_a8] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker8);
  }
};
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var _b9;
var LoadSettingError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
  // used in isInstance
  constructor({ message }) {
    super({ name: name8, message });
    this[_a9] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker9);
  }
};
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var _b10;
var NoContentGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
  // used in isInstance
  constructor({
    message = "No content generated."
  } = {}) {
    super({ name: name9, message });
    this[_a10] = true;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker10);
  }
};
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var _b11;
var NoSuchModelError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
  constructor({
    errorName = name10,
    modelId,
    modelType,
    message = `No such ${modelType}: ${modelId}`
  }) {
    super({ name: errorName, message });
    this[_a11] = true;
    this.modelId = modelId;
    this.modelType = modelType;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker11);
  }
};
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var _b12;
var TooManyEmbeddingValuesForCallError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
  constructor(options) {
    super({
      name: name11,
      message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
    });
    this[_a12] = true;
    this.provider = options.provider;
    this.modelId = options.modelId;
    this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
    this.values = options.values;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker12);
  }
};
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
  constructor({ value, cause }) {
    super({
      name: name12,
      message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
      cause
    });
    this[_a13] = true;
    this.value = value;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker13);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value,
    cause
  }) {
    return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({ value, cause });
  }
};
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
  constructor({
    functionality,
    message = `'${functionality}' functionality not supported.`
  }) {
    super({ name: name13, message });
    this[_a14] = true;
    this.functionality = functionality;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker14);
  }
};

// node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object3) => {
    const keys = [];
    for (const key in object3) {
      if (Object.prototype.hasOwnProperty.call(object3, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array3, separator = " | ") {
    return array3.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = /* @__PURE__ */ Object.create(null);
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: (params == null ? void 0 : params.async) ?? false,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a18, _b17;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b17 = (_a18 = err == null ? void 0 : err.message) == null ? void 0 : _a18.toLowerCase()) == null ? void 0 : _b17.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: true
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && (decoded == null ? void 0 : decoded.typ) !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) === "undefined" ? null : options == null ? void 0 : options.precision,
      offset: (options == null ? void 0 : options.offset) ?? false,
      local: (options == null ? void 0 : options.local) ?? false,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options == null ? void 0 : options.precision) === "undefined" ? null : options == null ? void 0 : options.precision,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (params == null ? void 0 : params.coerce) ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params == null ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (params == null ? void 0 : params.coerce) ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params == null ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params == null ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a18, _b17;
          const defaultError = ((_b17 = (_a18 = this._def).errorMap) == null ? void 0 : _b17.call(_a18, issue, ctx).message) ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema2 = this._def.getter();
    return lazySchema2._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;

// node_modules/eventsource-parser/dist/index.js
var ParseError = class extends Error {
  constructor(message, options) {
    super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
  }
};
var LF = 10;
var CR = 13;
var SPACE = 32;
function noop(_arg) {
}
function createParser(config) {
  if (typeof config == "function")
    throw new TypeError(
      "`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?"
    );
  const { onEvent = noop, onError = noop, onRetry = noop, onComment, maxBufferSize } = config, pendingFragments = [];
  let pendingFragmentsLength = 0, isFirstChunk = true, id, data = "", dataLines = 0, eventType, terminated = false;
  function feed(chunk) {
    if (terminated)
      throw new Error(
        "Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing."
      );
    if (isFirstChunk && (isFirstChunk = false, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
      const trailing2 = processLines(chunk);
      trailing2 !== "" && (pendingFragments.push(trailing2), pendingFragmentsLength = trailing2.length), checkBufferSize();
      return;
    }
    if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
      pendingFragments.push(chunk), pendingFragmentsLength += chunk.length, checkBufferSize();
      return;
    }
    pendingFragments.push(chunk);
    const input = pendingFragments.join("");
    pendingFragments.length = 0, pendingFragmentsLength = 0;
    const trailing = processLines(input);
    trailing !== "" && (pendingFragments.push(trailing), pendingFragmentsLength = trailing.length), checkBufferSize();
  }
  function checkBufferSize() {
    maxBufferSize !== void 0 && (pendingFragmentsLength + data.length <= maxBufferSize || (terminated = true, pendingFragments.length = 0, pendingFragmentsLength = 0, id = void 0, data = "", dataLines = 0, eventType = void 0, onError(
      new ParseError(`Buffered data exceeded max buffer size of ${maxBufferSize} characters`, {
        type: "max-buffer-size-exceeded"
      })
    )));
  }
  function processLines(chunk) {
    let searchIndex = 0;
    if (chunk.indexOf("\r") === -1) {
      let lfIndex = chunk.indexOf(`
`, searchIndex);
      for (; lfIndex !== -1; ) {
        if (searchIndex === lfIndex) {
          dataLines > 0 && onEvent({ id, event: eventType, data }), id = void 0, data = "", dataLines = 0, eventType = void 0, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
          continue;
        }
        const firstCharCode = chunk.charCodeAt(searchIndex);
        if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
          const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
          if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
            onEvent({ id, event: eventType, data: value }), id = void 0, data = "", eventType = void 0, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
            continue;
          }
          data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
        } else isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(
          chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6,
          lfIndex
        ) || void 0 : parseLine(chunk, searchIndex, lfIndex);
        searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
      }
      return chunk.slice(searchIndex);
    }
    for (; searchIndex < chunk.length; ) {
      const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
      let lineEnd = -1;
      if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1)
        break;
      parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
    }
    return chunk.slice(searchIndex);
  }
  function parseLine(chunk, start, end) {
    if (start === end) {
      dispatchEvent();
      return;
    }
    const firstCharCode = chunk.charCodeAt(start);
    if (isDataPrefix(chunk, start, firstCharCode)) {
      const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
      data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
      return;
    }
    if (isEventPrefix(chunk, start, firstCharCode)) {
      eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
      return;
    }
    if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
      const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
      value2.includes("\0") || (id = value2);
      return;
    }
    if (firstCharCode === 58) {
      if (onComment) {
        const line2 = chunk.slice(start, end);
        onComment(line2.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
      }
      return;
    }
    const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
    if (fieldSeparatorIndex === -1) {
      processField(line, "", line);
      return;
    }
    const field = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
    processField(field, value, line);
  }
  function processField(field, value, line) {
    switch (field) {
      case "event":
        eventType = value || void 0;
        break;
      case "data":
        data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
        break;
      case "id":
        value.includes("\0") || (id = value);
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(
          new ParseError(`Invalid \`retry\` value: "${value}"`, {
            type: "invalid-retry",
            value,
            line
          })
        );
        break;
      default:
        onError(
          new ParseError(
            `Unknown field "${field.length > 20 ? `${field.slice(0, 20)}…` : field}"`,
            { type: "unknown-field", field, value, line }
          )
        );
        break;
    }
  }
  function dispatchEvent() {
    dataLines > 0 && onEvent({
      id,
      event: eventType,
      data
    }), id = void 0, data = "", dataLines = 0, eventType = void 0;
  }
  function reset(options = {}) {
    if (options.consume && pendingFragments.length > 0) {
      const incompleteLine = pendingFragments.join("");
      parseLine(incompleteLine, 0, incompleteLine.length);
    }
    isFirstChunk = true, id = void 0, data = "", dataLines = 0, eventType = void 0, pendingFragments.length = 0, pendingFragmentsLength = 0, terminated = false;
  }
  return { feed, reset };
}
function isDataPrefix(chunk, i, firstCharCode) {
  return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
  return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}

// node_modules/eventsource-parser/dist/stream.js
var EventSourceParserStream = class extends TransformStream {
  constructor({ onError, onRetry, onComment, maxBufferSize } = {}) {
    let parser;
    super({
      start(controller) {
        parser = createParser({
          onEvent: (event) => {
            controller.enqueue(event);
          },
          onError(error) {
            typeof onError == "function" && onError(error), (onError === "terminate" || error.type === "max-buffer-size-exceeded") && controller.error(error);
          },
          onRetry,
          onComment,
          maxBufferSize
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      }
    });
  }
};

// node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
  return headers.reduce(
    (combinedHeaders, currentHeaders) => ({
      ...combinedHeaders,
      ...currentHeaders != null ? currentHeaders : {}
    }),
    {}
  );
}
function extractResponseHeaders(response) {
  return Object.fromEntries([...response.headers]);
}
var { btoa, atob: atob2 } = globalThis;
function convertUint8ArrayToBase64(array3) {
  let latin1string = "";
  for (let i = 0; i < array3.length; i++) {
    latin1string += String.fromCodePoint(array3[i]);
  }
  return btoa(latin1string);
}
var name14 = "AI_DownloadError";
var marker15 = `vercel.ai.error.${name14}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var _b15;
var DownloadError = class extends (_b15 = AISDKError, _a15 = symbol15, _b15) {
  constructor({
    url,
    statusCode,
    statusText,
    cause,
    message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}`
  }) {
    super({ name: name14, message, cause });
    this[_a15] = true;
    this.url = url;
    this.statusCode = statusCode;
    this.statusText = statusText;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker15);
  }
};
var createIdGenerator = ({
  prefix,
  size = 16,
  alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator = "-"
} = {}) => {
  const generator = () => {
    const alphabetLength = alphabet.length;
    const chars = new Array(size);
    for (let i = 0; i < size; i++) {
      chars[i] = alphabet[Math.random() * alphabetLength | 0];
    }
    return chars.join("");
  };
  if (prefix == null) {
    return generator;
  }
  if (alphabet.includes(separator)) {
    throw new InvalidArgumentError({
      argument: "separator",
      message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
    });
  }
  return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
function isAbortError(error) {
  return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || // Next.js
  error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
function handleFetchError({
  error,
  url,
  requestBodyValues
}) {
  if (isAbortError(error)) {
    return error;
  }
  if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
    const cause = error.cause;
    if (cause != null) {
      return new APICallError({
        message: `Cannot connect to API: ${cause.message}`,
        cause,
        url,
        requestBodyValues,
        isRetryable: true
        // retry when network error
      });
    }
  }
  return error;
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
  var _a24, _b23, _c;
  if (globalThisAny.window) {
    return `runtime/browser`;
  }
  if ((_a24 = globalThisAny.navigator) == null ? void 0 : _a24.userAgent) {
    return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
  }
  if ((_c = (_b23 = globalThisAny.process) == null ? void 0 : _b23.versions) == null ? void 0 : _c.node) {
    return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
  }
  if (globalThisAny.EdgeRuntime) {
    return `runtime/vercel-edge`;
  }
  return "runtime/unknown";
}
function normalizeHeaders(headers) {
  if (headers == null) {
    return {};
  }
  const normalized = {};
  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      normalized[key.toLowerCase()] = value;
    });
  } else {
    if (!Array.isArray(headers)) {
      headers = Object.entries(headers);
    }
    for (const [key, value] of headers) {
      if (value != null) {
        normalized[key.toLowerCase()] = value;
      }
    }
  }
  return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
  const normalizedHeaders = new Headers(normalizeHeaders(headers));
  const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
  normalizedHeaders.set(
    "user-agent",
    [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" ")
  );
  return Object.fromEntries(normalizedHeaders.entries());
}
var VERSION = true ? "4.0.5" : "0.0.0-test";
var getOriginalFetch = () => globalThis.fetch;
var getFromApi = async ({
  url,
  headers = {},
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch()
}) => {
  try {
    const response = await fetch2(url, {
      method: "GET",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: {}
        });
      } catch (error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: {}
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: {}
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: {}
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: {} });
  }
};
function loadOptionalSetting({
  settingValue,
  environmentVariableName
}) {
  if (typeof settingValue === "string") {
    return settingValue;
  }
  if (settingValue != null || typeof process === "undefined") {
    return void 0;
  }
  settingValue = process.env[environmentVariableName];
  if (settingValue == null || typeof settingValue !== "string") {
    return void 0;
  }
  return settingValue;
}
var suspectProtoRx = /"__proto__"\s*:/;
var suspectConstructorRx = /"constructor"\s*:/;
function _parse(text2) {
  const obj = JSON.parse(text2);
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (suspectProtoRx.test(text2) === false && suspectConstructorRx.test(text2) === false) {
    return obj;
  }
  return filter(obj);
}
function filter(obj) {
  let next = [obj];
  while (next.length) {
    const nodes = next;
    next = [];
    for (const node of nodes) {
      if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      if (Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
        throw new SyntaxError("Object contains forbidden prototype property");
      }
      for (const key in node) {
        const value = node[key];
        if (value && typeof value === "object") {
          next.push(value);
        }
      }
    }
  }
  return obj;
}
function secureJsonParse(text2) {
  const { stackTraceLimit } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch (e) {
    return _parse(text2);
  }
  try {
    return _parse(text2);
  } finally {
    Error.stackTraceLimit = stackTraceLimit;
  }
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
  if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
    jsonSchema2.additionalProperties = false;
    const { properties } = jsonSchema2;
    if (properties != null) {
      for (const key of Object.keys(properties)) {
        properties[key] = visit(properties[key]);
      }
    }
  }
  if (jsonSchema2.items != null) {
    jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
  }
  if (jsonSchema2.anyOf != null) {
    jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
  }
  if (jsonSchema2.allOf != null) {
    jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
  }
  if (jsonSchema2.oneOf != null) {
    jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
  }
  const { definitions } = jsonSchema2;
  if (definitions != null) {
    for (const key of Object.keys(definitions)) {
      definitions[key] = visit(definitions[key]);
    }
  }
  return jsonSchema2;
}
function visit(def) {
  if (typeof def === "boolean") return def;
  return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
);
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
};
function parseAnyDef() {
  return {};
}
function parseArrayDef(def, refs) {
  var _a24, _b23, _c;
  const res = {
    type: "array"
  };
  if (((_a24 = def.type) == null ? void 0 : _a24._def) && ((_c = (_b23 = def.type) == null ? void 0 : _b23._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    res.minItems = def.minLength.value;
  }
  if (def.maxLength) {
    res.maxItems = def.maxLength.value;
  }
  if (def.exactLength) {
    res.minItems = def.exactLength.value;
    res.maxItems = def.exactLength.value;
  }
  return res;
}
function parseBigintDef(def) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks) return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
function parseBooleanDef() {
  return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def);
  }
}
var integerDateParser = (def) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        res.minimum = check.value;
        break;
      case "max":
        res.maximum = check.value;
        break;
    }
  }
  return res;
};
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
var isJsonSchema7AllOfType = (type) => {
  if ("type" in type && type.type === "string") return false;
  return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
  const parsedType = typeof def.value;
  if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}
var emojiRegex2 = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => {
    if (emojiRegex2 === void 0) {
      emojiRegex2 = RegExp(
        "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
        "u"
      );
    }
    return emojiRegex2;
  },
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
          break;
        case "max":
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(
            res,
            RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`),
            check.message,
            refs
          );
          break;
        case "endsWith":
          addPattern(
            res,
            RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`),
            check.message,
            refs
          );
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
          res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
          break;
        case "includes": {
          addPattern(
            res,
            RegExp(escapeLiteralCheckValue(check.value, refs)),
            check.message,
            refs
          );
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              res.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ ((_) => {
          })(check);
      }
    }
  }
  return res;
}
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++) {
    if (!ALPHA_NUMERIC.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
function addFormat(schema, value, message, refs) {
  var _a24;
  if (schema.format || ((_a24 = schema.anyOf) == null ? void 0 : _a24.some((x) => x.format))) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format
      });
      delete schema.format;
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    schema.format = value;
  }
}
function addPattern(schema, regex, message, refs) {
  var _a24;
  if (schema.pattern || ((_a24 = schema.allOf) == null ? void 0 : _a24.some((x) => x.pattern))) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern
      });
      delete schema.pattern;
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    schema.pattern = stringifyRegExpWithFlags(regex, refs);
  }
}
function stringifyRegExpWithFlags(regex, refs) {
  var _a24;
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    // Case-insensitive
    m: regex.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i + 1] === "-" && ((_a24 = source[i + 2]) == null ? void 0 : _a24.match(/[a-z]/))) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch (e) {
    console.warn(
      `Could not convert regex pattern at ${refs.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    );
    return regex.source;
  }
  return pattern;
}
function parseRecordDef(def, refs) {
  var _a24, _b23, _c, _d, _e, _f;
  const schema = {
    type: "object",
    additionalProperties: (_a24 = parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    })) != null ? _a24 : refs.allowedAdditionalProperties
  };
  if (((_b23 = def.keyType) == null ? void 0 : _b23._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
    const { type, ...keyType } = parseBrandedDef(
      def.keyType._def,
      refs
    );
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef();
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
function parseNativeEnumDef(def) {
  const object3 = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object3[object3[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object3[key]);
  const parsedTypes = Array.from(
    new Set(actualValues.map((values) => typeof values))
  );
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
function parseNeverDef() {
  return { not: parseAnyDef() };
}
function parseNullDef() {
  return {
    type: "null"
  };
}
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every(
    (x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length)
  )) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    const types = options.reduce(
      (acc, x) => {
        const type = typeof x._def.value;
        switch (type) {
          case "string":
          case "number":
          case "boolean":
            return [...acc, type];
          case "bigint":
            return [...acc, "integer"];
          case "object":
            if (x._def.value === null) return [...acc, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return acc;
        }
      },
      []
    );
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce(
          (acc, x) => {
            return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
          },
          []
        )
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce(
        (acc, x) => [
          ...acc,
          ...x._def.values.filter((x2) => !acc.includes(x2))
        ],
        []
      )
    };
  }
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map(
    (x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "anyOf", `${i}`]
    })
  ).filter(
    (x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0)
  );
  return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    def.innerType._def.typeName
  ) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
  const res = {
    type: "number"
  };
  if (!def.checks) return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        break;
      case "min":
        if (check.inclusive) {
          res.minimum = check.value;
        } else {
          res.exclusiveMinimum = check.value;
        }
        break;
      case "max":
        if (check.inclusive) {
          res.maximum = check.value;
        } else {
          res.exclusiveMaximum = check.value;
        }
        break;
      case "multipleOf":
        res.multipleOf = check.value;
        break;
    }
  }
  return res;
}
function parseObjectDef(def, refs) {
  const result = {
    type: "object",
    properties: {}
  };
  const required = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    const propOptional = safeIsOptional(propDef);
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required.push(propName);
    }
  }
  if (required.length) {
    result.required = required;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch (e) {
    return true;
  }
}
var parseOptionalDef = (def, refs) => {
  var _a24;
  if (refs.currentPath.toString() === ((_a24 = refs.propertyPath) == null ? void 0 : _a24.toString())) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
};
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    schema.minItems = def.minSize.value;
  }
  if (def.maxSize) {
    schema.maxItems = def.maxSize.value;
  }
  return schema;
}
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map(
        (x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })
      ).reduce(
        (acc, x) => x === void 0 ? acc : [...acc, x],
        []
      ),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map(
        (x, i) => parseDef(x._def, {
          ...refs,
          currentPath: [...refs.currentPath, "items", `${i}`]
        })
      ).reduce(
        (acc, x) => x === void 0 ? acc : [...acc, x],
        []
      )
    };
  }
}
function parseUndefinedDef() {
  return {
    not: parseAnyDef()
  };
}
function parseUnknownDef() {
  return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
  return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef();
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef();
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef();
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef();
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef();
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return /* @__PURE__ */ ((_) => void 0)(typeName);
  }
};
var getRelativePath = (pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i]) break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
  var _a24;
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = (_a24 = refs.override) == null ? void 0 : _a24.call(
      refs,
      def,
      refs,
      seenItem,
      forceResolution
    );
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema2) {
    addMeta(def, refs, jsonSchema2);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
    newItem.jsonSchema = jsonSchema2;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema2;
  return jsonSchema2;
}
var get$ref = (item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(
          `Recursive reference detected at ${refs.currentPath.join(
            "/"
          )}! Defaulting to any`
        );
        return parseAnyDef();
      }
      return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
    }
  }
};
var addMeta = (def, refs, jsonSchema2) => {
  if (def.description) {
    jsonSchema2.description = def.description;
  }
  return jsonSchema2;
};
var getRefs = (options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    currentPath,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(_options.definitions).map(([name24, def]) => [
        def._def,
        {
          def: def._def,
          path: [..._options.basePath, _options.definitionPath, name24],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
};
var zod3ToJsonSchema = (schema, options) => {
  var _a24;
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce(
    (acc, [name34, schema2]) => {
      var _a34;
      return {
        ...acc,
        [name34]: (_a34 = parseDef(
          schema2._def,
          {
            ...refs,
            currentPath: [...refs.basePath, refs.definitionPath, name34]
          },
          true
        )) != null ? _a34 : parseAnyDef()
      };
    },
    {}
  ) : void 0;
  const name24 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
  const main = (_a24 = parseDef(
    schema._def,
    name24 === void 0 ? refs : {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name24]
    },
    false
  )) != null ? _a24 : parseAnyDef();
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  const combined = name24 === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name24
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name24]: main
    }
  };
  combined.$schema = "http://json-schema.org/draft-07/schema#";
  return combined;
};
var schemaSymbol = Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
  let schema;
  return () => {
    if (schema == null) {
      schema = createSchema();
    }
    return schema;
  };
}
function jsonSchema(jsonSchema2, {
  validate: validate2
} = {}) {
  return {
    [schemaSymbol]: true,
    _type: void 0,
    // should never be used directly
    get jsonSchema() {
      if (typeof jsonSchema2 === "function") {
        jsonSchema2 = jsonSchema2();
      }
      return jsonSchema2;
    },
    validate: validate2
  };
}
function isSchema(value) {
  return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
  return schema == null ? jsonSchema({ properties: {}, additionalProperties: false }) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
  return jsonSchema(
    () => addAdditionalPropertiesToJsonSchema(
      standardSchema2["~standard"].jsonSchema.input({
        target: "draft-07"
      })
    ),
    {
      validate: async (value) => {
        const result = await standardSchema2["~standard"].validate(value);
        return "value" in result ? { success: true, value: result.value } : {
          success: false,
          error: new TypeValidationError({
            value,
            cause: result.issues
          })
        };
      }
    }
  );
}
function zod3Schema(zodSchema2, options) {
  var _a24;
  const useReferences = (_a24 = options == null ? void 0 : options.useReferences) != null ? _a24 : false;
  return jsonSchema(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => zod3ToJsonSchema(zodSchema2, {
      $refStrategy: useReferences ? "root" : "none"
    }),
    {
      validate: async (value) => {
        const result = await zodSchema2.safeParseAsync(value);
        return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
      }
    }
  );
}
function zod4Schema(zodSchema2, options) {
  var _a24;
  const useReferences = (_a24 = options == null ? void 0 : options.useReferences) != null ? _a24 : false;
  return jsonSchema(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => addAdditionalPropertiesToJsonSchema(
      toJSONSchema(zodSchema2, {
        target: "draft-7",
        io: "input",
        reused: useReferences ? "ref" : "inline"
      })
    ),
    {
      validate: async (value) => {
        const result = await safeParseAsync(zodSchema2, value);
        return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
      }
    }
  );
}
function isZod4Schema(zodSchema2) {
  return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
  if (isZod4Schema(zodSchema2)) {
    return zod4Schema(zodSchema2, options);
  } else {
    return zod3Schema(zodSchema2, options);
  }
}
async function validateTypes({
  value,
  schema
}) {
  const result = await safeValidateTypes({ value, schema });
  if (!result.success) {
    throw TypeValidationError.wrap({ value, cause: result.error });
  }
  return result.value;
}
async function safeValidateTypes({
  value,
  schema
}) {
  const actualSchema = asSchema(schema);
  try {
    if (actualSchema.validate == null) {
      return { success: true, value, rawValue: value };
    }
    const result = await actualSchema.validate(value);
    if (result.success) {
      return { success: true, value: result.value, rawValue: value };
    }
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: result.error }),
      rawValue: value
    };
  } catch (error) {
    return {
      success: false,
      error: TypeValidationError.wrap({ value, cause: error }),
      rawValue: value
    };
  }
}
async function parseJSON({
  text: text2,
  schema
}) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return value;
    }
    return validateTypes({ value, schema });
  } catch (error) {
    if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) {
      throw error;
    }
    throw new JSONParseError({ text: text2, cause: error });
  }
}
async function safeParseJSON({
  text: text2,
  schema
}) {
  try {
    const value = secureJsonParse(text2);
    if (schema == null) {
      return { success: true, value, rawValue: value };
    }
    return await safeValidateTypes({ value, schema });
  } catch (error) {
    return {
      success: false,
      error: JSONParseError.isInstance(error) ? error : new JSONParseError({ text: text2, cause: error }),
      rawValue: void 0
    };
  }
}
function parseJsonEventStream({
  stream,
  schema
}) {
  return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(
    new TransformStream({
      async transform({ data }, controller) {
        if (data === "[DONE]") {
          return;
        }
        controller.enqueue(await safeParseJSON({ text: data, schema }));
      }
    })
  );
}
var getOriginalFetch2 = () => globalThis.fetch;
var postJsonToApi = async ({
  url,
  headers,
  body,
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
}) => postToApi({
  url,
  headers: {
    "Content-Type": "application/json",
    ...headers
  },
  body: {
    content: JSON.stringify(body),
    values: body
  },
  failedResponseHandler,
  successfulResponseHandler,
  abortSignal,
  fetch: fetch2
});
var postToApi = async ({
  url,
  headers = {},
  body,
  successfulResponseHandler,
  failedResponseHandler,
  abortSignal,
  fetch: fetch2 = getOriginalFetch2()
}) => {
  try {
    const response = await fetch2(url, {
      method: "POST",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/provider-utils/${VERSION}`,
        getRuntimeEnvironmentUserAgent()
      ),
      body: body.content,
      signal: abortSignal
    });
    const responseHeaders = extractResponseHeaders(response);
    if (!response.ok) {
      let errorInformation;
      try {
        errorInformation = await failedResponseHandler({
          response,
          url,
          requestBodyValues: body.values
        });
      } catch (error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
        throw new APICallError({
          message: "Failed to process error response",
          cause: error,
          statusCode: response.status,
          url,
          responseHeaders,
          requestBodyValues: body.values
        });
      }
      throw errorInformation.value;
    }
    try {
      return await successfulResponseHandler({
        response,
        url,
        requestBodyValues: body.values
      });
    } catch (error) {
      if (error instanceof Error) {
        if (isAbortError(error) || APICallError.isInstance(error)) {
          throw error;
        }
      }
      throw new APICallError({
        message: "Failed to process successful response",
        cause: error,
        statusCode: response.status,
        url,
        responseHeaders,
        requestBodyValues: body.values
      });
    }
  } catch (error) {
    throw handleFetchError({ error, url, requestBodyValues: body.values });
  }
};
function tool(tool2) {
  return tool2;
}
function createProviderToolFactoryWithOutputSchema({
  id,
  inputSchema,
  outputSchema: outputSchema2,
  supportsDeferredResults
}) {
  return ({
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    ...args
  }) => tool({
    type: "provider",
    id,
    args,
    inputSchema,
    outputSchema: outputSchema2,
    execute,
    needsApproval,
    toModelOutput,
    onInputStart,
    onInputDelta,
    onInputAvailable,
    supportsDeferredResults
  });
}
async function resolve(value) {
  if (typeof value === "function") {
    value = value();
  }
  return Promise.resolve(value);
}
var createJsonErrorResponseHandler = ({
  errorSchema,
  errorToMessage,
  isRetryable
}) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await response.text();
  const responseHeaders = extractResponseHeaders(response);
  if (responseBody.trim() === "") {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
  try {
    const parsedError = await parseJSON({
      text: responseBody,
      schema: errorSchema
    });
    return {
      responseHeaders,
      value: new APICallError({
        message: errorToMessage(parsedError),
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        data: parsedError,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
      })
    };
  } catch (parseError) {
    return {
      responseHeaders,
      value: new APICallError({
        message: response.statusText,
        url,
        requestBodyValues,
        statusCode: response.status,
        responseHeaders,
        responseBody,
        isRetryable: isRetryable == null ? void 0 : isRetryable(response)
      })
    };
  }
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response }) => {
  const responseHeaders = extractResponseHeaders(response);
  if (response.body == null) {
    throw new EmptyResponseBodyError({});
  }
  return {
    responseHeaders,
    value: parseJsonEventStream({
      stream: response.body,
      schema: chunkSchema
    })
  };
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
  const responseBody = await response.text();
  const parsedResult = await safeParseJSON({
    text: responseBody,
    schema: responseSchema
  });
  const responseHeaders = extractResponseHeaders(response);
  if (!parsedResult.success) {
    throw new APICallError({
      message: "Invalid JSON response",
      cause: parsedResult.error,
      statusCode: response.status,
      responseHeaders,
      responseBody,
      url,
      requestBodyValues
    });
  }
  return {
    responseHeaders,
    value: parsedResult.value,
    rawValue: parsedResult.rawValue
  };
};
function withoutTrailingSlash(url) {
  return url == null ? void 0 : url.replace(/\/$/, "");
}

// node_modules/@ai-sdk/gateway/dist/index.mjs
var import_oidc = __toESM(require_index_browser(), 1);
var import_oidc2 = __toESM(require_index_browser(), 1);
var marker16 = "vercel.ai.gateway.error";
var symbol16 = Symbol.for(marker16);
var _a16;
var _b16;
var GatewayError = class _GatewayError extends (_b16 = Error, _a16 = symbol16, _b16) {
  constructor({
    message,
    statusCode = 500,
    cause
  }) {
    super(message);
    this[_a16] = true;
    this.statusCode = statusCode;
    this.cause = cause;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(error) {
    return _GatewayError.hasMarker(error);
  }
  static hasMarker(error) {
    return typeof error === "object" && error !== null && symbol16 in error && error[symbol16] === true;
  }
};
var name15 = "GatewayAuthenticationError";
var marker22 = `vercel.ai.gateway.error.${name15}`;
var symbol22 = Symbol.for(marker22);
var _a22;
var _b22;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b22 = GatewayError, _a22 = symbol22, _b22) {
  constructor({
    message = "Authentication failed",
    statusCode = 401,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a22] = true;
    this.name = name15;
    this.type = "authentication_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol22 in error;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided,
    oidcTokenProvided,
    message = "Authentication failed",
    statusCode = 401,
    cause
  }) {
    let contextualMessage;
    if (apiKeyProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
    } else if (oidcTokenProvided) {
      contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
    } else {
      contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
    }
    return new _GatewayAuthenticationError({
      message: contextualMessage,
      statusCode,
      cause
    });
  }
};
var name22 = "GatewayInvalidRequestError";
var marker32 = `vercel.ai.gateway.error.${name22}`;
var symbol32 = Symbol.for(marker32);
var _a32;
var _b32;
var GatewayInvalidRequestError = class extends (_b32 = GatewayError, _a32 = symbol32, _b32) {
  constructor({
    message = "Invalid request",
    statusCode = 400,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a32] = true;
    this.name = name22;
    this.type = "invalid_request_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol32 in error;
  }
};
var name32 = "GatewayRateLimitError";
var marker42 = `vercel.ai.gateway.error.${name32}`;
var symbol42 = Symbol.for(marker42);
var _a42;
var _b42;
var GatewayRateLimitError = class extends (_b42 = GatewayError, _a42 = symbol42, _b42) {
  constructor({
    message = "Rate limit exceeded",
    statusCode = 429,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a42] = true;
    this.name = name32;
    this.type = "rate_limit_exceeded";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol42 in error;
  }
};
var name42 = "GatewayModelNotFoundError";
var marker52 = `vercel.ai.gateway.error.${name42}`;
var symbol52 = Symbol.for(marker52);
var modelNotFoundParamSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      modelId: external_exports.string()
    })
  )
);
var _a52;
var _b52;
var GatewayModelNotFoundError = class extends (_b52 = GatewayError, _a52 = symbol52, _b52) {
  constructor({
    message = "Model not found",
    statusCode = 404,
    modelId,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a52] = true;
    this.name = name42;
    this.type = "model_not_found";
    this.modelId = modelId;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol52 in error;
  }
};
var name52 = "GatewayInternalServerError";
var marker62 = `vercel.ai.gateway.error.${name52}`;
var symbol62 = Symbol.for(marker62);
var _a62;
var _b62;
var GatewayInternalServerError = class extends (_b62 = GatewayError, _a62 = symbol62, _b62) {
  constructor({
    message = "Internal server error",
    statusCode = 500,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a62] = true;
    this.name = name52;
    this.type = "internal_server_error";
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol62 in error;
  }
};
var name62 = "GatewayResponseError";
var marker72 = `vercel.ai.gateway.error.${name62}`;
var symbol72 = Symbol.for(marker72);
var _a72;
var _b72;
var GatewayResponseError = class extends (_b72 = GatewayError, _a72 = symbol72, _b72) {
  constructor({
    message = "Invalid response from Gateway",
    statusCode = 502,
    response,
    validationError,
    cause
  } = {}) {
    super({ message, statusCode, cause });
    this[_a72] = true;
    this.name = name62;
    this.type = "response_error";
    this.response = response;
    this.validationError = validationError;
  }
  static isInstance(error) {
    return GatewayError.hasMarker(error) && symbol72 in error;
  }
};
async function createGatewayErrorFromResponse({
  response,
  statusCode,
  defaultMessage = "Gateway request failed",
  cause,
  authMethod
}) {
  const parseResult = await safeValidateTypes({
    value: response,
    schema: gatewayErrorResponseSchema
  });
  if (!parseResult.success) {
    return new GatewayResponseError({
      message: `Invalid error response format: ${defaultMessage}`,
      statusCode,
      response,
      validationError: parseResult.error,
      cause
    });
  }
  const validatedResponse = parseResult.value;
  const errorType = validatedResponse.error.type;
  const message = validatedResponse.error.message;
  switch (errorType) {
    case "authentication_error":
      return GatewayAuthenticationError.createContextualError({
        apiKeyProvided: authMethod === "api-key",
        oidcTokenProvided: authMethod === "oidc",
        statusCode,
        cause
      });
    case "invalid_request_error":
      return new GatewayInvalidRequestError({ message, statusCode, cause });
    case "rate_limit_exceeded":
      return new GatewayRateLimitError({ message, statusCode, cause });
    case "model_not_found": {
      const modelResult = await safeValidateTypes({
        value: validatedResponse.error.param,
        schema: modelNotFoundParamSchema
      });
      return new GatewayModelNotFoundError({
        message,
        statusCode,
        modelId: modelResult.success ? modelResult.value.modelId : void 0,
        cause
      });
    }
    case "internal_server_error":
      return new GatewayInternalServerError({ message, statusCode, cause });
    default:
      return new GatewayInternalServerError({ message, statusCode, cause });
  }
}
var gatewayErrorResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      error: external_exports.object({
        message: external_exports.string(),
        type: external_exports.string().nullish(),
        param: external_exports.unknown().nullish(),
        code: external_exports.union([external_exports.string(), external_exports.number()]).nullish()
      })
    })
  )
);
function asGatewayError(error, authMethod) {
  var _a83;
  if (GatewayError.isInstance(error)) {
    return error;
  }
  if (APICallError.isInstance(error)) {
    return createGatewayErrorFromResponse({
      response: extractApiCallResponse(error),
      statusCode: (_a83 = error.statusCode) != null ? _a83 : 500,
      defaultMessage: "Gateway request failed",
      cause: error,
      authMethod
    });
  }
  return createGatewayErrorFromResponse({
    response: {},
    statusCode: 500,
    defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
    cause: error,
    authMethod
  });
}
function extractApiCallResponse(error) {
  if (error.data !== void 0) {
    return error.data;
  }
  if (error.responseBody != null) {
    try {
      return JSON.parse(error.responseBody);
    } catch (e) {
      return error.responseBody;
    }
  }
  return {};
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
  const result = await safeValidateTypes({
    value: headers[GATEWAY_AUTH_METHOD_HEADER],
    schema: gatewayAuthMethodSchema
  });
  return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = lazySchema(
  () => zodSchema(external_exports.union([external_exports.literal("api-key"), external_exports.literal("oidc")]))
);
var GatewayFetchMetadata = class {
  constructor(config) {
    this.config = config;
  }
  async getAvailableModels() {
    try {
      const { value } = await getFromApi({
        url: `${this.config.baseURL}/config`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayAvailableModelsResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw await asGatewayError(error);
    }
  }
  async getCredits() {
    try {
      const baseUrl = new URL(this.config.baseURL);
      const { value } = await getFromApi({
        url: `${baseUrl.origin}/v1/credits`,
        headers: await resolve(this.config.headers()),
        successfulResponseHandler: createJsonResponseHandler(
          gatewayCreditsResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        fetch: this.config.fetch
      });
      return value;
    } catch (error) {
      throw await asGatewayError(error);
    }
  }
};
var gatewayAvailableModelsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      models: external_exports.array(
        external_exports.object({
          id: external_exports.string(),
          name: external_exports.string(),
          description: external_exports.string().nullish(),
          pricing: external_exports.object({
            input: external_exports.string(),
            output: external_exports.string(),
            input_cache_read: external_exports.string().nullish(),
            input_cache_write: external_exports.string().nullish()
          }).transform(
            ({ input, output, input_cache_read, input_cache_write }) => ({
              input,
              output,
              ...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
              ...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
            })
          ).nullish(),
          specification: external_exports.object({
            specificationVersion: external_exports.literal("v3"),
            provider: external_exports.string(),
            modelId: external_exports.string()
          }),
          modelType: external_exports.enum(["language", "embedding", "image"]).nullish()
        })
      )
    })
  )
);
var gatewayCreditsResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      balance: external_exports.string(),
      total_used: external_exports.string()
    }).transform(({ balance, total_used }) => ({
      balance,
      totalUsed: total_used
    }))
  )
);
var GatewayLanguageModel = class {
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(options) {
    const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
    return {
      args: this.maybeEncodeFileParts(optionsWithoutSignal),
      warnings: []
    };
  }
  async doGenerate(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue: rawResponse
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, false),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createJsonResponseHandler(external_exports.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        ...responseBody,
        request: { body: args },
        response: { headers: responseHeaders, body: rawResponse },
        warnings
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  async doStream(options) {
    const { args, warnings } = await this.getArgs(options);
    const { abortSignal } = options;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const { value: response, responseHeaders } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          options.headers,
          this.getModelConfigHeaders(this.modelId, true),
          await resolve(this.config.o11yHeaders)
        ),
        body: args,
        successfulResponseHandler: createEventSourceResponseHandler(external_exports.any()),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        stream: response.pipeThrough(
          new TransformStream({
            start(controller) {
              if (warnings.length > 0) {
                controller.enqueue({ type: "stream-start", warnings });
              }
            },
            transform(chunk, controller) {
              if (chunk.success) {
                const streamPart = chunk.value;
                if (streamPart.type === "raw" && !options.includeRawChunks) {
                  return;
                }
                if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") {
                  streamPart.timestamp = new Date(streamPart.timestamp);
                }
                controller.enqueue(streamPart);
              } else {
                controller.error(
                  chunk.error
                );
              }
            }
          })
        ),
        request: { body: args },
        response: { headers: responseHeaders }
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  isFilePart(part) {
    return part && typeof part === "object" && "type" in part && part.type === "file";
  }
  /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */
  maybeEncodeFileParts(options) {
    for (const message of options.prompt) {
      for (const part of message.content) {
        if (this.isFilePart(part)) {
          const filePart = part;
          if (filePart.data instanceof Uint8Array) {
            const buffer = Uint8Array.from(filePart.data);
            const base64Data = Buffer.from(buffer).toString("base64");
            filePart.data = new URL(
              `data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`
            );
          }
        }
      }
    }
    return options;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(modelId, streaming) {
    return {
      "ai-language-model-specification-version": "3",
      "ai-language-model-id": modelId,
      "ai-language-model-streaming": String(streaming)
    };
  }
};
var GatewayEmbeddingModel = class {
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.maxEmbeddingsPerCall = 2048;
    this.supportsParallelCalls = true;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values,
    headers,
    abortSignal,
    providerOptions
  }) {
    var _a83;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          values,
          ...providerOptions ? { providerOptions } : {}
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayEmbeddingResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        embeddings: responseBody.embeddings,
        usage: (_a83 = responseBody.usage) != null ? _a83 : void 0,
        providerMetadata: responseBody.providerMetadata,
        response: { headers: responseHeaders, body: rawValue },
        warnings: []
      };
    } catch (error) {
      throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
var gatewayEmbeddingResponseSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      embeddings: external_exports.array(external_exports.array(external_exports.number())),
      usage: external_exports.object({ tokens: external_exports.number() }).nullish(),
      providerMetadata: external_exports.record(external_exports.string(), external_exports.record(external_exports.string(), external_exports.unknown())).optional()
    })
  )
);
var GatewayImageModel = class {
  constructor(modelId, config) {
    this.modelId = modelId;
    this.config = config;
    this.specificationVersion = "v3";
    this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt,
    n: n2,
    size,
    aspectRatio,
    seed,
    files,
    mask,
    providerOptions,
    headers,
    abortSignal
  }) {
    var _a83;
    const resolvedHeaders = await resolve(this.config.headers());
    try {
      const {
        responseHeaders,
        value: responseBody,
        rawValue
      } = await postJsonToApi({
        url: this.getUrl(),
        headers: combineHeaders(
          resolvedHeaders,
          headers != null ? headers : {},
          this.getModelConfigHeaders(),
          await resolve(this.config.o11yHeaders)
        ),
        body: {
          prompt,
          n: n2,
          ...size && { size },
          ...aspectRatio && { aspectRatio },
          ...seed && { seed },
          ...providerOptions && { providerOptions },
          ...files && {
            files: files.map((file) => maybeEncodeImageFile(file))
          },
          ...mask && { mask: maybeEncodeImageFile(mask) }
        },
        successfulResponseHandler: createJsonResponseHandler(
          gatewayImageResponseSchema
        ),
        failedResponseHandler: createJsonErrorResponseHandler({
          errorSchema: external_exports.any(),
          errorToMessage: (data) => data
        }),
        ...abortSignal && { abortSignal },
        fetch: this.config.fetch
      });
      return {
        images: responseBody.images,
        // Always base64 strings from server
        warnings: (_a83 = responseBody.warnings) != null ? _a83 : [],
        providerMetadata: responseBody.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: responseHeaders
        }
      };
    } catch (error) {
      throw asGatewayError(error, await parseAuthMethod(resolvedHeaders));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-image-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
function maybeEncodeImageFile(file) {
  if (file.type === "file" && file.data instanceof Uint8Array) {
    return {
      ...file,
      data: convertUint8ArrayToBase64(file.data)
    };
  }
  return file;
}
var providerMetadataEntrySchema = external_exports.object({
  images: external_exports.array(external_exports.unknown()).optional()
}).catchall(external_exports.unknown());
var gatewayImageResponseSchema = external_exports.object({
  images: external_exports.array(external_exports.string()),
  // Always base64 strings over the wire
  warnings: external_exports.array(
    external_exports.object({
      type: external_exports.literal("other"),
      message: external_exports.string()
    })
  ).optional(),
  providerMetadata: external_exports.record(external_exports.string(), providerMetadataEntrySchema).optional()
});
var perplexitySearchInputSchema = lazySchema(
  () => zodSchema(
    external_exports.object({
      query: external_exports.union([external_exports.string(), external_exports.array(external_exports.string())]).describe(
        "Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."
      ),
      max_results: external_exports.number().optional().describe(
        "Maximum number of search results to return (1-20, default: 10)"
      ),
      max_tokens_per_page: external_exports.number().optional().describe(
        "Maximum number of tokens to extract per search result page (256-2048, default: 2048)"
      ),
      max_tokens: external_exports.number().optional().describe(
        "Maximum total tokens across all search results (default: 25000, max: 1000000)"
      ),
      country: external_exports.string().optional().describe(
        "Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"
      ),
      search_domain_filter: external_exports.array(external_exports.string()).optional().describe(
        "List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"
      ),
      search_language_filter: external_exports.array(external_exports.string()).optional().describe(
        "List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"
      ),
      search_after_date: external_exports.string().optional().describe(
        "Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
      ),
      search_before_date: external_exports.string().optional().describe(
        "Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
      ),
      last_updated_after_filter: external_exports.string().optional().describe(
        "Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
      ),
      last_updated_before_filter: external_exports.string().optional().describe(
        "Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
      ),
      search_recency_filter: external_exports.enum(["day", "week", "month", "year"]).optional().describe(
        "Filter results by relative time period. Cannot be used with search_after_date or search_before_date."
      )
    })
  )
);
var perplexitySearchOutputSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      // Success response
      external_exports.object({
        results: external_exports.array(
          external_exports.object({
            title: external_exports.string(),
            url: external_exports.string(),
            snippet: external_exports.string(),
            date: external_exports.string().optional(),
            lastUpdated: external_exports.string().optional()
          })
        ),
        id: external_exports.string()
      }),
      // Error response
      external_exports.object({
        error: external_exports.enum([
          "api_error",
          "rate_limit",
          "timeout",
          "invalid_input",
          "unknown"
        ]),
        statusCode: external_exports.number().optional(),
        message: external_exports.string()
      })
    ])
  )
);
var perplexitySearchToolFactory = createProviderToolFactoryWithOutputSchema({
  id: "gateway.perplexity_search",
  inputSchema: perplexitySearchInputSchema,
  outputSchema: perplexitySearchOutputSchema
});
var perplexitySearch = (config = {}) => perplexitySearchToolFactory(config);
var gatewayTools = {
  /**
   * Search the web using Perplexity's Search API for real-time information,
   * news, research papers, and articles.
   *
   * Provides ranked search results with advanced filtering options including
   * domain, language, date range, and recency filters.
   */
  perplexitySearch
};
async function getVercelRequestId() {
  var _a83;
  return (_a83 = (0, import_oidc.getContext)().headers) == null ? void 0 : _a83["x-vercel-id"];
}
var VERSION2 = true ? "3.0.13" : "0.0.0-test";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
  var _a83, _b82;
  let pendingMetadata = null;
  let metadataCache = null;
  const cacheRefreshMillis = (_a83 = options.metadataCacheRefreshMillis) != null ? _a83 : 1e3 * 60 * 5;
  let lastFetchTime = 0;
  const baseURL = (_b82 = withoutTrailingSlash(options.baseURL)) != null ? _b82 : "https://ai-gateway.vercel.sh/v3/ai";
  const getHeaders = async () => {
    try {
      const auth = await getGatewayAuthToken(options);
      return withUserAgentSuffix(
        {
          Authorization: `Bearer ${auth.token}`,
          "ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
          [GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
          ...options.headers
        },
        `ai-sdk/gateway/${VERSION2}`
      );
    } catch (error) {
      throw GatewayAuthenticationError.createContextualError({
        apiKeyProvided: false,
        oidcTokenProvided: false,
        statusCode: 401,
        cause: error
      });
    }
  };
  const createO11yHeaders = () => {
    const deploymentId = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    });
    const environment = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    });
    const region = loadOptionalSetting({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const requestId = await getVercelRequestId();
      return {
        ...deploymentId && { "ai-o11y-deployment-id": deploymentId },
        ...environment && { "ai-o11y-environment": environment },
        ...region && { "ai-o11y-region": region },
        ...requestId && { "ai-o11y-request-id": requestId }
      };
    };
  };
  const createLanguageModel = (modelId) => {
    return new GatewayLanguageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  const getAvailableModels = async () => {
    var _a93, _b92, _c;
    const now = (_c = (_b92 = (_a93 = options._internal) == null ? void 0 : _a93.currentDate) == null ? void 0 : _b92.call(_a93).getTime()) != null ? _c : Date.now();
    if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
      lastFetchTime = now;
      pendingMetadata = new GatewayFetchMetadata({
        baseURL,
        headers: getHeaders,
        fetch: options.fetch
      }).getAvailableModels().then((metadata) => {
        metadataCache = metadata;
        return metadata;
      }).catch(async (error) => {
        throw await asGatewayError(
          error,
          await parseAuthMethod(await getHeaders())
        );
      });
    }
    return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
  };
  const getCredits = async () => {
    return new GatewayFetchMetadata({
      baseURL,
      headers: getHeaders,
      fetch: options.fetch
    }).getCredits().catch(async (error) => {
      throw await asGatewayError(
        error,
        await parseAuthMethod(await getHeaders())
      );
    });
  };
  const provider = function(modelId) {
    if (new.target) {
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    }
    return createLanguageModel(modelId);
  };
  provider.specificationVersion = "v3";
  provider.getAvailableModels = getAvailableModels;
  provider.getCredits = getCredits;
  provider.imageModel = (modelId) => {
    return new GatewayImageModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.languageModel = createLanguageModel;
  const createEmbeddingModel = (modelId) => {
    return new GatewayEmbeddingModel(modelId, {
      provider: "gateway",
      baseURL,
      headers: getHeaders,
      fetch: options.fetch,
      o11yHeaders: createO11yHeaders()
    });
  };
  provider.embeddingModel = createEmbeddingModel;
  provider.textEmbeddingModel = createEmbeddingModel;
  provider.tools = gatewayTools;
  return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
  const apiKey = loadOptionalSetting({
    settingValue: options.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  if (apiKey) {
    return {
      token: apiKey,
      authMethod: "api-key"
    };
  }
  const oidcToken = await (0, import_oidc2.getVercelOidcToken)();
  return {
    token: oidcToken,
    authMethod: "oidc"
  };
}

// node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js
var _globalThis = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};

// node_modules/@opentelemetry/api/build/esm/version.js
var VERSION3 = "1.9.0";

// node_modules/@opentelemetry/api/build/esm/internal/semver.js
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
  var acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
  var rejectedVersions = /* @__PURE__ */ new Set();
  var myVersionMatch = ownVersion.match(re);
  if (!myVersionMatch) {
    return function() {
      return false;
    };
  }
  var ownVersionParsed = {
    major: +myVersionMatch[1],
    minor: +myVersionMatch[2],
    patch: +myVersionMatch[3],
    prerelease: myVersionMatch[4]
  };
  if (ownVersionParsed.prerelease != null) {
    return function isExactmatch(globalVersion) {
      return globalVersion === ownVersion;
    };
  }
  function _reject(v) {
    rejectedVersions.add(v);
    return false;
  }
  function _accept(v) {
    acceptedVersions.add(v);
    return true;
  }
  return function isCompatible2(globalVersion) {
    if (acceptedVersions.has(globalVersion)) {
      return true;
    }
    if (rejectedVersions.has(globalVersion)) {
      return false;
    }
    var globalVersionMatch = globalVersion.match(re);
    if (!globalVersionMatch) {
      return _reject(globalVersion);
    }
    var globalVersionParsed = {
      major: +globalVersionMatch[1],
      minor: +globalVersionMatch[2],
      patch: +globalVersionMatch[3],
      prerelease: globalVersionMatch[4]
    };
    if (globalVersionParsed.prerelease != null) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major !== globalVersionParsed.major) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major === 0) {
      if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
        return _accept(globalVersion);
      }
      return _reject(globalVersion);
    }
    if (ownVersionParsed.minor <= globalVersionParsed.minor) {
      return _accept(globalVersion);
    }
    return _reject(globalVersion);
  };
}
var isCompatible = _makeCompatibilityCheck(VERSION3);

// node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
var major = VERSION3.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _globalThis;
function registerGlobal(type, instance, diag3, allowOverride) {
  var _a18;
  if (allowOverride === void 0) {
    allowOverride = false;
  }
  var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a18 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a18 !== void 0 ? _a18 : {
    version: VERSION3
  };
  if (!allowOverride && api[type]) {
    var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
    diag3.error(err.stack || err.message);
    return false;
  }
  if (api.version !== VERSION3) {
    var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION3);
    diag3.error(err.stack || err.message);
    return false;
  }
  api[type] = instance;
  diag3.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION3 + ".");
  return true;
}
function getGlobal(type) {
  var _a18, _b17;
  var globalVersion = (_a18 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a18 === void 0 ? void 0 : _a18.version;
  if (!globalVersion || !isCompatible(globalVersion)) {
    return;
  }
  return (_b17 = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b17 === void 0 ? void 0 : _b17[type];
}
function unregisterGlobal(type, diag3) {
  diag3.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION3 + ".");
  var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api) {
    delete api[type];
  }
}

// node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
var __read = function(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var DiagComponentLogger = (
  /** @class */
  function() {
    function DiagComponentLogger2(props) {
      this._namespace = props.namespace || "DiagComponentLogger";
    }
    DiagComponentLogger2.prototype.debug = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("debug", this._namespace, args);
    };
    DiagComponentLogger2.prototype.error = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("error", this._namespace, args);
    };
    DiagComponentLogger2.prototype.info = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("info", this._namespace, args);
    };
    DiagComponentLogger2.prototype.warn = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("warn", this._namespace, args);
    };
    DiagComponentLogger2.prototype.verbose = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("verbose", this._namespace, args);
    };
    return DiagComponentLogger2;
  }()
);
function logProxy(funcName, namespace, args) {
  var logger = getGlobal("diag");
  if (!logger) {
    return;
  }
  args.unshift(namespace);
  return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
}

// node_modules/@opentelemetry/api/build/esm/diag/types.js
var DiagLogLevel;
(function(DiagLogLevel2) {
  DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
  DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
  DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
  DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
  DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
  DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
  DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));

// node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
function createLogLevelDiagLogger(maxLevel, logger) {
  if (maxLevel < DiagLogLevel.NONE) {
    maxLevel = DiagLogLevel.NONE;
  } else if (maxLevel > DiagLogLevel.ALL) {
    maxLevel = DiagLogLevel.ALL;
  }
  logger = logger || {};
  function _filterFunc(funcName, theLevel) {
    var theFunc = logger[funcName];
    if (typeof theFunc === "function" && maxLevel >= theLevel) {
      return theFunc.bind(logger);
    }
    return function() {
    };
  }
  return {
    error: _filterFunc("error", DiagLogLevel.ERROR),
    warn: _filterFunc("warn", DiagLogLevel.WARN),
    info: _filterFunc("info", DiagLogLevel.INFO),
    debug: _filterFunc("debug", DiagLogLevel.DEBUG),
    verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
  };
}

// node_modules/@opentelemetry/api/build/esm/api/diag.js
var __read2 = function(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME = "diag";
var DiagAPI = (
  /** @class */
  function() {
    function DiagAPI2() {
      function _logProxy(funcName) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var logger = getGlobal("diag");
          if (!logger)
            return;
          return logger[funcName].apply(logger, __spreadArray2([], __read2(args), false));
        };
      }
      var self2 = this;
      var setLogger = function(logger, optionsOrLogLevel) {
        var _a18, _b17, _c;
        if (optionsOrLogLevel === void 0) {
          optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
        }
        if (logger === self2) {
          var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          self2.error((_a18 = err.stack) !== null && _a18 !== void 0 ? _a18 : err.message);
          return false;
        }
        if (typeof optionsOrLogLevel === "number") {
          optionsOrLogLevel = {
            logLevel: optionsOrLogLevel
          };
        }
        var oldLogger = getGlobal("diag");
        var newLogger = createLogLevelDiagLogger((_b17 = optionsOrLogLevel.logLevel) !== null && _b17 !== void 0 ? _b17 : DiagLogLevel.INFO, logger);
        if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
          var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
          oldLogger.warn("Current logger will be overwritten from " + stack);
          newLogger.warn("Current logger will overwrite one already registered from " + stack);
        }
        return registerGlobal("diag", newLogger, self2, true);
      };
      self2.setLogger = setLogger;
      self2.disable = function() {
        unregisterGlobal(API_NAME, self2);
      };
      self2.createComponentLogger = function(options) {
        return new DiagComponentLogger(options);
      };
      self2.verbose = _logProxy("verbose");
      self2.debug = _logProxy("debug");
      self2.info = _logProxy("info");
      self2.warn = _logProxy("warn");
      self2.error = _logProxy("error");
    }
    DiagAPI2.instance = function() {
      if (!this._instance) {
        this._instance = new DiagAPI2();
      }
      return this._instance;
    };
    return DiagAPI2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js
var __read3 = function(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = (
  /** @class */
  function() {
    function BaggageImpl2(entries) {
      this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
    }
    BaggageImpl2.prototype.getEntry = function(key) {
      var entry = this._entries.get(key);
      if (!entry) {
        return void 0;
      }
      return Object.assign({}, entry);
    };
    BaggageImpl2.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(_a18) {
        var _b17 = __read3(_a18, 2), k = _b17[0], v = _b17[1];
        return [k, v];
      });
    };
    BaggageImpl2.prototype.setEntry = function(key, entry) {
      var newBaggage = new BaggageImpl2(this._entries);
      newBaggage._entries.set(key, entry);
      return newBaggage;
    };
    BaggageImpl2.prototype.removeEntry = function(key) {
      var newBaggage = new BaggageImpl2(this._entries);
      newBaggage._entries.delete(key);
      return newBaggage;
    };
    BaggageImpl2.prototype.removeEntries = function() {
      var e_1, _a18;
      var keys = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
      }
      var newBaggage = new BaggageImpl2(this._entries);
      try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;
          newBaggage._entries.delete(key);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a18 = keys_1.return)) _a18.call(keys_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return newBaggage;
    };
    BaggageImpl2.prototype.clear = function() {
      return new BaggageImpl2();
    };
    return BaggageImpl2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js
var baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");

// node_modules/@opentelemetry/api/build/esm/baggage/utils.js
var diag = DiagAPI.instance();
function createBaggage(entries) {
  if (entries === void 0) {
    entries = {};
  }
  return new BaggageImpl(new Map(Object.entries(entries)));
}

// node_modules/@opentelemetry/api/build/esm/context/context.js
function createContextKey(description) {
  return Symbol.for(description);
}
var BaseContext = (
  /** @class */
  /* @__PURE__ */ function() {
    function BaseContext2(parentContext) {
      var self2 = this;
      self2._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
      self2.getValue = function(key) {
        return self2._currentContext.get(key);
      };
      self2.setValue = function(key, value) {
        var context2 = new BaseContext2(self2._currentContext);
        context2._currentContext.set(key, value);
        return context2;
      };
      self2.deleteValue = function(key) {
        var context2 = new BaseContext2(self2._currentContext);
        context2._currentContext.delete(key);
        return context2;
      };
    }
    return BaseContext2;
  }()
);
var ROOT_CONTEXT = new BaseContext();

// node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var NoopMeter = (
  /** @class */
  function() {
    function NoopMeter2() {
    }
    NoopMeter2.prototype.createGauge = function(_name, _options) {
      return NOOP_GAUGE_METRIC;
    };
    NoopMeter2.prototype.createHistogram = function(_name, _options) {
      return NOOP_HISTOGRAM_METRIC;
    };
    NoopMeter2.prototype.createCounter = function(_name, _options) {
      return NOOP_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createUpDownCounter = function(_name, _options) {
      return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createObservableGauge = function(_name, _options) {
      return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    NoopMeter2.prototype.createObservableCounter = function(_name, _options) {
      return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createObservableUpDownCounter = function(_name, _options) {
      return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    NoopMeter2.prototype.addBatchObservableCallback = function(_callback, _observables) {
    };
    NoopMeter2.prototype.removeBatchObservableCallback = function(_callback) {
    };
    return NoopMeter2;
  }()
);
var NoopMetric = (
  /** @class */
  /* @__PURE__ */ function() {
    function NoopMetric2() {
    }
    return NoopMetric2;
  }()
);
var NoopCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopCounterMetric2, _super);
    function NoopCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric2.prototype.add = function(_value, _attributes) {
    };
    return NoopCounterMetric2;
  }(NoopMetric)
);
var NoopUpDownCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopUpDownCounterMetric2, _super);
    function NoopUpDownCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric2.prototype.add = function(_value, _attributes) {
    };
    return NoopUpDownCounterMetric2;
  }(NoopMetric)
);
var NoopGaugeMetric = (
  /** @class */
  function(_super) {
    __extends(NoopGaugeMetric2, _super);
    function NoopGaugeMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopGaugeMetric2.prototype.record = function(_value, _attributes) {
    };
    return NoopGaugeMetric2;
  }(NoopMetric)
);
var NoopHistogramMetric = (
  /** @class */
  function(_super) {
    __extends(NoopHistogramMetric2, _super);
    function NoopHistogramMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric2.prototype.record = function(_value, _attributes) {
    };
    return NoopHistogramMetric2;
  }(NoopMetric)
);
var NoopObservableMetric = (
  /** @class */
  function() {
    function NoopObservableMetric2() {
    }
    NoopObservableMetric2.prototype.addCallback = function(_callback) {
    };
    NoopObservableMetric2.prototype.removeCallback = function(_callback) {
    };
    return NoopObservableMetric2;
  }()
);
var NoopObservableCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopObservableCounterMetric2, _super);
    function NoopObservableCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric2;
  }(NoopObservableMetric)
);
var NoopObservableGaugeMetric = (
  /** @class */
  function(_super) {
    __extends(NoopObservableGaugeMetric2, _super);
    function NoopObservableGaugeMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric2;
  }(NoopObservableMetric)
);
var NoopObservableUpDownCounterMetric = (
  /** @class */
  function(_super) {
    __extends(NoopObservableUpDownCounterMetric2, _super);
    function NoopObservableUpDownCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric2;
  }(NoopObservableMetric)
);
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_GAUGE_METRIC = new NoopGaugeMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();

// node_modules/@opentelemetry/api/build/esm/metrics/Metric.js
var ValueType;
(function(ValueType2) {
  ValueType2[ValueType2["INT"] = 0] = "INT";
  ValueType2[ValueType2["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {}));

// node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js
var defaultTextMapGetter = {
  get: function(carrier, key) {
    if (carrier == null) {
      return void 0;
    }
    return carrier[key];
  },
  keys: function(carrier) {
    if (carrier == null) {
      return [];
    }
    return Object.keys(carrier);
  }
};
var defaultTextMapSetter = {
  set: function(carrier, key, value) {
    if (carrier == null) {
      return;
    }
    carrier[key] = value;
  }
};

// node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
var __read4 = function(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var NoopContextManager = (
  /** @class */
  function() {
    function NoopContextManager2() {
    }
    NoopContextManager2.prototype.active = function() {
      return ROOT_CONTEXT;
    };
    NoopContextManager2.prototype.with = function(_context, fn, thisArg) {
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return fn.call.apply(fn, __spreadArray3([thisArg], __read4(args), false));
    };
    NoopContextManager2.prototype.bind = function(_context, target) {
      return target;
    };
    NoopContextManager2.prototype.enable = function() {
      return this;
    };
    NoopContextManager2.prototype.disable = function() {
      return this;
    };
    return NoopContextManager2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/api/context.js
var __read5 = function(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray4 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME2 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
var ContextAPI = (
  /** @class */
  function() {
    function ContextAPI2() {
    }
    ContextAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new ContextAPI2();
      }
      return this._instance;
    };
    ContextAPI2.prototype.setGlobalContextManager = function(contextManager) {
      return registerGlobal(API_NAME2, contextManager, DiagAPI.instance());
    };
    ContextAPI2.prototype.active = function() {
      return this._getContextManager().active();
    };
    ContextAPI2.prototype.with = function(context2, fn, thisArg) {
      var _a18;
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return (_a18 = this._getContextManager()).with.apply(_a18, __spreadArray4([context2, fn, thisArg], __read5(args), false));
    };
    ContextAPI2.prototype.bind = function(context2, target) {
      return this._getContextManager().bind(context2, target);
    };
    ContextAPI2.prototype._getContextManager = function() {
      return getGlobal(API_NAME2) || NOOP_CONTEXT_MANAGER;
    };
    ContextAPI2.prototype.disable = function() {
      this._getContextManager().disable();
      unregisterGlobal(API_NAME2, DiagAPI.instance());
    };
    return ContextAPI2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
var TraceFlags;
(function(TraceFlags2) {
  TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
  TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));

// node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js
var INVALID_SPANID = "0000000000000000";
var INVALID_TRACEID = "00000000000000000000000000000000";
var INVALID_SPAN_CONTEXT = {
  traceId: INVALID_TRACEID,
  spanId: INVALID_SPANID,
  traceFlags: TraceFlags.NONE
};

// node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
var NonRecordingSpan = (
  /** @class */
  function() {
    function NonRecordingSpan2(_spanContext) {
      if (_spanContext === void 0) {
        _spanContext = INVALID_SPAN_CONTEXT;
      }
      this._spanContext = _spanContext;
    }
    NonRecordingSpan2.prototype.spanContext = function() {
      return this._spanContext;
    };
    NonRecordingSpan2.prototype.setAttribute = function(_key, _value) {
      return this;
    };
    NonRecordingSpan2.prototype.setAttributes = function(_attributes) {
      return this;
    };
    NonRecordingSpan2.prototype.addEvent = function(_name, _attributes) {
      return this;
    };
    NonRecordingSpan2.prototype.addLink = function(_link) {
      return this;
    };
    NonRecordingSpan2.prototype.addLinks = function(_links) {
      return this;
    };
    NonRecordingSpan2.prototype.setStatus = function(_status) {
      return this;
    };
    NonRecordingSpan2.prototype.updateName = function(_name) {
      return this;
    };
    NonRecordingSpan2.prototype.end = function(_endTime) {
    };
    NonRecordingSpan2.prototype.isRecording = function() {
      return false;
    };
    NonRecordingSpan2.prototype.recordException = function(_exception, _time) {
    };
    return NonRecordingSpan2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
function getSpan(context2) {
  return context2.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan() {
  return getSpan(ContextAPI.getInstance().active());
}
function setSpan(context2, span) {
  return context2.setValue(SPAN_KEY, span);
}
function deleteSpan(context2) {
  return context2.deleteValue(SPAN_KEY);
}
function setSpanContext(context2, spanContext) {
  return setSpan(context2, new NonRecordingSpan(spanContext));
}
function getSpanContext(context2) {
  var _a18;
  return (_a18 = getSpan(context2)) === null || _a18 === void 0 ? void 0 : _a18.spanContext();
}

// node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
  return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
  return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
  return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
  return new NonRecordingSpan(spanContext);
}

// node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
var contextApi = ContextAPI.getInstance();
var NoopTracer = (
  /** @class */
  function() {
    function NoopTracer2() {
    }
    NoopTracer2.prototype.startSpan = function(name17, options, context2) {
      if (context2 === void 0) {
        context2 = contextApi.active();
      }
      var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
      if (root) {
        return new NonRecordingSpan();
      }
      var parentFromContext = context2 && getSpanContext(context2);
      if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
        return new NonRecordingSpan(parentFromContext);
      } else {
        return new NonRecordingSpan();
      }
    };
    NoopTracer2.prototype.startActiveSpan = function(name17, arg2, arg3, arg4) {
      var opts;
      var ctx;
      var fn;
      if (arguments.length < 2) {
        return;
      } else if (arguments.length === 2) {
        fn = arg2;
      } else if (arguments.length === 3) {
        opts = arg2;
        fn = arg3;
      } else {
        opts = arg2;
        ctx = arg3;
        fn = arg4;
      }
      var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
      var span = this.startSpan(name17, opts, parentContext);
      var contextWithSpanSet = setSpan(parentContext, span);
      return contextApi.with(contextWithSpanSet, fn, void 0, span);
    };
    return NoopTracer2;
  }()
);
function isSpanContext(spanContext) {
  return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}

// node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var NOOP_TRACER = new NoopTracer();
var ProxyTracer = (
  /** @class */
  function() {
    function ProxyTracer2(_provider, name17, version, options) {
      this._provider = _provider;
      this.name = name17;
      this.version = version;
      this.options = options;
    }
    ProxyTracer2.prototype.startSpan = function(name17, options, context2) {
      return this._getTracer().startSpan(name17, options, context2);
    };
    ProxyTracer2.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
      var tracer = this._getTracer();
      return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    ProxyTracer2.prototype._getTracer = function() {
      if (this._delegate) {
        return this._delegate;
      }
      var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!tracer) {
        return NOOP_TRACER;
      }
      this._delegate = tracer;
      return this._delegate;
    };
    return ProxyTracer2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
var NoopTracerProvider = (
  /** @class */
  function() {
    function NoopTracerProvider2() {
    }
    NoopTracerProvider2.prototype.getTracer = function(_name, _version, _options) {
      return new NoopTracer();
    };
    return NoopTracerProvider2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
var ProxyTracerProvider = (
  /** @class */
  function() {
    function ProxyTracerProvider2() {
    }
    ProxyTracerProvider2.prototype.getTracer = function(name17, version, options) {
      var _a18;
      return (_a18 = this.getDelegateTracer(name17, version, options)) !== null && _a18 !== void 0 ? _a18 : new ProxyTracer(this, name17, version, options);
    };
    ProxyTracerProvider2.prototype.getDelegate = function() {
      var _a18;
      return (_a18 = this._delegate) !== null && _a18 !== void 0 ? _a18 : NOOP_TRACER_PROVIDER;
    };
    ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
      this._delegate = delegate;
    };
    ProxyTracerProvider2.prototype.getDelegateTracer = function(name17, version, options) {
      var _a18;
      return (_a18 = this._delegate) === null || _a18 === void 0 ? void 0 : _a18.getTracer(name17, version, options);
    };
    return ProxyTracerProvider2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js
var SamplingDecision;
(function(SamplingDecision2) {
  SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
  SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));

// node_modules/@opentelemetry/api/build/esm/trace/span_kind.js
var SpanKind;
(function(SpanKind2) {
  SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
  SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
  SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
  SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
  SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));

// node_modules/@opentelemetry/api/build/esm/trace/status.js
var SpanStatusCode;
(function(SpanStatusCode2) {
  SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
  SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
  SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));

// node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}

// node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
var TraceStateImpl = (
  /** @class */
  function() {
    function TraceStateImpl2(rawTraceState) {
      this._internalState = /* @__PURE__ */ new Map();
      if (rawTraceState)
        this._parse(rawTraceState);
    }
    TraceStateImpl2.prototype.set = function(key, value) {
      var traceState = this._clone();
      if (traceState._internalState.has(key)) {
        traceState._internalState.delete(key);
      }
      traceState._internalState.set(key, value);
      return traceState;
    };
    TraceStateImpl2.prototype.unset = function(key) {
      var traceState = this._clone();
      traceState._internalState.delete(key);
      return traceState;
    };
    TraceStateImpl2.prototype.get = function(key) {
      return this._internalState.get(key);
    };
    TraceStateImpl2.prototype.serialize = function() {
      var _this = this;
      return this._keys().reduce(function(agg, key) {
        agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
        return agg;
      }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl2.prototype._parse = function(rawTraceState) {
      if (rawTraceState.length > MAX_TRACE_STATE_LEN)
        return;
      this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse().reduce(function(agg, part) {
        var listMember = part.trim();
        var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
        if (i !== -1) {
          var key = listMember.slice(0, i);
          var value = listMember.slice(i + 1, part.length);
          if (validateKey(key) && validateValue(value)) {
            agg.set(key, value);
          } else {
          }
        }
        return agg;
      }, /* @__PURE__ */ new Map());
      if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
      }
    };
    TraceStateImpl2.prototype._keys = function() {
      return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl2.prototype._clone = function() {
      var traceState = new TraceStateImpl2();
      traceState._internalState = new Map(this._internalState);
      return traceState;
    };
    return TraceStateImpl2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/context-api.js
var context = ContextAPI.getInstance();

// node_modules/@opentelemetry/api/build/esm/diag-api.js
var diag2 = DiagAPI.instance();

// node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js
var NoopMeterProvider = (
  /** @class */
  function() {
    function NoopMeterProvider2() {
    }
    NoopMeterProvider2.prototype.getMeter = function(_name, _version, _options) {
      return NOOP_METER;
    };
    return NoopMeterProvider2;
  }()
);
var NOOP_METER_PROVIDER = new NoopMeterProvider();

// node_modules/@opentelemetry/api/build/esm/api/metrics.js
var API_NAME3 = "metrics";
var MetricsAPI = (
  /** @class */
  function() {
    function MetricsAPI2() {
    }
    MetricsAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new MetricsAPI2();
      }
      return this._instance;
    };
    MetricsAPI2.prototype.setGlobalMeterProvider = function(provider) {
      return registerGlobal(API_NAME3, provider, DiagAPI.instance());
    };
    MetricsAPI2.prototype.getMeterProvider = function() {
      return getGlobal(API_NAME3) || NOOP_METER_PROVIDER;
    };
    MetricsAPI2.prototype.getMeter = function(name17, version, options) {
      return this.getMeterProvider().getMeter(name17, version, options);
    };
    MetricsAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME3, DiagAPI.instance());
    };
    return MetricsAPI2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/metrics-api.js
var metrics = MetricsAPI.getInstance();

// node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js
var NoopTextMapPropagator = (
  /** @class */
  function() {
    function NoopTextMapPropagator2() {
    }
    NoopTextMapPropagator2.prototype.inject = function(_context, _carrier) {
    };
    NoopTextMapPropagator2.prototype.extract = function(context2, _carrier) {
      return context2;
    };
    NoopTextMapPropagator2.prototype.fields = function() {
      return [];
    };
    return NoopTextMapPropagator2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js
var BAGGAGE_KEY = createContextKey("OpenTelemetry Baggage Key");
function getBaggage(context2) {
  return context2.getValue(BAGGAGE_KEY) || void 0;
}
function getActiveBaggage() {
  return getBaggage(ContextAPI.getInstance().active());
}
function setBaggage(context2, baggage) {
  return context2.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context2) {
  return context2.deleteValue(BAGGAGE_KEY);
}

// node_modules/@opentelemetry/api/build/esm/api/propagation.js
var API_NAME4 = "propagation";
var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
var PropagationAPI = (
  /** @class */
  function() {
    function PropagationAPI2() {
      this.createBaggage = createBaggage;
      this.getBaggage = getBaggage;
      this.getActiveBaggage = getActiveBaggage;
      this.setBaggage = setBaggage;
      this.deleteBaggage = deleteBaggage;
    }
    PropagationAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new PropagationAPI2();
      }
      return this._instance;
    };
    PropagationAPI2.prototype.setGlobalPropagator = function(propagator) {
      return registerGlobal(API_NAME4, propagator, DiagAPI.instance());
    };
    PropagationAPI2.prototype.inject = function(context2, carrier, setter) {
      if (setter === void 0) {
        setter = defaultTextMapSetter;
      }
      return this._getGlobalPropagator().inject(context2, carrier, setter);
    };
    PropagationAPI2.prototype.extract = function(context2, carrier, getter) {
      if (getter === void 0) {
        getter = defaultTextMapGetter;
      }
      return this._getGlobalPropagator().extract(context2, carrier, getter);
    };
    PropagationAPI2.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    };
    PropagationAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME4, DiagAPI.instance());
    };
    PropagationAPI2.prototype._getGlobalPropagator = function() {
      return getGlobal(API_NAME4) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/propagation-api.js
var propagation = PropagationAPI.getInstance();

// node_modules/@opentelemetry/api/build/esm/api/trace.js
var API_NAME5 = "trace";
var TraceAPI = (
  /** @class */
  function() {
    function TraceAPI2() {
      this._proxyTracerProvider = new ProxyTracerProvider();
      this.wrapSpanContext = wrapSpanContext;
      this.isSpanContextValid = isSpanContextValid;
      this.deleteSpan = deleteSpan;
      this.getSpan = getSpan;
      this.getActiveSpan = getActiveSpan;
      this.getSpanContext = getSpanContext;
      this.setSpan = setSpan;
      this.setSpanContext = setSpanContext;
    }
    TraceAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new TraceAPI2();
      }
      return this._instance;
    };
    TraceAPI2.prototype.setGlobalTracerProvider = function(provider) {
      var success = registerGlobal(API_NAME5, this._proxyTracerProvider, DiagAPI.instance());
      if (success) {
        this._proxyTracerProvider.setDelegate(provider);
      }
      return success;
    };
    TraceAPI2.prototype.getTracerProvider = function() {
      return getGlobal(API_NAME5) || this._proxyTracerProvider;
    };
    TraceAPI2.prototype.getTracer = function(name17, version) {
      return this.getTracerProvider().getTracer(name17, version);
    };
    TraceAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME5, DiagAPI.instance());
      this._proxyTracerProvider = new ProxyTracerProvider();
    };
    return TraceAPI2;
  }()
);

// node_modules/@opentelemetry/api/build/esm/trace-api.js
var trace = TraceAPI.getInstance();

// node_modules/ai/dist/index.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name162 in all)
    __defProp(target, name162, { get: all[name162], enumerable: true });
};
var name16 = "AI_InvalidArgumentError";
var marker17 = `vercel.ai.error.${name16}`;
var symbol17 = Symbol.for(marker17);
var _a17;
_a17 = symbol17;
var name23 = "AI_InvalidStreamPartError";
var marker23 = `vercel.ai.error.${name23}`;
var symbol23 = Symbol.for(marker23);
var _a23;
_a23 = symbol23;
var name33 = "AI_InvalidToolApprovalError";
var marker33 = `vercel.ai.error.${name33}`;
var symbol33 = Symbol.for(marker33);
var _a33;
_a33 = symbol33;
var name43 = "AI_InvalidToolInputError";
var marker43 = `vercel.ai.error.${name43}`;
var symbol43 = Symbol.for(marker43);
var _a43;
_a43 = symbol43;
var name53 = "AI_ToolCallNotFoundForApprovalError";
var marker53 = `vercel.ai.error.${name53}`;
var symbol53 = Symbol.for(marker53);
var _a53;
_a53 = symbol53;
var name63 = "AI_NoImageGeneratedError";
var marker63 = `vercel.ai.error.${name63}`;
var symbol63 = Symbol.for(marker63);
var _a63;
_a63 = symbol63;
var name72 = "AI_NoObjectGeneratedError";
var marker73 = `vercel.ai.error.${name72}`;
var symbol73 = Symbol.for(marker73);
var _a73;
var NoObjectGeneratedError = class extends AISDKError {
  constructor({
    message = "No object generated.",
    cause,
    text: text2,
    response,
    usage,
    finishReason
  }) {
    super({ name: name72, message, cause });
    this[_a73] = true;
    this.text = text2;
    this.response = response;
    this.usage = usage;
    this.finishReason = finishReason;
  }
  static isInstance(error) {
    return AISDKError.hasMarker(error, marker73);
  }
};
_a73 = symbol73;
var name82 = "AI_NoOutputGeneratedError";
var marker82 = `vercel.ai.error.${name82}`;
var symbol82 = Symbol.for(marker82);
var _a82;
_a82 = symbol82;
var name92 = "AI_NoSuchToolError";
var marker92 = `vercel.ai.error.${name92}`;
var symbol92 = Symbol.for(marker92);
var _a92;
_a92 = symbol92;
var name102 = "AI_ToolCallRepairError";
var marker102 = `vercel.ai.error.${name102}`;
var symbol102 = Symbol.for(marker102);
var _a102;
_a102 = symbol102;
var name112 = "AI_InvalidDataContentError";
var marker112 = `vercel.ai.error.${name112}`;
var symbol112 = Symbol.for(marker112);
var _a112;
_a112 = symbol112;
var name122 = "AI_InvalidMessageRoleError";
var marker122 = `vercel.ai.error.${name122}`;
var symbol122 = Symbol.for(marker122);
var _a122;
_a122 = symbol122;
var name132 = "AI_MessageConversionError";
var marker132 = `vercel.ai.error.${name132}`;
var symbol132 = Symbol.for(marker132);
var _a132;
_a132 = symbol132;
var name142 = "AI_RetryError";
var marker142 = `vercel.ai.error.${name142}`;
var symbol142 = Symbol.for(marker142);
var _a142;
_a142 = symbol142;
var VERSION4 = true ? "6.0.33" : "0.0.0-test";
var dataContentSchema = external_exports.union([
  external_exports.string(),
  external_exports.instanceof(Uint8Array),
  external_exports.instanceof(ArrayBuffer),
  external_exports.custom(
    // Buffer might not be available in some environments such as CloudFlare:
    (value) => {
      var _a162, _b17;
      return (_b17 = (_a162 = globalThis.Buffer) == null ? void 0 : _a162.isBuffer(value)) != null ? _b17 : false;
    },
    { message: "Must be a Buffer" }
  )
]);
var jsonValueSchema = external_exports.lazy(
  () => external_exports.union([
    external_exports.null(),
    external_exports.string(),
    external_exports.number(),
    external_exports.boolean(),
    external_exports.record(external_exports.string(), jsonValueSchema.optional()),
    external_exports.array(jsonValueSchema)
  ])
);
var providerMetadataSchema = external_exports.record(
  external_exports.string(),
  external_exports.record(external_exports.string(), jsonValueSchema.optional())
);
var textPartSchema = external_exports.object({
  type: external_exports.literal("text"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = external_exports.object({
  type: external_exports.literal("image"),
  image: external_exports.union([dataContentSchema, external_exports.instanceof(URL)]),
  mediaType: external_exports.string().optional(),
  providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = external_exports.object({
  type: external_exports.literal("file"),
  data: external_exports.union([dataContentSchema, external_exports.instanceof(URL)]),
  filename: external_exports.string().optional(),
  mediaType: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = external_exports.object({
  type: external_exports.literal("reasoning"),
  text: external_exports.string(),
  providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = external_exports.object({
  type: external_exports.literal("tool-call"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  input: external_exports.unknown(),
  providerOptions: providerMetadataSchema.optional(),
  providerExecuted: external_exports.boolean().optional()
});
var outputSchema = external_exports.discriminatedUnion(
  "type",
  [
    external_exports.object({
      type: external_exports.literal("text"),
      value: external_exports.string(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("json"),
      value: jsonValueSchema,
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("execution-denied"),
      reason: external_exports.string().optional(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("error-text"),
      value: external_exports.string(),
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("error-json"),
      value: jsonValueSchema,
      providerOptions: providerMetadataSchema.optional()
    }),
    external_exports.object({
      type: external_exports.literal("content"),
      value: external_exports.array(
        external_exports.union([
          external_exports.object({
            type: external_exports.literal("text"),
            text: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("media"),
            data: external_exports.string(),
            mediaType: external_exports.string()
          }),
          external_exports.object({
            type: external_exports.literal("file-data"),
            data: external_exports.string(),
            mediaType: external_exports.string(),
            filename: external_exports.string().optional(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("file-url"),
            url: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("file-id"),
            fileId: external_exports.union([external_exports.string(), external_exports.record(external_exports.string(), external_exports.string())]),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("image-data"),
            data: external_exports.string(),
            mediaType: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("image-url"),
            url: external_exports.string(),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("image-file-id"),
            fileId: external_exports.union([external_exports.string(), external_exports.record(external_exports.string(), external_exports.string())]),
            providerOptions: providerMetadataSchema.optional()
          }),
          external_exports.object({
            type: external_exports.literal("custom"),
            providerOptions: providerMetadataSchema.optional()
          })
        ])
      )
    })
  ]
);
var toolResultPartSchema = external_exports.object({
  type: external_exports.literal("tool-result"),
  toolCallId: external_exports.string(),
  toolName: external_exports.string(),
  output: outputSchema,
  providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = external_exports.object({
  type: external_exports.literal("tool-approval-request"),
  approvalId: external_exports.string(),
  toolCallId: external_exports.string()
});
var toolApprovalResponseSchema = external_exports.object({
  type: external_exports.literal("tool-approval-response"),
  approvalId: external_exports.string(),
  approved: external_exports.boolean(),
  reason: external_exports.string().optional()
});
var systemModelMessageSchema = external_exports.object(
  {
    role: external_exports.literal("system"),
    content: external_exports.string(),
    providerOptions: providerMetadataSchema.optional()
  }
);
var userModelMessageSchema = external_exports.object({
  role: external_exports.literal("user"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(external_exports.union([textPartSchema, imagePartSchema, filePartSchema]))
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var assistantModelMessageSchema = external_exports.object({
  role: external_exports.literal("assistant"),
  content: external_exports.union([
    external_exports.string(),
    external_exports.array(
      external_exports.union([
        textPartSchema,
        filePartSchema,
        reasoningPartSchema,
        toolCallPartSchema,
        toolResultPartSchema,
        toolApprovalRequestSchema
      ])
    )
  ]),
  providerOptions: providerMetadataSchema.optional()
});
var toolModelMessageSchema = external_exports.object({
  role: external_exports.literal("tool"),
  content: external_exports.array(external_exports.union([toolResultPartSchema, toolApprovalResponseSchema])),
  providerOptions: providerMetadataSchema.optional()
});
var modelMessageSchema = external_exports.union([
  systemModelMessageSchema,
  userModelMessageSchema,
  assistantModelMessageSchema,
  toolModelMessageSchema
]);
function mergeObjects(base, overrides) {
  if (base === void 0 && overrides === void 0) {
    return void 0;
  }
  if (base === void 0) {
    return overrides;
  }
  if (overrides === void 0) {
    return base;
  }
  const result = { ...base };
  for (const key in overrides) {
    if (Object.prototype.hasOwnProperty.call(overrides, key)) {
      const overridesValue = overrides[key];
      if (overridesValue === void 0)
        continue;
      const baseValue = key in base ? base[key] : void 0;
      const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
      const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
      if (isSourceObject && isTargetObject) {
        result[key] = mergeObjects(
          baseValue,
          overridesValue
        );
      } else {
        result[key] = overridesValue;
      }
    }
  }
  return result;
}
var output_exports = {};
__export(output_exports, {
  array: () => array2,
  choice: () => choice,
  json: () => json,
  object: () => object2,
  text: () => text
});
function fixJson(input) {
  const stack = ["ROOT"];
  let lastValidIndex = -1;
  let literalStart = null;
  function processValueStart(char, i, swapState) {
    {
      switch (char) {
        case '"': {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_STRING");
          break;
        }
        case "f":
        case "t":
        case "n": {
          lastValidIndex = i;
          literalStart = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_LITERAL");
          break;
        }
        case "-": {
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_NUMBER");
          break;
        }
        case "{": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_OBJECT_START");
          break;
        }
        case "[": {
          lastValidIndex = i;
          stack.pop();
          stack.push(swapState);
          stack.push("INSIDE_ARRAY_START");
          break;
        }
      }
    }
  }
  function processAfterObjectValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  function processAfterArrayValue(char, i) {
    switch (char) {
      case ",": {
        stack.pop();
        stack.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        lastValidIndex = i;
        stack.pop();
        break;
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const currentState = stack[stack.length - 1];
    switch (currentState) {
      case "ROOT":
        processValueStart(char, i, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (char) {
          case '"': {
            stack.pop();
            stack.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (char) {
          case ":": {
            stack.pop();
            stack.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        processAfterObjectValue(char, i);
        break;
      }
      case "INSIDE_STRING": {
        switch (char) {
          case '"': {
            stack.pop();
            lastValidIndex = i;
            break;
          }
          case "\\": {
            stack.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default: {
            lastValidIndex = i;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (char) {
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (char) {
          case ",": {
            stack.pop();
            stack.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            lastValidIndex = i;
            stack.pop();
            break;
          }
          default: {
            lastValidIndex = i;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        stack.pop();
        lastValidIndex = i;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (char) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            lastValidIndex = i;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".": {
            break;
          }
          case ",": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "}": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
              processAfterObjectValue(char, i);
            }
            break;
          }
          case "]": {
            stack.pop();
            if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
              processAfterArrayValue(char, i);
            }
            break;
          }
          default: {
            stack.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, i + 1);
        if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
          stack.pop();
          if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") {
            processAfterObjectValue(char, i);
          } else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") {
            processAfterArrayValue(char, i);
          }
        } else {
          lastValidIndex = i;
        }
        break;
      }
    }
  }
  let result = input.slice(0, lastValidIndex + 1);
  for (let i = stack.length - 1; i >= 0; i--) {
    const state = stack[i];
    switch (state) {
      case "INSIDE_STRING": {
        result += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        result += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        result += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const partialLiteral = input.substring(literalStart, input.length);
        if ("true".startsWith(partialLiteral)) {
          result += "true".slice(partialLiteral.length);
        } else if ("false".startsWith(partialLiteral)) {
          result += "false".slice(partialLiteral.length);
        } else if ("null".startsWith(partialLiteral)) {
          result += "null".slice(partialLiteral.length);
        }
      }
    }
  }
  return result;
}
async function parsePartialJson(jsonText) {
  if (jsonText === void 0) {
    return { value: void 0, state: "undefined-input" };
  }
  let result = await safeParseJSON({ text: jsonText });
  if (result.success) {
    return { value: result.value, state: "successful-parse" };
  }
  result = await safeParseJSON({ text: fixJson(jsonText) });
  if (result.success) {
    return { value: result.value, state: "repaired-parse" };
  }
  return { value: void 0, state: "failed-parse" };
}
var text = () => ({
  name: "text",
  responseFormat: Promise.resolve({ type: "text" }),
  async parseCompleteOutput({ text: text2 }) {
    return text2;
  },
  async parsePartialOutput({ text: text2 }) {
    return { partial: text2 };
  },
  createElementStreamTransform() {
    return void 0;
  }
});
var object2 = ({
  schema: inputSchema,
  name: name162,
  description
}) => {
  const schema = asSchema(inputSchema);
  return {
    name: "object",
    responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
      type: "json",
      schema: jsonSchema2,
      ...name162 != null && { name: name162 },
      ...description != null && { description }
    })),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const validationResult = await safeValidateTypes({
        value: parseResult.value,
        schema
      });
      if (!validationResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: validationResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return validationResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          return {
            // Note: currently no validation of partial results:
            partial: result.value
          };
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
};
var array2 = ({
  element: inputElementSchema,
  name: name162,
  description
}) => {
  const elementSchema = asSchema(inputElementSchema);
  return {
    name: "array",
    // JSON schema that describes an array of elements:
    responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
      const { $schema, ...itemSchema } = jsonSchema2;
      return {
        type: "json",
        schema: {
          $schema: "http://json-schema.org/draft-07/schema#",
          type: "object",
          properties: {
            elements: { type: "array", items: itemSchema }
          },
          required: ["elements"],
          additionalProperties: false
        },
        ...name162 != null && { name: name162 },
        ...description != null && { description }
      };
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object with an elements array"
          }),
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      for (const element of outerValue.elements) {
        const validationResult = await safeValidateTypes({
          value: element,
          schema: elementSchema
        });
        if (!validationResult.success) {
          throw new NoObjectGeneratedError({
            message: "No object generated: response did not match schema.",
            cause: validationResult.error,
            text: text2,
            response: context2.response,
            usage: context2.usage,
            finishReason: context2.finishReason
          });
        }
      }
      return outerValue.elements;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) {
            return void 0;
          }
          const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
          const parsedElements = [];
          for (const rawElement of rawElements) {
            const validationResult = await safeValidateTypes({
              value: rawElement,
              schema: elementSchema
            });
            if (validationResult.success) {
              parsedElements.push(validationResult.value);
            }
          }
          return { partial: parsedElements };
        }
      }
    },
    createElementStreamTransform() {
      let publishedElements = 0;
      return new TransformStream({
        transform({ partialOutput }, controller) {
          if (partialOutput != null) {
            for (; publishedElements < partialOutput.length; publishedElements++) {
              controller.enqueue(partialOutput[publishedElements]);
            }
          }
        }
      });
    }
  };
};
var choice = ({
  options: choiceOptions,
  name: name162,
  description
}) => {
  return {
    name: "choice",
    // JSON schema that describes an enumeration:
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
          result: { type: "string", enum: choiceOptions }
        },
        required: ["result"],
        additionalProperties: false
      },
      ...name162 != null && { name: name162 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      const outerValue = parseResult.value;
      if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) {
        throw new NoObjectGeneratedError({
          message: "No object generated: response did not match schema.",
          cause: new TypeValidationError({
            value: outerValue,
            cause: "response must be an object that contains a choice value."
          }),
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return outerValue.result;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          const outerValue = result.value;
          if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") {
            return void 0;
          }
          const potentialMatches = choiceOptions.filter(
            (choiceOption) => choiceOption.startsWith(outerValue.result)
          );
          if (result.state === "successful-parse") {
            return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
          } else {
            return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
          }
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
};
var json = ({
  name: name162,
  description
} = {}) => {
  return {
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...name162 != null && { name: name162 },
      ...description != null && { description }
    }),
    async parseCompleteOutput({ text: text2 }, context2) {
      const parseResult = await safeParseJSON({ text: text2 });
      if (!parseResult.success) {
        throw new NoObjectGeneratedError({
          message: "No object generated: could not parse the response.",
          cause: parseResult.error,
          text: text2,
          response: context2.response,
          usage: context2.usage,
          finishReason: context2.finishReason
        });
      }
      return parseResult.value;
    },
    async parsePartialOutput({ text: text2 }) {
      const result = await parsePartialJson(text2);
      switch (result.state) {
        case "failed-parse":
        case "undefined-input": {
          return void 0;
        }
        case "repaired-parse":
        case "successful-parse": {
          return result.value === void 0 ? void 0 : { partial: result.value };
        }
      }
    },
    createElementStreamTransform() {
      return void 0;
    }
  };
};
var originalGenerateId = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var JsonToSseTransformStream = class extends TransformStream {
  constructor() {
    super({
      transform(part, controller) {
        controller.enqueue(`data: ${JSON.stringify(part)}

`);
      },
      flush(controller) {
        controller.enqueue("data: [DONE]\n\n");
      }
    });
  }
};
var uiMessageChunkSchema = lazySchema(
  () => zodSchema(
    external_exports.union([
      external_exports.strictObject({
        type: external_exports.literal("text-start"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("text-delta"),
        id: external_exports.string(),
        delta: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("text-end"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("error"),
        errorText: external_exports.string()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-input-start"),
        toolCallId: external_exports.string(),
        toolName: external_exports.string(),
        providerExecuted: external_exports.boolean().optional(),
        dynamic: external_exports.boolean().optional(),
        title: external_exports.string().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-input-delta"),
        toolCallId: external_exports.string(),
        inputTextDelta: external_exports.string()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-input-available"),
        toolCallId: external_exports.string(),
        toolName: external_exports.string(),
        input: external_exports.unknown(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional(),
        title: external_exports.string().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-input-error"),
        toolCallId: external_exports.string(),
        toolName: external_exports.string(),
        input: external_exports.unknown(),
        providerExecuted: external_exports.boolean().optional(),
        providerMetadata: providerMetadataSchema.optional(),
        dynamic: external_exports.boolean().optional(),
        errorText: external_exports.string(),
        title: external_exports.string().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-approval-request"),
        approvalId: external_exports.string(),
        toolCallId: external_exports.string()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-output-available"),
        toolCallId: external_exports.string(),
        output: external_exports.unknown(),
        providerExecuted: external_exports.boolean().optional(),
        dynamic: external_exports.boolean().optional(),
        preliminary: external_exports.boolean().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-output-error"),
        toolCallId: external_exports.string(),
        errorText: external_exports.string(),
        providerExecuted: external_exports.boolean().optional(),
        dynamic: external_exports.boolean().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("tool-output-denied"),
        toolCallId: external_exports.string()
      }),
      external_exports.strictObject({
        type: external_exports.literal("reasoning-start"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("reasoning-delta"),
        id: external_exports.string(),
        delta: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("reasoning-end"),
        id: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("source-url"),
        sourceId: external_exports.string(),
        url: external_exports.string(),
        title: external_exports.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("source-document"),
        sourceId: external_exports.string(),
        mediaType: external_exports.string(),
        title: external_exports.string(),
        filename: external_exports.string().optional(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("file"),
        url: external_exports.string(),
        mediaType: external_exports.string(),
        providerMetadata: providerMetadataSchema.optional()
      }),
      external_exports.strictObject({
        type: external_exports.custom(
          (value) => typeof value === "string" && value.startsWith("data-"),
          { message: 'Type must start with "data-"' }
        ),
        id: external_exports.string().optional(),
        data: external_exports.unknown(),
        transient: external_exports.boolean().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("start-step")
      }),
      external_exports.strictObject({
        type: external_exports.literal("finish-step")
      }),
      external_exports.strictObject({
        type: external_exports.literal("start"),
        messageId: external_exports.string().optional(),
        messageMetadata: external_exports.unknown().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("finish"),
        finishReason: external_exports.enum([
          "stop",
          "length",
          "content-filter",
          "tool-calls",
          "error",
          "other"
        ]).optional(),
        messageMetadata: external_exports.unknown().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("abort"),
        reason: external_exports.string().optional()
      }),
      external_exports.strictObject({
        type: external_exports.literal("message-metadata"),
        messageMetadata: external_exports.unknown()
      })
    ])
  )
);
function isDataUIMessageChunk(chunk) {
  return chunk.type.startsWith("data-");
}
function isStaticToolUIPart(part) {
  return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
  return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
  return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
function getStaticToolName(part) {
  return part.type.split("-").slice(1).join("-");
}
function createStreamingUIMessageState({
  lastMessage,
  messageId
}) {
  return {
    message: (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage : {
      id: messageId,
      metadata: void 0,
      role: "assistant",
      parts: []
    },
    activeTextParts: {},
    activeReasoningParts: {},
    partialToolCalls: {}
  };
}
function processUIMessageStream({
  stream,
  messageMetadataSchema,
  dataPartSchemas,
  runUpdateMessageJob,
  onError,
  onToolCall,
  onData
}) {
  return stream.pipeThrough(
    new TransformStream({
      async transform(chunk, controller) {
        await runUpdateMessageJob(async ({ state, write }) => {
          var _a162, _b17, _c, _d;
          function getToolInvocation(toolCallId) {
            const toolInvocations = state.message.parts.filter(isToolUIPart);
            const toolInvocation = toolInvocations.find(
              (invocation) => invocation.toolCallId === toolCallId
            );
            if (toolInvocation == null) {
              throw new Error(
                `no tool invocation found for tool call ${toolCallId}`
              );
            }
            return toolInvocation;
          }
          function updateToolPart(options) {
            var _a172;
            const part = state.message.parts.find(
              (part2) => isStaticToolUIPart(part2) && part2.toolCallId === options.toolCallId
            );
            const anyOptions = options;
            const anyPart = part;
            if (part != null) {
              part.state = options.state;
              anyPart.input = anyOptions.input;
              anyPart.output = anyOptions.output;
              anyPart.errorText = anyOptions.errorText;
              anyPart.rawInput = anyOptions.rawInput;
              anyPart.preliminary = anyOptions.preliminary;
              if (options.title !== void 0) {
                anyPart.title = options.title;
              }
              anyPart.providerExecuted = (_a172 = anyOptions.providerExecuted) != null ? _a172 : part.providerExecuted;
              if (anyOptions.providerMetadata != null && part.state === "input-available") {
                part.callProviderMetadata = anyOptions.providerMetadata;
              }
            } else {
              state.message.parts.push({
                type: `tool-${options.toolName}`,
                toolCallId: options.toolCallId,
                state: options.state,
                title: options.title,
                input: anyOptions.input,
                output: anyOptions.output,
                rawInput: anyOptions.rawInput,
                errorText: anyOptions.errorText,
                providerExecuted: anyOptions.providerExecuted,
                preliminary: anyOptions.preliminary,
                ...anyOptions.providerMetadata != null ? { callProviderMetadata: anyOptions.providerMetadata } : {}
              });
            }
          }
          function updateDynamicToolPart(options) {
            var _a172, _b23;
            const part = state.message.parts.find(
              (part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId
            );
            const anyOptions = options;
            const anyPart = part;
            if (part != null) {
              part.state = options.state;
              anyPart.toolName = options.toolName;
              anyPart.input = anyOptions.input;
              anyPart.output = anyOptions.output;
              anyPart.errorText = anyOptions.errorText;
              anyPart.rawInput = (_a172 = anyOptions.rawInput) != null ? _a172 : anyPart.rawInput;
              anyPart.preliminary = anyOptions.preliminary;
              if (options.title !== void 0) {
                anyPart.title = options.title;
              }
              anyPart.providerExecuted = (_b23 = anyOptions.providerExecuted) != null ? _b23 : part.providerExecuted;
              if (anyOptions.providerMetadata != null && part.state === "input-available") {
                part.callProviderMetadata = anyOptions.providerMetadata;
              }
            } else {
              state.message.parts.push({
                type: "dynamic-tool",
                toolName: options.toolName,
                toolCallId: options.toolCallId,
                state: options.state,
                input: anyOptions.input,
                output: anyOptions.output,
                errorText: anyOptions.errorText,
                preliminary: anyOptions.preliminary,
                providerExecuted: anyOptions.providerExecuted,
                title: options.title,
                ...anyOptions.providerMetadata != null ? { callProviderMetadata: anyOptions.providerMetadata } : {}
              });
            }
          }
          async function updateMessageMetadata(metadata) {
            if (metadata != null) {
              const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
              if (messageMetadataSchema != null) {
                await validateTypes({
                  value: mergedMetadata,
                  schema: messageMetadataSchema
                });
              }
              state.message.metadata = mergedMetadata;
            }
          }
          switch (chunk.type) {
            case "text-start": {
              const textPart = {
                type: "text",
                text: "",
                providerMetadata: chunk.providerMetadata,
                state: "streaming"
              };
              state.activeTextParts[chunk.id] = textPart;
              state.message.parts.push(textPart);
              write();
              break;
            }
            case "text-delta": {
              const textPart = state.activeTextParts[chunk.id];
              textPart.text += chunk.delta;
              textPart.providerMetadata = (_a162 = chunk.providerMetadata) != null ? _a162 : textPart.providerMetadata;
              write();
              break;
            }
            case "text-end": {
              const textPart = state.activeTextParts[chunk.id];
              textPart.state = "done";
              textPart.providerMetadata = (_b17 = chunk.providerMetadata) != null ? _b17 : textPart.providerMetadata;
              delete state.activeTextParts[chunk.id];
              write();
              break;
            }
            case "reasoning-start": {
              const reasoningPart = {
                type: "reasoning",
                text: "",
                providerMetadata: chunk.providerMetadata,
                state: "streaming"
              };
              state.activeReasoningParts[chunk.id] = reasoningPart;
              state.message.parts.push(reasoningPart);
              write();
              break;
            }
            case "reasoning-delta": {
              const reasoningPart = state.activeReasoningParts[chunk.id];
              reasoningPart.text += chunk.delta;
              reasoningPart.providerMetadata = (_c = chunk.providerMetadata) != null ? _c : reasoningPart.providerMetadata;
              write();
              break;
            }
            case "reasoning-end": {
              const reasoningPart = state.activeReasoningParts[chunk.id];
              reasoningPart.providerMetadata = (_d = chunk.providerMetadata) != null ? _d : reasoningPart.providerMetadata;
              reasoningPart.state = "done";
              delete state.activeReasoningParts[chunk.id];
              write();
              break;
            }
            case "file": {
              state.message.parts.push({
                type: "file",
                mediaType: chunk.mediaType,
                url: chunk.url
              });
              write();
              break;
            }
            case "source-url": {
              state.message.parts.push({
                type: "source-url",
                sourceId: chunk.sourceId,
                url: chunk.url,
                title: chunk.title,
                providerMetadata: chunk.providerMetadata
              });
              write();
              break;
            }
            case "source-document": {
              state.message.parts.push({
                type: "source-document",
                sourceId: chunk.sourceId,
                mediaType: chunk.mediaType,
                title: chunk.title,
                filename: chunk.filename,
                providerMetadata: chunk.providerMetadata
              });
              write();
              break;
            }
            case "tool-input-start": {
              const toolInvocations = state.message.parts.filter(isStaticToolUIPart);
              state.partialToolCalls[chunk.toolCallId] = {
                text: "",
                toolName: chunk.toolName,
                index: toolInvocations.length,
                dynamic: chunk.dynamic,
                title: chunk.title
              };
              if (chunk.dynamic) {
                updateDynamicToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  state: "input-streaming",
                  input: void 0,
                  providerExecuted: chunk.providerExecuted,
                  title: chunk.title
                });
              } else {
                updateToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  state: "input-streaming",
                  input: void 0,
                  providerExecuted: chunk.providerExecuted,
                  title: chunk.title
                });
              }
              write();
              break;
            }
            case "tool-input-delta": {
              const partialToolCall = state.partialToolCalls[chunk.toolCallId];
              partialToolCall.text += chunk.inputTextDelta;
              const { value: partialArgs } = await parsePartialJson(
                partialToolCall.text
              );
              if (partialToolCall.dynamic) {
                updateDynamicToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: partialToolCall.toolName,
                  state: "input-streaming",
                  input: partialArgs,
                  title: partialToolCall.title
                });
              } else {
                updateToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: partialToolCall.toolName,
                  state: "input-streaming",
                  input: partialArgs,
                  title: partialToolCall.title
                });
              }
              write();
              break;
            }
            case "tool-input-available": {
              if (chunk.dynamic) {
                updateDynamicToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  state: "input-available",
                  input: chunk.input,
                  providerExecuted: chunk.providerExecuted,
                  providerMetadata: chunk.providerMetadata,
                  title: chunk.title
                });
              } else {
                updateToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  state: "input-available",
                  input: chunk.input,
                  providerExecuted: chunk.providerExecuted,
                  providerMetadata: chunk.providerMetadata,
                  title: chunk.title
                });
              }
              write();
              if (onToolCall && !chunk.providerExecuted) {
                await onToolCall({
                  toolCall: chunk
                });
              }
              break;
            }
            case "tool-input-error": {
              if (chunk.dynamic) {
                updateDynamicToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  state: "output-error",
                  input: chunk.input,
                  errorText: chunk.errorText,
                  providerExecuted: chunk.providerExecuted,
                  providerMetadata: chunk.providerMetadata
                });
              } else {
                updateToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: chunk.toolName,
                  state: "output-error",
                  input: void 0,
                  rawInput: chunk.input,
                  errorText: chunk.errorText,
                  providerExecuted: chunk.providerExecuted,
                  providerMetadata: chunk.providerMetadata
                });
              }
              write();
              break;
            }
            case "tool-approval-request": {
              const toolInvocation = getToolInvocation(chunk.toolCallId);
              toolInvocation.state = "approval-requested";
              toolInvocation.approval = { id: chunk.approvalId };
              write();
              break;
            }
            case "tool-output-denied": {
              const toolInvocation = getToolInvocation(chunk.toolCallId);
              toolInvocation.state = "output-denied";
              write();
              break;
            }
            case "tool-output-available": {
              const toolInvocation = getToolInvocation(chunk.toolCallId);
              if (toolInvocation.type === "dynamic-tool") {
                updateDynamicToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: toolInvocation.toolName,
                  state: "output-available",
                  input: toolInvocation.input,
                  output: chunk.output,
                  preliminary: chunk.preliminary,
                  providerExecuted: chunk.providerExecuted,
                  title: toolInvocation.title
                });
              } else {
                updateToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: getStaticToolName(toolInvocation),
                  state: "output-available",
                  input: toolInvocation.input,
                  output: chunk.output,
                  providerExecuted: chunk.providerExecuted,
                  preliminary: chunk.preliminary,
                  title: toolInvocation.title
                });
              }
              write();
              break;
            }
            case "tool-output-error": {
              const toolInvocation = getToolInvocation(chunk.toolCallId);
              if (toolInvocation.type === "dynamic-tool") {
                updateDynamicToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: toolInvocation.toolName,
                  state: "output-error",
                  input: toolInvocation.input,
                  errorText: chunk.errorText,
                  providerExecuted: chunk.providerExecuted,
                  title: toolInvocation.title
                });
              } else {
                updateToolPart({
                  toolCallId: chunk.toolCallId,
                  toolName: getStaticToolName(toolInvocation),
                  state: "output-error",
                  input: toolInvocation.input,
                  rawInput: toolInvocation.rawInput,
                  errorText: chunk.errorText,
                  providerExecuted: chunk.providerExecuted,
                  title: toolInvocation.title
                });
              }
              write();
              break;
            }
            case "start-step": {
              state.message.parts.push({ type: "step-start" });
              break;
            }
            case "finish-step": {
              state.activeTextParts = {};
              state.activeReasoningParts = {};
              break;
            }
            case "start": {
              if (chunk.messageId != null) {
                state.message.id = chunk.messageId;
              }
              await updateMessageMetadata(chunk.messageMetadata);
              if (chunk.messageId != null || chunk.messageMetadata != null) {
                write();
              }
              break;
            }
            case "finish": {
              if (chunk.finishReason != null) {
                state.finishReason = chunk.finishReason;
              }
              await updateMessageMetadata(chunk.messageMetadata);
              if (chunk.messageMetadata != null) {
                write();
              }
              break;
            }
            case "message-metadata": {
              await updateMessageMetadata(chunk.messageMetadata);
              if (chunk.messageMetadata != null) {
                write();
              }
              break;
            }
            case "error": {
              onError == null ? void 0 : onError(new Error(chunk.errorText));
              break;
            }
            default: {
              if (isDataUIMessageChunk(chunk)) {
                if ((dataPartSchemas == null ? void 0 : dataPartSchemas[chunk.type]) != null) {
                  await validateTypes({
                    value: chunk.data,
                    schema: dataPartSchemas[chunk.type]
                  });
                }
                const dataChunk = chunk;
                if (dataChunk.transient) {
                  onData == null ? void 0 : onData(dataChunk);
                  break;
                }
                const existingUIPart = dataChunk.id != null ? state.message.parts.find(
                  (chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id
                ) : void 0;
                if (existingUIPart != null) {
                  existingUIPart.data = dataChunk.data;
                } else {
                  state.message.parts.push(dataChunk);
                }
                onData == null ? void 0 : onData(dataChunk);
                write();
              }
            }
          }
          controller.enqueue(chunk);
        });
      }
    })
  );
}
async function consumeStream({
  stream,
  onError
}) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done } = await reader.read();
      if (done)
        break;
    }
  } catch (error) {
    onError == null ? void 0 : onError(error);
  } finally {
    reader.releaseLock();
  }
}
var originalGenerateId2 = createIdGenerator({
  prefix: "aitxt",
  size: 24
});
var uiMessagesSchema = lazySchema(
  () => zodSchema(
    external_exports.array(
      external_exports.object({
        id: external_exports.string(),
        role: external_exports.enum(["system", "user", "assistant"]),
        metadata: external_exports.unknown().optional(),
        parts: external_exports.array(
          external_exports.union([
            external_exports.object({
              type: external_exports.literal("text"),
              text: external_exports.string(),
              state: external_exports.enum(["streaming", "done"]).optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("reasoning"),
              text: external_exports.string(),
              state: external_exports.enum(["streaming", "done"]).optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("source-url"),
              sourceId: external_exports.string(),
              url: external_exports.string(),
              title: external_exports.string().optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("source-document"),
              sourceId: external_exports.string(),
              mediaType: external_exports.string(),
              title: external_exports.string(),
              filename: external_exports.string().optional(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("file"),
              mediaType: external_exports.string(),
              filename: external_exports.string().optional(),
              url: external_exports.string(),
              providerMetadata: providerMetadataSchema.optional()
            }),
            external_exports.object({
              type: external_exports.literal("step-start")
            }),
            external_exports.object({
              type: external_exports.string().startsWith("data-"),
              id: external_exports.string().optional(),
              data: external_exports.unknown()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("input-streaming"),
              input: external_exports.unknown().optional(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("input-available"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("approval-requested"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.never().optional(),
                reason: external_exports.never().optional()
              })
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("approval-responded"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.boolean(),
                reason: external_exports.string().optional()
              })
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("output-available"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.unknown(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              preliminary: external_exports.boolean().optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.literal(true),
                reason: external_exports.string().optional()
              }).optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("output-error"),
              input: external_exports.unknown(),
              rawInput: external_exports.unknown().optional(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.string(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.literal(true),
                reason: external_exports.string().optional()
              }).optional()
            }),
            external_exports.object({
              type: external_exports.literal("dynamic-tool"),
              toolName: external_exports.string(),
              toolCallId: external_exports.string(),
              state: external_exports.literal("output-denied"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.literal(false),
                reason: external_exports.string().optional()
              })
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("input-streaming"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("input-available"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.never().optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("approval-requested"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.never().optional(),
                reason: external_exports.never().optional()
              })
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("approval-responded"),
              input: external_exports.unknown(),
              providerExecuted: external_exports.boolean().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.boolean(),
                reason: external_exports.string().optional()
              })
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("output-available"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              output: external_exports.unknown(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              preliminary: external_exports.boolean().optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.literal(true),
                reason: external_exports.string().optional()
              }).optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("output-error"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              rawInput: external_exports.unknown().optional(),
              output: external_exports.never().optional(),
              errorText: external_exports.string(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.literal(true),
                reason: external_exports.string().optional()
              }).optional()
            }),
            external_exports.object({
              type: external_exports.string().startsWith("tool-"),
              toolCallId: external_exports.string(),
              state: external_exports.literal("output-denied"),
              providerExecuted: external_exports.boolean().optional(),
              input: external_exports.unknown(),
              output: external_exports.never().optional(),
              errorText: external_exports.never().optional(),
              callProviderMetadata: providerMetadataSchema.optional(),
              approval: external_exports.object({
                id: external_exports.string(),
                approved: external_exports.literal(false),
                reason: external_exports.string().optional()
              })
            })
          ])
        ).nonempty("Message must contain at least one part")
      })
    ).nonempty("Messages array must not be empty")
  )
);
var originalGenerateId3 = createIdGenerator({ prefix: "aiobj", size: 24 });
var SerialJobExecutor = class {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }
  async processQueue() {
    if (this.isProcessing) {
      return;
    }
    this.isProcessing = true;
    while (this.queue.length > 0) {
      await this.queue[0]();
      this.queue.shift();
    }
    this.isProcessing = false;
  }
  async run(job) {
    return new Promise((resolve3, reject) => {
      this.queue.push(async () => {
        try {
          await job();
          resolve3();
        } catch (error) {
          reject(error);
        }
      });
      void this.processQueue();
    });
  }
};
var originalGenerateId4 = createIdGenerator({ prefix: "aiobj", size: 24 });
var name152 = "AI_NoSuchProviderError";
var marker152 = `vercel.ai.error.${name152}`;
var symbol152 = Symbol.for(marker152);
var _a152;
_a152 = symbol152;
async function convertFileListToFileUIParts(files) {
  if (files == null) {
    return [];
  }
  if (!globalThis.FileList || !(files instanceof globalThis.FileList)) {
    throw new Error("FileList is not supported in the current environment");
  }
  return Promise.all(
    Array.from(files).map(async (file) => {
      const { name: name162, type } = file;
      const dataUrl = await new Promise((resolve3, reject) => {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
          var _a162;
          resolve3((_a162 = readerEvent.target) == null ? void 0 : _a162.result);
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
      return {
        type: "file",
        mediaType: type,
        filename: name162,
        url: dataUrl
      };
    })
  );
}
var HttpChatTransport = class {
  constructor({
    api = "/api/chat",
    credentials,
    headers,
    body,
    fetch: fetch2,
    prepareSendMessagesRequest,
    prepareReconnectToStreamRequest
  }) {
    this.api = api;
    this.credentials = credentials;
    this.headers = headers;
    this.body = body;
    this.fetch = fetch2;
    this.prepareSendMessagesRequest = prepareSendMessagesRequest;
    this.prepareReconnectToStreamRequest = prepareReconnectToStreamRequest;
  }
  async sendMessages({
    abortSignal,
    ...options
  }) {
    var _a162, _b17, _c, _d, _e;
    const resolvedBody = await resolve(this.body);
    const resolvedHeaders = await resolve(this.headers);
    const resolvedCredentials = await resolve(this.credentials);
    const baseHeaders = {
      ...normalizeHeaders(resolvedHeaders),
      ...normalizeHeaders(options.headers)
    };
    const preparedRequest = await ((_a162 = this.prepareSendMessagesRequest) == null ? void 0 : _a162.call(this, {
      api: this.api,
      id: options.chatId,
      messages: options.messages,
      body: { ...resolvedBody, ...options.body },
      headers: baseHeaders,
      credentials: resolvedCredentials,
      requestMetadata: options.metadata,
      trigger: options.trigger,
      messageId: options.messageId
    }));
    const api = (_b17 = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b17 : this.api;
    const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
    const body = (preparedRequest == null ? void 0 : preparedRequest.body) !== void 0 ? preparedRequest.body : {
      ...resolvedBody,
      ...options.body,
      id: options.chatId,
      messages: options.messages,
      trigger: options.trigger,
      messageId: options.messageId
    };
    const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
    const fetch2 = (_d = this.fetch) != null ? _d : globalThis.fetch;
    const response = await fetch2(api, {
      method: "POST",
      headers: withUserAgentSuffix(
        {
          "Content-Type": "application/json",
          ...headers
        },
        `ai-sdk/${VERSION4}`,
        getRuntimeEnvironmentUserAgent()
      ),
      body: JSON.stringify(body),
      credentials,
      signal: abortSignal
    });
    if (!response.ok) {
      throw new Error(
        (_e = await response.text()) != null ? _e : "Failed to fetch the chat response."
      );
    }
    if (!response.body) {
      throw new Error("The response body is empty.");
    }
    return this.processResponseStream(response.body);
  }
  async reconnectToStream(options) {
    var _a162, _b17, _c, _d, _e;
    const resolvedBody = await resolve(this.body);
    const resolvedHeaders = await resolve(this.headers);
    const resolvedCredentials = await resolve(this.credentials);
    const baseHeaders = {
      ...normalizeHeaders(resolvedHeaders),
      ...normalizeHeaders(options.headers)
    };
    const preparedRequest = await ((_a162 = this.prepareReconnectToStreamRequest) == null ? void 0 : _a162.call(this, {
      api: this.api,
      id: options.chatId,
      body: { ...resolvedBody, ...options.body },
      headers: baseHeaders,
      credentials: resolvedCredentials,
      requestMetadata: options.metadata
    }));
    const api = (_b17 = preparedRequest == null ? void 0 : preparedRequest.api) != null ? _b17 : `${this.api}/${options.chatId}/stream`;
    const headers = (preparedRequest == null ? void 0 : preparedRequest.headers) !== void 0 ? normalizeHeaders(preparedRequest.headers) : baseHeaders;
    const credentials = (_c = preparedRequest == null ? void 0 : preparedRequest.credentials) != null ? _c : resolvedCredentials;
    const fetch2 = (_d = this.fetch) != null ? _d : globalThis.fetch;
    const response = await fetch2(api, {
      method: "GET",
      headers: withUserAgentSuffix(
        headers,
        `ai-sdk/${VERSION4}`,
        getRuntimeEnvironmentUserAgent()
      ),
      credentials
    });
    if (response.status === 204) {
      return null;
    }
    if (!response.ok) {
      throw new Error(
        (_e = await response.text()) != null ? _e : "Failed to fetch the chat response."
      );
    }
    if (!response.body) {
      throw new Error("The response body is empty.");
    }
    return this.processResponseStream(response.body);
  }
};
var DefaultChatTransport = class extends HttpChatTransport {
  constructor(options = {}) {
    super(options);
  }
  processResponseStream(stream) {
    return parseJsonEventStream({
      stream,
      schema: uiMessageChunkSchema
    }).pipeThrough(
      new TransformStream({
        async transform(chunk, controller) {
          if (!chunk.success) {
            throw chunk.error;
          }
          controller.enqueue(chunk.value);
        }
      })
    );
  }
};
var AbstractChat = class {
  constructor({
    generateId: generateId2 = generateId,
    id = generateId2(),
    transport = new DefaultChatTransport(),
    messageMetadataSchema,
    dataPartSchemas,
    state,
    onError,
    onToolCall,
    onFinish,
    onData,
    sendAutomaticallyWhen
  }) {
    this.activeResponse = void 0;
    this.jobExecutor = new SerialJobExecutor();
    this.sendMessage = async (message, options) => {
      var _a162, _b17, _c, _d;
      if (message == null) {
        await this.makeRequest({
          trigger: "submit-message",
          messageId: (_a162 = this.lastMessage) == null ? void 0 : _a162.id,
          ...options
        });
        return;
      }
      let uiMessage;
      if ("text" in message || "files" in message) {
        const fileParts = Array.isArray(message.files) ? message.files : await convertFileListToFileUIParts(message.files);
        uiMessage = {
          parts: [
            ...fileParts,
            ..."text" in message && message.text != null ? [{ type: "text", text: message.text }] : []
          ]
        };
      } else {
        uiMessage = message;
      }
      if (message.messageId != null) {
        const messageIndex = this.state.messages.findIndex(
          (m) => m.id === message.messageId
        );
        if (messageIndex === -1) {
          throw new Error(`message with id ${message.messageId} not found`);
        }
        if (this.state.messages[messageIndex].role !== "user") {
          throw new Error(
            `message with id ${message.messageId} is not a user message`
          );
        }
        this.state.messages = this.state.messages.slice(0, messageIndex + 1);
        this.state.replaceMessage(messageIndex, {
          ...uiMessage,
          id: message.messageId,
          role: (_b17 = uiMessage.role) != null ? _b17 : "user",
          metadata: message.metadata
        });
      } else {
        this.state.pushMessage({
          ...uiMessage,
          id: (_c = uiMessage.id) != null ? _c : this.generateId(),
          role: (_d = uiMessage.role) != null ? _d : "user",
          metadata: message.metadata
        });
      }
      await this.makeRequest({
        trigger: "submit-message",
        messageId: message.messageId,
        ...options
      });
    };
    this.regenerate = async ({
      messageId,
      ...options
    } = {}) => {
      const messageIndex = messageId == null ? this.state.messages.length - 1 : this.state.messages.findIndex((message) => message.id === messageId);
      if (messageIndex === -1) {
        throw new Error(`message ${messageId} not found`);
      }
      this.state.messages = this.state.messages.slice(
        0,
        // if the message is a user message, we need to include it in the request:
        this.messages[messageIndex].role === "assistant" ? messageIndex : messageIndex + 1
      );
      await this.makeRequest({
        trigger: "regenerate-message",
        messageId,
        ...options
      });
    };
    this.resumeStream = async (options = {}) => {
      await this.makeRequest({ trigger: "resume-stream", ...options });
    };
    this.clearError = () => {
      if (this.status === "error") {
        this.state.error = void 0;
        this.setStatus({ status: "ready" });
      }
    };
    this.addToolApprovalResponse = async ({
      id: id2,
      approved,
      reason
    }) => this.jobExecutor.run(async () => {
      var _a162, _b17;
      const messages = this.state.messages;
      const lastMessage = messages[messages.length - 1];
      const updatePart = (part) => isToolUIPart(part) && part.state === "approval-requested" && part.approval.id === id2 ? {
        ...part,
        state: "approval-responded",
        approval: { id: id2, approved, reason }
      } : part;
      this.state.replaceMessage(messages.length - 1, {
        ...lastMessage,
        parts: lastMessage.parts.map(updatePart)
      });
      if (this.activeResponse) {
        this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
      }
      if (this.status !== "streaming" && this.status !== "submitted" && ((_a162 = this.sendAutomaticallyWhen) == null ? void 0 : _a162.call(this, { messages: this.state.messages }))) {
        this.makeRequest({
          trigger: "submit-message",
          messageId: (_b17 = this.lastMessage) == null ? void 0 : _b17.id
        });
      }
    });
    this.addToolOutput = async ({
      state: state2 = "output-available",
      tool: tool2,
      toolCallId,
      output,
      errorText
    }) => this.jobExecutor.run(async () => {
      var _a162, _b17;
      const messages = this.state.messages;
      const lastMessage = messages[messages.length - 1];
      const updatePart = (part) => isToolUIPart(part) && part.toolCallId === toolCallId ? { ...part, state: state2, output, errorText } : part;
      this.state.replaceMessage(messages.length - 1, {
        ...lastMessage,
        parts: lastMessage.parts.map(updatePart)
      });
      if (this.activeResponse) {
        this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(updatePart);
      }
      if (this.status !== "streaming" && this.status !== "submitted" && ((_a162 = this.sendAutomaticallyWhen) == null ? void 0 : _a162.call(this, { messages: this.state.messages }))) {
        this.makeRequest({
          trigger: "submit-message",
          messageId: (_b17 = this.lastMessage) == null ? void 0 : _b17.id
        });
      }
    });
    this.addToolResult = this.addToolOutput;
    this.stop = async () => {
      var _a162;
      if (this.status !== "streaming" && this.status !== "submitted")
        return;
      if ((_a162 = this.activeResponse) == null ? void 0 : _a162.abortController) {
        this.activeResponse.abortController.abort();
      }
    };
    this.id = id;
    this.transport = transport;
    this.generateId = generateId2;
    this.messageMetadataSchema = messageMetadataSchema;
    this.dataPartSchemas = dataPartSchemas;
    this.state = state;
    this.onError = onError;
    this.onToolCall = onToolCall;
    this.onFinish = onFinish;
    this.onData = onData;
    this.sendAutomaticallyWhen = sendAutomaticallyWhen;
  }
  /**
   * Hook status:
   *
   * - `submitted`: The message has been sent to the API and we're awaiting the start of the response stream.
   * - `streaming`: The response is actively streaming in from the API, receiving chunks of data.
   * - `ready`: The full response has been received and processed; a new user message can be submitted.
   * - `error`: An error occurred during the API request, preventing successful completion.
   */
  get status() {
    return this.state.status;
  }
  setStatus({
    status,
    error
  }) {
    if (this.status === status)
      return;
    this.state.status = status;
    this.state.error = error;
  }
  get error() {
    return this.state.error;
  }
  get messages() {
    return this.state.messages;
  }
  get lastMessage() {
    return this.state.messages[this.state.messages.length - 1];
  }
  set messages(messages) {
    this.state.messages = messages;
  }
  async makeRequest({
    trigger,
    metadata,
    headers,
    body,
    messageId
  }) {
    var _a162, _b17, _c, _d;
    this.setStatus({ status: "submitted", error: void 0 });
    const lastMessage = this.lastMessage;
    let isAbort = false;
    let isDisconnect = false;
    let isError = false;
    try {
      const activeResponse = {
        state: createStreamingUIMessageState({
          lastMessage: this.state.snapshot(lastMessage),
          messageId: this.generateId()
        }),
        abortController: new AbortController()
      };
      activeResponse.abortController.signal.addEventListener("abort", () => {
        isAbort = true;
      });
      this.activeResponse = activeResponse;
      let stream;
      if (trigger === "resume-stream") {
        const reconnect = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata,
          headers,
          body
        });
        if (reconnect == null) {
          this.setStatus({ status: "ready" });
          return;
        }
        stream = reconnect;
      } else {
        stream = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: activeResponse.abortController.signal,
          metadata,
          headers,
          body,
          trigger,
          messageId
        });
      }
      const runUpdateMessageJob = (job) => (
        // serialize the job execution to avoid race conditions:
        this.jobExecutor.run(
          () => job({
            state: activeResponse.state,
            write: () => {
              var _a172;
              this.setStatus({ status: "streaming" });
              const replaceLastMessage = activeResponse.state.message.id === ((_a172 = this.lastMessage) == null ? void 0 : _a172.id);
              if (replaceLastMessage) {
                this.state.replaceMessage(
                  this.state.messages.length - 1,
                  activeResponse.state.message
                );
              } else {
                this.state.pushMessage(activeResponse.state.message);
              }
            }
          })
        )
      );
      await consumeStream({
        stream: processUIMessageStream({
          stream,
          onToolCall: this.onToolCall,
          onData: this.onData,
          messageMetadataSchema: this.messageMetadataSchema,
          dataPartSchemas: this.dataPartSchemas,
          runUpdateMessageJob,
          onError: (error) => {
            throw error;
          }
        }),
        onError: (error) => {
          throw error;
        }
      });
      this.setStatus({ status: "ready" });
    } catch (err) {
      if (isAbort || err.name === "AbortError") {
        isAbort = true;
        this.setStatus({ status: "ready" });
        return null;
      }
      isError = true;
      if (err instanceof TypeError && (err.message.toLowerCase().includes("fetch") || err.message.toLowerCase().includes("network"))) {
        isDisconnect = true;
      }
      if (this.onError && err instanceof Error) {
        this.onError(err);
      }
      this.setStatus({ status: "error", error: err });
    } finally {
      try {
        (_b17 = this.onFinish) == null ? void 0 : _b17.call(this, {
          message: this.activeResponse.state.message,
          messages: this.state.messages,
          isAbort,
          isDisconnect,
          isError,
          finishReason: (_a162 = this.activeResponse) == null ? void 0 : _a162.state.finishReason
        });
      } catch (err) {
        console.error(err);
      }
      this.activeResponse = void 0;
    }
    if (((_c = this.sendAutomaticallyWhen) == null ? void 0 : _c.call(this, { messages: this.state.messages })) && !isError) {
      await this.makeRequest({
        trigger: "submit-message",
        messageId: (_d = this.lastMessage) == null ? void 0 : _d.id,
        metadata,
        headers,
        body
      });
    }
  }
};
function lastAssistantMessageIsCompleteWithToolCalls({
  messages
}) {
  const message = messages[messages.length - 1];
  if (!message) {
    return false;
  }
  if (message.role !== "assistant") {
    return false;
  }
  const lastStepStartIndex = message.parts.reduce((lastIndex, part, index) => {
    return part.type === "step-start" ? index : lastIndex;
  }, -1);
  const lastStepToolInvocations = message.parts.slice(lastStepStartIndex + 1).filter(isToolUIPart).filter((part) => !part.providerExecuted);
  return lastStepToolInvocations.length > 0 && lastStepToolInvocations.every(
    (part) => part.state === "output-available" || part.state === "output-error"
  );
}

// node_modules/swrv/esm/lib/hash.js
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
function hash(args) {
  if (!args.length)
    return "";
  var key = "arg";
  for (var i = 0; i < args.length; ++i) {
    var _hash = void 0;
    if (args[i] === null || typeof args[i] !== "object" && typeof args[i] !== "function") {
      if (typeof args[i] === "string") {
        _hash = '"' + args[i] + '"';
      } else {
        _hash = String(args[i]);
      }
    } else {
      if (!table.has(args[i])) {
        _hash = counter;
        table.set(args[i], counter++);
      } else {
        _hash = table.get(args[i]);
      }
    }
    key += "@" + _hash;
  }
  return key;
}

// node_modules/swrv/esm/cache/index.js
function serializeKeyDefault(key) {
  if (typeof key === "function") {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  if (Array.isArray(key)) {
    key = hash(key);
  } else {
    key = String(key || "");
  }
  return key;
}
var SWRVCache = (
  /** @class */
  function() {
    function SWRVCache2(ttl) {
      if (ttl === void 0) {
        ttl = 0;
      }
      this.items = /* @__PURE__ */ new Map();
      this.ttl = ttl;
    }
    SWRVCache2.prototype.serializeKey = function(key) {
      return serializeKeyDefault(key);
    };
    SWRVCache2.prototype.get = function(k) {
      var _key = this.serializeKey(k);
      return this.items.get(_key);
    };
    SWRVCache2.prototype.set = function(k, v, ttl) {
      var _key = this.serializeKey(k);
      var timeToLive = ttl || this.ttl;
      var now = Date.now();
      var item = {
        data: v,
        createdAt: now,
        expiresAt: timeToLive ? now + timeToLive : Infinity
      };
      this.dispatchExpire(timeToLive, item, _key);
      this.items.set(_key, item);
    };
    SWRVCache2.prototype.dispatchExpire = function(ttl, item, serializedKey) {
      var _this = this;
      ttl && setTimeout(function() {
        var current = Date.now();
        var hasExpired = current >= item.expiresAt;
        if (hasExpired)
          _this.delete(serializedKey);
      }, ttl);
    };
    SWRVCache2.prototype.delete = function(serializedKey) {
      this.items.delete(serializedKey);
    };
    return SWRVCache2;
  }()
);
var cache_default = SWRVCache;

// node_modules/swrv/esm/lib/web-preset.js
function isOnline() {
  if (typeof navigator.onLine !== "undefined") {
    return navigator.onLine;
  }
  return true;
}
function isDocumentVisible() {
  if (typeof document !== "undefined" && typeof document.visibilityState !== "undefined") {
    return document.visibilityState !== "hidden";
  }
  return true;
}
var fetcher = function(url) {
  return fetch(url).then(function(res) {
    return res.json();
  });
};
var web_preset_default = {
  isOnline,
  isDocumentVisible,
  fetcher
};

// node_modules/swrv/esm/use-swrv.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v) {
      return step([n2, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read6 = function(o, n2) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray5 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var DATA_CACHE = new cache_default();
var REF_CACHE = new cache_default();
var PROMISES_CACHE = new cache_default();
var defaultConfig = {
  cache: DATA_CACHE,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: true,
  revalidateDebounce: 0,
  shouldRetryOnError: true,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: web_preset_default.fetcher,
  isOnline: web_preset_default.isOnline,
  isDocumentVisible: web_preset_default.isDocumentVisible
};
function setRefCache(key, theRef, ttl) {
  var refCacheItem = REF_CACHE.get(key);
  if (refCacheItem) {
    refCacheItem.data.push(theRef);
  } else {
    var gracePeriod = 5e3;
    REF_CACHE.set(key, [theRef], ttl > 0 ? ttl + gracePeriod : ttl);
  }
}
function onErrorRetry(revalidate, errorRetryCount, config) {
  if (!config.isDocumentVisible()) {
    return;
  }
  if (config.errorRetryCount !== void 0 && errorRetryCount > config.errorRetryCount) {
    return;
  }
  var count = Math.min(errorRetryCount || 0, config.errorRetryCount);
  var timeout = count * config.errorRetryInterval;
  setTimeout(function() {
    revalidate(null, { errorRetryCount: count + 1, shouldRetryOnError: true });
  }, timeout);
}
function resolveRetryFlag(_a18) {
  var _b17 = _a18.shouldRetry, shouldRetry = _b17 === void 0 ? void 0 : _b17, error = _a18.error;
  if (typeof shouldRetry === "function") {
    return shouldRetry(error);
  }
  if (typeof shouldRetry === "boolean") {
    return shouldRetry;
  }
  return defaultConfig.shouldRetryOnError;
}
var mutate = function(key, res, cache, ttl) {
  if (cache === void 0) {
    cache = DATA_CACHE;
  }
  if (ttl === void 0) {
    ttl = defaultConfig.ttl;
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var data, error, isValidating, err_1, newData, stateRef, refs_1;
    return __generator(this, function(_a18) {
      switch (_a18.label) {
        case 0:
          if (!isPromise(res)) return [3, 5];
          _a18.label = 1;
        case 1:
          _a18.trys.push([1, 3, , 4]);
          return [4, res];
        case 2:
          data = _a18.sent();
          return [3, 4];
        case 3:
          err_1 = _a18.sent();
          error = err_1;
          return [3, 4];
        case 4:
          return [3, 6];
        case 5:
          data = res;
          _a18.label = 6;
        case 6:
          isValidating = false;
          newData = { data, error, isValidating };
          if (typeof data !== "undefined") {
            try {
              cache.set(key, newData, ttl);
            } catch (err) {
              console.error("swrv(mutate): failed to set cache", err);
            }
          }
          stateRef = REF_CACHE.get(key);
          if (stateRef && stateRef.data.length) {
            refs_1 = stateRef.data.filter(function(r) {
              return r.key === key;
            });
            refs_1.forEach(function(r, idx) {
              if (typeof newData.data !== "undefined") {
                r.data = newData.data;
              }
              r.error = newData.error;
              r.isValidating = newData.isValidating;
              r.isLoading = newData.isValidating;
              var isLast = idx === refs_1.length - 1;
              if (!isLast) {
                delete refs_1[idx];
              }
            });
            refs_1 = refs_1.filter(Boolean);
          }
          return [2, newData];
      }
    });
  });
};
function useSWRV() {
  var _this = this;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var key;
  var fn;
  var config = __assign({}, defaultConfig);
  var unmounted = false;
  var isHydrated = false;
  if (!getCurrentScope()) {
    console.error("useSWRV must be called inside setup() or an active effectScope().");
    return null;
  }
  var IS_SERVER = typeof window === "undefined" || typeof document === "undefined";
  if (args.length >= 1) {
    key = args[0];
  }
  if (args.length >= 2) {
    fn = args[1];
  }
  if (args.length > 2) {
    config = __assign(__assign({}, config), args[2]);
  }
  var ttl = IS_SERVER ? config.serverTTL : config.ttl;
  var keyRef = typeof key === "function" ? key : ref(key);
  if (typeof fn === "undefined") {
    fn = config.fetcher;
  }
  var stateRef = null;
  if (!stateRef) {
    stateRef = reactive({
      data: void 0,
      error: void 0,
      isValidating: true,
      isLoading: true,
      key: null
    });
  }
  var revalidate = function(data, opts) {
    return __awaiter(_this, void 0, void 0, function() {
      var isFirstFetch, keyVal, cacheItem, newData, fetcher2, shouldRevalidate, trigger;
      var _this2 = this;
      return __generator(this, function(_a18) {
        switch (_a18.label) {
          case 0:
            isFirstFetch = stateRef.data === void 0;
            keyVal = keyRef.value;
            if (!keyVal) {
              return [
                2
                /*return*/
              ];
            }
            cacheItem = config.cache.get(keyVal);
            newData = cacheItem && cacheItem.data;
            stateRef.isValidating = true;
            stateRef.isLoading = !newData;
            if (newData) {
              stateRef.data = newData.data;
              stateRef.error = newData.error;
            }
            fetcher2 = data || fn;
            if (!fetcher2 || !config.isDocumentVisible() && !isFirstFetch || (opts === null || opts === void 0 ? void 0 : opts.forceRevalidate) !== void 0 && !(opts === null || opts === void 0 ? void 0 : opts.forceRevalidate)) {
              stateRef.isValidating = false;
              stateRef.isLoading = false;
              return [
                2
                /*return*/
              ];
            }
            if (cacheItem) {
              shouldRevalidate = Boolean(Date.now() - cacheItem.createdAt >= config.dedupingInterval || (opts === null || opts === void 0 ? void 0 : opts.forceRevalidate));
              if (!shouldRevalidate) {
                stateRef.isValidating = false;
                stateRef.isLoading = false;
                return [
                  2
                  /*return*/
                ];
              }
            }
            trigger = function() {
              return __awaiter(_this2, void 0, void 0, function() {
                var promiseFromCache, fetcherArgs, newPromise, configAllows, optsAllows, shouldRetryOnError;
                return __generator(this, function(_a19) {
                  switch (_a19.label) {
                    case 0:
                      promiseFromCache = PROMISES_CACHE.get(keyVal);
                      if (!!promiseFromCache) return [3, 2];
                      fetcherArgs = Array.isArray(keyVal) ? keyVal : [keyVal];
                      newPromise = fetcher2.apply(void 0, __spreadArray5([], __read6(fetcherArgs), false));
                      PROMISES_CACHE.set(keyVal, newPromise, config.dedupingInterval);
                      return [4, mutate(keyVal, newPromise, config.cache, ttl)];
                    case 1:
                      _a19.sent();
                      return [3, 4];
                    case 2:
                      return [4, mutate(keyVal, promiseFromCache.data, config.cache, ttl)];
                    case 3:
                      _a19.sent();
                      _a19.label = 4;
                    case 4:
                      stateRef.isValidating = false;
                      stateRef.isLoading = false;
                      PROMISES_CACHE.delete(keyVal);
                      if (stateRef.error !== void 0) {
                        configAllows = resolveRetryFlag({ shouldRetry: config.shouldRetryOnError, error: stateRef.error });
                        optsAllows = resolveRetryFlag({
                          shouldRetry: opts ? opts.shouldRetryOnError : true,
                          error: stateRef.error
                        });
                        shouldRetryOnError = !unmounted && configAllows && optsAllows;
                        if (shouldRetryOnError) {
                          onErrorRetry(revalidate, opts ? opts.errorRetryCount : 1, config);
                        }
                      }
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            };
            if (!(newData && config.revalidateDebounce)) return [3, 1];
            setTimeout(function() {
              return __awaiter(_this2, void 0, void 0, function() {
                return __generator(this, function(_a19) {
                  switch (_a19.label) {
                    case 0:
                      if (!!unmounted) return [3, 2];
                      return [4, trigger()];
                    case 1:
                      _a19.sent();
                      _a19.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, config.revalidateDebounce);
            return [3, 3];
          case 1:
            return [4, trigger()];
          case 2:
            _a18.sent();
            _a18.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  var revalidateCall = function() {
    return __awaiter(_this, void 0, void 0, function() {
      return __generator(this, function(_a18) {
        return [2, revalidate(null, { shouldRetryOnError: false })];
      });
    });
  };
  var timer = null;
  if (!IS_SERVER) {
    var tick_1 = function() {
      return __awaiter(_this, void 0, void 0, function() {
        return __generator(this, function(_a18) {
          switch (_a18.label) {
            case 0:
              if (!(!stateRef.error && config.isOnline())) return [3, 2];
              return [4, revalidate()];
            case 1:
              _a18.sent();
              return [3, 3];
            case 2:
              if (timer) {
                clearTimeout(timer);
                timer = null;
              }
              _a18.label = 3;
            case 3:
              if (config.refreshInterval && !unmounted) {
                timer = setTimeout(tick_1, config.refreshInterval);
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    if (config.refreshInterval) {
      timer = setTimeout(tick_1, config.refreshInterval);
    }
    if (config.revalidateOnFocus) {
      document.addEventListener("visibilitychange", revalidateCall, false);
      window.addEventListener("focus", revalidateCall, false);
    }
  }
  onScopeDispose(function() {
    unmounted = true;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (!IS_SERVER && config.revalidateOnFocus) {
      document.removeEventListener("visibilitychange", revalidateCall, false);
      window.removeEventListener("focus", revalidateCall, false);
    }
    var refCacheItem = REF_CACHE.get(keyRef.value);
    if (refCacheItem) {
      refCacheItem.data = refCacheItem.data.filter(function(ref2) {
        return ref2 !== stateRef;
      });
    }
  });
  try {
    watch(keyRef, function(val) {
      if (!isReadonly(keyRef)) {
        keyRef.value = val;
      }
      stateRef.key = val;
      stateRef.isValidating = Boolean(val);
      setRefCache(keyRef.value, stateRef, ttl);
      if (!IS_SERVER && !isHydrated && keyRef.value) {
        revalidate();
      }
      isHydrated = false;
    }, {
      immediate: true
    });
  } catch (_a18) {
  }
  var res = __assign(__assign({}, toRefs(stateRef)), { mutate: function(data, opts) {
    return revalidate(data, __assign(__assign({}, opts), { forceRevalidate: true }));
  } });
  return res;
}
function isPromise(p) {
  return p !== null && typeof p === "object" && typeof p.then === "function";
}
var use_swrv_default = useSWRV;

// node_modules/swrv/esm/index.js
var esm_default = use_swrv_default;

// node_modules/@ai-sdk/vue/dist/index.mjs
var useSWRV2 = esm_default.default || esm_default;
var VueChatState = class {
  constructor(messages) {
    this.statusRef = ref("ready");
    this.errorRef = ref(void 0);
    this.pushMessage = (message) => {
      this.messagesRef.value = [...this.messagesRef.value, message];
    };
    this.popMessage = () => {
      this.messagesRef.value = this.messagesRef.value.slice(0, -1);
    };
    this.replaceMessage = (index, message) => {
      this.messagesRef.value[index] = { ...message };
    };
    this.snapshot = (value) => value;
    this.messagesRef = ref(messages != null ? messages : []);
  }
  get messages() {
    return this.messagesRef.value;
  }
  set messages(messages) {
    this.messagesRef.value = messages;
  }
  get status() {
    return this.statusRef.value;
  }
  set status(status) {
    this.statusRef.value = status;
  }
  get error() {
    return this.errorRef.value;
  }
  set error(error) {
    this.errorRef.value = error;
  }
};
var Chat = class extends AbstractChat {
  constructor({ messages, ...init }) {
    super({
      ...init,
      state: new VueChatState(messages)
    });
  }
};
var useSWRV22 = esm_default.default || esm_default;

// node_modules/@scalar/agent-chat/dist/state/state.js
var STATE_SYMBOL = Symbol("STATE_SYMBOL");
var { toast } = useToasts();
function createChat({ registryDocuments, workspaceStore, baseUrl, proxyUrl, getAccessToken, getAgentKey }) {
  const chat = new Chat({
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    transport: new DefaultChatTransport({
      api: `${baseUrl}/vector/openapi/chat`,
      headers: () => createAuthorizationHeaders({
        getAccessToken,
        getAgentKey
      }),
      body: () => ({ registryDocuments: registryDocuments.value })
    }),
    async onToolCall({ toolCall }) {
      if (toolCall.dynamic) return;
      if (toolCall.toolName === "execute-request" && toolCall.input.method.toLowerCase() === "get") await executeRequestTool({
        documentSettings: createDocumentSettings(workspaceStore),
        input: toolCall.input,
        toolCallId: toolCall.toolCallId,
        chat,
        proxyUrl: proxyUrl.value
      });
    }
  });
  return chat;
}
function createState({ initialRegistryDocuments, registryUrl, dashboardUrl, platformProxyUrl, baseUrl, mode, isLoggedIn, getAccessToken, getAgentKey, getActiveDocumentJson, prefilledMessageRef, hideAddApi }) {
  const prompt = ref((prefilledMessageRef == null ? void 0 : prefilledMessageRef.value) ?? "");
  const registryDocuments = ref([]);
  const pendingDocuments = reactive({});
  const curatedDocuments = ref([]);
  const proxyUrlRaw = ref(URLS.DEFAULT_PROXY_URL);
  const proxyUrl = computed(() => {
    var _a18;
    return ((_a18 = proxyUrlRaw.value) == null ? void 0 : _a18.trim()) || URLS.DEFAULT_PROXY_URL;
  });
  const uploadedTmpDocumentUrl = ref();
  const terms = useTermsAndConditions();
  const eventBus = createWorkspaceEventBus();
  const workspaceStore = createWorkspaceStore({ plugins: [persistencePlugin({ persistAuth: true })] });
  const config = computed(() => coerce(apiReferenceConfigurationSchema, {
    proxyUrl: proxyUrl.value,
    persistAuth: true
  }));
  const chat = createChat({
    registryDocuments,
    workspaceStore,
    baseUrl,
    proxyUrl,
    getAccessToken,
    getAgentKey
  });
  const api = createApi({
    baseUrl,
    getAccessToken,
    getAgentKey
  });
  const loading = computed(() => {
    var _a18;
    return chat.status === "submitted" || chat.status === "streaming" && !((_a18 = chat.lastMessage) == null ? void 0 : _a18.parts.some((part) => part.type === "text"));
  });
  watch(() => chat.status, () => {
    if (chat.status === "streaming") prompt.value = "";
  });
  if (prefilledMessageRef) watch(prefilledMessageRef, async (val) => {
    if (val) {
      prompt.value = val;
      if (terms.accepted.value) await chat.sendMessage({ text: prompt.value });
    }
  });
  const settingsModal = useModal();
  async function addDocument({ namespace, slug, removable = true, tmp = false }) {
    if (registryDocuments.value.find((doc) => doc.namespace === namespace && doc.slug === slug)) return;
    const identifier = `@${namespace}/${slug}`;
    pendingDocuments[identifier] = true;
    const loadDocumentResult = await loadDocument({
      namespace,
      slug,
      workspaceStore,
      registryUrl,
      registryDocuments,
      config: config.value,
      getAccessToken,
      api,
      removable
    });
    pendingDocuments[identifier] = false;
    if (!loadDocumentResult.success) {
      if (tmp) {
        removeTmpDocFromLocalStorage();
        throw loadDocumentResult.error;
      }
      console.warn("[AGENT]: Unable to load document", loadDocumentResult.error);
      toast(`Unable to load the document @${namespace}/${slug}`, "warn");
      throw loadDocumentResult.error;
    }
  }
  async function addDocumentAsync({ namespace, slug, removable = true }) {
    if (registryDocuments.value.find((doc) => doc.namespace === namespace && doc.slug === slug)) return;
    const identifier = `@${namespace}/${slug}`;
    pendingDocuments[identifier] = true;
    const embeddingStatusResponse = await n.fromUnsafe(() => fetch(`${baseUrl}/vector/registry/embeddings/${namespace}/${slug}`, { method: "GET" }), (originalError) => createError("FAILED_TO_GET_EMBEDDING_STATUS", originalError));
    if (embeddingStatusResponse.success && embeddingStatusResponse.data.ok) {
      const loadDocumentResult = await loadDocument({
        namespace,
        slug,
        workspaceStore,
        registryUrl,
        registryDocuments,
        config: config.value,
        getAccessToken,
        api,
        removable
      });
      if (!loadDocumentResult.success) {
        console.warn("[AGENT]: Unable to load document", loadDocumentResult.error);
        toast(`Unable to load the document @${namespace}/${slug}`, "warn");
      }
    } else {
      console.warn("[AGENT]: Document could not be embedded");
      toast(`Unable to embed the document @${namespace}/${slug}`, "warn");
    }
    pendingDocuments[identifier] = false;
  }
  function removeDocument({ namespace, slug }) {
    registryDocuments.value = registryDocuments.value.filter((doc) => !(doc.namespace === namespace && doc.slug === slug));
    workspaceStore.deleteDocument(createDocumentName(namespace, slug));
  }
  initialRegistryDocuments.forEach(({ namespace, slug }) => addDocument({
    namespace,
    slug,
    removable: false
  }));
  return {
    prompt,
    chat,
    workspaceStore,
    eventBus,
    loading,
    settingsModal,
    config,
    registryUrl,
    dashboardUrl,
    platformProxyUrl,
    baseUrl,
    registryDocuments,
    pendingDocuments,
    proxyUrl,
    proxyUrlRaw,
    mode,
    terms,
    isLoggedIn,
    addDocument,
    addDocumentAsync,
    removeDocument,
    getAccessToken,
    getAgentKey,
    api,
    uploadedTmpDocumentUrl,
    curatedDocuments,
    getActiveDocumentJson,
    hideAddApi
  };
}
function useState() {
  const state = inject(STATE_SYMBOL);
  if (!state) throw new Error("No state provided.");
  return state;
}

// node_modules/@scalar/agent-chat/dist/hooks/use-agent-key-documents.js
function useAgentKeyDocuments() {
  const { api, addDocument, mode, getAgentKey } = useState();
  const { toast: toast2 } = useToasts();
  onMounted(async () => {
    if (mode !== "full" || !getAgentKey) return;
    const keyDocumentsResult = await api.getKeyDocuments();
    if (!keyDocumentsResult.success) {
      toast2("Failed to fetch your OpenAPI document. The Agent key may be invalid.", "error");
      return;
    }
    keyDocumentsResult.data.documents.forEach(({ namespace, slug }) => addDocument({
      namespace,
      slug,
      removable: false
    }));
  });
}

// node_modules/@scalar/agent-chat/dist/hooks/use-chat-scroll.js
function useChatScroll() {
  const state = useState();
  function getMsgContent(msg) {
    const lastPart = msg == null ? void 0 : msg.parts.at(-1);
    if (!lastPart) return;
    if (lastPart.type !== "text") return;
    return lastPart.text;
  }
  watch([() => state.chat.status, () => getMsgContent(state.chat.lastMessage)], async () => {
    await nextTick();
    window.scrollTo(0, document.body.scrollHeight);
  });
}

// node_modules/@scalar/agent-chat/dist/hooks/use-curated-documents.js
function useCuratedDocuments() {
  const { api, curatedDocuments } = useState();
  onMounted(async () => {
    const getCuratedDocumentsResult = await api.getCuratedDocuments();
    if (!getCuratedDocumentsResult.success) return;
    curatedDocuments.value = getCuratedDocumentsResult.data.results;
  });
}

// node_modules/@scalar/agent-chat/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) target[key] = val;
  return target;
};

// node_modules/@scalar/agent-chat/dist/entities/tools/ask-for-authentication.js
var ASK_FOR_AUTHENTICATION_TOOL_NAME = "ask-for-authentication";
var askForAuthenticationInputSchema = object({
  documentName: string(),
  uniqueIdentifier: string({ typeComment: "Needed for legacy support for old clients" })
});

// node_modules/@scalar/agent-chat/dist/entities/tools/search-openapi-operations.js
var searchOpenAPIOperationsInputSchema = object({ question: string() });

// node_modules/@scalar/agent-chat/dist/components/AuthenticationProvided.vue.js
var _sfc_main = {};
var _hoisted_1 = { class: "authenticationProvided" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [..._cache[0] || (_cache[0] = [createStaticVNode('<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-v-e3416cd5><rect height="14.25" rx="7.125" width="14.25" x="0.875" y="0.875" data-v-e3416cd5></rect><rect height="14.25" rx="7.125" stroke="currentColor" stroke-width="1.75" width="14.25" x="0.875" y="0.875" data-v-e3416cd5></rect><g clip-path="url(#clip0_74_840)" data-v-e3416cd5><path d="M11.6037 6.841L7.59117 10.8535C7.49742 10.9472 7.37029 10.9998 7.23774 10.9998C7.10519 10.9998 6.97806 10.9472 6.8843 10.8535L4.64617 8.6035C4.55257 8.50975 4.5 8.38269 4.5 8.25022C4.5 8.11774 4.55257 7.99068 4.64617 7.89694L5.27117 7.27194C5.36488 7.17862 5.49174 7.12623 5.62399 7.12623C5.75623 7.12623 5.88309 7.17862 5.9768 7.27194L7.25024 8.50694L10.274 5.52037C10.3677 5.42696 10.4946 5.37451 10.627 5.37451C10.7593 5.37451 10.8862 5.42696 10.9799 5.52037L11.6034 6.131C11.6502 6.17746 11.6875 6.23274 11.7129 6.29366C11.7383 6.35458 11.7514 6.41993 11.7514 6.48593C11.7514 6.55194 11.7384 6.6173 11.713 6.67824C11.6877 6.73918 11.6505 6.7945 11.6037 6.841Z" fill="currentColor" data-v-e3416cd5></path></g><defs data-v-e3416cd5><clipPath id="clip0_74_840" data-v-e3416cd5><rect height="8" rx="4" width="8" x="4" y="4" data-v-e3416cd5></rect></clipPath></defs></svg> Authorized ', 2)])]);
}
var AuthenticationProvided_default = _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3416cd5"]]);

// node_modules/@scalar/agent-chat/dist/components/AuthenticationRequired.vue.js
var _sfc_main2 = {};
var _hoisted_12 = { class: "authenticationRequired" };
function _sfc_render2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_12, [..._cache[0] || (_cache[0] = [createStaticVNode('<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-v-d15ef40b><rect height="14.25" rx="7.125" width="14.25" x="0.875" y="0.875" data-v-d15ef40b></rect><rect height="14.25" rx="7.125" stroke="currentColor" stroke-width="1.5" width="14.25" x="0.875" y="0.875" data-v-d15ef40b></rect><g clip-path="url(#clip0_74_585)" data-v-d15ef40b><path d="M10.75 5.5V10.5C10.75 10.6326 10.6973 10.7598 10.6036 10.8536C10.5098 10.9473 10.3826 11 10.25 11H9C8.86739 11 8.74021 10.9473 8.64645 10.8536C8.55268 10.7598 8.5 10.6326 8.5 10.5V5.5C8.5 5.36739 8.55268 5.24021 8.64645 5.14645C8.74021 5.05268 8.86739 5 9 5H10.25C10.3826 5 10.5098 5.05268 10.6036 5.14645C10.6973 5.24021 10.75 5.36739 10.75 5.5ZM7 5H5.75C5.61739 5 5.49021 5.05268 5.39645 5.14645C5.30268 5.24021 5.25 5.36739 5.25 5.5V10.5C5.25 10.6326 5.30268 10.7598 5.39645 10.8536C5.49021 10.9473 5.61739 11 5.75 11H7C7.13261 11 7.25979 10.9473 7.35355 10.8536C7.44732 10.7598 7.5 10.6326 7.5 10.5V5.5C7.5 5.36739 7.44732 5.24021 7.35355 5.14645C7.25979 5.05268 7.13261 5 7 5Z" fill="currentColor" data-v-d15ef40b></path></g><defs data-v-d15ef40b><clipPath id="clip0_74_585" data-v-d15ef40b><rect height="8" rx="4" width="8" x="4" y="4" data-v-d15ef40b></rect></clipPath></defs></svg> Authentication required ', 2)])]);
}
var AuthenticationRequired_default = _plugin_vue_export_helper_default(_sfc_main2, [["render", _sfc_render2], ["__scopeId", "data-v-d15ef40b"]]);

// node_modules/@scalar/agent-chat/dist/views/Settings/Auth.vue.script.js
var Auth_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Auth",
  props: {
    options: {},
    name: {},
    authStore: {},
    document: {},
    eventBus: {},
    selectedServer: {},
    environment: {}
  },
  setup(__props) {
    const { workspaceStore } = useState();
    const securityRequirements = computed(() => {
      var _a18;
      return getSecurityRequirements((_a18 = __props.document) == null ? void 0 : _a18.security);
    });
    const securitySchemes = computed(() => {
      var _a18, _b17, _c;
      return mergeSecurity(((_b17 = (_a18 = __props.document) == null ? void 0 : _a18.components) == null ? void 0 : _b17.securitySchemes) ?? {}, (_c = __props.options.authentication) == null ? void 0 : _c.securitySchemes, __props.authStore, __props.name);
    });
    const selectedSecurity = computed(() => {
      var _a18;
      return getSelectedSecurity(__props.authStore.getAuthSelectedSchemas({
        type: "document",
        documentName: __props.name
      }), void 0, securityRequirements.value, securitySchemes.value, (_a18 = __props.options.authentication) == null ? void 0 : _a18.preferredSecurityScheme);
    });
    const focusRef = shallowRef();
    const { focused } = useFocusWithin(focusRef);
    watch(focused, (isFocused) => {
      if (!isFocused) return;
      workspaceStore.update("x-scalar-active-document", __props.name);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "focusRef",
        ref: focusRef,
        tabindex: "0"
      }, [Object.keys(securitySchemes.value).length ? (openBlock(), createBlock(unref(AuthSelector_default), {
        key: 0,
        authStore: __props.authStore,
        documentSlug: __props.name,
        environment: __props.environment,
        eventBus: __props.eventBus,
        isReadOnly: "",
        isStatic: "",
        layout: "reference",
        meta: { type: "document" },
        persistAuth: __props.options.persistAuth,
        proxyUrl: __props.options.proxyUrl ?? "",
        securityRequirements: securityRequirements.value,
        securitySchemes: securitySchemes.value,
        selectedSecurity: selectedSecurity.value,
        server: __props.selectedServer,
        title: "Authentication"
      }, null, 8, [
        "authStore",
        "documentSlug",
        "environment",
        "eventBus",
        "persistAuth",
        "proxyUrl",
        "securityRequirements",
        "securitySchemes",
        "selectedSecurity",
        "server"
      ])) : createCommentVNode("", true)], 512);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Settings/Auth.vue.js
var Auth_default = Auth_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/AskForAuthentication.vue.script.js
var _hoisted_13 = { class: "toggleButton" };
var _hoisted_2 = { class: "authContent" };
var _hoisted_3 = { class: "authContentInner" };
var AskForAuthentication_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AskForAuthentication",
  props: { messagePart: {} },
  setup(__props) {
    const { workspaceStore, eventBus, config, chat } = useState();
    const documentName = computed(() => {
      var _a18;
      return (_a18 = __props.messagePart.value.input) == null ? void 0 : _a18.documentName;
    });
    const document2 = computed(() => {
      if (!documentName.value) return;
      const doc = workspaceStore.workspace.documents[documentName.value];
      return isOpenApiDocument(doc) ? doc : void 0;
    });
    const environment = computed(() => {
      if (!document2.value) return;
      return getActiveEnvironment(workspaceStore, document2.value).environment;
    });
    const selectedServer = computed(() => {
      if (!document2.value) return;
      const servers = getServers(document2.value.servers, { documentUrl: document2.value["x-scalar-original-source-url"] });
      return getSelectedServer(document2.value, null, null, servers);
    });
    const isAuthenticationExpanded = computed(() => documentName.value && environment.value && selectedServer.value);
    async function authorizeClicked() {
      await chat.addToolOutput({
        toolCallId: __props.messagePart.value.toolCallId,
        output: "Authentication provided.",
        tool: ASK_FOR_AUTHENTICATION_TOOL_NAME,
        state: "output-available"
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass(["askForAuthentication", { open: isAuthenticationExpanded.value }]) }, [createBaseVNode("div", _hoisted_13, [
        __props.messagePart.value.state === "output-available" ? (openBlock(), createBlock(AuthenticationProvided_default, { key: 0 })) : createCommentVNode("", true),
        __props.messagePart.value.state === "input-available" ? (openBlock(), createBlock(AuthenticationRequired_default, { key: 1 })) : createCommentVNode("", true),
        __props.messagePart.value.state === "input-available" ? (openBlock(), createBlock(unref(ScalarButton_default), {
          key: 2,
          class: "authorizeButton",
          size: "xs",
          onClick: authorizeClicked
        }, {
          default: withCtx(() => [_cache[0] || (_cache[0] = createTextVNode(" Authorize ", -1)), createVNode(unref(ScalarIconArrowRight_default), { weight: "bold" })]),
          _: 1
        })) : createCommentVNode("", true)
      ]), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [documentName.value && document2.value && environment.value && selectedServer.value ? (openBlock(), createBlock(Auth_default, {
        key: 0,
        authStore: unref(workspaceStore).auth,
        document: document2.value,
        environment: environment.value,
        eventBus: unref(eventBus),
        name: documentName.value,
        options: unref(config),
        selectedServer: selectedServer.value
      }, null, 8, [
        "authStore",
        "document",
        "environment",
        "eventBus",
        "name",
        "options",
        "selectedServer"
      ])) : createCommentVNode("", true)])])], 2);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/AskForAuthentication.vue.js
var AskForAuthentication_default = _plugin_vue_export_helper_default(AskForAuthentication_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-19cedfcd"]]);

// node_modules/@scalar/agent-chat/dist/components/AutosendPaused.vue.js
var _sfc_main3 = {};
var _hoisted_14 = { class: "autosendPaused" };
function _sfc_render3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_14, [..._cache[0] || (_cache[0] = [createStaticVNode('<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-v-d08225db><rect height="14.25" rx="7.125" width="14.25" x="0.875" y="0.875" data-v-d08225db></rect><rect height="14.25" rx="7.125" stroke="currentColor" stroke-width="1.5" width="14.25" x="0.875" y="0.875" data-v-d08225db></rect><g clip-path="url(#clip0_74_585)" data-v-d08225db><path d="M10.75 5.5V10.5C10.75 10.6326 10.6973 10.7598 10.6036 10.8536C10.5098 10.9473 10.3826 11 10.25 11H9C8.86739 11 8.74021 10.9473 8.64645 10.8536C8.55268 10.7598 8.5 10.6326 8.5 10.5V5.5C8.5 5.36739 8.55268 5.24021 8.64645 5.14645C8.74021 5.05268 8.86739 5 9 5H10.25C10.3826 5 10.5098 5.05268 10.6036 5.14645C10.6973 5.24021 10.75 5.36739 10.75 5.5ZM7 5H5.75C5.61739 5 5.49021 5.05268 5.39645 5.14645C5.30268 5.24021 5.25 5.36739 5.25 5.5V10.5C5.25 10.6326 5.30268 10.7598 5.39645 10.8536C5.49021 10.9473 5.61739 11 5.75 11H7C7.13261 11 7.25979 10.9473 7.35355 10.8536C7.44732 10.7598 7.5 10.6326 7.5 10.5V5.5C7.5 5.36739 7.44732 5.24021 7.35355 5.14645C7.25979 5.05268 7.13261 5 7 5Z" fill="currentColor" data-v-d08225db></path></g><defs data-v-d08225db><clipPath id="clip0_74_585" data-v-d08225db><rect height="8" rx="4" width="8" x="4" y="4" data-v-d08225db></rect></clipPath></defs></svg> Accept Request to Continue ', 2)])]);
}
var AutosendPaused_default = _plugin_vue_export_helper_default(_sfc_main3, [["render", _sfc_render3], ["__scopeId", "data-v-d08225db"]]);

// node_modules/@scalar/agent-chat/dist/components/BuildingRequest.vue.js
var _sfc_main4 = {};
var _hoisted_15 = { class: "buildingRequest" };
function _sfc_render4(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_15, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, [createBaseVNode("svg", {
    fill: "currentColor",
    height: "32",
    viewBox: "0 0 256 256",
    width: "32",
    xmlns: "http://www.w3.org/2000/svg"
  }, [createBaseVNode("path", { d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" })])], -1), createTextVNode(" Building Request... ", -1)])]);
}
var BuildingRequest_default = _plugin_vue_export_helper_default(_sfc_main4, [["render", _sfc_render4], ["__scopeId", "data-v-5a1d2b16"]]);

// node_modules/@scalar/agent-chat/dist/components/RequestApproved.vue.js
var _sfc_main5 = {};
var _hoisted_16 = { class: "requestApproved" };
function _sfc_render5(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_16, [..._cache[0] || (_cache[0] = [createStaticVNode('<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-v-bb311586><rect height="14.25" rx="7.125" width="14.25" x="0.875" y="0.875" data-v-bb311586></rect><rect height="14.25" rx="7.125" stroke="var(--scalar-color-green)" stroke-width="1.75" width="14.25" x="0.875" y="0.875" data-v-bb311586></rect><g clip-path="url(#clip0_74_840)" data-v-bb311586><path d="M11.6037 6.841L7.59117 10.8535C7.49742 10.9472 7.37029 10.9998 7.23774 10.9998C7.10519 10.9998 6.97806 10.9472 6.8843 10.8535L4.64617 8.6035C4.55257 8.50975 4.5 8.38269 4.5 8.25022C4.5 8.11774 4.55257 7.99068 4.64617 7.89694L5.27117 7.27194C5.36488 7.17862 5.49174 7.12623 5.62399 7.12623C5.75623 7.12623 5.88309 7.17862 5.9768 7.27194L7.25024 8.50694L10.274 5.52037C10.3677 5.42696 10.4946 5.37451 10.627 5.37451C10.7593 5.37451 10.8862 5.42696 10.9799 5.52037L11.6034 6.131C11.6502 6.17746 11.6875 6.23274 11.7129 6.29366C11.7383 6.35458 11.7514 6.41993 11.7514 6.48593C11.7514 6.55194 11.7384 6.6173 11.713 6.67824C11.6877 6.73918 11.6505 6.7945 11.6037 6.841Z" fill="var(--scalar-color-green)" data-v-bb311586></path></g><defs data-v-bb311586><clipPath id="clip0_74_840" data-v-bb311586><rect height="8" rx="4" width="8" x="4" y="4" data-v-bb311586></rect></clipPath></defs></svg> Request Approved ', 2)])]);
}
var RequestApproved_default = _plugin_vue_export_helper_default(_sfc_main5, [["render", _sfc_render5], ["__scopeId", "data-v-bb311586"]]);

// node_modules/@scalar/agent-chat/dist/components/RequestFailed.vue.js
var _sfc_main6 = {};
var _hoisted_17 = { class: "requestFailed" };
function _sfc_render6(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_17, [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "requestFailedIcon" }, [createBaseVNode("svg", {
    fill: "currentColor",
    height: "100%",
    viewBox: "0 0 256 256",
    width: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, [createBaseVNode("path", { d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z" })])], -1), createTextVNode(" Request Failed ", -1)])]);
}
var RequestFailed_default = _plugin_vue_export_helper_default(_sfc_main6, [["render", _sfc_render6], ["__scopeId", "data-v-29140773"]]);

// node_modules/@scalar/agent-chat/dist/components/RequestRejected.vue.js
var _sfc_main7 = {};
var _hoisted_18 = { class: "requestRejected" };
function _sfc_render7(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_18, [..._cache[0] || (_cache[0] = [createBaseVNode("svg", {
    fill: "currentColor",
    height: "16",
    viewBox: "0 0 256 256",
    width: "16",
    xmlns: "http://www.w3.org/2000/svg"
  }, [createBaseVNode("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07l7.81,8.59A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81a108.08,108.08,0,0,0,112.55-8.66l7.8,8.58a12,12,0,0,0,17.76-16.14ZM128,212a83.91,83.91,0,0,1-42-11.27,12,12,0,0,0-9.82-1l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.82,84,84,0,0,1,7.94-95.49l111.84,123A83.83,83.83,0,0,1,128,212Zm108-84a107.22,107.22,0,0,1-8.65,42.4A12,12,0,0,1,205.28,161a84.07,84.07,0,0,0-102.77-113,12,12,0,0,1-7.27-22.87A108.08,108.08,0,0,1,236,128Z" })], -1), createTextVNode(" Request Rejected ", -1)])]);
}
var RequestRejected_default = _plugin_vue_export_helper_default(_sfc_main7, [["render", _sfc_render7], ["__scopeId", "data-v-9803a54c"]]);

// node_modules/@scalar/agent-chat/dist/components/RequestSuccess.vue.js
var _sfc_main8 = {};
var _hoisted_19 = { class: "requestSuccess" };
function _sfc_render8(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_19, [..._cache[0] || (_cache[0] = [createStaticVNode('<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" data-v-acc2c0d8><rect height="14.25" rx="7.125" width="14.25" x="0.875" y="0.875" data-v-acc2c0d8></rect><rect height="14.25" rx="7.125" stroke="currentColor" stroke-width="1.75" width="14.25" x="0.875" y="0.875" data-v-acc2c0d8></rect><g clip-path="url(#clip0_74_840)" data-v-acc2c0d8><path d="M11.6037 6.841L7.59117 10.8535C7.49742 10.9472 7.37029 10.9998 7.23774 10.9998C7.10519 10.9998 6.97806 10.9472 6.8843 10.8535L4.64617 8.6035C4.55257 8.50975 4.5 8.38269 4.5 8.25022C4.5 8.11774 4.55257 7.99068 4.64617 7.89694L5.27117 7.27194C5.36488 7.17862 5.49174 7.12623 5.62399 7.12623C5.75623 7.12623 5.88309 7.17862 5.9768 7.27194L7.25024 8.50694L10.274 5.52037C10.3677 5.42696 10.4946 5.37451 10.627 5.37451C10.7593 5.37451 10.8862 5.42696 10.9799 5.52037L11.6034 6.131C11.6502 6.17746 11.6875 6.23274 11.7129 6.29366C11.7383 6.35458 11.7514 6.41993 11.7514 6.48593C11.7514 6.55194 11.7384 6.6173 11.713 6.67824C11.6877 6.73918 11.6505 6.7945 11.6037 6.841Z" fill="currentColor" data-v-acc2c0d8></path></g><defs data-v-acc2c0d8><clipPath id="clip0_74_840" data-v-acc2c0d8><rect height="8" rx="4" width="8" x="4" y="4" data-v-acc2c0d8></rect></clipPath></defs></svg> Request Succeeded ', 2)])]);
}
var RequestSuccess_default = _plugin_vue_export_helper_default(_sfc_main8, [["render", _sfc_render8], ["__scopeId", "data-v-acc2c0d8"]]);

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/helpers/media-types.js
var mediaTypes = {
  "application/epub+zip": { extension: ".epub" },
  "application/gzip": { extension: ".gz" },
  "application/java-archive": { extension: ".jar" },
  "application/javascript": {
    extension: ".js",
    raw: true
  },
  "application/json": {
    extension: ".json",
    raw: true,
    language: "json"
  },
  "application/ld+json": {
    extension: ".jsonld",
    raw: true,
    language: "json"
  },
  "application/problem+json": {
    extension: ".json",
    raw: true,
    language: "json"
  },
  "application/vnd.api+json": {
    extension: ".json",
    raw: true,
    language: "json"
  },
  "application/dns-json": {
    extension: ".json",
    raw: true,
    language: "json"
  },
  "application/x-ndjson": {
    extension: ".ndjson",
    raw: true,
    language: "json"
  },
  "application/ndjson": {
    extension: ".ndjson",
    raw: true,
    language: "json"
  },
  "application/msword": { extension: ".doc" },
  "application/octet-stream": { extension: ".bin" },
  "application/ogg": { extension: ".ogx" },
  "application/pdf": {
    extension: ".pdf",
    preview: "object"
  },
  "application/rtf": {
    extension: ".rtf",
    raw: true
  },
  "application/vnd.amazon.ebook": { extension: ".azw" },
  "application/vnd.apple.installer+xml": {
    extension: ".mpkg",
    raw: true,
    language: "xml"
  },
  "application/vnd.mozilla.xul+xml": {
    extension: ".xul",
    raw: true,
    language: "xml"
  },
  "application/vnd.ms-excel": { extension: ".xls" },
  "application/vnd.ms-fontobject": { extension: ".eot" },
  "application/vnd.ms-powerpoint": { extension: ".ppt" },
  "application/vnd.oasis.opendocument.presentation": { extension: ".odp" },
  "application/vnd.oasis.opendocument.spreadsheet": { extension: ".ods" },
  "application/vnd.oasis.opendocument.text": { extension: ".odt" },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": { extension: ".pptx" },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { extension: ".xlsx" },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { extension: ".docx" },
  "application/vnd.rar": { extension: ".rar" },
  "application/vnd.visio": { extension: ".vsd" },
  "application/x-7z-compressed": { extension: ".7z" },
  "application/x-abiword": { extension: ".abw" },
  "application/x-bzip": { extension: ".bz" },
  "application/x-bzip2": { extension: ".bz2" },
  "application/x-cdf": { extension: ".cda" },
  "application/x-csh": { extension: ".csh" },
  "application/x-freearc": { extension: ".arc" },
  "application/x-httpd-php": {
    extension: ".php",
    raw: true
  },
  "application/x-sh": {
    extension: ".sh",
    raw: true
  },
  "application/x-tar": { extension: ".tar" },
  "application/xhtml+xml": {
    extension: ".xhtml",
    raw: true,
    language: "html"
  },
  "application/xml": {
    extension: ".xml",
    raw: true,
    language: "xml"
  },
  "application/yaml": {
    extension: ".yaml",
    raw: true,
    language: "yaml"
  },
  "application/zip": { extension: ".zip" },
  "audio/aac": { extension: ".aac" },
  "audio/midi": { extension: ".midi" },
  "audio/mpeg": {
    extension: ".mp3",
    preview: "audio"
  },
  "audio/ogg": { extension: ".oga" },
  "audio/wav": { extension: ".wav" },
  "audio/webm": { extension: ".weba" },
  "font/otf": { extension: ".otf" },
  "font/ttf": { extension: ".ttf" },
  "font/woff": { extension: ".woff" },
  "font/woff2": { extension: ".woff2" },
  "image/apng": {
    extension: ".apng",
    preview: "image",
    alpha: true
  },
  "image/avif": {
    extension: ".avif",
    preview: "image"
  },
  "image/bmp": {
    extension: ".bmp",
    preview: "image"
  },
  "image/gif": {
    extension: ".gif",
    preview: "image",
    alpha: true
  },
  "image/jpeg": {
    extension: ".jpg",
    preview: "image"
  },
  "image/png": {
    extension: ".png",
    preview: "image",
    alpha: true
  },
  "image/svg+xml": {
    extension: ".svg",
    raw: true,
    language: "xml",
    preview: "image",
    alpha: true
  },
  "image/tiff": { extension: ".tiff" },
  "image/vnd.microsoft.icon": {
    extension: ".ico",
    preview: "image"
  },
  "image/webp": {
    extension: ".webp",
    preview: "image",
    alpha: true
  },
  "text/calendar": {
    extension: ".ics",
    raw: true
  },
  "text/css": {
    extension: ".css",
    raw: true,
    language: "css"
  },
  "text/csv": {
    extension: ".csv",
    raw: true
  },
  "text/html": {
    extension: ".html",
    raw: true,
    language: "html",
    preview: "object"
  },
  "text/javascript": {
    extension: ".js",
    raw: true
  },
  "text/plain": {
    extension: ".txt",
    raw: true
  },
  "text/xml": {
    extension: ".xml",
    raw: true,
    language: "xml"
  },
  "text/yaml": {
    extension: ".yaml",
    raw: true,
    language: "yaml"
  },
  "video/3gpp": { extension: ".3gp" },
  "audio/3gpp": { extension: ".3gp" },
  "video/3gpp2": { extension: ".3g2" },
  "audio/3gpp2": { extension: ".3g2" },
  "video/mp2t": { extension: ".ts" },
  "video/mp4": {
    extension: ".mp4",
    preview: "video"
  },
  "video/mpeg": { extension: ".mpeg" },
  "video/ogg": { extension: ".ogv" },
  "video/webm": {
    extension: ".webm",
    preview: "video"
  },
  "video/x-msvideo": { extension: ".avi" }
};
function getMediaTypeConfig(type) {
  const config = mediaTypes[type];
  if (config) return config;
  if (type.endsWith("+json")) return {
    extension: ".json",
    raw: true,
    language: "json"
  };
}

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/helpers/process-response-body.js
var decodeURIComponentSafe = (str) => {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
};
function extractFilename(contentDisposition) {
  var _a18, _b17;
  let filename = "";
  if (contentDisposition) {
    const fileNameMatch = ((_a18 = contentDisposition.match(/filename\*=UTF-8''([^;]+)/)) == null ? void 0 : _a18[1]) ?? ((_b17 = contentDisposition.match(/filename\s*=\s*"?([^";]+)"?/)) == null ? void 0 : _b17[1]);
    if (fileNameMatch) filename = decodeURIComponentSafe(fileNameMatch.trim());
  }
  return filename;
}
var isBlob = (b) => b instanceof Blob;
var getResponseHeaders = (headers) => {
  return headers ? Object.keys(headers).map((key) => ({
    name: key,
    value: headers[key] ?? ""
  })) : [];
};
function processResponseBody({ data, headers }) {
  var _a18;
  const responseHeaders = getResponseHeaders(headers);
  const contentType = responseHeaders.find((header) => header.name.toLowerCase() === "content-type");
  const mimeType = (contentType == null ? void 0 : contentType.value) ? parseMimeType(contentType.value) : void 0;
  return {
    mimeType,
    attachmentFilename: extractFilename(((_a18 = responseHeaders.find((header) => header.name.toLowerCase() === "content-disposition")) == null ? void 0 : _a18.value) ?? ""),
    dataUrl: (() => {
      if (isBlob(data)) return URL.createObjectURL(data);
      if (typeof data === "string") return URL.createObjectURL(new Blob([data], { type: mimeType ? mimeType.toString() : void 0 }));
      if (data instanceof Object && Object.keys(data).length) return URL.createObjectURL(new Blob([JSON.stringify(data)], { type: mimeType ? mimeType.toString() : void 0 }));
      return "";
    })()
  };
}

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyInfo.vue.js
var _sfc_main9 = {};
var _hoisted_110 = { class: "flex justify-center px-2 py-3" };
var _hoisted_22 = { class: "text-c-3 p-2 text-sm" };
function _sfc_render9(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_110, [createBaseVNode("div", _hoisted_22, [renderSlot(_ctx.$slots, "default")])]);
}
var ResponseBodyInfo_default = _plugin_vue_export_helper_default(_sfc_main9, [["render", _sfc_render9]]);

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyPreview.vue.script.js
var _hoisted_111 = ["src"];
var _hoisted_23 = ["src", "type"];
var _hoisted_32 = ["src", "type"];
var _hoisted_4 = ["data", "type"];
var ResponseBodyPreview_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ResponseBodyPreview",
  props: {
    src: {},
    type: {},
    mode: {},
    alpha: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const error = ref(false);
    watch(() => __props.src, () => {
      error.value = false;
    });
    return (_ctx, _cache) => {
      return !error.value && __props.src ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["flex justify-center overflow-auto rounded-b", { "bg-preview p-2": __props.alpha }])
      }, [__props.mode === "image" ? (openBlock(), createElementBlock("img", {
        key: 0,
        class: normalizeClass(["h-full max-w-full", { rounded: __props.alpha }]),
        src: __props.src,
        onError: _cache[0] || (_cache[0] = ($event) => error.value = true)
      }, null, 42, _hoisted_111)) : __props.mode === "video" ? (openBlock(), createElementBlock("video", {
        key: 1,
        autoplay: "",
        controls: "",
        width: "100%",
        onError: _cache[1] || (_cache[1] = ($event) => error.value = true)
      }, [createBaseVNode("source", {
        src: __props.src,
        type: __props.type
      }, null, 8, _hoisted_23)], 32)) : __props.mode === "audio" ? (openBlock(), createElementBlock("audio", {
        key: 2,
        class: "my-12",
        controls: "",
        onError: _cache[2] || (_cache[2] = ($event) => error.value = true)
      }, [createBaseVNode("source", {
        src: __props.src,
        type: __props.type
      }, null, 8, _hoisted_32)], 32)) : (openBlock(), createElementBlock("object", {
        key: 3,
        class: "aspect-[4/3] w-full",
        data: __props.src,
        type: __props.type,
        onError: _cache[3] || (_cache[3] = ($event) => error.value = true)
      }, null, 40, _hoisted_4))], 2)) : (openBlock(), createBlock(ResponseBodyInfo_default, { key: 1 }, {
        default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Preview unavailable", -1)])]),
        _: 1
      }));
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyPreview.vue.js
var ResponseBodyPreview_default = _plugin_vue_export_helper_default(ResponseBodyPreview_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-92f84612"]]);

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyRaw.vue.script.js
var ResponseBodyRaw_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ResponseBodyRaw",
  props: {
    content: {},
    language: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarCodeBlock_default), {
        class: "codeBlock",
        content: props.content,
        lang: __props.language
      }, null, 8, ["content", "lang"]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyRaw.vue.js
var ResponseBodyRaw_default = ResponseBodyRaw_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBody.vue.script.js
var ResponseBody_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ResponseBody",
  props: {
    data: {},
    responseBody: {},
    mediaConfig: {},
    display: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a18, _b17, _c, _d, _e;
      return openBlock(), createElementBlock(Fragment, null, [
        ((_a18 = __props.mediaConfig) == null ? void 0 : _a18.raw) && __props.display === "raw" && __props.mediaConfig.language ? (openBlock(), createBlock(ResponseBodyRaw_default, {
          key: __props.responseBody.dataUrl,
          content: __props.data,
          language: __props.mediaConfig.language
        }, null, 8, ["content", "language"])) : createCommentVNode("", true),
        ((_b17 = __props.mediaConfig) == null ? void 0 : _b17.preview) && __props.display === "preview" ? (openBlock(), createBlock(ResponseBodyPreview_default, {
          key: __props.responseBody.dataUrl,
          alpha: __props.mediaConfig.alpha,
          mode: __props.mediaConfig.preview,
          src: __props.responseBody.dataUrl,
          type: ((_c = __props.responseBody.mimeType) == null ? void 0 : _c.essence) ?? ""
        }, null, 8, [
          "alpha",
          "mode",
          "src",
          "type"
        ])) : createCommentVNode("", true),
        !((_d = __props.mediaConfig) == null ? void 0 : _d.raw) && !((_e = __props.mediaConfig) == null ? void 0 : _e.preview) ? (openBlock(), createBlock(ResponseBodyInfo_default, { key: 2 }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" Binary file ", -1)])]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBody.vue.js
var ResponseBody_default = ResponseBody_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyToggle.vue.script.js
var _hoisted_112 = { class: "text-c-3 text-xxs -my-1 flex justify-center gap-0.5 rounded p-0.5" };
var ResponseBodyToggle_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ResponseBodyToggle",
  props: { modelValue: {} },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_112, [createBaseVNode("button", {
        class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": __props.modelValue === "preview" }]),
        type: "button",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("toggle", "preview"), ["stop"]))
      }, " Preview ", 2), createBaseVNode("button", {
        class: normalizeClass(["hover:bg-b-3 rounded px-1", { "bg-b-3 text-c-1 cursor-default": __props.modelValue === "raw" }]),
        type: "button",
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("toggle", "raw"), ["stop"]))
      }, " Raw ", 2)]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ResponseBody/ResponseBodyToggle.vue.js
var ResponseBodyToggle_default = ResponseBodyToggle_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/components/SendingRequest.vue.js
var _sfc_main10 = {};
var _hoisted_113 = { class: "sendingRequest" };
function _sfc_render10(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_113, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, [createBaseVNode("svg", {
    fill: "currentColor",
    height: "32",
    viewBox: "0 0 256 256",
    width: "32",
    xmlns: "http://www.w3.org/2000/svg"
  }, [createBaseVNode("path", { d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" })])], -1), createTextVNode(" Sending Request to Endpoint ", -1)])]);
}
var SendingRequest_default = _plugin_vue_export_helper_default(_sfc_main10, [["render", _sfc_render10], ["__scopeId", "data-v-a375f414"]]);

// node_modules/@scalar/agent-chat/dist/components/RequestPreview.vue.script.js
var _hoisted_114 = {
  key: 1,
  class: "autosendContainer"
};
var _hoisted_24 = {
  key: 2,
  class: "autosendContainer"
};
var _hoisted_33 = { class: "requestContent" };
var _hoisted_42 = { class: "requestContentInner" };
var _hoisted_5 = {
  key: 0,
  class: "code"
};
var _hoisted_6 = {
  key: 1,
  class: "code"
};
var _hoisted_7 = { class: "requestHeaderContainer" };
var RequestPreview_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "RequestPreview",
  props: {
    request: {},
    response: {},
    state: {}
  },
  setup(__props) {
    const responseData = computed(() => {
      var _a18, _b17, _c;
      if ((_a18 = __props.response) == null ? void 0 : _a18.success) return {
        data: __props.response.data.responseBody,
        headers: __props.response.data.headers
      };
      if (((_c = (_b17 = __props.response) == null ? void 0 : _b17.error) == null ? void 0 : _c.code) === "REQUEST_NOT_OK") return {
        data: __props.response.error.detail.responseBody,
        headers: __props.response.error.detail.headers
      };
    });
    const showRequestToggle = ref(false);
    const shouldShowRequest = computed(() => {
      if (__props.state === "requestFailed" || __props.state === "requiresApproval") return true;
      return showRequestToggle.value;
    });
    const responseBody = computed(() => {
      var _a18, _b17;
      return processResponseBody({
        data: (_a18 = responseData.value) == null ? void 0 : _a18.data,
        headers: (_b17 = responseData.value) == null ? void 0 : _b17.headers
      });
    });
    const mediaConfig = computed(() => {
      var _a18;
      return getMediaTypeConfig(((_a18 = responseBody.value.mimeType) == null ? void 0 : _a18.essence) ?? "");
    });
    const displayToggle = ref();
    function toggleDisplay(mode) {
      displayToggle.value = mode;
    }
    const displayMode = computed(() => {
      var _a18, _b17;
      if (displayToggle.value) return displayToggle.value;
      if (((_a18 = mediaConfig.value) == null ? void 0 : _a18.raw) && !mediaConfig.value.preview) return "raw";
      if ((_b17 = mediaConfig.value) == null ? void 0 : _b17.preview) return "preview";
      return "raw";
    });
    return (_ctx, _cache) => {
      var _a18;
      return openBlock(), createElementBlock("div", { class: normalizeClass(["requestPreview", {
        open: shouldShowRequest.value,
        succeeded: __props.state === "requestSucceeded"
      }]) }, [__props.state === "approved" ? (openBlock(), createBlock(RequestApproved_default, { key: 0 })) : __props.state === "buildingRequest" ? (openBlock(), createElementBlock("div", _hoisted_114, [createVNode(BuildingRequest_default)])) : __props.state === "requiresApproval" ? (openBlock(), createElementBlock("div", _hoisted_24, [createVNode(AutosendPaused_default)])) : __props.state === "sendingRequest" ? (openBlock(), createElementBlock("button", {
        key: 3,
        class: "toggleButton",
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => showRequestToggle.value = !showRequestToggle.value)
      }, [createVNode(SendingRequest_default), shouldShowRequest.value ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))])) : __props.state === "requestSucceeded" ? (openBlock(), createElementBlock("button", {
        key: 4,
        class: "toggleButton",
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => showRequestToggle.value = !showRequestToggle.value)
      }, [createVNode(RequestSuccess_default), shouldShowRequest.value ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))])) : __props.state === "rejected" ? (openBlock(), createElementBlock("button", {
        key: 5,
        class: "toggleButton",
        type: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => showRequestToggle.value = !showRequestToggle.value)
      }, [createVNode(RequestRejected_default), shouldShowRequest.value ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))])) : __props.state === "requestFailed" ? (openBlock(), createBlock(RequestFailed_default, { key: 6 })) : createCommentVNode("", true), createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_42, [__props.request ? (openBlock(), createElementBlock("div", _hoisted_5, [_cache[4] || (_cache[4] = createBaseVNode("div", { class: "requestHeaderContainer" }, [createBaseVNode("h1", null, "Request")], -1)), createVNode(unref(ScalarCodeBlock_default), {
        class: "codeBlock",
        content: JSON.stringify(__props.request, null, 2),
        lang: "json"
      }, null, 8, ["content"])])) : createCommentVNode("", true), responseData.value ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[5] || (_cache[5] = createBaseVNode("h1", null, "Response", -1)), ((_a18 = mediaConfig.value) == null ? void 0 : _a18.raw) && mediaConfig.value.preview ? (openBlock(), createBlock(ResponseBodyToggle_default, {
        key: 0,
        modelValue: displayMode.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => displayMode.value = $event),
        onToggle: toggleDisplay
      }, null, 8, ["modelValue"])) : createCommentVNode("", true)]), createVNode(ResponseBody_default, {
        data: responseData.value.data,
        display: displayMode.value,
        mediaConfig: mediaConfig.value,
        responseBody: responseBody.value
      }, null, 8, [
        "data",
        "display",
        "mediaConfig",
        "responseBody"
      ])])) : createCommentVNode("", true)])])], 2);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/RequestPreview.vue.js
var RequestPreview_default = _plugin_vue_export_helper_default(RequestPreview_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1e1f4549"]]);

// node_modules/@scalar/agent-chat/dist/hooks/use-chat-approvals.js
function requestPartRequiresApproval(part) {
  var _a18, _b17;
  return part.type === `tool-execute-request` && part.state === "input-available" && ((_b17 = (_a18 = part.input) == null ? void 0 : _a18.method) == null ? void 0 : _b17.toLowerCase()) !== "get";
}
function useRequestApprovals() {
  const state = useState();
  const approvalRequiredParts = computed(() => {
    return state.chat.messages.filter((message) => message.parts.some(requestPartRequiresApproval)).flatMap((message) => message.parts).filter(requestPartRequiresApproval);
  });
  async function respondToRequestApprovals(approved) {
    const approvalPromises = approvalRequiredParts.value.map(async (toolPart) => {
      if (!approved) return await state.chat.addToolOutput({
        tool: EXECUTE_CLIENT_SIDE_REQUEST_TOOL_NAME,
        toolCallId: toolPart.toolCallId,
        state: "output-error",
        errorText: "The user denied the request."
      });
      await executeRequestTool({
        documentSettings: createDocumentSettings(state.workspaceStore),
        proxyUrl: state.proxyUrl.value,
        input: toolPart.input,
        toolCallId: toolPart.toolCallId,
        chat: state.chat
      });
    });
    await Promise.all(approvalPromises);
  }
  return {
    approvalRequiredParts,
    respondToRequestApprovals
  };
}

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/ExecuteRequestTool.vue.script.js
var _hoisted_115 = { class: "executeRequestTool" };
var ExecuteRequestTool_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExecuteRequestTool",
  props: { messagePart: {} },
  setup(__props) {
    const state = useState();
    const requestState = computed(() => {
      if (__props.messagePart.value.state === "input-streaming") return "buildingRequest";
      if (__props.messagePart.value.state === "approval-responded" && state.chat.status === "submitted") return "sendingRequest";
      if (requestPartRequiresApproval(__props.messagePart.value)) return "requiresApproval";
      if (__props.messagePart.value.state === "output-available") return __props.messagePart.value.output.success ? "requestSucceeded" : "requestFailed";
      if (__props.messagePart.value.state === "output-error") return "rejected";
      return null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_115, [requestState.value ? (openBlock(), createBlock(RequestPreview_default, {
        key: 0,
        request: __props.messagePart.value.input,
        response: __props.messagePart.value.output,
        state: requestState.value
      }, null, 8, [
        "request",
        "response",
        "state"
      ])) : createCommentVNode("", true)]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/ExecuteRequestTool.vue.js
var ExecuteRequestTool_default = _plugin_vue_export_helper_default(ExecuteRequestTool_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9025b7d4"]]);

// node_modules/@scalar/agent-chat/dist/components/LoadingOpenAPISpecsSummary.vue.js
var _sfc_main11 = {};
var _hoisted_116 = { class: "loadingApiSpecs" };
function _sfc_render11(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_116, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, null, -1), createTextVNode(" Loading APIs... ", -1)])]);
}
var LoadingOpenAPISpecsSummary_default = _plugin_vue_export_helper_default(_sfc_main11, [["render", _sfc_render11], ["__scopeId", "data-v-0248d9dc"]]);

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/GetOpenAPISpecsSummary.vue.script.js
var _hoisted_117 = { key: 0 };
var GetOpenAPISpecsSummary_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "GetOpenAPISpecsSummary",
  props: {
    messagePart: {},
    message: {}
  },
  setup(__props) {
    const messageFinished = ref(false);
    watch(() => __props.message, () => {
      const parts = __props.message.parts;
      const index = parts.findIndex((part) => "toolCallId" in part && part.toolCallId === __props.messagePart.value.toolCallId);
      messageFinished.value = Boolean(parts[index + 1]);
    });
    return (_ctx, _cache) => {
      return !messageFinished.value ? (openBlock(), createElementBlock("div", _hoisted_117, [createVNode(LoadingOpenAPISpecsSummary_default)])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/GetOpenAPISpecsSummary.vue.js
var GetOpenAPISpecsSummary_default = GetOpenAPISpecsSummary_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/components/ContextItem.vue.script.js
var _hoisted_118 = { class: "contextItemText" };
var ContextItem_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ContextItem",
  props: { loading: { type: Boolean } },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass(["contextItem", { shimmer: __props.loading }]) }, [createBaseVNode("span", _hoisted_118, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 2);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ContextItem.vue.js
var ContextItem_default = _plugin_vue_export_helper_default(ContextItem_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0509fef2"]]);

// node_modules/@scalar/agent-chat/dist/components/LoadingSearchOpenAPIOperations.vue.js
var _sfc_main12 = {};
var _hoisted_119 = { class: "sendingRequest" };
function _sfc_render12(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_119, [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "playIcon" }, null, -1), createTextVNode(" Retrieving relevant information... ", -1)])]);
}
var LoadingSearchOpenAPIOperations_default = _plugin_vue_export_helper_default(_sfc_main12, [["render", _sfc_render12], ["__scopeId", "data-v-43864661"]]);

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/SearchOpenAPIOperationsTool.vue.script.js
var _hoisted_120 = { key: 0 };
var _hoisted_25 = {
  key: 1,
  class: "operations"
};
var _hoisted_34 = { class: "overflowPopover" };
var MAX_VISIBLE = 5;
var SearchOpenAPIOperationsTool_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SearchOpenAPIOperationsTool",
  props: {
    messagePart: {},
    message: {}
  },
  setup(__props) {
    const messageFinished = ref(false);
    watch(() => __props.message, () => {
      const parts = __props.message.parts;
      const index = parts.findIndex((part) => "toolCallId" in part && part.toolCallId === __props.messagePart.value.toolCallId);
      messageFinished.value = Boolean(parts[index + 1]);
    });
    const operations = computed(() => {
      if (!__props.messagePart.value.output) return;
      return __props.messagePart.value.output.flatMap((spec) => {
        var _a18;
        const title = (_a18 = spec.info) == null ? void 0 : _a18.title;
        return getOperations(spec).map((operation) => `${title ? `${title} - ` : ""}${operation.summary ?? ""}`).filter(Boolean);
      });
    });
    const visibleOperations = computed(() => {
      var _a18;
      return (_a18 = operations.value) == null ? void 0 : _a18.slice(0, MAX_VISIBLE);
    });
    const hiddenOperations = computed(() => {
      var _a18;
      return ((_a18 = operations.value) == null ? void 0 : _a18.slice(MAX_VISIBLE)) ?? [];
    });
    const state = useState();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [__props.messagePart.value.state === "input-available" && unref(state).chat.status === "streaming" ? (openBlock(), createElementBlock("div", _hoisted_120, [createVNode(LoadingSearchOpenAPIOperations_default)])) : createCommentVNode("", true), operations.value ? (openBlock(), createElementBlock("div", _hoisted_25, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleOperations.value, (operation) => {
        return openBlock(), createBlock(ContextItem_default, {
          key: operation,
          loading: !messageFinished.value
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(operation), 1)]),
          _: 2
        }, 1032, ["loading"]);
      }), 128)), hiddenOperations.value.length ? (openBlock(), createBlock(unref(ScalarPopover_default), {
        key: 0,
        placement: "bottom-start"
      }, {
        popover: withCtx(() => [createBaseVNode("div", _hoisted_34, [(openBlock(true), createElementBlock(Fragment, null, renderList(hiddenOperations.value, (operation) => {
          return openBlock(), createBlock(ContextItem_default, {
            key: operation,
            loading: !messageFinished.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(operation), 1)]),
            _: 2
          }, 1032, ["loading"]);
        }), 128))])]),
        default: withCtx(() => [createVNode(ContextItem_default, { loading: !messageFinished.value }, {
          default: withCtx(() => [createTextVNode(" +" + toDisplayString(hiddenOperations.value.length), 1)]),
          _: 1
        }, 8, ["loading"])]),
        _: 1
      })) : createCommentVNode("", true)])) : createCommentVNode("", true)], 64);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/SearchOpenAPIOperationsTool.vue.js
var SearchOpenAPIOperationsTool_default = _plugin_vue_export_helper_default(SearchOpenAPIOperationsTool_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-cbff70ed"]]);

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/Text.vue.script.js
var Text_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Text",
  props: { messagePart: {} },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarMarkdown_default), { value: __props.messagePart.value.text }, null, 8, ["value"]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Chat/Messages/Text.vue.js
var Text_default = Text_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/entities/error/constants.js
var AgentErrorCodes = { LIMIT_REACHED: "LIMIT_REACHED" };

// node_modules/@scalar/agent-chat/dist/entities/prompt/constants.js
var MAX_PROMPT_SIZE = 1e4;

// node_modules/@scalar/agent-chat/dist/hooks/use-search.js
function useSearch() {
  const { api } = useState();
  const queryRef = ref("");
  const search = useDebounceFn(async (q) => {
    const searchResponse = await api.search(q);
    if (!searchResponse.success) return;
    results.value = searchResponse.data.results;
  }, 200);
  const query = computed({
    get: () => {
      return queryRef.value;
    },
    set: (v) => {
      search(v);
      queryRef.value = v;
    }
  });
  const results = ref([]);
  search("");
  return {
    query,
    results
  };
}

// node_modules/@scalar/agent-chat/dist/views/Catalog/Catalog.vue.script.js
var _hoisted_121 = {
  key: 0,
  class: "catalog custom-scroll"
};
var _hoisted_26 = ["onClick"];
var _hoisted_35 = { class: "left" };
var _hoisted_43 = ["src"];
var _hoisted_52 = { class: "right" };
var _hoisted_62 = { class: "item-top" };
var _hoisted_72 = { class: "version" };
var _hoisted_8 = { class: "description" };
var Catalog_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Catalog",
  props: { modal: {} },
  setup(__props) {
    const search = useSearch();
    const state = useState();
    const searchOptions = computed(() => search.results.value.filter((r) => {
      return !state.registryDocuments.value.some((d) => d.namespace === r.namespace && d.slug === r.slug);
    }).map((result) => ({
      ...result,
      label: result.title,
      id: result.id
    })));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarModal_default), {
        class: "catalogModal",
        state: __props.modal
      }, {
        default: withCtx(() => [createVNode(unref(ScalarSearchInput_default), {
          autofocus: "",
          class: "searchInput",
          modelValue: unref(search).query.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => unref(search).query.value = v ?? "")
        }, null, 8, ["modelValue"]), searchOptions.value.length ? (openBlock(), createElementBlock("div", _hoisted_121, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchOptions.value, (option) => {
          return openBlock(), createElementBlock("button", {
            key: option.id,
            class: "item",
            type: "button",
            onClick: () => {
              unref(state).addDocument(option);
              __props.modal.hide();
            }
          }, [createBaseVNode("div", _hoisted_35, [option.logoUrl ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "logo",
            src: option.logoUrl
          }, null, 8, _hoisted_43)) : (openBlock(), createBlock(unref(ScalarIcon_default), {
            key: 1,
            class: "logo",
            logo: "Openapi"
          }))]), createBaseVNode("div", _hoisted_52, [createBaseVNode("div", _hoisted_62, [createBaseVNode("span", null, toDisplayString(option.title), 1), createBaseVNode("span", _hoisted_72, "v" + toDisplayString(option.currentVersion), 1)]), createBaseVNode("span", _hoisted_8, " @" + toDisplayString(option.namespace) + "/" + toDisplayString(option.slug), 1)])], 8, _hoisted_26);
        }), 128))])) : createCommentVNode("", true)]),
        _: 1
      }, 8, ["state"]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Catalog/Catalog.vue.js
var Catalog_default = _plugin_vue_export_helper_default(Catalog_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-18b2aea2"]]);

// node_modules/@scalar/agent-chat/dist/components/ActionsDropdown.vue.script.js
var _hoisted_122 = { class: "dropdown-item" };
var _hoisted_27 = { class: "dropdown-item" };
var ActionsDropdown_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ActionsDropdown",
  emits: ["uploadApi"],
  setup(__props) {
    const catalogModal = useModal();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(ScalarDropdown_default), { offset: {
        crossAxis: -5,
        mainAxis: 5
      } }, {
        items: withCtx(() => [createVNode(unref(ScalarDropdownItem_default), { onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("uploadApi")) }, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_122, [createVNode(unref(ScalarIconUpload_default)), _cache[2] || (_cache[2] = createTextVNode(" Upload API ", -1))])]),
          _: 1
        }), createVNode(unref(ScalarDropdownItem_default), { onClick: _cache[1] || (_cache[1] = ($event) => unref(catalogModal).show()) }, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_27, [createVNode(unref(ScalarIconMagnifyingGlass_default)), _cache[3] || (_cache[3] = createTextVNode(" Search Catalog ", -1))])]),
          _: 1
        })]),
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
        _: 3
      }), unref(catalogModal).open ? (openBlock(), createBlock(Catalog_default, {
        key: 0,
        modal: unref(catalogModal)
      }, null, 8, ["modal"])) : createCommentVNode("", true)], 64);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ActionsDropdown.vue.js
var ActionsDropdown_default = _plugin_vue_export_helper_default(ActionsDropdown_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-e2c3bd19"]]);

// node_modules/@scalar/agent-chat/dist/components/ApprovalSection.vue.script.js
var _hoisted_123 = { class: "approvalSection" };
var _hoisted_28 = { class: "approvalText flex items-center gap-1.5" };
var _hoisted_36 = { class: "approveContainer" };
var ApprovalSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApprovalSection",
  emits: ["approve", "reject"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_123, [createBaseVNode("strong", _hoisted_28, [createVNode(unref(ScalarIconInfo_default), {
        class: "text-blue size-4",
        weight: "bold"
      }), _cache[2] || (_cache[2] = createTextVNode(" One or more requests require approval. ", -1))]), createBaseVNode("div", _hoisted_36, [createBaseVNode("button", {
        type: "button",
        class: "actionButton rejectButton",
        onClick: _cache[0] || (_cache[0] = ($event) => emit("reject"))
      }, " Reject "), createBaseVNode("button", {
        type: "button",
        class: "actionButton approveButton",
        onClick: _cache[1] || (_cache[1] = ($event) => emit("approve"))
      }, " Approve ")])]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ApprovalSection.vue.js
var ApprovalSection_default = _plugin_vue_export_helper_default(ApprovalSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-fb5102df"]]);

// node_modules/@scalar/agent-chat/dist/components/ErrorMessage.vue.script.js
var _hoisted_124 = {
  key: 0,
  class: "error gap-1.5"
};
var ErrorMessage_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ErrorMessage",
  props: { error: {} },
  setup(__props) {
    const HIDDEN_ERROR_CODES = [AgentErrorCodes.LIMIT_REACHED];
    return (_ctx, _cache) => {
      return !HIDDEN_ERROR_CODES.includes(__props.error.code) ? (openBlock(), createElementBlock("div", _hoisted_124, [createVNode(unref(ScalarIconInfo_default), {
        class: "text-red size-4",
        weight: "bold"
      }), createTextVNode(" " + toDisplayString(__props.error.message), 1)])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ErrorMessage.vue.js
var ErrorMessage_default = _plugin_vue_export_helper_default(ErrorMessage_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-130cb1d5"]]);

// node_modules/@scalar/agent-chat/dist/hooks/use-signup-link.js
function useSignupLink() {
  const { dashboardUrl, mode, uploadedTmpDocumentUrl } = useState();
  const signupLink = computed(() => {
    if (mode === "full") return dashboardUrl;
    return uploadedTmpDocumentUrl.value ? `${dashboardUrl}/register?flow=oss-agent&docUrl=${uploadedTmpDocumentUrl.value}` : dashboardUrl;
  });
  function navigateToSignup() {
    window.location.assign(signupLink.value);
  }
  return {
    signupLink,
    navigateToSignup
  };
}

// node_modules/@scalar/agent-chat/dist/components/FreeMessagesInfoSection.vue.script.js
var _hoisted_125 = { class: "freeMessagesInfoSection" };
var _hoisted_29 = { class: "infoText flex items-center gap-1.5" };
var _hoisted_37 = ["href"];
var _hoisted_44 = { class: "actionsContainer" };
var _hoisted_53 = ["href"];
var FreeMessagesInfoSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "FreeMessagesInfoSection",
  setup(__props) {
    const isDismissed = ref(false);
    const { signupLink } = useSignupLink();
    function dismiss() {
      isDismissed.value = true;
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_125, [createBaseVNode("strong", _hoisted_29, [
        createVNode(unref(ScalarIconInfo_default), {
          class: "text-blue size-4",
          weight: "bold"
        }),
        createBaseVNode("a", {
          class: "underline",
          href: unref(signupLink),
          target: "_blank"
        }, "Sign up for Agent Scalar", 8, _hoisted_37),
        _cache[0] || (_cache[0] = createTextVNode(" to continue without hitting limits. ", -1))
      ]), createBaseVNode("div", _hoisted_44, [createBaseVNode("a", {
        class: "actionButton upgradeButton",
        href: unref(URLS).AGENT_SCALAR_DOCUMENTATION,
        target: "_blank",
        type: "button"
      }, " Read more ", 8, _hoisted_53), createBaseVNode("button", {
        "aria-label": "Close",
        class: "closeButton",
        type: "button",
        onClick: dismiss
      }, [createVNode(unref(ScalarIconX_default), {
        class: "size-4",
        weight: "bold"
      })])])], 512)), [[vShow, !isDismissed.value]]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/FreeMessagesInfoSection.vue.js
var FreeMessagesInfoSection_default = _plugin_vue_export_helper_default(FreeMessagesInfoSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1921dede"]]);

// node_modules/@scalar/agent-chat/dist/components/PaymentSection.vue.script.js
var _hoisted_126 = { class: "paymentSection" };
var _hoisted_210 = { class: "approvalText flex items-center gap-1.5" };
var _hoisted_38 = { class: "paymentContainer" };
var PaymentSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "PaymentSection",
  setup(__props) {
    const { navigateToSignup } = useSignupLink();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_126, [createBaseVNode("strong", _hoisted_210, [createVNode(unref(ScalarIconInfo_default), {
        class: "text-blue size-4",
        weight: "bold"
      }), _cache[1] || (_cache[1] = createTextVNode(" You've used up your complimentary Scalar Credits. Sign up to get free Credits. ", -1))]), createBaseVNode("div", _hoisted_38, [createBaseVNode("button", {
        class: "actionButton approveButton",
        type: "button",
        onClick: _cache[0] || (_cache[0] = (...args) => unref(navigateToSignup) && unref(navigateToSignup)(...args))
      }, " Sign up "), _cache[2] || (_cache[2] = createStaticVNode('<div class="paymentInfo" data-v-9d163ea1><h3 data-v-9d163ea1>$0 <span data-v-9d163ea1>/ month</span></h3><div class="paymentInfoSection" data-v-9d163ea1><div class="paymentInfoItem" data-v-9d163ea1><span data-v-9d163ea1>Credits</span><span data-v-9d163ea1>100</span></div><div class="paymentInfoItem" data-v-9d163ea1><span data-v-9d163ea1>MCP Servers</span><span data-v-9d163ea1>Unlimited</span></div><div class="paymentInfoItem" data-v-9d163ea1><span data-v-9d163ea1>Base monthly total</span><span data-v-9d163ea1>$0.00</span></div></div><div class="paymentInfoSection" data-v-9d163ea1><div class="paymentInfoItem" data-v-9d163ea1><span data-v-9d163ea1>Additional Credits</span><span data-v-9d163ea1>+ $0.02 per Credit</span></div></div></div>', 1))])]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/PaymentSection.vue.js
var PaymentSection_default = _plugin_vue_export_helper_default(PaymentSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9d163ea1"]]);

// node_modules/@scalar/agent-chat/dist/components/SearchPopover.vue.script.js
var _hoisted_127 = ["onClick"];
var _hoisted_211 = ["src"];
var _hoisted_39 = {
  key: 1,
  class: "searchResultsEmpty"
};
var SearchPopover_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SearchPopover",
  setup(__props) {
    const state = useState();
    const search = useSearch();
    const searchOptions = computed(() => search.results.value.filter((r) => !state.registryDocuments.value.some((d) => d.namespace === r.namespace && d.slug === r.slug)).map((result) => ({
      ...result,
      label: result.title,
      id: result.id
    })));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarPopover_default), {
        offset: 0,
        placement: "top-start",
        resize: "",
        style: { "width": "220px" }
      }, {
        popover: withCtx(({ close }) => [createVNode(unref(ScalarTextInput_default), {
          autofocus: "",
          class: "searchInput",
          modelValue: unref(search).query.value,
          placeholder: "Add an API",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => unref(search).query.value = v ?? "")
        }, {
          prefix: withCtx(() => [createVNode(unref(ScalarIconMagnifyingGlass_default), { class: "searchIcon" })]),
          _: 1
        }, 8, ["modelValue"]), searchOptions.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(searchOptions.value, (option) => {
          return openBlock(), createElementBlock("button", {
            key: option.id,
            class: "searchItem",
            type: "button",
            onClick: () => {
              unref(state).addDocument(option);
              close();
            }
          }, [option.logoUrl ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "searchItemLogo",
            src: option.logoUrl
          }, null, 8, _hoisted_211)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(option.title), 1)], 8, _hoisted_127);
        }), 128)) : (openBlock(), createElementBlock("span", _hoisted_39, " No APIs found "))]),
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
        _: 3
      });
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/SearchPopover.vue.js
var SearchPopover_default = _plugin_vue_export_helper_default(SearchPopover_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-3e0405c7"]]);

// node_modules/@scalar/agent-chat/dist/components/UploadSection.vue.script.js
var _hoisted_128 = {
  key: 0,
  class: "flex items-center gap-1.5"
};
var _hoisted_212 = {
  key: 0,
  class: "uploadText"
};
var _hoisted_310 = {
  key: 1,
  class: "uploadText"
};
var _hoisted_45 = {
  key: 2,
  class: "uploadText"
};
var _hoisted_54 = {
  key: 1,
  class: "uploadText flex items-center gap-1.5"
};
var _hoisted_63 = {
  key: 2,
  class: "uploadText flex items-center gap-1.5"
};
var UploadSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "UploadSection",
  props: { uploadState: {} },
  setup(__props) {
    const loadingState = useLoadingState();
    const isLoading = computed(() => [
      "uploading",
      "processing",
      "loading"
    ].includes(__props.uploadState.type));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass(["uploadSection", {
        error: __props.uploadState.type === "error",
        done: __props.uploadState.type === "done"
      }]) }, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_128, [createVNode(unref(ScalarLoading_default), {
          class: "text-blue",
          loader: {
            ...unref(loadingState),
            isLoading: true
          },
          size: "lg"
        }, null, 8, ["loader"]), __props.uploadState.type === "loading" ? (openBlock(), createElementBlock("strong", _hoisted_212, " Loading OpenAPI document… ")) : __props.uploadState.type === "processing" ? (openBlock(), createElementBlock("strong", _hoisted_310, " Processing OpenAPI document… ")) : (openBlock(), createElementBlock("strong", _hoisted_45, " Uploading OpenAPI document… "))])) : createCommentVNode("", true),
        __props.uploadState.type === "done" ? (openBlock(), createElementBlock("strong", _hoisted_54, [createVNode(unref(ScalarIconCheck_default), { class: "icon text-green" }), _cache[0] || (_cache[0] = createTextVNode(" Your OpenAPI document has been processed successfully. ", -1))])) : createCommentVNode("", true),
        __props.uploadState.type === "error" ? (openBlock(), createElementBlock("strong", _hoisted_63, [createVNode(unref(ScalarIconXCircle_default), { class: "icon text-red" }), createTextVNode(" " + toDisplayString(__props.uploadState.error), 1)])) : createCommentVNode("", true)
      ], 2);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/UploadSection.vue.js
var UploadSection_default = _plugin_vue_export_helper_default(UploadSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9621c76b"]]);

// node_modules/@scalar/agent-chat/dist/hooks/use-chat-error.js
var chatErrorSchema = object({
  message: string(),
  code: string(),
  status: optional(number())
});
function useChatError() {
  const { chat } = useState();
  return computed(() => {
    if (!chat.error) return;
    const errorJson = safeParseJson(chat.error.message);
    if (!errorJson || !validate(chatErrorSchema, errorJson)) return {
      message: chat.error.message,
      code: "UNKNOWN_ERROR"
    };
    return coerce(chatErrorSchema, errorJson);
  });
}

// node_modules/@scalar/agent-chat/dist/hooks/use-chat-pending-client-tool-parts.js
function isPendingClientToolPart(part) {
  return part.type.startsWith("tool") && part.state === "input-available";
}
function useChatPendingClientToolParts() {
  const state = useState();
  return { pendingClientToolParts: computed(() => {
    return state.chat.messages.filter((message) => message.parts.some(isPendingClientToolPart)).flatMap((message) => message.parts).filter(isPendingClientToolPart);
  }) };
}

// node_modules/@scalar/agent-chat/dist/views/PromptForm.vue.script.js
var _hoisted_129 = { class: "actionContainer" };
var _hoisted_213 = ["disabled"];
var _hoisted_311 = { class: "inputActionsContainer" };
var _hoisted_46 = { class: "inputActionsLeft" };
var _hoisted_55 = {
  class: "addAPIButton",
  type: "button"
};
var _hoisted_64 = {
  class: "addAPIButton",
  type: "button"
};
var _hoisted_73 = ["src"];
var _hoisted_82 = ["onClick"];
var _hoisted_9 = { class: "inputActionsRight" };
var _hoisted_10 = { class: "sendCheckboxContinue" };
var _hoisted_11 = {
  key: 0,
  class: "relative flex items-center gap-1.5"
};
var _hoisted_1210 = {
  class: "termsAgree",
  for: "agentTermsAgree"
};
var _hoisted_132 = {
  key: 5,
  class: "addMoreContext"
};
var _hoisted_142 = { class: "ml-auto flex items-center gap-1" };
var _hoisted_152 = ["onClick"];
var _hoisted_162 = ["alt", "src"];
var PromptForm_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "PromptForm",
  emits: ["submit", "uploadApi"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    __expose({ focusPrompt });
    const promptRef = useTemplateRef("agentPrompt");
    const state = useState();
    const inputHasContent = computed(() => state.prompt.value.trim().length > 0);
    const promptTooLarge = computed(() => state.prompt.value.trim().length > MAX_PROMPT_SIZE);
    const showFreeMessagesInfo = computed(() => {
      var _a18, _b17;
      return state.chat.messages.length > 1 && !((_a18 = state.getAgentKey) == null ? void 0 : _a18.call(state)) && ((_b17 = chatError == null ? void 0 : chatError.value) == null ? void 0 : _b17.code) !== AgentErrorCodes.LIMIT_REACHED;
    });
    watch(state.prompt, () => {
      if (!(promptRef == null ? void 0 : promptRef.value)) return;
      if (!state.prompt.value.length) {
        promptRef.value.style.height = "0px";
        return;
      }
      promptRef.value.style.height = "auto";
      promptRef.value.style.height = promptRef.value.scrollHeight + "px";
    });
    function handlePromptKeydown(e) {
      if (e.isComposing) return;
      if (state.loading.value) return;
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
    function focusPrompt() {
      var _a18;
      (_a18 = promptRef.value) == null ? void 0 : _a18.focus();
    }
    watch(() => state.chat.status, (status) => {
      var _a18;
      if (status === "ready" || status === "error") (_a18 = promptRef.value) == null ? void 0 : _a18.focus();
    });
    const { approvalRequiredParts, respondToRequestApprovals } = useRequestApprovals();
    const { pendingClientToolParts } = useChatPendingClientToolParts();
    const uploadTmpDoc = useUploadTmpDocument();
    function acceptTerms() {
      state.terms.accept();
      if (state.mode === "preview" && state.getActiveDocumentJson) uploadTmpDoc.uploadTempDocument(state.getActiveDocumentJson(), true);
    }
    const isPending = computed(() => Object.values(state.pendingDocuments).some(Boolean));
    const submitDisabled = computed(() => {
      const tooLarge = promptTooLarge.value;
      const missingInput = !inputHasContent.value;
      const awaitingApproval = approvalRequiredParts.value.length > 0;
      const pendingToolParts = pendingClientToolParts.value.length > 0;
      const isPreview = state.mode === "preview";
      const termsNotAccepted = isPreview && !state.terms.accepted.value;
      const uploadingTmpDoc = isPreview && !!uploadTmpDoc.uploadState.value;
      const isLoading = isPending.value;
      return tooLarge || missingInput || awaitingApproval || pendingToolParts || termsNotAccepted || uploadingTmpDoc || isLoading;
    });
    function handleSubmit() {
      if (submitDisabled.value) return;
      emit("submit");
    }
    const chatError = useChatError();
    return (_ctx, _cache) => {
      var _a18, _b17;
      return openBlock(), createElementBlock("div", _hoisted_129, [
        unref(uploadTmpDoc).uploadState.value || isPending.value ? (openBlock(), createBlock(UploadSection_default, {
          key: 0,
          uploadState: unref(uploadTmpDoc).uploadState.value ?? { type: "loading" }
        }, null, 8, ["uploadState"])) : createCommentVNode("", true),
        unref(chatError) ? (openBlock(), createBlock(ErrorMessage_default, {
          key: 1,
          error: unref(chatError)
        }, null, 8, ["error"])) : createCommentVNode("", true),
        unref(approvalRequiredParts).length ? (openBlock(), createBlock(ApprovalSection_default, {
          key: 2,
          onApprove: _cache[0] || (_cache[0] = ($event) => unref(respondToRequestApprovals)(true)),
          onReject: _cache[1] || (_cache[1] = ($event) => unref(respondToRequestApprovals)(false))
        })) : createCommentVNode("", true),
        ((_a18 = unref(chatError)) == null ? void 0 : _a18.code) === unref(AgentErrorCodes).LIMIT_REACHED ? (openBlock(), createBlock(PaymentSection_default, { key: 3 })) : createCommentVNode("", true),
        showFreeMessagesInfo.value ? (openBlock(), createBlock(FreeMessagesInfoSection_default, { key: 4 })) : createCommentVNode("", true),
        createBaseVNode("form", {
          class: "promptForm",
          onSubmit: withModifiers(handleSubmit, ["prevent"])
        }, [
          _cache[6] || (_cache[6] = createBaseVNode("label", {
            class: "agentLabel",
            for: "agentTextarea"
          }, " Type a Request To get Started ", -1)),
          withDirectives(createBaseVNode("textarea", {
            id: "agentTextarea",
            ref: "agentPrompt",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(state).prompt.value = $event),
            class: "prompt custom-scroll",
            disabled: unref(state).loading.value,
            name: "prompt",
            placeholder: "Ask me anything…",
            onKeydown: handlePromptKeydown
          }, null, 40, _hoisted_213), [[vModelText, unref(state).prompt.value]]),
          createBaseVNode("div", _hoisted_311, [createBaseVNode("div", _hoisted_46, [!unref(state).hideAddApi ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!((_b17 = unref(state).isLoggedIn) == null ? void 0 : _b17.value) ? (openBlock(), createBlock(SearchPopover_default, { key: 0 }, {
            default: withCtx(() => [createBaseVNode("button", _hoisted_55, [createVNode(unref(ScalarIconPlus_default), {
              class: "size-4",
              weight: "bold"
            })])]),
            _: 1
          })) : (openBlock(), createBlock(ActionsDropdown_default, {
            key: 1,
            onUploadApi: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("uploadApi"))
          }, {
            default: withCtx(() => [createBaseVNode("button", _hoisted_64, [createVNode(unref(ScalarIconPlus_default), {
              class: "size-4",
              weight: "bold"
            })])]),
            _: 1
          }))], 64)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).registryDocuments.value, (document2) => {
            return openBlock(), createElementBlock("div", {
              key: document2.id,
              class: "apiPill"
            }, [
              document2.logoUrl ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "apiPillLogo",
                src: document2.logoUrl
              }, null, 8, _hoisted_73)) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(document2.title) + " ", 1),
              document2.removable ? (openBlock(), createElementBlock("button", {
                key: 1,
                class: "apiPillRemove",
                type: "button",
                onClick: ($event) => unref(state).removeDocument(document2)
              }, [createVNode(unref(ScalarIconX_default), {
                class: "size-4",
                weight: "bold"
              })], 8, _hoisted_82)) : createCommentVNode("", true)
            ]);
          }), 128))]), createBaseVNode("div", _hoisted_9, [!unref(state).loading.value ? (openBlock(), createBlock(unref(ScalarTooltip_default), {
            key: 0,
            content: "Settings"
          }, {
            default: withCtx(() => [createVNode(unref(ScalarIconButton_default), {
              class: "settingsButton h-7 w-7 p-1.5",
              icon: unref(ScalarIconLockSimple_default),
              label: "Scalar",
              size: "md",
              weight: "bold",
              onClick: _cache[4] || (_cache[4] = ($event) => unref(state).settingsModal.show())
            }, null, 8, ["icon"])]),
            _: 1
          })) : createCommentVNode("", true), createBaseVNode("div", _hoisted_10, [!unref(state).terms.accepted.value && unref(state).mode === "preview" ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("input", {
            id: "agentTermsAgree",
            class: "sr-only",
            type: "checkbox",
            onChange: acceptTerms
          }, null, 32), createBaseVNode("label", _hoisted_1210, [createVNode(unref(ScalarIconCheck_default), {
            class: "termsAgreeIcon",
            weight: "bold"
          }), _cache[5] || (_cache[5] = createTextVNode(" Agree to Terms & Conditions ", -1))])])) : createCommentVNode("", true), !unref(state).loading.value ? (openBlock(), createBlock(unref(ScalarIconButton_default), {
            key: 1,
            class: "sendButton h-7 w-7 p-1.5",
            disabled: submitDisabled.value,
            icon: unref(ScalarIconArrowUp_default),
            label: "Scalar",
            size: "md",
            type: "submit",
            weight: "bold"
          }, null, 8, ["disabled", "icon"])) : (openBlock(), createBlock(unref(ScalarLoading_default), {
            key: 2,
            class: "loader h-7 w-7",
            loader: {
              isLoading: unref(state).loading.value,
              isValid: false,
              clear: async () => {
              },
              invalidate: async () => {
              },
              isInvalid: false,
              isActive: false,
              validate: async () => {
              },
              start: () => {
              }
            },
            size: "2xl"
          }, null, 8, ["loader"]))])])])
        ], 32),
        unref(state).chat.messages.length <= 1 && !unref(state).hideAddApi ? (openBlock(), createElementBlock("div", _hoisted_132, [_cache[7] || (_cache[7] = createBaseVNode("span", null, "Load additional APIs", -1)), createBaseVNode("div", _hoisted_142, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).curatedDocuments.value, (doc) => {
          return openBlock(), createElementBlock("button", {
            key: doc.id,
            class: "addAPIContext",
            type: "button",
            onClick: ($event) => unref(state).addDocument(doc)
          }, [doc.logoUrl ? (openBlock(), createElementBlock("img", {
            key: 0,
            alt: doc.title,
            class: "size-4",
            src: doc.logoUrl
          }, null, 8, _hoisted_162)) : createCommentVNode("", true)], 8, _hoisted_152);
        }), 128))])])) : createCommentVNode("", true)
      ]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/PromptForm.vue.js
var PromptForm_default = _plugin_vue_export_helper_default(PromptForm_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ba1161a7"]]);

// node_modules/@scalar/agent-chat/dist/views/Chat/Chat.vue.script.js
var _hoisted_130 = { class: "chat" };
var _hoisted_214 = { key: 0 };
var _hoisted_312 = { class: "formContainer" };
var Chat_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Chat",
  emits: ["submit", "uploadApi"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const state = useState();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_130, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).chat.messages, (message) => {
        return openBlock(), createElementBlock(Fragment, { key: message.id }, [message.role === "user" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(message.parts, (part, index) => {
          return openBlock(), createElementBlock("div", {
            key: `${message.id}-${index}`,
            class: "userMessage"
          }, [part.type === "text" ? (openBlock(), createElementBlock("p", _hoisted_214, toDisplayString(part.text), 1)) : createCommentVNode("", true)]);
        }), 128)) : createCommentVNode("", true), message.role === "assistant" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(message.parts, (part, index) => {
          return openBlock(), createElementBlock("div", { key: `${message.id}-${index}` }, [
            part.type === "text" ? (openBlock(), createBlock(Text_default, {
              key: 0,
              messagePart: toRef(part)
            }, null, 8, ["messagePart"])) : createCommentVNode("", true),
            part.type === `tool-${unref("execute-request")}` ? (openBlock(), createBlock(ExecuteRequestTool_default, {
              key: 1,
              messagePart: toRef(part)
            }, null, 8, ["messagePart"])) : createCommentVNode("", true),
            part.type === `tool-${unref("search-openapi-operations")}` ? (openBlock(), createBlock(SearchOpenAPIOperationsTool_default, {
              key: 2,
              message: reactive(message),
              messagePart: toRef(part)
            }, null, 8, ["message", "messagePart"])) : createCommentVNode("", true),
            part.type === `tool-${unref("summarize-openapi-specs")}` ? (openBlock(), createBlock(GetOpenAPISpecsSummary_default, {
              key: 3,
              message: reactive(message),
              messagePart: toRef(part)
            }, null, 8, ["message", "messagePart"])) : createCommentVNode("", true),
            part.type === `tool-${unref("ask-for-authentication")}` ? (openBlock(), createBlock(AskForAuthentication_default, {
              key: 4,
              message: reactive(message),
              messagePart: toRef(part)
            }, null, 8, ["message", "messagePart"])) : createCommentVNode("", true)
          ]);
        }), 128)) : createCommentVNode("", true)], 64);
      }), 128)), _cache[2] || (_cache[2] = createBaseVNode("div", { class: "spacer" }, null, -1))]), createBaseVNode("div", _hoisted_312, [createVNode(PromptForm_default, {
        onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit")),
        onUploadApi: _cache[1] || (_cache[1] = ($event) => emit("uploadApi"))
      })])], 64);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Chat/Chat.vue.js
var Chat_default = _plugin_vue_export_helper_default(Chat_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-6573ec87"]]);

// node_modules/@scalar/agent-chat/dist/components/Logo.vue.js
var _sfc_main13 = {};
var _hoisted_131 = {
  fill: "none",
  height: "54",
  viewBox: "0 0 64 54",
  width: "64",
  xmlns: "http://www.w3.org/2000/svg"
};
function _sfc_render13(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_131, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
    "clip-rule": "evenodd",
    d: "M31.0667 0C40.2667 0 48.3333 6.13333 52.6 14.9333H57.2667C59.6 14.9333 61.5333 16.8 61.5333 19.1333V32.2C61.5333 33.4667 60.8667 34.6 60 35.3333L63.3333 45.4V45.4667C63.5639 46.207 63.6166 46.9912 63.4874 47.7557C63.3582 48.5202 63.0505 49.2435 62.5895 49.8669C62.1284 50.4903 61.5269 50.9962 60.8338 51.3437C60.1406 51.6911 59.3754 51.8703 58.6 51.8667H54.3333C53.9895 52.4222 53.5082 52.8797 52.936 53.195C52.3638 53.5103 51.72 53.6728 51.0667 53.6667H47.0667C46.5764 53.6755 46.0892 53.5877 45.6328 53.4082C45.1765 53.2287 44.76 52.961 44.4071 52.6205C44.0542 52.28 43.7719 51.8733 43.5762 51.4237C43.3805 50.9741 43.2753 50.4903 43.2667 50C43.2667 47.9333 44.9333 46.2667 47 46.2667H51.0667C52.4667 46.2667 53.7333 46.9333 54.3333 48.0667H58.6C59.3333 48.0667 59.9333 47.4 59.6667 46.6L56.3333 36.3333H51.3333C49.9333 36.3333 48.6 35.6667 47.8 34.5333V34.4667L46.8 32.9333C46.7585 32.8643 46.6999 32.8072 46.6298 32.7675C46.5597 32.7279 46.4805 32.707 46.4 32.707C46.3195 32.707 46.2403 32.7279 46.1702 32.7675C46.1001 32.8072 46.0415 32.8643 46 32.9333L45.4667 34C45.1162 34.7065 44.5739 35.3 43.9019 35.7126C43.2299 36.1253 42.4552 36.3404 41.6667 36.3333H24.9333C23.4 36.3333 21.9333 35.7333 20.8667 34.6667H20.8L19.8667 33.6667C19.6667 33.4667 19.4667 33.3333 19.2 33.3333L17.4667 33.1333C17.3333 38.8667 13.4667 43.4667 8.73333 43.4667C3.93333 43.4667 0 38.6667 0 32.9333C0 32.2667 0 31.6667 0.133333 31.1333V31C0.8 26.8 3.46667 23.4667 6.93333 22.6C9.46667 9.93333 19.3333 0 31.0667 0ZM3.93333 31.5333C4.46667 28 6.93333 26.2 8.73333 26.2C10.7333 26.2 13.6 28.4 13.6 32.8667C13.6 34.4667 13.2667 35.7333 12.7333 36.7333C11.7333 38.7333 10.0667 39.6667 8.73333 39.6667C7.67025 39.6269 6.66506 39.1722 5.93333 38.4C5.8414 38.3142 5.75246 38.2253 5.66667 38.1333C5.19113 37.6008 4.80806 36.9924 4.53333 36.3333C4.0607 35.2169 3.83335 34.0119 3.86667 32.8V31.6667L3.93333 31.6V31.5333ZM24.3333 20.6667C24.3333 19.6667 25.2 18.8 26.2667 18.8H55.8667C56.9333 18.8 57.8 19.6667 57.7333 20.7333V30.7333C57.6667 31.8 56.8 32.6667 55.7333 32.6667H53.4C53.0667 32.6667 52.7333 32.6667 52.4 32.5333C51.5333 32.3333 50.7333 31.8667 50.4 31.3333L47.9333 27.6C47.7363 27.2901 47.4602 27.0383 47.1336 26.8706C46.8069 26.7028 46.4414 26.6251 46.0747 26.6455C45.7081 26.6658 45.3535 26.7835 45.0474 26.9865C44.7413 27.1894 44.4948 27.4702 44.3333 27.8L42.6667 31C42.4199 31.4974 42.04 31.9165 41.5692 32.2107C41.0984 32.505 40.5552 32.6628 40 32.6667L26.2 32.8C25.1333 32.8 24.2667 31.9333 24.2667 30.8667V20.6667H24.3333ZM11 22.2C13.5333 11.5333 22 3.86667 31 3.86667C37.9333 3.86667 44.4 8.2 48.3333 15H24.3333C21.4667 15 18.6 16 16.3333 17.8L16.2667 17.8667L10.9333 22.2H11Z",
    fill: "currentColor",
    "fill-rule": "evenodd"
  }, null, -1)])]);
}
var Logo_default = _plugin_vue_export_helper_default(_sfc_main13, [["render", _sfc_render13]]);

// node_modules/@scalar/agent-chat/dist/views/Start.vue.script.js
var _hoisted_133 = { class: "startContainer" };
var _hoisted_215 = { class: "disclaimerText" };
var _hoisted_313 = ["href"];
var _hoisted_47 = ["href"];
var Start_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Start",
  emits: ["submit", "uploadApi"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { mode } = useState();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_133, [
        createVNode(Logo_default, { class: "agentLogo" }),
        _cache[4] || (_cache[4] = createBaseVNode("p", { class: "promptText" }, "How can I help you today?", -1)),
        createVNode(PromptForm_default, {
          ref: "promptFormField",
          onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit")),
          onUploadApi: _cache[1] || (_cache[1] = ($event) => emit("uploadApi"))
        }, null, 512),
        createBaseVNode("p", _hoisted_215, [
          unref(mode) === "preview" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" By messaging Agent Scalar your OpenAPI document will be temporarily uploaded to Scalar's servers. You must agree to our ")], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode("By messaging Agent Scalar you agree to our ")], 64)),
          createBaseVNode("a", {
            class: "disclaimerLink",
            href: unref(URLS).TERMS_AND_CONDITIONS,
            target: "_blank"
          }, "Terms", 8, _hoisted_313),
          _cache[2] || (_cache[2] = createTextVNode(" and ", -1)),
          createBaseVNode("a", {
            class: "disclaimerLink",
            href: unref(URLS).PRIVACY_POLICY,
            target: "_blank"
          }, "Privacy Policy", 8, _hoisted_47),
          _cache[3] || (_cache[3] = createTextVNode(". ", -1))
        ])
      ]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Start.vue.js
var Start_default = _plugin_vue_export_helper_default(Start_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-f9ec1d34"]]);

// node_modules/@scalar/agent-chat/dist/views/Layout.vue.script.js
var _hoisted_134 = { class: "wrapper" };
var Layout_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Layout",
  emits: ["submit", "uploadApi"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { chat } = useState();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_134, [unref(chat).messages.length && (unref(chat).messages.length > 1 || unref(chat).status !== "submitted") ? (openBlock(), createBlock(Chat_default, {
        key: 0,
        onSubmit: _cache[0] || (_cache[0] = ($event) => emit("submit")),
        onUploadApi: _cache[1] || (_cache[1] = ($event) => emit("uploadApi"))
      })) : (openBlock(), createBlock(Start_default, {
        key: 1,
        onSubmit: _cache[2] || (_cache[2] = ($event) => emit("submit")),
        onUploadApi: _cache[3] || (_cache[3] = ($event) => emit("uploadApi"))
      }))]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Layout.vue.js
var Layout_default = _plugin_vue_export_helper_default(Layout_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-f1eee0af"]]);

// node_modules/@scalar/agent-chat/dist/components/Selector.vue.script.js
var _hoisted_135 = { class: "overflow-x-auto" };
var _hoisted_216 = {
  key: 1,
  class: "text-c-1 flex h-auto w-full items-center gap-0.75 rounded-b-lg px-3 py-1.5 text-base leading-[20px] whitespace-nowrap"
};
var _hoisted_314 = { class: "overflow-x-auto" };
var Selector_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Selector",
  props: {
    selectedServer: {},
    servers: {},
    target: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const serverOptions = computed(() => __props.servers.map((server) => ({
      id: server.url,
      label: server.url
    })));
    const serverUrlWithoutTrailingSlash = computed(() => {
      var _a18, _b17;
      return ((_b17 = (_a18 = __props.selectedServer) == null ? void 0 : _a18.url) == null ? void 0 : _b17.replace(/\/$/, "")) || "";
    });
    const selectedServerOption = computed(() => serverOptions.value.find((opt) => {
      var _a18;
      return opt.id === ((_a18 = __props.selectedServer) == null ? void 0 : _a18.url);
    }));
    __expose({
      servers: __props.servers,
      serverUrlWithoutTrailingSlash,
      serverOptions,
      selectedServer: __props.selectedServer
    });
    return (_ctx, _cache) => {
      return serverOptions.value.length > 1 ? (openBlock(), createBlock(unref(ScalarListbox_default), {
        key: 0,
        ref: "elem",
        class: "group",
        modelValue: selectedServerOption.value,
        options: serverOptions.value,
        placement: "bottom-start",
        resize: "",
        target: __props.target,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => emit("update:modelValue", e.id))
      }, {
        default: withCtx(() => [createVNode(unref(ScalarButton_default), {
          class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-1.5 overflow-x-auto rounded-t-none rounded-b-xl px-3 py-1.5 text-base font-normal whitespace-nowrap -outline-offset-1",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)),
            createBaseVNode("span", _hoisted_135, toDisplayString(serverUrlWithoutTrailingSlash.value || "Select a server"), 1),
            createVNode(unref(ScalarIconCaretDown_default), {
              class: "text-c-2 ui-open:rotate-180 mt-0.25 size-3 transition-transform duration-100",
              weight: "bold"
            })
          ]),
          _: 1
        })]),
        _: 1
      }, 8, [
        "modelValue",
        "options",
        "target"
      ])) : (openBlock(), createElementBlock("div", _hoisted_216, [_cache[2] || (_cache[2] = createBaseVNode("span", { class: "sr-only" }, "Server:", -1)), createBaseVNode("span", _hoisted_314, toDisplayString(serverUrlWithoutTrailingSlash.value), 1)]));
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/Selector.vue.js
var Selector_default = Selector_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/components/ServerSelector.vue.script.js
var _hoisted_136 = ["id"];
var ServerSelector_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ServerSelector",
  props: {
    eventBus: {},
    selectedServer: {},
    servers: {}
  },
  setup(__props) {
    const id = useId();
    const updateServer = (newServer) => {
      var _a18;
      __props.eventBus.emit("server:update:selected", {
        url: ((_a18 = __props.selectedServer) == null ? void 0 : _a18.url) === newServer ? "" : newServer,
        meta: { type: "document" }
      });
    };
    const updateServerVariable = (key, value) => {
      const index = __props.servers.findIndex((s) => {
        var _a18;
        return s.url === ((_a18 = __props.selectedServer) == null ? void 0 : _a18.url);
      });
      if (index === -1) return;
      __props.eventBus.emit("server:update:variables", {
        index,
        key,
        value,
        meta: { type: "document" }
      });
    };
    return (_ctx, _cache) => {
      var _a18, _b17, _c, _d;
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("label", { class: "bg-b-2 flex h-8 items-center rounded-t-xl border-x border-t px-3 py-2.5 font-medium" }, " Server ", -1)),
        createBaseVNode("div", {
          id: unref(id),
          class: normalizeClass(["border", { "rounded-b-xl": !((_a18 = __props.selectedServer) == null ? void 0 : _a18.description) && !((_b17 = __props.selectedServer) == null ? void 0 : _b17.variables) }])
        }, [__props.servers.length ? (openBlock(), createBlock(Selector_default, {
          key: 0,
          selectedServer: __props.selectedServer,
          servers: __props.servers,
          target: unref(id),
          "onUpdate:modelValue": updateServer
        }, null, 8, [
          "selectedServer",
          "servers",
          "target"
        ])) : createCommentVNode("", true)], 10, _hoisted_136),
        createVNode(unref(ServerVariablesForm_default), {
          layout: "reference",
          variables: (_c = __props.selectedServer) == null ? void 0 : _c.variables,
          "onUpdate:variable": updateServerVariable
        }, null, 8, ["variables"]),
        ((_d = __props.selectedServer) == null ? void 0 : _d.description) ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
          key: 0,
          class: "text-c-3 rounded-b-xl border-x border-b px-3 py-1.5",
          value: __props.selectedServer.description
        }, null, 8, ["value"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/components/ServerSelector.vue.js
var ServerSelector_default = ServerSelector_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/agent-chat/dist/views/Settings/DocSettings.vue.script.js
var _hoisted_137 = { class: "docSettings" };
var DocSettings_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "DocSettings",
  props: {
    document: {},
    name: {}
  },
  setup(__props) {
    const { workspaceStore, config, eventBus } = useState();
    const environment = computed(() => getActiveEnvironment(workspaceStore, __props.document).environment);
    const selectedServer = computed(() => {
      const servers = getServers(__props.document.servers, { documentUrl: __props.document["x-scalar-original-source-url"] });
      return getSelectedServer(__props.document, null, null, servers);
    });
    const securitySchemes = computed(() => {
      var _a18;
      return ((_a18 = __props.document.components) == null ? void 0 : _a18.securitySchemes) ?? {};
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_137, [createBaseVNode("div", null, [createVNode(Auth_default, {
        authStore: unref(workspaceStore).auth,
        document: __props.document,
        environment: environment.value,
        eventBus: unref(eventBus),
        name: __props.name,
        options: unref(config),
        securitySchemes: securitySchemes.value,
        selectedServer: selectedServer.value
      }, null, 8, [
        "authStore",
        "document",
        "environment",
        "eventBus",
        "name",
        "options",
        "securitySchemes",
        "selectedServer"
      ])]), createBaseVNode("div", null, [createVNode(ServerSelector_default, {
        eventBus: unref(eventBus),
        selectedServer: selectedServer.value,
        servers: __props.document.servers ?? []
      }, null, 8, [
        "eventBus",
        "selectedServer",
        "servers"
      ])])]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Settings/DocSettings.vue.js
var DocSettings_default = _plugin_vue_export_helper_default(DocSettings_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-01a25619"]]);

// node_modules/@scalar/agent-chat/dist/views/Settings/Settings.vue.script.js
var _hoisted_138 = { class: "settingsHeading" };
var _hoisted_217 = { class: "documentList" };
var _hoisted_315 = ["onClick"];
var _hoisted_48 = { key: 0 };
var _hoisted_56 = {
  key: 1,
  class: "noDocuments"
};
var _hoisted_65 = { class: "proxyUrlContainer" };
var _hoisted_74 = ["href"];
var Settings_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Settings",
  props: { modalState: {} },
  setup(__props) {
    const { workspaceStore, proxyUrlRaw } = useState();
    function selectDocument(name17) {
      workspaceStore.update("x-scalar-active-document", name17);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarModal_default), {
        class: "settingsModal",
        state: __props.modalState
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_138, [_cache[1] || (_cache[1] = createBaseVNode("h1", null, "Settings", -1)), createVNode(unref(ScalarColorModeToggle_default), { class: "colorToggle ml-auto" })]),
          createBaseVNode("div", _hoisted_217, [Object.entries(unref(workspaceStore).workspace.documents).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.entries(unref(workspaceStore).workspace.documents), ([name17, document2]) => {
            return openBlock(), createElementBlock("div", {
              key: name17,
              class: "document"
            }, [createBaseVNode("button", {
              class: normalizeClass(["documentName", { documentNameActive: unref(workspaceStore).workspace.activeDocument === document2 }]),
              type: "button",
              onClick: ($event) => selectDocument(name17)
            }, [createTextVNode(" @" + toDisplayString(name17) + " ", 1), unref(workspaceStore).workspace.activeDocument === document2 ? (openBlock(), createBlock(unref(ScalarIconCaretDown_default), { key: 0 })) : (openBlock(), createBlock(unref(ScalarIconCaretRight_default), { key: 1 }))], 10, _hoisted_315), unref(workspaceStore).workspace.activeDocument === document2 && unref(isOpenApiDocument)(document2) ? (openBlock(), createElementBlock("div", _hoisted_48, [createVNode(DocSettings_default, {
              document: document2,
              name: name17
            }, null, 8, ["document", "name"])])) : createCommentVNode("", true)]);
          }), 128)) : (openBlock(), createElementBlock("div", _hoisted_56, " There's no API definition loaded. Use the + button to load APIs. "))]),
          createBaseVNode("div", _hoisted_65, [
            _cache[3] || (_cache[3] = createBaseVNode("label", { for: "proxyUrl" }, "CORS Proxy", -1)),
            createBaseVNode("p", null, [_cache[2] || (_cache[2] = createTextVNode(" All requests will be sent through the specified proxy URL to help avoid CORS (Cross-Origin Resource Sharing) issues. ", -1)), createBaseVNode("a", {
              class: "underline",
              href: unref(URLS).PROXY_SOURCE_CODE,
              target: "_blank"
            }, " Read more ", 8, _hoisted_74)]),
            createVNode(unref(ScalarTextInput_default), {
              id: "proxyUrl",
              modelValue: unref(proxyUrlRaw),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(proxyUrlRaw) ? proxyUrlRaw.value = $event : null),
              label: "Proxy URL",
              placeholder: unref(URLS).DEFAULT_PROXY_URL
            }, null, 8, ["modelValue", "placeholder"])
          ])
        ]),
        _: 1
      }, 8, ["state"]);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/views/Settings/Settings.vue.js
var Settings_default = _plugin_vue_export_helper_default(Settings_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-dd2544e6"]]);

// node_modules/@scalar/agent-chat/dist/Chat.vue.script.js
var _hoisted_139 = { ref: "clientModal" };
var Chat_vue_vue_type_script_setup_true_lang_default2 = defineComponent({
  __name: "Chat",
  emits: ["uploadApi"],
  setup(__props) {
    const { chat, prompt, settingsModal, eventBus, workspaceStore, config, mode, addDocument } = useState();
    const clientModalRef = useTemplateRef("clientModal");
    const apiClient = ref(null);
    onMounted(async () => {
      const tmpDoc = getTmpDocFromLocalStorage();
      if (mode === "preview" && tmpDoc) await addDocument({
        namespace: tmpDoc.namespace,
        slug: tmpDoc.slug,
        removable: false,
        tmp: true
      });
      if (!clientModalRef.value) return;
      apiClient.value = createApiClientModal({
        el: clientModalRef.value,
        options: config,
        eventBus,
        workspaceStore
      });
    });
    onBeforeUnmount(() => {
      var _a18;
      (_a18 = apiClient.value) == null ? void 0 : _a18.app.unmount();
    });
    useChatScroll();
    useAgentKeyDocuments();
    useCuratedDocuments();
    async function handleSubmit() {
      await chat.sendMessage({ text: prompt.value });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_139, null, 512),
        createVNode(Layout_default, {
          onSubmit: handleSubmit,
          onUploadApi: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("uploadApi"))
        }),
        createVNode(Settings_default, { modalState: unref(settingsModal) }, null, 8, ["modalState"])
      ], 64);
    };
  }
});

// node_modules/@scalar/agent-chat/dist/Chat.vue.js
var Chat_default2 = Chat_vue_vue_type_script_setup_true_lang_default2;

// node_modules/@scalar/agent-chat/dist/App.vue.script.js
var App_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "App",
  props: {
    registryDocuments: {},
    registryUrl: {},
    dashboardUrl: {},
    platformProxyUrl: {},
    baseUrl: {},
    mode: { default: "full" },
    getAccessToken: { type: Function },
    getAgentKey: { type: Function },
    getActiveDocumentJson: { type: Function },
    isLoggedIn: {},
    prefilledMessage: {},
    hideAddApi: { type: Boolean }
  },
  emits: ["uploadApi"],
  setup(__props, { expose: __expose }) {
    const state = createState({
      getActiveDocumentJson: __props.getActiveDocumentJson,
      initialRegistryDocuments: __props.registryDocuments,
      prefilledMessageRef: __props.prefilledMessage,
      platformProxyUrl: __props.platformProxyUrl,
      registryUrl: __props.registryUrl,
      baseUrl: __props.baseUrl,
      mode: __props.mode,
      getAccessToken: __props.getAccessToken,
      getAgentKey: __props.getAgentKey,
      isLoggedIn: __props.isLoggedIn,
      dashboardUrl: __props.dashboardUrl,
      hideAddApi: __props.hideAddApi
    });
    provide(STATE_SYMBOL, state);
    __expose({ addDocumentAsync: state.addDocumentAsync });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Chat_default2, { onUploadApi: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("uploadApi")) });
    };
  }
});

// node_modules/@scalar/agent-chat/dist/App.vue.js
var App_default = App_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarChatInterface.vue.script.js
var AgentScalarChatInterface_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AgentScalarChatInterface",
  props: {
    agentScalarConfiguration: {},
    externalUrls: {},
    workspaceStore: {},
    prefilledMessage: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a18, _b17, _c;
      return openBlock(), createBlock(unref(App_default), {
        baseUrl: __props.externalUrls.apiBaseUrl,
        dashboardUrl: __props.externalUrls.dashboardUrl,
        getActiveDocumentJson: () => __props.workspaceStore.exportActiveDocument("json"),
        getAgentKey: ((_a18 = __props.agentScalarConfiguration) == null ? void 0 : _a18.key) ? () => {
          var _a19;
          return ((_a19 = __props.agentScalarConfiguration) == null ? void 0 : _a19.key) ?? "";
        } : void 0,
        hideAddApi: (_b17 = __props.agentScalarConfiguration) == null ? void 0 : _b17.hideAddApi,
        mode: ((_c = __props.agentScalarConfiguration) == null ? void 0 : _c.key) ? "full" : "preview",
        platformProxyUrl: __props.externalUrls.proxyUrl,
        prefilledMessage: __props.prefilledMessage,
        registryDocuments: [],
        registryUrl: __props.externalUrls.registryUrl
      }, null, 8, [
        "baseUrl",
        "dashboardUrl",
        "getActiveDocumentJson",
        "getAgentKey",
        "hideAddApi",
        "mode",
        "platformProxyUrl",
        "prefilledMessage",
        "registryUrl"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarChatInterface.vue.js
var AgentScalarChatInterface_default = AgentScalarChatInterface_vue_vue_type_script_setup_true_lang_default;
export {
  AgentScalarChatInterface_default as default
};
//# sourceMappingURL=AgentScalarChatInterface.vue-SW5PUQDP.js.map
