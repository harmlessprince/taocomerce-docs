import {
  Queue,
  REFERENCE_LS_KEYS,
  ScalarTextInputCopy_default,
  apiReferenceConfigurationSchema,
  apiReferenceConfigurationWithSourceSchema,
  createWorkspaceStore,
  safeLocalStorage
} from "./chunk-HO2CTRUR.js";
import {
  AuthSchema,
  AuthSelector_default,
  DEFAULT_MODELS_SECTION_LABEL,
  HttpMethod_default,
  Ie,
  N,
  OpenApiClientButton_default,
  Q,
  REGEX,
  ScalarButton_default,
  ScalarCardFooter_default,
  ScalarCardHeader_default,
  ScalarCardSection_default,
  ScalarCard_default,
  ScalarCodeBlockCopy_default,
  ScalarCodeBlock_default,
  ScalarColorModeToggleButton_default,
  ScalarColorModeToggleIcon_default,
  ScalarCombobox_default,
  ScalarCopyBackdrop_default,
  ScalarErrorBoundary_default,
  ScalarFloatingBackdrop_default,
  ScalarFloating_default,
  ScalarFormInput_default,
  ScalarIconArrowUpRight_default,
  ScalarIconArrowUp_default,
  ScalarIconBookOpen_default,
  ScalarIconBook_default,
  ScalarIconBracketsCurly_default,
  ScalarIconButton_default,
  ScalarIconCaretDown_default,
  ScalarIconCaretRight_default,
  ScalarIconCaretUpDown_default,
  ScalarIconCheck_default,
  ScalarIconCloud_default,
  ScalarIconCopy_default,
  ScalarIconEnvelopeSimple_default,
  ScalarIconFileMd_default,
  ScalarIconGavel_default,
  ScalarIconGitBranch_default,
  ScalarIconGlobeSimple_default,
  ScalarIconHash_default,
  ScalarIconInfo_default,
  ScalarIconLegacyAdapter_default,
  ScalarIconLink_default,
  ScalarIconList_default,
  ScalarIconLockSimpleOpen_default,
  ScalarIconLockSimple_default,
  ScalarIconMagnifyingGlass_default,
  ScalarIconMinus_default,
  ScalarIconPlay_default,
  ScalarIconPlugsConnected_default,
  ScalarIconPlus_default,
  ScalarIconScroll_default,
  ScalarIconSparkle_default,
  ScalarIconTag_default,
  ScalarIconTerminalWindow_default,
  ScalarIconTextAlignLeft_default,
  ScalarIconWarningCircle_default,
  ScalarIconWarningOctagon_default,
  ScalarIconWarning_default,
  ScalarIconWebhooksLogo_default,
  ScalarIconX_default,
  ScalarIcon_default,
  ScalarListboxCheckbox_default,
  ScalarListbox_default,
  ScalarMarkdownSummary_default,
  ScalarMarkdown_default,
  ScalarModal_default,
  ScalarPopover_default,
  ScalarSearchInput_default,
  ScalarSidebarButton_default,
  ScalarSidebarFooter_default,
  ScalarSidebarSearchButton_default,
  ScalarSidebarSection_default,
  ScalarSidebar_default,
  ScalarToasts_default,
  ScalarVirtualText_default,
  ScalarWrappingText_default,
  ServerVariablesForm_default,
  V,
  _plugin_vue_export_helper_default,
  addScalarClassesToHeadless,
  buildRequest,
  buildSafeBodyRequest,
  coerce,
  coerceValue,
  combineParams,
  combineUrlAndPath,
  createSidebarState,
  createWorkspaceEventBus,
  cva,
  debounce,
  deepClone,
  entry_default,
  filterItems,
  freezeElement,
  getActiveEnvironment,
  getDocumentType,
  getDocumentTypeLabel,
  getEnvironmentVariables,
  getExample,
  getExampleFromSchema,
  getFirstServer,
  getHeadings,
  getHttpMethodInfo,
  getPathItemOperation,
  getResolvedPathItem,
  getResolvedRef,
  getResolvedRefDeep,
  getSecurityRequirements,
  getSecuritySchemes,
  getSelectedSecurity,
  getSelectedServer,
  getServers,
  i,
  i2,
  isArraySchema,
  isAsyncApiDocument,
  isConfigurationWithSources,
  isDefined,
  isDynamicRef,
  isHeading,
  isHidden,
  isHttpMethod,
  isLocalUrl,
  isMacOS,
  isNonOptionalSecurityRequirement,
  isNumberSchema,
  isObject,
  isObjectLike,
  isObjectSchema,
  isOpenApiDocument,
  isSchema,
  isStringSchema,
  mapHiddenClientsConfig,
  me,
  mergeSecurity,
  mergeSiblingReferences,
  mergeUrls,
  n,
  n2,
  n3,
  normalizeHttpMethod,
  objectEntries,
  objectKeys,
  onClickOutside,
  onKeyStroke,
  parseJsonOrYaml,
  parseJsonPointerSegments,
  pe,
  prettyPrintJson,
  pushDynamicScope,
  r,
  r2,
  redirectToProxy,
  replaceEnvVariables,
  replacePathVariables,
  resolve,
  resolveDynamicRef,
  s,
  safeRun,
  scrollSidebarToTop,
  slugger,
  slugify,
  splitContent,
  t,
  t2,
  textFromNode,
  useBindCx,
  useClipboard2 as useClipboard,
  useColorMode,
  useElementHover,
  useFavicon,
  useFormGroup,
  useIntersectionObserver,
  useLoadingState,
  useModal,
  useScrollLock,
  useToasts,
  watchDebounced,
  xe,
  ye
} from "./chunk-GMLJFOMH.js";
import "./chunk-OFXDZRG6.js";
import "./chunk-WUKPMNDV.js";
import {
  Fragment,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  hasInjectionContext,
  inject,
  isRef,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onServerPrefetch,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useId,
  useModel,
  useTemplateRef,
  vModelCheckbox,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-UEFGQ2CT.js";
import {
  __publicField
} from "./chunk-3KOD66RD.js";

// node_modules/@scalar/api-reference/dist/helpers/openapi.js
var isSchemaObject = (value) => typeof value === "object" && value !== null;
function resolveSchemaRef(ref2) {
  if (typeof ref2 === "object" && ref2 !== null && "$ref" in ref2) return isSchemaObject(ref2["$ref-value"]) ? ref2["$ref-value"] : void 0;
  return ref2;
}
function pushUnique(target, value) {
  if (!value) return;
  if (!target.includes(value)) target.push(value);
}
function collectSchemaProperties(schema, options, propertyDepth = 0) {
  if (!schema || options.visited.has(schema)) return;
  options.visited.add(schema);
  [
    ...schema.oneOf ?? [],
    ...schema.anyOf ?? [],
    ...schema.allOf ?? []
  ].forEach((variantRef) => {
    collectSchemaProperties(resolveSchemaRef(variantRef), options, propertyDepth);
  });
  if (isObjectSchema(schema) && schema.properties) Object.entries(schema.properties).forEach(([key, propRef]) => {
    const property = resolveSchemaRef(propRef);
    options.visit(key, property);
    if (propertyDepth + 1 < options.maxPropertyDepth) collectSchemaProperties(property, options, propertyDepth + 1);
  });
}
function forEachRequestBodyProperty(operation, visit) {
  var _a;
  const content = (_a = getResolvedRef(operation == null ? void 0 : operation.requestBody)) == null ? void 0 : _a.content;
  if (!content) return;
  const visited = /* @__PURE__ */ new Set();
  Object.values(content).forEach((media) => {
    var _a2;
    collectSchemaProperties(getResolvedRef((_a2 = getResolvedRef(media)) == null ? void 0 : _a2.schema), {
      visit,
      visited,
      maxPropertyDepth: 2
    });
  });
}
function extractParameterNames(parameters) {
  const names = [];
  parameters.forEach((parameter) => {
    const resolved = getResolvedRef(parameter);
    pushUnique(names, resolved == null ? void 0 : resolved.name);
  });
  return names;
}
function extractParameterDescriptions(parameters) {
  const descriptions = [];
  parameters.forEach((parameter) => {
    const resolved = getResolvedRef(parameter);
    pushUnique(descriptions, resolved == null ? void 0 : resolved.description);
  });
  return descriptions;
}
function extractBodyFieldNames(operation) {
  const names = [];
  forEachRequestBodyProperty(operation, (key) => {
    pushUnique(names, key);
  });
  return names;
}
function extractBodyDescriptions(operation) {
  const descriptions = [];
  forEachRequestBodyProperty(operation, (_key, schema) => {
    if (schema && "description" in schema && typeof schema.description === "string") pushUnique(descriptions, schema.description);
  });
  return descriptions;
}
function extractSchemaFieldNames(schema) {
  const names = [];
  collectSchemaProperties(schema, {
    visit: (key) => pushUnique(names, key),
    visited: /* @__PURE__ */ new Set(),
    maxPropertyDepth: 2
  });
  return names;
}
function extractSchemaDescriptions(schema) {
  const descriptions = [];
  collectSchemaProperties(schema, {
    visit: (_key, propertySchema) => {
      if (propertySchema && "description" in propertySchema && typeof propertySchema.description === "string") pushUnique(descriptions, propertySchema.description);
    },
    visited: /* @__PURE__ */ new Set(),
    maxPropertyDepth: 2
  });
  return descriptions;
}
var defineOwnProperty = (target, key, value) => {
  if (key === "__proto__") Object.defineProperty(target, key, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
  else target[key] = value;
};
var hasOwnObject = (target, key) => Object.hasOwn(target, key) && target[key] !== null && typeof target[key] === "object";
function deepMerge(source, target) {
  for (const [key, val] of Object.entries(source)) if (val !== null && typeof val === "object") {
    if (!hasOwnObject(target, key)) defineOwnProperty(target, key, Array.isArray(val) ? [] : {});
    deepMerge(val, target[key]);
  } else if (typeof val !== "undefined") defineOwnProperty(target, key, val);
  return target;
}
function createEmptySpecification(partialSpecification) {
  const emptySpecification = {
    openapi: "3.1.0",
    info: {
      title: "",
      description: "",
      termsOfService: "",
      version: "",
      license: {
        name: "",
        url: ""
      },
      contact: { email: "" }
    },
    servers: [],
    tags: [],
    "x-scalar-original-document-hash": ""
  };
  if (!partialSpecification) return emptySpecification;
  deepMerge(partialSpecification, emptySpecification);
  return emptySpecification;
}

// node_modules/@scalar/api-reference/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper_default2 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) target[key] = val;
  return target;
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/ar.js
var ar = {
  common: {
    additionalProperties: "خصائص إضافية",
    const: "ثابت",
    deprecated: "مهمل",
    description: "الوصف",
    discriminator: "المميّز",
    enum: "تعداد",
    format: "التنسيق",
    greaterThan: "أكبر من",
    httpMethod: "طريقة HTTP",
    keys: "المفاتيح",
    lessThan: "أقل من",
    max: "الحد الأقصى",
    min: "الحد الأدنى",
    maxLength: "أقصى طول",
    minLength: "أدنى طول",
    multipleOf: "مضاعف لـ",
    nullable: "يقبل null",
    path: "المسار",
    propertyNames: "أسماء الخصائص",
    pattern: "النمط",
    copyPattern: "نسخ النمط",
    readOnly: "قراءة فقط",
    required: "مطلوب",
    hideValues: "إخفاء القيم",
    showAllValues: "عرض كل القيم",
    type: "النوع",
    unique: "فريد",
    values: "القيم",
    writeOnly: "كتابة فقط"
  },
  search: {
    label: "بحث",
    inputLabel: "أدخل استعلام البحث",
    open: "فتح البحث",
    placeholder: "بحث...",
    clear: "مسح البحث",
    keyboardShortcut: "اختصار لوحة المفاتيح:",
    command: "مفتاح الأوامر",
    control: "مفتاح التحكم",
    results: "نتائج البحث في المرجع",
    navigate: "تنقّل",
    select: "اختيار",
    instructions: "اضغط السهم للأعلى أو للأسفل للتنقل، Enter للاختيار، واكتب لتصفية النتائج",
    entryHeading: "عنوان",
    entryOperation: "عملية",
    entryTag: "وسم",
    entryTagGroup: "مجموعة وسوم",
    entryWebhook: "خطاف ويب"
  },
  navigation: {
    introduction: "المقدمة",
    closeGroup: "إغلاق المجموعة",
    closeMenu: "إغلاق القائمة",
    openGroup: "فتح المجموعة",
    openMenu: "فتح القائمة",
    operations: "العمليات",
    endpoints: "نقاط نهاية {name}",
    showAllEndpoints: "إظهار كل نقاط نهاية {name}",
    sidebarFor: "الشريط الجانبي لـ {name}",
    mainContent: "وثائق واجهة برمجة التطبيقات لـ {name}",
    collapsed: "مطوي",
    webhooks: "خطافات الويب",
    channels: "القنوات"
  },
  server: {
    label: "الخادم",
    select: "اختر خادماً"
  },
  info: { termsOfService: "شروط الخدمة" },
  asyncapi: {
    servers: "الخوادم",
    protocols: "البروتوكولات"
  },
  clientLibraries: {
    heading: "مكتبات العملاء",
    more: "المزيد",
    selectAll: "اختر من جميع العملاء"
  },
  operation: {
    body: "الجسم",
    cookies: "ملفات تعريف الارتباط",
    headers: "الرؤوس",
    pathParameters: "معاملات المسار",
    queryParameters: "معاملات الاستعلام",
    requestBody: "جسم الطلب",
    responses: "الاستجابات",
    testRequest: "اختبار الطلب",
    webhook: "خطاف ويب",
    selectedContentType: "نوع المحتوى المحدد",
    hideHeaders: "إخفاء الرؤوس",
    showHeaders: "إظهار الرؤوس",
    callbacks: "عمليات الاستدعاء"
  },
  response: {
    exampleResponses: "أمثلة الاستجابات",
    noBody: "لا يوجد جسم",
    showSchema: "عرض المخطط",
    status: "الحالة"
  },
  schema: {
    example: "مثال",
    examples: "أمثلة",
    default: "الافتراضي",
    schema: "المخطط",
    emptyObject: "كائن فارغ",
    showAdditionalProperties: "إظهار الخصائص الإضافية",
    childAttributes: "السمات الفرعية",
    hideChildAttributes: "إخفاء {name}",
    showChildAttributes: "إظهار {name}",
    forName: "لـ {name}",
    showSchemaDetails: "إظهار تفاصيل المخطط",
    oneOf: "واحد من",
    anyOf: "أي من",
    allOf: "كل من",
    not: "ليس",
    unknownType: "نوع غير معروف"
  },
  download: {
    openapi: "تنزيل مستند OpenAPI",
    asyncapi: "تنزيل مستند AsyncAPI"
  },
  models: { label: "النماذج" },
  actions: {
    copyLink: "نسخ الرابط",
    copyLinkTo: "نسخ الرابط إلى {name}",
    copyToClipboard: "نسخ الرابط إلى الحافظة",
    copyEndpointUrl: "نسخ رابط endpoint",
    showMore: "عرض المزيد"
  },
  agent: {
    askAi: "اسأل الذكاء الاصطناعي",
    askAiAgent: "اسأل وكيل الذكاء الاصطناعي",
    close: "إغلاق العميل"
  },
  mcp: {
    generate: "إنشاء MCP",
    connect: "ربط MCP"
  },
  developerTools: {
    title: "أدوات المطورين",
    configure: "الإعداد",
    share: "مشاركة",
    deploy: "نشر",
    scalarConfiguration: "إعدادات Scalar",
    theme: "السمة",
    layout: "التخطيط",
    layoutOptions: "خيارات التخطيط",
    intro: "تتيح لك أدوات المطورين تخصيص مظهر الوثائق وسلوكها. يمكنك أيضًا مشاركة وثائقك باستخدام Scalar Registry.",
    disableToolbarBefore: "لتعطيل شريط الأدوات، عيّن",
    disableToolbarAfter: "في الإعدادات.",
    localhostOnly: "لن تظهر أدوات المطورين إلا عند التشغيل على localhost.",
    layoutModern: "حديث",
    layoutClassic: "كلاسيكي",
    showSidebar: "إظهار الشريط الجانبي",
    defaultOpenFirstTag: "فتح أول وسم افتراضيًا",
    defaultOpenAllTags: "فتح كل الوسوم افتراضيًا",
    expandAll: "توسيع كل {label}",
    expandAllResponses: "توسيع كل الاستجابات",
    hideClientButton: "إخفاء زر العميل",
    hideDarkModeToggle: "إخفاء مفتاح الوضع الداكن",
    hideModels: "إخفاء {label}",
    hideSearch: "إخفاء البحث",
    showOperationId: "إظهار معرّف العملية",
    hideTestRequestButton: "إخفاء زر طلب الاختبار",
    scalarDocs: "Scalar Docs",
    deployDescription: "انشر وثائقك على Scalar، منصة الوثائق الحديثة لواجهة API الخاصة بك وكل شيء آخر.",
    shareTitle: "مشاركة API Reference",
    shareDescription: "حمّل مستند OpenAPI لمشاركة API Reference مع الآخرين. الأمر بسيط كضغط زر.",
    uploadDocument: "تحميل المستند",
    temporaryLinkExpiration: "سيتم حذف المستند تلقائيًا بعد 7 أيام.",
    deployOnScalar: "النشر على Scalar",
    deployFree: "انشر وثائقك مجانًا.",
    additionalFeaturesMightRequire: "قد تتطلب الميزات الإضافية",
    generate: "إنشاء",
    passwordProtection: "الحماية بكلمة مرور",
    customDomains: "نطاقات مخصصة",
    freeFormContent: "محتوى حر",
    cdnInfrastructure: "بنية CDN التحتية",
    pullFromGitHub: "السحب من GitHub",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "فحص Spectral",
    jsonSchemaHosting: "استضافة JSON Schema",
    askAi: "اسأل الذكاء الاصطناعي",
    mcpServers: "خوادم MCP",
    unableToExportDocument: "تعذر تصدير المستند النشط",
    unknownError: "حدث خطأ غير معروف"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "مرحبًا بك في Scalar API References + Swagger Editor، أداة مجانية ومفتوحة المصدر تأخذ ملف Swagger/OAS الخاص بك وتنشئ API References جميلة.",
    showExample: "إظهار مثال",
    uploadFile: "تحميل ملف",
    integrations: "التكاملات",
    theming: "السمات",
    features: "الميزات",
    customize: "التخصيص",
    customizeDescription: "استخدم الخطوط ولوحات الألوان الخاصة بك، أو استخدم سماتنا!",
    testing: "الاختبار",
    testingDescription: "REST API Client مدمج بعمق (مجاني ومفتوح المصدر أيضًا)",
    search: "البحث",
    searchDescription: "بحث مدمج بالكامل (باستخدام fuse.js)",
    hosting: "الاستضافة",
    hostingDescription: "استضافة مجانية لنطاق فرعي على https://apidocumentation.com",
    openApiSwagger: "OpenAPI و Swagger",
    openApiSwaggerDescription: "دعم OpenAPI 3.1 و OpenAPI 3.0 و Swagger 2.0",
    codeSamples: "أمثلة التعليمات البرمجية",
    codeSamplesDescription: "أمثلة تعليمات برمجية لعرض API الخاص بك بأشهر اللغات"
  },
  footer: { poweredByScalar: "مدعوم من Scalar" },
  authentication: {
    title: "المصادقة",
    accepts: "يقبل",
    allOf: "كل ما يلي:",
    authentication: "المصادقة",
    optional: "المصادقة اختيارية",
    oneOf: "واحد من:",
    required: "المصادقة مطلوبة",
    requires: "يتطلب",
    scopes: "نطاقات OAuth"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/de.js
var de = {
  common: {
    additionalProperties: "zusätzliche Eigenschaften",
    const: "Konstante",
    deprecated: "veraltet",
    description: "Beschreibung",
    discriminator: "Diskriminator",
    enum: "enum",
    format: "Format",
    greaterThan: "größer als",
    httpMethod: "HTTP-Methode",
    keys: "Schlüssel",
    lessThan: "kleiner als",
    max: "max.",
    min: "min.",
    maxLength: "max. Länge",
    minLength: "min. Länge",
    multipleOf: "Vielfaches von",
    nullable: "nullable",
    path: "Pfad",
    propertyNames: "Eigenschaftsnamen",
    pattern: "Muster",
    copyPattern: "Muster kopieren",
    readOnly: "nur lesbar",
    required: "erforderlich",
    hideValues: "Werte ausblenden",
    showAllValues: "Alle Werte anzeigen",
    type: "Typ",
    unique: "eindeutig",
    values: "Werte",
    writeOnly: "nur schreibbar"
  },
  search: {
    label: "Suchen",
    inputLabel: "Suchbegriff eingeben",
    open: "Suche öffnen",
    placeholder: "Suchen...",
    clear: "Suche löschen",
    keyboardShortcut: "Tastenkürzel:",
    command: "Befehl",
    control: "Steuerung",
    results: "Suchergebnisse der Referenz",
    navigate: "Navigieren",
    select: "Auswählen",
    instructions: "Drücken Sie Pfeil nach oben oder unten zum Navigieren, Enter zum Auswählen und tippen Sie zum Filtern der Ergebnisse",
    entryHeading: "Überschrift",
    entryOperation: "Operation",
    entryTag: "Tag",
    entryTagGroup: "Tag-Gruppe",
    entryWebhook: "Webhook"
  },
  navigation: {
    introduction: "Einführung",
    closeGroup: "Gruppe schließen",
    closeMenu: "Menü schließen",
    openGroup: "Gruppe öffnen",
    openMenu: "Menü öffnen",
    operations: "Operationen",
    endpoints: "{name}-Endpunkte",
    showAllEndpoints: "Alle {name}-Endpunkte anzeigen",
    sidebarFor: "Seitenleiste für {name}",
    mainContent: "API-Dokumentation für {name}",
    collapsed: "Eingeklappt",
    webhooks: "Webhooks",
    channels: "Kanäle"
  },
  server: {
    label: "Server",
    select: "Server auswählen"
  },
  info: { termsOfService: "Nutzungsbedingungen" },
  asyncapi: {
    servers: "Server",
    protocols: "Protokolle"
  },
  clientLibraries: {
    heading: "Client-Bibliotheken",
    more: "Mehr",
    selectAll: "Aus allen Clients auswählen"
  },
  operation: {
    body: "Body",
    cookies: "Cookies",
    headers: "Header",
    pathParameters: "Pfadparameter",
    queryParameters: "Query-Parameter",
    requestBody: "Request Body",
    responses: "Antworten",
    testRequest: "Request testen",
    webhook: "Webhook",
    selectedContentType: "Ausgewählter Inhaltstyp",
    hideHeaders: "Header ausblenden",
    showHeaders: "Header anzeigen",
    callbacks: "Callbacks"
  },
  response: {
    exampleResponses: "Beispielantworten",
    noBody: "Kein Body",
    showSchema: "Schema anzeigen",
    status: "Status"
  },
  schema: {
    example: "Beispiel",
    examples: "Beispiele",
    default: "Standard",
    schema: "Schema",
    emptyObject: "Leeres Objekt",
    showAdditionalProperties: "Zusätzliche Eigenschaften anzeigen",
    childAttributes: "Untergeordnete Attribute",
    hideChildAttributes: "{name} ausblenden",
    showChildAttributes: "{name} anzeigen",
    forName: "für {name}",
    showSchemaDetails: "Schema-Details anzeigen",
    oneOf: "Eines von",
    anyOf: "Beliebiges von",
    allOf: "Alle von",
    not: "Nicht",
    unknownType: "unbekannter Typ"
  },
  download: {
    openapi: "OpenAPI-Dokument herunterladen",
    asyncapi: "AsyncAPI-Dokument herunterladen"
  },
  models: { label: "Modelle" },
  actions: {
    copyLink: "Link kopieren",
    copyLinkTo: "Link zu {name} kopieren",
    copyToClipboard: "Link in die Zwischenablage kopieren",
    copyEndpointUrl: "Endpoint-URL kopieren",
    showMore: "Mehr anzeigen"
  },
  agent: {
    askAi: "KI fragen",
    askAiAgent: "KI-Agent fragen",
    close: "Client schließen"
  },
  mcp: {
    generate: "MCP generieren",
    connect: "MCP verbinden"
  },
  developerTools: {
    title: "Entwicklertools",
    configure: "Konfigurieren",
    share: "Teilen",
    deploy: "Bereitstellen",
    scalarConfiguration: "Scalar-Konfiguration",
    theme: "Theme",
    layout: "Layout",
    layoutOptions: "Layout-Optionen",
    intro: "Mit den Entwicklertools kannst du das Aussehen und Verhalten deiner Dokumentation anpassen. Du kannst deine Dokumentation auch über Scalar Registry teilen.",
    disableToolbarBefore: "Um die Toolbar zu deaktivieren, setze",
    disableToolbarAfter: "in deiner Konfiguration.",
    localhostOnly: "Die Entwicklertools werden nur angezeigt, wenn sie auf localhost ausgeführt werden.",
    layoutModern: "Modern",
    layoutClassic: "Klassisch",
    showSidebar: "Seitenleiste anzeigen",
    defaultOpenFirstTag: "Ersten Tag standardmäßig öffnen",
    defaultOpenAllTags: "Alle Tags standardmäßig öffnen",
    expandAll: "Alle {label} erweitern",
    expandAllResponses: "Alle Antworten erweitern",
    hideClientButton: "Client-Schaltfläche ausblenden",
    hideDarkModeToggle: "Dark-Mode-Umschalter ausblenden",
    hideModels: "{label} ausblenden",
    hideSearch: "Suche ausblenden",
    showOperationId: "Operation-ID anzeigen",
    hideTestRequestButton: "Test-Request-Schaltfläche ausblenden",
    scalarDocs: "Scalar Docs",
    deployDescription: "Veröffentliche deine Dokumentation auf Scalar, der modernen Dokumentationsplattform für deine API und alles Weitere.",
    shareTitle: "API Reference teilen",
    shareDescription: "Lade dein OpenAPI-Dokument hoch, um deine API Reference mit anderen zu teilen. So einfach wie ein Klick.",
    uploadDocument: "Dokument hochladen",
    temporaryLinkExpiration: "Dein Dokument wird nach 7 Tagen automatisch gelöscht.",
    deployOnScalar: "Auf Scalar veröffentlichen",
    deployFree: "Veröffentliche deine Dokumentation kostenlos.",
    additionalFeaturesMightRequire: "Zusätzliche Funktionen erfordern möglicherweise",
    generate: "Generieren",
    passwordProtection: "Passwortschutz",
    customDomains: "Eigene Domains",
    freeFormContent: "Freiform-Inhalte",
    cdnInfrastructure: "CDN-Infrastruktur",
    pullFromGitHub: "Von GitHub laden",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Spectral-Linting",
    jsonSchemaHosting: "JSON-Schema-Hosting",
    askAi: "KI fragen",
    mcpServers: "MCP-Server",
    unableToExportDocument: "Aktives Dokument konnte nicht exportiert werden",
    unknownError: "Ein unbekannter Fehler ist aufgetreten"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "Willkommen bei Scalar API References + Swagger Editor, einem kostenlosen Open-Source-Tool, das deine Swagger/OAS-Datei in schöne API References verwandelt.",
    showExample: "Beispiel anzeigen",
    uploadFile: "Datei hochladen",
    integrations: "INTEGRATIONEN",
    theming: "THEMES",
    features: "Funktionen",
    customize: "Anpassen",
    customizeDescription: "Nutze deine Typografie und Farbpaletten oder unsere Themes!",
    testing: "Testen",
    testingDescription: "Ein tief integrierter REST API Client (ebenfalls kostenlos und Open Source)",
    search: "Suche",
    searchDescription: "Vollständig integrierte Suche (mit fuse.js)",
    hosting: "Hosting",
    hostingDescription: "Kostenloses Subdomain-Hosting auf https://apidocumentation.com",
    openApiSwagger: "OpenAPI und Swagger",
    openApiSwaggerDescription: "Unterstützung für OpenAPI 3.1, OpenAPI 3.0 und Swagger 2.0",
    codeSamples: "Codebeispiele",
    codeSamplesDescription: "Codebeispiele, um deine API in den beliebtesten Sprachen zu präsentieren"
  },
  footer: { poweredByScalar: "Bereitgestellt von Scalar" },
  authentication: {
    title: "Authentifizierung",
    accepts: "Akzeptiert",
    allOf: "alle von:",
    authentication: "Authentifizierung",
    optional: "Authentifizierung optional",
    oneOf: "eines von:",
    required: "Authentifizierung erforderlich",
    requires: "Erfordert",
    scopes: "OAuth-Scopes"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/en.js
var en = {
  common: {
    additionalProperties: "additional properties",
    const: "const",
    deprecated: "deprecated",
    description: "Description",
    discriminator: "Discriminator",
    enum: "enum",
    format: "Format",
    greaterThan: "greater than",
    httpMethod: "HTTP Method",
    keys: "keys",
    lessThan: "less than",
    max: "max",
    min: "min",
    maxLength: "max length",
    minLength: "min length",
    multipleOf: "multiple of",
    nullable: "nullable",
    path: "Path",
    propertyNames: "property names",
    pattern: "Pattern",
    copyPattern: "Copy pattern",
    readOnly: "read-only",
    required: "required",
    hideValues: "Hide values",
    showAllValues: "Show all values",
    type: "Type",
    unique: "unique",
    values: "values",
    writeOnly: "write-only"
  },
  search: {
    label: "Search",
    inputLabel: "Enter search query",
    open: "Open Search",
    placeholder: "Search...",
    clear: "Clear Search",
    keyboardShortcut: "Keyboard Shortcut:",
    command: "Command",
    control: "Control",
    results: "Reference Search Results",
    navigate: "Navigate",
    select: "Select",
    instructions: "Press up arrow / down arrow to navigate, enter to select, type to filter results",
    entryHeading: "Heading",
    entryOperation: "Operation",
    entryTag: "Tag",
    entryTagGroup: "Tag Group",
    entryWebhook: "Webhook"
  },
  navigation: {
    introduction: "Introduction",
    closeGroup: "Close Group",
    closeMenu: "Close Menu",
    openGroup: "Open Group",
    openMenu: "Open Menu",
    operations: "Operations",
    endpoints: "{name} endpoints",
    showAllEndpoints: "Show all {name} endpoints",
    sidebarFor: "Sidebar for {name}",
    mainContent: "API documentation for {name}",
    collapsed: "Collapsed",
    webhooks: "Webhooks",
    channels: "Channels"
  },
  server: {
    label: "Server",
    select: "Select a server"
  },
  info: { termsOfService: "Terms of Service" },
  asyncapi: {
    servers: "Servers",
    protocols: "Protocols"
  },
  clientLibraries: {
    heading: "Client Libraries",
    more: "More",
    selectAll: "Select from all clients"
  },
  operation: {
    body: "Body",
    cookies: "Cookies",
    headers: "Headers",
    pathParameters: "Path Parameters",
    queryParameters: "Query Parameters",
    requestBody: "Request Body",
    responses: "Responses",
    testRequest: "Test Request",
    webhook: "Webhook",
    selectedContentType: "Selected Content Type",
    hideHeaders: "Hide Headers",
    showHeaders: "Show Headers",
    callbacks: "Callbacks"
  },
  response: {
    exampleResponses: "Example Responses",
    noBody: "No Body",
    showSchema: "Show Schema",
    status: "Status"
  },
  schema: {
    example: "Example",
    examples: "Examples",
    default: "Default",
    schema: "Schema",
    emptyObject: "Empty object",
    showAdditionalProperties: "Show additional properties",
    childAttributes: "Child Attributes",
    hideChildAttributes: "Hide {name}",
    showChildAttributes: "Show {name}",
    forName: "for {name}",
    showSchemaDetails: "Show Schema Details",
    oneOf: "One of",
    anyOf: "Any of",
    allOf: "All of",
    not: "Not",
    unknownType: "unknown type"
  },
  download: {
    openapi: "Download OpenAPI Document",
    asyncapi: "Download AsyncAPI Document"
  },
  models: { label: "Models" },
  actions: {
    copyLink: "Copy link",
    copyLinkTo: "Copy link to {name}",
    copyToClipboard: "Copy link to clipboard",
    copyEndpointUrl: "Copy endpoint URL",
    showMore: "Show More"
  },
  agent: {
    askAi: "Ask AI",
    askAiAgent: "Ask AI Agent",
    close: "Close Client"
  },
  mcp: {
    generate: "Generate MCP",
    connect: "Connect MCP"
  },
  developerTools: {
    title: "Developer Tools",
    configure: "Configure",
    share: "Share",
    deploy: "Deploy",
    scalarConfiguration: "Scalar Configuration",
    theme: "Theme",
    layout: "Layout",
    layoutOptions: "Layout Options",
    intro: "The developer tools allow you to customize the appearance and behavior of your documentation. You can also share your documentation using the Scalar Registry.",
    disableToolbarBefore: "To disable the toolbar, set",
    disableToolbarAfter: "in your configuration.",
    localhostOnly: "The developer tools will only appear when running on localhost.",
    layoutModern: "Modern",
    layoutClassic: "Classic",
    showSidebar: "Show Sidebar",
    defaultOpenFirstTag: "Default Open First Tag",
    defaultOpenAllTags: "Default Open All Tags",
    expandAll: "Expand All {label}",
    expandAllResponses: "Expand All Responses",
    hideClientButton: "Hide Client Button",
    hideDarkModeToggle: "Hide Dark Mode Toggle",
    hideModels: "Hide {label}",
    hideSearch: "Hide Search",
    showOperationId: "Show Operation ID",
    hideTestRequestButton: "Hide Test Request Button",
    scalarDocs: "Scalar Docs",
    deployDescription: "Deploy your documentation on Scalar, the modern documentation platform for your API and everything else.",
    shareTitle: "Share your API Reference",
    shareDescription: "Upload your OpenAPI document to share your API Reference with others. As easy as pressing a button.",
    uploadDocument: "Upload Document",
    temporaryLinkExpiration: "Your document will automatically be deleted after 7 days.",
    deployOnScalar: "Deploy on Scalar",
    deployFree: "Deploy your documentation for free.",
    additionalFeaturesMightRequire: "Additional features might require",
    generate: "Generate",
    passwordProtection: "Password Protection",
    customDomains: "Custom Domains",
    freeFormContent: "Free-form content",
    cdnInfrastructure: "CDN Infrastructure",
    pullFromGitHub: "Pull from GitHub",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Spectral Linting",
    jsonSchemaHosting: "JSON Schema Hosting",
    askAi: "Ask AI",
    mcpServers: "MCP Servers",
    unableToExportDocument: "Unable to export active document",
    unknownError: "An unknown error occurred"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "Welcome to the Scalar API References + Swagger Editor, a Free & Open-Source tool that takes your Swagger/OAS file and generates Beautiful API references.",
    showExample: "Show Example",
    uploadFile: "Upload File",
    integrations: "INTEGRATIONS",
    theming: "THEMING",
    features: "Features",
    customize: "Customize",
    customizeDescription: "Bring your typography & color palettes, or use our themes!",
    testing: "Testing",
    testingDescription: "A deeply integrated Rest API Client (Also Free & Open-Source)",
    search: "Search",
    searchDescription: "Fully integrated Search (Using fuse.js)",
    hosting: "Hosting",
    hostingDescription: "Free subdomain hosting on https://apidocumentation.com",
    openApiSwagger: "OpenAPI & Swagger",
    openApiSwaggerDescription: "Support for OpenAPI 3.1, OpenAPI 3.0, and Swagger 2.0",
    codeSamples: "Code Samples",
    codeSamplesDescription: "Code samples to show off your API in most popular languages"
  },
  footer: { poweredByScalar: "Powered by Scalar" },
  authentication: {
    title: "Authentication",
    accepts: "Accepts",
    allOf: "all of:",
    authentication: "authentication",
    optional: "Auth Optional",
    oneOf: "one of:",
    required: "Auth Required",
    requires: "Requires",
    scopes: "OAuth scopes"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/es.js
var es = {
  common: {
    additionalProperties: "propiedades adicionales",
    const: "constante",
    deprecated: "obsoleto",
    description: "Descripción",
    discriminator: "Discriminador",
    enum: "enum",
    format: "Formato",
    greaterThan: "mayor que",
    httpMethod: "Método HTTP",
    keys: "claves",
    lessThan: "menor que",
    max: "máx.",
    min: "mín.",
    maxLength: "longitud máx.",
    minLength: "longitud mín.",
    multipleOf: "múltiplo de",
    nullable: "admite null",
    path: "Ruta",
    propertyNames: "nombres de propiedades",
    pattern: "Patrón",
    copyPattern: "Copiar patrón",
    readOnly: "solo lectura",
    required: "obligatorio",
    hideValues: "Ocultar valores",
    showAllValues: "Mostrar todos los valores",
    type: "Tipo",
    unique: "único",
    values: "valores",
    writeOnly: "solo escritura"
  },
  search: {
    label: "Buscar",
    inputLabel: "Introduce tu consulta de búsqueda",
    open: "Abrir búsqueda",
    placeholder: "Buscar...",
    clear: "Borrar búsqueda",
    keyboardShortcut: "Atajo de teclado:",
    command: "Comando",
    control: "Control",
    results: "Resultados de búsqueda de la referencia",
    navigate: "Navegar",
    select: "Seleccionar",
    instructions: "Pulsa flecha arriba o abajo para navegar, Enter para seleccionar y escribe para filtrar resultados",
    entryHeading: "Encabezado",
    entryOperation: "Operación",
    entryTag: "Etiqueta",
    entryTagGroup: "Grupo de etiquetas",
    entryWebhook: "Webhook"
  },
  navigation: {
    introduction: "Introducción",
    closeGroup: "Cerrar grupo",
    closeMenu: "Cerrar menú",
    openGroup: "Abrir grupo",
    openMenu: "Abrir menú",
    operations: "Operaciones",
    endpoints: "Endpoints de {name}",
    showAllEndpoints: "Mostrar todos los endpoints de {name}",
    sidebarFor: "Barra lateral de {name}",
    mainContent: "Documentación de la API de {name}",
    collapsed: "Contraído",
    webhooks: "Webhooks",
    channels: "Canales"
  },
  server: {
    label: "Servidor",
    select: "Seleccionar un servidor"
  },
  info: { termsOfService: "Términos del servicio" },
  asyncapi: {
    servers: "Servidores",
    protocols: "Protocolos"
  },
  clientLibraries: {
    heading: "Bibliotecas cliente",
    more: "Más",
    selectAll: "Seleccionar entre todos los clientes"
  },
  operation: {
    body: "Cuerpo",
    cookies: "Cookies",
    headers: "Encabezados",
    pathParameters: "Parámetros de ruta",
    queryParameters: "Parámetros de consulta",
    requestBody: "Cuerpo de la solicitud",
    responses: "Respuestas",
    testRequest: "Probar solicitud",
    webhook: "Webhook",
    selectedContentType: "Tipo de contenido seleccionado",
    hideHeaders: "Ocultar encabezados",
    showHeaders: "Mostrar encabezados",
    callbacks: "Callbacks"
  },
  response: {
    exampleResponses: "Ejemplos de respuesta",
    noBody: "Sin cuerpo",
    showSchema: "Mostrar esquema",
    status: "Estado"
  },
  schema: {
    example: "Ejemplo",
    examples: "Ejemplos",
    default: "Predeterminado",
    schema: "Esquema",
    emptyObject: "Objeto vacío",
    showAdditionalProperties: "Mostrar propiedades adicionales",
    childAttributes: "Atributos secundarios",
    hideChildAttributes: "Ocultar {name}",
    showChildAttributes: "Mostrar {name}",
    forName: "para {name}",
    showSchemaDetails: "Mostrar detalles del esquema",
    oneOf: "Uno de",
    anyOf: "Cualquiera de",
    allOf: "Todos de",
    not: "No",
    unknownType: "tipo desconocido"
  },
  download: {
    openapi: "Descargar documento OpenAPI",
    asyncapi: "Descargar documento AsyncAPI"
  },
  models: { label: "Modelos" },
  actions: {
    copyLink: "Copiar enlace",
    copyLinkTo: "Copiar enlace a {name}",
    copyToClipboard: "Copiar enlace al portapapeles",
    copyEndpointUrl: "Copiar URL del endpoint",
    showMore: "Mostrar más"
  },
  agent: {
    askAi: "Preguntar a IA",
    askAiAgent: "Preguntar al agente de IA",
    close: "Cerrar cliente"
  },
  mcp: {
    generate: "Generar MCP",
    connect: "Conectar MCP"
  },
  developerTools: {
    title: "Herramientas de desarrollo",
    configure: "Configurar",
    share: "Compartir",
    deploy: "Desplegar",
    scalarConfiguration: "Configuración de Scalar",
    theme: "Tema",
    layout: "Diseño",
    layoutOptions: "Opciones de diseño",
    intro: "Las herramientas de desarrollo te permiten personalizar la apariencia y el comportamiento de tu documentación. También puedes compartir tu documentación con Scalar Registry.",
    disableToolbarBefore: "Para desactivar la barra de herramientas, configura",
    disableToolbarAfter: "en tu configuración.",
    localhostOnly: "Las herramientas de desarrollo solo aparecerán al ejecutarse en localhost.",
    layoutModern: "Moderno",
    layoutClassic: "Clásico",
    showSidebar: "Mostrar barra lateral",
    defaultOpenFirstTag: "Abrir la primera etiqueta por defecto",
    defaultOpenAllTags: "Abrir todas las etiquetas por defecto",
    expandAll: "Expandir todo {label}",
    expandAllResponses: "Expandir todas las respuestas",
    hideClientButton: "Ocultar botón del cliente",
    hideDarkModeToggle: "Ocultar selector de modo oscuro",
    hideModels: "Ocultar {label}",
    hideSearch: "Ocultar búsqueda",
    showOperationId: "Mostrar ID de operación",
    hideTestRequestButton: "Ocultar botón de solicitud de prueba",
    scalarDocs: "Scalar Docs",
    deployDescription: "Despliega tu documentación en Scalar, la plataforma moderna de documentación para tu API y mucho más.",
    shareTitle: "Comparte tu API Reference",
    shareDescription: "Sube tu documento OpenAPI para compartir tu API Reference con otras personas. Tan fácil como pulsar un botón.",
    uploadDocument: "Subir documento",
    temporaryLinkExpiration: "Tu documento se eliminará automáticamente después de 7 días.",
    deployOnScalar: "Desplegar en Scalar",
    deployFree: "Despliega tu documentación gratis.",
    additionalFeaturesMightRequire: "Las funciones adicionales pueden requerir",
    generate: "Generar",
    passwordProtection: "Protección con contraseña",
    customDomains: "Dominios personalizados",
    freeFormContent: "Contenido libre",
    cdnInfrastructure: "Infraestructura CDN",
    pullFromGitHub: "Importar desde GitHub",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Linting de Spectral",
    jsonSchemaHosting: "Alojamiento de JSON Schema",
    askAi: "Preguntar a IA",
    mcpServers: "Servidores MCP",
    unableToExportDocument: "No se pudo exportar el documento activo",
    unknownError: "Se produjo un error desconocido"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "Bienvenido a Scalar API References + Swagger Editor, una herramienta gratuita y de código abierto que toma tu archivo Swagger/OAS y genera API References elegantes.",
    showExample: "Mostrar ejemplo",
    uploadFile: "Subir archivo",
    integrations: "INTEGRACIONES",
    theming: "TEMAS",
    features: "Funciones",
    customize: "Personalizar",
    customizeDescription: "Usa tu tipografía y paletas de colores, o nuestros temas.",
    testing: "Pruebas",
    testingDescription: "Un REST API Client profundamente integrado (también gratuito y de código abierto)",
    search: "Búsqueda",
    searchDescription: "Búsqueda completamente integrada (con fuse.js)",
    hosting: "Hosting",
    hostingDescription: "Hosting gratuito en un subdominio de https://apidocumentation.com",
    openApiSwagger: "OpenAPI y Swagger",
    openApiSwaggerDescription: "Compatibilidad con OpenAPI 3.1, OpenAPI 3.0 y Swagger 2.0",
    codeSamples: "Ejemplos de código",
    codeSamplesDescription: "Ejemplos de código para mostrar tu API en los lenguajes más populares"
  },
  footer: { poweredByScalar: "Desarrollado por Scalar" },
  authentication: {
    title: "Autenticación",
    accepts: "Acepta",
    allOf: "todo lo siguiente:",
    authentication: "autenticación",
    optional: "Autenticación opcional",
    oneOf: "uno de:",
    required: "Autenticación requerida",
    requires: "Requiere",
    scopes: "Ámbitos de OAuth"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/fr.js
var fr = {
  common: {
    additionalProperties: "propriétés supplémentaires",
    const: "constante",
    deprecated: "obsolète",
    description: "Description",
    discriminator: "Discriminateur",
    enum: "enum",
    format: "Format",
    greaterThan: "supérieur à",
    httpMethod: "Méthode HTTP",
    keys: "clés",
    lessThan: "inférieur à",
    max: "max.",
    min: "min.",
    maxLength: "longueur max.",
    minLength: "longueur min.",
    multipleOf: "multiple de",
    nullable: "nullable",
    path: "Chemin",
    propertyNames: "noms des propriétés",
    pattern: "Motif",
    copyPattern: "Copier le motif",
    readOnly: "lecture seule",
    required: "obligatoire",
    hideValues: "Masquer les valeurs",
    showAllValues: "Afficher toutes les valeurs",
    type: "Type",
    unique: "unique",
    values: "valeurs",
    writeOnly: "écriture seule"
  },
  search: {
    label: "Rechercher",
    inputLabel: "Saisissez votre recherche",
    open: "Ouvrir la recherche",
    placeholder: "Rechercher...",
    clear: "Effacer la recherche",
    keyboardShortcut: "Raccourci clavier :",
    command: "Commande",
    control: "Contrôle",
    results: "Résultats de recherche de la référence",
    navigate: "Naviguer",
    select: "Sélectionner",
    instructions: "Appuyez sur flèche haut ou bas pour naviguer, Entrée pour sélectionner, saisissez du texte pour filtrer les résultats",
    entryHeading: "Titre",
    entryOperation: "Opération",
    entryTag: "Balise",
    entryTagGroup: "Groupe de balises",
    entryWebhook: "Webhook"
  },
  navigation: {
    introduction: "Introduction",
    closeGroup: "Fermer le groupe",
    closeMenu: "Fermer le menu",
    openGroup: "Ouvrir le groupe",
    openMenu: "Ouvrir le menu",
    operations: "Opérations",
    endpoints: "Endpoints de {name}",
    showAllEndpoints: "Afficher tous les endpoints de {name}",
    sidebarFor: "Barre latérale pour {name}",
    mainContent: "Documentation de l’API pour {name}",
    collapsed: "Réduit",
    webhooks: "Webhooks",
    channels: "Canaux"
  },
  server: {
    label: "Serveur",
    select: "Sélectionner un serveur"
  },
  info: { termsOfService: "Conditions d’utilisation" },
  asyncapi: {
    servers: "Serveurs",
    protocols: "Protocoles"
  },
  clientLibraries: {
    heading: "Bibliothèques clientes",
    more: "Plus",
    selectAll: "Sélectionner parmi tous les clients"
  },
  operation: {
    body: "Corps",
    cookies: "Cookies",
    headers: "En-têtes",
    pathParameters: "Paramètres de chemin",
    queryParameters: "Paramètres de requête",
    requestBody: "Corps de la requête",
    responses: "Réponses",
    testRequest: "Tester la requête",
    webhook: "Webhook",
    selectedContentType: "Type de contenu sélectionné",
    hideHeaders: "Masquer les en-têtes",
    showHeaders: "Afficher les en-têtes",
    callbacks: "Callbacks"
  },
  response: {
    exampleResponses: "Exemples de réponses",
    noBody: "Aucun corps",
    showSchema: "Afficher le schéma",
    status: "Statut"
  },
  schema: {
    example: "Exemple",
    examples: "Exemples",
    default: "Par défaut",
    schema: "Schéma",
    emptyObject: "Objet vide",
    showAdditionalProperties: "Afficher les propriétés supplémentaires",
    childAttributes: "Attributs enfants",
    hideChildAttributes: "Masquer {name}",
    showChildAttributes: "Afficher {name}",
    forName: "pour {name}",
    showSchemaDetails: "Afficher les détails du schéma",
    oneOf: "Un parmi",
    anyOf: "N’importe lequel parmi",
    allOf: "Tous parmi",
    not: "Non",
    unknownType: "type inconnu"
  },
  download: {
    openapi: "Télécharger le document OpenAPI",
    asyncapi: "Télécharger le document AsyncAPI"
  },
  models: { label: "Modèles" },
  actions: {
    copyLink: "Copier le lien",
    copyLinkTo: "Copier le lien vers {name}",
    copyToClipboard: "Copier le lien dans le presse-papiers",
    copyEndpointUrl: "Copier l’URL de l’endpoint",
    showMore: "Afficher plus"
  },
  agent: {
    askAi: "Demander à l’IA",
    askAiAgent: "Demander à l’agent IA",
    close: "Fermer le client"
  },
  mcp: {
    generate: "Générer MCP",
    connect: "Connecter MCP"
  },
  developerTools: {
    title: "Outils de développement",
    configure: "Configurer",
    share: "Partager",
    deploy: "Déployer",
    scalarConfiguration: "Configuration Scalar",
    theme: "Thème",
    layout: "Mise en page",
    layoutOptions: "Options de mise en page",
    intro: "Les outils de développement vous permettent de personnaliser l’apparence et le comportement de votre documentation. Vous pouvez aussi partager votre documentation avec Scalar Registry.",
    disableToolbarBefore: "Pour désactiver la barre d’outils, définissez",
    disableToolbarAfter: "dans votre configuration.",
    localhostOnly: "Les outils de développement apparaissent uniquement lors d’une exécution sur localhost.",
    layoutModern: "Moderne",
    layoutClassic: "Classique",
    showSidebar: "Afficher la barre latérale",
    defaultOpenFirstTag: "Ouvrir le premier tag par défaut",
    defaultOpenAllTags: "Ouvrir tous les tags par défaut",
    expandAll: "Tout développer pour {label}",
    expandAllResponses: "Développer toutes les réponses",
    hideClientButton: "Masquer le bouton client",
    hideDarkModeToggle: "Masquer le sélecteur de mode sombre",
    hideModels: "Masquer {label}",
    hideSearch: "Masquer la recherche",
    showOperationId: "Afficher l’ID d’opération",
    hideTestRequestButton: "Masquer le bouton de requête de test",
    scalarDocs: "Scalar Docs",
    deployDescription: "Déployez votre documentation sur Scalar, la plateforme moderne de documentation pour votre API et bien plus encore.",
    shareTitle: "Partager votre API Reference",
    shareDescription: "Téléversez votre document OpenAPI pour partager votre API Reference avec d’autres personnes. Aussi simple qu’un clic.",
    uploadDocument: "Téléverser le document",
    temporaryLinkExpiration: "Votre document sera automatiquement supprimé après 7 jours.",
    deployOnScalar: "Déployer sur Scalar",
    deployFree: "Déployez votre documentation gratuitement.",
    additionalFeaturesMightRequire: "Les fonctionnalités supplémentaires peuvent nécessiter",
    generate: "Générer",
    passwordProtection: "Protection par mot de passe",
    customDomains: "Domaines personnalisés",
    freeFormContent: "Contenu libre",
    cdnInfrastructure: "Infrastructure CDN",
    pullFromGitHub: "Import depuis GitHub",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Linting Spectral",
    jsonSchemaHosting: "Hébergement JSON Schema",
    askAi: "Demander à l’IA",
    mcpServers: "Serveurs MCP",
    unableToExportDocument: "Impossible d’exporter le document actif",
    unknownError: "Une erreur inconnue est survenue"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "Bienvenue dans Scalar API References + Swagger Editor, un outil gratuit et open source qui transforme votre fichier Swagger/OAS en belles API References.",
    showExample: "Afficher l’exemple",
    uploadFile: "Téléverser un fichier",
    integrations: "INTÉGRATIONS",
    theming: "THÈMES",
    features: "Fonctionnalités",
    customize: "Personnaliser",
    customizeDescription: "Utilisez votre typographie et vos palettes de couleurs, ou nos thèmes !",
    testing: "Tests",
    testingDescription: "Un REST API Client profondément intégré (également gratuit et open source)",
    search: "Recherche",
    searchDescription: "Recherche entièrement intégrée (avec fuse.js)",
    hosting: "Hébergement",
    hostingDescription: "Hébergement gratuit sur un sous-domaine de https://apidocumentation.com",
    openApiSwagger: "OpenAPI et Swagger",
    openApiSwaggerDescription: "Prise en charge d’OpenAPI 3.1, OpenAPI 3.0 et Swagger 2.0",
    codeSamples: "Exemples de code",
    codeSamplesDescription: "Des exemples de code pour présenter votre API dans les langages les plus populaires"
  },
  footer: { poweredByScalar: "Propulsé par Scalar" },
  authentication: {
    title: "Authentification",
    accepts: "Accepte",
    allOf: "tous les éléments :",
    authentication: "authentification",
    optional: "Authentification optionnelle",
    oneOf: "l’un des éléments :",
    required: "Authentification requise",
    requires: "Requiert",
    scopes: "Portées OAuth"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/pt.js
var pt = {
  common: {
    additionalProperties: "propriedades adicionais",
    const: "const",
    deprecated: "obsoleto",
    description: "Descrição",
    discriminator: "Discriminador",
    enum: "enum",
    format: "Formato",
    greaterThan: "maior que",
    httpMethod: "Método HTTP",
    keys: "chaves",
    lessThan: "menor que",
    max: "máx",
    min: "mín",
    maxLength: "tamanho máximo",
    minLength: "tamanho mínimo",
    multipleOf: "múltiplo de",
    nullable: "aceita nulo",
    path: "Caminho",
    propertyNames: "nomes de propriedades",
    pattern: "Padrão",
    copyPattern: "Copiar padrão",
    readOnly: "somente leitura",
    required: "obrigatório",
    hideValues: "Ocultar valores",
    showAllValues: "Mostrar todos os valores",
    type: "Tipo",
    unique: "único",
    values: "valores",
    writeOnly: "somente escrita"
  },
  search: {
    label: "Buscar",
    inputLabel: "Digite o termo de busca",
    open: "Abrir Busca",
    placeholder: "Buscar...",
    clear: "Limpar Busca",
    keyboardShortcut: "Atalho de Teclado:",
    command: "Command",
    control: "Control",
    results: "Resultados da Busca de Referência",
    navigate: "Navegar",
    select: "Selecionar",
    instructions: "Pressione seta para cima / seta para baixo para navegar, enter para selecionar, digite para filtrar resultados",
    entryHeading: "Título",
    entryOperation: "Operação",
    entryTag: "Tag",
    entryTagGroup: "Grupo de Tags",
    entryWebhook: "Webhook"
  },
  navigation: {
    introduction: "Introdução",
    closeGroup: "Fechar Grupo",
    closeMenu: "Fechar Menu",
    openGroup: "Abrir Grupo",
    openMenu: "Abrir Menu",
    operations: "Operações",
    endpoints: "Endpoints de {name}",
    showAllEndpoints: "Mostrar todos os endpoints de {name}",
    sidebarFor: "Barra lateral de {name}",
    mainContent: "Documentação da API para {name}",
    collapsed: "Recolhido",
    webhooks: "Webhooks",
    channels: "Canais"
  },
  server: {
    label: "Servidor",
    select: "Selecione um servidor"
  },
  info: { termsOfService: "Termos de Serviço" },
  asyncapi: {
    servers: "Servidores",
    protocols: "Protocolos"
  },
  clientLibraries: {
    heading: "Bibliotecas Cliente",
    more: "Mais",
    selectAll: "Selecionar de todos os clientes"
  },
  operation: {
    body: "Corpo",
    cookies: "Cookies",
    headers: "Cabeçalhos",
    pathParameters: "Parâmetros de Caminho",
    queryParameters: "Parâmetros de Consulta",
    requestBody: "Corpo da Requisição",
    responses: "Respostas",
    testRequest: "Testar Requisição",
    webhook: "Webhook",
    selectedContentType: "Tipo de Conteúdo Selecionado",
    hideHeaders: "Ocultar Cabeçalhos",
    showHeaders: "Mostrar Cabeçalhos",
    callbacks: "Callbacks"
  },
  response: {
    exampleResponses: "Exemplos de Respostas",
    noBody: "Sem Corpo",
    showSchema: "Mostrar Schema",
    status: "Status"
  },
  schema: {
    example: "Exemplo",
    examples: "Exemplos",
    default: "Padrão",
    schema: "Schema",
    emptyObject: "Objeto vazio",
    showAdditionalProperties: "Mostrar propriedades adicionais",
    childAttributes: "Atributos Filhos",
    hideChildAttributes: "Ocultar {name}",
    showChildAttributes: "Mostrar {name}",
    forName: "para {name}",
    showSchemaDetails: "Mostrar Detalhes do Schema",
    oneOf: "Um de",
    anyOf: "Qualquer um de",
    allOf: "Todos de",
    not: "Não",
    unknownType: "tipo desconhecido"
  },
  download: {
    openapi: "Baixar Documento OpenAPI",
    asyncapi: "Baixar Documento AsyncAPI"
  },
  models: { label: "Modelos" },
  actions: {
    copyLink: "Copiar link",
    copyLinkTo: "Copiar link para {name}",
    copyToClipboard: "Copiar link para a área de transferência",
    copyEndpointUrl: "Copiar URL do endpoint",
    showMore: "Mostrar Mais"
  },
  agent: {
    askAi: "Perguntar à IA",
    askAiAgent: "Perguntar ao Agente de IA",
    close: "Fechar Cliente"
  },
  mcp: {
    generate: "Gerar MCP",
    connect: "Conectar MCP"
  },
  developerTools: {
    title: "Ferramentas de Desenvolvedor",
    configure: "Configurar",
    share: "Compartilhar",
    deploy: "Implantar",
    scalarConfiguration: "Configuração do Scalar",
    theme: "Tema",
    layout: "Layout",
    layoutOptions: "Opções de Layout",
    intro: "As ferramentas de desenvolvedor permitem personalizar a aparência e o comportamento da sua documentação. Você também pode compartilhar sua documentação usando o Scalar Registry.",
    disableToolbarBefore: "Para desativar a barra de ferramentas, defina",
    disableToolbarAfter: "na sua configuração.",
    localhostOnly: "As ferramentas de desenvolvedor só aparecerão ao rodar em localhost.",
    layoutModern: "Moderno",
    layoutClassic: "Clássico",
    showSidebar: "Mostrar Barra Lateral",
    defaultOpenFirstTag: "Abrir Primeira Tag por Padrão",
    defaultOpenAllTags: "Abrir Todas as Tags por Padrão",
    expandAll: "Expandir Todos {label}",
    expandAllResponses: "Expandir Todas as Respostas",
    hideClientButton: "Ocultar Botão do Cliente",
    hideDarkModeToggle: "Ocultar Alternador de Modo Escuro",
    hideModels: "Ocultar {label}",
    hideSearch: "Ocultar Busca",
    showOperationId: "Mostrar ID da Operação",
    hideTestRequestButton: "Ocultar Botão de Testar Requisição",
    scalarDocs: "Documentação do Scalar",
    deployDescription: "Implante sua documentação no Scalar, a plataforma de documentação moderna para sua API e tudo mais.",
    shareTitle: "Compartilhe sua Referência de API",
    shareDescription: "Envie seu documento OpenAPI para compartilhar sua Referência de API com outras pessoas. Tão fácil quanto apertar um botão.",
    uploadDocument: "Enviar Documento",
    temporaryLinkExpiration: "Seu documento será excluído automaticamente após 7 dias.",
    deployOnScalar: "Implantar no Scalar",
    deployFree: "Implante sua documentação gratuitamente.",
    additionalFeaturesMightRequire: "Recursos adicionais podem exigir",
    generate: "Gerar",
    passwordProtection: "Proteção por Senha",
    customDomains: "Domínios Personalizados",
    freeFormContent: "Conteúdo de formato livre",
    cdnInfrastructure: "Infraestrutura de CDN",
    pullFromGitHub: "Importar do GitHub",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Linting com Spectral",
    jsonSchemaHosting: "Hospedagem de JSON Schema",
    askAi: "Perguntar à IA",
    mcpServers: "Servidores MCP",
    unableToExportDocument: "Não foi possível exportar o documento ativo",
    unknownError: "Ocorreu um erro desconhecido"
  },
  gettingStarted: {
    swaggerEditor: "Editor Swagger",
    description: "Bem-vindo às Referências de API Scalar + Editor Swagger, uma ferramenta gratuita e de código aberto que transforma seu arquivo Swagger/OAS em belas referências de API.",
    showExample: "Mostrar Exemplo",
    uploadFile: "Enviar Arquivo",
    integrations: "INTEGRAÇÕES",
    theming: "TEMAS",
    features: "Recursos",
    customize: "Personalizar",
    customizeDescription: "Traga sua tipografia e paletas de cores, ou use nossos temas!",
    testing: "Testes",
    testingDescription: "Um Cliente de API REST profundamente integrado (Também gratuito e de código aberto)",
    search: "Busca",
    searchDescription: "Busca totalmente integrada (usando fuse.js)",
    hosting: "Hospedagem",
    hostingDescription: "Hospedagem gratuita de subdomínio em https://apidocumentation.com",
    openApiSwagger: "OpenAPI e Swagger",
    openApiSwaggerDescription: "Suporte para OpenAPI 3.1, OpenAPI 3.0 e Swagger 2.0",
    codeSamples: "Exemplos de Código",
    codeSamplesDescription: "Exemplos de código para mostrar sua API nas linguagens mais populares"
  },
  footer: { poweredByScalar: "Desenvolvido com Scalar" },
  authentication: {
    title: "Autenticação",
    accepts: "Aceita",
    allOf: "todos de:",
    authentication: "autenticação",
    optional: "Autenticação Opcional",
    oneOf: "um de:",
    required: "Autenticação Obrigatória",
    requires: "Requer",
    scopes: "Escopos OAuth"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/ru.js
var ru = {
  common: {
    additionalProperties: "дополнительные свойства",
    const: "константа",
    deprecated: "устарело",
    description: "Описание",
    discriminator: "Дискриминатор",
    enum: "enum",
    format: "Формат",
    greaterThan: "больше чем",
    httpMethod: "HTTP-метод",
    keys: "ключи",
    lessThan: "меньше чем",
    max: "макс.",
    min: "мин.",
    maxLength: "макс. длина",
    minLength: "мин. длина",
    multipleOf: "кратно",
    nullable: "может быть null",
    path: "Путь",
    propertyNames: "имена свойств",
    pattern: "Шаблон",
    copyPattern: "Скопировать шаблон",
    readOnly: "только чтение",
    required: "обязательно",
    hideValues: "Скрыть значения",
    showAllValues: "Показать все значения",
    type: "Тип",
    unique: "уникально",
    values: "значения",
    writeOnly: "только запись"
  },
  search: {
    label: "Поиск",
    inputLabel: "Введите поисковый запрос",
    open: "Открыть поиск",
    placeholder: "Поиск...",
    clear: "Очистить поиск",
    keyboardShortcut: "Сочетание клавиш:",
    command: "Command",
    control: "Control",
    results: "Результаты поиска по документации",
    navigate: "Навигация",
    select: "Выбрать",
    instructions: "Нажмите стрелку вверх или вниз для навигации, Enter для выбора, вводите текст для фильтрации результатов",
    entryHeading: "Заголовок",
    entryOperation: "Операция",
    entryTag: "Тег",
    entryTagGroup: "Группа тегов",
    entryWebhook: "Вебхук"
  },
  navigation: {
    introduction: "Введение",
    closeGroup: "Закрыть группу",
    closeMenu: "Закрыть меню",
    openGroup: "Открыть группу",
    openMenu: "Открыть меню",
    operations: "Операции",
    endpoints: "Эндпоинты {name}",
    showAllEndpoints: "Показать все эндпоинты {name}",
    sidebarFor: "Боковая панель для {name}",
    mainContent: "Документация API для {name}",
    collapsed: "Свернуто",
    webhooks: "Вебхуки",
    channels: "Каналы"
  },
  server: {
    label: "Сервер",
    select: "Выберите сервер"
  },
  info: { termsOfService: "Условия использования" },
  asyncapi: {
    servers: "Серверы",
    protocols: "Протоколы"
  },
  clientLibraries: {
    heading: "Клиентские библиотеки",
    more: "Ещё",
    selectAll: "Выбрать из всех клиентов"
  },
  operation: {
    body: "Тело",
    cookies: "Cookie",
    headers: "Заголовки",
    pathParameters: "Параметры пути",
    queryParameters: "Query-параметры",
    requestBody: "Тело запроса",
    responses: "Ответы",
    testRequest: "Проверить запрос",
    webhook: "Вебхук",
    selectedContentType: "Выбранный тип содержимого",
    hideHeaders: "Скрыть заголовки",
    showHeaders: "Показать заголовки",
    callbacks: "Обратные вызовы"
  },
  response: {
    exampleResponses: "Примеры ответов",
    noBody: "Нет тела",
    showSchema: "Показать схему",
    status: "Статус"
  },
  schema: {
    example: "Пример",
    examples: "Примеры",
    default: "Значение по умолчанию",
    schema: "Схема",
    emptyObject: "Пустой объект",
    showAdditionalProperties: "Показать дополнительные свойства",
    childAttributes: "Дочерние атрибуты",
    hideChildAttributes: "Скрыть {name}",
    showChildAttributes: "Показать {name}",
    forName: "для {name}",
    showSchemaDetails: "Показать детали схемы",
    oneOf: "Один из",
    anyOf: "Любой из",
    allOf: "Все из",
    not: "Не",
    unknownType: "неизвестный тип"
  },
  download: {
    openapi: "Скачать OpenAPI-документ",
    asyncapi: "Скачать AsyncAPI-документ"
  },
  models: { label: "Модели" },
  actions: {
    copyLink: "Скопировать ссылку",
    copyLinkTo: "Скопировать ссылку на {name}",
    copyToClipboard: "Скопировать ссылку в буфер обмена",
    copyEndpointUrl: "Скопировать URL endpoint-а",
    showMore: "Показать ещё"
  },
  agent: {
    askAi: "Спросить AI",
    askAiAgent: "Спросить AI-агента",
    close: "Закрыть клиент"
  },
  mcp: {
    generate: "Создать MCP",
    connect: "Подключить MCP"
  },
  developerTools: {
    title: "Инструменты разработчика",
    configure: "Настроить",
    share: "Поделиться",
    deploy: "Опубликовать",
    scalarConfiguration: "Конфигурация Scalar",
    theme: "Тема",
    layout: "Макет",
    layoutOptions: "Параметры макета",
    intro: "Инструменты разработчика позволяют настроить внешний вид и поведение документации. Также можно поделиться документацией через Scalar Registry.",
    disableToolbarBefore: "Чтобы отключить панель, установите",
    disableToolbarAfter: "в конфигурации.",
    localhostOnly: "Инструменты разработчика отображаются только при запуске на localhost.",
    layoutModern: "Современный",
    layoutClassic: "Классический",
    showSidebar: "Показать боковую панель",
    defaultOpenFirstTag: "Открывать первый тег по умолчанию",
    defaultOpenAllTags: "Открывать все теги по умолчанию",
    expandAll: "Развернуть все {label}",
    expandAllResponses: "Развернуть все ответы",
    hideClientButton: "Скрыть кнопку клиента",
    hideDarkModeToggle: "Скрыть переключатель тёмной темы",
    hideModels: "Скрыть {label}",
    hideSearch: "Скрыть поиск",
    showOperationId: "Показать ID операции",
    hideTestRequestButton: "Скрыть кнопку тестового запроса",
    scalarDocs: "Scalar Docs",
    deployDescription: "Опубликуйте документацию на Scalar — современной платформе документации для вашего API и не только.",
    shareTitle: "Поделиться API Reference",
    shareDescription: "Загрузите документ OpenAPI, чтобы поделиться API Reference с другими. Так же просто, как нажать кнопку.",
    uploadDocument: "Загрузить документ",
    temporaryLinkExpiration: "Документ будет автоматически удалён через 7 дней.",
    deployOnScalar: "Опубликовать на Scalar",
    deployFree: "Опубликуйте документацию бесплатно.",
    additionalFeaturesMightRequire: "Для дополнительных возможностей может потребоваться",
    generate: "Создать",
    passwordProtection: "Защита паролем",
    customDomains: "Пользовательские домены",
    freeFormContent: "Произвольный контент",
    cdnInfrastructure: "CDN-инфраструктура",
    pullFromGitHub: "Загрузка из GitHub",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Линтинг Spectral",
    jsonSchemaHosting: "Хостинг JSON Schema",
    askAi: "Спросить AI",
    mcpServers: "MCP-серверы",
    unableToExportDocument: "Не удалось экспортировать активный документ",
    unknownError: "Произошла неизвестная ошибка"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "Добро пожаловать в Scalar API References + Swagger Editor — бесплатный инструмент с открытым исходным кодом, который принимает файл Swagger/OAS и создаёт красивые API Reference.",
    showExample: "Показать пример",
    uploadFile: "Загрузить файл",
    integrations: "ИНТЕГРАЦИИ",
    theming: "ТЕМЫ",
    features: "Возможности",
    customize: "Настройка",
    customizeDescription: "Используйте свою типографику и цветовые палитры или наши темы!",
    testing: "Тестирование",
    testingDescription: "Глубоко интегрированный REST API Client (тоже бесплатный и с открытым исходным кодом)",
    search: "Поиск",
    searchDescription: "Полностью интегрированный поиск (с использованием fuse.js)",
    hosting: "Хостинг",
    hostingDescription: "Бесплатный хостинг на поддомене https://apidocumentation.com",
    openApiSwagger: "OpenAPI и Swagger",
    openApiSwaggerDescription: "Поддержка OpenAPI 3.1, OpenAPI 3.0 и Swagger 2.0",
    codeSamples: "Примеры кода",
    codeSamplesDescription: "Примеры кода для демонстрации вашего API на самых популярных языках"
  },
  footer: { poweredByScalar: "Работает на Scalar" },
  authentication: {
    title: "Аутентификация",
    accepts: "Принимает",
    allOf: "все из:",
    authentication: "аутентификация",
    optional: "Аутентификация необязательна",
    oneOf: "одно из:",
    required: "Требуется аутентификация",
    requires: "Требуется",
    scopes: "Области OAuth"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/locales/zh-cn.js
var zhCn = {
  common: {
    additionalProperties: "附加属性",
    const: "常量",
    deprecated: "已弃用",
    description: "描述",
    discriminator: "鉴别器",
    enum: "枚举",
    format: "格式",
    greaterThan: "大于",
    httpMethod: "HTTP 方法",
    keys: "键",
    lessThan: "小于",
    max: "最大值",
    min: "最小值",
    maxLength: "最大长度",
    minLength: "最小长度",
    multipleOf: "倍数",
    nullable: "可为 null",
    path: "路径",
    propertyNames: "属性名称",
    pattern: "模式",
    copyPattern: "复制模式",
    readOnly: "只读",
    required: "必填",
    hideValues: "隐藏值",
    showAllValues: "显示所有值",
    type: "类型",
    unique: "唯一",
    values: "值",
    writeOnly: "只写"
  },
  search: {
    label: "搜索",
    inputLabel: "输入搜索查询",
    open: "打开搜索",
    placeholder: "搜索...",
    clear: "清除搜索",
    keyboardShortcut: "键盘快捷键：",
    command: "Command 键",
    control: "Control 键",
    results: "参考文档搜索结果",
    navigate: "导航",
    select: "选择",
    instructions: "按上/下箭头导航，按 Enter 选择，输入内容筛选结果",
    entryHeading: "标题",
    entryOperation: "操作",
    entryTag: "标签",
    entryTagGroup: "标签组",
    entryWebhook: "Webhook"
  },
  navigation: {
    introduction: "简介",
    closeGroup: "关闭分组",
    closeMenu: "关闭菜单",
    openGroup: "打开分组",
    openMenu: "打开菜单",
    operations: "操作",
    endpoints: "{name} 端点",
    showAllEndpoints: "显示 {name} 的所有端点",
    sidebarFor: "{name} 的侧边栏",
    mainContent: "{name} 的 API 文档",
    collapsed: "已折叠",
    webhooks: "Webhooks",
    channels: "频道"
  },
  server: {
    label: "服务器",
    select: "选择服务器"
  },
  info: { termsOfService: "服务条款" },
  asyncapi: {
    servers: "服务器",
    protocols: "协议"
  },
  clientLibraries: {
    heading: "客户端库",
    more: "更多",
    selectAll: "从所有客户端中选择"
  },
  operation: {
    body: "请求体",
    cookies: "Cookie",
    headers: "请求头",
    pathParameters: "路径参数",
    queryParameters: "查询参数",
    requestBody: "请求体",
    responses: "响应",
    testRequest: "测试请求",
    webhook: "Webhook",
    selectedContentType: "已选内容类型",
    hideHeaders: "隐藏标头",
    showHeaders: "显示标头",
    callbacks: "回调"
  },
  response: {
    exampleResponses: "响应示例",
    noBody: "无内容",
    showSchema: "显示 Schema",
    status: "状态"
  },
  schema: {
    example: "示例",
    examples: "示例",
    default: "默认值",
    schema: "架构",
    emptyObject: "空对象",
    showAdditionalProperties: "显示附加属性",
    childAttributes: "子属性",
    hideChildAttributes: "隐藏 {name}",
    showChildAttributes: "显示 {name}",
    forName: "对于 {name}",
    showSchemaDetails: "显示架构详情",
    oneOf: "其中一个",
    anyOf: "任意一个",
    allOf: "全部",
    not: "非",
    unknownType: "未知类型"
  },
  download: {
    openapi: "下载 OpenAPI 文档",
    asyncapi: "下载 AsyncAPI 文档"
  },
  models: { label: "模型" },
  actions: {
    copyLink: "复制链接",
    copyLinkTo: "复制指向 {name} 的链接",
    copyToClipboard: "复制链接到剪贴板",
    copyEndpointUrl: "复制端点 URL",
    showMore: "显示更多"
  },
  agent: {
    askAi: "询问 AI",
    askAiAgent: "询问 AI 助手",
    close: "关闭客户端"
  },
  mcp: {
    generate: "生成 MCP",
    connect: "连接 MCP"
  },
  developerTools: {
    title: "开发者工具",
    configure: "配置",
    share: "分享",
    deploy: "部署",
    scalarConfiguration: "Scalar 配置",
    theme: "主题",
    layout: "布局",
    layoutOptions: "布局选项",
    intro: "开发者工具可用于自定义文档的外观和行为。你也可以通过 Scalar Registry 分享文档。",
    disableToolbarBefore: "要禁用工具栏，请在配置中设置",
    disableToolbarAfter: "。",
    localhostOnly: "开发者工具只会在 localhost 上运行时显示。",
    layoutModern: "现代",
    layoutClassic: "经典",
    showSidebar: "显示侧边栏",
    defaultOpenFirstTag: "默认打开第一个标签",
    defaultOpenAllTags: "默认打开所有标签",
    expandAll: "展开所有 {label}",
    expandAllResponses: "展开所有响应",
    hideClientButton: "隐藏客户端按钮",
    hideDarkModeToggle: "隐藏深色模式开关",
    hideModels: "隐藏 {label}",
    hideSearch: "隐藏搜索",
    showOperationId: "显示操作 ID",
    hideTestRequestButton: "隐藏测试请求按钮",
    scalarDocs: "Scalar Docs",
    deployDescription: "将你的文档部署到 Scalar，这是适用于 API 等内容的现代文档平台。",
    shareTitle: "分享你的 API Reference",
    shareDescription: "上传 OpenAPI 文档，与其他人分享你的 API Reference。只需点击按钮即可。",
    uploadDocument: "上传文档",
    temporaryLinkExpiration: "你的文档将在 7 天后自动删除。",
    deployOnScalar: "部署到 Scalar",
    deployFree: "免费部署你的文档。",
    additionalFeaturesMightRequire: "其他功能可能需要",
    generate: "生成",
    passwordProtection: "密码保护",
    customDomains: "自定义域名",
    freeFormContent: "自由内容",
    cdnInfrastructure: "CDN 基础设施",
    pullFromGitHub: "从 GitHub 拉取",
    markdownMdx: "Markdown/MDX",
    spectralLinting: "Spectral Linting",
    jsonSchemaHosting: "JSON Schema 托管",
    askAi: "询问 AI",
    mcpServers: "MCP 服务器",
    unableToExportDocument: "无法导出当前文档",
    unknownError: "发生未知错误"
  },
  gettingStarted: {
    swaggerEditor: "Swagger Editor",
    description: "欢迎使用 Scalar API References + Swagger Editor，这是一款免费开源工具，可将你的 Swagger/OAS 文件生成精美的 API References。",
    showExample: "显示示例",
    uploadFile: "上传文件",
    integrations: "集成",
    theming: "主题",
    features: "功能",
    customize: "自定义",
    customizeDescription: "使用你的排版和调色板，或使用我们的主题！",
    testing: "测试",
    testingDescription: "深度集成的 REST API Client（同样免费且开源）",
    search: "搜索",
    searchDescription: "完整集成的搜索（使用 fuse.js）",
    hosting: "托管",
    hostingDescription: "在 https://apidocumentation.com 上免费托管子域名",
    openApiSwagger: "OpenAPI 和 Swagger",
    openApiSwaggerDescription: "支持 OpenAPI 3.1、OpenAPI 3.0 和 Swagger 2.0",
    codeSamples: "代码示例",
    codeSamplesDescription: "用最流行语言展示你的 API 的代码示例"
  },
  footer: { poweredByScalar: "由 Scalar 提供支持" },
  authentication: {
    title: "身份验证",
    accepts: "接受",
    allOf: "全部：",
    authentication: "身份认证",
    optional: "身份认证可选",
    oneOf: "其中之一：",
    required: "需要身份认证",
    requires: "需要",
    scopes: "OAuth 作用域"
  }
};

// node_modules/@scalar/api-reference/dist/features/localization/translations.js
var localeTranslations = {
  en,
  ru,
  es,
  fr,
  de,
  "zh-CN": zhCn,
  ar,
  pt
};
var RTL_LOCALES = /* @__PURE__ */ new Set([
  "ar",
  "fa",
  "he",
  "ur"
]);

// node_modules/@scalar/helpers/dist/object/merge-objects.js
var mergeObjects = (base, override) => {
  if (!override || !isObject(override)) {
    return { ...base };
  }
  const result = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === void 0) {
      continue;
    }
    const baseValue = result[key];
    result[key] = isObject(baseValue) && isObject(value) ? mergeObjects(baseValue, value) : value;
  }
  return result;
};

// node_modules/@scalar/api-reference/dist/features/localization/use-localization.js
var LOCALIZATION_SYMBOL = Symbol("LOCALIZATION");
var resolveBuiltInLocale = (locale) => {
  if (!locale) return "en";
  if (locale in localeTranslations) return locale;
  const normalized = locale.replace("_", "-").toLowerCase();
  if (normalized.startsWith("zh")) return "zh-CN";
  const language = normalized.split("-")[0];
  return Object.keys(localeTranslations).find((key) => key.toLowerCase() === language) ?? "en";
};
var resolveDirection = (localization) => {
  var _a;
  if ((localization == null ? void 0 : localization.direction) && localization.direction !== "auto") return localization.direction;
  const language = (_a = ((localization == null ? void 0 : localization.locale) ?? "en").replace("_", "-").split("-")[0]) == null ? void 0 : _a.toLowerCase();
  return language && RTL_LOCALES.has(language) ? "rtl" : "ltr";
};
var resolveLocalization = (localization) => {
  const locale = (localization == null ? void 0 : localization.locale) ?? "en";
  const builtInLocale = resolveBuiltInLocale(locale);
  const translations = mergeObjects(mergeObjects(localeTranslations.en, localeTranslations[builtInLocale]), localization == null ? void 0 : localization.translations);
  return {
    locale,
    direction: resolveDirection(localization),
    translations
  };
};
var getTranslationValue = (translations, key) => key.split(".").reduce((value, segment) => {
  if (!isObject(value)) return;
  return value[segment];
}, translations);
var translateApiReference = (translations, key, params) => {
  const value = getTranslationValue(translations, key);
  const template = typeof value === "string" ? value : key;
  if (!params) return template;
  return Object.entries(params).reduce((result, [param, paramValue]) => result.replaceAll(`{${param}}`, String(paramValue)), template);
};
var createLocalizationContext = (localization) => {
  const resolved = computed(() => resolveLocalization(toValue(localization)));
  return {
    locale: computed(() => resolved.value.locale),
    direction: computed(() => resolved.value.direction),
    translations: computed(() => resolved.value.translations),
    translate: (key, params) => translateApiReference(resolved.value.translations, key, params)
  };
};
var provideLocalization = (localization) => {
  const context = createLocalizationContext(localization);
  provide(LOCALIZATION_SYMBOL, context);
  return context;
};
var useLocalization = () => inject(LOCALIZATION_SYMBOL, createLocalizationContext(void 0));

// node_modules/@scalar/api-reference/dist/features/Search/helpers/create-fuse-instance.js
function createFuseInstance() {
  return new entry_default([], {
    keys: [
      {
        name: "title",
        weight: 0.7
      },
      {
        name: "operationId",
        weight: 0.6
      },
      {
        name: "parameters",
        weight: 0.55
      },
      {
        name: "body",
        weight: 0.55
      },
      {
        name: "path",
        weight: 0.5
      },
      {
        name: "tag",
        weight: 0.4
      },
      {
        name: "description",
        weight: 0.3
      },
      {
        name: "method",
        weight: 0.3
      },
      {
        name: "responseExamples",
        weight: 0.25
      },
      {
        name: "parameterDescriptions",
        weight: 0.2
      },
      {
        name: "bodyDescriptions",
        weight: 0.2
      }
    ],
    threshold: 0.3,
    distance: 100,
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    useExtendedSearch: true,
    findAllMatches: true
  });
}

// node_modules/@scalar/api-reference/dist/helpers/get-async-api-message-payload-schema.js
var isSchemaObject2 = (value) => isObject(value);
var unwrapAsyncApiSchema = (value) => {
  if (value === void 0) return;
  const resolved = getResolvedRef(value);
  const schema = isObject(resolved) && "schemaFormat" in resolved ? getResolvedRef(resolved.schema) : resolved;
  return isSchemaObject2(schema) ? schema : void 0;
};
var getAsyncApiMessagePayloadSchema = (message) => unwrapAsyncApiSchema(message.payload);
var getAsyncApiMessageHeadersSchema = (message) => unwrapAsyncApiSchema(message.headers);

// node_modules/@scalar/api-reference/dist/helpers/get-async-api-model-schema.js
var getAsyncApiModelSchema = (document2, name) => {
  var _a;
  if (!document2.components) return;
  const entry = (_a = getResolvedRef(document2.components, mergeSiblingReferences).schemas) == null ? void 0 : _a[name];
  return unwrapAsyncApiSchema(entry);
};

// node_modules/@scalar/api-reference/dist/helpers/is-introduction-entry.js
var isIntroductionEntry = (entry) => entry.type === "text" && typeof entry.id === "string" && entry.id.endsWith("/description/introduction");

// node_modules/@scalar/api-reference/dist/features/Search/helpers/create-search-index.js
function getModelSchema(document2, name) {
  var _a, _b;
  if (isOpenApiDocument(document2)) return getResolvedRef((_b = (_a = document2.components) == null ? void 0 : _a.schemas) == null ? void 0 : _b[name]);
  if (isAsyncApiDocument(document2)) return getAsyncApiModelSchema(document2, name);
}
function responseExampleValueToString(value) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch (_error) {
    return "";
  }
}
function mediaTypeExamplesToStrings(mediaType) {
  const examplesFromNamedMap = Object.values(mediaType.examples ?? {}).flatMap((example) => {
    const resolvedExample = getResolvedRef(example);
    if (!resolvedExample || !("value" in resolvedExample)) return [];
    return responseExampleValueToString(resolvedExample.value);
  }).filter((value) => value.length > 0);
  const mediaTypeExample = "example" in mediaType && mediaType.example !== void 0 ? responseExampleValueToString(mediaType.example) : "";
  return mediaTypeExample ? [mediaTypeExample, ...examplesFromNamedMap] : examplesFromNamedMap;
}
function extractResponseExamples(responses) {
  if (!responses) return [];
  return Object.values(responses).flatMap((response) => {
    const resolvedResponse = getResolvedRef(response);
    if (!(resolvedResponse == null ? void 0 : resolvedResponse.content)) return [];
    return Object.values(resolvedResponse.content).flatMap((mediaType) => {
      const resolvedMediaType = getResolvedRef(mediaType);
      if (!resolvedMediaType) return [];
      return mediaTypeExamplesToStrings(resolvedMediaType);
    });
  }).filter((value) => value.length > 0);
}
var DEFAULT_SEARCH_INDEX_LABELS = {
  heading: "Heading",
  tagGroup: "Tag Group",
  webhook: "Webhook",
  webhooks: "Webhooks",
  introduction: "Introduction"
};
function createSearchIndex(document2, options) {
  var _a;
  const index = [];
  const modelsSectionTitle = (options == null ? void 0 : options.modelsSectionLabel) ?? DEFAULT_MODELS_SECTION_LABEL;
  const labels = (options == null ? void 0 : options.labels) ?? DEFAULT_SEARCH_INDEX_LABELS;
  function processEntries(entriesToProcess) {
    entriesToProcess.forEach((entry) => {
      addEntryToIndex(entry, index, document2, modelsSectionTitle, labels);
      if ("children" in entry && entry.children) processEntries(entry.children);
    });
  }
  processEntries(((_a = document2 == null ? void 0 : document2["x-scalar-navigation"]) == null ? void 0 : _a.children) ?? []);
  return index;
}
function addEntryToIndex(entry, index, document2, modelsSectionTitle, labels) {
  var _a, _b, _c;
  const openApiDocument = isOpenApiDocument(document2) ? document2 : void 0;
  if (entry.type === "operation") {
    const pathItem = getResolvedPathItem((_a = openApiDocument == null ? void 0 : openApiDocument.paths) == null ? void 0 : _a[entry.path]);
    const operation = getResolvedRef(getPathItemOperation((_b = openApiDocument == null ? void 0 : openApiDocument.paths) == null ? void 0 : _b[entry.path], entry.method)) ?? {};
    const operationWithPathParams = {
      ...operation,
      parameters: combineParams(pathItem == null ? void 0 : pathItem.parameters, operation.parameters)
    };
    const parameters = extractParameterNames(operationWithPathParams.parameters ?? []);
    const parameterDescriptions = extractParameterDescriptions(operationWithPathParams.parameters ?? []);
    const body = extractBodyFieldNames(operationWithPathParams);
    const bodyDescriptions = extractBodyDescriptions(operationWithPathParams);
    const responseExamples = extractResponseExamples(operationWithPathParams.responses);
    index.push({
      type: "operation",
      title: entry.title,
      id: entry.id,
      description: operationWithPathParams.description || "",
      method: entry.method,
      path: entry.path,
      body,
      bodyDescriptions,
      parameters,
      parameterDescriptions,
      responseExamples,
      operationId: operationWithPathParams.operationId,
      entry
    });
    return;
  }
  if (entry.type === "webhook") {
    const webhook = getResolvedRef(getPathItemOperation((_c = openApiDocument == null ? void 0 : openApiDocument.webhooks) == null ? void 0 : _c[entry.name], entry.method)) ?? {};
    const webhookDescription = webhook.description || "";
    index.push({
      id: entry.id,
      type: "webhook",
      title: entry.title,
      description: "Webhook",
      method: entry.method,
      body: "",
      bodyDescriptions: webhookDescription ? [webhookDescription] : [],
      operationId: webhook.operationId,
      entry
    });
    return;
  }
  if (entry.type === "model") {
    const schema = getModelSchema(document2, entry.name);
    const schemaDescription = (schema == null ? void 0 : schema.description) ?? "";
    const propertyNames = extractSchemaFieldNames(schema);
    const propertyDescriptions = extractSchemaDescriptions(schema);
    index.push({
      type: "model",
      title: entry.title,
      description: modelsSectionTitle,
      id: entry.id,
      body: propertyNames,
      bodyDescriptions: schemaDescription ? [schemaDescription, ...propertyDescriptions] : propertyDescriptions,
      entry
    });
    return;
  }
  if (entry.type === "models") {
    index.push({
      id: entry.id,
      type: "heading",
      title: modelsSectionTitle,
      description: labels.heading,
      body: "",
      entry
    });
    return;
  }
  if (entry.type === "tag" && entry.isWebhooks === true) {
    index.push({
      id: entry.id,
      type: "heading",
      title: labels.webhooks,
      description: labels.heading,
      body: "",
      entry
    });
    return;
  }
  if (entry.type === "tag" && entry.isTagGroup !== true) {
    index.push({
      id: entry.id,
      title: entry.title,
      description: entry.description || "",
      type: "tag",
      body: "",
      entry
    });
    return;
  }
  if (entry.type === "tag" && entry.isTagGroup === true) {
    index.push({
      id: entry.id,
      title: entry.title,
      description: labels.tagGroup,
      type: "tag",
      body: "",
      entry
    });
    return;
  }
  if (entry.type === "text") {
    index.push({
      id: entry.id,
      type: "heading",
      title: isIntroductionEntry(entry) ? labels.introduction : entry.title ?? "",
      description: labels.heading,
      body: "",
      entry
    });
    return;
  }
}

// node_modules/@scalar/api-reference/dist/features/Search/hooks/useSearchIndex.js
var MAX_SEARCH_RESULTS = 25;
function useSearchIndex(document2, modelsSectionLabel = DEFAULT_MODELS_SECTION_LABEL, labels = {
  heading: "Heading",
  tagGroup: "Tag Group",
  webhook: "Webhook",
  webhooks: "Webhooks",
  introduction: "Introduction"
}) {
  const searchIndex = computed(() => createSearchIndex(toValue(document2), {
    labels: toValue(labels),
    modelsSectionLabel: toValue(modelsSectionLabel) ?? DEFAULT_MODELS_SECTION_LABEL
  }));
  const fuse = computed(() => {
    const instance = createFuseInstance();
    instance.setCollection(searchIndex.value);
    return instance;
  });
  const query = ref("");
  return {
    results: computed(() => {
      if (query.value.length !== 0) return fuse.value.search(query.value, { limit: MAX_SEARCH_RESULTS });
      return searchIndex.value.slice(0, MAX_SEARCH_RESULTS).map((item, index) => ({
        item,
        refIndex: index
      }));
    }),
    query
  };
}

// node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultItem.vue.script.js
var _hoisted_1 = ["aria-selected"];
var _hoisted_2 = {
  key: 0,
  class: "flex h-fit items-center text-sm font-medium text-c-3 group-hover:text-c-1"
};
var _hoisted_3 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" };
var _hoisted_4 = { class: "flex items-center gap-1" };
var _hoisted_5 = { class: "flex-1 truncate zoomed:whitespace-normal! wrap-break-word font-medium" };
var _hoisted_6 = {
  key: 0,
  class: "text-base text-c-2"
};
var _hoisted_7 = {
  key: 0,
  class: "truncate zoomed:whitespace-normal! wrap-break-word text-c-2"
};
var ScalarSearchResultItem_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarSearchResultItem",
  props: {
    icon: { type: [Object, Function] },
    selected: { type: Boolean }
  },
  setup(__props) {
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", mergeProps({
        "aria-selected": __props.selected,
        role: "option",
        tabindex: "-1"
      }, unref(cx)("group flex cursor-pointer gap-2 rounded px-2 py-1.5 no-underline hover:bg-b-2 text-base/5", { "bg-b-2": __props.selected })), [__props.icon ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "icon", {}, () => [__props.icon ? (openBlock(), createBlock(unref(ScalarIconLegacyAdapter_default), {
        key: 0,
        class: "size-4",
        icon: __props.icon
      }, null, 8, ["icon"])) : createCommentVNode("", true)]), _cache[0] || (_cache[0] = createBaseVNode("span", null, " ", -1))])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [renderSlot(_ctx.$slots, "default")]), _ctx.$slots.addon ? (openBlock(), createElementBlock("div", _hoisted_6, [renderSlot(_ctx.$slots, "addon")])) : createCommentVNode("", true)]), _ctx.$slots.description ? (openBlock(), createElementBlock("div", _hoisted_7, [renderSlot(_ctx.$slots, "description")])) : createCommentVNode("", true)])], 16, _hoisted_1);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultItem.vue.js
var ScalarSearchResultItem_default = ScalarSearchResultItem_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultList.vue.script.js
var ScalarSearchResultList_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarSearchResultList",
  props: { noResults: { type: Boolean } },
  setup(__props) {
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ role: "listbox" }, unref(cx)("flex flex-col")), [__props.noResults ? renderSlot(_ctx.$slots, "noResults", {}, () => [_cache[0] || (_cache[0] = createBaseVNode("div", { class: "flex flex-col items-center gap-2 px-3 py-4" }, [createBaseVNode("div", {
        class: "text-base font-medium text-c-2",
        role: "alert"
      }, " No results found ")], -1))], void 0, 0) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarSearchResults/ScalarSearchResultList.vue.js
var ScalarSearchResultList_default = ScalarSearchResultList_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Search/components/SearchResult.vue.script.js
var _hoisted_12 = { class: "sr-only" };
var _hoisted_22 = { class: "inline-flex items-center gap-1" };
var _hoisted_32 = { class: "sr-only" };
var _hoisted_42 = { class: "sr-only" };
var _hoisted_52 = { class: "sr-only" };
var SearchResult_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SearchResult",
  props: {
    id: {},
    isSelected: { type: Boolean },
    result: {},
    modelsSectionLabel: { default: () => DEFAULT_MODELS_SECTION_LABEL }
  },
  setup(__props) {
    const { translate } = useLocalization();
    const ENTRY_ICONS = {
      heading: ScalarIconTextAlignLeft_default,
      model: ScalarIconBracketsCurly_default,
      operation: ScalarIconTerminalWindow_default,
      tag: ScalarIconTag_default,
      webhook: ScalarIconWebhooksLogo_default
    };
    const entryLabels = computed(() => ({
      heading: translate("search.entryHeading"),
      operation: translate("search.entryOperation"),
      tag: translate("search.entryTag"),
      model: __props.modelsSectionLabel,
      webhook: translate("search.entryWebhook")
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarSearchResultItem_default), {
        id: __props.id,
        icon: ENTRY_ICONS[__props.result.item.type],
        selected: __props.isSelected
      }, createSlots({
        default: withCtx(() => [createBaseVNode("span", { class: normalizeClass({ "text-decoration-line": __props.result.item.entry.type === "operation" && __props.result.item.entry.isDeprecated }) }, [
          createBaseVNode("span", _hoisted_12, [createTextVNode(toDisplayString(entryLabels.value[__props.result.item.type]) + ":  ", 1), __props.result.item.entry.type === "operation" && __props.result.item.entry.isDeprecated ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" (" + toDisplayString(unref(translate)("common.deprecated")) + ")  ", 1)], 64)) : createCommentVNode("", true)]),
          createTextVNode(" " + toDisplayString(__props.result.item.title) + " ", 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "sr-only" }, ",", -1))
        ], 2)]),
        _: 2
      }, [__props.result.item.type !== "webhook" && (__props.result.item.method || __props.result.item.path) && __props.result.item.path !== __props.result.item.title ? {
        name: "description",
        fn: withCtx(() => [createBaseVNode("span", _hoisted_22, [
          __props.result.item.type === "operation" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(HttpMethod_default), {
            "aria-hidden": "true",
            method: __props.result.item.method ?? "get"
          }, null, 8, ["method"]), createBaseVNode("span", _hoisted_32, toDisplayString(unref(translate)("common.httpMethod")) + ": " + toDisplayString(__props.result.item.method ?? "get"), 1)], 64)) : createCommentVNode("", true),
          createBaseVNode("span", _hoisted_42, toDisplayString(unref(translate)("common.path")) + ": ", 1),
          createTextVNode(" " + toDisplayString(__props.result.item.path), 1)
        ])]),
        key: "0"
      } : __props.result.item.description ? {
        name: "description",
        fn: withCtx(() => [createBaseVNode("span", _hoisted_52, toDisplayString(unref(translate)("common.description")) + ": ", 1), createTextVNode(" " + toDisplayString(__props.result.item.description), 1)]),
        key: "1"
      } : void 0]), 1032, [
        "id",
        "icon",
        "selected"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Search/components/SearchResult.vue.js
var SearchResult_default = SearchResult_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Search/components/SearchModal.vue.script.js
var _hoisted_13 = {
  class: "mb-0 flex flex-col",
  role: "search"
};
var _hoisted_23 = {
  "aria-hidden": "true",
  class: "contents"
};
var _hoisted_33 = { class: "sr-only" };
var SearchModal_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SearchModal",
  props: {
    modalState: {},
    document: {},
    eventBus: {},
    modelsSectionLabel: {}
  },
  setup(__props) {
    const props = __props;
    const { translate } = useLocalization();
    const id = useId();
    const listboxId = `${id}-search-result`;
    const instructionsId = `${id}-search-instructions`;
    const { query, results } = useSearchIndex(() => props.document, () => props.modelsSectionLabel, () => ({
      heading: translate("search.entryHeading"),
      tagGroup: translate("search.entryTagGroup"),
      webhook: translate("search.entryWebhook"),
      webhooks: translate("navigation.webhooks"),
      introduction: translate("navigation.introduction")
    }));
    const selectedIndex = ref(void 0);
    watch(() => props.modalState.open, (open) => {
      if (open) query.value = "";
    });
    const navigateSearchResults = (direction) => {
      const offset = direction === "up" ? -1 : 1;
      const length = results.value.length;
      if (typeof selectedIndex.value === "number") selectedIndex.value = (selectedIndex.value + offset + length) % length;
      else selectedIndex.value = offset === -1 ? length - 1 : 0;
    };
    function handleSelect(idx) {
      if (typeof idx !== "number" || !results.value[idx]) return;
      const result = results.value[idx];
      props.modalState.hide();
      props.eventBus.emit("scroll-to:nav-item", { id: result.item.id });
    }
    const activeDescendantId = computed(() => {
      const selectedResult = results.value[selectedIndex.value ?? -1];
      return selectedResult ? `search-result-${selectedResult.item.id}` : void 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarModal_default), {
        "aria-label": unref(translate)("search.label"),
        state: __props.modalState,
        variant: "search"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_13, [createVNode(unref(ScalarSearchInput_default), {
            modelValue: unref(query),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(query) ? query.value = $event : null),
            "aria-activedescendant": activeDescendantId.value,
            "aria-autocomplete": "list",
            "aria-controls": listboxId,
            "aria-describedby": instructionsId,
            clearLabel: unref(translate)("search.clear"),
            label: unref(translate)("search.inputLabel"),
            placeholder: unref(translate)("search.placeholder"),
            role: "combobox",
            onBlur: _cache[1] || (_cache[1] = ($event) => selectedIndex.value = void 0),
            onKeydown: [
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => navigateSearchResults("down"), ["stop", "prevent"]), ["down"])),
              _cache[3] || (_cache[3] = withKeys(withModifiers(() => handleSelect(selectedIndex.value), ["stop", "prevent"]), ["enter"])),
              _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => navigateSearchResults("up"), ["stop", "prevent"]), ["up"]))
            ]
          }, null, 8, [
            "modelValue",
            "aria-activedescendant",
            "clearLabel",
            "label",
            "placeholder"
          ])]),
          createVNode(unref(ScalarSearchResultList_default), {
            id: listboxId,
            "aria-label": unref(translate)("search.results"),
            class: "custom-scroll px-1 pb-1",
            noResults: !unref(results).length
          }, {
            query: withCtx(() => [createTextVNode(toDisplayString(unref(query)), 1)]),
            default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, idx) => {
              return openBlock(), createBlock(SearchResult_default, {
                id: `search-result-${result.item.id}`,
                key: result.refIndex,
                isSelected: selectedIndex.value === idx,
                modelsSectionLabel: props.modelsSectionLabel,
                result,
                onClick: withModifiers(() => handleSelect(idx), ["prevent"])
              }, null, 8, [
                "id",
                "isSelected",
                "modelsSectionLabel",
                "result",
                "onClick"
              ]);
            }), 128))]),
            _: 1
          }, 8, ["aria-label", "noResults"]),
          createBaseVNode("div", {
            id: instructionsId,
            class: "ref-search-meta"
          }, [createBaseVNode("span", _hoisted_23, [createBaseVNode("span", null, "↑↓ " + toDisplayString(unref(translate)("search.navigate")), 1), createBaseVNode("span", null, "⏎ " + toDisplayString(unref(translate)("search.select")), 1)]), createBaseVNode("span", _hoisted_33, toDisplayString(unref(translate)("search.instructions")), 1)])
        ]),
        _: 1
      }, 8, ["aria-label", "state"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Search/components/SearchModal.vue.js
var SearchModal_default = _plugin_vue_export_helper_default2(SearchModal_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ae9b4ecb"]]);

// node_modules/@scalar/api-reference/dist/features/Search/components/SearchButton.vue.script.js
var _hoisted_14 = { class: "sr-only" };
var _hoisted_24 = {
  "aria-hidden": "true",
  class: "sidebar-search-placeholder"
};
var _hoisted_34 = { class: "sr-only" };
var _hoisted_43 = { class: "sr-only" };
var SearchButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SearchButton",
  props: {
    forceIcon: { type: Boolean },
    searchHotKey: { default: "k" },
    hideModels: { type: Boolean },
    modelsSectionLabel: { default: () => DEFAULT_MODELS_SECTION_LABEL },
    document: {},
    eventBus: {}
  },
  setup(__props) {
    const button = ref();
    const modalState = useModal();
    const { translate } = useLocalization();
    const isMac = ref(false);
    onMounted(() => {
      isMac.value = isMacOS();
    });
    const handleHotKey = (e) => {
      if ((isMacOS() ? e.metaKey : e.ctrlKey) && e.key === __props.searchHotKey) {
        e.preventDefault();
        e.stopPropagation();
        if (modalState.open) modalState.hide();
        else modalState.show();
      }
    };
    watch(() => modalState.open, async (next, prev) => {
      var _a;
      if (!next && prev) {
        await nextTick();
        (_a = button.value) == null ? void 0 : _a.$el.focus();
      }
    });
    onMounted(() => window.addEventListener("keydown", handleHotKey));
    onBeforeUnmount(() => window.removeEventListener("keydown", handleHotKey));
    function handleClick() {
      modalState.show();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [__props.forceIcon ? (openBlock(), createBlock(unref(ScalarIconButton_default), {
        key: 0,
        icon: unref(ScalarIconMagnifyingGlass_default),
        label: unref(translate)("search.label"),
        onClick: handleClick
      }, null, 8, ["icon", "label"])) : (openBlock(), createBlock(unref(ScalarSidebarSearchButton_default), {
        key: 1,
        ref_key: "button",
        ref: button,
        class: normalizeClass(["w-full", _ctx.$attrs.class]),
        shortcutLabel: unref(translate)("search.keyboardShortcut"),
        onClick: handleClick
      }, {
        shortcut: withCtx(() => [isMac.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_34, toDisplayString(unref(translate)("search.command")), 1), _cache[0] || (_cache[0] = createBaseVNode("span", { "aria-hidden": "true" }, "⌘", -1))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("span", _hoisted_43, toDisplayString(unref(translate)("search.control")), 1), _cache[1] || (_cache[1] = createBaseVNode("span", { "aria-hidden": "true" }, "⌃", -1))], 64)), createTextVNode(" " + toDisplayString(__props.searchHotKey), 1)]),
        default: withCtx(() => [createBaseVNode("span", _hoisted_14, toDisplayString(unref(translate)("search.open")), 1), createBaseVNode("span", _hoisted_24, toDisplayString(unref(translate)("search.label")), 1)]),
        _: 1
      }, 8, ["class", "shortcutLabel"])), createVNode(SearchModal_default, {
        document: __props.document,
        eventBus: __props.eventBus,
        modalState: unref(modalState),
        modelsSectionLabel: __props.modelsSectionLabel
      }, null, 8, [
        "document",
        "eventBus",
        "modalState",
        "modelsSectionLabel"
      ])], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Search/components/SearchButton.vue.js
var SearchButton_default = SearchButton_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/SidebarFilter.vue.script.js
var _hoisted_15 = { class: "asyncapi-sidebar-filter min-w-0" };
var _hoisted_25 = { class: "text-c-1 truncate" };
var SidebarFilter_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SidebarFilter",
  props: {
    label: {},
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selected = computed(() => props.options.find((o) => o.id === props.modelValue) ?? props.options[0]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_15, [createVNode(unref(ScalarListbox_default), {
        label: __props.label,
        modelValue: selected.value,
        options: __props.options,
        resize: "",
        teleport: "",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => emit("update:modelValue", e.id))
      }, {
        default: withCtx(() => [createVNode(unref(ScalarSidebarButton_default), {
          is: "button",
          class: "w-full items-center text-left"
        }, {
          aside: withCtx(() => [createVNode(unref(ScalarIconCaretUpDown_default), {
            class: "text-c-1 ml-1 size-3 shrink-0 self-center",
            weight: "bold"
          })]),
          default: withCtx(() => {
            var _a;
            return [createBaseVNode("span", _hoisted_25, toDisplayString((_a = selected.value) == null ? void 0 : _a.label), 1)];
          }),
          _: 1
        })]),
        _: 1
      }, 8, [
        "label",
        "modelValue",
        "options"
      ])]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/SidebarFilter.vue.js
var SidebarFilter_default = SidebarFilter_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/workspace-store/dist/channel-example/build-connection-url.js
var ASYNCAPI_WEBSOCKET_PROTOCOLS = ["ws", "wss"];
var getAsyncApiServerVariables = (server) => {
  if (!(server == null ? void 0 : server.variables)) {
    return {};
  }
  return objectEntries(server.variables).reduce((acc, [name, variable]) => {
    const resolved = getResolvedRef(variable);
    if (resolved.default != null) {
      acc[String(name)] = String(resolved.default);
    }
    return acc;
  }, {});
};
var substituteTemplate = (template, options) => {
  let result = template;
  if (options.serverVariables) {
    result = replacePathVariables(result, options.serverVariables);
  }
  if (options.environmentVariables) {
    result = replaceEnvVariables(result, options.environmentVariables);
  }
  if (options.pathParameters) {
    result = replacePathVariables(result, options.pathParameters);
  }
  return result;
};
var normalizeProtocol = (protocol) => {
  const normalized = protocol == null ? void 0 : protocol.trim().toLowerCase();
  return normalized ? normalized : void 0;
};
var getUrlSchemeFromProtocol = (protocol) => protocol.trim().toLowerCase();
var isWebSocketProtocol = (protocol) => ASYNCAPI_WEBSOCKET_PROTOCOLS.includes(protocol.trim().toLowerCase());
var buildAsyncApiServerBaseUrl = (server, environmentVariables) => {
  const serverVariables = getAsyncApiServerVariables(server);
  const scheme = getUrlSchemeFromProtocol(server.protocol);
  const host = substituteTemplate(server.host, { serverVariables, environmentVariables });
  const origin = `${scheme}://${host}`;
  if (!server.pathname) {
    return origin;
  }
  const pathname = substituteTemplate(server.pathname, { serverVariables, environmentVariables });
  return combineUrlAndPath(origin, pathname);
};
var resolveWsBinding = (bindings) => {
  if (!bindings) {
    return void 0;
  }
  const resolved = getResolvedRef(bindings);
  return resolved.ws;
};
var mergeWsBindings = (channel, operation) => {
  const channelBinding = resolveWsBinding(channel.bindings);
  const operationBinding = operation ? resolveWsBinding(operation.bindings) : void 0;
  if (!channelBinding && !operationBinding) {
    return void 0;
  }
  return {
    ...channelBinding,
    ...operationBinding,
    query: mergeWsQuerySchemas(channelBinding == null ? void 0 : channelBinding.query, operationBinding == null ? void 0 : operationBinding.query)
  };
};
var resolveWsQuerySchema = (query) => {
  if (!query) {
    return void 0;
  }
  const resolved = getResolvedRef(query);
  if (resolved === true || resolved === false || !isObject(resolved)) {
    return void 0;
  }
  return resolved;
};
var mergeWsQuerySchemas = (channelQuery, operationQuery) => {
  const channelSchema = resolveWsQuerySchema(channelQuery);
  const operationSchema = resolveWsQuerySchema(operationQuery);
  if (!channelSchema && !operationSchema) {
    return void 0;
  }
  if (!channelSchema) {
    return operationQuery;
  }
  if (!operationSchema) {
    return channelQuery;
  }
  const channelProperties = "properties" in channelSchema ? channelSchema.properties : void 0;
  const operationProperties = "properties" in operationSchema ? operationSchema.properties : void 0;
  return Object.assign({}, channelSchema, operationSchema, {
    properties: {
      ...channelProperties,
      ...operationProperties
    }
  });
};
var getDefaultValueFromPropertySchema = (propertySchema) => {
  if (propertySchema === true || propertySchema === false || !isObject(propertySchema)) {
    return void 0;
  }
  if ("default" in propertySchema && propertySchema.default !== void 0) {
    return propertySchema.default;
  }
  if ("example" in propertySchema && propertySchema.example !== void 0) {
    return propertySchema.example;
  }
  if ("enum" in propertySchema && Array.isArray(propertySchema.enum) && propertySchema.enum[0] !== void 0) {
    return propertySchema.enum[0];
  }
  return void 0;
};
var appendQueryValue = (params, key, value) => {
  if (value === void 0 || value === null) {
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((entry) => appendQueryValue(params, key, entry));
    return;
  }
  if (typeof value === "object") {
    params.append(key, JSON.stringify(value));
    return;
  }
  params.append(key, String(value));
};
var buildWsQueryParams = (wsBinding, queryParameters) => {
  const params = new URLSearchParams();
  const querySchema = resolveWsQuerySchema(wsBinding == null ? void 0 : wsBinding.query);
  const properties = querySchema && "properties" in querySchema ? querySchema.properties : void 0;
  if (isObject(properties)) {
    for (const [name, propertySchema] of Object.entries(properties)) {
      const defaultValue = getDefaultValueFromPropertySchema(propertySchema);
      appendQueryValue(params, name, defaultValue);
    }
  }
  if (queryParameters) {
    for (const [name, value] of objectEntries(queryParameters)) {
      params.delete(name);
      appendQueryValue(params, name, value);
    }
  }
  return params;
};
var buildConnectionUrl = ({ server, channel, operation = null, pathParameters = {}, queryParameters = {}, environmentVariables }) => {
  const serverVariables = getAsyncApiServerVariables(server);
  const baseUrl = buildAsyncApiServerBaseUrl(server, environmentVariables);
  const address = channel.address;
  if (address == null || address === "") {
    const queryParams2 = buildWsQueryParams(mergeWsBindings(channel, operation), queryParameters);
    return mergeUrls(baseUrl, "", queryParams2, true);
  }
  const resolvedAddress = substituteTemplate(address, {
    serverVariables,
    environmentVariables,
    pathParameters
  });
  const queryParams = buildWsQueryParams(mergeWsBindings(channel, operation), queryParameters);
  return mergeUrls(baseUrl, resolvedAddress, queryParams, true);
};

// node_modules/@scalar/helpers/dist/json/escape-json-pointer.js
var escapeJsonPointer = (str) => str.replace(/~/g, "~0").replace(/\//g, "~1");

// node_modules/@scalar/workspace-store/dist/helpers/get-name-from-ref.js
var getNameFromRef = (ref2, parentPath) => {
  const prefix = `#/${parentPath.map(escapeJsonPointer).join("/")}/`;
  if (!ref2.startsWith(prefix)) {
    return void 0;
  }
  const segmentsResult = safeRun(() => parseJsonPointerSegments(ref2.slice(1)));
  if (!segmentsResult.ok) {
    return void 0;
  }
  const segments = segmentsResult.data;
  if (segments.length !== parentPath.length + 1) {
    return void 0;
  }
  for (let i3 = 0; i3 < parentPath.length; i3++) {
    if (segments[i3] !== parentPath[i3]) {
      return void 0;
    }
  }
  const name = segments[parentPath.length];
  return name && name.length > 0 ? name : void 0;
};

// node_modules/@scalar/workspace-store/dist/channel-example/resolve-operation-channel.js
var getChannelNameFromRef = (ref2) => getNameFromRef(ref2, ["channels"]);
var findChannelName = (document2, channel) => {
  if (!document2.channels) {
    return void 0;
  }
  for (const [channelName, channelNode] of Object.entries(document2.channels)) {
    const resolved = getResolvedRef(channelNode);
    if (resolved === channel) {
      return channelName;
    }
  }
  return void 0;
};
var resolveOperationChannel = (document2, operation) => {
  var _a;
  const channelNode = operation.channel;
  if (!channelNode) {
    return void 0;
  }
  const channelNameFromRef = "$ref" in channelNode ? getChannelNameFromRef(channelNode.$ref) : void 0;
  if (channelNameFromRef && ((_a = document2.channels) == null ? void 0 : _a[channelNameFromRef])) {
    const channel2 = getResolvedRef(document2.channels[channelNameFromRef]);
    const channelAddress2 = typeof channel2.address === "string" && channel2.address.length > 0 ? channel2.address : channelNameFromRef;
    return { channelName: channelNameFromRef, channel: channel2, channelAddress: channelAddress2 };
  }
  const channel = getResolvedRef(channelNode);
  const channelName = channelNameFromRef ?? findChannelName(document2, channel) ?? (typeof channel.address === "string" && channel.address.length > 0 ? channel.address : void 0);
  if (!channelName) {
    return void 0;
  }
  const channelAddress = typeof channel.address === "string" && channel.address.length > 0 ? channel.address : channelName;
  return { channelName, channel, channelAddress };
};

// node_modules/@scalar/workspace-store/dist/channel-example/servers.js
var resolveServer = (server) => getResolvedRef(server);
var getServerNameFromRef = (ref2) => getNameFromRef(ref2, ["servers"]);
var getChannelServerNames = (document2, channel) => {
  var _a;
  if (!(channel == null ? void 0 : channel.servers)) {
    return void 0;
  }
  const names = /* @__PURE__ */ new Set();
  for (const serverRef of channel.servers) {
    const name = getServerNameFromRef(serverRef.$ref);
    if (name && ((_a = document2.servers) == null ? void 0 : _a[name])) {
      names.add(name);
    }
  }
  return names;
};
var getAsyncApiServers = (document2, options = {}) => {
  const { channel = null, operation = null, pathParameters = {}, queryParameters = {}, environmentVariables, webSocketOnly = true } = options;
  const servers = document2.servers ?? {};
  const channelServerNames = getChannelServerNames(document2, channel);
  return objectEntries(servers).filter(([name]) => (channelServerNames == null ? void 0 : channelServerNames.has(name)) ?? true).map(([name, serverRef]) => {
    const server = resolveServer(serverRef);
    const protocol = server.protocol.trim().toLowerCase();
    const isWebSocket = isWebSocketProtocol(protocol);
    const url = buildAsyncApiServerBaseUrl(server, environmentVariables);
    const entry = {
      name,
      server,
      host: server.host,
      protocol,
      description: server.description,
      title: server.title,
      url,
      isWebSocket
    };
    if (channel) {
      entry.connectionUrl = buildConnectionUrl({
        server,
        channel,
        operation,
        pathParameters,
        queryParameters,
        environmentVariables
      });
    }
    return entry;
  }).filter((entry) => webSocketOnly ? entry.isWebSocket : true);
};
var getSelectedAsyncApiServer = (document2, servers, _operation) => {
  if (!isAsyncApiDocument(document2)) {
    return servers[0] ?? null;
  }
  const selectedName = document2["x-scalar-selected-server"];
  if (selectedName == null) {
    return servers[0] ?? null;
  }
  return servers.find(({ name }) => name === selectedName) ?? servers[0] ?? null;
};

// node_modules/@scalar/workspace-store/dist/channel-example/get-async-api-protocols.js
var ALL = "all";
var getServerProtocols = (document2) => {
  const protocols = /* @__PURE__ */ new Map();
  for (const [name, serverNode] of objectEntries(document2.servers ?? {})) {
    const protocol = normalizeProtocol(getResolvedRef(serverNode).protocol);
    if (protocol) {
      protocols.set(name, protocol);
    }
  }
  return protocols;
};
var getAsyncApiProtocols = (document2) => {
  const unique = new Set(getServerProtocols(document2).values());
  const options = [...unique].sort((a, b) => a.localeCompare(b)).map((protocol) => ({ id: protocol, label: protocol.toUpperCase() }));
  return [{ id: ALL, label: "All protocols" }, ...options];
};
var getAsyncApiServerOptions = (document2) => {
  const options = objectEntries(document2.servers ?? {}).map(([name, serverNode]) => {
    const protocol = normalizeProtocol(getResolvedRef(serverNode).protocol);
    return { id: name, label: protocol ? `${name} (${protocol})` : name };
  });
  return [{ id: ALL, label: "All servers" }, ...options];
};
var createReachabilityContext = (document2) => ({
  serverProtocols: getServerProtocols(document2),
  allServerNames: new Set(objectKeys(document2.servers ?? {}))
});
var getOperationReachability = (document2, operation, context = createReachabilityContext(document2)) => {
  var _a;
  const channel = ((_a = resolveOperationChannel(document2, operation)) == null ? void 0 : _a.channel) ?? null;
  const channelServerNames = getChannelServerNames(document2, channel);
  const serverNames = channelServerNames ? new Set([...channelServerNames].filter((name) => context.allServerNames.has(name))) : new Set(context.allServerNames);
  const protocols = /* @__PURE__ */ new Set();
  for (const [name, protocol] of context.serverProtocols) {
    if (serverNames.has(name)) {
      protocols.add(protocol);
    }
  }
  return { serverNames, protocols };
};

// node_modules/@scalar/helpers/dist/object/is-object-equal.js
var isObjectEqual = (a, b) => {
  if (Object.is(a, b)) {
    return true;
  }
  if (!isObjectLike(a) || !isObjectLike(b)) {
    return false;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    for (let i3 = 0; i3 < a.length; i3 += 1) {
      if (!isObjectEqual(a[i3], b[i3])) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(b)) {
    return false;
  }
  const leftObject = a;
  const rightObject = b;
  let leftCount = 0;
  for (const key in leftObject) {
    if (!Object.hasOwn(leftObject, key)) {
      continue;
    }
    leftCount += 1;
    if (!Object.hasOwn(rightObject, key) || !isObjectEqual(leftObject[key], rightObject[key])) {
      return false;
    }
  }
  let rightCount = 0;
  for (const key in rightObject) {
    if (!Object.hasOwn(rightObject, key)) {
      continue;
    }
    rightCount += 1;
  }
  return leftCount === rightCount;
};

// node_modules/@scalar/workspace-store/dist/channel-example/dedupe-requirements.js
var dedupeRequirements = (requirements) => {
  const seen = /* @__PURE__ */ new Set();
  return requirements.filter((requirement) => {
    const key = JSON.stringify(requirement);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

// node_modules/@scalar/workspace-store/dist/channel-example/get-asyncapi-security-requirements.js
var getSecuritySchemeNameFromRef = (ref2) => getNameFromRef(ref2, ["components", "securitySchemes"]);
var getSecuritySchemeDefinition = (entry) => {
  const resolved = getResolvedRef(entry);
  if (resolved == null) {
    return void 0;
  }
  if (!("scopes" in resolved)) {
    return resolved;
  }
  const { scopes: _scopes, ...scheme } = resolved;
  return scheme;
};
var getSecuritySchemeName = (document2, entry) => {
  if ("$ref" in entry) {
    const nameFromRef = getSecuritySchemeNameFromRef(entry.$ref);
    if (nameFromRef) {
      return nameFromRef;
    }
  }
  const resolvedDefinition = getSecuritySchemeDefinition(entry);
  if (resolvedDefinition == null) {
    return void 0;
  }
  const components = document2.components ? getResolvedRef(document2.components) : void 0;
  if (components == null ? void 0 : components.securitySchemes) {
    for (const [name, schemeRef] of Object.entries(components.securitySchemes)) {
      const scheme = getResolvedRef(schemeRef);
      if (scheme === resolvedDefinition || isObjectEqual(scheme, resolvedDefinition)) {
        return name;
      }
    }
  }
  return void 0;
};
var securityEntryToRequirement = (document2, entry) => {
  const schemeName = getSecuritySchemeName(document2, entry);
  if (!schemeName) {
    return void 0;
  }
  const resolved = getResolvedRef(entry);
  const scopes = resolved != null && "scopes" in resolved && Array.isArray(resolved.scopes) ? [...resolved.scopes] : [];
  return { [schemeName]: scopes };
};
var collectSecurityRequirements = (document2, security) => {
  if (!(security == null ? void 0 : security.length)) {
    return [];
  }
  return security.map((entry) => securityEntryToRequirement(document2, entry)).filter((requirement) => requirement != null);
};
var getAsyncApiSecurityRequirements = (document2, operation, server) => {
  const operationRequirements = collectSecurityRequirements(document2, operation == null ? void 0 : operation.security);
  const serverRequirements = collectSecurityRequirements(document2, server == null ? void 0 : server.security);
  const combined = operationRequirements.length === 0 ? serverRequirements : serverRequirements.length === 0 ? operationRequirements : [...operationRequirements, ...serverRequirements];
  return dedupeRequirements(combined);
};
var getAsyncApiDocumentSecurityRequirements = (document2) => {
  const servers = document2.servers ? getResolvedRef(document2.servers) : void 0;
  if (!servers) {
    return [];
  }
  const resolvedServers = Object.values(servers).map((serverRef) => getResolvedRef(serverRef));
  const perServerRequirements = resolvedServers.map((server) => getAsyncApiSecurityRequirements(document2, null, server));
  const combined = perServerRequirements.flat();
  const someRequireAuth = perServerRequirements.some((requirements) => requirements.length > 0);
  const someDeclareNoAuth = resolvedServers.some((server) => {
    var _a;
    return !((_a = server == null ? void 0 : server.security) == null ? void 0 : _a.length);
  });
  if (someRequireAuth && someDeclareNoAuth) {
    combined.push({});
  }
  return dedupeRequirements(combined);
};

// node_modules/@scalar/workspace-store/dist/channel-example/resolve-operation-with-traits.js
var getTraitSecurity = (traits) => traits.reduce((security, traitRef) => {
  const trait = getResolvedRef(traitRef);
  return trait.security !== void 0 ? trait.security : security;
}, void 0);
var resolveOperationWithTraits = (operation) => {
  const traits = operation.traits ?? [];
  if (traits.length === 0) {
    return operation;
  }
  const traitSecurity = getTraitSecurity(traits);
  const traitBindings = traits.reduce((accumulated, traitRef) => {
    const trait = getResolvedRef(traitRef);
    if (!trait.bindings) {
      return accumulated;
    }
    const resolvedTraitBindings = getResolvedRef(trait.bindings);
    return accumulated ? {
      ...getResolvedRef(accumulated),
      ...resolvedTraitBindings
    } : resolvedTraitBindings;
  }, void 0);
  const hasOperationSecurity = operation.security !== void 0;
  const security = operation.security ?? traitSecurity;
  const bindings = traitBindings && operation.bindings ? {
    ...getResolvedRef(traitBindings),
    ...getResolvedRef(operation.bindings)
  } : operation.bindings ?? traitBindings;
  return {
    ...operation,
    ...security !== void 0 || hasOperationSecurity ? { security } : {},
    ...bindings !== operation.bindings ? { bindings } : {}
  };
};

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/AsyncApiSidebarFilters.vue.script.js
var AsyncApiSidebarFilters_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AsyncApiSidebarFilters",
  props: mergeModels({
    document: {},
    is: { default: "li" }
  }, {
    "protocol": { default: "" },
    "protocolModifiers": {},
    "server": { default: "" },
    "serverModifiers": {}
  }),
  emits: ["update:protocol", "update:server"],
  setup(__props) {
    const protocol = useModel(__props, "protocol");
    const server = useModel(__props, "server");
    const protocolOptions = computed(() => __props.document ? getAsyncApiProtocols(__props.document) : []);
    const serverOptions = computed(() => __props.document ? getAsyncApiServerOptions(__props.document) : []);
    const showProtocol = computed(() => protocolOptions.value.length > 2);
    const showServer = computed(() => serverOptions.value.length > 2);
    return (_ctx, _cache) => {
      return showProtocol.value || showServer.value ? (openBlock(), createBlock(unref(ScalarSidebarSection_default), {
        key: 0,
        is: __props.is,
        class: "asyncapi-sidebar-filters"
      }, {
        items: withCtx(() => [showProtocol.value ? (openBlock(), createBlock(SidebarFilter_default, {
          key: 0,
          modelValue: protocol.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => protocol.value = $event),
          label: "Protocol",
          options: protocolOptions.value
        }, null, 8, ["modelValue", "options"])) : createCommentVNode("", true), showServer.value ? (openBlock(), createBlock(SidebarFilter_default, {
          key: 1,
          modelValue: server.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => server.value = $event),
          label: "Server",
          options: serverOptions.value
        }, null, 8, ["modelValue", "options"])) : createCommentVNode("", true)]),
        default: withCtx(() => [_cache[2] || (_cache[2] = createTextVNode(" Filters ", -1))]),
        _: 1
      }, 8, ["is"])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/components/AsyncApiSidebarFilters.vue.js
var AsyncApiSidebarFilters_default = AsyncApiSidebarFilters_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-sidebar-filters-block/helpers/filter-async-api-navigation.js
var isNoopFilter = ({ protocol, server }) => (!protocol || protocol === ALL) && (!server || server === ALL);
var selectionMatches = (reachable, selected) => !selected || selected === ALL || reachable.has(selected);
var filterEntry = (entry, document2, filter, context) => {
  var _a;
  if (entry.type === "asyncapi-operation") {
    const operationNode = (_a = document2.operations) == null ? void 0 : _a[entry.operationName];
    if (!operationNode) return entry;
    const { protocols, serverNames } = getOperationReachability(document2, getResolvedRef(operationNode, mergeSiblingReferences), context);
    return selectionMatches(protocols, filter.protocol) && selectionMatches(serverNames, filter.server) ? entry : null;
  }
  if (entry.type === "asyncapi-channel" || entry.type === "tag") {
    const originalChildren = entry.children ?? [];
    const children = originalChildren.flatMap((child) => {
      const filtered = filterEntry(child, document2, filter, context);
      return filtered ? [filtered] : [];
    });
    if (originalChildren.length > 0 && children.length === 0) return null;
    return {
      ...entry,
      children
    };
  }
  return entry;
};
var filterAsyncApiNavigation = (entries, document2, filter) => {
  if (isNoopFilter(filter)) return entries;
  const context = createReachabilityContext(document2);
  return entries.flatMap((entry) => {
    const filtered = filterEntry(entry, document2, filter, context);
    return filtered ? [filtered] : [];
  });
};

// node_modules/@scalar/api-reference/dist/hooks/use-agent.js
var AGENT_CONTEXT_SYMBOL = Symbol();
var agentStateRef = ref(null);
function useAgent(options) {
  const showAgent = ref(false);
  const prefilledMessage = ref("");
  const agentEnabled = options.agentEnabled ?? computed(() => isLocalUrl(window.location.href));
  const openAgent = (message) => {
    prefilledMessage.value = message ?? "";
    showAgent.value = true;
  };
  const closeAgent = () => {
    showAgent.value = false;
    prefilledMessage.value = "";
  };
  const toggleAgent = () => {
    showAgent.value = !showAgent.value;
    if (!showAgent.value) prefilledMessage.value = "";
  };
  const state = {
    showAgent,
    agentEnabled,
    prefilledMessage,
    openAgent,
    closeAgent,
    toggleAgent
  };
  agentStateRef.value = state;
  return state;
}
function useAgentContext() {
  const injected = inject(AGENT_CONTEXT_SYMBOL, void 0);
  return computed(() => injected ?? agentStateRef.value ?? void 0);
}

// node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarButton.vue.script.js
var AgentScalarButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AgentScalarButton",
  setup(__props) {
    const agentContext = useAgentContext();
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "bg-sidebar-b-search text-sidebar-c-2 hover:text-sidebar-c-1 flex items-center gap-1.5 rounded border px-2 text-base whitespace-nowrap",
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => {
          var _a;
          return (_a = unref(agentContext)) == null ? void 0 : _a.toggleAgent();
        })
      }, [createVNode(unref(ScalarIconSparkle_default)), createTextVNode(" " + toDisplayString(unref(translate)("agent.askAi")), 1)]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarButton.vue.js
var AgentScalarButton_default = AgentScalarButton_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarDrawer.vue.script.js
var _hoisted_16 = { class: "agent-scalar-container custom-scroll custom-scroll-self-contain-overflow overflow-auto px-6" };
var AgentScalarDrawer_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AgentScalarDrawer",
  props: {
    agentScalarConfiguration: {},
    externalUrls: {},
    workspaceStore: {}
  },
  setup(__props) {
    const agentContext = useAgentContext();
    const { translate } = useLocalization();
    const AgentScalarChatInterface = defineAsyncComponent(async () => import("./AgentScalarChatInterface.vue-SW5PUQDP.js"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createVNode(Transition, {
        enterActiveClass: "transition-opacity duration-500",
        enterFromClass: "opacity-0",
        enterToClass: "opacity-100",
        leaveActiveClass: "transition-opacity duration-200",
        leaveFromClass: "opacity-100",
        leaveToClass: "opacity-0"
      }, {
        default: withCtx(() => {
          var _a;
          return [withDirectives(createBaseVNode("div", {
            class: "agent-scalar-overlay bg-backdrop fixed inset-0 z-10 ease-[cubic-bezier(0.77,0,0.175,1)]",
            onClick: _cache[0] || (_cache[0] = ($event) => {
              var _a2;
              return (_a2 = unref(agentContext)) == null ? void 0 : _a2.closeAgent();
            })
          }, null, 512), [[vShow, (_a = unref(agentContext)) == null ? void 0 : _a.showAgent.value]])];
        }),
        _: 1
      }), createVNode(Transition, {
        enterActiveClass: "transition-transform duration-300",
        enterFromClass: "-translate-x-full",
        enterToClass: "translate-x-0",
        leaveActiveClass: "transition-transform duration-200",
        leaveFromClass: "translate-x-0",
        leaveToClass: "-translate-x-full"
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [withDirectives(createBaseVNode("div", {
            class: "agent-scalar left-refs-w-sidebar bg-b-1 fixed inset-y-0 right-12 z-10 grid border-r shadow-lg",
            onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => {
              var _a2;
              return (_a2 = unref(agentContext)) == null ? void 0 : _a2.closeAgent();
            }, ["escape"]))
          }, [createBaseVNode("div", _hoisted_16, [createVNode(unref(AgentScalarChatInterface), {
            agentScalarConfiguration: __props.agentScalarConfiguration,
            externalUrls: __props.externalUrls,
            prefilledMessage: (_a = unref(agentContext)) == null ? void 0 : _a.prefilledMessage,
            workspaceStore: __props.workspaceStore
          }, null, 8, [
            "agentScalarConfiguration",
            "externalUrls",
            "prefilledMessage",
            "workspaceStore"
          ])]), createVNode(unref(ScalarIconButton_default), {
            class: "agent-scalar-exit-button absolute top-2 right-2",
            icon: unref(ScalarIconX_default),
            label: unref(translate)("agent.close"),
            weight: "bold",
            onClick: _cache[1] || (_cache[1] = ($event) => {
              var _a2;
              return (_a2 = unref(agentContext)) == null ? void 0 : _a2.closeAgent();
            })
          }, null, 8, ["icon", "label"])], 544), [[vShow, (_b = unref(agentContext)) == null ? void 0 : _b.showAgent.value]])];
        }),
        _: 1
      })], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/AgentScalar/AgentScalarDrawer.vue.js
var AgentScalarDrawer_default = _plugin_vue_export_helper_default2(AgentScalarDrawer_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-3496197b"]]);

// node_modules/@scalar/api-reference/dist/helpers/upload-temp-document.js
function isResponseBody(data) {
  return !!data && typeof data === "object" && "url" in data && typeof data.url === "string";
}
async function uploadTempDocument(document2, urls) {
  const body = JSON.stringify({ document: document2 });
  const uploadUrl = `${urls.apiBaseUrl}/core/share/upload/apis`;
  const response = await fetch(redirectToProxy(urls.proxyUrl, uploadUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });
  if (!response.ok) throw new Error(` Failed to generate temporary link, server responded with ${response.status}`);
  const data = await response.json();
  if (!isResponseBody(data)) throw new Error("Failed to generate temporary link, invalid response from server");
  return data.url;
}

// node_modules/@scalar/helpers/dist/url/is-valid-url.js
function isValidUrl(url) {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
}

// node_modules/@scalar/api-reference/dist/components/AgentScalar/OpenMCPButton.vue.script.js
var _hoisted_17 = { class: "scalar-mcp-layer" };
var OpenMCPButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OpenMCPButton",
  props: mergeModels({
    config: {},
    externalUrls: {},
    url: {},
    workspace: {}
  }, {
    "url": {},
    "urlModifiers": {}
  }),
  emits: ["update:url"],
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    const { copyToClipboard } = useClipboard();
    const { translate } = useLocalization();
    const { toast } = useToasts();
    const loader = useLoadingState();
    const hasConfig = ((_a = props.config) == null ? void 0 : _a.name) || ((_b = props.config) == null ? void 0 : _b.url);
    const encoded = btoa(JSON.stringify(props.config ?? {}));
    const cursorLink = `cursor://anysphere.cursor-deeplink/mcp/install?name=${encodeURIComponent(((_c = props.config) == null ? void 0 : _c.name) ?? "")}&config=${encoded}`;
    const vscodeLink = `vscode:mcp/install?${encodeURIComponent(JSON.stringify(props.config ?? {}))}`;
    const docUrl = useModel(__props, "url");
    async function generateRegisterLink() {
      if (loader.isLoading || !props.workspace) return;
      if (docUrl.value && isValidUrl(docUrl.value)) {
        openRegisterLink(docUrl.value);
        return;
      }
      loader.start();
      const document2 = props.workspace.exportActiveDocument("json");
      if (!document2) {
        toast(translate("developerTools.unableToExportDocument"), "error");
        await loader.invalidate();
        return;
      }
      try {
        docUrl.value = await uploadTempDocument(document2, props.externalUrls);
        await loader.validate();
        openRegisterLink(docUrl.value);
        await nextTick();
        await loader.clear();
      } catch (error) {
        const message = error instanceof Error ? error.message : translate("developerTools.unknownError");
        toast(message, "error");
        await loader.invalidate();
      }
    }
    function openRegisterLink(documentUrl) {
      const url = new URL(`${props.externalUrls.dashboardUrl}/register`);
      url.searchParams.set("url", documentUrl);
      url.searchParams.set("createMcp", "true");
      window.open(url.toString(), "_blank");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_17, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(hasConfig) ? "a" : "button"), {
          class: "scalar-mcp-layer-link",
          href: unref(hasConfig) ? vscodeLink : void 0,
          target: unref(hasConfig) ? "_blank" : void 0,
          type: unref(hasConfig) ? void 0 : "button",
          onClick: _cache[0] || (_cache[0] = (e) => {
            if (!unref(hasConfig)) {
              e.preventDefault();
              generateRegisterLink();
            }
          })
        }, {
          default: withCtx(() => [
            _cache[3] || (_cache[3] = createBaseVNode("svg", {
              class: "mcp-logo",
              fill: "currentColor",
              height: "800",
              viewBox: "0 0 32 32",
              width: "800",
              xmlns: "http://www.w3.org/2000/svg"
            }, [createBaseVNode("path", { d: "M30.865 3.448 24.282.281a1.99 1.99 0 0 0-2.276.385L9.397 12.171 3.902 8.004a1.33 1.33 0 0 0-1.703.073L.439 9.681a1.33 1.33 0 0 0-.005 1.969L5.2 15.999.434 20.348a1.33 1.33 0 0 0 .005 1.969l1.76 1.604a1.33 1.33 0 0 0 1.703.073l5.495-4.172 12.615 11.51a1.98 1.98 0 0 0 2.271.385l6.589-3.172a1.99 1.99 0 0 0 1.13-1.802V5.248c0-.766-.443-1.469-1.135-1.802zm-6.86 19.818L14.432 16l9.573-7.266z" })], -1)),
            _cache[4] || (_cache[4] = createTextVNode(" VS Code ", -1)),
            createVNode(unref(ScalarIconArrowUpRight_default), { class: "mcp-nav ml-auto size-4" })
          ]),
          _: 1
        }, 8, [
          "href",
          "target",
          "type"
        ])),
        (openBlock(), createBlock(resolveDynamicComponent(unref(hasConfig) ? "a" : "button"), {
          class: "scalar-mcp-layer-link",
          href: unref(hasConfig) ? cursorLink : void 0,
          target: unref(hasConfig) ? "_blank" : void 0,
          type: unref(hasConfig) ? void 0 : "button",
          onClick: _cache[1] || (_cache[1] = (e) => {
            if (!unref(hasConfig)) {
              e.preventDefault();
              generateRegisterLink();
            }
          })
        }, {
          default: withCtx(() => [
            _cache[5] || (_cache[5] = createBaseVNode("svg", {
              class: "mcp-logo",
              viewBox: "0 0 466.73 532.09",
              xmlns: "http://www.w3.org/2000/svg"
            }, [createBaseVNode("path", {
              d: "M457.43 125.94 244.42 2.96a22.13 22.13 0 0 0-22.12 0L9.3 125.94C3.55 129.26 0 135.4 0 142.05v247.99c0 6.65 3.55 12.79 9.3 16.11l213.01 122.98a22.13 22.13 0 0 0 22.12 0l213.01-122.98c5.75-3.32 9.3-9.46 9.3-16.11V142.05c0-6.65-3.55-12.79-9.3-16.11zm-13.38 26.05L238.42 508.15c-1.39 2.4-5.06 1.42-5.06-1.36V273.58c0-4.66-2.49-8.97-6.53-11.31L24.87 145.67c-2.4-1.39-1.42-5.06 1.36-5.06h411.26c5.84 0 9.49 6.33 6.57 11.39h-.01Z",
              style: { "fill": "currentColor" }
            })], -1)),
            _cache[6] || (_cache[6] = createTextVNode(" Cursor ", -1)),
            createVNode(unref(ScalarIconArrowUpRight_default), { class: "mcp-nav ml-auto size-4" })
          ]),
          _: 1
        }, 8, [
          "href",
          "target",
          "type"
        ])),
        !unref(hasConfig) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "scalar-mcp-layer-link",
          onClick: generateRegisterLink
        }, [
          _cache[7] || (_cache[7] = createBaseVNode("svg", {
            class: "mcp-logo",
            fill: "none",
            height: "173",
            viewBox: "0 0 156 173",
            width: "156",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createBaseVNode("path", {
              d: "m6 80.912 67.882-67.883c9.373-9.372 24.569-9.372 33.941 0s9.373 24.569 0 33.942L56.558 98.236",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-width": "12"
            }),
            createBaseVNode("path", {
              d: "m57.265 97.529 50.558-50.558c9.373-9.373 24.569-9.373 33.942 0l.353.353c9.373 9.373 9.373 24.569 0 33.941L80.725 142.66a8 8 0 0 0 0 11.313l12.606 12.607",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-width": "12"
            }),
            createBaseVNode("path", {
              d: "M90.853 30 40.648 80.205c-9.372 9.372-9.372 24.568 0 33.941 9.373 9.372 24.569 9.372 33.941 0l50.205-50.205",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-width": "12"
            })
          ], -1)),
          createTextVNode(" " + toDisplayString(unref(translate)("mcp.generate")) + " ", 1),
          createVNode(unref(ScalarIconArrowUpRight_default), { class: "mcp-nav ml-auto size-4" })
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "scalar-mcp-layer-link",
          onClick: _cache[2] || (_cache[2] = ($event) => {
            var _a2;
            return unref(copyToClipboard)(((_a2 = __props.config) == null ? void 0 : _a2.url) ?? "");
          })
        }, [createTextVNode(toDisplayString(unref(translate)("mcp.connect")) + " ", 1), _cache[8] || (_cache[8] = createBaseVNode("svg", {
          class: "mcp-logo ml-auto",
          fill: "none",
          height: "173",
          viewBox: "0 0 156 173",
          width: "156",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          createBaseVNode("path", {
            d: "m6 80.912 67.882-67.883c9.373-9.372 24.569-9.372 33.941 0s9.373 24.569 0 33.942L56.558 98.236",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-width": "12"
          }),
          createBaseVNode("path", {
            d: "m57.265 97.529 50.558-50.558c9.373-9.373 24.569-9.373 33.942 0l.353.353c9.373 9.373 9.373 24.569 0 33.941L80.725 142.66a8 8 0 0 0 0 11.313l12.606 12.607",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-width": "12"
          }),
          createBaseVNode("path", {
            d: "M90.853 30 40.648 80.205c-9.372 9.372-9.372 24.568 0 33.941 9.373 9.372 24.569 9.372 33.941 0l50.205-50.205",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-width": "12"
          })
        ], -1))]))
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/AgentScalar/OpenMCPButton.vue.js
var OpenMCPButton_default = _plugin_vue_export_helper_default2(OpenMCPButton_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-24b70070"]]);

// node_modules/@scalar/api-reference/dist/components/ClassicHeader.vue.js
var _sfc_main = {};
var _hoisted_18 = { class: "references-classic-header-container" };
var _hoisted_26 = { class: "references-classic-header" };
var _hoisted_35 = { class: "references-classic-header-content" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_18, [createBaseVNode("div", _hoisted_26, [createBaseVNode("div", _hoisted_35, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]), renderSlot(_ctx.$slots, "dark-mode-toggle", {}, void 0, true)])]);
}
var ClassicHeader_default = _plugin_vue_export_helper_default2(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8a3822ca"]]);

// node_modules/@scalar/api-reference/dist/hooks/use-intersection.js
var VIEWPORT_VERTICAL_CENTER_ROOT_MARGIN = "-49% 0px -49% 0px";
var useIntersection = (el, onIntersect, options) => {
  onMounted(() => {
    const observerOptions = {
      rootMargin: (options == null ? void 0 : options.immediate) ? "0px 0px 0px 0px" : VIEWPORT_VERTICAL_CENTER_ROOT_MARGIN,
      threshold: 0
    };
    if (el.value) useIntersectionObserver(el, ([entry]) => {
      var _a;
      if (entry == null ? void 0 : entry.isIntersecting) onIntersect();
      else (_a = options == null ? void 0 : options.onExit) == null ? void 0 : _a.call(options);
    }, observerOptions);
  });
};

// node_modules/@scalar/api-reference/dist/plugins/plugin-manager.js
var createEmptyAuthState = () => ({
  export: () => ({}),
  getAuthSecrets: () => void 0,
  getAuthSelectedSchemas: () => void 0
});
var PLUGIN_VIEW_NAMES = ["content.start", "content.end"];
var getPluginViewId = (documentSlug, pluginName, viewName, index) => `${documentSlug}/plugin-view/${pluginName}/${viewName}/${index}`;
var createPluginManager = ({ plugins = [], auth }) => {
  const registeredPlugins = /* @__PURE__ */ new Map();
  const authState = auth ?? createEmptyAuthState();
  plugins.forEach((plugin) => {
    const pluginInstance = plugin();
    registeredPlugins.set(pluginInstance.name, pluginInstance);
  });
  return {
    /**
    * Get all extensions with the given name from registered plugins
    */
    getSpecificationExtensions: (name) => {
      const extensions = [];
      for (const plugin of registeredPlugins.values()) for (const extension of plugin.extensions) if (extension.name === name) extensions.push(extension);
      return extensions;
    },
    /**
    * Get all components for a specific view from registered plugins.
    *
    * Each component carries a stable `id` (scoped to the active document slug) so the rendered
    * DOM element and the sidebar entry (see `getSidebarEntries`) share the same id and stay in
    * sync for scroll navigation and deep-linking.
    */
    getViewComponents: (viewName, documentSlug) => {
      var _a;
      const components = [];
      for (const plugin of registeredPlugins.values()) {
        const viewComponents = (_a = plugin.views) == null ? void 0 : _a[viewName];
        if (viewComponents) viewComponents.forEach((component, index) => {
          components.push({
            ...component,
            id: getPluginViewId(documentSlug, plugin.name, viewName, index)
          });
        });
      }
      return components;
    },
    /**
    * Notify all plugins that the API Reference has been initialized
    */
    notifyInit: (config) => {
      var _a, _b;
      for (const plugin of registeredPlugins.values()) (_b = (_a = plugin.hooks) == null ? void 0 : _a.onInit) == null ? void 0 : _b.call(_a, {
        config,
        auth: authState
      });
    },
    /**
    * Notify all plugins that the configuration has changed
    */
    notifyConfigChange: (config) => {
      var _a, _b;
      for (const plugin of registeredPlugins.values()) (_b = (_a = plugin.hooks) == null ? void 0 : _a.onConfigChange) == null ? void 0 : _b.call(_a, {
        config,
        auth: authState
      });
    },
    /**
    * Get the read-only accessor for the global authentication state.
    *
    * Plugin view components can call this (via `usePluginManager`) to read stored secrets and the
    * selected security schemes. Returns an empty auth state when no accessor was provided.
    */
    getAuthState: () => authState,
    /**
    * Notify all plugins that the API Reference is being destroyed
    */
    notifyDestroy: () => {
      var _a, _b;
      for (const plugin of registeredPlugins.values()) (_b = (_a = plugin.hooks) == null ? void 0 : _a.onDestroy) == null ? void 0 : _b.call(_a);
    },
    /**
    * Get all client plugins provided by registered plugins
    */
    getApiClientPlugins: () => {
      const apiClientPlugins = [];
      for (const plugin of registeredPlugins.values()) if (plugin.apiClientPlugins) apiClientPlugins.push(...plugin.apiClientPlugins);
      return apiClientPlugins;
    },
    /**
    * Get all sidebar entries contributed by plugin views.
    *
    * Only views that opt in via `sidebar.show` are returned. Each entry's `id` matches the
    * id of the rendered component (see `getViewComponents`), so the API Reference can add it
    * to the sidebar navigation and scrolling/active-tracking work out of the box.
    */
    getSidebarEntries: (documentSlug) => {
      var _a, _b;
      const entries = [];
      for (const plugin of registeredPlugins.values()) for (const viewName of PLUGIN_VIEW_NAMES) (_b = (_a = plugin.views) == null ? void 0 : _a[viewName]) == null ? void 0 : _b.forEach((component, index) => {
        var _a2;
        if (((_a2 = component.sidebar) == null ? void 0 : _a2.show) && component.sidebar.label) entries.push({
          id: getPluginViewId(documentSlug, plugin.name, viewName, index),
          label: component.sidebar.label,
          viewName
        });
      });
      return entries;
    }
  };
};

// node_modules/@scalar/api-reference/dist/plugins/hooks/usePluginManager.js
var PLUGIN_MANAGER_SYMBOL = Symbol();
var usePluginManager = () => {
  const manager = inject(PLUGIN_MANAGER_SYMBOL);
  if (!manager) return createPluginManager({});
  return manager;
};

// node_modules/@scalar/api-reference/dist/helpers/storage.js
var storage = safeLocalStorage();
var clientStorage = () => {
  const key = REFERENCE_LS_KEYS.SELECTED_CLIENT;
  return {
    /**
    * Gets the stored selected client from local storage.
    */
    get: () => {
      return storage.getItem(key);
    },
    /**
    * Stores the selected client value in local storage.
    * @param value The value to store
    */
    set: (value) => {
      storage.setItem(key, value);
    }
  };
};
var authStorage = () => {
  const getKey2 = (slug) => {
    return `${REFERENCE_LS_KEYS.AUTH}-${slug}`;
  };
  return {
    /**
    * Retrieves and coerces the authentication schemes stored in local storage.
    */
    getAuth: (slug) => {
      return coerceValue(AuthSchema, JSON.parse(storage.getItem(getKey2(slug)) ?? "{}"));
    },
    /**
    * Stores the authentication schemes in local storage.
    * @param value The Auth object to stringify and store.
    */
    setAuth: (slug, value) => {
      storage.setItem(getKey2(slug), JSON.stringify(value));
    }
  };
};

// node_modules/@scalar/api-reference/dist/plugins/persistence-plugin.js
var persistencePlugin = ({ debounceDelay = 500, maxWait = 1e4, persistAuth = false }) => {
  const { execute } = debounce({
    delay: debounceDelay,
    maxWait
  });
  const authPersistence = authStorage();
  const clientPersistence = clientStorage();
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
      if (event.type === "meta") {
        const defaultClient = event.value["x-scalar-default-client"];
        if (defaultClient !== void 0) execute("x-scalar-default-client", () => clientPersistence.set(defaultClient));
        return;
      }
      if (getPersistAuth() && event.type === "auth") execute(`auth-${event.documentName}`, () => authPersistence.setAuth(event.documentName, event.value));
    }
  } };
};

// node_modules/@scalar/api-reference/dist/helpers/id-routing.js
var trimLeadingSlashes = (value) => {
  let start = 0;
  while (start < value.length && value[start] === "/") start += 1;
  return value.slice(start);
};
var trimTrailingSlashes = (value) => {
  let end = value.length;
  while (end > 0 && value[end - 1] === "/") end -= 1;
  return value.slice(0, end);
};
var sanitizeBasePath = (basePath) => {
  return trimTrailingSlashes(trimLeadingSlashes(basePath));
};
var isHashBasePath = (basePath) => basePath.startsWith("#");
var sanitizeHashBasePath = (basePath) => {
  return trimTrailingSlashes(basePath.replace(/^#+/, ""));
};
var applySlugPrefix = (base, slugPrefix) => {
  return slugPrefix ? `${slugPrefix}${base ? "/" : ""}${base}` : base;
};
var stripBasePathPrefix = (value, basePath) => {
  if (value === basePath) return "";
  if (value.startsWith(`${basePath}/`)) return value.slice(basePath.length + 1);
  return null;
};
var encodeBasePath = (sanitized) => {
  if (!sanitized) return "";
  return `/${sanitized.split("/").map((segment) => encodeURIComponent(segment)).join("/")}`;
};
var getIdFromHash = (location, slugPrefix) => {
  const url = typeof location === "string" ? new URL(location) : location;
  return applySlugPrefix(decodeURIComponent(url.hash.slice(1)), slugPrefix);
};
var getIdFromPath = (location, basePath, slugPrefix) => {
  const url = typeof location === "string" ? new URL(location) : location;
  const basePathWithSlash = encodeBasePath(sanitizeBasePath(basePath));
  if (url.pathname.startsWith(basePathWithSlash)) {
    const remainder = url.pathname.slice(basePathWithSlash.length);
    return applySlugPrefix(decodeURIComponent(remainder.startsWith("/") ? remainder.slice(1) : remainder), slugPrefix);
  }
  return slugPrefix ?? "";
};
var getIdFromHashBasePath = (location, basePath, slugPrefix) => {
  const url = typeof location === "string" ? new URL(location) : location;
  const remainder = stripBasePathPrefix(decodeURIComponent(url.hash.slice(1)), sanitizeHashBasePath(basePath));
  if (remainder !== null) return applySlugPrefix(remainder, slugPrefix);
  return slugPrefix ?? "";
};
var matchesBasePath = (location, basePath) => {
  const url = typeof location === "string" ? new URL(location) : location;
  if (isHashBasePath(basePath)) {
    const hash = decodeURIComponent(url.hash);
    return hash === basePath || hash.startsWith(`${basePath}/`);
  }
  const basePathWithSlash = encodeBasePath(sanitizeBasePath(basePath));
  return url.pathname === basePathWithSlash || url.pathname.startsWith(`${basePathWithSlash}/`);
};
var getIdFromUrl = (url, basePath, slugPrefix) => {
  if (typeof basePath !== "string") return getIdFromHash(url, slugPrefix);
  return isHashBasePath(basePath) ? getIdFromHashBasePath(url, basePath, slugPrefix) : getIdFromPath(url, basePath, slugPrefix);
};
var stripFirstSegment = (id) => {
  const hasTrailingSlash = id.endsWith("/");
  const result = id.split("/").filter(Boolean).slice(1).join("/");
  return hasTrailingSlash && result ? `${result}/` : result;
};
var makeUrlFromId = (_id, basePath, isMultiDocument) => {
  if (typeof window === "undefined") return;
  const id = isMultiDocument ? _id : stripFirstSegment(_id);
  const url = new URL(window.location.href);
  if (typeof basePath === "string") if (isHashBasePath(basePath)) url.hash = [sanitizeHashBasePath(basePath), id].filter(Boolean).join("/");
  else url.pathname = `${sanitizeBasePath(basePath)}/${id}`;
  else url.hash = id;
  return url;
};
var makeHrefFromId = (_id, basePath, isMultiDocument) => {
  const id = isMultiDocument ? _id : stripFirstSegment(_id);
  const url = new URL("http://scratch");
  if (typeof basePath === "string") {
    if (isHashBasePath(basePath)) {
      url.hash = [sanitizeHashBasePath(basePath), id].filter(Boolean).join("/");
      return url.hash || "#";
    }
    url.pathname = `${sanitizeBasePath(basePath)}/${id}`;
    return url.pathname.replace(/^\/+/, "/");
  }
  url.hash = id;
  return url.hash || "#";
};
var escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var bareHashCarrier = (url) => ({
  value: decodeURIComponent(url.hash.slice(1)),
  write: (next) => {
    url.hash = next;
  }
});
var locateIdCarriers = (url, basePath) => {
  if (typeof basePath !== "string") return [bareHashCarrier(url)];
  if (isHashBasePath(basePath)) {
    const base2 = sanitizeHashBasePath(basePath);
    return [{
      value: stripBasePathPrefix(decodeURIComponent(url.hash.slice(1)), base2) ?? "",
      write: (next) => {
        url.hash = [base2, next].filter(Boolean).join("/");
      }
    }, bareHashCarrier(url)];
  }
  const base = sanitizeBasePath(basePath);
  const remainder = stripBasePathPrefix(url.pathname, encodeBasePath(base));
  return [{
    value: remainder === null ? "" : decodeURIComponent(remainder),
    write: (next) => {
      url.pathname = base ? `/${base}/${next}` : `/${next}`;
    }
  }, bareHashCarrier(url)];
};
var applyIdRedirects = (id, redirects) => {
  for (const { match, replace } of redirects) {
    const next = typeof replace === "string" ? id.replace(match, replace) : id.replace(match, replace);
    if (next !== id) return next;
  }
  return id;
};
var TAG_CHROME = "(?:(?:tag-group/[^/]+/)?tag/[^/]+/)?";
var buildRedirects = ({ modelsSectionSlug, documentSlug, isMultiDocument }) => {
  const escapedDoc = escapeRegex(documentSlug);
  const documentPrefix = isMultiDocument ? `${escapedDoc}/${TAG_CHROME}` : `(?:${escapedDoc}/${TAG_CHROME})?`;
  const renameSectionSegment = (from) => ({
    match: new RegExp(`^(${documentPrefix})${escapeRegex(from)}/`),
    replace: (_match, prefix) => `${prefix}${modelsSectionSlug}/`
  });
  const redirects = [renameSectionSegment("model")];
  if (modelsSectionSlug !== "models") redirects.push(renameSectionSegment("models"));
  return redirects;
};
var SCHEMA_PARAM_MARKERS = [
  ".body.",
  ".path.",
  ".query.",
  ".header.",
  ".responses."
];
var buildWebhookRedirects = (webhooks) => {
  const key = (method, slug) => `${method.toUpperCase()}/${slug}`;
  const currentKeys = /* @__PURE__ */ new Set();
  const legacyCounts = /* @__PURE__ */ new Map();
  for (const { name, method, id } of webhooks) {
    currentKeys.add(key(method, id.slice(id.lastIndexOf("/") + 1)));
    const legacySlug = slugify(name);
    if (legacySlug) {
      const legacyKey = key(method, legacySlug);
      legacyCounts.set(legacyKey, (legacyCounts.get(legacyKey) ?? 0) + 1);
    }
  }
  const boundary = `(?=$|/|${SCHEMA_PARAM_MARKERS.map(escapeRegex).join("|")})`;
  const redirects = [];
  for (const { name, method, id } of webhooks) {
    const upperMethod = method.toUpperCase();
    const currentSlug = id.slice(id.lastIndexOf("/") + 1);
    const legacySlug = slugify(name);
    const legacyKey = key(method, legacySlug);
    if (!legacySlug || legacySlug === currentSlug || currentKeys.has(legacyKey) || (legacyCounts.get(legacyKey) ?? 0) > 1) continue;
    redirects.push({
      match: new RegExp(`(^|/)webhook/${escapeRegex(upperMethod)}/${escapeRegex(legacySlug)}${boundary}`),
      replace: (_match, prefix) => `${prefix}webhook/${upperMethod}/${currentSlug}`
    });
  }
  return redirects;
};
var redirectUrl = (url, modelsSectionSlug, documentSlug, isMultiDocument, basePath, webhooks = []) => {
  if (!documentSlug) return null;
  const target = new URL(typeof url === "string" ? url : url.toString());
  const redirects = [...buildRedirects({
    modelsSectionSlug,
    documentSlug,
    isMultiDocument
  }), ...buildWebhookRedirects(webhooks)];
  let didRedirect = false;
  for (const carrier of locateIdCarriers(target, basePath)) {
    const rewritten = applyIdRedirects(carrier.value, redirects);
    if (rewritten !== carrier.value) {
      carrier.write(rewritten);
      didRedirect = true;
    }
  }
  return didRedirect ? target : null;
};
var getSchemaParamsFromId = (id) => {
  let markerIndex = -1;
  for (const marker of SCHEMA_PARAM_MARKERS) {
    const index = id.indexOf(marker);
    if (index !== -1 && (markerIndex === -1 || index < markerIndex)) markerIndex = index;
  }
  if (markerIndex === -1) return {
    rawId: id,
    params: ""
  };
  return {
    rawId: id.slice(0, markerIndex),
    params: id.slice(markerIndex + 1)
  };
};

// node_modules/@scalar/api-reference/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// node_modules/@scalar/api-reference/node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id;
};

// node_modules/@scalar/api-reference/dist/helpers/lazy-bus.js
var priorityQueue = reactive(/* @__PURE__ */ new Set());
var pendingQueue = reactive(/* @__PURE__ */ new Set());
var readyQueue = reactive(/* @__PURE__ */ new Set());
var isRunning = ref(false);
var SCROLL_RETRY_MS = 3e3;
var firstLazyLoadComplete = ref(false);
var scrollTargetId = ref("");
var clearScrollTarget = (id) => {
  if (scrollTargetId.value === id) scrollTargetId.value = "";
};
var intersectionBlockers = reactive(/* @__PURE__ */ new Set());
var onRenderComplete = /* @__PURE__ */ new Set();
var lazyPlaceholderHeights = reactive(/* @__PURE__ */ new Map());
var getLazyPlaceholderHeight = (id) => lazyPlaceholderHeights.get(id);
var setLazyPlaceholderHeight = (id, height) => {
  if (!Number.isFinite(height) || height <= 0) return;
  lazyPlaceholderHeights.set(id, Math.round(height));
};
var addLazyCompleteCallback = (callback) => {
  if (callback) onRenderComplete.add(callback);
};
var blockIntersection = () => {
  const blockId = nanoid();
  intersectionBlockers.add(blockId);
  return () => setTimeout(() => intersectionBlockers.delete(blockId), 100);
};
var intersectionEnabled = computed(() => intersectionBlockers.size === 0);
var runLazyBus = () => {
  if (typeof window === "undefined") return;
  if (isRunning.value) return;
  isRunning.value = true;
  const processQueue = async () => {
    const priorityIds = [...priorityQueue];
    const pendingIds = [...pendingQueue];
    if (priorityIds.length === 0 && pendingIds.length === 0) {
      onRenderComplete.forEach((fn) => fn());
      onRenderComplete.clear();
      isRunning.value = false;
      firstLazyLoadComplete.value = true;
      return;
    }
    for (const id of priorityIds) {
      readyQueue.add(id);
      priorityQueue.delete(id);
    }
    for (const id of pendingIds) {
      readyQueue.add(id);
      pendingQueue.delete(id);
    }
    await nextTick();
    onRenderComplete.forEach((fn) => fn());
    onRenderComplete.clear();
    isRunning.value = false;
    firstLazyLoadComplete.value = true;
  };
  if (window.requestIdleCallback) window.requestIdleCallback(processQueue, { timeout: 1500 });
  else nextTick(processQueue);
};
watchDebounced([
  () => pendingQueue.size,
  () => priorityQueue.size,
  () => isRunning.value
], () => {
  if ((pendingQueue.size > 0 || priorityQueue.size > 0) && !isRunning.value) runLazyBus();
}, {
  debounce: 300,
  maxWait: 1500
});
var addToPendingQueue = (id) => {
  if (id && !readyQueue.has(id) && !priorityQueue.has(id)) pendingQueue.add(id);
};
var addToPriorityQueue = (id) => {
  if (id && !priorityQueue.has(id)) priorityQueue.add(id);
};
var requestLazyRender = (id, priority = false) => {
  if (!id || readyQueue.has(id)) return;
  if (priority) addToPriorityQueue(id);
  else addToPendingQueue(id);
  if (!isRunning.value) runLazyBus();
};
var scheduleInitialLoadComplete = () => {
  if (typeof window === "undefined") return;
  window.setTimeout(() => runLazyBus(), 400);
};
var resetLazyElement = (id) => {
  priorityQueue.delete(id);
  pendingQueue.delete(id);
  readyQueue.delete(id);
  lazyPlaceholderHeights.delete(id);
};
function useLazyBus(id) {
  onBeforeUnmount(() => {
    resetLazyElement(id);
  });
  return { isReady: computed(() => typeof window === "undefined" || priorityQueue.has(id) || readyQueue.has(id)) };
}
var scrollToLazy = (id, setExpanded, getEntryById) => {
  var _a, _b, _c;
  const item = getEntryById(id);
  const unfreeze = !readyQueue.has(id) || ((_a = item == null ? void 0 : item.children) == null ? void 0 : _a.some((child) => !readyQueue.has(child.id))) ? freeze(id) : void 0;
  addLazyCompleteCallback(unfreeze);
  const unblock = blockIntersection();
  const { rawId } = getSchemaParamsFromId(id);
  scrollTargetId.value = id;
  addToPriorityQueue(id);
  addToPriorityQueue(rawId);
  if (item == null ? void 0 : item.children) item.children.slice(0, 2).forEach((child) => addToPriorityQueue(child.id));
  if (item == null ? void 0 : item.parent) {
    const parent = getEntryById(item.parent.id);
    const elementIdx = (_b = parent == null ? void 0 : parent.children) == null ? void 0 : _b.findIndex((child) => child.id === id);
    if (elementIdx !== void 0 && elementIdx >= 0) (_c = parent == null ? void 0 : parent.children) == null ? void 0 : _c.slice(elementIdx, elementIdx + 2).forEach((child) => addToPriorityQueue(child.id));
  }
  setExpanded(rawId, true);
  const addParents = (currentId) => {
    var _a2;
    const parent = (_a2 = getEntryById(currentId)) == null ? void 0 : _a2.parent;
    if (parent) {
      addToPriorityQueue(parent.id);
      setExpanded(parent.id, true);
      addParents(parent.id);
    }
  };
  addParents(rawId);
  nextTick(() => {
    tryScroll(id, Date.now() + SCROLL_RETRY_MS, unblock, unfreeze);
  });
};
var tryScroll = (id, stopTime, onComplete, onFailure) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ block: "start" });
    clearScrollTarget(id);
    onComplete();
  } else if (Date.now() < stopTime) requestAnimationFrame(() => tryScroll(id, stopTime, onComplete, onFailure));
  else {
    clearScrollTarget(id);
    onComplete();
    onFailure == null ? void 0 : onFailure();
  }
};
var freeze = (id) => {
  let stop = false;
  const runFrame = (stopAfterFrame) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ block: "start" });
    if (!stopAfterFrame) requestAnimationFrame(() => runFrame(stop));
  };
  runFrame(false);
  return () => {
    stop = true;
  };
};

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/Selector.vue.script.js
var _hoisted_19 = { class: "sr-only" };
var _hoisted_27 = { class: "overflow-x-auto" };
var _hoisted_36 = {
  key: 1,
  class: "text-c-1 flex h-auto w-full items-center gap-0.75 !rounded-b-xl px-3 py-1.5 text-base leading-[20px] whitespace-nowrap"
};
var _hoisted_44 = { class: "sr-only" };
var _hoisted_53 = { class: "overflow-x-auto" };
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
    const { translate } = useLocalization();
    const serverOptions = computed(() => __props.servers.map((server) => ({
      id: server.name,
      label: server.url
    })));
    const serverUrlWithoutTrailingSlash = computed(() => {
      var _a, _b;
      return ((_b = (_a = __props.selectedServer) == null ? void 0 : _a.url) == null ? void 0 : _b.replace(/\/$/, "")) || "";
    });
    const selectedServerOption = computed(() => serverOptions.value.find((opt) => {
      var _a;
      return opt.id === ((_a = __props.selectedServer) == null ? void 0 : _a.name);
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
          class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-1.5 overflow-x-auto rounded-t-none !rounded-b-xl px-3 py-1.5 text-base/5.25 font-normal whitespace-nowrap -outline-offset-1",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_19, toDisplayString(unref(translate)("server.label")) + ":", 1),
            createBaseVNode("span", _hoisted_27, toDisplayString(serverUrlWithoutTrailingSlash.value || unref(translate)("server.select")), 1),
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
      ])) : (openBlock(), createElementBlock("div", _hoisted_36, [createBaseVNode("span", _hoisted_44, toDisplayString(unref(translate)("server.label")) + ":", 1), createBaseVNode("span", _hoisted_53, toDisplayString(serverUrlWithoutTrailingSlash.value), 1)]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/Selector.vue.js
var Selector_default = Selector_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/AsyncApiServerSelector.vue.script.js
var _hoisted_110 = { class: "bg-b-2 flex h-8 items-center rounded-t-xl border-x border-t px-3 py-2.5 font-medium" };
var _hoisted_28 = ["id"];
var AsyncApiServerSelector_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AsyncApiServerSelector",
  props: {
    eventBus: {},
    selectedServer: {},
    servers: {}
  },
  setup(__props) {
    const id = useId();
    const { translate } = useLocalization();
    const serverVariables = computed(() => {
      var _a;
      const variables = (_a = __props.selectedServer) == null ? void 0 : _a.server.variables;
      if (!variables) return;
      return Object.fromEntries(Object.entries(variables).map(([name, variable]) => {
        const resolved = getResolvedRef(variable);
        return [name, {
          default: resolved.default ?? "",
          enum: resolved.enum,
          description: resolved.description
        }];
      }));
    });
    const updateServer = (name) => {
      __props.eventBus.emit("asyncapi-server:update:selected", { name });
    };
    const updateServerVariable = (key, value) => {
      if (!__props.selectedServer) return;
      __props.eventBus.emit("asyncapi-server:update:variables", {
        name: __props.selectedServer.name,
        key,
        value
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("label", _hoisted_110, toDisplayString(unref(translate)("server.label")), 1),
        createBaseVNode("div", {
          id: unref(id),
          class: normalizeClass(["border", { "rounded-b-xl": !((_a = __props.selectedServer) == null ? void 0 : _a.description) && !serverVariables.value }])
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
        ])) : createCommentVNode("", true)], 10, _hoisted_28),
        createVNode(unref(ServerVariablesForm_default), {
          layout: "reference",
          variables: serverVariables.value,
          "onUpdate:variable": updateServerVariable
        }, null, 8, ["variables"]),
        ((_b = __props.selectedServer) == null ? void 0 : _b.description) ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
          key: 0,
          class: "text-c-3 rounded-b-xl border-x border-b px-3 py-1.5",
          value: __props.selectedServer.description
        }, null, 8, ["value"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-asyncapi-server-selector-block/components/AsyncApiServerSelector.vue.js
var AsyncApiServerSelector_default = AsyncApiServerSelector_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/helpers/featured-clients.js
var FEATURED_CLIENTS = [
  "shell/curl",
  "ruby/native",
  "node/undici",
  "php/guzzle",
  "python/python3"
];
var isFeaturedClient = (clientId, featuredClients = FEATURED_CLIENTS) => Boolean(clientId && featuredClients.includes(clientId));
var getFeaturedClients = (clientOptions, featuredClients = FEATURED_CLIENTS) => {
  const clientMap = /* @__PURE__ */ new Map();
  for (const group of clientOptions) for (const option of group.options) clientMap.set(option.id, option);
  return featuredClients.flatMap((clientId) => {
    return clientMap.get(clientId) ?? [];
  });
};

// node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientDropdown.vue.script.js
var _hoisted_111 = {
  "aria-hidden": "true",
  class: "client-libraries-icon__more"
};
var _hoisted_29 = {
  key: 1,
  class: "client-libraries-icon",
  height: "50",
  role: "presentation",
  viewBox: "0 0 50 50",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_37 = {
  key: 0,
  class: "client-libraries-text client-libraries-text-more"
};
var _hoisted_45 = { class: "sr-only" };
var ClientDropdown_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ClientDropdown",
  props: {
    clientOptions: {},
    selectedClient: {},
    eventBus: {}
  },
  setup(__props) {
    const containerRef = ref();
    const { translate } = useLocalization();
    const getIconByLanguageKey = (targetKey) => `programming-language-${targetKey === "js" ? "javascript" : targetKey}`;
    const selectClient = (option) => {
      if (!containerRef.value) return;
      const unfreeze = freezeElement(containerRef.value);
      setTimeout(() => {
        unfreeze();
      }, 300);
      if (option.clientKey !== "custom") __props.eventBus.emit("workspace:update:selected-client", option.id);
    };
    const selectedTargetKey = computed(() => {
      var _a;
      return (_a = __props.selectedClient) == null ? void 0 : _a.split("/")[0];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: "client-libraries-more"
      }, [createVNode(unref(ScalarCombobox_default), {
        filterFn: unref(n),
        modelValue: unref(i)(__props.clientOptions, __props.selectedClient),
        options: __props.clientOptions,
        placement: "bottom-end",
        teleport: "",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectClient($event))
      }, {
        default: withCtx(() => [createBaseVNode("button", {
          class: normalizeClass(["client-libraries client-libraries__select", { "client-libraries__active": __props.selectedClient && !unref(isFeaturedClient)(__props.selectedClient) }]),
          type: "button"
        }, [
          createBaseVNode("div", _hoisted_111, [__props.selectedClient && !unref(isFeaturedClient)(__props.selectedClient) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`client-libraries-icon__${selectedTargetKey.value}`)
          }, [selectedTargetKey.value ? (openBlock(), createBlock(unref(ScalarIcon_default), {
            key: 0,
            class: "client-libraries-icon",
            icon: getIconByLanguageKey(selectedTargetKey.value)
          }, null, 8, ["icon"])) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("svg", _hoisted_29, [..._cache[1] || (_cache[1] = [createBaseVNode("g", {
            fill: "currentColor",
            "fill-rule": "nonzero"
          }, [createBaseVNode("path", { d: "M10.71 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M21.13 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0M31.55 25.3a3.87 3.87 0 1 0 7.74 0 3.87 3.87 0 0 0-7.74 0" })], -1)])]))]),
          __props.clientOptions.length ? (openBlock(), createElementBlock("span", _hoisted_37, toDisplayString(unref(translate)("clientLibraries.more")), 1)) : createCommentVNode("", true),
          createBaseVNode("span", _hoisted_45, toDisplayString(unref(translate)("clientLibraries.selectAll")), 1)
        ], 2)]),
        _: 1
      }, 8, [
        "filterFn",
        "modelValue",
        "options"
      ])], 512);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientDropdown.vue.js
var ClientDropdown_default = _plugin_vue_export_helper_default2(ClientDropdown_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-da3e3bd2"]]);

// node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientSelector.vue.script.js
var _hoisted_112 = {
  key: 0,
  ref: "wrapper-ref"
};
var _hoisted_210 = ["id"];
var _hoisted_38 = { class: "client-libraries-list" };
var _hoisted_46 = { class: "client-libraries-text" };
var _hoisted_54 = ["id"];
var ClientSelector_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ClientSelector",
  props: {
    clientOptions: {},
    selectedClient: { default: () => t },
    eventBus: {}
  },
  setup(__props, { expose: __expose }) {
    const headingId = useId();
    const morePanel = useId();
    const { translate } = useLocalization();
    const isCustomSelection = (client) => Boolean(client == null ? void 0 : client.startsWith("custom/"));
    const activeClient = ref(isCustomSelection(__props.selectedClient) ? t : __props.selectedClient);
    watch(() => __props.selectedClient, (newClient) => {
      if (!isCustomSelection(newClient)) activeClient.value = newClient;
    });
    const selectedClientOption = computed(() => __props.clientOptions.flatMap((optionGroup) => optionGroup.options.find((option) => option.id === activeClient.value) ?? [])[0]);
    const featuredClients = computed(() => getFeaturedClients(__props.clientOptions));
    const tabIndex = computed(() => featuredClients.value.findIndex((client) => client.id === activeClient.value));
    const wrapper = useTemplateRef("wrapper-ref");
    const getIconByLanguageKey = (targetKey) => `programming-language-${targetKey === "js" ? "javascript" : targetKey}`;
    const onTabSelect = (index) => {
      const client = featuredClients.value[index];
      if (!client || !wrapper.value) return;
      __props.eventBus.emit("workspace:update:selected-client", client.id);
    };
    __expose({ selectedClientOption });
    return (_ctx, _cache) => {
      return __props.clientOptions.length ? (openBlock(), createElementBlock("div", _hoisted_112, [createVNode(unref(me), {
        manual: "",
        selectedIndex: tabIndex.value,
        onChange: onTabSelect
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            id: unref(headingId),
            class: "client-libraries-heading"
          }, toDisplayString(unref(translate)("clientLibraries.heading")), 9, _hoisted_210),
          createBaseVNode("div", _hoisted_38, [createVNode(unref(pe), {
            "aria-labelledby": unref(headingId),
            class: "client-libraries-tabs",
            style: normalizeStyle({ flexGrow: featuredClients.value.length })
          }, {
            default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(featuredClients.value, (featuredClient) => {
              return openBlock(), createBlock(unref(xe), {
                key: featuredClient.clientKey,
                class: normalizeClass(["client-libraries rendered-code-sdks", { "client-libraries__active": featuredClient.id === activeClient.value }])
              }, {
                default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(`client-libraries-icon__${featuredClient.targetKey}`) }, [createVNode(unref(ScalarIcon_default), {
                  class: "client-libraries-icon",
                  icon: getIconByLanguageKey(featuredClient.targetKey)
                }, null, 8, ["icon"])], 2), createBaseVNode("span", _hoisted_46, toDisplayString(featuredClient.targetTitle), 1)]),
                _: 2
              }, 1032, ["class"]);
            }), 128))]),
            _: 1
          }, 8, ["aria-labelledby", "style"]), createVNode(ClientDropdown_default, {
            clientOptions: __props.clientOptions,
            eventBus: __props.eventBus,
            selectedClient: activeClient.value
          }, null, 8, [
            "clientOptions",
            "eventBus",
            "selectedClient"
          ])]),
          createVNode(unref(Ie), null, {
            default: withCtx(() => {
              var _a;
              return [unref(isFeaturedClient)(activeClient.value) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(featuredClients.value, (client) => {
                return openBlock(), createBlock(unref(ye), {
                  key: client.id,
                  class: "selected-client card-footer -outline-offset-2"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(client.title), 1)]),
                  _: 2
                }, 1024);
              }), 128)) : (openBlock(), createElementBlock("div", {
                key: 1,
                id: unref(morePanel),
                class: "selected-client card-footer -outline-offset-2",
                role: "tabpanel",
                tabindex: "0"
              }, toDisplayString((_a = selectedClientOption.value) == null ? void 0 : _a.title), 9, _hoisted_54))];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["selectedIndex"])], 512)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-client-selector-block/components/ClientSelector.vue.js
var ClientSelector_default = _plugin_vue_export_helper_default2(ClientSelector_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-34beffcc"]]);

// node_modules/@scalar/api-reference/dist/features/document-outline/use-document-outline.js
var OUTLINE = {
  document: 1,
  tag: 2,
  channel: 2,
  modelGroup: 2,
  operation: 3,
  model: 3,
  message: 4
};
var OUTLINE_ROOT = Symbol("DOCUMENT_OUTLINE_ROOT");
var clamp = (level) => Math.min(6, Math.max(1, level));
var provideDocumentOutline = (role) => provide(OUTLINE_ROOT, role);
var useDocumentOutline = (role) => {
  const inherited = inject(OUTLINE_ROOT, null);
  if (!inherited) provide(OUTLINE_ROOT, role);
  const root = inherited ?? role;
  return { level: clamp(OUTLINE[role] - OUTLINE[root] + 1) };
};

// node_modules/@scalar/api-reference/dist/features/specification-extension/helpers.js
var getXKeysFromObject = (object) => {
  if (!object) return {};
  return Object.fromEntries(Object.entries(object).filter(([key]) => key.startsWith("x-")));
};

// node_modules/@scalar/api-reference/dist/components/Badge/Badge.vue.script.js
var Badge_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "Badge",
  props: { color: {} },
  setup(__props) {
    const { cx } = useBindCx();
    const badgeStyle = computed(() => __props.color ? {
      backgroundColor: __props.color,
      color: `color-mix(in srgb, ${__props.color}, black 40%)`
    } : void 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps(unref(cx)("badge inline-block rounded-2xl border bg-b-2 px-1.5 py-0.5 text-c-2 text-sm"), { style: badgeStyle.value }), [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 16);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Badge/Badge.vue.js
var Badge_default = _plugin_vue_export_helper_default2(Badge_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-3f3e4ac3"]]);

// node_modules/@scalar/helpers/dist/url/is-safe-url.js
var SAFE_PROTOCOLS = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "tel:", "ftp:", "ftps:", "sms:"]);
var SCHEME_REGEX = /^([a-z][a-z0-9+.-]*):/i;
var IGNORED_CHARACTERS_REGEX = /[\u0000-\u0020\u007f-\u009f]/g;
var isSafeUrl = (url) => {
  var _a;
  if (!url) {
    return false;
  }
  const normalized = url.replace(IGNORED_CHARACTERS_REGEX, "");
  if (!normalized) {
    return false;
  }
  const scheme = (_a = SCHEME_REGEX.exec(normalized)) == null ? void 0 : _a[1];
  if (!scheme) {
    return true;
  }
  return SAFE_PROTOCOLS.has(`${scheme.toLowerCase()}:`);
};
var sanitizeUrl = (url) => isSafeUrl(url) ? url : void 0;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/DownloadLink.vue.script.js
var _hoisted_113 = ["href"];
var DownloadLink_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "DownloadLink",
  props: {
    documentDownloadType: {},
    eventBus: {},
    documentUrl: {},
    documentType: { default: "openapi" }
  },
  setup(__props) {
    const { translate } = useLocalization();
    const label = computed(() => __props.documentType === "asyncapi" ? translate("download.asyncapi") : translate("download.openapi"));
    const safeDocumentUrl = computed(() => sanitizeUrl(__props.documentUrl));
    const handleDownloadClick = (format) => {
      __props.eventBus.emit("ui:download:document", { format });
    };
    return (_ctx, _cache) => {
      return [
        "yaml",
        "json",
        "both"
      ].includes(__props.documentDownloadType) || __props.documentDownloadType === "direct" && safeDocumentUrl.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["download-container group", { "download-both": __props.documentDownloadType === "both" }])
      }, [
        __props.documentDownloadType === "direct" && safeDocumentUrl.value ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "download-link download-button",
          href: safeDocumentUrl.value
        }, [createBaseVNode("span", null, toDisplayString(label.value), 1)], 8, _hoisted_113)) : createCommentVNode("", true),
        __props.documentDownloadType === "json" || __props.documentDownloadType === "both" ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: "download-button",
          type: "button",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => handleDownloadClick("json"), ["prevent"]))
        }, [createBaseVNode("span", null, toDisplayString(label.value), 1), createVNode(Badge_default, { class: "extension hidden group-hover:flex" }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("json", -1)])]),
          _: 1
        })])) : createCommentVNode("", true),
        __props.documentDownloadType === "yaml" || __props.documentDownloadType === "both" ? (openBlock(), createElementBlock("button", {
          key: 2,
          class: "download-button",
          type: "button",
          onClick: _cache[1] || (_cache[1] = withModifiers(() => handleDownloadClick("yaml"), ["prevent"]))
        }, [createBaseVNode("span", null, toDisplayString(label.value), 1), createVNode(Badge_default, { class: "extension hidden group-hover:flex" }, {
          default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("yaml", -1)])]),
          _: 1
        })])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/DownloadLink.vue.js
var DownloadLink_default = _plugin_vue_export_helper_default2(DownloadLink_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0aba6db2"]]);

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionCard.vue.script.js
var IntroductionCard_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "IntroductionCard",
  props: { row: { type: Boolean } },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass(["introduction-card", { "introduction-card-row": __props.row }]) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionCard.vue.js
var IntroductionCard_default = _plugin_vue_export_helper_default2(IntroductionCard_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-e60166e1"]]);

// node_modules/@scalar/api-reference/dist/components/Section/Section.vue.script.js
var Section_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Section",
  emits: ["intersecting"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const section = useTemplateRef("section");
    useIntersection(section, () => emit("intersecting"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        ref_key: "section",
        ref: section,
        class: "section"
      }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 512);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/Section.vue.js
var Section_default = _plugin_vue_export_helper_default2(Section_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-be4443e9"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionColumn.vue.js
var _sfc_main2 = {};
var _hoisted_114 = { class: "section-column" };
function _sfc_render2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_114, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var SectionColumn_default = _plugin_vue_export_helper_default2(_sfc_main2, [["render", _sfc_render2], ["__scopeId", "data-v-699c28e3"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionColumns.vue.js
var _sfc_main3 = {};
var _hoisted_115 = { class: "section-columns" };
function _sfc_render3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_115, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var SectionColumns_default = _plugin_vue_export_helper_default2(_sfc_main3, [["render", _sfc_render3], ["__scopeId", "data-v-8b9602bf"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainer.vue.script.js
var _hoisted_116 = {
  key: 1,
  class: "section-container"
};
var SectionContainer_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SectionContainer",
  props: { omit: { type: Boolean } },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.omit ? renderSlot(_ctx.$slots, "default", {}, void 0, true, 0) : (openBlock(), createElementBlock("div", _hoisted_116, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainer.vue.js
var SectionContainer_default = _plugin_vue_export_helper_default2(SectionContainer_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-20a1472a"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionContent.vue.js
var _sfc_main4 = {};
var _hoisted_117 = { class: "section-content" };
function _sfc_render4(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_117, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var SectionContent_default = _plugin_vue_export_helper_default2(_sfc_main4, [["render", _sfc_render4], ["__scopeId", "data-v-6101128d"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue.script.js
var _hoisted_118 = { class: "section-header-wrapper narrow:grid-cols-1 narrow:gap-0 grid grid-cols-2 gap-12" };
var SectionHeader_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SectionHeader",
  props: {
    tight: { type: Boolean },
    removeMargin: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_118, [createBaseVNode("div", { class: normalizeClass(["section-header", {
        tight: __props.tight,
        "mb-3": !__props.removeMargin
      }]) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2), _ctx.$slots.links ? renderSlot(_ctx.$slots, "links", {}, void 0, true, 0) : createCommentVNode("", true)]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionHeader.vue.js
var SectionHeader_default = _plugin_vue_export_helper_default2(SectionHeader_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7607c44e"]]);

// node_modules/@scalar/api-reference/dist/components/Section/SectionHeaderTag.vue.script.js
var SectionHeaderTag_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SectionHeaderTag",
  props: { level: { default: 1 } },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(`h${__props.level}`), { class: "section-header-label" }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
        _: 3
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionHeaderTag.vue.js
var SectionHeaderTag_default = _plugin_vue_export_helper_default2(SectionHeaderTag_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-f1ac6c38"]]);

// node_modules/@scalar/api-reference/dist/features/specification-extension/SpecificationExtension.vue.script.js
var _hoisted_119 = {
  key: 0,
  class: "text-base"
};
var SpecificationExtension_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SpecificationExtension",
  props: { value: {} },
  setup(__props) {
    const { getSpecificationExtensions } = usePluginManager();
    function getCustomExtensionNames(value) {
      return Object.keys(value ?? {}).filter((item) => item.startsWith("x-"));
    }
    function getCustomOpenApiExtensionComponents(extensionNames) {
      return extensionNames.flatMap((name) => getSpecificationExtensions(name)).filter((extension) => extension.component);
    }
    const customExtensionNames = computed(() => getCustomExtensionNames(__props.value));
    const customExtensions = computed(() => getCustomOpenApiExtensionComponents(customExtensionNames.value));
    return (_ctx, _cache) => {
      return typeof __props.value === "object" && customExtensions.value.length ? (openBlock(), createElementBlock("div", _hoisted_119, [(openBlock(true), createElementBlock(Fragment, null, renderList(customExtensions.value, (extension) => {
        return openBlock(), createBlock(unref(ScalarErrorBoundary_default), null, {
          default: withCtx(() => {
            var _a, _b;
            return [extension.renderer ? (openBlock(), createBlock(resolveDynamicComponent(extension.renderer), mergeProps({
              key: 0,
              ref_for: true
            }, {
              [extension.name]: (_a = __props.value) == null ? void 0 : _a[extension.name],
              component: extension.component
            }), null, 16)) : (openBlock(), createBlock(resolveDynamicComponent(extension.component), mergeProps({
              key: 1,
              ref_for: true
            }, { [extension.name]: (_b = __props.value) == null ? void 0 : _b[extension.name] }), null, 16))];
          }),
          _: 2
        }, 1024);
      }), 256))])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/specification-extension/SpecificationExtension.vue.js
var SpecificationExtension_default = SpecificationExtension_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoMarkdownSection.vue.script.js
var _hoisted_120 = ["id"];
var InfoMarkdownSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "InfoMarkdownSection",
  props: {
    id: {},
    content: {},
    transformHeading: { type: Function },
    eventBus: {}
  },
  setup(__props) {
    const element = useTemplateRef("element");
    useIntersection(element, () => {
      var _a;
      return __props.id ? (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.id }) : void 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        ref_key: "element",
        ref: element,
        class: "introduction-description-heading scroll-mt-16"
      }, [createVNode(unref(ScalarMarkdown_default), {
        transform: __props.transformHeading,
        transformType: "heading",
        value: __props.content,
        withImages: ""
      }, null, 8, ["transform", "value"])], 8, _hoisted_120);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoMarkdownSection.vue.js
var InfoMarkdownSection_default = InfoMarkdownSection_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoDescription.vue.script.js
var _hoisted_121 = {
  key: 0,
  class: "introduction-description mt-6 flex flex-col"
};
var InfoDescription_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "InfoDescription",
  props: {
    eventBus: {},
    headingSlugGenerator: { type: Function },
    description: {}
  },
  setup(__props) {
    const sections = computed(() => {
      if (!__props.description) return [];
      const { slug } = slugger();
      return splitContent(__props.description).map((markdown) => {
        const heading = getHeadings(markdown)[0];
        return {
          id: heading ? __props.headingSlugGenerator({
            ...heading,
            slug: slug(heading.value)
          }) : void 0,
          content: markdown
        };
      });
    });
    const transformHeading = (node) => {
      if (!isHeading(node)) return node;
      const { slug } = slugger();
      const value = textFromNode(node);
      node.data = { hProperties: { id: __props.headingSlugGenerator({
        depth: node.depth,
        value,
        slug: slug(value)
      }) } };
      return node;
    };
    return (_ctx, _cache) => {
      return __props.description ? (openBlock(), createElementBlock("div", _hoisted_121, [(openBlock(true), createElementBlock(Fragment, null, renderList(sections.value, (section) => {
        return openBlock(), createBlock(InfoMarkdownSection_default, {
          id: section.id,
          key: section.id,
          content: section.content,
          eventBus: __props.eventBus,
          transformHeading
        }, null, 8, [
          "id",
          "content",
          "eventBus"
        ]);
      }), 128))])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoDescription.vue.js
var InfoDescription_default = _plugin_vue_export_helper_default2(InfoDescription_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0370764f"]]);

// node_modules/@scalar/api-reference/dist/components/LinkList/LinkList.vue.script.js
var LinkList_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "LinkList",
  setup(__props) {
    const containerRef = ref();
    const needsScroll = ref(false);
    const checkScrollability = () => {
      if (!containerRef.value) return;
      const { scrollWidth, clientWidth } = containerRef.value;
      needsScroll.value = scrollWidth > clientWidth;
    };
    let mutationObserver = null;
    onMounted(() => {
      checkScrollability();
      window.addEventListener("resize", checkScrollability);
      if (containerRef.value) {
        mutationObserver = new MutationObserver(() => {
          checkScrollability();
        });
        mutationObserver.observe(containerRef.value, {
          childList: true,
          subtree: true
        });
      }
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkScrollability);
      if (mutationObserver) {
        mutationObserver.disconnect();
        mutationObserver = null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["custom-scroll narrow:mb-3 mb-1.5 flex h-auto min-h-8 max-w-full items-center gap-2 overflow-x-auto text-base whitespace-nowrap", { "icons-only": needsScroll.value }])
      }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/LinkList/LinkList.vue.js
var LinkList_default = _plugin_vue_export_helper_default2(LinkList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-dc833d99"]]);

// node_modules/@scalar/api-reference/dist/features/external-docs/ExternalDocs.vue.script.js
var _hoisted_122 = {
  key: 0,
  class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_211 = {
  key: 0,
  class: "ml-1 empty:hidden"
};
var _hoisted_39 = {
  key: 1,
  class: "ml-1 empty:hidden"
};
var ExternalDocs_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExternalDocs",
  props: { value: {} },
  setup(__props) {
    const url = computed(() => {
      var _a;
      return sanitizeUrl((_a = __props.value) == null ? void 0 : _a.url);
    });
    return (_ctx, _cache) => {
      return __props.value ? (openBlock(), createElementBlock("div", _hoisted_122, [(openBlock(), createBlock(resolveDynamicComponent(url.value ? "a" : "span"), {
        class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
        href: url.value,
        rel: url.value ? "noopener noreferrer" : void 0,
        target: url.value ? "_blank" : void 0
      }, {
        default: withCtx(() => [createVNode(unref(ScalarIconBook_default), {
          class: "size-3 text-current",
          weight: "bold"
        }), __props.value.description ? (openBlock(), createElementBlock("span", _hoisted_211, toDisplayString(__props.value.description), 1)) : (openBlock(), createElementBlock("span", _hoisted_39, toDisplayString(__props.value.url), 1))]),
        _: 1
      }, 8, [
        "href",
        "rel",
        "target"
      ]))])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/external-docs/ExternalDocs.vue.js
var ExternalDocs_default = ExternalDocs_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/info-object/Contact.vue.script.js
var _hoisted_123 = {
  key: 0,
  class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_212 = ["href"];
var _hoisted_310 = { class: "ml-1 empty:hidden" };
var _hoisted_47 = {
  key: 1,
  class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_55 = ["href"];
var _hoisted_62 = { class: "ml-1 empty:hidden" };
var _hoisted_72 = {
  key: 2,
  class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var Contact_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Contact",
  props: { value: {} },
  setup(__props) {
    const url = computed(() => {
      var _a;
      return sanitizeUrl((_a = __props.value) == null ? void 0 : _a.url);
    });
    const variants = cva({
      base: "text-c-1 mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 group-last:mr-0 narrow:border",
      variants: { link: { true: "no-underline hover:bg-b-2" } }
    });
    return (_ctx, _cache) => {
      return __props.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.value.email ? (openBlock(), createElementBlock("div", _hoisted_123, [createBaseVNode("a", {
        class: normalizeClass(unref(variants)({ link: true })),
        href: `mailto:${__props.value.email}`
      }, [createVNode(unref(ScalarIconEnvelopeSimple_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_310, toDisplayString(__props.value.name), 1)], 10, _hoisted_212)])) : createCommentVNode("", true), url.value ? (openBlock(), createElementBlock("div", _hoisted_47, [createBaseVNode("a", {
        class: normalizeClass(unref(variants)({ link: true })),
        href: url.value,
        rel: "noopener noreferrer",
        target: "_blank"
      }, [createVNode(unref(ScalarIconLink_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_62, toDisplayString(__props.value.email ? "" : __props.value.name), 1)], 10, _hoisted_55)])) : !__props.value.email && __props.value.name ? (openBlock(), createElementBlock("div", _hoisted_72, [createBaseVNode("span", { class: normalizeClass(unref(variants)({ link: false })) }, toDisplayString(__props.value.name), 3)])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/info-object/Contact.vue.js
var Contact_default = Contact_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/info-object/InfoLink.vue.script.js
var _hoisted_124 = { class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0" };
var _hoisted_213 = ["href"];
var _hoisted_311 = { class: "ml-1 empty:hidden" };
var _hoisted_48 = { class: "ml-1 empty:hidden" };
var InfoLink_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "InfoLink",
  props: {
    name: {},
    url: {}
  },
  setup(__props) {
    const safeUrl = computed(() => sanitizeUrl(__props.url));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_124, [safeUrl.value ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
        href: safeUrl.value,
        rel: "noopener noreferrer",
        target: "_blank"
      }, [createVNode(unref(ScalarIconLink_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_311, toDisplayString(__props.name), 1)], 8, _hoisted_213)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(ScalarIconLink_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_48, toDisplayString(__props.name), 1)], 64))]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/info-object/InfoLink.vue.js
var InfoLink_default = InfoLink_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/info-object/License.vue.script.js
var _hoisted_125 = { class: "group narrow:border-r-0 narrow:first:ml-0 flex h-fit items-center border-r first:ml-auto last:border-r-0" };
var _hoisted_214 = ["href"];
var _hoisted_312 = { class: "ml-1 empty:hidden" };
var _hoisted_49 = { class: "ml-1 empty:hidden" };
var License_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "License",
  props: { value: {} },
  setup(__props) {
    const url = computed(() => {
      var _a;
      return sanitizeUrl((_a = __props.value) == null ? void 0 : _a.url);
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_125, [url.value ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
        href: url.value,
        rel: "noopener noreferrer",
        target: "_blank"
      }, [createVNode(unref(ScalarIconGavel_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_312, toDisplayString(((_a = __props.value) == null ? void 0 : _a.name) || __props.value && "identifier" in __props.value && __props.value.identifier || url.value), 1)], 8, _hoisted_214)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(ScalarIconGavel_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_49, toDisplayString((_b = __props.value) == null ? void 0 : _b.name), 1)], 64))]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/info-object/License.vue.js
var License_default = License_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/info-object/TermsOfService.vue.script.js
var _hoisted_126 = {
  key: 0,
  class: "group narrow:border-r-0 narrow:first:ml-0 flex items-center border-r first:ml-auto last:border-r-0"
};
var _hoisted_215 = ["href"];
var _hoisted_313 = { class: "ml-1 empty:hidden" };
var TermsOfService_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "TermsOfService",
  props: { value: {} },
  setup(__props) {
    const { translate } = useLocalization();
    const url = computed(() => sanitizeUrl(__props.value));
    return (_ctx, _cache) => {
      return url.value ? (openBlock(), createElementBlock("div", _hoisted_126, [createBaseVNode("a", {
        class: "text-c-1 hover:bg-b-2 narrow:border mr-2 flex min-h-7 min-w-7 items-center rounded-lg px-2 py-1 no-underline group-last:mr-0",
        href: url.value,
        rel: "noopener noreferrer",
        target: "_blank"
      }, [createVNode(unref(ScalarIconScroll_default), {
        class: "size-3 text-current",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_313, toDisplayString(unref(translate)("info.termsOfService")), 1)], 8, _hoisted_215)])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/info-object/TermsOfService.vue.js
var TermsOfService_default = TermsOfService_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoLinks.vue.script.js
var InfoLinks_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "InfoLinks",
  props: {
    info: {},
    externalDocs: {}
  },
  setup(__props) {
    const links = computed(() => {
      const value = __props.info["x-scalar-links"];
      if (!Array.isArray(value)) return [];
      return value.filter((link) => typeof (link == null ? void 0 : link.name) === "string" && typeof (link == null ? void 0 : link.url) === "string");
    });
    const hasLinks = computed(() => Boolean(__props.externalDocs || __props.info.contact || __props.info.license || __props.info.termsOfService || links.value.length));
    return (_ctx, _cache) => {
      return hasLinks.value ? (openBlock(), createBlock(unref(LinkList_default), { key: 0 }, {
        default: withCtx(() => [
          __props.externalDocs ? (openBlock(), createBlock(unref(ExternalDocs_default), {
            key: 0,
            value: __props.externalDocs
          }, null, 8, ["value"])) : createCommentVNode("", true),
          __props.info.contact ? (openBlock(), createBlock(unref(Contact_default), {
            key: 1,
            value: __props.info.contact
          }, null, 8, ["value"])) : createCommentVNode("", true),
          __props.info.license ? (openBlock(), createBlock(unref(License_default), {
            key: 2,
            value: unref(getResolvedRef)(__props.info.license)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          __props.info.termsOfService ? (openBlock(), createBlock(unref(TermsOfService_default), {
            key: 3,
            value: __props.info.termsOfService
          }, null, 8, ["value"])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(links.value, (link) => {
            return openBlock(), createBlock(unref(InfoLink_default), {
              key: link.url,
              name: link.name,
              url: link.url
            }, null, 8, ["name", "url"]);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoLinks.vue.js
var InfoLinks_default = InfoLinks_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoVersion.vue.script.js
var InfoVersion_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "InfoVersion",
  props: { version: {} },
  setup(__props) {
    const prefixedVersion = computed(() => {
      if (__props.version == null) return __props.version;
      const versionString = String(__props.version);
      return /^\d/.test(versionString) ? `v${versionString}` : versionString;
    });
    return (_ctx, _cache) => {
      return prefixedVersion.value ? (openBlock(), createBlock(unref(Badge_default), { key: 0 }, {
        default: withCtx(() => [createTextVNode(toDisplayString(prefixedVersion.value), 1)]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoVersion.vue.js
var InfoVersion_default = InfoVersion_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLoading.vue.script.js
var _hoisted_127 = {
  "aria-hidden": "true",
  class: "introduction-loading flex flex-col gap-5"
};
var _hoisted_216 = {
  key: 0,
  class: "narrow:flex-col narrow:gap-3 flex gap-6"
};
var IntroductionLoading_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "IntroductionLoading",
  props: { hasAside: {
    type: Boolean,
    default: true
  } },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_127, [
        _cache[3] || (_cache[3] = createStaticVNode('<div class="flex gap-1.5" data-v-41a61989><div class="introduction-skeleton h-6 w-14 rounded-full" data-v-41a61989></div><div class="introduction-skeleton h-6 w-24 rounded-full" data-v-41a61989></div></div><div class="narrow:grid-cols-1 narrow:gap-3 grid grid-cols-2 gap-12" data-v-41a61989><div class="introduction-skeleton h-9 w-3/5 rounded-lg" data-v-41a61989></div><div class="narrow:justify-start flex flex-wrap items-center justify-end gap-2" data-v-41a61989><div class="introduction-skeleton h-5 w-28 rounded" data-v-41a61989></div><div class="introduction-skeleton h-5 w-28 rounded" data-v-41a61989></div><div class="introduction-skeleton h-5 w-12 rounded" data-v-41a61989></div></div></div>', 2)),
        createVNode(unref(SectionColumns_default), null, {
          default: withCtx(() => [createVNode(unref(SectionColumn_default), null, {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "flex flex-col gap-3" }, [
              createBaseVNode("div", { class: "introduction-skeleton mb-2 h-5 w-56 rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton h-4 w-full rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton h-4 w-11/12 rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton h-4 w-4/5 rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton mt-4 h-6 w-40 rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton h-4 w-3/4 rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton h-4 w-2/3 rounded" }),
              createBaseVNode("div", { class: "introduction-skeleton h-4 w-1/2 rounded" })
            ], -1)])]),
            _: 1
          }), __props.hasAside ? (openBlock(), createBlock(unref(SectionColumn_default), { key: 0 }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("div", { class: "sticky-cards gap-3" }, [
              createBaseVNode("div", { class: "introduction-skeleton h-20 w-full rounded-lg" }),
              createBaseVNode("div", { class: "introduction-skeleton h-28 w-full rounded-lg" }),
              createBaseVNode("div", { class: "introduction-skeleton h-28 w-full rounded-lg" })
            ], -1)])]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }),
        !__props.hasAside ? (openBlock(), createElementBlock("div", _hoisted_216, [..._cache[2] || (_cache[2] = [
          createBaseVNode("div", { class: "introduction-skeleton h-28 w-full flex-1 rounded-lg" }, null, -1),
          createBaseVNode("div", { class: "introduction-skeleton h-28 w-full flex-1 rounded-lg" }, null, -1),
          createBaseVNode("div", { class: "introduction-skeleton h-28 w-full flex-1 rounded-lg" }, null, -1)
        ])])) : createCommentVNode("", true)
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLoading.vue.js
var IntroductionLoading_default = _plugin_vue_export_helper_default2(IntroductionLoading_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-41a61989"]]);

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/SpecificationVersion.vue.script.js
var SpecificationVersion_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SpecificationVersion",
  props: {
    documentType: { default: "openapi" },
    version: {}
  },
  setup(__props) {
    const label = computed(() => getDocumentTypeLabel(__props.documentType));
    return (_ctx, _cache) => {
      return __props.version ? (openBlock(), createBlock(unref(Badge_default), { key: 0 }, {
        default: withCtx(() => [createTextVNode(toDisplayString(label.value) + " " + toDisplayString(__props.version), 1)]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/SpecificationVersion.vue.js
var SpecificationVersion_default = SpecificationVersion_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLayout.vue.script.js
var _hoisted_128 = { class: "flex gap-1.5" };
var _hoisted_217 = { class: "sticky-cards" };
var IntroductionLayout_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "IntroductionLayout",
  props: {
    id: {},
    documentType: {},
    specificationVersion: {},
    info: {},
    externalDocs: {},
    documentExtensions: {},
    infoExtensions: {},
    headingSlugGenerator: { type: Function },
    eventBus: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const { level: headingLevel } = useDocumentOutline("document");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SectionContainer_default), null, {
        default: withCtx(() => [createVNode(unref(Section_default), {
          id: __props.id,
          "aria-label": unref(translate)("navigation.introduction"),
          class: "introduction-section z-1 gap-12",
          onIntersecting: _cache[0] || (_cache[0] = () => {
            var _a;
            return __props.id && ((_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.id }));
          })
        }, {
          default: withCtx(() => [createVNode(unref(SectionContent_default), null, {
            default: withCtx(() => {
              var _a;
              return [!__props.info ? (openBlock(), createBlock(IntroductionLoading_default, {
                key: 0,
                hasAside: Boolean(_ctx.$slots.aside)
              }, null, 8, ["hasAside"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("div", _hoisted_128, [createVNode(InfoVersion_default, { version: (_a = __props.info) == null ? void 0 : _a.version }, null, 8, ["version"]), createVNode(SpecificationVersion_default, {
                  documentType: __props.documentType,
                  version: __props.specificationVersion
                }, null, 8, ["documentType", "version"])]),
                createVNode(unref(SectionHeader_default), { tight: "" }, {
                  links: withCtx(() => [createVNode(InfoLinks_default, {
                    externalDocs: __props.externalDocs,
                    info: __props.info
                  }, null, 8, ["externalDocs", "info"])]),
                  default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
                    default: withCtx(() => {
                      var _a2;
                      return [createTextVNode(toDisplayString((_a2 = __props.info) == null ? void 0 : _a2.title), 1)];
                    }),
                    _: 1
                  }, 8, ["level"])]),
                  _: 1
                }),
                createVNode(unref(SectionColumns_default), null, {
                  default: withCtx(() => [createVNode(unref(SectionColumn_default), null, {
                    default: withCtx(() => {
                      var _a2;
                      return [renderSlot(_ctx.$slots, "download-link", {}, void 0, true), createVNode(InfoDescription_default, {
                        description: (_a2 = __props.info) == null ? void 0 : _a2.description,
                        eventBus: __props.eventBus,
                        headingSlugGenerator: __props.headingSlugGenerator
                      }, null, 8, [
                        "description",
                        "eventBus",
                        "headingSlugGenerator"
                      ])];
                    }),
                    _: 3
                  }), _ctx.$slots.aside ? (openBlock(), createBlock(unref(SectionColumn_default), { key: 0 }, {
                    default: withCtx(() => [createBaseVNode("div", _hoisted_217, [renderSlot(_ctx.$slots, "aside", {}, void 0, true)])]),
                    _: 3
                  })) : createCommentVNode("", true)]),
                  _: 3
                }),
                createVNode(unref(SpecificationExtension_default), { value: __props.documentExtensions }, null, 8, ["value"]),
                createVNode(unref(SpecificationExtension_default), { value: __props.infoExtensions }, null, 8, ["value"])
              ], 64))];
            }),
            _: 3
          }), renderSlot(_ctx.$slots, "after", {}, void 0, true)]),
          _: 3
        }, 8, ["id", "aria-label"])]),
        _: 3
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionLayout.vue.js
var IntroductionLayout_default = _plugin_vue_export_helper_default2(IntroductionLayout_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-8b2934cb"]]);

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoBlock.vue.script.js
var InfoBlock_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "InfoBlock",
  props: {
    id: {},
    specificationVersion: {},
    info: {},
    externalDocs: {},
    documentExtensions: {},
    infoExtensions: {},
    eventBus: {},
    headingSlugGenerator: { type: Function },
    layout: {},
    documentDownloadType: { default: "both" },
    documentUrl: {},
    documentType: {}
  },
  setup(__props) {
    const introCardsSlot = computed(() => __props.layout === "classic" ? "after" : "aside");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(IntroductionLayout_default, {
        id: __props.id,
        documentExtensions: __props.documentExtensions,
        documentType: __props.documentType,
        eventBus: __props.eventBus,
        externalDocs: __props.externalDocs,
        headingSlugGenerator: __props.headingSlugGenerator,
        info: __props.info,
        infoExtensions: __props.infoExtensions,
        specificationVersion: __props.specificationVersion
      }, {
        [introCardsSlot.value]: withCtx(() => [createVNode(IntroductionCard_default, { row: __props.layout === "classic" }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "selectors")]),
          _: 3
        }, 8, ["row"])]),
        "download-link": withCtx(() => [createVNode(DownloadLink_default, {
          documentDownloadType: __props.documentDownloadType,
          documentType: __props.documentType,
          documentUrl: __props.documentUrl,
          eventBus: __props.eventBus
        }, null, 8, [
          "documentDownloadType",
          "documentType",
          "documentUrl",
          "eventBus"
        ])]),
        _: 2
      }, 1032, [
        "id",
        "documentExtensions",
        "documentType",
        "eventBus",
        "externalDocs",
        "headingSlugGenerator",
        "info",
        "infoExtensions",
        "specificationVersion"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/InfoBlock.vue.js
var InfoBlock_default = InfoBlock_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/blocks/scalar-info-block/components/IntroductionCardItem.vue.js
var _sfc_main5 = {};
var _hoisted_129 = { class: "introduction-card-item" };
function _sfc_render5(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_129, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]);
}
var IntroductionCardItem_default = _plugin_vue_export_helper_default2(_sfc_main5, [["render", _sfc_render5], ["__scopeId", "data-v-dfab866f"]]);

// node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/helpers/renderable-sdks.js
var toFencedCodeBlock = (source) => {
  const longestRun = Math.max(0, ...[...source.matchAll(/`+/g)].map((match) => match[0].length));
  const fence = "`".repeat(Math.max(3, longestRun + 1));
  return `${fence}
${source}
${fence}`;
};
var getRenderableSdks = (xScalarSdkInstallation) => Array.isArray(xScalarSdkInstallation) ? xScalarSdkInstallation.flatMap((sdk) => {
  if (typeof (sdk == null ? void 0 : sdk.lang) !== "string") return [];
  const description = typeof sdk.description === "string" && sdk.description.trim() ? sdk.description : "";
  const source = typeof sdk.source === "string" ? sdk.source.trim() : "";
  if (!description && !source) return [];
  const resolved = [description, source && toFencedCodeBlock(source)].filter(Boolean).join("\n\n");
  return [{
    lang: sdk.lang,
    description: resolved
  }];
}) : [];

// node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/helpers/language-icon.js
var LANGUAGE_ICONS = {
  c: "programming-language-c",
  clojure: "programming-language-clojure",
  csharp: "programming-language-csharp",
  "c#": "programming-language-csharp",
  cs: "programming-language-csharp",
  css: "programming-language-css3",
  css3: "programming-language-css3",
  dart: "programming-language-dart",
  fsharp: "programming-language-fsharp",
  "f#": "programming-language-fsharp",
  go: "programming-language-go",
  golang: "programming-language-go",
  html: "programming-language-html5",
  html5: "programming-language-html5",
  http: "programming-language-http",
  java: "programming-language-java",
  javascript: "programming-language-javascript",
  js: "programming-language-javascript",
  json: "programming-language-json",
  julia: "programming-language-julia",
  jl: "programming-language-julia",
  kotlin: "programming-language-kotlin",
  node: "programming-language-node",
  "node.js": "programming-language-node",
  nodejs: "programming-language-node",
  objc: "programming-language-objc",
  "objective-c": "programming-language-objc",
  ocaml: "programming-language-ocaml",
  php: "programming-language-php",
  powershell: "programming-language-powershell",
  python: "programming-language-python",
  py: "programming-language-python",
  r: "programming-language-r",
  ruby: "programming-language-ruby",
  rb: "programming-language-ruby",
  rust: "programming-language-rust",
  rs: "programming-language-rust",
  scala: "programming-language-scala",
  shell: "programming-language-shell",
  bash: "programming-language-shell",
  sh: "programming-language-shell",
  curl: "programming-language-shell",
  swift: "programming-language-swift",
  typescript: "programming-language-typescript",
  ts: "programming-language-typescript"
};
var getLanguageIcon = (lang) => LANGUAGE_ICONS[lang.trim().toLowerCase()];

// node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/helpers/visible-tab-count.js
var getVisibleTabCount = (tabWidths, availableWidth, moreWidth) => {
  const total = tabWidths.length;
  if (availableWidth <= 0) return total;
  const countThatFits = (reserved) => {
    let used = 0;
    let count = 0;
    for (const width of tabWidths) {
      if (used + width > availableWidth - reserved) break;
      used += width;
      count++;
    }
    return count;
  };
  if (countThatFits(0) >= total) return total;
  return Math.max(1, countThatFits(moreWidth));
};

// node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/components/SdkInstallationInstructions.vue.script.js
var _hoisted_130 = { key: 0 };
var _hoisted_218 = ["id"];
var _hoisted_314 = { class: "client-libraries-content" };
var _hoisted_410 = ["aria-labelledby"];
var _hoisted_56 = [
  "id",
  "aria-selected",
  "tabindex",
  "onClick",
  "onKeydown"
];
var _hoisted_63 = { class: "client-libraries-text" };
var _hoisted_73 = { class: "client-libraries-text" };
var _hoisted_8 = {
  "aria-hidden": "true",
  class: "client-libraries-measure-clip"
};
var _hoisted_9 = { class: "client-libraries-text" };
var _hoisted_10 = { class: "client-libraries" };
var _hoisted_11 = { class: "client-libraries-text" };
var _hoisted_1210 = ["aria-labelledby"];
var SdkInstallationInstructions_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SdkInstallationInstructions",
  props: {
    xScalarSdkInstallation: {},
    selectedClient: {},
    eventBus: {}
  },
  setup(__props) {
    const headingId = useId();
    const baseId = useId();
    const panelId = `${baseId}-panel`;
    const { translate } = useLocalization();
    const sdks = computed(() => getRenderableSdks(__props.xScalarSdkInstallation).map((sdk) => ({
      ...sdk,
      icon: getLanguageIcon(sdk.lang)
    })));
    const selectedIndex = ref(0);
    const selected = computed(() => sdks.value[selectedIndex.value]);
    const sdkClientIds = computed(() => r2(sdks.value.map((sdk) => ({
      lang: sdk.lang,
      source: ""
    }))));
    const select = (index) => {
      var _a;
      selectedIndex.value = index;
      const id = sdkClientIds.value[index];
      if (id) (_a = __props.eventBus) == null ? void 0 : _a.emit("workspace:update:selected-client", id);
    };
    watch([() => __props.selectedClient, sdkClientIds], ([client, ids]) => {
      const matched = client ? ids.findIndex((id) => id === client) : -1;
      if (matched >= 0) selectedIndex.value = matched;
      else if (selectedIndex.value > ids.length - 1) selectedIndex.value = 0;
    }, { immediate: true });
    watch(() => sdks.value.map((sdk) => sdk.lang).join("\n"), () => void nextTick(measure));
    const rowRef = ref();
    const tabsRef = ref();
    const measureRef = ref();
    const availableWidth = ref(0);
    const tabWidths = ref([]);
    const moreWidth = ref(0);
    const measure = () => {
      const measureEl = measureRef.value;
      const rowEl = rowRef.value;
      if (!measureEl || !rowEl) return;
      const widths = Array.from(measureEl.children).map((child) => child.offsetWidth);
      tabWidths.value = widths.slice(0, sdks.value.length);
      moreWidth.value = widths[sdks.value.length] ?? 0;
      availableWidth.value = rowEl.clientWidth;
    };
    const visibleCount = computed(() => {
      if (!tabWidths.value.length || availableWidth.value <= 0) return sdks.value.length;
      return getVisibleTabCount(tabWidths.value, availableWidth.value, moreWidth.value);
    });
    const visibleSdks = computed(() => sdks.value.slice(0, visibleCount.value));
    const isMoreActive = computed(() => selectedIndex.value >= visibleCount.value);
    const moreOptions = computed(() => sdks.value.slice(visibleCount.value).map((sdk, index) => ({
      id: String(visibleCount.value + index),
      label: sdk.lang
    })));
    const selectedMoreOption = computed(() => moreOptions.value.find((option) => option.id === String(selectedIndex.value)));
    const selectMore = (option) => {
      if (option) select(Number(option.id));
    };
    const activeTabId = computed(() => isMoreActive.value ? headingId : `${baseId}-tab-${selectedIndex.value}`);
    const tabStopIndex = computed(() => isMoreActive.value ? -1 : selectedIndex.value);
    const focusTab = (index) => {
      nextTick(() => {
        var _a, _b;
        (_b = (_a = tabsRef.value) == null ? void 0 : _a.querySelectorAll('[role="tab"]')[index]) == null ? void 0 : _b.focus();
      });
    };
    const onTabKeydown = (event, index) => {
      const lastVisible = visibleCount.value - 1;
      let next = index;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          next = index >= lastVisible ? 0 : index + 1;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          next = index <= 0 ? lastVisible : index - 1;
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = lastVisible;
          break;
        default:
          return;
      }
      event.preventDefault();
      select(next);
      focusTab(next);
    };
    let observer;
    let frame = 0;
    const scheduleMeasure = () => {
      if (typeof requestAnimationFrame === "undefined") {
        measure();
        return;
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    onMounted(() => {
      if (typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(scheduleMeasure);
        if (rowRef.value) observer.observe(rowRef.value);
        if (measureRef.value) observer.observe(measureRef.value);
      }
      measure();
    });
    onBeforeUnmount(() => {
      observer == null ? void 0 : observer.disconnect();
      if (typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(frame);
    });
    return (_ctx, _cache) => {
      var _a;
      return sdks.value.length ? (openBlock(), createElementBlock("div", _hoisted_130, [
        createBaseVNode("div", {
          id: unref(headingId),
          class: "client-libraries-heading"
        }, toDisplayString(unref(translate)("clientLibraries.heading")), 9, _hoisted_218),
        createBaseVNode("div", _hoisted_314, [createBaseVNode("div", {
          ref_key: "rowRef",
          ref: rowRef,
          class: "client-libraries-row"
        }, [createBaseVNode("div", {
          ref_key: "tabsRef",
          ref: tabsRef,
          "aria-labelledby": unref(headingId),
          class: "client-libraries-tabs",
          role: "tablist"
        }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleSdks.value, (sdk, index) => {
          return openBlock(), createElementBlock("button", {
            id: `${unref(baseId)}-tab-${index}`,
            key: index,
            "aria-controls": panelId,
            "aria-selected": index === selectedIndex.value,
            class: normalizeClass(["client-libraries", { "client-libraries__active": index === selectedIndex.value }]),
            role: "tab",
            tabindex: index === tabStopIndex.value ? 0 : -1,
            type: "button",
            onClick: ($event) => select(index),
            onKeydown: ($event) => onTabKeydown($event, index)
          }, [sdk.icon ? (openBlock(), createBlock(unref(ScalarIcon_default), {
            key: 0,
            class: "client-libraries-icon",
            icon: sdk.icon
          }, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", _hoisted_63, toDisplayString(sdk.lang), 1)], 42, _hoisted_56);
        }), 128))], 8, _hoisted_410), visibleCount.value < sdks.value.length ? (openBlock(), createBlock(unref(ScalarCombobox_default), {
          key: 0,
          modelValue: selectedMoreOption.value,
          options: moreOptions.value,
          placement: "bottom-end",
          teleport: "",
          "onUpdate:modelValue": selectMore
        }, {
          default: withCtx(() => {
            var _a2;
            return [createBaseVNode("button", {
              class: normalizeClass(["client-libraries client-libraries-more", { "client-libraries__active": isMoreActive.value }]),
              type: "button"
            }, [createVNode(unref(ScalarIcon_default), {
              class: "client-libraries-icon",
              icon: isMoreActive.value && ((_a2 = selected.value) == null ? void 0 : _a2.icon) ? selected.value.icon : "Ellipses"
            }, null, 8, ["icon"]), createBaseVNode("span", _hoisted_73, toDisplayString(unref(translate)("clientLibraries.more")), 1)], 2)];
          }),
          _: 1
        }, 8, ["modelValue", "options"])) : createCommentVNode("", true)], 512), createBaseVNode("div", _hoisted_8, [createBaseVNode("div", {
          ref_key: "measureRef",
          ref: measureRef,
          class: "client-libraries-row client-libraries-row--measure"
        }, [(openBlock(true), createElementBlock(Fragment, null, renderList(sdks.value, (sdk, index) => {
          return openBlock(), createElementBlock("span", {
            key: index,
            class: "client-libraries"
          }, [sdk.icon ? (openBlock(), createBlock(unref(ScalarIcon_default), {
            key: 0,
            class: "client-libraries-icon",
            icon: sdk.icon
          }, null, 8, ["icon"])) : createCommentVNode("", true), createBaseVNode("span", _hoisted_9, toDisplayString(sdk.lang), 1)]);
        }), 128)), createBaseVNode("span", _hoisted_10, [createVNode(unref(ScalarIcon_default), {
          class: "client-libraries-icon",
          icon: "Ellipses"
        }), createBaseVNode("span", _hoisted_11, toDisplayString(unref(translate)("clientLibraries.more")), 1)])], 512)])]),
        ((_a = selected.value) == null ? void 0 : _a.description) ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: panelId,
          "aria-labelledby": activeTabId.value,
          class: "selected-client",
          role: "tabpanel",
          tabindex: "0"
        }, [createVNode(unref(ScalarMarkdown_default), { value: selected.value.description }, null, 8, ["value"])], 8, _hoisted_1210)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-sdk-installation-instructions/components/SdkInstallationInstructions.vue.js
var SdkInstallationInstructions_default = _plugin_vue_export_helper_default2(SdkInstallationInstructions_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-76e5ff4d"]]);

// node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/Selector.vue.script.js
var _hoisted_131 = { class: "sr-only" };
var _hoisted_219 = { class: "overflow-x-auto" };
var _hoisted_315 = {
  key: 1,
  class: "text-c-1 flex h-auto w-full items-center gap-0.75 !rounded-b-xl px-3 py-1.5 text-base leading-[20px] whitespace-nowrap"
};
var _hoisted_411 = { class: "sr-only" };
var _hoisted_57 = { class: "overflow-x-auto" };
var Selector_vue_vue_type_script_setup_true_lang_default2 = defineComponent({
  __name: "Selector",
  props: {
    selectedServer: {},
    servers: {},
    target: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const { translate } = useLocalization();
    const serverOptions = computed(() => __props.servers.map((server) => ({
      id: server.url,
      label: server.url
    })));
    const serverUrlWithoutTrailingSlash = computed(() => {
      var _a, _b;
      return ((_b = (_a = __props.selectedServer) == null ? void 0 : _a.url) == null ? void 0 : _b.replace(/\/$/, "")) || "";
    });
    const selectedServerOption = computed(() => serverOptions.value.find((opt) => {
      var _a;
      return opt.id === ((_a = __props.selectedServer) == null ? void 0 : _a.url);
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
          class: "bg-b-1 text-c-1 h-auto w-full justify-start gap-1.5 overflow-x-auto rounded-t-none !rounded-b-xl px-3 py-1.5 text-base/5.25 font-normal whitespace-nowrap -outline-offset-1",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_131, toDisplayString(unref(translate)("server.label")) + ":", 1),
            createBaseVNode("span", _hoisted_219, toDisplayString(serverUrlWithoutTrailingSlash.value || unref(translate)("server.select")), 1),
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
      ])) : (openBlock(), createElementBlock("div", _hoisted_315, [createBaseVNode("span", _hoisted_411, toDisplayString(unref(translate)("server.label")) + ":", 1), createBaseVNode("span", _hoisted_57, toDisplayString(serverUrlWithoutTrailingSlash.value), 1)]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/Selector.vue.js
var Selector_default2 = Selector_vue_vue_type_script_setup_true_lang_default2;

// node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/ServerSelector.vue.script.js
var _hoisted_132 = { class: "bg-b-2 flex h-8 items-center rounded-t-xl border-x border-t px-3 py-2.5 font-medium" };
var _hoisted_220 = ["id"];
var ServerSelector_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ServerSelector",
  props: {
    eventBus: {},
    selectedServer: {},
    servers: {}
  },
  setup(__props) {
    const id = useId();
    const { translate } = useLocalization();
    const updateServer = (newServer) => {
      var _a;
      __props.eventBus.emit("server:update:selected", {
        url: ((_a = __props.selectedServer) == null ? void 0 : _a.url) === newServer ? "" : newServer,
        meta: { type: "document" }
      });
    };
    const updateServerVariable = (key, value) => {
      const index = __props.servers.findIndex((s2) => {
        var _a;
        return s2.url === ((_a = __props.selectedServer) == null ? void 0 : _a.url);
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
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("label", _hoisted_132, toDisplayString(unref(translate)("server.label")), 1),
        createBaseVNode("div", {
          id: unref(id),
          class: normalizeClass(["border", { "rounded-b-xl": !((_a = __props.selectedServer) == null ? void 0 : _a.description) && !((_b = __props.selectedServer) == null ? void 0 : _b.variables) }])
        }, [__props.servers.length ? (openBlock(), createBlock(Selector_default2, {
          key: 0,
          selectedServer: __props.selectedServer,
          servers: __props.servers,
          target: unref(id),
          "onUpdate:modelValue": updateServer
        }, null, 8, [
          "selectedServer",
          "servers",
          "target"
        ])) : createCommentVNode("", true)], 10, _hoisted_220),
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

// node_modules/@scalar/api-reference/dist/blocks/scalar-server-selector-block/components/ServerSelector.vue.js
var ServerSelector_default = ServerSelector_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue.script.js
var _hoisted_133 = { class: "section-accordion-button-content" };
var _hoisted_221 = {
  key: 0,
  class: "section-accordion-button-actions"
};
var _hoisted_316 = {
  key: 0,
  class: "section-accordion-description"
};
var _hoisted_412 = { class: "section-accordion-content-card" };
var SectionAccordion_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SectionAccordion",
  props: {
    transparent: { type: Boolean },
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const button = ref();
    const isHovered = useElementHover(button);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N), {
        as: "section",
        class: normalizeClass(["section-accordion", { "section-accordion-transparent": __props.transparent }])
      }, {
        default: withCtx(() => [createVNode(unref(Q), {
          ref_key: "button",
          ref: button,
          class: "section-accordion-button",
          onClick: _cache[0] || (_cache[0] = () => emit("update:modelValue", !__props.modelValue))
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_133, [renderSlot(_ctx.$slots, "title", {}, void 0, true)]),
            _ctx.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_221, [renderSlot(_ctx.$slots, "actions", { active: unref(isHovered) || __props.modelValue }, void 0, true)])) : createCommentVNode("", true),
            createVNode(unref(ScalarIconCaretRight_default), { class: normalizeClass(["section-accordion-chevron size-4.5 transition-transform", { "rotate-90": __props.modelValue }]) }, null, 8, ["class"])
          ]),
          _: 3
        }, 512), __props.modelValue ? (openBlock(), createBlock(unref(V), {
          key: 0,
          class: "section-accordion-content",
          static: ""
        }, {
          default: withCtx(() => [_ctx.$slots.description ? (openBlock(), createElementBlock("div", _hoisted_316, [renderSlot(_ctx.$slots, "description", {}, void 0, true)])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_412, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])]),
          _: 3
        })) : createCommentVNode("", true)]),
        _: 3
      }, 8, ["class"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionAccordion.vue.js
var SectionAccordion_default = _plugin_vue_export_helper_default2(SectionAccordion_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ff689b94"]]);

// node_modules/@scalar/api-reference/dist/components/ScreenReader.vue.script.js
var _hoisted_134 = {
  key: 0,
  class: "screenreader-only"
};
var ScreenReader_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScreenReader",
  props: { if: {
    type: Boolean,
    default: true
  } },
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.$props.if ? (openBlock(), createElementBlock("span", _hoisted_134, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])) : renderSlot(_ctx.$slots, "default", {}, void 0, true, 1);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/ScreenReader.vue.js
var ScreenReader_default = _plugin_vue_export_helper_default2(ScreenReader_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-df2e1026"]]);

// node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue.script.js
var _hoisted_135 = ["id"];
var _hoisted_222 = { class: "relative" };
var Anchor_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Anchor",
  emits: ["copyAnchorUrl"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const labelId = useId();
    const { translate } = useLocalization();
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", normalizeProps(guardReactiveProps(unref(cx)("group/heading wrap-break-word relative"))), [createBaseVNode("span", {
        id: unref(labelId),
        class: "contents"
      }, [renderSlot(_ctx.$slots, "default")], 8, _hoisted_135), createBaseVNode("span", _hoisted_222, [_cache[1] || (_cache[1] = createBaseVNode("span", null, "​", -1)), createVNode(unref(ScalarButton_default), {
        "aria-describedby": unref(labelId),
        class: "absolute top-1/2 left-0 inline-block h-fit -translate-y-1/2 px-1.5 py-1 opacity-0 group-hover/heading:opacity-100 group-has-focus-visible/heading:opacity-100",
        variant: "ghost",
        onClick: _cache[0] || (_cache[0] = withModifiers(() => emit("copyAnchorUrl"), ["stop"]))
      }, {
        default: withCtx(() => [createVNode(unref(ScalarIconHash_default), {
          "aria-hidden": "true",
          class: "size-4.5"
        }), createVNode(ScreenReader_default, null, {
          default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("actions.copyLink")), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["aria-describedby"])])], 16);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Anchor/Anchor.vue.js
var Anchor_default = Anchor_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/is-type-object.js
var isTypeObject = (schema) => {
  if (schema === null || typeof schema !== "object" || Array.isArray(schema)) return false;
  if ("oneOf" in schema || "anyOf" in schema || "allOf" in schema || "not" in schema) return false;
  const hasType = "type" in schema;
  if (hasType && Array.isArray(schema.type)) return schema.type.includes("object");
  const hasTypeObject = hasType && schema.type === "object";
  if (hasTypeObject) return true;
  if (hasType && !hasTypeObject) return false;
  const hasProperties = "properties" in schema;
  const hasAdditionalProperties = "additionalProperties" in schema;
  const hasPatternProperties = "patternProperties" in schema;
  return hasProperties || hasAdditionalProperties || hasPatternProperties;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue.script.js
var _hoisted_136 = {
  key: 0,
  class: "schema-type"
};
var _hoisted_223 = ["title"];
var SchemaHeading_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaHeading",
  props: {
    value: {},
    name: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const failsafeType = computed(() => {
      if ("type" in __props.value) return __props.value.type;
      if (__props.value.enum) return "enum";
      if (isArraySchema(__props.value) && __props.value.items) return "array";
      if (isTypeObject(__props.value) && (__props.value.properties || __props.value.additionalProperties)) return "object";
      return "unknown";
    });
    return (_ctx, _cache) => {
      return typeof __props.value === "object" ? (openBlock(), createElementBlock("span", _hoisted_136, [createBaseVNode("span", {
        class: "schema-type-icon",
        title: "type" in __props.value && typeof __props.value.type === "string" ? __props.value.type : "type" in __props.value && Array.isArray(__props.value.type) ? __props.value.type.join(" | ") : unref(translate)("schema.unknownType")
      }, [
        unref(isTypeObject)(__props.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(" {} ")], 64)) : createCommentVNode("", true),
        unref(isArraySchema)(__props.value) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(" [] ")], 64)) : createCommentVNode("", true),
        __props.value.enum ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(" enum ")], 64)) : createCommentVNode("", true)
      ], 8, _hoisted_223), __props.name ? (openBlock(), createBlock(unref(ScalarWrappingText_default), {
        key: 0,
        preset: "property",
        text: __props.name
      }, null, 8, ["text"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(failsafeType.value), 1)], 64))])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaHeading.vue.js
var SchemaHeading_default = _plugin_vue_export_helper_default2(SchemaHeading_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-e2018ca6"]]);

// node_modules/@scalar/api-reference/dist/components/Anchor/WithBreadcrumb.vue.script.js
var _hoisted_137 = ["id"];
var _hoisted_224 = { class: "sr-only" };
var WithBreadcrumb_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "WithBreadcrumb",
  props: {
    breadcrumb: {},
    eventBus: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const copyLinkLabel = computed(() => {
      var _a;
      return translate("actions.copyLinkTo", { name: ((_a = __props.breadcrumb) == null ? void 0 : _a[__props.breadcrumb.length - 1]) ?? "" });
    });
    return (_ctx, _cache) => {
      return __props.breadcrumb && __props.breadcrumb.length > 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: __props.breadcrumb.join("."),
        class: "relative scroll-mt-24"
      }, [renderSlot(_ctx.$slots, "default"), createBaseVNode("button", {
        class: "text-c-3 hover:text-c-1 absolute -top-2 -left-4.5 flex h-[calc(100%+16px)] w-4.5 cursor-pointer items-center justify-center pr-1.5 opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
        type: "button",
        onClick: _cache[0] || (_cache[0] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.breadcrumb.join(".") });
        })
      }, [createVNode(unref(ScalarIconLink_default), {
        class: "size-3",
        weight: "bold"
      }), createBaseVNode("span", _hoisted_224, [renderSlot(_ctx.$slots, "sr-label", {}, () => [createTextVNode(toDisplayString(copyLinkLabel.value), 1)])])])], 8, _hoisted_137)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Anchor/WithBreadcrumb.vue.js
var WithBreadcrumb_default = WithBreadcrumb_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/dynamic-scope.js
var SCHEMA_DYNAMIC_SCOPE_SYMBOL = Symbol("schema-dynamic-scope");
var EMPTY_SCOPE = [];
var useDynamicScope = () => inject(SCHEMA_DYNAMIC_SCOPE_SYMBOL, EMPTY_SCOPE);
var resolveDynamicSchema = (schema, scope) => {
  if (isDynamicRef(schema)) return resolveDynamicRef(schema.$dynamicRef, scope) ?? schema;
  return schema;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/has-complex-array-items.js
var COMPOSITION_KEYWORDS = [
  "allOf",
  "oneOf",
  "anyOf"
];
var isObjectType = (schema) => {
  if ("type" in schema && schema.type) {
    if (Array.isArray(schema.type)) return schema.type.includes("object");
    return schema.type === "object";
  }
  return "properties" in schema;
};
var hasComplexFeatures = (schema) => "$ref" in schema || "discriminator" in schema || COMPOSITION_KEYWORDS.some((keyword) => keyword in schema);
var hasComplexNestedArrayItems = (items) => {
  if (!isArraySchema(items) || typeof items.items !== "object") return false;
  if ("$ref" in items.items) return true;
  const nestedItems = getResolvedRef(items.items);
  if (!nestedItems) return false;
  return isObjectType(nestedItems) || hasComplexFeatures(nestedItems) || isArraySchema(nestedItems);
};
var hasComplexArrayItems = (value) => {
  if (!value || !isArraySchema(value) || typeof value.items !== "object") return false;
  if ("$ref" in value.items) return true;
  const items = getResolvedRef(value.items);
  if (!items) return false;
  if (hasComplexFeatures(items)) return true;
  if (isObjectType(items)) return true;
  return hasComplexNestedArrayItems(items);
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-ref-name.js
var getRefName = (ref2) => {
  if (!ref2) return null;
  const match = ref2.match(REGEX.REF_NAME);
  if (match) return match[1];
  return null;
};
var COMPONENTS_SCHEMAS_REF = /^#\/components\/schemas\/([^/]+)$/;
var getSchemaRefName = (ref2) => {
  if (!ref2) return null;
  const match = ref2.match(COMPONENTS_SCHEMAS_REF);
  if (match == null ? void 0 : match[1]) return decodeURIComponent(match[1]);
  return null;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-composition.js
var compositions = [
  "oneOf",
  "anyOf",
  "allOf",
  "not"
];

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/should-render-array-item-composition.js
var shouldRenderArrayItemComposition = (schema, composition) => {
  if (!schema || !isArraySchema(schema)) return false;
  const items = schema.items;
  if (!items || typeof items !== "object" || !(composition in items)) return false;
  return !hasComplexArrayItems(schema);
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-compositions-to-render.js
var normalizeDiscriminatorMappingRef = (value) => value.startsWith("#/") || value.includes("/") ? value : `#/components/schemas/${value}`;
var inferDiscriminatorMappingComposition = (value, document2) => {
  var _a, _b;
  if (value.oneOf || value.anyOf || !((_a = document2 == null ? void 0 : document2.components) == null ? void 0 : _a.schemas)) return null;
  const refs = Object.values(((_b = value.discriminator) == null ? void 0 : _b.mapping) ?? {}).filter((mappingValue) => typeof mappingValue === "string").map((mappingValue) => {
    var _a2, _b2;
    const ref2 = normalizeDiscriminatorMappingRef(mappingValue);
    const refName = getRefName(ref2);
    const refValue = refName ? resolve.schema((_b2 = (_a2 = document2.components) == null ? void 0 : _a2.schemas) == null ? void 0 : _b2[refName]) : void 0;
    if (!refValue) return;
    return {
      $ref: ref2,
      "$ref-value": refValue
    };
  }).filter(isDefined);
  if (refs.length === 0) return null;
  return {
    ...resolve.schema(value),
    oneOf: refs
  };
};
var getCompositionsToRender = (value, document2) => {
  if (!value) return [];
  const inferredDiscriminatorComposition = inferDiscriminatorMappingComposition(value, document2);
  return compositions.map((composition) => {
    if (composition === "oneOf" && inferredDiscriminatorComposition) return {
      composition,
      value: inferredDiscriminatorComposition
    };
    if (shouldRenderArrayItemComposition(value, composition) && isArraySchema(value) && value.items) return {
      composition,
      value: resolve.schema(value.items)
    };
    if (value[composition]) {
      if (!(isArraySchema(value) && value.items && typeof value.items === "object" && composition in value.items)) return {
        composition,
        value: resolve.schema(value)
      };
    }
    return null;
  }).filter(isDefined);
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-cycle.js
var SCHEMA_ANCESTORS_SYMBOL = Symbol("schema-ancestors");
var getCycleKey = (raw) => {
  if (raw && typeof raw === "object") {
    if ("$ref" in raw && typeof raw.$ref === "string") return raw.$ref;
    return raw;
  }
};

// node_modules/@scalar/api-reference/dist/features/Operation/request-body-composition-index.js
var REQUEST_BODY_COMPOSITION_INDEX_SYMBOL = Symbol();

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-schema-type.js
var formatArrayType = (itemType) => {
  if (!itemType) return "array";
  return `array ${itemType.includes(" | ") ? `(${itemType})` : itemType}[]`;
};
var processArrayType = (value, isUnionType = false) => {
  if (!value.items) return "array";
  const baseType = formatArrayType(getSchemaType(resolve.schema(value.items)));
  if (isUnionType) return baseType;
  return value.nullable ? `${baseType} | null` : baseType;
};
var getSchemaType = (valueOrRef) => {
  if (!valueOrRef) return "";
  const value = resolve.schema(valueOrRef);
  if (value.const !== void 0) return "const";
  if ("type" in value && Array.isArray(value.type)) {
    if (value.type.includes("array") && value.items) {
      const arrayType = processArrayType(value, true);
      const otherTypes = value.type.filter((t3) => t3 !== "array");
      return otherTypes.length > 0 ? `${arrayType} | ${otherTypes.join(" | ")}` : arrayType;
    }
    return value.type.join(" | ");
  }
  if (isArraySchema(value)) return processArrayType(value, false);
  if ("type" in value && value.type && value.contentEncoding) return `${value.type} • ${value.contentEncoding}`;
  return "type" in value ? value.type : "";
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/merge-all-of-schemas.js
var LAST_WINS_KEYS = /* @__PURE__ */ new Set(["description", "title"]);
var mergeAllOfSchemas = (schemas, rootSchema, seenRefs = /* @__PURE__ */ new Set()) => {
  var _a;
  if (!((_a = schemas == null ? void 0 : schemas.allOf) == null ? void 0 : _a.length) || !Array.isArray(schemas.allOf)) return rootSchema || {};
  const result = {};
  const { allOf: _, ...baseSchema } = schemas;
  for (const _schema of schemas.allOf) {
    if (!_schema || typeof _schema !== "object") continue;
    const schema = resolve.schema(_schema);
    if (schema.allOf) {
      mergeSchemaIntoResult(result, mergeAllOfSchemas(schema, void 0, seenRefs), false, seenRefs);
      continue;
    }
    mergeSchemaIntoResult(result, schema, false, seenRefs);
  }
  if (Object.keys(baseSchema).length > 0) mergeSchemaIntoResult(result, baseSchema, true, seenRefs);
  if (rootSchema && typeof rootSchema === "object") if (rootSchema.allOf) mergeSchemaIntoResult(result, mergeAllOfSchemas(rootSchema, void 0, seenRefs), true, seenRefs);
  else mergeSchemaIntoResult(result, rootSchema, true, seenRefs);
  return result;
};
var mergeSchemaIntoResult = (result, schema, override = false, seenRefs = /* @__PURE__ */ new Set()) => {
  var _a;
  const schemaKeys = objectKeys(schema);
  if (schemaKeys.length === 0) return;
  for (const key of schemaKeys) {
    const value = getResolvedRef(schema[key]);
    if (value === void 0) continue;
    if (key === "required") {
      if (Array.isArray(value) && value.length > 0) if ((_a = result.required) == null ? void 0 : _a.length) result.required = [.../* @__PURE__ */ new Set([...result.required, ...value])];
      else result.required = value.slice();
    } else if (key === "properties") {
      if (value && typeof value === "object") {
        if (!result.properties) result.properties = {};
        mergePropertiesIntoResult(result.properties, value, seenRefs);
      }
    } else if (key === "items") {
      const items = resolve.schema(value);
      if (items) {
        if (isArraySchema(schema)) {
          if (!result.items) result.items = {};
          if (items.allOf) {
            const mergedItems = mergeAllOfSchemas(items, void 0, seenRefs);
            Object.assign(result.items, mergedItems);
          } else mergeItemsIntoResult(getResolvedRef(result.items), items, seenRefs);
        } else if (items.allOf) {
          const mergedItems = mergeAllOfSchemas(items, void 0, seenRefs);
          if ("properties" in mergedItems) {
            if (!("properties" in result)) result.properties = {};
            "properties" in result && mergePropertiesIntoResult(result.properties, mergedItems.properties, seenRefs);
          }
        } else if (!("items" in result)) result.items = items;
      }
    } else if (key === "enum") {
      if (Array.isArray(value) && value.length > 0) result.enum = [.../* @__PURE__ */ new Set([...result.enum || [], ...value])];
    } else if (key === "oneOf" || key === "anyOf") {
      if (Array.isArray(value) && value.length > 0 && (override || result[key] === void 0)) result[key] = value;
    } else if (key === "allOf") continue;
    else if (override || LAST_WINS_KEYS.has(key) || result[key] === void 0) result[key] = value;
  }
};
var mergePropertiesIntoResult = (result, properties, seenRefs = /* @__PURE__ */ new Set()) => {
  var _a;
  const propertyKeys = Object.keys(properties ?? {});
  if (!properties || !result || propertyKeys.length === 0) return;
  for (const key of propertyKeys) {
    const schema = resolve.schema(properties[key]);
    if (!schema) {
      delete result[key];
      continue;
    }
    if (typeof schema !== "object") {
      result[key] = schema;
      continue;
    }
    if (!result[key]) {
      const rawProperty = properties[key];
      const newSchemaRef = rawProperty == null ? void 0 : rawProperty.$ref;
      if (rawProperty && typeof newSchemaRef === "string" && seenRefs.has(newSchemaRef)) {
        result[key] = rawProperty;
        continue;
      }
      const nextNewSeenRefs = typeof newSchemaRef === "string" ? new Set(seenRefs).add(newSchemaRef) : seenRefs;
      if (schema.allOf) result[key] = mergeAllOfSchemas(schema, void 0, nextNewSeenRefs);
      else if (isArraySchema(schema) && ((_a = resolve.schema(schema.items)) == null ? void 0 : _a.allOf)) result[key] = {
        ...schema,
        items: mergeAllOfSchemas(resolve.schema(schema.items), void 0, seenRefs)
      };
      else if (properties[key]) result[key] = properties[key];
      continue;
    }
    const existing = resolve.schema(result[key]);
    const schemaRef = schema.$ref;
    if (typeof schemaRef === "string" && seenRefs.has(schemaRef)) {
      result[key] = existing;
      continue;
    }
    const nextSeenRefs = typeof schemaRef === "string" ? new Set(seenRefs).add(schemaRef) : seenRefs;
    if (schema.allOf) result[key] = mergeAllOfSchemas({ allOf: [existing, ...schema.allOf] }, void 0, nextSeenRefs);
    else if (isArraySchema(schema) && isArraySchema(existing) && schema.items) {
      const existingItems = resolve.schema(existing.items);
      result[key] = {
        ...existing,
        type: "array",
        items: existingItems ? mergeItems(existingItems, resolve.schema(schema.items), nextSeenRefs) : resolve.schema(schema.items)
      };
    } else if ("properties" in existing && "properties" in schema) {
      const merged = {
        ...existing,
        ...schema
      };
      merged.properties = { ...existing.properties };
      mergePropertiesIntoResult(merged.properties, schema.properties, nextSeenRefs);
      result[key] = merged;
    } else result[key] = {
      ...schema,
      ...existing
    };
  }
};
var mergeItemsIntoResult = (result, items, seenRefs = /* @__PURE__ */ new Set()) => {
  if (items.allOf || result.allOf) {
    const allOfSchemas = [];
    if (result.allOf) for (const schema of result.allOf) allOfSchemas.push(resolve.schema(schema));
    else allOfSchemas.push(result);
    if (items.allOf) for (const schema of items.allOf) allOfSchemas.push(resolve.schema(schema));
    else allOfSchemas.push(items);
    const merged = mergeAllOfSchemas({ allOf: allOfSchemas }, void 0, seenRefs);
    Object.assign(result, merged);
    return;
  }
  Object.assign(result, items);
  if ("properties" in result && "properties" in items) mergePropertiesIntoResult(result.properties, items.properties, seenRefs);
};
var mergeItems = (existing, incoming, seenRefs = /* @__PURE__ */ new Set()) => {
  const incomingRef = incoming.$ref;
  if (typeof incomingRef === "string") {
    if (seenRefs.has(incomingRef)) return existing;
    return mergeItemsInner(existing, incoming, new Set(seenRefs).add(incomingRef));
  }
  return mergeItemsInner(existing, incoming, seenRefs);
};
var mergeItemsInner = (existing, incoming, seenRefs = /* @__PURE__ */ new Set()) => {
  if (existing.allOf || incoming.allOf) {
    const allOfSchemas = [];
    if (existing.allOf) for (const schema of existing.allOf) allOfSchemas.push(resolve.schema(schema));
    else allOfSchemas.push(existing);
    if (incoming.allOf) for (const schema of incoming.allOf) allOfSchemas.push(resolve.schema(schema));
    else allOfSchemas.push(incoming);
    return mergeAllOfSchemas({ allOf: allOfSchemas }, void 0, seenRefs);
  }
  const merged = {
    ...existing,
    ...incoming
  };
  if ("properties" in existing && "properties" in incoming) {
    merged.properties = { ...existing.properties };
    mergePropertiesIntoResult(merged.properties, incoming.properties, seenRefs);
  }
  return merged;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/partition-all-of-compositions.js
var CHOICE_KEYWORDS = ["oneOf", "anyOf"];
var collectMembers = (schema, out, seenRefs) => {
  const { allOf, oneOf, anyOf, not: _not, if: _if, then: _then, else: _else, ...rest } = schema;
  if (Object.keys(rest).length > 0) out.push({
    kind: "object",
    schema: rest
  });
  for (const keyword of CHOICE_KEYWORDS) {
    const value = keyword === "oneOf" ? oneOf : anyOf;
    if (Array.isArray(value) && value.length > 0) out.push({
      kind: "choice",
      composition: keyword,
      value: { [keyword]: value }
    });
  }
  if (Array.isArray(allOf)) {
    for (const rawMember of allOf) if (rawMember && typeof rawMember === "object") {
      const resolved = resolve.schema(rawMember);
      const ref2 = resolved.$ref;
      if (typeof ref2 === "string") {
        if (seenRefs.has(ref2)) continue;
        collectMembers(resolved, out, new Set(seenRefs).add(ref2));
      } else collectMembers(resolved, out, seenRefs);
    }
  }
};
var partitionAllOfCompositions = (schema) => {
  if (!schema) return { segments: [] };
  const { allOf, oneOf: _oneOf, anyOf: _anyOf, not: _not, if: _if, then: _then, else: _else, ...rest } = schema;
  if (!Array.isArray(allOf)) return { segments: [{
    kind: "object",
    schema
  }] };
  const members = [];
  if (Object.keys(rest).length > 0) members.push({
    kind: "object",
    schema: rest
  });
  const seenRefs = /* @__PURE__ */ new Set();
  for (const rawMember of allOf) if (rawMember && typeof rawMember === "object") {
    const resolved = resolve.schema(rawMember);
    const ref2 = resolved.$ref;
    collectMembers(resolved, members, typeof ref2 === "string" ? new Set(seenRefs).add(ref2) : seenRefs);
  }
  const segments = [];
  let objectRun = [];
  let choiceIndex = 0;
  const flushObjectRun = () => {
    if (objectRun.length === 0) return;
    const merged = objectRun.length === 1 ? objectRun[0] : mergeAllOfSchemas({ allOf: objectRun });
    segments.push({
      kind: "object",
      schema: merged
    });
    objectRun = [];
  };
  for (const member of members) if (member.kind === "object") objectRun.push(member.schema);
  else {
    flushObjectRun();
    segments.push({
      kind: "choice",
      composition: member.composition,
      value: member.value,
      choiceIndex: choiceIndex++
    });
  }
  flushObjectRun();
  return { segments };
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/schema-name.js
var getModelNameFromSchema = (schemaOrRef) => {
  if (!schemaOrRef) return null;
  const schema = resolve.schema(schemaOrRef);
  const schemaKey = "$ref" in schemaOrRef ? getSchemaRefName(schemaOrRef.$ref) : null;
  if (schema.title) return {
    schemaKey,
    label: schema.title
  };
  if (schema.name) return {
    schemaKey,
    label: schema.name
  };
  if ("$ref" in schemaOrRef) {
    const label = getRefName(schemaOrRef.$ref);
    if (label) return {
      schemaKey,
      label
    };
  }
  return null;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/is-empty-schema-object.js
var isEmptySchemaObject = (schema) => {
  if (!isTypeObject(schema)) return false;
  const hasNoProperties = Object.keys(schema.properties ?? {}).length === 0;
  const hasNoAdditionalProperties = schema.additionalProperties === void 0 || schema.additionalProperties === false;
  const hasNoPatternProperties = Object.keys(schema.patternProperties ?? {}).length === 0;
  return hasNoProperties && hasNoAdditionalProperties && hasNoPatternProperties;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/sort-property-names.js
var reduceNamesToObject = (names, properties) => names.reduce((acc, name) => {
  const prop = properties == null ? void 0 : properties[name];
  if (prop) acc[name] = prop;
  return acc;
}, {});
var sortPropertyNames = (schema, discriminator, { hideReadOnly = false, hideWriteOnly = false, orderSchemaPropertiesBy = "alpha", orderRequiredPropertiesFirst = true } = {}) => {
  if (!isTypeObject(schema) || !schema.properties) return [];
  const propertyNames = Object.keys(schema.properties);
  const requiredPropertiesSet = new Set(schema.required || []);
  return propertyNames.sort((a, b) => {
    var _a, _b;
    const aDiscriminator = a === (discriminator == null ? void 0 : discriminator.propertyName);
    const bDiscriminator = b === (discriminator == null ? void 0 : discriminator.propertyName);
    const aRequired = requiredPropertiesSet.has(a);
    const bRequired = requiredPropertiesSet.has(b);
    if (aDiscriminator && !bDiscriminator) return -1;
    if (!aDiscriminator && bDiscriminator) return 1;
    const aSchema = (_a = schema.properties) == null ? void 0 : _a[a];
    const bSchema = (_b = schema.properties) == null ? void 0 : _b[b];
    const aOrder = aSchema && typeof aSchema === "object" && "x-order" in aSchema ? aSchema["x-order"] : void 0;
    const bOrder = bSchema && typeof bSchema === "object" && "x-order" in bSchema ? bSchema["x-order"] : void 0;
    if (aOrder !== void 0 && bOrder !== void 0) return Number(aOrder) - Number(bOrder);
    if (aOrder !== void 0 && bOrder === void 0) return -1;
    if (aOrder === void 0 && bOrder !== void 0) return 1;
    if (orderRequiredPropertiesFirst) {
      if (aRequired && !bRequired) return -1;
      if (!aRequired && bRequired) return 1;
    }
    if (orderSchemaPropertiesBy === "alpha") return a.localeCompare(b);
    return 0;
  }).filter((property) => {
    const resolved = schema.properties && resolve.schema(schema.properties[property]);
    if (hideReadOnly && (resolved == null ? void 0 : resolved.readOnly) === true) return false;
    if (hideWriteOnly && (resolved == null ? void 0 : resolved.writeOnly) === true) return false;
    return true;
  });
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaObjectProperties.vue.script.js
var SchemaObjectProperties_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaObjectProperties",
  props: {
    schema: {},
    discriminator: {},
    compact: { type: Boolean },
    hideHeading: { type: Boolean },
    level: {},
    hideModelNames: { type: Boolean },
    breadcrumb: {},
    eventBus: {},
    options: {},
    schemaContext: {},
    compositionPath: {}
  },
  setup(__props) {
    const sortedProperties = computed(() => sortPropertyNames(__props.schema, __props.discriminator, __props.options));
    const getAdditionalPropertiesName = (_additionalProperties, _propertyNames) => {
      const additionalProperties = typeof _additionalProperties === "boolean" ? _additionalProperties : resolve.schema(_additionalProperties);
      if (typeof additionalProperties === "object" && typeof additionalProperties["x-additionalPropertiesName"] === "string" && additionalProperties["x-additionalPropertiesName"].trim().length > 0) return `${additionalProperties["x-additionalPropertiesName"].trim()}`;
      if (_propertyNames) {
        const resolved = resolve.schema(_propertyNames);
        if (resolved == null ? void 0 : resolved.title) return resolved.title;
      }
      return "propertyName";
    };
    const getPropertyNamesEnum = (_propertyNames) => {
      if (!_propertyNames) return;
      const resolved = resolve.schema(_propertyNames);
      if (resolved && "enum" in resolved && Array.isArray(resolved.enum) && resolved.enum.length > 0) return resolved.enum;
    };
    const additionalPropertiesEnum = computed(() => {
      if (!isTypeObject(__props.schema) || !__props.schema.additionalProperties) return;
      return getPropertyNamesEnum(__props.schema.propertyNames);
    });
    const additionalPropertiesKeySchema = computed(() => {
      if (!isTypeObject(__props.schema) || !__props.schema.additionalProperties) return;
      return __props.schema.propertyNames ? resolve.schema(__props.schema.propertyNames) : void 0;
    });
    const getPropertySchema = (property) => {
      if (!property) return;
      return resolve.schema(property);
    };
    const getPropertyDescription2 = (property) => {
      if (!property) return;
      return typeof property.description === "string" ? property.description : void 0;
    };
    const getAdditionalPropertiesValue = (additionalProperties) => {
      const resolved = typeof additionalProperties === "boolean" ? additionalProperties : resolve.schema(additionalProperties);
      if (resolved === true || typeof resolved === "object" && Object.keys(resolved).length === 0 || typeof resolved !== "object" || !("type" in resolved)) return {
        type: "anything",
        ...typeof resolved === "object" ? resolved : {}
      };
      return resolved;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(isTypeObject)(__props.schema) && __props.schema.properties ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(sortedProperties.value, (property) => {
          var _a;
          return openBlock(), createBlock(SchemaProperty_default, {
            key: property,
            breadcrumb: __props.breadcrumb,
            compact: __props.compact,
            compositionPath: __props.compositionPath,
            compositionPathSegment: property,
            cycleKey: unref(getCycleKey)(__props.schema.properties[property]),
            description: getPropertyDescription2(__props.schema.properties[property]),
            discriminator: __props.discriminator,
            eventBus: __props.eventBus,
            hideHeading: __props.hideHeading,
            hideModelNames: __props.hideModelNames,
            level: __props.level,
            name: property,
            options: __props.options,
            required: (_a = __props.schema.required) == null ? void 0 : _a.includes(property),
            schema: getPropertySchema(__props.schema.properties[property]),
            schemaContext: __props.schemaContext
          }, null, 8, [
            "breadcrumb",
            "compact",
            "compositionPath",
            "compositionPathSegment",
            "cycleKey",
            "description",
            "discriminator",
            "eventBus",
            "hideHeading",
            "hideModelNames",
            "level",
            "name",
            "options",
            "required",
            "schema",
            "schemaContext"
          ]);
        }), 128)) : createCommentVNode("", true),
        unref(isTypeObject)(__props.schema) && __props.schema.patternProperties ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(Object.entries(__props.schema.patternProperties), ([key, property]) => {
          return openBlock(), createBlock(SchemaProperty_default, {
            key,
            breadcrumb: __props.breadcrumb,
            compact: __props.compact,
            compositionPath: __props.compositionPath,
            compositionPathSegment: key,
            cycleKey: unref(getCycleKey)(property),
            description: getPropertyDescription2(property),
            discriminator: __props.discriminator,
            eventBus: __props.eventBus,
            hideHeading: __props.hideHeading,
            hideModelNames: __props.hideModelNames,
            level: __props.level,
            name: key,
            options: __props.options,
            schema: getPropertySchema(property),
            schemaContext: __props.schemaContext
          }, null, 8, [
            "breadcrumb",
            "compact",
            "compositionPath",
            "compositionPathSegment",
            "cycleKey",
            "description",
            "discriminator",
            "eventBus",
            "hideHeading",
            "hideModelNames",
            "level",
            "name",
            "options",
            "schema",
            "schemaContext"
          ]);
        }), 128)) : createCommentVNode("", true),
        unref(isTypeObject)(__props.schema) && __props.schema.additionalProperties ? (openBlock(), createBlock(SchemaProperty_default, {
          key: 2,
          breadcrumb: __props.breadcrumb,
          compact: __props.compact,
          compositionPath: __props.compositionPath,
          compositionPathSegment: getAdditionalPropertiesName(__props.schema.additionalProperties, __props.schema.propertyNames),
          cycleKey: unref(getCycleKey)(__props.schema.additionalProperties),
          discriminator: __props.discriminator,
          eventBus: __props.eventBus,
          hideHeading: __props.hideHeading,
          hideModelNames: __props.hideModelNames,
          level: __props.level,
          name: getAdditionalPropertiesName(__props.schema.additionalProperties, __props.schema.propertyNames),
          noncollapsible: "",
          options: __props.options,
          propertyNamesEnum: additionalPropertiesEnum.value,
          propertyNamesSchema: additionalPropertiesKeySchema.value,
          schema: getAdditionalPropertiesValue(__props.schema.additionalProperties),
          schemaContext: __props.schemaContext,
          variant: "additionalProperties"
        }, null, 8, [
          "breadcrumb",
          "compact",
          "compositionPath",
          "compositionPathSegment",
          "cycleKey",
          "discriminator",
          "eventBus",
          "hideHeading",
          "hideModelNames",
          "level",
          "name",
          "options",
          "propertyNamesEnum",
          "propertyNamesSchema",
          "schema",
          "schemaContext"
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaObjectProperties.vue.js
var SchemaObjectProperties_default = SchemaObjectProperties_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue.script.js
var _hoisted_138 = {
  key: 0,
  class: "schema-card-description"
};
var _hoisted_225 = {
  key: 1,
  class: "pt-2"
};
var _hoisted_317 = {
  key: 0,
  class: "schema-properties"
};
var Schema_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Schema",
  props: {
    schema: {},
    level: { default: 0 },
    name: {},
    compact: { type: Boolean },
    noncollapsible: {
      type: Boolean,
      default: false
    },
    hideHeading: { type: Boolean },
    hideDescription: {
      type: Boolean,
      default: false
    },
    additionalProperties: { type: Boolean },
    hideModelNames: {
      type: Boolean,
      default: false
    },
    discriminator: {},
    breadcrumb: {},
    eventBus: {},
    options: {},
    schemaContext: {},
    compositionPath: {},
    cycleKey: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const dynamicScope = useDynamicScope();
    const resolvedSchema = computed(() => {
      if (!__props.schema || typeof __props.schema !== "object") return __props.schema;
      const bound = resolveDynamicSchema(__props.schema, dynamicScope);
      return "$ref" in bound ? resolve.schema(bound) : bound;
    });
    const scopeSchema = __props.schema ? resolveDynamicSchema(__props.schema, dynamicScope) : void 0;
    provide(SCHEMA_DYNAMIC_SCOPE_SYMBOL, scopeSchema ? pushDynamicScope(dynamicScope, scopeSchema) : dynamicScope);
    const ancestors = inject(SCHEMA_ANCESTORS_SYMBOL, void 0);
    const isCyclic = computed(() => __props.cycleKey != null && !!(ancestors == null ? void 0 : ancestors.has(__props.cycleKey)));
    const childAncestors = new Set(ancestors ?? []);
    if (__props.cycleKey != null) childAncestors.add(__props.cycleKey);
    provide(SCHEMA_ANCESTORS_SYMBOL, childAncestors);
    const shouldForceExpand = computed(() => !!__props.options.expandAllSchemaProperties && !isCyclic.value);
    const shouldShowToggle = computed(() => !__props.noncollapsible && __props.level > 0);
    const isOnScrollTargetPath = computed(() => {
      var _a;
      if (!((_a = __props.breadcrumb) == null ? void 0 : _a.length)) return false;
      const path = __props.breadcrumb.join(".");
      const target = scrollTargetId.value;
      return target === path || target.startsWith(`${path}.`);
    });
    const defaultOpen = computed(() => __props.noncollapsible || shouldForceExpand.value || isOnScrollTargetPath.value);
    const childAttributesLabel = computed(() => {
      var _a;
      return ((_a = __props.schema) == null ? void 0 : _a.title) ?? translate("schema.childAttributes");
    });
    const schemaDescription = computed(() => {
      var _a, _b;
      const value = resolvedSchema.value;
      if (__props.hideDescription) return null;
      if (((_a = __props.schema) == null ? void 0 : _a.allOf) && __props.schema.allOf.length > 0 && __props.name === "Request Body") return ((_b = mergeAllOfSchemas(__props.schema)) == null ? void 0 : _b.description) || null;
      if (!(value == null ? void 0 : value.description) || typeof value.description !== "string") return null;
      if (value.enum) return null;
      if (!("properties" in value) && !("patternProperties" in value) && !("additionalProperties" in value) && !("allOf" in value)) return null;
      return value.description;
    });
    const inferredDiscriminatorComposition = computed(() => __props.schema && !__props.discriminator && isTypeObject(__props.schema) ? inferDiscriminatorMappingComposition(__props.schema, __props.options.document) : null);
    const handleClick = (e) => {
      if (__props.noncollapsible) e.stopPropagation();
    };
    return (_ctx, _cache) => {
      return resolvedSchema.value && Object.keys(resolvedSchema.value).length ? (openBlock(), createBlock(unref(N), {
        key: 0,
        defaultOpen: defaultOpen.value
      }, {
        default: withCtx(({ open }) => [createBaseVNode("div", { class: normalizeClass(["schema-card", [
          `schema-card--level-${__props.level}`,
          {
            "schema-card--compact": __props.compact,
            "schema-card--open": open
          },
          { "border-t": __props.additionalProperties && open }
        ]]) }, [
          schemaDescription.value ? (openBlock(), createElementBlock("div", _hoisted_138, [createVNode(unref(ScalarMarkdown_default), { value: schemaDescription.value }, null, 8, ["value"])])) : createCommentVNode("", true),
          unref(isEmptySchemaObject)(resolvedSchema.value) ? (openBlock(), createElementBlock("div", _hoisted_225, toDisplayString(unref(translate)("schema.emptyObject")), 1)) : createCommentVNode("", true),
          createBaseVNode("div", { class: normalizeClass(["schema-properties", { "schema-properties-open": open }]) }, [__props.additionalProperties ? withDirectives((openBlock(), createElementBlock("div", _hoisted_317, [createVNode(unref(Q), {
            as: "button",
            class: "schema-card-title schema-card-title--compact",
            onClickCapture: handleClick
          }, {
            default: withCtx(() => [
              createVNode(unref(ScalarIcon_default), {
                class: "schema-card-title-icon",
                icon: "Add",
                size: "sm"
              }),
              createTextVNode(" " + toDisplayString(unref(translate)("schema.showAdditionalProperties")) + " ", 1),
              __props.name ? (openBlock(), createBlock(ScreenReader_default, { key: 0 }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.forName", { name: __props.name })), 1)]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })], 512)), [[vShow, !open]]) : shouldShowToggle.value ? withDirectives((openBlock(), createBlock(unref(Q), {
            key: 1,
            as: __props.noncollapsible ? "div" : "button",
            class: normalizeClass(["schema-card-title", { "schema-card-title--compact": __props.compact }]),
            style: normalizeStyle({ top: `calc(var(--refs-viewport-offset) +  calc(var(--schema-title-height) * ${__props.level}))` }),
            onClickCapture: handleClick
          }, {
            default: withCtx(() => {
              var _a;
              return [__props.compact ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(unref(ScalarIcon_default), {
                  class: normalizeClass(["schema-card-title-icon", { "schema-card-title-icon--open": open }]),
                  icon: "Add",
                  size: "sm"
                }, null, 8, ["class"]),
                open ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(translate)("schema.hideChildAttributes", { name: childAttributesLabel.value })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(translate)("schema.showChildAttributes", { name: childAttributesLabel.value })), 1)], 64)),
                __props.name ? (openBlock(), createBlock(ScreenReader_default, { key: 2 }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.forName", { name: __props.name })), 1)]),
                  _: 1
                })) : createCommentVNode("", true)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(ScalarIcon_default), {
                class: normalizeClass(["schema-card-title-icon", { "schema-card-title-icon--open": open }]),
                icon: "Add",
                size: "sm"
              }, null, 8, ["class"]), createVNode(SchemaHeading_default, {
                name: ((_a = resolvedSchema.value) == null ? void 0 : _a.title) ?? __props.name,
                value: resolvedSchema.value
              }, null, 8, ["name", "value"])], 64))];
            }),
            _: 2
          }, 1032, [
            "as",
            "class",
            "style"
          ])), [[vShow, !__props.hideHeading && !(__props.noncollapsible && __props.compact)]]) : createCommentVNode("", true), !__props.additionalProperties || open ? (openBlock(), createBlock(unref(V), {
            key: 2,
            as: "ul",
            static: !shouldShowToggle.value
          }, {
            default: withCtx(() => {
              var _a;
              return [inferredDiscriminatorComposition.value ? (openBlock(), createBlock(SchemaComposition_default, {
                key: 0,
                breadcrumb: __props.breadcrumb,
                compact: __props.compact,
                composition: "oneOf",
                compositionPath: __props.compositionPath,
                discriminator: (_a = __props.schema) == null ? void 0 : _a.discriminator,
                eventBus: __props.eventBus,
                hideHeading: __props.hideHeading,
                hideModelNames: __props.hideModelNames,
                level: __props.level,
                name: __props.name,
                options: __props.options,
                schema: inferredDiscriminatorComposition.value,
                schemaContext: __props.schemaContext
              }, null, 8, [
                "breadcrumb",
                "compact",
                "compositionPath",
                "discriminator",
                "eventBus",
                "hideHeading",
                "hideModelNames",
                "level",
                "name",
                "options",
                "schema",
                "schemaContext"
              ])) : unref(isTypeObject)(resolvedSchema.value) ? (openBlock(), createBlock(SchemaObjectProperties_default, {
                key: 1,
                breadcrumb: __props.breadcrumb,
                compact: __props.compact,
                compositionPath: __props.compositionPath,
                discriminator: __props.discriminator,
                eventBus: __props.eventBus,
                hideHeading: __props.hideHeading,
                hideModelNames: __props.hideModelNames,
                level: __props.level + 1,
                options: __props.options,
                schema: resolvedSchema.value,
                schemaContext: __props.schemaContext
              }, null, 8, [
                "breadcrumb",
                "compact",
                "compositionPath",
                "discriminator",
                "eventBus",
                "hideHeading",
                "hideModelNames",
                "level",
                "options",
                "schema",
                "schemaContext"
              ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [resolvedSchema.value ? (openBlock(), createBlock(SchemaProperty_default, {
                key: 0,
                breadcrumb: __props.breadcrumb,
                compact: __props.compact,
                compositionPath: __props.compositionPath,
                discriminator: __props.discriminator,
                eventBus: __props.eventBus,
                hideHeading: __props.hideHeading,
                hideModelNames: __props.hideModelNames,
                level: __props.level,
                options: __props.options,
                schema: resolvedSchema.value,
                schemaContext: __props.schemaContext
              }, null, 8, [
                "breadcrumb",
                "compact",
                "compositionPath",
                "discriminator",
                "eventBus",
                "hideHeading",
                "hideModelNames",
                "level",
                "options",
                "schema",
                "schemaContext"
              ])) : createCommentVNode("", true)], 64))];
            }),
            _: 1
          }, 8, ["static"])) : createCommentVNode("", true)], 2)
        ], 2)]),
        _: 1
      }, 8, ["defaultOpen"])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/Schema.vue.js
var Schema_default = _plugin_vue_export_helper_default2(Schema_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-77b16bb4"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaComposition.vue.script.js
var _hoisted_139 = { class: "property-rule" };
var _hoisted_226 = {
  class: "composition-selector bg-b-1.5 hover:bg-b-2 flex w-full cursor-pointer items-center gap-1 rounded-t-lg border px-2.5 py-2.5 pr-3 text-left",
  type: "button"
};
var _hoisted_318 = { class: "text-c-2" };
var _hoisted_413 = {
  key: 0,
  class: "text-red"
};
var _hoisted_58 = { class: "composition-panel" };
var SchemaComposition_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaComposition",
  props: {
    composition: {},
    discriminator: {},
    name: {},
    schema: {},
    level: {},
    compact: {
      type: Boolean,
      default: false
    },
    hideHeading: {
      type: Boolean,
      default: false
    },
    hideModelNames: { type: Boolean },
    breadcrumb: {},
    eventBus: {},
    options: {},
    schemaContext: {},
    compositionPath: {}
  },
  setup(__props) {
    const props = __props;
    const { translate } = useLocalization();
    const allOfSegments = computed(() => props.composition === "allOf" ? partitionAllOfCompositions(props.schema).segments : []);
    const composition = computed(() => [props.schema[props.composition]].flat().map((schema) => ({
      value: resolve.schema(schema),
      original: schema
    })).filter((it) => isDefined(it.value)));
    const listboxOptions = computed(() => composition.value.map((schema, index) => {
      var _a;
      const resolved = resolve.schema(schema.original);
      const label = (((_a = getModelNameFromSchema(resolved)) == null ? void 0 : _a.label) ?? getSchemaType(resolved)) || translate("schema.schema");
      return {
        id: String(index),
        label
      };
    }));
    const compositionSelectionKey = computed(() => {
      var _a;
      return ((_a = props.compositionPath) == null ? void 0 : _a.length) ? [...props.compositionPath, props.composition].join(".") : "";
    });
    const requestBodyCompositionSelectionRef = inject(REQUEST_BODY_COMPOSITION_INDEX_SYMBOL, void 0);
    const initialSelectedIndex = computed(() => {
      if (props.schemaContext !== "requestBody" || !(requestBodyCompositionSelectionRef == null ? void 0 : requestBodyCompositionSelectionRef.value) || !compositionSelectionKey.value) return 0;
      const selectedIndex = requestBodyCompositionSelectionRef.value[compositionSelectionKey.value];
      if (typeof selectedIndex !== "number" || Number.isNaN(selectedIndex)) return 0;
      return Math.max(0, Math.min(selectedIndex, listboxOptions.value.length - 1));
    });
    const selectedOption = ref();
    watch([listboxOptions, initialSelectedIndex], ([options, selectedIndex]) => {
      if (!selectedOption.value || !options.some((option) => {
        var _a;
        return option.id === ((_a = selectedOption.value) == null ? void 0 : _a.id);
      })) selectedOption.value = options[selectedIndex] ?? options[0];
    }, { immediate: true });
    const compositionLabel = (type) => translate(`schema.${type}`);
    const selectedComposition = computed(() => {
      var _a, _b;
      return (_b = composition.value[Number(((_a = selectedOption.value) == null ? void 0 : _a.id) ?? "0")]) == null ? void 0 : _b.value;
    });
    const isRequestBodyRootComposition = computed(() => {
      var _a;
      return props.schemaContext === "requestBody" && ((_a = props.compositionPath) == null ? void 0 : _a.length) === 1;
    });
    const selectedCompositionCycleKey = computed(() => {
      var _a, _b;
      return getCycleKey((_b = composition.value[Number(((_a = selectedOption.value) == null ? void 0 : _a.id) ?? "0")]) == null ? void 0 : _b.original);
    });
    const showNestedSchema = ref(!!props.options.expandAllSchemaProperties);
    if (requestBodyCompositionSelectionRef && props.schemaContext === "requestBody" && compositionSelectionKey.value) watch(selectedOption, (option) => {
      const index = option ? Number(option.id) : 0;
      if (!Number.isNaN(index)) requestBodyCompositionSelectionRef.value = {
        ...requestBodyCompositionSelectionRef.value,
        [compositionSelectionKey.value]: index
      };
    }, { immediate: true });
    return (_ctx, _cache) => {
      var _a;
      const _component_SchemaComposition = resolveComponent("SchemaComposition", true);
      return openBlock(), createElementBlock("div", _hoisted_139, [props.composition === "allOf" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(allOfSegments.value, (segment, segmentIndex) => {
        return openBlock(), createElementBlock(Fragment, { key: segmentIndex }, [segment.kind === "object" ? (openBlock(), createBlock(Schema_default, {
          key: 0,
          breadcrumb: __props.breadcrumb,
          compact: __props.compact,
          compositionPath: __props.compositionPath,
          discriminator: __props.discriminator,
          eventBus: __props.eventBus,
          hideDescription: isRequestBodyRootComposition.value,
          hideHeading: __props.hideHeading,
          hideModelNames: __props.hideModelNames,
          level: __props.level + 1,
          name: __props.name,
          noncollapsible: true,
          options: __props.options,
          schema: segment.schema,
          schemaContext: __props.schemaContext
        }, null, 8, [
          "breadcrumb",
          "compact",
          "compositionPath",
          "discriminator",
          "eventBus",
          "hideDescription",
          "hideHeading",
          "hideModelNames",
          "level",
          "name",
          "options",
          "schema",
          "schemaContext"
        ])) : (openBlock(), createBlock(_component_SchemaComposition, {
          key: 1,
          breadcrumb: __props.breadcrumb,
          compact: __props.compact,
          composition: segment.composition,
          compositionPath: [...__props.compositionPath ?? [], String(segment.choiceIndex)],
          eventBus: __props.eventBus,
          hideHeading: __props.hideHeading,
          hideModelNames: __props.hideModelNames,
          level: __props.level,
          options: __props.options,
          schema: segment.value,
          schemaContext: __props.schemaContext
        }, null, 8, [
          "breadcrumb",
          "compact",
          "composition",
          "compositionPath",
          "eventBus",
          "hideHeading",
          "hideModelNames",
          "level",
          "options",
          "schema",
          "schemaContext"
        ]))], 64);
      }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(ScalarListbox_default), {
        modelValue: selectedOption.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedOption.value = $event),
        options: listboxOptions.value,
        resize: ""
      }, {
        default: withCtx(() => {
          var _a2, _b, _c;
          return [createBaseVNode("button", _hoisted_226, [
            createBaseVNode("span", _hoisted_318, toDisplayString(compositionLabel(props.composition)), 1),
            createBaseVNode("span", { class: normalizeClass(["composition-selector-label text-c-1", { "line-through": (_a2 = selectedComposition.value) == null ? void 0 : _a2.deprecated }]) }, toDisplayString(((_b = selectedOption.value) == null ? void 0 : _b.label) || unref(translate)("schema.schema")), 3),
            ((_c = selectedComposition.value) == null ? void 0 : _c.deprecated) ? (openBlock(), createElementBlock("div", _hoisted_413, toDisplayString(unref(translate)("common.deprecated")), 1)) : createCommentVNode("", true),
            createVNode(unref(ScalarIconCaretDown_default))
          ])];
        }),
        _: 1
      }, 8, ["modelValue", "options"]), createBaseVNode("div", _hoisted_58, [!showNestedSchema.value && __props.level > 2 ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "bg-b-1 hover:bg-b-2 text-c-1 flex w-full items-center justify-center gap-2 rounded-b-lg border border-t-0 px-2 py-2 text-sm font-medium transition-colors",
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => showNestedSchema.value = true)
      }, [createTextVNode(toDisplayString(unref(translate)("schema.showSchemaDetails")) + " ", 1), createVNode(unref(ScalarIconCaretDown_default), { class: "h-3 w-3" })])) : (openBlock(), createBlock(Schema_default, {
        key: ((_a = selectedOption.value) == null ? void 0 : _a.id) ?? "0",
        breadcrumb: __props.breadcrumb,
        compact: __props.compact,
        compositionPath: __props.compositionPath,
        cycleKey: selectedCompositionCycleKey.value,
        discriminator: __props.discriminator,
        eventBus: __props.eventBus,
        hideHeading: __props.hideHeading,
        hideModelNames: __props.hideModelNames,
        level: __props.level + 1,
        name: __props.name,
        noncollapsible: true,
        options: __props.options,
        schema: selectedComposition.value,
        schemaContext: __props.schemaContext
      }, null, 8, [
        "breadcrumb",
        "compact",
        "compositionPath",
        "cycleKey",
        "discriminator",
        "eventBus",
        "hideHeading",
        "hideModelNames",
        "level",
        "name",
        "options",
        "schema",
        "schemaContext"
      ]))])], 64))]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaComposition.vue.js
var SchemaComposition_default = SchemaComposition_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-enum-values.js
var getEnumValues = (value) => {
  if (!value) return [];
  if (value.enum) return value.enum;
  if (isArraySchema(value) && typeof value.items === "object") {
    const resolvedItems = resolve.schema(value.items);
    if (resolvedItems && "enum" in resolvedItems && resolvedItems.enum) return resolvedItems.enum;
  }
  return [];
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/get-property-description.js
var TYPE_DESCRIPTIONS = {
  integer: {
    _default: "Integer numbers.",
    int32: "Signed 32-bit integers (commonly used integer type).",
    int64: "Signed 64-bit integers (long type)."
  },
  string: {
    "date": "full-date notation as defined by RFC 3339, section 5.6, for example, 2017-07-21",
    "date-time": "the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z",
    "password": "a hint to UIs to mask the input",
    "base64": "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
    "byte": "base64-encoded characters, for example, U3dhZ2dlciByb2Nrcw==",
    "binary": "binary data, used to describe files"
  }
};
var getPropertyDescription = (value) => {
  if (!isSchema(value)) return null;
  const type = Array.isArray(value.type) ? value.type[0] : value.type;
  if (!type) return null;
  const typeDescriptions = TYPE_DESCRIPTIONS[type];
  if (!typeDescriptions) return null;
  return typeDescriptions["format" in value && value.format || "contentEncoding" in value && value.contentEncoding || "_default"] ?? null;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/optimize-value-for-display.js
function mergeSchemaProperties(...objects) {
  const merged = {};
  const properties = {};
  const required = /* @__PURE__ */ new Set();
  let hasProperties = false;
  let hasRequired = false;
  for (const object of objects) {
    if (!object) continue;
    for (const [key, val] of Object.entries(object)) {
      if (key === "properties" && val && typeof val === "object") {
        Object.assign(properties, val);
        hasProperties = true;
        continue;
      }
      if (key === "required" && Array.isArray(val)) {
        for (const name of val) required.add(name);
        hasRequired = true;
        continue;
      }
      merged[key] = val;
    }
  }
  if (hasProperties) merged.properties = properties;
  if (hasRequired) merged.required = [...required];
  return merged;
}
function optimizeValueForDisplay(value) {
  if (!value || typeof value !== "object") return value;
  const composition = compositions.find((keyword) => keyword in value && keyword !== "not");
  if (!composition) return { ...value };
  const schemas = value[composition];
  if (!Array.isArray(schemas)) return { ...value };
  const { [composition]: _, nullable: originalNullable, ...rootProperties } = value;
  const hasRootProperties = Object.keys(rootProperties).length > 0;
  const { filteredSchemas, hasNullSchema } = schemas.reduce((acc, _schema) => {
    const schema = resolve.schema(_schema);
    if ("type" in schema && schema.type === "null") acc.hasNullSchema = true;
    else acc.filteredSchemas.push(schema);
    return acc;
  }, {
    filteredSchemas: [],
    hasNullSchema: false
  });
  const shouldBeNullable = hasNullSchema || originalNullable === true;
  if (filteredSchemas.length === 1) {
    const mergedSchema = mergeSchemaProperties(filteredSchemas[0], rootProperties);
    if (shouldBeNullable) mergedSchema.nullable = true;
    return mergedSchema;
  }
  if ((composition === "oneOf" || composition === "anyOf") && (hasRootProperties || filteredSchemas.some((schema) => schema.allOf))) {
    const mergedSchemas = filteredSchemas.map((_schema) => {
      var _a;
      const schema = resolve.schema(_schema);
      if (((_a = schema.allOf) == null ? void 0 : _a.length) === 1) {
        const { allOf, ...otherProps } = schema;
        const allOfMember = resolve.schema(allOf[0]);
        if ("properties" in otherProps || "required" in otherProps || "$ref" in otherProps) {
          const { $ref: _ref, title: _title, name: _name, ...allOfMemberWithoutIdentity } = allOfMember;
          return mergeSchemaProperties(rootProperties, otherProps, allOfMemberWithoutIdentity);
        }
        return mergeSchemaProperties(rootProperties, otherProps, allOfMember);
      }
      return mergeSchemaProperties(rootProperties, schema);
    });
    const result = { [composition]: mergedSchemas };
    if (typeof value.description === "string") result.description = value.description;
    if (shouldBeNullable) result.nullable = true;
    return result;
  }
  if (filteredSchemas.length !== schemas.length) {
    const result = {
      ...value,
      [composition]: filteredSchemas
    };
    if (shouldBeNullable) result.nullable = true;
    return result;
  }
  return { ...value };
}

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/should-display-description.js
var shouldDisplayDescription = (schema, propDescription) => {
  if (!schema) return null;
  if (schema.allOf) return null;
  if (propDescription && schema.description) return propDescription === schema.description ? propDescription : `${propDescription}

${schema.description}`;
  return propDescription || schema.description || null;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/should-display-heading.js
var shouldDisplayHeading = (schema, name, required = false) => {
  var _a;
  if (name || required) return true;
  if (!schema) return false;
  return schema.deprecated === true || schema.const !== void 0 || ((_a = schema.enum) == null ? void 0 : _a.length) === 1 || "type" in schema && schema.type !== void 0 || "nullable" in schema && schema.nullable === true || schema.writeOnly === true || schema.readOnly === true;
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnumPropertyItem.vue.script.js
var _hoisted_140 = { class: "property-enum-value" };
var _hoisted_227 = { class: "property-enum-value-content" };
var _hoisted_319 = { class: "property-enum-value-label" };
var _hoisted_414 = {
  key: 0,
  class: "property-enum-value-description"
};
var SchemaEnumPropertyItem_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaEnumPropertyItem",
  props: {
    label: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_140, [createBaseVNode("div", _hoisted_227, [createBaseVNode("span", _hoisted_319, [createVNode(unref(ScalarWrappingText_default), {
        text: __props.label,
        preset: "property"
      }, null, 8, ["text"])]), __props.description ? (openBlock(), createElementBlock("span", _hoisted_414, [createVNode(unref(ScalarMarkdown_default), { value: __props.description }, null, 8, ["value"])])) : createCommentVNode("", true)])]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnumPropertyItem.vue.js
var SchemaEnumPropertyItem_default = _plugin_vue_export_helper_default2(SchemaEnumPropertyItem_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-4375ecfd"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnums.vue.script.js
var _hoisted_141 = {
  key: 0,
  class: "property-enum"
};
var _hoisted_228 = {
  key: 0,
  class: "property-enum-property-names"
};
var _hoisted_320 = {
  key: 1,
  class: "property-enum-property-names"
};
var _hoisted_415 = { class: "property-enum-values" };
var _hoisted_59 = { key: 1 };
var ENUM_DISPLAY_THRESHOLD = 9;
var INITIAL_VISIBLE_COUNT = 5;
var THIN_SPACE = " ";
var SchemaEnums_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaEnums",
  props: {
    value: {},
    propertyNames: { type: Boolean }
  },
  setup(__props) {
    const { translate } = useLocalization();
    const enumSchema = computed(() => {
      if (!__props.value) return;
      if (__props.value.enum) return __props.value;
      return isArraySchema(__props.value) ? resolve.schema(__props.value.items) : void 0;
    });
    const enumValues = computed(() => {
      var _a;
      return ((_a = enumSchema.value) == null ? void 0 : _a.enum) ?? [];
    });
    const shouldUseLongListDisplay = computed(() => enumValues.value.length > ENUM_DISPLAY_THRESHOLD);
    const initialVisibleCount = computed(() => shouldUseLongListDisplay.value ? INITIAL_VISIBLE_COUNT : enumValues.value.length);
    const visibleEnumValues = computed(() => enumValues.value.slice(0, initialVisibleCount.value));
    const hiddenEnumValues = computed(() => enumValues.value.slice(initialVisibleCount.value));
    const getEnumValueDescription = (enumValue, index) => {
      const schema = enumSchema.value;
      const descriptions = (schema == null ? void 0 : schema["x-enumDescriptions"]) ?? (schema == null ? void 0 : schema["x-enum-descriptions"]);
      if (!descriptions) return;
      if (Array.isArray(descriptions)) return descriptions[index];
      if (typeof descriptions === "object" && descriptions !== null) return descriptions[String(enumValue)];
    };
    const formatEnumValueWithName = (enumValue, index) => {
      var _a, _b;
      const varNames = ((_a = enumSchema.value) == null ? void 0 : _a["x-enum-varnames"]) ?? ((_b = enumSchema.value) == null ? void 0 : _b["x-enumNames"]);
      const varName = Array.isArray(varNames) ? varNames[index] : void 0;
      return varName ? `${enumValue}${THIN_SPACE}=${THIN_SPACE}${varName}` : String(enumValue);
    };
    const isExpanded = ref(false);
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };
    return (_ctx, _cache) => {
      return enumValues.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_141, [__props.propertyNames ? (openBlock(), createElementBlock("div", _hoisted_228, toDisplayString(unref(translate)("common.propertyNames")), 1)) : (openBlock(), createElementBlock("div", _hoisted_320, toDisplayString(unref(translate)("common.values")), 1)), createBaseVNode("ul", _hoisted_415, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(visibleEnumValues.value, (enumValue, index) => {
          return openBlock(), createBlock(SchemaEnumPropertyItem_default, {
            key: String(enumValue),
            description: getEnumValueDescription(enumValue, index),
            label: formatEnumValueWithName(enumValue, index)
          }, null, 8, ["description", "label"]);
        }), 128)),
        shouldUseLongListDisplay.value && isExpanded.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(hiddenEnumValues.value, (enumValue, index) => {
          return openBlock(), createBlock(SchemaEnumPropertyItem_default, {
            key: String(enumValue),
            description: getEnumValueDescription(enumValue, initialVisibleCount.value + index),
            label: formatEnumValueWithName(enumValue, initialVisibleCount.value + index)
          }, null, 8, ["description", "label"]);
        }), 128)) : createCommentVNode("", true),
        shouldUseLongListDisplay.value ? (openBlock(), createElementBlock("li", _hoisted_59, [createVNode(unref(ScalarButton_default), {
          class: "enum-toggle-button my-2 flex h-fit gap-1 rounded-full border py-1.5 pr-2.5 pl-2 leading-none",
          variant: "ghost",
          onClick: toggleExpanded
        }, {
          default: withCtx(() => [createVNode(unref(ScalarIconPlus_default), {
            class: normalizeClass({ "rotate-45": isExpanded.value }),
            weight: "bold"
          }, null, 8, ["class"]), createTextVNode(" " + toDisplayString(isExpanded.value ? unref(translate)("common.hideValues") : unref(translate)("common.showAllValues")), 1)]),
          _: 1
        })])) : createCommentVNode("", true)
      ])])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaEnums.vue.js
var SchemaEnums_default = _plugin_vue_export_helper_default2(SchemaEnums_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-602e2e26"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/LinkButton.vue.js
var _sfc_main6 = {};
var _hoisted_142 = {
  class: "text-c-3 hover:text-c-1 underline",
  type: "button"
};
function _sfc_render6(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_142, [renderSlot(_ctx.$slots, "default")]);
}
var LinkButton_default = _plugin_vue_export_helper_default2(_sfc_main6, [["render", _sfc_render6]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/is-model-linkable.js
var isModelLinkable = (schemaKey, { hideModels, document: document2 }) => {
  var _a, _b;
  if (!schemaKey || hideModels) return false;
  const schema = (_b = (_a = document2 == null ? void 0 : document2.components) == null ? void 0 : _a.schemas) == null ? void 0 : _b[schemaKey];
  return !isHidden(getResolvedRef(schema, mergeSiblingReferences));
};

// node_modules/@scalar/api-reference/dist/components/Content/Schema/RenderString.vue.script.js
var RenderString_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "RenderString",
  props: { value: {} },
  setup(__props) {
    const valueAsString = computed(() => {
      if (__props.value === "") return `''`;
      if (__props.value === null) return "null";
      if (__props.value === void 0) return "undefined";
      return __props.value;
    });
    return (_ctx, _cache) => {
      return toDisplayString(valueAsString.value);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/RenderString.vue.js
var RenderString_default = RenderString_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/format-value.js
function formatValue(value) {
  if (Array.isArray(value)) return `[${value.map((item) => {
    if (typeof item === "string") return `"${item.toString().trim()}"`;
    if (typeof item === "object") return JSON.stringify(item);
    if (item === void 0) return "undefined";
    if (item === null) return "null";
    return item;
  }).join(", ")}]`;
  if (value === null) return "null";
  if (typeof value === "object") return JSON.stringify(value);
  if (value === void 0) return "undefined";
  if (typeof value === "string") return value.trim();
  return value.toString().trim();
}

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDefault.vue.script.js
var _hoisted_143 = {
  key: 0,
  class: "property-default"
};
var _hoisted_229 = {
  class: "property-default-label",
  type: "button"
};
var _hoisted_321 = { class: "property-default-value-list" };
var SchemaPropertyDefault_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaPropertyDefault",
  props: { value: {} },
  setup(__props) {
    const { copyToClipboard } = useClipboard();
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return __props.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_143, [createBaseVNode("button", _hoisted_229, [createBaseVNode("span", null, toDisplayString(unref(translate)("schema.default")), 1)]), createBaseVNode("div", _hoisted_321, [createBaseVNode("button", {
        class: "property-default-value group",
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(unref(formatValue)(__props.value)))
      }, [createBaseVNode("span", null, toDisplayString(unref(formatValue)(__props.value)), 1), createVNode(unref(ScalarIcon_default), {
        class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3",
        icon: "Clipboard",
        size: "xs"
      })])])])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDefault.vue.js
var SchemaPropertyDefault_default = _plugin_vue_export_helper_default2(SchemaPropertyDefault_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-cc878a44"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue.script.js
var _hoisted_144 = {
  key: 0,
  class: "property-detail-prefix"
};
var _hoisted_230 = {
  key: 1,
  class: "property-detail-value"
};
var _hoisted_322 = {
  key: 2,
  class: "property-detail-value"
};
var SchemaPropertyDetail_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaPropertyDetail",
  props: {
    truncate: { type: Boolean },
    code: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", { class: normalizeClass(["property-detail", { "property-detail-truncate": __props.truncate }]) }, [_ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_144, [renderSlot(_ctx.$slots, "prefix", {}, void 0, true), _cache[0] || (_cache[0] = createTextVNode("  ", -1))])) : createCommentVNode("", true), __props.code ? (openBlock(), createElementBlock("code", _hoisted_230, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])) : (openBlock(), createElementBlock("span", _hoisted_322, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]))], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyDetail.vue.js
var SchemaPropertyDetail_default = _plugin_vue_export_helper_default2(SchemaPropertyDetail_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-1295f965"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/helpers/format-example.js
function preserveOrTrim(value) {
  const trimmed = value.trim();
  return trimmed === "" ? value : trimmed;
}
function formatExample(example) {
  if (Array.isArray(example)) return `[${example.map((item) => {
    if (typeof item === "string") return `"${preserveOrTrim(item)}"`;
    if (typeof item === "object") return JSON.stringify(item);
    if (item === void 0) return "undefined";
    if (item === null) return "null";
    return item;
  }).join(", ")}]`;
  if (example === null) return "null";
  if (typeof example === "object") return JSON.stringify(example);
  if (example === void 0) return "undefined";
  if (typeof example === "string") return preserveOrTrim(example);
  return preserveOrTrim(example.toString());
}

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyExamples.vue.script.js
var _hoisted_145 = {
  key: 0,
  class: "property-example"
};
var _hoisted_231 = { class: "property-example-value-list" };
var _hoisted_323 = {
  key: 1,
  class: "property-example"
};
var _hoisted_416 = { class: "property-example-value-list" };
var _hoisted_510 = ["onClick"];
var SchemaPropertyExamples_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaPropertyExamples",
  props: {
    examples: {},
    example: {}
  },
  setup(__props) {
    const { copyToClipboard } = useClipboard();
    const { translate } = useLocalization();
    const hasSingleExample = computed(() => __props.example !== void 0);
    const normalizedExamples = computed(() => {
      if (__props.examples && typeof __props.examples === "object") return __props.examples;
      return {};
    });
    const hasMultipleExamples = computed(() => Object.keys(normalizedExamples.value).length > 0);
    const multipleExamplesLabel = computed(() => Object.keys(normalizedExamples.value).length === 1 ? translate("schema.example") : translate("schema.examples"));
    function unwrapExampleObject(value) {
      if (isObject(value)) {
        if ("value" in value) return value.value;
        if ("externalValue" in value) return value.externalValue;
      }
      return value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [hasSingleExample.value ? (openBlock(), createElementBlock("div", _hoisted_145, [createVNode(LinkButton_default, { class: "decoration-dotted" }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("schema.example")), 1)]),
        _: 1
      }), createBaseVNode("div", _hoisted_231, [createBaseVNode("button", {
        class: "property-example-value group",
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(unref(formatExample)(__props.example)))
      }, [createBaseVNode("span", null, toDisplayString(unref(formatExample)(__props.example)), 1), createVNode(unref(ScalarIcon_default), {
        class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3",
        icon: "Clipboard",
        size: "xs"
      })])])])) : createCommentVNode("", true), hasMultipleExamples.value ? (openBlock(), createElementBlock("div", _hoisted_323, [createVNode(LinkButton_default, { class: "decoration-dotted" }, {
        default: withCtx(() => [createTextVNode(toDisplayString(multipleExamplesLabel.value), 1)]),
        _: 1
      }), createBaseVNode("div", _hoisted_416, [(openBlock(true), createElementBlock(Fragment, null, renderList(normalizedExamples.value, (ex, key) => {
        return openBlock(), createElementBlock("button", {
          key,
          class: "property-example-value group",
          type: "button",
          onClick: ($event) => unref(copyToClipboard)(unref(formatExample)(unwrapExampleObject(ex)))
        }, [createBaseVNode("span", null, toDisplayString(unref(formatExample)(unwrapExampleObject(ex))), 1), createVNode(unref(ScalarIcon_default), {
          class: "text-c-3 group-hover:text-c-1 ml-auto min-h-3 min-w-3",
          icon: "Clipboard",
          size: "xs"
        })], 8, _hoisted_510);
      }), 128))])])) : createCommentVNode("", true)], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyExamples.vue.js
var SchemaPropertyExamples_default = _plugin_vue_export_helper_default2(SchemaPropertyExamples_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-370db0bd"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyPattern.vue.script.js
var _hoisted_146 = { class: "property-pattern-popup" };
var _hoisted_232 = ["aria-label"];
var SchemaPropertyPattern_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaPropertyPattern",
  props: { pattern: {} },
  setup(__props) {
    const { copyToClipboard } = useClipboard();
    const { translate } = useLocalization();
    const rootRef = ref(null);
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };
    const close = () => {
      isOpen.value = false;
    };
    onClickOutside(rootRef, close);
    onKeyStroke("Escape", () => {
      if (isOpen.value) close();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "rootRef",
        ref: rootRef,
        class: normalizeClass(["property-pattern", { "is-open": isOpen.value }])
      }, [createVNode(LinkButton_default, {
        class: "decoration-dotted",
        onClick: toggle
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.pattern")), 1)]),
        _: 1
      }), createBaseVNode("div", _hoisted_146, [createBaseVNode("button", {
        class: "property-pattern-value group",
        type: "button",
        "aria-label": `${unref(translate)("common.copyPattern")}: ${__props.pattern}`,
        onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(__props.pattern))
      }, [createBaseVNode("code", null, toDisplayString(__props.pattern), 1), createVNode(unref(ScalarIcon_default), {
        "aria-hidden": "true",
        class: "group-hover:text-c-1 text-c-3 ml-auto min-h-3 min-w-3",
        icon: "Clipboard",
        size: "xs"
      })], 8, _hoisted_232)])], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyPattern.vue.js
var SchemaPropertyPattern_default = _plugin_vue_export_helper_default2(SchemaPropertyPattern_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-2034a630"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue.script.js
var _hoisted_147 = { class: "property-heading" };
var _hoisted_233 = {
  key: 1,
  class: "property-discriminator"
};
var _hoisted_324 = {
  key: 3,
  class: "property-additional"
};
var _hoisted_417 = {
  key: 4,
  class: "property-deprecated"
};
var _hoisted_511 = {
  key: 5,
  class: "property-const"
};
var _hoisted_64 = {
  key: 7,
  class: "property-write-only"
};
var _hoisted_74 = {
  key: 8,
  class: "property-read-only"
};
var _hoisted_82 = {
  key: 9,
  class: "property-required"
};
var SchemaPropertyHeading_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaPropertyHeading",
  props: {
    value: {},
    enum: { type: Boolean },
    isDiscriminator: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    additional: { type: Boolean },
    withExamples: {
      type: Boolean,
      default: true
    },
    hideModelNames: {
      type: Boolean,
      default: false
    },
    modelLinkOptions: {},
    modelName: {},
    propertyNames: {},
    eventBus: { default: null }
  },
  setup(__props) {
    const props = __props;
    const { translate } = useLocalization();
    const valueRef = toRef(props, "value");
    const constValue = computed(() => {
      var _a, _b;
      if (!valueRef.value) return;
      const schema = valueRef.value;
      if (schema.const !== void 0) return schema.const;
      if (((_a = schema.enum) == null ? void 0 : _a.length) === 1) return schema.enum[0];
      if (isArraySchema(schema) && schema.items) {
        const items = resolve.schema(schema.items);
        if (isDefined(items.const)) return items.const;
        if (((_b = items.enum) == null ? void 0 : _b.length) === 1) return items.enum[0];
      }
    });
    const getLeafConstraints = (schema) => {
      const properties = [];
      if (isStringSchema(schema)) {
        if (schema.minLength) properties.push({
          key: "min-length",
          prefix: `${translate("common.minLength")}: `,
          value: schema.minLength
        });
        if (schema.maxLength) properties.push({
          key: "max-length",
          prefix: `${translate("common.maxLength")}: `,
          value: schema.maxLength
        });
      }
      if ((isStringSchema(schema) || isNumberSchema(schema)) && schema.format) properties.push({
        key: "format",
        value: schema.format,
        truncate: true
      });
      if (isNumberSchema(schema)) {
        if (isDefined(schema.exclusiveMinimum)) properties.push({
          key: "exclusive-minimum",
          prefix: `${translate("common.greaterThan")}: `,
          value: schema.exclusiveMinimum
        });
        if (isDefined(schema.minimum)) properties.push({
          key: "minimum",
          prefix: `${translate("common.min")}: `,
          value: schema.minimum
        });
        if (isDefined(schema.exclusiveMaximum)) properties.push({
          key: "exclusive-maximum",
          prefix: `${translate("common.lessThan")}: `,
          value: schema.exclusiveMaximum
        });
        if (isDefined(schema.maximum)) properties.push({
          key: "maximum",
          prefix: `${translate("common.max")}: `,
          value: schema.maximum
        });
        if (isDefined(schema.multipleOf)) properties.push({
          key: "multiple-of",
          prefix: `${translate("common.multipleOf")}: `,
          value: schema.multipleOf
        });
      }
      return properties;
    };
    const validationProperties = computed(() => {
      if (!valueRef.value) return [];
      const schema = valueRef.value;
      const properties = [];
      if (isArraySchema(schema)) {
        if (schema.minItems || schema.maxItems) properties.push({
          key: "array-range",
          value: `${schema.minItems || ""}…${schema.maxItems || ""}`
        });
        if (schema.uniqueItems) properties.push({
          key: "unique-items",
          value: `${translate("common.unique")}!`
        });
      }
      properties.push(...getLeafConstraints(schema));
      if (isArraySchema(schema) && schema.items) properties.push(...getLeafConstraints(resolve.schema(schema.items)));
      return properties;
    });
    const modelLink = computed(() => {
      if (!props.value) return null;
      if (props.hideModelNames) return null;
      if (props.modelName) return {
        schemaKey: props.modelName,
        label: props.modelName
      };
      const modelName = getModelNameFromSchema(props.value);
      if (modelName) return {
        schemaKey: modelName.schemaKey,
        label: modelName.label
      };
      if (isArraySchema(props.value) && props.value.items) {
        const itemName = getModelNameFromSchema(props.value.items);
        return itemName ? {
          schemaKey: itemName.schemaKey,
          label: `${itemName.label}[]`
        } : null;
      }
      return null;
    });
    const modelLinkable = computed(() => {
      var _a;
      return isModelLinkable((_a = modelLink.value) == null ? void 0 : _a.schemaKey, props.modelLinkOptions ?? {});
    });
    const shouldShowType = computed(() => {
      if (!props.value || !("type" in props.value)) return false;
      if (props.value.type === "array") return true;
      return !constValue.value;
    });
    const displayType = computed(() => {
      if (!props.value) return "";
      return getSchemaType(props.value);
    });
    const propertyNamesDetail = computed(() => {
      const schema = props.propertyNames;
      if (!schema) return;
      const parts = [getSchemaType(schema)];
      if ("format" in schema && typeof schema.format === "string") parts.push(schema.format);
      const detail = parts.filter(Boolean).join(" · ");
      return detail.length > 0 ? detail : void 0;
    });
    const exampleValue = computed(() => {
      if (props.value && "example" in props.value && props.value.example !== void 0) return props.value.example;
      if (props.value && isArraySchema(props.value)) {
        const itemsSchema = resolve.schema(props.value.items);
        if (itemsSchema && "example" in itemsSchema && itemsSchema.example !== void 0) return itemsSchema.example;
      }
    });
    const patternValue = computed(() => {
      const schema = valueRef.value;
      if (!schema) return;
      if (isStringSchema(schema) && schema.pattern) return schema.pattern;
      if (isArraySchema(schema) && schema.items) {
        const items = resolve.schema(schema.items);
        if (isStringSchema(items) && items.pattern) return items.pattern;
      }
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return openBlock(), createElementBlock("div", _hoisted_147, [
        _ctx.$slots.name ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["property-name", { deprecated: (_a = props.value) == null ? void 0 : _a.deprecated }])
        }, [renderSlot(_ctx.$slots, "name", {}, void 0, true)], 2)) : createCommentVNode("", true),
        props.isDiscriminator ? (openBlock(), createElementBlock("div", _hoisted_233, toDisplayString(unref(translate)("common.discriminator")), 1)) : createCommentVNode("", true),
        props.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          shouldShowType.value ? (openBlock(), createBlock(SchemaPropertyDetail_default, {
            key: 0,
            truncate: ""
          }, {
            default: withCtx(() => [
              createVNode(ScreenReader_default, null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.type")) + ":", 1)]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(displayType.value) + " ", 1),
              modelLink.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_cache[1] || (_cache[1] = createTextVNode(" · ", -1)), props.eventBus && modelLink.value.schemaKey && modelLinkable.value ? (openBlock(), createBlock(LinkButton_default, {
                key: 0,
                onClick: _cache[0] || (_cache[0] = ($event) => props.eventBus.emit("scroll-to:model-by-name", { name: modelLink.value.schemaKey }))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(modelLink.value.label), 1)]),
                _: 1
              })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(modelLink.value.label), 1)], 64))], 64)) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          propertyNamesDetail.value ? (openBlock(), createBlock(SchemaPropertyDetail_default, {
            key: 1,
            truncate: ""
          }, {
            prefix: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.keys")) + ":", 1)]),
            default: withCtx(() => [createTextVNode(" " + toDisplayString(propertyNamesDetail.value), 1)]),
            _: 1
          })) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(validationProperties.value, (property) => {
            return openBlock(), createBlock(SchemaPropertyDetail_default, {
              key: property.key,
              code: property.code,
              truncate: property.truncate
            }, createSlots({
              default: withCtx(() => [property.key === "format" ? (openBlock(), createBlock(ScreenReader_default, { key: 0 }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.format")) + ": ", 1)]),
                _: 1
              })) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(property.value), 1)]),
              _: 2
            }, [property.prefix ? {
              name: "prefix",
              fn: withCtx(() => [createTextVNode(toDisplayString(property.prefix), 1)]),
              key: "0"
            } : void 0]), 1032, ["code", "truncate"]);
          }), 128)),
          props.enum ? (openBlock(), createBlock(SchemaPropertyDetail_default, { key: 2 }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.enum")), 1)]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        props.additional ? (openBlock(), createElementBlock("div", _hoisted_324, [((_b = props.value) == null ? void 0 : _b["x-additionalPropertiesName"]) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(props.value["x-additionalPropertiesName"]), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(translate)("common.additionalProperties")), 1)], 64))])) : createCommentVNode("", true),
        ((_c = props.value) == null ? void 0 : _c.deprecated) ? (openBlock(), createElementBlock("div", _hoisted_417, [createVNode(unref(Badge_default), null, {
          default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.deprecated")), 1)]),
          _: 1
        })])) : createCommentVNode("", true),
        constValue.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_511, [createVNode(SchemaPropertyDetail_default, { truncate: "" }, {
          prefix: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.const")) + ": ", 1)]),
          default: withCtx(() => [createVNode(RenderString_default, { value: constValue.value }, null, 8, ["value"])]),
          _: 1
        })])) : (openBlock(), createElementBlock(Fragment, { key: 6 }, [((_d = props.value) == null ? void 0 : _d.nullable) === true ? (openBlock(), createBlock(SchemaPropertyDetail_default, { key: 0 }, {
          default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("common.nullable")), 1)]),
          _: 1
        })) : createCommentVNode("", true)], 64)),
        ((_e = props.value) == null ? void 0 : _e.writeOnly) ? (openBlock(), createElementBlock("div", _hoisted_64, toDisplayString(unref(translate)("common.writeOnly")), 1)) : ((_f = props.value) == null ? void 0 : _f.readOnly) ? (openBlock(), createElementBlock("div", _hoisted_74, toDisplayString(unref(translate)("common.readOnly")), 1)) : createCommentVNode("", true),
        props.required ? (openBlock(), createElementBlock("div", _hoisted_82, toDisplayString(unref(translate)("common.required")), 1)) : createCommentVNode("", true),
        createVNode(SchemaPropertyDefault_default, { value: (_g = props.value) == null ? void 0 : _g.default }, null, 8, ["value"]),
        patternValue.value ? (openBlock(), createBlock(SchemaPropertyPattern_default, {
          key: 10,
          pattern: patternValue.value
        }, null, 8, ["pattern"])) : createCommentVNode("", true),
        props.withExamples ? (openBlock(), createBlock(SchemaPropertyExamples_default, {
          key: 11,
          example: exampleValue.value,
          examples: (_h = props.value) == null ? void 0 : _h.examples
        }, null, 8, ["example", "examples"])) : createCommentVNode("", true)
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaPropertyHeading.vue.js
var SchemaPropertyHeading_default = _plugin_vue_export_helper_default2(SchemaPropertyHeading_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-6556c3e9"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue.script.js
var _hoisted_148 = {
  key: 0,
  class: "property-name-pattern-properties"
};
var _hoisted_234 = {
  key: 1,
  class: "property-name-additional-properties"
};
var _hoisted_325 = {
  key: 1,
  class: "property-description"
};
var _hoisted_418 = {
  key: 4,
  class: "children"
};
var _hoisted_512 = {
  key: 5,
  class: "children"
};
var SchemaProperty_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SchemaProperty",
  props: {
    is: {},
    schema: {},
    noncollapsible: { type: Boolean },
    level: { default: 0 },
    name: {},
    required: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    discriminator: {},
    description: {},
    hideModelNames: {
      type: Boolean,
      default: false
    },
    hideHeading: { type: Boolean },
    modelName: {},
    variant: {},
    breadcrumb: {},
    eventBus: {},
    options: {},
    propertyNamesEnum: {},
    propertyNamesSchema: {},
    schemaContext: {},
    compositionPath: {},
    compositionPathSegment: {},
    cycleKey: {}
  },
  setup(__props) {
    const SINGLE_ITEM_COMPOSITIONS = [
      "oneOf",
      "anyOf",
      "allOf"
    ];
    const props = __props;
    const dynamicScope = useDynamicScope();
    const optimizedValue = computed(() => optimizeValueForDisplay(resolveDynamicSchema(props.schema, dynamicScope)));
    const childBreadcrumb = computed(() => props.breadcrumb ? props.name ? [...props.breadcrumb, props.name] : props.breadcrumb : void 0);
    const currentCompositionPath = computed(() => props.compositionPathSegment ? [...props.compositionPath ?? [], props.compositionPathSegment] : props.compositionPath ?? []);
    const arrayItemsCompositionPath = computed(() => [...currentCompositionPath.value, "items"]);
    const shouldHaveLink = computed(() => props.level <= 2);
    const arrayValueWithBoundItems = computed(() => {
      const value = optimizedValue.value;
      if (!value || !isArraySchema(value) || !isDynamicRef(value.items)) return value;
      const bound = resolveDynamicRef(value.items.$dynamicRef, dynamicScope);
      return bound ? {
        ...value,
        items: bound
      } : value;
    });
    const hasComplexArrayItemsComputed = computed(() => hasComplexArrayItems(arrayValueWithBoundItems.value));
    const hasEnum = computed(() => enumValues.value.length > 0);
    const shouldRenderObjectProperties = computed(() => {
      const value = optimizedValue.value;
      if (!value) return false;
      if (!("properties" in value || "additionalProperties" in value)) return false;
      if ("allOf" in value) return false;
      const type = value.type;
      const isExplicitNonObject = typeof type === "string" && type !== "object";
      return isTypeObject(value) || !isExplicitNonObject;
    });
    const shouldRenderArrayOfObjects = computed(() => {
      const value = optimizedValue.value;
      if (!value || !isArraySchema(value) || typeof value.items !== "object") return false;
      return hasComplexArrayItemsComputed.value;
    });
    const enumValues = computed(() => getEnumValues(optimizedValue.value));
    const propertyDescription = computed(() => getPropertyDescription(optimizedValue.value));
    const displayDescription = computed(() => shouldDisplayDescription(optimizedValue.value, props.description));
    const objectSchemaForChildren = computed(() => {
      const value = optimizedValue.value;
      if (!value) return value;
      const { oneOf: _oneOf, anyOf: _anyOf, allOf: _allOf, not: _not, discriminator: _discriminator, ...objectSchema } = value;
      if (displayDescription.value && "description" in objectSchema) {
        const { description: _description, ...schemaWithoutDescription } = objectSchema;
        return schemaWithoutDescription;
      }
      return objectSchema;
    });
    const shouldDisplayHeadingComputed = computed(() => shouldDisplayHeading(optimizedValue.value, props.name, props.required));
    const compositionsToRender = computed(() => getCompositionsToRender(optimizedValue.value, props.options.document));
    const getCompositionDiscriminator = (composition) => {
      var _a, _b;
      return composition === "allOf" ? ((_a = props.schema) == null ? void 0 : _a.discriminator) ?? props.discriminator : (_b = props.schema) == null ? void 0 : _b.discriminator;
    };
    const resolvedArrayItems = computed(() => {
      const value = arrayValueWithBoundItems.value;
      if (!value || !isArraySchema(value) || typeof value.items !== "object") return;
      const items = resolve.schema(value.items);
      return SINGLE_ITEM_COMPOSITIONS.some((keyword) => {
        var _a;
        return Array.isArray(items == null ? void 0 : items[keyword]) && ((_a = items[keyword]) == null ? void 0 : _a.length) === 1;
      }) ? optimizeValueForDisplay(items) : items;
    });
    const arrayItemsCycleKey = computed(() => {
      const value = optimizedValue.value;
      if (!value || !isArraySchema(value)) return;
      return getCycleKey(value.items);
    });
    const isDiscriminatorProperty = computed(() => {
      var _a;
      return Boolean(props.name && ((_a = props.discriminator) == null ? void 0 : _a.propertyName) === props.name);
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(__props.is ?? "li"), { class: normalizeClass(["property", [`property--level-${__props.level}`, {
        "property--compact": __props.compact,
        "property--deprecated": (_a = optimizedValue.value) == null ? void 0 : _a.deprecated
      }]]) }, {
        default: withCtx(() => {
          var _a2;
          return [
            shouldDisplayHeadingComputed.value ? (openBlock(), createBlock(SchemaPropertyHeading_default, {
              key: 0,
              class: "group",
              enum: hasEnum.value,
              eventBus: __props.eventBus,
              hideModelNames: __props.hideModelNames,
              isDiscriminator: isDiscriminatorProperty.value,
              modelLinkOptions: {
                hideModels: __props.options.hideModels,
                document: __props.options.document
              },
              modelName: __props.modelName,
              propertyNames: __props.propertyNamesSchema,
              required: __props.required,
              value: optimizedValue.value
            }, createSlots({ _: 2 }, [__props.name ? {
              name: "name",
              fn: withCtx(() => [createVNode(unref(WithBreadcrumb_default), {
                breadcrumb: shouldHaveLink.value ? childBreadcrumb.value : void 0,
                eventBus: __props.eventBus
              }, {
                default: withCtx(() => [__props.variant === "patternProperties" ? (openBlock(), createElementBlock("span", _hoisted_148, [createVNode(unref(ScalarWrappingText_default), {
                  preset: "property",
                  text: __props.name
                }, null, 8, ["text"])])) : __props.variant === "additionalProperties" ? (openBlock(), createElementBlock("span", _hoisted_234, [createVNode(unref(ScalarWrappingText_default), {
                  preset: "property",
                  text: __props.name
                }, null, 8, ["text"])])) : (openBlock(), createBlock(unref(ScalarWrappingText_default), {
                  key: 2,
                  preset: "property",
                  text: __props.name
                }, null, 8, ["text"]))]),
                _: 1
              }, 8, ["breadcrumb", "eventBus"])]),
              key: "0"
            } : void 0, ((_a2 = optimizedValue.value) == null ? void 0 : _a2.example) !== void 0 ? {
              name: "example",
              fn: withCtx(() => [createTextVNode(" Example: " + toDisplayString(optimizedValue.value.example), 1)]),
              key: "1"
            } : void 0]), 1032, [
              "enum",
              "eventBus",
              "hideModelNames",
              "isDiscriminator",
              "modelLinkOptions",
              "modelName",
              "propertyNames",
              "required",
              "value"
            ])) : createCommentVNode("", true),
            displayDescription.value || propertyDescription.value ? (openBlock(), createElementBlock("div", _hoisted_325, [createVNode(unref(ScalarMarkdown_default), { value: displayDescription.value || propertyDescription.value || "" }, null, 8, ["value"])])) : createCommentVNode("", true),
            __props.propertyNamesEnum && __props.propertyNamesEnum.length > 0 ? (openBlock(), createBlock(SchemaEnums_default, {
              key: 2,
              propertyNames: "",
              value: { enum: __props.propertyNamesEnum }
            }, null, 8, ["value"])) : createCommentVNode("", true),
            enumValues.value.length > 0 && !shouldRenderArrayOfObjects.value ? (openBlock(), createBlock(SchemaEnums_default, {
              key: 3,
              value: optimizedValue.value
            }, null, 8, ["value"])) : createCommentVNode("", true),
            shouldRenderObjectProperties.value ? (openBlock(), createElementBlock("div", _hoisted_418, [createVNode(Schema_default, {
              breadcrumb: childBreadcrumb.value,
              compact: __props.compact,
              compositionPath: currentCompositionPath.value,
              cycleKey: __props.cycleKey,
              eventBus: __props.eventBus,
              hideModelNames: __props.hideModelNames,
              level: __props.level + 1,
              name: __props.name,
              noncollapsible: __props.noncollapsible,
              options: __props.options,
              schema: objectSchemaForChildren.value,
              schemaContext: __props.schemaContext
            }, null, 8, [
              "breadcrumb",
              "compact",
              "compositionPath",
              "cycleKey",
              "eventBus",
              "hideModelNames",
              "level",
              "name",
              "noncollapsible",
              "options",
              "schema",
              "schemaContext"
            ])])) : createCommentVNode("", true),
            shouldRenderArrayOfObjects.value && resolvedArrayItems.value ? (openBlock(), createElementBlock("div", _hoisted_512, [createVNode(Schema_default, {
              compact: __props.compact,
              compositionPath: arrayItemsCompositionPath.value,
              cycleKey: arrayItemsCycleKey.value,
              eventBus: __props.eventBus,
              hideModelNames: __props.hideModelNames,
              level: __props.level + 1,
              name: __props.name,
              noncollapsible: __props.noncollapsible,
              options: __props.options,
              schema: unref(resolve).schema(resolvedArrayItems.value),
              schemaContext: __props.schemaContext
            }, null, 8, [
              "compact",
              "compositionPath",
              "cycleKey",
              "eventBus",
              "hideModelNames",
              "level",
              "name",
              "noncollapsible",
              "options",
              "schema",
              "schemaContext"
            ])])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(compositionsToRender.value, (compositionData) => {
              return openBlock(), createBlock(SchemaComposition_default, {
                key: compositionData.composition,
                breadcrumb: __props.breadcrumb,
                compact: __props.compact,
                composition: compositionData.composition,
                compositionPath: currentCompositionPath.value,
                discriminator: getCompositionDiscriminator(compositionData.composition),
                eventBus: __props.eventBus,
                hideHeading: __props.hideHeading,
                hideModelNames: __props.hideModelNames,
                level: __props.level,
                name: __props.name,
                noncollapsible: __props.noncollapsible,
                options: __props.options,
                schema: compositionData.value,
                schemaContext: __props.schemaContext
              }, null, 8, [
                "breadcrumb",
                "compact",
                "composition",
                "compositionPath",
                "discriminator",
                "eventBus",
                "hideHeading",
                "hideModelNames",
                "level",
                "name",
                "noncollapsible",
                "options",
                "schema",
                "schemaContext"
              ]);
            }), 128)),
            createVNode(unref(SpecificationExtension_default), { value: optimizedValue.value }, null, 8, ["value"])
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Schema/SchemaProperty.vue.js
var SchemaProperty_default = _plugin_vue_export_helper_default2(SchemaProperty_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-933ce0d5"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Models/components/ClassicLayout.vue.script.js
var _hoisted_149 = {
  key: 0,
  class: "properties"
};
var _hoisted_235 = { key: 1 };
var ClassicLayout_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ClassicLayout",
  props: {
    id: {},
    name: {},
    schema: {},
    isCollapsed: { type: Boolean },
    eventBus: {},
    document: {},
    options: {}
  },
  setup(__props) {
    const { level: headingLevel } = useDocumentOutline("model");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SectionAccordion_default), {
        "aria-label": __props.schema.title ?? __props.name,
        modelValue: !__props.isCollapsed,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
            id: __props.id,
            open: value
          });
        })
      }, {
        title: withCtx(() => [createVNode(unref(Anchor_default), {
          class: "reference-models-anchor",
          eventBus: __props.eventBus,
          onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
            var _a;
            return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.id });
          })
        }, {
          default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
            default: withCtx(() => [createVNode(unref(SchemaHeading_default), {
              class: "reference-models-label",
              name: __props.schema.title ?? __props.name,
              value: __props.schema
            }, null, 8, ["name", "value"])]),
            _: 1
          }, 8, ["level"])]),
          _: 1
        }, 8, ["eventBus"])]),
        default: withCtx(() => ["properties" in __props.schema ? (openBlock(), createElementBlock("div", _hoisted_149, [(openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(__props.schema.properties ?? {}), ([property, value]) => {
          var _a;
          return openBlock(), createBlock(unref(SchemaProperty_default), {
            key: property,
            eventBus: __props.eventBus,
            hideModelNames: __props.options.hideModels,
            name: property,
            options: {
              ...__props.options,
              document: __props.document
            },
            required: (_a = __props.schema.required) == null ? void 0 : _a.includes(property),
            schema: unref(resolve).schema(value)
          }, null, 8, [
            "eventBus",
            "hideModelNames",
            "name",
            "options",
            "required",
            "schema"
          ]);
        }), 128))])) : (openBlock(), createElementBlock("div", _hoisted_235, [createVNode(unref(SchemaProperty_default), {
          eventBus: __props.eventBus,
          hideModelNames: __props.options.hideModels,
          options: {
            ...__props.options,
            document: __props.document
          },
          schema: __props.schema
        }, null, 8, [
          "eventBus",
          "hideModelNames",
          "options",
          "schema"
        ])]))]),
        _: 1
      }, 8, ["aria-label", "modelValue"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Models/components/ClassicLayout.vue.js
var ClassicLayout_default = _plugin_vue_export_helper_default2(ClassicLayout_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-df54aefe"]]);

// node_modules/@scalar/api-reference/dist/components/Section/CompactSection.vue.script.js
var _hoisted_150 = ["aria-label"];
var _hoisted_236 = [
  "id",
  "aria-controls",
  "aria-expanded",
  "aria-labelledby"
];
var _hoisted_326 = ["id"];
var CompactSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "CompactSection",
  props: {
    id: {},
    label: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "copyAnchorUrl"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const contentId = computed(() => `${__props.id}-content`);
    const labelId = useId();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        "aria-label": __props.label,
        class: "collapsible-section"
      }, [createBaseVNode("button", {
        id: __props.id,
        "aria-controls": __props.modelValue ? contentId.value : void 0,
        "aria-expanded": __props.modelValue,
        "aria-labelledby": unref(labelId),
        class: normalizeClass(["collapsible-section-trigger", { "collapsible-section-trigger-open": __props.modelValue }]),
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => emit("update:modelValue", !__props.modelValue))
      }, [createVNode(unref(ScalarIconCaretRight_default), {
        class: normalizeClass(["size-3 transition-transform duration-100", { "rotate-90": __props.modelValue }]),
        weight: "bold"
      }, null, 8, ["class"]), createVNode(unref(Anchor_default), {
        class: "collapsible-section-header",
        onCopyAnchorUrl: _cache[0] || (_cache[0] = () => emit("copyAnchorUrl"))
      }, {
        default: withCtx(() => [createBaseVNode("span", {
          id: unref(labelId),
          class: "contents"
        }, [renderSlot(_ctx.$slots, "heading", {}, void 0, true)], 8, _hoisted_326)]),
        _: 3
      })], 10, _hoisted_236), __props.modelValue ? (openBlock(), createBlock(Section_default, {
        key: 0,
        id: contentId.value,
        class: "collapsible-section-content",
        label: __props.label
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
        _: 3
      }, 8, ["id", "label"])) : createCommentVNode("", true)], 8, _hoisted_150);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/CompactSection.vue.js
var CompactSection_default = _plugin_vue_export_helper_default2(CompactSection_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ea5f870d"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Models/components/ModernLayout.vue.script.js
var ModernLayout_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ModernLayout",
  props: {
    id: {},
    name: {},
    schema: {},
    isCollapsed: { type: Boolean },
    eventBus: {},
    document: {},
    options: {}
  },
  setup(__props) {
    const { level: headingLevel } = useDocumentOutline("model");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CompactSection_default), {
        id: __props.id,
        key: __props.name,
        label: __props.name,
        modelValue: !__props.isCollapsed,
        onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.id });
        }),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
            id: __props.id,
            open: value
          });
        })
      }, {
        heading: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
          default: withCtx(() => [createVNode(unref(SchemaHeading_default), {
            name: __props.schema.title ?? __props.name,
            value: __props.schema
          }, null, 8, ["name", "value"])]),
          _: 1
        }, 8, ["level"])]),
        default: withCtx(() => [createVNode(unref(ScalarErrorBoundary_default), null, {
          default: withCtx(() => [createVNode(unref(Schema_default), {
            eventBus: __props.eventBus,
            hideModelNames: __props.options.hideModels,
            hideHeading: "",
            level: 1,
            noncollapsible: "",
            options: {
              ...__props.options,
              document: __props.document
            },
            schema: __props.schema
          }, null, 8, [
            "eventBus",
            "hideModelNames",
            "options",
            "schema"
          ])]),
          _: 1
        })]),
        _: 1
      }, 8, [
        "id",
        "label",
        "modelValue"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Models/components/ModernLayout.vue.js
var ModernLayout_default = ModernLayout_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Models/Model.vue.script.js
var Model_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Model",
  props: {
    id: {},
    name: {},
    options: {},
    schema: {},
    isCollapsed: { type: Boolean },
    eventBus: {},
    document: {}
  },
  setup(__props) {
    const section = useTemplateRef("section");
    useIntersection(section, () => {
      var _a;
      return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.id });
    });
    return (_ctx, _cache) => {
      return __props.schema ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "section",
        ref: section
      }, [__props.options.layout === "classic" ? (openBlock(), createBlock(ClassicLayout_default, {
        key: 0,
        id: __props.id,
        document: __props.document,
        eventBus: __props.eventBus,
        isCollapsed: __props.isCollapsed,
        name: __props.name,
        options: __props.options,
        schema: __props.schema
      }, null, 8, [
        "id",
        "document",
        "eventBus",
        "isCollapsed",
        "name",
        "options",
        "schema"
      ])) : (openBlock(), createBlock(ModernLayout_default, {
        key: 1,
        id: __props.id,
        document: __props.document,
        eventBus: __props.eventBus,
        isCollapsed: __props.isCollapsed,
        name: __props.name,
        options: __props.options,
        schema: __props.schema
      }, null, 8, [
        "id",
        "document",
        "eventBus",
        "isCollapsed",
        "name",
        "options",
        "schema"
      ]))], 512)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Models/Model.vue.js
var Model_default = Model_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue.script.js
var _hoisted_151 = { class: "section-accordion-wrapper" };
var _hoisted_237 = { class: "section-accordion-title" };
var SectionContainerAccordion_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SectionContainerAccordion",
  props: { modelValue: { type: Boolean } },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_151, [createVNode(unref(N), {
        as: "div",
        class: "section-accordion"
      }, {
        default: withCtx(() => [createVNode(unref(Q), {
          class: "section-accordion-button",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", !__props.modelValue))
        }, {
          default: withCtx(() => [createVNode(unref(ScalarIconCaretRight_default), { class: normalizeClass(["section-accordion-chevron size-5 transition-transform", { "rotate-90": __props.modelValue }]) }, null, 8, ["class"]), createBaseVNode("div", _hoisted_237, [renderSlot(_ctx.$slots, "title", {}, void 0, true)])]),
          _: 3
        }), __props.modelValue ? (openBlock(), createBlock(unref(V), {
          key: 0,
          class: "section-accordion-content",
          static: ""
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
          _: 3
        })) : createCommentVNode("", true)]),
        _: 3
      })]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Section/SectionContainerAccordion.vue.js
var SectionContainerAccordion_default = _plugin_vue_export_helper_default2(SectionContainerAccordion_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9419dd23"]]);

// node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue.script.js
var _hoisted_152 = {
  class: "show-more",
  type: "button"
};
var ShowMoreButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ShowMoreButton",
  setup(__props) {
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_152, [createTextVNode(toDisplayString(unref(translate)("actions.showMore")) + " ", 1), createVNode(unref(ScalarIconCaretDown_default), {
        class: "text-c-2 mt-0.25 size-3",
        weight: "bold"
      })]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/ShowMoreButton.vue.js
var ShowMoreButton_default = _plugin_vue_export_helper_default2(ShowMoreButton_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-bb0811ed"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Models/ModelTag.vue.script.js
var ModelTag_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ModelTag",
  props: {
    id: {},
    isCollapsed: { type: Boolean },
    eventBus: {},
    layout: {},
    modelsSectionLabel: { default: () => DEFAULT_MODELS_SECTION_LABEL }
  },
  setup(__props) {
    const { level: headingLevel } = useDocumentOutline("modelGroup");
    return (_ctx, _cache) => {
      return __props.layout === "modern" ? (openBlock(), createBlock(SectionContainer_default, { key: 0 }, {
        default: withCtx(() => [createVNode(unref(Section_default), {
          id: __props.id,
          "aria-label": __props.modelsSectionLabel,
          onIntersecting: _cache[1] || (_cache[1] = () => {
            var _a;
            return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.id });
          })
        }, {
          default: withCtx(() => [createVNode(unref(SectionHeader_default), null, {
            default: withCtx(() => [createVNode(SectionHeaderTag_default, { level: unref(headingLevel) }, {
              default: withCtx(() => [createTextVNode(toDisplayString(__props.modelsSectionLabel), 1)]),
              _: 1
            }, 8, ["level"])]),
            _: 1
          }), !__props.isCollapsed ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 0) : (openBlock(), createBlock(ShowMoreButton_default, {
            key: 1,
            id: __props.id,
            class: "top-0",
            onClick: _cache[0] || (_cache[0] = () => __props.eventBus.emit("toggle:nav-item", {
              id: __props.id,
              open: true
            }))
          }, null, 8, ["id"]))]),
          _: 3
        }, 8, ["id", "aria-label"])]),
        _: 3
      })) : (openBlock(), createBlock(SectionContainerAccordion_default, {
        key: 1,
        "aria-label": __props.modelsSectionLabel,
        class: "pb-12",
        modelValue: !__props.isCollapsed,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
            id: __props.id,
            open: __props.isCollapsed
          });
        })
      }, {
        title: withCtx(() => [createVNode(unref(SectionHeader_default), null, {
          default: withCtx(() => [createVNode(SectionHeaderTag_default, { level: unref(headingLevel) }, {
            default: withCtx(() => [createTextVNode(toDisplayString(__props.modelsSectionLabel), 1)]),
            _: 1
          }, 8, ["level"])]),
          _: 1
        })]),
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["aria-label", "modelValue"]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Models/ModelTag.vue.js
var ModelTag_default = ModelTag_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ClassicLayout.vue.script.js
var ClassicLayout_vue_vue_type_script_setup_true_lang_default2 = defineComponent({
  __name: "ClassicLayout",
  props: {
    tag: {},
    isCollapsed: { type: Boolean },
    eventBus: {},
    nested: { type: Boolean }
  },
  setup(__props) {
    const { level: headingLevel } = useDocumentOutline("tag");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SectionContainerAccordion_default), {
        "aria-label": __props.tag.title,
        class: normalizeClass(["tag-section", {
          "tag-section-group": __props.tag.isGroup,
          "tag-section-nested": __props.nested
        }]),
        modelValue: !__props.isCollapsed,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
            id: __props.tag.id,
            open: value
          });
        })
      }, {
        title: withCtx(() => {
          var _a;
          return [createVNode(unref(SectionHeader_default), { class: normalizeClass(["tag-name", { "tag-group-name": __props.tag.isGroup }]) }, {
            default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
              var _a2;
              return (_a2 = __props.eventBus) == null ? void 0 : _a2.emit("copy-url:nav-item", { id: __props.tag.id });
            }) }, {
              default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
                default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title), 1)]),
                _: 1
              }, 8, ["level"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["class"]), createVNode(unref(ScalarMarkdown_default), {
            class: "tag-description",
            value: (_a = __props.tag) == null ? void 0 : _a.description,
            withImages: ""
          }, null, 8, ["value"])];
        }),
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
        _: 3
      }, 8, [
        "aria-label",
        "class",
        "modelValue"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ClassicLayout.vue.js
var ClassicLayout_default2 = _plugin_vue_export_helper_default2(ClassicLayout_vue_vue_type_script_setup_true_lang_default2, [["__scopeId", "data-v-fafcaa8a"]]);

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/ChannelsList.vue.script.js
var _hoisted_153 = ["aria-label"];
var _hoisted_238 = ["onClick"];
var ChannelsList_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ChannelsList",
  props: {
    tag: {},
    eventBus: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const channels = computed(() => {
      var _a;
      return ((_a = __props.tag.children) == null ? void 0 : _a.filter((child) => child.type === "asyncapi-channel")) ?? [];
    });
    return (_ctx, _cache) => {
      return channels.value.length ? (openBlock(), createBlock(unref(ScalarCard_default), {
        key: 0,
        class: "channels-card"
      }, {
        default: withCtx(() => [createVNode(unref(ScalarCardHeader_default), { muted: "" }, {
          default: withCtx(() => [createVNode(ScreenReader_default, null, {
            default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title), 1)]),
            _: 1
          }), createTextVNode(" " + toDisplayString(unref(translate)("navigation.channels")), 1)]),
          _: 1
        }), createVNode(unref(ScalarCardSection_default), { class: "custom-scroll max-h-[60vh]" }, {
          default: withCtx(() => [createBaseVNode("ul", {
            "aria-label": unref(translate)("navigation.channels"),
            class: "channels"
          }, [(openBlock(true), createElementBlock(Fragment, null, renderList(channels.value, (channel) => {
            return openBlock(), createElementBlock("li", {
              key: channel.id,
              class: "contents"
            }, [createBaseVNode("a", {
              class: "channel",
              onClick: withModifiers(() => {
                var _a;
                return (_a = __props.eventBus) == null ? void 0 : _a.emit("scroll-to:nav-item", { id: channel.id });
              }, ["prevent"])
            }, toDisplayString(channel.title || channel.channelAddress), 9, _hoisted_238)]);
          }), 128))], 8, _hoisted_153)]),
          _: 1
        })]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/ChannelsList.vue.js
var ChannelsList_default = _plugin_vue_export_helper_default2(ChannelsList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-817abeb3"]]);

// node_modules/@scalar/api-reference/dist/components/HttpMethod/HttpMethod.vue.script.js
var HttpMethod_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "HttpMethod",
  props: {
    as: {},
    property: {},
    short: { type: Boolean },
    method: {}
  },
  setup(__props) {
    const props = __props;
    const httpMethodInfo = computed(() => getHttpMethodInfo(String(props.method || "")));
    const normalized = computed(() => normalizeHttpMethod(props.method));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.as ?? "span"), {
        class: "uppercase",
        style: normalizeStyle({ [__props.property || "color"]: httpMethodInfo.value.colorVar })
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createTextVNode(" " + toDisplayString(__props.short ? httpMethodInfo.value.short : normalized.value), 1)]),
        _: 3
      }, 8, ["style"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/HttpMethod/HttpMethod.vue.js
var HttpMethod_default2 = HttpMethod_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsListItem.vue.script.js
var OperationsListItem_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OperationsListItem",
  props: {
    operation: {},
    isCollapsed: { type: Boolean },
    eventBus: {}
  },
  setup(__props) {
    const pathOrTitle = computed(() => {
      if ("path" in __props.operation) return __props.operation.path;
      return __props.operation.title;
    });
    const isWebhook = (_operation) => _operation.type === "webhook";
    const { level: headingLevel } = useDocumentOutline("operation");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        key: __props.operation.id,
        class: "contents"
      }, [__props.isCollapsed ? (openBlock(), createBlock(unref(SectionHeaderTag_default), {
        key: 0,
        class: "sr-only",
        level: unref(headingLevel)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(__props.operation.title) + " (Hidden) ", 1)]),
        _: 1
      }, 8, ["level"])) : createCommentVNode("", true), createBaseVNode("a", {
        class: "endpoint",
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("scroll-to:nav-item", { id: __props.operation.id });
        }, ["prevent"]))
      }, [createVNode(unref(HttpMethod_default2), {
        class: "endpoint-method items-center justify-end gap-2",
        method: __props.operation.method
      }, {
        default: withCtx(() => [isWebhook(__props.operation) ? (openBlock(), createBlock(unref(ScalarIconWebhooksLogo_default), {
          key: 0,
          class: "size-3.5",
          style: normalizeStyle({ color: unref(getHttpMethodInfo)(__props.operation.method).colorVar })
        }, null, 8, ["style"])) : createCommentVNode("", true)]),
        _: 1
      }, 8, ["method"]), createBaseVNode("span", { class: normalizeClass(["endpoint-path", { deprecated: __props.operation.isDeprecated }]) }, toDisplayString(pathOrTitle.value), 3)])]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsListItem.vue.js
var OperationsListItem_default = _plugin_vue_export_helper_default2(OperationsListItem_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-d54500d7"]]);

// node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsList.vue.script.js
var _hoisted_154 = ["aria-label"];
var OperationsList_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OperationsList",
  props: {
    tag: {},
    eventBus: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const operationsAndWebhooks = computed(() => {
      var _a;
      return ((_a = __props.tag.children) == null ? void 0 : _a.filter((child) => child.type === "operation" || child.type === "webhook")) ?? [];
    });
    return (_ctx, _cache) => {
      var _a;
      return __props.tag.children && ((_a = __props.tag.children) == null ? void 0 : _a.length) > 0 ? (openBlock(), createBlock(unref(ScalarCard_default), {
        key: 0,
        class: "endpoints-card"
      }, {
        default: withCtx(() => [createVNode(unref(ScalarCardHeader_default), { muted: "" }, {
          default: withCtx(() => [createVNode(ScreenReader_default, null, {
            default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title), 1)]),
            _: 1
          }), createTextVNode(" " + toDisplayString(__props.tag.isWebhooks ? unref(translate)("navigation.webhooks") : unref(translate)("navigation.operations")), 1)]),
          _: 1
        }), createVNode(unref(ScalarCardSection_default), { class: "custom-scroll max-h-[60vh]" }, {
          default: withCtx(() => [createBaseVNode("ul", {
            "aria-label": unref(translate)("navigation.endpoints", { name: __props.tag.title }),
            class: "endpoints"
          }, [(openBlock(true), createElementBlock(Fragment, null, renderList(operationsAndWebhooks.value, (operationOrWebhook) => {
            return openBlock(), createBlock(OperationsListItem_default, {
              key: operationOrWebhook.id,
              eventBus: __props.eventBus,
              operation: operationOrWebhook
            }, null, 8, ["eventBus", "operation"]);
          }), 128))], 8, _hoisted_154)]),
          _: 1
        })]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/OperationsList/OperationsList.vue.js
var OperationsList_default = _plugin_vue_export_helper_default2(OperationsList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0315c99b"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Tags/components/TagSection.vue.script.js
var TagSection_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "TagSection",
  props: {
    tag: {},
    headingLevel: { default: 1 },
    headerId: {},
    isCollapsed: { type: Boolean },
    eventBus: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const hasChannels = computed(() => {
      var _a;
      return ((_a = __props.tag.children) == null ? void 0 : _a.some((child) => child.type === "asyncapi-channel")) ?? false;
    });
    return (_ctx, _cache) => {
      return __props.tag ? (openBlock(), createBlock(unref(Section_default), {
        key: 0,
        id: __props.tag.id,
        role: "none",
        onIntersecting: _cache[1] || (_cache[1] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.tag.id });
        })
      }, {
        default: withCtx(() => [
          createVNode(unref(SectionHeader_default), null, {
            default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
              var _a;
              return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.tag.id });
            }) }, {
              default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
                id: __props.headerId,
                level: __props.headingLevel
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(__props.tag.title) + " ", 1), __props.isCollapsed ? (openBlock(), createBlock(ScreenReader_default, { key: 0 }, {
                  default: withCtx(() => [createTextVNode(" (" + toDisplayString(unref(translate)("navigation.collapsed")) + ") ", 1)]),
                  _: 1
                })) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["id", "level"])]),
              _: 1
            })]),
            _: 1
          }),
          createVNode(unref(SectionContent_default), null, {
            default: withCtx(() => [createVNode(unref(SectionColumns_default), null, {
              default: withCtx(() => [createVNode(unref(SectionColumn_default), null, {
                default: withCtx(() => {
                  var _a;
                  return [createVNode(unref(ScalarMarkdown_default), {
                    clamp: __props.isCollapsed ? 7 : void 0,
                    value: ((_a = __props.tag) == null ? void 0 : _a.description) ?? "",
                    withImages: ""
                  }, null, 8, ["clamp", "value"])];
                }),
                _: 1
              }), createVNode(unref(SectionColumn_default), null, {
                default: withCtx(() => [hasChannels.value ? (openBlock(), createBlock(ChannelsList_default, {
                  key: 0,
                  eventBus: __props.eventBus,
                  tag: __props.tag
                }, null, 8, ["eventBus", "tag"])) : (openBlock(), createBlock(unref(OperationsList_default), {
                  key: 1,
                  eventBus: __props.eventBus,
                  tag: __props.tag
                }, null, 8, ["eventBus", "tag"]))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }),
          createVNode(unref(SpecificationExtension_default), { value: __props.tag.xKeys }, null, 8, ["value"])
        ]),
        _: 1
      }, 8, ["id"])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tags/components/TagSection.vue.js
var TagSection_default = TagSection_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ModernLayout.vue.script.js
var _hoisted_155 = {
  key: 2,
  class: "contents divide-y"
};
var ModernLayout_vue_vue_type_script_setup_true_lang_default2 = defineComponent({
  __name: "ModernLayout",
  props: {
    tag: {},
    moreThanOneTag: { type: Boolean },
    isCollapsed: { type: Boolean },
    eventBus: {},
    nested: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { translate } = useLocalization();
    const headerId = useId();
    const moreThanOneDefaultTag = computed(() => {
      var _a, _b;
      return __props.moreThanOneTag || ((_a = __props.tag) == null ? void 0 : _a.title) !== "default" || ((_b = __props.tag) == null ? void 0 : _b.description) !== "";
    });
    const hasChildren = computed(() => {
      var _a, _b;
      return (((_b = (_a = __props.tag) == null ? void 0 : _a.children) == null ? void 0 : _b.length) ?? 0) > 0;
    });
    const respectsCollapse = computed(() => __props.moreThanOneTag || __props.nested);
    const sectionCollapsed = computed(() => __props.isCollapsed && respectsCollapse.value);
    const showMore = computed(() => sectionCollapsed.value && hasChildren.value);
    const hasCollapsedSurface = computed(() => showMore.value && !__props.nested);
    const { level: headingLevel } = useDocumentOutline("tag");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SectionContainer_default), {
        "aria-labelledby": unref(headerId),
        class: normalizeClass(["tag-section-container", {
          "tag-section-collapsed": hasCollapsedSurface.value,
          "tag-section-nested": __props.nested
        }]),
        role: "region"
      }, {
        default: withCtx(() => [
          moreThanOneDefaultTag.value ? (openBlock(), createBlock(TagSection_default, {
            key: 0,
            headingLevel: unref(headingLevel),
            eventBus: __props.eventBus,
            headerId: unref(headerId),
            isCollapsed: __props.isCollapsed,
            tag: __props.tag
          }, null, 8, [
            "headingLevel",
            "eventBus",
            "headerId",
            "isCollapsed",
            "tag"
          ])) : createCommentVNode("", true),
          showMore.value ? (openBlock(), createBlock(ShowMoreButton_default, {
            key: 1,
            id: __props.tag.id,
            "aria-label": unref(translate)("navigation.showAllEndpoints", { name: __props.tag.title }),
            onClick: _cache[0] || (_cache[0] = () => {
              var _a;
              return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
                id: __props.tag.id,
                open: true
              });
            })
          }, null, 8, ["id", "aria-label"])) : createCommentVNode("", true),
          !sectionCollapsed.value ? (openBlock(), createElementBlock("div", _hoisted_155, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["aria-labelledby", "class"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tags/components/ModernLayout.vue.js
var ModernLayout_default2 = _plugin_vue_export_helper_default2(ModernLayout_vue_vue_type_script_setup_true_lang_default2, [["__scopeId", "data-v-b6a490f4"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Tags/Tag.vue.script.js
var Tag_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Tag",
  props: {
    tag: {},
    layout: {},
    moreThanOneTag: { type: Boolean },
    isCollapsed: { type: Boolean },
    eventBus: {},
    nested: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.layout === "classic" ? (openBlock(), createBlock(ClassicLayout_default2, {
        key: 0,
        eventBus: __props.eventBus,
        isCollapsed: __props.isCollapsed,
        layout: __props.layout,
        nested: __props.nested,
        tag: __props.tag
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "eventBus",
        "isCollapsed",
        "layout",
        "nested",
        "tag"
      ])) : (openBlock(), createBlock(ModernLayout_default2, {
        key: 1,
        eventBus: __props.eventBus,
        isCollapsed: __props.isCollapsed,
        layout: __props.layout,
        moreThanOneTag: __props.moreThanOneTag,
        nested: __props.nested,
        tag: __props.tag
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "eventBus",
        "isCollapsed",
        "layout",
        "moreThanOneTag",
        "nested",
        "tag"
      ]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Tags/Tag.vue.js
var Tag_default = Tag_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Lazy/Lazy.vue.script.js
var _hoisted_156 = ["id", "data-placeholder"];
var PLACEHOLDER_HEIGHT_PX = 760;
var VIEWPORT_OVERSCAN_PX = 1200;
var Lazy_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Lazy",
  props: {
    id: {},
    expanded: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const VIEWPORT_ROOT_MARGIN = `${VIEWPORT_OVERSCAN_PX}px 0px`;
    const { isReady } = useLazyBus(__props.id);
    const lazyContainerRef = ref(null);
    const placeholderHeight = ref(getLazyPlaceholderHeight(__props.id) ?? PLACEHOLDER_HEIGHT_PX);
    let contentResizeObserver = null;
    const shouldRender = computed(() => isReady.value || __props.expanded);
    onMounted(() => {
      if (typeof window === "undefined") return;
      if (!("IntersectionObserver" in window)) {
        requestLazyRender(__props.id, true);
        return;
      }
      useIntersectionObserver(lazyContainerRef, ([entry]) => {
        if ((entry == null ? void 0 : entry.isIntersecting) && !isReady.value) requestLazyRender(__props.id, true);
      }, { rootMargin: VIEWPORT_ROOT_MARGIN });
    });
    watch(() => shouldRender.value, (rendered, wasRendered) => {
      if (wasRendered && !rendered && lazyContainerRef.value) {
        const h2 = lazyContainerRef.value.offsetHeight;
        if (Number.isFinite(h2) && h2 > 0) {
          placeholderHeight.value = h2;
          setLazyPlaceholderHeight(__props.id, h2);
        }
      }
    }, { flush: "pre" });
    watch(() => shouldRender.value, (rendered) => {
      if (!rendered) {
        contentResizeObserver == null ? void 0 : contentResizeObserver.disconnect();
        contentResizeObserver = null;
        return;
      }
      nextTick(() => {
        if (!lazyContainerRef.value || typeof ResizeObserver === "undefined") return;
        if (!contentResizeObserver) contentResizeObserver = new ResizeObserver(() => {
          if (!lazyContainerRef.value) return;
          const h3 = lazyContainerRef.value.offsetHeight;
          if (Number.isFinite(h3) && h3 > 0) {
            placeholderHeight.value = h3;
            setLazyPlaceholderHeight(__props.id, h3);
          }
        });
        contentResizeObserver.observe(lazyContainerRef.value);
        const h2 = lazyContainerRef.value.offsetHeight;
        if (Number.isFinite(h2) && h2 > 0) {
          placeholderHeight.value = h2;
          setLazyPlaceholderHeight(__props.id, h2);
        }
      });
    }, { immediate: true });
    onBeforeUnmount(() => {
      contentResizeObserver == null ? void 0 : contentResizeObserver.disconnect();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: !shouldRender.value ? __props.id : void 0,
        ref_key: "lazyContainerRef",
        ref: lazyContainerRef,
        "data-placeholder": !shouldRender.value,
        "data-testid": "lazy-container",
        style: normalizeStyle({ height: shouldRender.value ? void 0 : `${placeholderHeight.value}px` })
      }, [shouldRender.value ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 0) : createCommentVNode("", true)], 12, _hoisted_156);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Lazy/Lazy.vue.js
var Lazy_default = Lazy_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/ContentTypeSelect.vue.script.js
var ContentTypeSelect_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ContentTypeSelect",
  props: mergeModels({ content: {} }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const { translate } = useLocalization();
    const selectedContentType = useModel(__props, "modelValue");
    const contentTypes = computed(() => Object.keys(__props.content ?? {}));
    const selectedOption = computed({
      get: () => options.value.find((option) => option.id === selectedContentType.value),
      set: (option) => {
        if (option) selectedContentType.value = option.id;
      }
    });
    const options = computed(() => {
      return contentTypes.value.map((type) => ({
        id: type,
        label: type
      }));
    });
    const contentTypeSelect = cva({
      base: "font-normal text-c-2 bg-b-1 py-1 flex items-center gap-1 rounded-full text-xs leading-none border",
      variants: { dropdown: {
        true: "hover:text-c-1 pl-2 pr-1.5 font-medium cursor-pointer",
        false: "px-2"
      } }
    });
    return (_ctx, _cache) => {
      return contentTypes.value.length > 1 ? (openBlock(), createBlock(unref(ScalarListbox_default), {
        key: 0,
        modelValue: selectedOption.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedOption.value = $event),
        options: options.value,
        placement: "bottom-end",
        teleport: "",
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["stop"]))
      }, {
        default: withCtx(({ open }) => [createVNode(unref(ScalarButton_default), mergeProps({
          class: ["h-fit", unref(contentTypeSelect)({ dropdown: true })],
          variant: "ghost"
        }, _ctx.$attrs, { onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])) }), {
          default: withCtx(() => [
            createVNode(ScreenReader_default, null, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.selectedContentType")) + ": ", 1)]),
              _: 1
            }),
            createBaseVNode("span", null, toDisplayString(selectedContentType.value), 1),
            createVNode(unref(ScalarIconCaretDown_default), {
              class: normalizeClass(["size-2.75 transition-transform duration-100", { "rotate-180": open }]),
              weight: "bold"
            }, null, 8, ["class"])
          ]),
          _: 2
        }, 1040, ["class"])]),
        _: 1
      }, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        class: ["selected-content-type", unref(contentTypeSelect)({ dropdown: false })]
      }, _ctx.$attrs, { tabindex: "0" }), [createBaseVNode("span", null, toDisplayString(selectedContentType.value), 1)], 16));
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/ContentTypeSelect.vue.js
var ContentTypeSelect_default = ContentTypeSelect_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/Header.vue.script.js
var Header_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Header",
  props: {
    header: {},
    name: {},
    breadcrumb: {},
    eventBus: {},
    document: {},
    orderSchemaPropertiesBy: {},
    orderRequiredPropertiesFirst: { type: Boolean },
    expandAllSchemaProperties: { type: Boolean },
    hideModels: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return "schema" in __props.header && __props.header.schema ? (openBlock(), createBlock(SchemaProperty_default, {
        key: 0,
        breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "headers"] : void 0,
        description: __props.header.description,
        eventBus: __props.eventBus,
        name: __props.name,
        options: {
          orderRequiredPropertiesFirst: __props.orderRequiredPropertiesFirst,
          orderSchemaPropertiesBy: __props.orderSchemaPropertiesBy,
          expandAllSchemaProperties: __props.expandAllSchemaProperties,
          hideModels: __props.hideModels,
          document: __props.document
        },
        schema: unref(getResolvedRef)(__props.header.schema)
      }, null, 8, [
        "breadcrumb",
        "description",
        "eventBus",
        "name",
        "options",
        "schema"
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/Header.vue.js
var Header_default = Header_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/Headers.vue.script.js
var Headers_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Headers",
  props: {
    headers: {},
    breadcrumb: {},
    eventBus: {},
    document: {},
    orderRequiredPropertiesFirst: { type: Boolean },
    orderSchemaPropertiesBy: {},
    expandAllSchemaProperties: { type: Boolean },
    hideModels: { type: Boolean }
  },
  setup(__props) {
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N), null, {
        default: withCtx(({ open }) => [createBaseVNode("div", { class: normalizeClass(["headers-card headers-card--compact", [{ "headers-card--open": open }]]) }, [createBaseVNode("div", { class: normalizeClass(["headers-properties", { "headers-properties-open": open }]) }, [createVNode(unref(Q), {
          class: "headers-card-title headers-card-title--compact",
          style: { top: `calc(var(--refs-viewport-offset)))` }
        }, {
          default: withCtx(() => [createVNode(unref(ScalarIcon_default), {
            class: normalizeClass(["headers-card-title-icon", { "headers-card-title-icon--open": open }]),
            icon: "Add",
            size: "sm"
          }, null, 8, ["class"]), open ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(translate)("operation.hideHeaders")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(translate)("operation.showHeaders")), 1)], 64))]),
          _: 2
        }, 1024), createVNode(unref(V), null, {
          default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, (header, key) => {
            return openBlock(), createBlock(Header_default, {
              key,
              breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "headers"] : void 0,
              document: __props.document,
              eventBus: __props.eventBus,
              expandAllSchemaProperties: __props.expandAllSchemaProperties,
              header: unref(getResolvedRef)(header),
              hideModels: __props.hideModels,
              name: key,
              orderRequiredPropertiesFirst: __props.orderRequiredPropertiesFirst,
              orderSchemaPropertiesBy: __props.orderSchemaPropertiesBy
            }, null, 8, [
              "breadcrumb",
              "document",
              "eventBus",
              "expandAllSchemaProperties",
              "header",
              "hideModels",
              "name",
              "orderRequiredPropertiesFirst",
              "orderSchemaPropertiesBy"
            ]);
          }), 128))]),
          _: 1
        })], 2)], 2)]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/Headers.vue.js
var Headers_default = _plugin_vue_export_helper_default2(Headers_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9ba640f2"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/components/helpers/get-parameter-examples.js
var filterUndefined = (example) => example !== void 0;
var getParameterExamples = ({ parameter, schemaExamples, contentExamples }) => {
  const paramExamples = "examples" in parameter && isObjectLike(parameter.examples) ? parameter.examples : {};
  const recordExamples = Object.values({
    ...paramExamples,
    ...isObjectLike(contentExamples) ? contentExamples : {}
  }).filter(filterUndefined);
  const fallbackExample = recordExamples.length === 0 && "example" in parameter && parameter.example !== void 0 ? [parameter.example] : [];
  const arrayExamples = (schemaExamples ?? fallbackExample).filter(filterUndefined);
  return [...recordExamples, ...arrayExamples];
};

// node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterListItem.vue.script.js
var _hoisted_157 = { class: "parameter-item group/parameter-item" };
var _hoisted_239 = { class: "parameter-item-name min-w-0" };
var _hoisted_327 = {
  key: 1,
  class: "flex-1"
};
var ParameterListItem_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ParameterListItem",
  props: {
    parameter: {},
    name: {},
    breadcrumb: {},
    eventBus: {},
    collapsableItems: { type: Boolean },
    document: {},
    options: {}
  },
  emits: ["update:selectedContentType"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const truncated = ref(false);
    const schema = computed(() => "schema" in __props.parameter && __props.parameter.schema ? getResolvedRef(__props.parameter.schema) : null);
    const content = computed(() => {
      if (!("content" in __props.parameter) || !__props.parameter.content) return null;
      if (Object.keys(__props.parameter.content).length === 0) return null;
      return __props.parameter.content;
    });
    const selectedContentType = ref(Object.keys(content.value || {})[0] ?? "");
    watch(selectedContentType, (type) => {
      emit("update:selectedContentType", type);
    });
    const headers = computed(() => "headers" in __props.parameter && __props.parameter.headers ? __props.parameter.headers : null);
    const baseSchema = computed(() => {
      var _a, _b;
      return content.value ? (_b = (_a = content.value) == null ? void 0 : _a[selectedContentType.value]) == null ? void 0 : _b.schema : "schema" in __props.parameter && __props.parameter.schema ? __props.parameter.schema : null;
    });
    const schemaModelName = computed(() => {
      const raw = baseSchema.value;
      if (!raw) return null;
      if ("$ref" in raw) return getRefName(raw.$ref);
      return null;
    });
    const value = computed(() => {
      var _a, _b, _c, _d;
      const base = baseSchema.value;
      const resolvedBase = content.value ? getResolvedRef(base) : schema.value;
      const deprecated = "deprecated" in __props.parameter ? __props.parameter.deprecated : (_a = schema.value) == null ? void 0 : _a.deprecated;
      const examples = getParameterExamples({
        parameter: __props.parameter,
        schemaExamples: (_b = schema.value) == null ? void 0 : _b.examples,
        contentExamples: (_d = (_c = content.value) == null ? void 0 : _c[selectedContentType.value]) == null ? void 0 : _d.examples
      });
      return {
        ...resolvedBase,
        deprecated,
        examples
      };
    });
    const shouldCollapse = computed(() => Boolean(content.value || headers.value || schema.value || truncated.value));
    const schemaBreadcrumb = computed(() => __props.collapsableItems && __props.breadcrumb && __props.name ? [...__props.breadcrumb, __props.name] : __props.breadcrumb);
    const isOnScrollTargetPath = computed(() => {
      var _a;
      const path = (_a = schemaBreadcrumb.value) == null ? void 0 : _a.join(".");
      if (!path) return false;
      const target = scrollTargetId.value;
      return target === path || target.startsWith(`${path}.`);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_157, [createVNode(unref(N), { defaultOpen: isOnScrollTargetPath.value }, {
        default: withCtx(({ open }) => [
          __props.collapsableItems ? (openBlock(), createBlock(resolveDynamicComponent(shouldCollapse.value ? unref(Q) : "div"), {
            key: 0,
            class: normalizeClass(["parameter-item-trigger", { "parameter-item-trigger-open": open }])
          }, {
            default: withCtx(() => [createBaseVNode("div", _hoisted_239, [shouldCollapse.value ? (openBlock(), createBlock(unref(ScalarIconCaretRight_default), {
              key: 0,
              class: normalizeClass(["parameter-item-icon size-3 transition-transform duration-100", { "rotate-90": open }]),
              weight: "bold"
            }, null, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", null, [createVNode(unref(ScalarWrappingText_default), {
              preset: "property",
              text: __props.name
            }, null, 8, ["text"])])]), !open && __props.parameter.description ? (openBlock(), createBlock(unref(ScalarMarkdownSummary_default), {
              key: 0,
              truncated: truncated.value,
              "onUpdate:truncated": _cache[0] || (_cache[0] = ($event) => truncated.value = $event),
              class: "parameter-item-description-summary min-w-0 flex-1",
              controlled: "",
              value: __props.parameter.description
            }, null, 8, ["truncated", "value"])) : (openBlock(), createElementBlock("div", _hoisted_327))]),
            _: 2
          }, 1032, ["class"])) : createCommentVNode("", true),
          createVNode(unref(V), {
            class: "parameter-item-container parameter-item-container-markdown",
            static: !__props.collapsableItems
          }, {
            default: withCtx(() => [
              __props.collapsableItems && __props.parameter.description ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
                key: 0,
                class: "parameter-item-description",
                value: __props.parameter.description
              }, null, 8, ["value"])) : createCommentVNode("", true),
              headers.value ? (openBlock(), createBlock(Headers_default, {
                key: 1,
                breadcrumb: __props.breadcrumb,
                document: __props.document,
                eventBus: __props.eventBus,
                expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
                headers: headers.value,
                hideModels: __props.options.hideModels,
                orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
                orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy
              }, null, 8, [
                "breadcrumb",
                "document",
                "eventBus",
                "expandAllSchemaProperties",
                "headers",
                "hideModels",
                "orderRequiredPropertiesFirst",
                "orderSchemaPropertiesBy"
              ])) : createCommentVNode("", true),
              createVNode(SchemaProperty_default, {
                is: "div",
                breadcrumb: schemaBreadcrumb.value,
                compact: "",
                description: __props.collapsableItems ? "" : __props.parameter.description,
                eventBus: __props.eventBus,
                hideWriteOnly: true,
                modelName: schemaModelName.value,
                name: __props.collapsableItems ? "" : __props.name,
                noncollapsible: true,
                options: {
                  hideWriteOnly: true,
                  orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
                  orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
                  expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
                  hideModels: __props.options.hideModels,
                  document: __props.document
                },
                required: "required" in __props.parameter && __props.parameter.required,
                schema: value.value
              }, null, 8, [
                "breadcrumb",
                "description",
                "eventBus",
                "modelName",
                "name",
                "options",
                "required",
                "schema"
              ])
            ]),
            _: 1
          }, 8, ["static"]),
          shouldCollapse.value && content.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["absolute top-[calc(10px+0.5lh)] right-0 z-0 flex -translate-y-1/2 items-center text-base", { "opacity-0 group-focus-within/parameter-item:opacity-100 group-hover/parameter-item:opacity-100": !open }])
          }, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "from-b-1 absolute inset-y-0 -left-6 -z-1 w-8 bg-linear-to-l from-40% to-transparent" }, null, -1)), createVNode(ContentTypeSelect_default, {
            modelValue: selectedContentType.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedContentType.value = $event),
            content: content.value
          }, null, 8, ["modelValue", "content"])], 2)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["defaultOpen"])]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterListItem.vue.js
var ParameterListItem_default = _plugin_vue_export_helper_default2(ParameterListItem_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ce052837"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterList.vue.script.js
var _hoisted_158 = {
  key: 0,
  class: "mt-6"
};
var _hoisted_240 = ["id"];
var _hoisted_328 = ["aria-labelledby"];
var ParameterList_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ParameterList",
  props: {
    parameters: {},
    breadcrumb: {},
    eventBus: {},
    collapsableItems: { type: Boolean },
    document: {},
    options: {}
  },
  setup(__props) {
    const id = useId();
    return (_ctx, _cache) => {
      var _a;
      return ((_a = __props.parameters) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_158, [createBaseVNode("div", {
        id: unref(id),
        class: "text-c-1 mt-3 mb-3 text-lg leading-[1.45] font-medium"
      }, [renderSlot(_ctx.$slots, "title")], 8, _hoisted_240), createBaseVNode("ul", {
        "aria-labelledby": unref(id),
        class: "mb-3 list-none p-0 text-sm"
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.parameters, (item) => {
        return openBlock(), createBlock(ParameterListItem_default, {
          key: item.name,
          breadcrumb: __props.breadcrumb,
          collapsableItems: __props.collapsableItems,
          document: __props.document,
          eventBus: __props.eventBus,
          name: item.name,
          options: __props.options,
          parameter: item
        }, null, 8, [
          "breadcrumb",
          "collapsableItems",
          "document",
          "eventBus",
          "name",
          "options",
          "parameter"
        ]);
      }), 128))], 8, _hoisted_328)])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/ParameterList.vue.js
var ParameterList_default = ParameterList_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiLabels.vue.script.js
var _hoisted_159 = {
  key: 0,
  class: "async-api-labels"
};
var _hoisted_241 = { class: "sr-only" };
var _hoisted_329 = { class: "sr-only" };
var AsyncApiLabels_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AsyncApiLabels",
  props: {
    servers: { default: () => [] },
    protocols: { default: () => [] }
  },
  setup(__props) {
    const { translate } = useLocalization();
    const hasLabels = computed(() => __props.servers.length > 0 || __props.protocols.length > 0);
    return (_ctx, _cache) => {
      return hasLabels.value ? (openBlock(), createElementBlock("div", _hoisted_159, [__props.servers.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", _hoisted_241, toDisplayString(unref(translate)("asyncapi.servers")) + ":", 1), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.servers, (server) => {
        return openBlock(), createBlock(unref(Badge_default), {
          key: `server-${server}`,
          class: "async-api-label--server",
          title: server
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(server), 1)]),
          _: 2
        }, 1032, ["title"]);
      }), 128))], 64)) : createCommentVNode("", true), __props.protocols.length ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("span", _hoisted_329, toDisplayString(unref(translate)("asyncapi.protocols")) + ":", 1), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.protocols, (protocol) => {
        return openBlock(), createBlock(unref(Badge_default), {
          key: `protocol-${protocol}`,
          class: "async-api-label--protocol",
          title: protocol
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(protocol), 1)]),
          _: 2
        }, 1032, ["title"]);
      }), 128))], 64)) : createCommentVNode("", true)])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiLabels.vue.js
var AsyncApiLabels_default = _plugin_vue_export_helper_default2(AsyncApiLabels_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-6f21951e"]]);

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/adapt-async-api-parameters.js
var adaptAsyncApiParameters = (parameters) => {
  if (!parameters) return [];
  return Object.entries(parameters).map(([name, value]) => {
    const parameter = getResolvedRef(value) ?? {};
    const schema = { type: "string" };
    if (parameter.enum) schema.enum = parameter.enum;
    if (parameter.default !== void 0) schema.default = parameter.default;
    if (parameter.examples) schema.examples = parameter.examples;
    const result = {
      name,
      in: "path",
      required: true,
      schema
    };
    if (parameter.description) result.description = parameter.description;
    return result;
  });
};

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/async-api-render-options.js
var resolveSchemaRenderOptions = (options) => ({
  orderRequiredPropertiesFirst: (options == null ? void 0 : options.orderRequiredPropertiesFirst) ?? false,
  orderSchemaPropertiesBy: (options == null ? void 0 : options.orderSchemaPropertiesBy) ?? "preserve",
  expandAllSchemaProperties: (options == null ? void 0 : options.expandAllSchemaProperties) ?? false
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/filter-children-by-type.js
var filterChildrenByType = (children, type) => (children ?? []).filter((child) => child.type === type);

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/get-async-api-labels.js
var getChannelServerLabels = (document2, channel) => {
  const entries = getAsyncApiServers(document2, {
    channel: channel ?? null,
    webSocketOnly: false
  });
  return {
    servers: entries.map((entry) => entry.name),
    protocols: [...new Set(entries.map((entry) => entry.protocol).filter(Boolean))]
  };
};

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/pick-heading.js
var pickHeading = (...candidates) => {
  for (const candidate of candidates) {
    const trimmed = candidate == null ? void 0 : candidate.trim();
    if (trimmed) return trimmed;
  }
  return "";
};

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/resolve-async-api-nodes.js
var resolveAsyncApiChannel = (document2, channelName) => {
  var _a;
  const node = (_a = document2.channels) == null ? void 0 : _a[channelName];
  return node ? getResolvedRef(node, mergeSiblingReferences) : void 0;
};
var resolveAsyncApiMessage = (document2, channelName, messageName) => {
  var _a, _b;
  const node = (_b = (_a = resolveAsyncApiChannel(document2, channelName)) == null ? void 0 : _a.messages) == null ? void 0 : _b[messageName];
  return node ? getResolvedRef(node, mergeSiblingReferences) : void 0;
};
var resolveAsyncApiOperation = (document2, operationName) => {
  var _a;
  const node = (_a = document2.operations) == null ? void 0 : _a[operationName];
  return node ? resolveOperationWithTraits(getResolvedRef(node, mergeSiblingReferences)) : void 0;
};

// node_modules/@scalar/api-reference/dist/features/Operation/helpers/get-required-security.js
var getRequiredSecurity = (operation, document2) => {
  var _a;
  const securityList = (operation == null ? void 0 : operation.security) ?? document2.security ?? [];
  const definedSchemes = ((_a = document2.components) == null ? void 0 : _a.securitySchemes) ?? {};
  let hasEmpty = false;
  const groups = [];
  for (const requirement of securityList) {
    if (!isNonOptionalSecurityRequirement(requirement)) {
      hasEmpty = true;
      continue;
    }
    const schemes = Object.entries(requirement).map(([name, scopes]) => ({
      name,
      scheme: getResolvedRef(definedSchemes[name]),
      scopes: scopes.filter((s2) => s2.length > 0)
    }));
    if (schemes.length > 0) groups.push({ schemes });
  }
  if (groups.length === 0) return {
    state: hasEmpty ? "optional" : "none",
    requirements: []
  };
  return {
    state: hasEmpty ? "optional" : "required",
    requirements: groups
  };
};
var getEffectiveScopes = (scheme) => {
  if (scheme.scheme && scheme.scheme.type !== "oauth2" && scheme.scheme.type !== "openIdConnect") return [];
  return scheme.scopes;
};
var getRequiredScopeGroups = (requiredSecurity) => {
  const groups = [];
  for (const group of requiredSecurity.requirements) {
    const collected = /* @__PURE__ */ new Set();
    for (const scheme of group.schemes) for (const scope of getEffectiveScopes(scheme)) collected.add(scope);
    if (collected.size > 0) groups.push([...collected]);
  }
  return groups;
};

// node_modules/@scalar/api-reference/dist/features/Operation/components/OperationScopes.vue.script.js
var _hoisted_160 = {
  key: 0,
  class: "mt-6"
};
var _hoisted_242 = { class: "text-c-1 mt-3 mb-3 text-lg leading-[1.45] font-medium" };
var _hoisted_330 = {
  key: 0,
  class: "text-c-2 mb-2 text-sm"
};
var OperationScopes_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OperationScopes",
  props: { requiredSecurity: {} },
  setup(__props) {
    const { translate } = useLocalization();
    const scopeGroups = computed(() => getRequiredScopeGroups(__props.requiredSecurity));
    const hasScopeFreeAlternative = computed(() => __props.requiredSecurity.requirements.some((group) => group.schemes.every((scheme) => getEffectiveScopes(scheme).length === 0)));
    const showAlternativesHint = computed(() => scopeGroups.value.length > 1 || scopeGroups.value.length > 0 && hasScopeFreeAlternative.value);
    return (_ctx, _cache) => {
      return scopeGroups.value.length ? (openBlock(), createElementBlock("div", _hoisted_160, [
        createBaseVNode("div", _hoisted_242, toDisplayString(unref(translate)("authentication.scopes")), 1),
        showAlternativesHint.value ? (openBlock(), createElementBlock("div", _hoisted_330, toDisplayString(unref(translate)("authentication.oneOf")), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(scopeGroups.value, (group, index) => {
          return openBlock(), createElementBlock("ul", {
            key: index,
            class: normalizeClass(["mb-3 list-none p-0 text-sm", { "mt-3 border-t pt-3": scopeGroups.value.length > 1 && index > 0 }])
          }, [(openBlock(true), createElementBlock(Fragment, null, renderList(group, (scope) => {
            return openBlock(), createElementBlock("li", {
              key: scope,
              class: "font-code text-c-2"
            }, toDisplayString(scope), 1);
          }), 128))], 2);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/OperationScopes.vue.js
var OperationScopes_default = OperationScopes_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/helpers/get-async-api-required-security.js
var getAsyncApiRequiredSecurity = (document2, operation) => getRequiredSecurity({ security: getAsyncApiSecurityRequirements(document2, operation, null) }, { components: void 0 });

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Message.vue.script.js
var _hoisted_161 = ["id"];
var _hoisted_243 = { class: "message-heading" };
var _hoisted_331 = {
  key: 1,
  class: "message-schema"
};
var _hoisted_419 = {
  key: 2,
  class: "message-schema"
};
var Message_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Message",
  props: {
    message: {},
    document: {},
    eventBus: {},
    options: {},
    expandedItems: { default: () => ({}) }
  },
  setup(__props) {
    const headerId = useId();
    const section = useTemplateRef("section");
    useIntersection(section, () => {
      var _a;
      return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.message.id });
    });
    const resolvedMessage = computed(() => resolveAsyncApiMessage(__props.document, __props.message.channelName, __props.message.messageName));
    const headingText = computed(() => {
      var _a;
      return pickHeading((_a = resolvedMessage.value) == null ? void 0 : _a.title, __props.message.title, __props.message.messageName);
    });
    const description = computed(() => {
      var _a, _b;
      return ((_a = resolvedMessage.value) == null ? void 0 : _a.description) || ((_b = resolvedMessage.value) == null ? void 0 : _b.summary) || "";
    });
    const messageBindingProtocols = computed(() => {
      var _a;
      const bindings = (_a = resolvedMessage.value) == null ? void 0 : _a.bindings;
      if (!bindings) return [];
      const resolved = getResolvedRef(bindings);
      return Object.entries(resolved).filter(([, value]) => value != null).map(([protocol]) => protocol.toLowerCase());
    });
    const protocolLabels = computed(() => {
      const channel = resolveAsyncApiChannel(__props.document, __props.message.channelName);
      const { protocols } = getChannelServerLabels(__props.document, channel);
      return [.../* @__PURE__ */ new Set([...protocols, ...messageBindingProtocols.value])];
    });
    const payloadSchema = computed(() => resolvedMessage.value ? getAsyncApiMessagePayloadSchema(resolvedMessage.value) : void 0);
    const headersSchema = computed(() => resolvedMessage.value ? getAsyncApiMessageHeadersSchema(resolvedMessage.value) : void 0);
    const schemaOptions = computed(() => ({
      hideReadOnly: false,
      ...resolveSchemaRenderOptions(__props.options)
    }));
    const isExpanded = ref(__props.expandedItems[__props.message.id] ?? false);
    watch(() => __props.expandedItems[__props.message.id], (value) => {
      if (value !== void 0) isExpanded.value = value;
    });
    const onToggle = (open) => {
      var _a;
      isExpanded.value = open;
      (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
        id: __props.message.id,
        open
      });
    };
    const { level: headingLevel } = useDocumentOutline("message");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.message.id,
        ref_key: "section",
        ref: section,
        class: "message"
      }, [createVNode(unref(SectionAccordion_default), {
        class: "message-accordion",
        modelValue: isExpanded.value,
        "onUpdate:modelValue": onToggle
      }, {
        title: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.message.id });
        }) }, {
          default: withCtx(() => [createBaseVNode("span", _hoisted_243, [createVNode(unref(SectionHeaderTag_default), {
            id: unref(headerId),
            class: "message-title",
            level: unref(headingLevel)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
            _: 1
          }, 8, ["id", "level"]), createVNode(AsyncApiLabels_default, { protocols: protocolLabels.value }, null, 8, ["protocols"])])]),
          _: 1
        })]),
        default: withCtx(() => [
          description.value ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
            key: 0,
            class: "message-description",
            value: description.value,
            withImages: ""
          }, null, 8, ["value"])) : createCommentVNode("", true),
          headersSchema.value ? (openBlock(), createElementBlock("div", _hoisted_331, [_cache[1] || (_cache[1] = createBaseVNode("div", { class: "message-schema-title" }, "Headers", -1)), createVNode(unref(Schema_default), {
            compact: "",
            eventBus: __props.eventBus,
            name: "Headers",
            noncollapsible: "",
            options: schemaOptions.value,
            schema: headersSchema.value
          }, null, 8, [
            "eventBus",
            "options",
            "schema"
          ])])) : createCommentVNode("", true),
          payloadSchema.value ? (openBlock(), createElementBlock("div", _hoisted_419, [_cache[2] || (_cache[2] = createBaseVNode("div", { class: "message-schema-title" }, "Payload", -1)), createVNode(unref(Schema_default), {
            compact: "",
            eventBus: __props.eventBus,
            name: "Payload",
            noncollapsible: "",
            options: schemaOptions.value,
            schema: payloadSchema.value
          }, null, 8, [
            "eventBus",
            "options",
            "schema"
          ])])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue"])], 8, _hoisted_161);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Message.vue.js
var Message_default = _plugin_vue_export_helper_default2(Message_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-08f2cf5d"]]);

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Operation.vue.script.js
var _hoisted_162 = ["id"];
var _hoisted_244 = { class: "operation-header" };
var Operation_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Operation",
  props: {
    operation: {},
    document: {},
    eventBus: {},
    options: {},
    expandedItems: { default: () => ({}) }
  },
  setup(__props) {
    const headerId = useId();
    const section = useTemplateRef("section");
    useIntersection(section, () => {
      var _a;
      return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.operation.id });
    });
    const resolvedOperation = computed(() => resolveAsyncApiOperation(__props.document, __props.operation.operationName));
    const headingText = computed(() => {
      var _a;
      return pickHeading((_a = resolvedOperation.value) == null ? void 0 : _a.title, __props.operation.title, __props.operation.operationName);
    });
    const description = computed(() => {
      var _a, _b;
      return ((_a = resolvedOperation.value) == null ? void 0 : _a.description) || ((_b = resolvedOperation.value) == null ? void 0 : _b.summary) || "";
    });
    const messages = computed(() => filterChildrenByType(__props.operation.children, "asyncapi-message"));
    const requiredSecurity = computed(() => getAsyncApiRequiredSecurity(__props.document, resolvedOperation.value));
    const { level: headingLevel } = useDocumentOutline("operation");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.operation.id,
        ref_key: "section",
        ref: section,
        class: normalizeClass(["operation", `operation--${__props.operation.action}`])
      }, [
        createBaseVNode("div", _hoisted_244, [createBaseVNode("span", { class: normalizeClass(["operation-action", `operation-action--${__props.operation.action}`]) }, toDisplayString(__props.operation.action), 3), createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.operation.id });
        }) }, {
          default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
            id: unref(headerId),
            class: "operation-title",
            level: unref(headingLevel)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
            _: 1
          }, 8, ["id", "level"])]),
          _: 1
        })]),
        description.value ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
          key: 0,
          class: "operation-description",
          value: description.value,
          withImages: ""
        }, null, 8, ["value"])) : createCommentVNode("", true),
        createVNode(OperationScopes_default, { requiredSecurity: requiredSecurity.value }, null, 8, ["requiredSecurity"]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(messages.value, (message) => {
          return openBlock(), createBlock(Message_default, {
            key: message.id,
            document: __props.document,
            eventBus: __props.eventBus,
            expandedItems: __props.expandedItems,
            message,
            options: __props.options
          }, null, 8, [
            "document",
            "eventBus",
            "expandedItems",
            "message",
            "options"
          ]);
        }), 128))
      ], 10, _hoisted_162);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Operation.vue.js
var Operation_default = _plugin_vue_export_helper_default2(Operation_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a929e624"]]);

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Channel.vue.script.js
var Channel_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Channel",
  props: {
    channel: {},
    document: {},
    layout: {},
    isCollapsed: { type: Boolean },
    eventBus: {},
    options: {},
    expandedItems: { default: () => ({}) },
    level: { default: 0 }
  },
  setup(__props) {
    const headerId = useId();
    const resolvedChannel = computed(() => resolveAsyncApiChannel(__props.document, __props.channel.channelName));
    const description = computed(() => {
      var _a;
      return ((_a = resolvedChannel.value) == null ? void 0 : _a.description) ?? "";
    });
    const headingText = computed(() => {
      var _a;
      return pickHeading((_a = resolvedChannel.value) == null ? void 0 : _a.title, __props.channel.channelAddress);
    });
    const parameters = computed(() => {
      var _a;
      return adaptAsyncApiParameters((_a = resolvedChannel.value) == null ? void 0 : _a.parameters);
    });
    const parameterListOptions = computed(() => {
      var _a;
      return {
        hideModels: ((_a = __props.options) == null ? void 0 : _a.hideModels) ?? false,
        ...resolveSchemaRenderOptions(__props.options)
      };
    });
    const labels = computed(() => getChannelServerLabels(__props.document, resolvedChannel.value));
    const operations = computed(() => filterChildrenByType(__props.channel.children, "asyncapi-operation"));
    const { level: headingLevel } = useDocumentOutline("channel");
    return (_ctx, _cache) => {
      return __props.layout === "classic" ? (openBlock(), createBlock(unref(SectionContainerAccordion_default), {
        key: 0,
        "aria-label": headingText.value,
        class: "channel-section",
        modelValue: !__props.isCollapsed,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = (value) => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
            id: __props.channel.id,
            open: value
          });
        })
      }, {
        title: withCtx(() => [
          createVNode(unref(SectionHeader_default), { class: "channel-name" }, {
            default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
              var _a;
              return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.channel.id });
            }) }, {
              default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), { level: unref(headingLevel) }, {
                default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
                _: 1
              }, 8, ["level"])]),
              _: 1
            })]),
            _: 1
          }),
          createVNode(AsyncApiLabels_default, {
            class: "channel-labels",
            protocols: labels.value.protocols,
            servers: labels.value.servers
          }, null, 8, ["protocols", "servers"]),
          createVNode(unref(ScalarMarkdown_default), {
            class: "channel-description",
            value: description.value,
            withImages: ""
          }, null, 8, ["value"])
        ]),
        default: withCtx(() => [parameters.value.length ? (openBlock(), createBlock(ParameterList_default, {
          key: 0,
          eventBus: __props.eventBus,
          options: parameterListOptions.value,
          parameters: parameters.value
        }, {
          title: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Parameters", -1)])]),
          _: 1
        }, 8, [
          "eventBus",
          "options",
          "parameters"
        ])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(operations.value, (operation) => {
          return openBlock(), createBlock(Operation_default, {
            key: operation.id,
            document: __props.document,
            eventBus: __props.eventBus,
            expandedItems: __props.expandedItems,
            operation,
            options: __props.options
          }, null, 8, [
            "document",
            "eventBus",
            "expandedItems",
            "operation",
            "options"
          ]);
        }), 128))]),
        _: 1
      }, 8, ["aria-label", "modelValue"])) : (openBlock(), createBlock(unref(SectionContainer_default), {
        key: 1,
        "aria-labelledby": unref(headerId),
        omit: __props.level !== 0,
        role: "region"
      }, {
        default: withCtx(() => [createVNode(unref(Section_default), {
          id: __props.channel.id,
          role: "none",
          onIntersecting: _cache[3] || (_cache[3] = () => {
            var _a;
            return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.channel.id });
          })
        }, {
          default: withCtx(() => [createVNode(unref(SectionHeader_default), null, {
            default: withCtx(() => [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[2] || (_cache[2] = () => {
              var _a;
              return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.channel.id });
            }) }, {
              default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
                id: unref(headerId),
                level: unref(headingLevel)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(headingText.value), 1)]),
                _: 1
              }, 8, ["id", "level"])]),
              _: 1
            })]),
            _: 1
          }), createVNode(unref(SectionContent_default), null, {
            default: withCtx(() => [
              createVNode(AsyncApiLabels_default, {
                class: "channel-labels",
                protocols: labels.value.protocols,
                servers: labels.value.servers
              }, null, 8, ["protocols", "servers"]),
              createVNode(unref(ScalarMarkdown_default), {
                value: description.value,
                withImages: ""
              }, null, 8, ["value"]),
              parameters.value.length ? (openBlock(), createBlock(ParameterList_default, {
                key: 0,
                eventBus: __props.eventBus,
                options: parameterListOptions.value,
                parameters: parameters.value
              }, {
                title: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Parameters", -1)])]),
                _: 1
              }, 8, [
                "eventBus",
                "options",
                "parameters"
              ])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(operations.value, (operation) => {
                return openBlock(), createBlock(Operation_default, {
                  key: operation.id,
                  document: __props.document,
                  eventBus: __props.eventBus,
                  expandedItems: __props.expandedItems,
                  operation,
                  options: __props.options
                }, null, 8, [
                  "document",
                  "eventBus",
                  "expandedItems",
                  "operation",
                  "options"
                ]);
              }), 128))
            ]),
            _: 1
          })]),
          _: 1
        }, 8, ["id"])]),
        _: 1
      }, 8, ["aria-labelledby", "omit"]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/Channel.vue.js
var Channel_default = _plugin_vue_export_helper_default2(Channel_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c60febe5"]]);

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiTraversedEntry.vue.script.js
var AsyncApiTraversedEntry_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AsyncApiTraversedEntry",
  props: {
    entries: {},
    document: {},
    expandedItems: {},
    options: {},
    eventBus: {},
    level: { default: 0 }
  },
  setup(__props) {
    const isTagGroup = (entry) => entry.type === "tag" && entry.isGroup === true;
    const isTag = (entry) => entry.type === "tag" && !isTagGroup(entry);
    const isChannel = (entry) => entry.type === "asyncapi-channel";
    const isModelsTag = (entry) => entry.type === "models";
    const isModel = (entry) => entry.type === "model";
    const componentSchemas = computed(() => __props.document.components ? getResolvedRef(__props.document.components, mergeSiblingReferences).schemas : void 0);
    const getModelSchema2 = (name) => getAsyncApiModelSchema(__props.document, name);
    return (_ctx, _cache) => {
      const _component_AsyncApiTraversedEntry = resolveComponent("AsyncApiTraversedEntry", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.entries, (entry) => {
        return openBlock(), createBlock(Lazy_default, {
          id: entry.id,
          key: `${entry.id}-${__props.options.layout}`,
          expanded: !!__props.expandedItems[entry.id]
        }, {
          default: withCtx(() => [isChannel(entry) ? (openBlock(), createBlock(Channel_default, {
            key: 0,
            channel: entry,
            document: __props.document,
            eventBus: __props.eventBus,
            expandedItems: __props.expandedItems,
            isCollapsed: !__props.expandedItems[entry.id],
            layout: __props.options.layout,
            level: __props.level,
            options: __props.options
          }, null, 8, [
            "channel",
            "document",
            "eventBus",
            "expandedItems",
            "isCollapsed",
            "layout",
            "level",
            "options"
          ])) : isTag(entry) || isTagGroup(entry) && __props.options.layout === "classic" ? (openBlock(), createBlock(unref(Tag_default), {
            key: 1,
            eventBus: __props.eventBus,
            isCollapsed: !__props.expandedItems[entry.id],
            layout: __props.options.layout,
            moreThanOneTag: __props.entries.filter(isTag).length > 1,
            tag: entry
          }, {
            default: withCtx(() => {
              var _a;
              return [((_a = entry.children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_AsyncApiTraversedEntry, {
                key: 0,
                document: __props.document,
                entries: entry.children,
                eventBus: __props.eventBus,
                expandedItems: __props.expandedItems,
                level: __props.level + 1,
                options: __props.options
              }, null, 8, [
                "document",
                "entries",
                "eventBus",
                "expandedItems",
                "level",
                "options"
              ])) : createCommentVNode("", true)];
            }),
            _: 2
          }, 1032, [
            "eventBus",
            "isCollapsed",
            "layout",
            "moreThanOneTag",
            "tag"
          ])) : isTagGroup(entry) ? (openBlock(), createBlock(_component_AsyncApiTraversedEntry, {
            key: 2,
            document: __props.document,
            entries: entry.children ?? [],
            eventBus: __props.eventBus,
            expandedItems: __props.expandedItems,
            level: __props.level + 1,
            options: __props.options
          }, null, 8, [
            "document",
            "entries",
            "eventBus",
            "expandedItems",
            "level",
            "options"
          ])) : isModelsTag(entry) && componentSchemas.value ? (openBlock(), createBlock(ModelTag_default, {
            key: 3,
            id: entry.id,
            eventBus: __props.eventBus,
            isCollapsed: !__props.expandedItems[entry.id],
            layout: __props.options.layout,
            modelsSectionLabel: __props.options.modelsSectionLabel
          }, {
            default: withCtx(() => [createVNode(_component_AsyncApiTraversedEntry, {
              document: __props.document,
              entries: entry.children ?? [],
              eventBus: __props.eventBus,
              expandedItems: __props.expandedItems,
              level: __props.level + 1,
              options: __props.options
            }, null, 8, [
              "document",
              "entries",
              "eventBus",
              "expandedItems",
              "level",
              "options"
            ])]),
            _: 2
          }, 1032, [
            "id",
            "eventBus",
            "isCollapsed",
            "layout",
            "modelsSectionLabel"
          ])) : isModel(entry) && getModelSchema2(entry.name) ? (openBlock(), createBlock(Model_default, {
            key: 4,
            id: entry.id,
            eventBus: __props.eventBus,
            isCollapsed: !__props.expandedItems[entry.id],
            name: entry.name,
            options: __props.options,
            schema: getModelSchema2(entry.name)
          }, null, 8, [
            "id",
            "eventBus",
            "isCollapsed",
            "name",
            "options",
            "schema"
          ])) : createCommentVNode("", true)]),
          _: 2
        }, 1032, ["id", "expanded"]);
      }), 128);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/AsyncApi/AsyncApiTraversedEntry.vue.js
var AsyncApiTraversedEntry_default = AsyncApiTraversedEntry_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/Auth/Auth.vue.script.js
var Auth_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Auth",
  props: {
    options: {},
    authStore: {},
    document: {},
    eventBus: {},
    securitySchemes: {},
    selectedServer: {},
    environment: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const documentName = computed(() => {
      var _a;
      if (isOpenApiDocument(__props.document) || isAsyncApiDocument(__props.document)) return ((_a = __props.document["x-scalar-navigation"]) == null ? void 0 : _a.name) ?? "";
      return "";
    });
    const documentType = computed(() => getDocumentType(__props.document));
    const securityRequirements = computed(() => {
      if (isAsyncApiDocument(__props.document)) return getAsyncApiDocumentSecurityRequirements(__props.document);
      return getSecurityRequirements(isOpenApiDocument(__props.document) ? __props.document.security : void 0);
    });
    const documentSelectedSecurity = computed(() => __props.authStore.getAuthSelectedSchemas({
      type: "document",
      documentName: documentName.value
    }));
    const selectedSecurity = computed(() => {
      var _a;
      return getSelectedSecurity(documentSelectedSecurity.value, void 0, securityRequirements.value, __props.securitySchemes, (_a = __props.options.authentication) == null ? void 0 : _a.preferredSecurityScheme);
    });
    return (_ctx, _cache) => {
      var _a;
      return Object.keys(__props.securitySchemes).length ? (openBlock(), createBlock(unref(AuthSelector_default), {
        key: 0,
        canDeleteSchemes: false,
        createAnySecurityScheme: ((_a = __props.options.authentication) == null ? void 0 : _a.createAnySecurityScheme) ?? false,
        documentType: documentType.value,
        environment: __props.environment,
        eventBus: __props.eventBus,
        isStatic: "",
        layout: "reference",
        meta: { type: "document" },
        options: { oauth2RedirectUri: __props.options.oauth2RedirectUri },
        persistAuth: __props.options.persistAuth,
        proxyUrl: __props.options.proxyUrl ?? "",
        securityRequirements: securityRequirements.value,
        securitySchemes: __props.securitySchemes,
        selectedSecurity: selectedSecurity.value,
        server: __props.selectedServer,
        title: unref(translate)("authentication.title")
      }, null, 8, [
        "createAnySecurityScheme",
        "documentType",
        "environment",
        "eventBus",
        "options",
        "persistAuth",
        "proxyUrl",
        "securityRequirements",
        "securitySchemes",
        "selectedSecurity",
        "server",
        "title"
      ])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Auth/Auth.vue.js
var Auth_default = Auth_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/Content/ContextBar/helpers.js
var isEllipsis = (crumb) => "ellipsis" in crumb;
var collapseTrail = (chain) => {
  if (chain.length < 4) return chain;
  const [head] = chain;
  const tail = chain.slice(-2);
  const hidden = chain.slice(1, -2);
  return [
    ...head ? [head] : [],
    {
      ellipsis: true,
      hiddenTitles: hidden.map((crumb) => crumb.title)
    },
    ...tail
  ];
};
var hasRenderableTagHierarchy = (entries, layout) => {
  return getInitialContextChain(entries, layout).length >= 2;
};
var getInitialContextChain = (entries, layout) => {
  const visit = (items, ancestors) => {
    for (const entry of items) {
      const chain = entry.type === "tag" && (entry.isTagGroup !== true || layout === "classic") ? [...ancestors, {
        id: entry.id,
        title: entry.title
      }] : ancestors;
      if (chain.length >= 2) return chain;
      if ("children" in entry && entry.children !== void 0) {
        const nestedChain = visit(entry.children, chain);
        if (nestedChain.length >= 2) return nestedChain;
      }
    }
    return [];
  };
  return visit(entries, []);
};

// node_modules/@scalar/api-reference/dist/components/Content/ContextBar/ContextBar.vue.script.js
var _hoisted_163 = [
  "aria-hidden",
  "aria-label",
  "data-stuck"
];
var _hoisted_245 = ["title"];
var _hoisted_332 = {
  key: 2,
  "aria-current": "page",
  class: "text-c-1 shrink-0 font-medium whitespace-nowrap"
};
var _hoisted_420 = ["onClick"];
var ContextBar_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ContextBar",
  props: { chain: {} },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const navRef = ref(null);
    const overflowing = ref(false);
    const isStuck = ref(false);
    const hasBreadcrumb = computed(() => __props.chain.length >= 2);
    const displayCrumbs = computed(() => {
      if (!hasBreadcrumb.value) return [];
      return overflowing.value ? collapseTrail(__props.chain) : __props.chain;
    });
    const isCurrent = (index) => index === displayCrumbs.value.length - 1;
    const onCrumbClick = (id) => emit("navigate", id);
    const measureOverflow = () => {
      const nav = navRef.value;
      if (!nav) return;
      const style = getComputedStyle(nav);
      const gap = Number.parseFloat(style.columnGap) || 0;
      const available = nav.clientWidth - Number.parseFloat(style.paddingLeft) - Number.parseFloat(style.paddingRight);
      const children = Array.from(nav.children);
      const needed = children.reduce((total, child) => total + child.getBoundingClientRect().width, 0) + gap * Math.max(0, children.length - 1);
      overflowing.value = needed > available + 1;
    };
    let resizeObserver = null;
    let frame = null;
    let stickyFrame = null;
    const scheduleOverflowCheck = () => {
      overflowing.value = false;
      if (frame !== null) return;
      if (typeof requestAnimationFrame === "undefined") {
        nextTick(measureOverflow);
        return;
      }
      frame = requestAnimationFrame(() => {
        frame = null;
        nextTick(measureOverflow);
      });
    };
    const updateStickyState = () => {
      const nav = navRef.value;
      if (!nav) return;
      const stickyTop = Number.parseFloat(getComputedStyle(nav).top) || 0;
      isStuck.value = nav.getBoundingClientRect().top <= stickyTop;
    };
    const scheduleStickyCheck = () => {
      if (stickyFrame !== null) return;
      if (typeof requestAnimationFrame === "undefined") {
        updateStickyState();
        return;
      }
      stickyFrame = requestAnimationFrame(() => {
        stickyFrame = null;
        updateStickyState();
      });
    };
    watch(navRef, (nav) => {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      if (nav && typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(() => {
          scheduleOverflowCheck();
          scheduleStickyCheck();
        });
        resizeObserver.observe(nav);
        scheduleOverflowCheck();
        scheduleStickyCheck();
      }
    }, { immediate: true });
    watch(() => __props.chain, scheduleOverflowCheck, { flush: "post" });
    onMounted(() => {
      window.addEventListener("scroll", scheduleStickyCheck, {
        capture: true,
        passive: true
      });
      window.addEventListener("resize", scheduleStickyCheck, { passive: true });
      scheduleStickyCheck();
    });
    onBeforeUnmount(() => {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleStickyCheck, true);
      window.removeEventListener("resize", scheduleStickyCheck);
      if (frame !== null && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(frame);
      if (stickyFrame !== null && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(stickyFrame);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        ref_key: "navRef",
        ref: navRef,
        "aria-hidden": !hasBreadcrumb.value,
        "aria-label": hasBreadcrumb.value ? "Breadcrumb" : void 0,
        class: "context-bar bg-b-1.5 text-c-2 sticky top-(--refs-header-height) z-10 flex items-center gap-1.5 text-sm",
        "data-stuck": isStuck.value || void 0
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayCrumbs.value, (crumb, index) => {
        return openBlock(), createElementBlock(Fragment, { key: unref(isEllipsis)(crumb) ? `ellipsis-${index}` : crumb.id }, [index > 0 ? (openBlock(), createBlock(unref(ScalarIconCaretRight_default), {
          key: 0,
          class: "text-c-3 size-2.5 shrink-0",
          weight: "bold"
        })) : createCommentVNode("", true), unref(isEllipsis)(crumb) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "text-c-3 shrink-0",
          title: crumb.hiddenTitles.join(" › ")
        }, " … ", 8, _hoisted_245)) : isCurrent(index) ? (openBlock(), createElementBlock("span", _hoisted_332, toDisplayString(crumb.title), 1)) : (openBlock(), createElementBlock("button", {
          key: 3,
          class: "hover:text-c-1 shrink-0 cursor-pointer whitespace-nowrap transition-colors",
          type: "button",
          onClick: ($event) => onCrumbClick(crumb.id)
        }, toDisplayString(crumb.title), 9, _hoisted_420))], 64);
      }), 128))], 8, _hoisted_163);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/ContextBar/ContextBar.vue.js
var ContextBar_default = _plugin_vue_export_helper_default2(ContextBar_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-5f62f72b"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/helpers/filter-selected-security.js
var getKey = (requirement) => Object.keys(requirement).sort().join(",");
var filterSelectedSecurity = (document2, operation, selectedSecurityDocument, selectedSecurityOperation, securitySchemes = {}) => {
  var _a;
  const securityRequirements = (operation == null ? void 0 : operation.security) ?? document2.security ?? [];
  const selectedSecurity = getSelectedSecurity(selectedSecurityDocument, selectedSecurityOperation, securityRequirements);
  const requirementSet = new Set(securityRequirements.map((r3) => getKey(r3)));
  const selectedRequirement = selectedSecurity.selectedSchemes[selectedSecurity.selectedIndex];
  if (selectedRequirement && requirementSet.has(getKey(selectedRequirement))) return getSecuritySchemes(securitySchemes, selectedRequirement);
  for (const selected of selectedSecurity.selectedSchemes) if (requirementSet.has(getKey(selected))) return getSecuritySchemes(securitySchemes, selected);
  if ((_a = operation == null ? void 0 : operation.security) == null ? void 0 : _a.length) return getSecuritySchemes(securitySchemes, securityRequirements[0] ?? {});
  return [];
};

// node_modules/@scalar/api-reference/dist/components/OperationPath.vue.script.js
var _hoisted_164 = { key: 0 };
var OperationPath_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OperationPath",
  props: {
    path: {},
    deprecated: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isVariable = (part) => part.startsWith("{") && part.endsWith("}");
    const pathParts = computed(() => props.path.split(/({[^}]+})/));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", { class: normalizeClass(["operation-path", { deprecated: __props.deprecated }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(pathParts.value, (part, i3) => {
        return openBlock(), createElementBlock(Fragment, { key: i3 }, [isVariable(part) ? (openBlock(), createElementBlock("em", _hoisted_164, toDisplayString(part), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(part), 1)], 64))], 64);
      }), 128))], 2);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/OperationPath.vue.js
var OperationPath_default = _plugin_vue_export_helper_default2(OperationPath_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ec6c8861"]]);

// node_modules/@scalar/components/dist/components/ScalarVirtualCodeBlock/ScalarVirtualCodeBlock.vue.script.js
var ScalarVirtualCodeBlock_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarVirtualCodeBlock",
  props: {
    content: {},
    lang: { default: "plaintext" },
    copy: {
      type: [String, Boolean],
      default: "hover"
    },
    lineHeight: { default: 20 }
  },
  setup(__props) {
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(unref(cx)("scalar-code-block group/code-block flex flex-col", "relative bg-b-1 min-h-0 min-w-0"))), [createVNode(ScalarVirtualText_default, {
        containerClass: "custom-scroll overflow-auto flex flex-1 max-h-screen",
        contentClass: "language-plaintext whitespace-pre font-code text-base p-2",
        lineHeight: __props.lineHeight,
        text: __props.content
      }, null, 8, ["lineHeight", "text"]), __props.copy ? (openBlock(), createBlock(ScalarCodeBlockCopy_default, {
        key: 0,
        class: normalizeClass(["scalar-code-copy absolute top-2.5 right-2.5", [{ "opacity-100": __props.copy === "always" }]]),
        content: __props.content,
        showLang: true,
        lang: __props.lang
      }, {
        backdrop: withCtx(() => [createVNode(ScalarCopyBackdrop_default, { class: "scalar-code-copy-backdrop -right-1.5 -top-1" })]),
        _: 1
      }, 8, [
        "class",
        "content",
        "lang"
      ])) : createCommentVNode("", true)], 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarVirtualCodeBlock/ScalarVirtualCodeBlock.vue.js
var ScalarVirtualCodeBlock_default = ScalarVirtualCodeBlock_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleSchema.vue.script.js
var VIRTUALIZATION_THRESHOLD = 2e4;
var ExampleSchema_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExampleSchema",
  props: {
    id: {},
    schema: {}
  },
  setup(__props) {
    const schemaContent = computed(() => {
      if (!__props.schema) return;
      return prettyPrintJson(getResolvedRefDeep(__props.schema));
    });
    const shouldVirtualizeSchema = computed(() => {
      var _a;
      return (((_a = schemaContent.value) == null ? void 0 : _a.length) ?? 0) > VIRTUALIZATION_THRESHOLD;
    });
    return (_ctx, _cache) => {
      return !shouldVirtualizeSchema.value ? (openBlock(), createBlock(unref(ScalarCodeBlock_default), {
        key: 0,
        id: __props.id,
        class: "bg-b-2",
        lang: "json",
        prettyPrintedContent: schemaContent.value ?? ""
      }, null, 8, ["id", "prettyPrintedContent"])) : (openBlock(), createBlock(unref(ScalarVirtualCodeBlock_default), {
        key: 1,
        id: __props.id,
        class: "bg-b-2",
        content: schemaContent.value ?? "",
        lang: "json"
      }, null, 8, ["id", "content"]));
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleSchema.vue.js
var ExampleSchema_default = ExampleSchema_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponse.vue.script.js
var _hoisted_165 = {
  key: 2,
  class: "empty-state"
};
var VIRTUALIZATION_THRESHOLD2 = 2e4;
var ExampleResponse_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExampleResponse",
  props: {
    response: {},
    example: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const getContent = () => {
      var _a, _b;
      if (__props.example !== void 0) return ((_a = getResolvedRefDeep(__props.example)) == null ? void 0 : _a.value) ?? "";
      if ((_b = __props.response) == null ? void 0 : _b.schema) return getExampleFromSchema(getResolvedRefDeep(__props.response.schema), {
        emptyString: "string",
        mode: "read"
      });
    };
    const prettyPrintedContent = computed(() => {
      const content = getContent();
      if (content === void 0) return;
      return prettyPrintJson(content);
    });
    const shouldVirtualize = computed(() => {
      if (prettyPrintedContent.value === void 0) return false;
      return prettyPrintedContent.value.length > VIRTUALIZATION_THRESHOLD2;
    });
    return (_ctx, _cache) => {
      return prettyPrintedContent.value !== void 0 && !shouldVirtualize.value ? (openBlock(), createBlock(unref(ScalarCodeBlock_default), {
        key: 0,
        class: "bg-b-2",
        lang: "json",
        prettyPrintedContent: prettyPrintedContent.value
      }, null, 8, ["prettyPrintedContent"])) : prettyPrintedContent.value !== void 0 && shouldVirtualize.value ? (openBlock(), createBlock(unref(ScalarVirtualCodeBlock_default), {
        key: 1,
        class: "bg-b-2",
        content: prettyPrintedContent.value,
        lang: "json"
      }, null, 8, ["content"])) : (openBlock(), createElementBlock("div", _hoisted_165, toDisplayString(unref(translate)("response.noBody")), 1));
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponse.vue.js
var ExampleResponse_default = _plugin_vue_export_helper_default2(ExampleResponse_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ce6cfefc"]]);

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponseTab.vue.script.js
var ExampleResponseTab_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExampleResponseTab",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(xe), { as: "template" }, {
        default: withCtx(({ selected }) => [createBaseVNode("button", {
          class: normalizeClass(["tab", { "tab-selected": selected }]),
          type: "button"
        }, [createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])], 2)]),
        _: 3
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponseTab.vue.js
var ExampleResponseTab_default = _plugin_vue_export_helper_default2(ExampleResponseTab_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-804dba49"]]);

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponseTabList.vue.script.js
var ExampleResponseTabList_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExampleResponseTabList",
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const changeTab = (index) => {
      emit("change", index);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarCardHeader_default), { class: "scalar-card-header scalar-card-header-tabs" }, {
        actions: withCtx(() => [renderSlot(_ctx.$slots, "actions", {}, void 0, true)]),
        default: withCtx(() => [createVNode(unref(me), { onChange: changeTab }, {
          default: withCtx(() => [createVNode(unref(pe), { class: "tab-list custom-scroll" }, {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
            _: 3
          })]),
          _: 3
        })]),
        _: 3
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponseTabList.vue.js
var ExampleResponseTabList_default = _plugin_vue_export_helper_default2(ExampleResponseTabList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-49a8c0af"]]);

// node_modules/@scalar/api-reference/dist/features/example-responses/helpers/normalize-mime-type.js
function normalizeMimeType(contentType) {
  if (typeof contentType !== "string") return;
  return contentType.replace(/;.*$/, "").replace(/\/(?!.*vnd\.|fhir\+).*\+/, "/").trim();
}

// node_modules/@scalar/api-reference/dist/features/example-responses/helpers/normalize-mime-type-object.js
function normalizeMimeTypeObject(content) {
  if (!content) return content;
  const newContent = { ...content };
  Object.entries(newContent).forEach(([key, value]) => {
    const normalizedKey = normalizeMimeType(key);
    if (normalizedKey) newContent[normalizedKey] = value;
  });
  return newContent;
}

// node_modules/@scalar/api-reference/dist/features/example-responses/helpers/has-response-content.js
function hasMediaTypeContent(mediaType) {
  if (!mediaType) return false;
  const hasSchema = Boolean(mediaType.schema);
  const hasExample = "example" in mediaType && mediaType.example !== null;
  const hasExamples = Boolean(mediaType.examples);
  return hasSchema || hasExample || hasExamples;
}
function isResponseKey(responseKey) {
  return responseKey === "default" || /^[1-5][0-9]{2}$/.test(responseKey) || /^[1-5]XX$/.test(responseKey);
}
function hasResponseContent(response, responseKey) {
  if (responseKey !== void 0) {
    if (!isResponseKey(responseKey)) return false;
    return Boolean(response);
  }
  const normalizedContent = normalizeMimeTypeObject(response == null ? void 0 : response.content);
  const keys = objectKeys(normalizedContent ?? {});
  return hasMediaTypeContent((normalizedContent == null ? void 0 : normalizedContent["application/json"]) ?? (normalizedContent == null ? void 0 : normalizedContent["application/xml"]) ?? (normalizedContent == null ? void 0 : normalizedContent["text/plain"]) ?? (normalizedContent == null ? void 0 : normalizedContent["text/html"]) ?? (normalizedContent == null ? void 0 : normalizedContent["*/*"]) ?? (normalizedContent == null ? void 0 : normalizedContent[keys[0] ?? ""]));
}

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponses.vue.script.js
var _hoisted_166 = {
  key: 1,
  class: "scalar-card-checkbox"
};
var _hoisted_246 = ["aria-controls"];
var _hoisted_333 = { class: "response-description" };
var ExampleResponses_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ExampleResponses",
  props: {
    responses: {},
    selectedExample: {},
    eventBus: {},
    selectedContentTypes: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const id = useId();
    const { copyToClipboard } = useClipboard();
    const orderedStatusCodes = computed(() => Object.keys(__props.responses ?? {}).sort());
    const statusCodesWithContent = computed(() => orderedStatusCodes.value.filter((statusCode) => {
      var _a;
      return hasResponseContent(getResolvedRef((_a = __props.responses) == null ? void 0 : _a[statusCode]), statusCode);
    }));
    const selectedResponseIndex = ref(0);
    watch(statusCodesWithContent, (codes) => {
      if (codes.length === 0) selectedResponseIndex.value = 0;
      else if (selectedResponseIndex.value >= codes.length) selectedResponseIndex.value = codes.length - 1;
      else return;
      selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
    });
    const currentResponse = computed(() => {
      var _a;
      const currentStatusCode = toValue(statusCodesWithContent)[toValue(selectedResponseIndex)] ?? "";
      return getResolvedRef((_a = __props.responses) == null ? void 0 : _a[currentStatusCode]);
    });
    const normalizedResponseContent = computed(() => {
      var _a;
      return normalizeMimeTypeObject((_a = currentResponse.value) == null ? void 0 : _a.content);
    });
    const currentResponseContent = computed(() => {
      var _a;
      const content = normalizedResponseContent.value;
      if (!content) return;
      const statusCode = toValue(statusCodesWithContent)[toValue(selectedResponseIndex)] ?? "";
      const selected = (_a = __props.selectedContentTypes) == null ? void 0 : _a[statusCode];
      const keys = objectKeys(content);
      return content[selected && keys.includes(selected) ? selected : keys[0] ?? ""];
    });
    const hasMultipleExamples = computed(() => {
      var _a, _b;
      return !!((_a = currentResponseContent.value) == null ? void 0 : _a.examples) && Object.keys(((_b = currentResponseContent.value) == null ? void 0 : _b.examples) ?? {}).length > 1;
    });
    const selectedExampleKey = ref("");
    const resolveExampleKey = (preferred) => {
      var _a;
      const keys = Object.keys(((_a = currentResponseContent.value) == null ? void 0 : _a.examples) ?? {});
      if (preferred && keys.includes(preferred)) return preferred;
      if (selectedExampleKey.value && keys.includes(selectedExampleKey.value)) return selectedExampleKey.value;
      return keys[0] ?? "";
    };
    selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
    watch(() => __props.selectedExample, (preferred) => {
      selectedExampleKey.value = resolveExampleKey(preferred);
    });
    const selectExample = (key) => {
      var _a;
      selectedExampleKey.value = key;
      (_a = __props.eventBus) == null ? void 0 : _a.emit("workspace:update:selected-example", key);
    };
    const currentExample = computed(() => {
      var _a;
      if (!currentResponseContent.value) return;
      if (hasMultipleExamples.value && selectedExampleKey.value) return (_a = currentResponseContent.value.examples) == null ? void 0 : _a[selectedExampleKey.value];
      return getExample(currentResponseContent.value, void 0, void 0);
    });
    const changeTab = (index) => {
      selectedResponseIndex.value = index;
      selectedExampleKey.value = resolveExampleKey(__props.selectedExample);
    };
    const showSchema = ref(false);
    return (_ctx, _cache) => {
      return statusCodesWithContent.value.length ? (openBlock(), createBlock(unref(ScalarCard_default), {
        key: 0,
        "aria-label": unref(translate)("response.exampleResponses"),
        class: "response-card",
        role: "region"
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createVNode(ExampleResponseTabList_default, { onChange: changeTab }, {
              actions: withCtx(() => {
                var _a2, _b;
                return [((_a2 = currentResponseContent.value) == null ? void 0 : _a2.example) ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "code-copy",
                  type: "button",
                  onClick: _cache[0] || (_cache[0] = () => {
                    var _a3;
                    return unref(copyToClipboard)((_a3 = currentResponseContent.value) == null ? void 0 : _a3.example);
                  })
                }, [createVNode(unref(ScalarIcon_default), {
                  icon: "Clipboard",
                  width: "12px"
                })])) : createCommentVNode("", true), ((_b = currentResponseContent.value) == null ? void 0 : _b.schema) ? (openBlock(), createElementBlock("label", _hoisted_166, [
                  createTextVNode(toDisplayString(unref(translate)("response.showSchema")) + " ", 1),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showSchema.value = $event),
                    "aria-controls": unref(id),
                    class: "scalar-card-checkbox-input",
                    type: "checkbox"
                  }, null, 8, _hoisted_246), [[vModelCheckbox, showSchema.value]]),
                  _cache[2] || (_cache[2] = createBaseVNode("span", { class: "scalar-card-checkbox-checkmark" }, null, -1))
                ])) : createCommentVNode("", true)];
              }),
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statusCodesWithContent.value, (statusCode) => {
                return openBlock(), createBlock(ExampleResponseTab_default, {
                  key: statusCode,
                  "aria-controls": unref(id)
                }, {
                  default: withCtx(() => [createVNode(ScreenReader_default, null, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("response.status")) + ":", 1)]),
                    _: 1
                  }), createTextVNode(" " + toDisplayString(statusCode), 1)]),
                  _: 2
                }, 1032, ["aria-controls"]);
              }), 128))]),
              _: 1
            }),
            createVNode(unref(ScalarCardSection_default), { class: "grid flex-1" }, {
              default: withCtx(() => {
                var _a2, _b;
                return [((_a2 = currentResponseContent.value) == null ? void 0 : _a2.schema) && showSchema.value ? (openBlock(), createBlock(ExampleSchema_default, {
                  key: 0,
                  id: unref(id),
                  schema: (_b = currentResponseContent.value) == null ? void 0 : _b.schema
                }, null, 8, ["id", "schema"])) : (openBlock(), createBlock(ExampleResponse_default, {
                  key: 1,
                  id: unref(id),
                  example: currentExample.value,
                  response: currentResponseContent.value
                }, null, 8, [
                  "id",
                  "example",
                  "response"
                ]))];
              }),
              _: 1
            }),
            ((_a = currentResponse.value) == null ? void 0 : _a.description) || hasMultipleExamples.value ? (openBlock(), createBlock(unref(ScalarCardFooter_default), {
              key: 0,
              class: "response-card-footer"
            }, {
              default: withCtx(() => {
                var _a2, _b;
                return [hasMultipleExamples.value ? (openBlock(), createBlock(unref(t2), {
                  key: 0,
                  class: "response-example-selector px-0",
                  examples: (_a2 = currentResponseContent.value) == null ? void 0 : _a2.examples,
                  modelValue: selectedExampleKey.value,
                  "onUpdate:modelValue": selectExample
                }, null, 8, ["examples", "modelValue"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_333, [((_b = currentResponse.value) == null ? void 0 : _b.description) ? (openBlock(), createBlock(unref(ScalarMarkdown_default), {
                  key: 0,
                  class: "response-description-markdown",
                  value: currentResponse.value.description
                }, null, 8, ["value"])) : createCommentVNode("", true)])];
              }),
              _: 1
            })) : createCommentVNode("", true)
          ];
        }),
        _: 1
      }, 8, ["aria-label"])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/example-responses/ExampleResponses.vue.js
var ExampleResponses_default = _plugin_vue_export_helper_default2(ExampleResponses_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c999f4a2"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/helpers/flatten-deep-object-query-parameter.js
var isParameterWithSchema = (parameter) => "schema" in parameter && parameter.schema !== void 0;
var resolveSchema = (schema) => {
  return getResolvedRef(schema);
};
var toFlattenedDeepObjectParameter = (parameter, name, description, required, schema) => {
  const { example: _example, examples: _examples, ...parameterWithoutExamples } = parameter;
  return {
    ...parameterWithoutExamples,
    name,
    description,
    required,
    schema
  };
};
var flattenDeepObjectProperties = (parameter, schema, namePrefix) => {
  if (!schema.properties) return [parameter];
  const requiredProperties = new Set(schema.required ?? []);
  const flattenedParameters = Object.entries(schema.properties).flatMap(([propertyName, propertySchema]) => {
    const resolvedPropertySchema = resolveSchema(propertySchema);
    if (!resolvedPropertySchema) return [];
    const nestedName = `${namePrefix}[${propertyName}]`;
    const nestedParameter = toFlattenedDeepObjectParameter(parameter, nestedName, resolvedPropertySchema.description ?? parameter.description, requiredProperties.has(propertyName), resolvedPropertySchema);
    if (isObjectSchema(resolvedPropertySchema) && resolvedPropertySchema.properties) return flattenDeepObjectProperties(nestedParameter, resolvedPropertySchema, nestedName);
    return [nestedParameter];
  });
  return flattenedParameters.length > 0 ? flattenedParameters : [parameter];
};
var flattenDeepObjectQueryParameter = (parameter) => {
  if (parameter.in !== "query" || !isParameterWithSchema(parameter) || parameter.style !== "deepObject") return [parameter];
  const resolvedSchema = resolveSchema(parameter.schema);
  if (!resolvedSchema || !isObjectSchema(resolvedSchema)) return [parameter];
  return flattenDeepObjectProperties(parameter, resolvedSchema, parameter.name);
};

// node_modules/@scalar/api-reference/dist/features/Operation/components/RequestBody.vue.script.js
var _hoisted_167 = ["aria-label"];
var _hoisted_247 = { class: "request-body-header" };
var _hoisted_334 = { class: "request-body-title" };
var _hoisted_421 = {
  key: 0,
  class: "text-c-2 text-xs leading-none font-normal",
  "data-testid": "request-body-schema-name"
};
var _hoisted_513 = { class: "flex items-center gap-2" };
var _hoisted_65 = {
  key: 0,
  class: "request-body-required"
};
var _hoisted_75 = {
  key: 0,
  class: "request-body-description"
};
var _hoisted_83 = {
  key: 0,
  class: "request-body-schema"
};
var _hoisted_92 = {
  key: 1,
  class: "request-body-schema"
};
var MAX_VISIBLE_PROPERTIES = 12;
var RequestBody_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "RequestBody",
  props: mergeModels({
    breadcrumb: {},
    requestBody: {},
    eventBus: {},
    document: {},
    options: {}
  }, {
    "selectedContentType": { default: "application/json" },
    "selectedContentTypeModifiers": {}
  }),
  emits: ["update:selectedContentType"],
  setup(__props) {
    var _a;
    const { translate } = useLocalization();
    const availableContentTypes = computed(() => {
      var _a2;
      return Object.keys(((_a2 = __props.requestBody) == null ? void 0 : _a2.content) ?? {});
    });
    const selectedContentType = useModel(__props, "selectedContentType");
    if ((_a = __props.requestBody) == null ? void 0 : _a.content) {
      if (availableContentTypes.value[0]) selectedContentType.value = availableContentTypes.value[0];
    }
    const rawSchema = computed(() => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = __props.requestBody) == null ? void 0 : _a2.content) == null ? void 0 : _b[selectedContentType.value]) == null ? void 0 : _c.schema;
    });
    const schema = computed(() => getResolvedRef(rawSchema.value));
    const modelLink = computed(() => (rawSchema.value && getModelNameFromSchema(rawSchema.value)) ?? null);
    const modelLinkable = computed(() => {
      var _a2;
      return isModelLinkable((_a2 = modelLink.value) == null ? void 0 : _a2.schemaKey, {
        hideModels: __props.options.hideModels,
        document: __props.document
      });
    });
    const partitionedSchema = computed(() => {
      if (!schema.value || !isTypeObject(schema.value)) return null;
      if (inferDiscriminatorMappingComposition(schema.value, __props.document)) return null;
      const sortedNames = sortPropertyNames(schema.value, schema.value.discriminator, {
        hideReadOnly: true,
        orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
        orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst
      });
      if (sortedNames.length <= MAX_VISIBLE_PROPERTIES) return null;
      const { properties, ...schemaMetadata } = schema.value;
      if (!properties) return null;
      return {
        visibleProperties: {
          ...schemaMetadata,
          properties: reduceNamesToObject(sortedNames.slice(0, MAX_VISIBLE_PROPERTIES), properties)
        },
        collapsedProperties: {
          ...schemaMetadata,
          properties: reduceNamesToObject(sortedNames.slice(MAX_VISIBLE_PROPERTIES), properties)
        }
      };
    });
    const shouldRenderRequestBody = computed(() => {
      var _a2, _b, _c;
      return Object.keys(((_a2 = __props.requestBody) == null ? void 0 : _a2.content) ?? {}).length > 0 || ((_b = __props.requestBody) == null ? void 0 : _b.description) || ((_c = __props.requestBody) == null ? void 0 : _c.required);
    });
    return (_ctx, _cache) => {
      return __props.requestBody && shouldRenderRequestBody.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        "aria-label": unref(translate)("operation.requestBody"),
        class: "request-body",
        role: "group"
      }, [createBaseVNode("div", _hoisted_247, [
        createBaseVNode("div", _hoisted_334, [renderSlot(_ctx.$slots, "title", {}, void 0, true), modelLink.value ? (openBlock(), createElementBlock("span", _hoisted_421, [_cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-c-3 mx-1.5" }, "·", -1)), __props.eventBus && modelLink.value.schemaKey && modelLinkable.value ? (openBlock(), createBlock(LinkButton_default, {
          key: 0,
          onClick: _cache[0] || (_cache[0] = ($event) => __props.eventBus.emit("scroll-to:model-by-name", { name: modelLink.value.schemaKey }))
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(modelLink.value.label), 1)]),
          _: 1
        })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(modelLink.value.label), 1)], 64))])) : createCommentVNode("", true)]),
        createBaseVNode("div", _hoisted_513, [__props.requestBody.required ? (openBlock(), createElementBlock("div", _hoisted_65, toDisplayString(unref(translate)("common.required")), 1)) : createCommentVNode("", true), createVNode(ContentTypeSelect_default, {
          modelValue: selectedContentType.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedContentType.value = $event),
          content: __props.requestBody.content
        }, null, 8, ["modelValue", "content"])]),
        __props.requestBody.description ? (openBlock(), createElementBlock("div", _hoisted_75, [createVNode(unref(ScalarMarkdown_default), { value: __props.requestBody.description }, null, 8, ["value"])])) : createCommentVNode("", true)
      ]), partitionedSchema.value ? (openBlock(), createElementBlock("div", _hoisted_83, [createVNode(unref(Schema_default), {
        breadcrumb: __props.breadcrumb,
        compact: "",
        compositionPath: ["requestBody"],
        eventBus: __props.eventBus,
        name: unref(translate)("operation.requestBody"),
        noncollapsible: "",
        options: {
          hideReadOnly: true,
          orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
          orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
          expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
          hideModels: __props.options.hideModels,
          document: __props.document
        },
        schema: partitionedSchema.value.visibleProperties,
        schemaContext: "requestBody"
      }, null, 8, [
        "breadcrumb",
        "eventBus",
        "name",
        "options",
        "schema"
      ]), createVNode(unref(Schema_default), {
        additionalProperties: "",
        breadcrumb: __props.breadcrumb,
        compact: "",
        compositionPath: ["requestBody"],
        eventBus: __props.eventBus,
        hideDescription: "",
        name: unref(translate)("operation.requestBody"),
        options: {
          hideReadOnly: true,
          orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
          orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
          expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
          hideModels: __props.options.hideModels,
          document: __props.document
        },
        schema: partitionedSchema.value.collapsedProperties,
        schemaContext: "requestBody"
      }, null, 8, [
        "breadcrumb",
        "eventBus",
        "name",
        "options",
        "schema"
      ])])) : schema.value ? (openBlock(), createElementBlock("div", _hoisted_92, [createVNode(unref(Schema_default), {
        breadcrumb: __props.breadcrumb,
        compact: "",
        compositionPath: ["requestBody"],
        eventBus: __props.eventBus,
        hideReadOnly: true,
        name: unref(translate)("operation.requestBody"),
        noncollapsible: "",
        options: {
          hideReadOnly: true,
          orderRequiredPropertiesFirst: __props.options.orderRequiredPropertiesFirst,
          orderSchemaPropertiesBy: __props.options.orderSchemaPropertiesBy,
          expandAllSchemaProperties: __props.options.expandAllSchemaProperties,
          hideModels: __props.options.hideModels,
          document: __props.document
        },
        schema: schema.value,
        schemaContext: "requestBody"
      }, null, 8, [
        "breadcrumb",
        "eventBus",
        "name",
        "options",
        "schema"
      ])])) : createCommentVNode("", true)], 8, _hoisted_167)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/RequestBody.vue.js
var RequestBody_default = _plugin_vue_export_helper_default2(RequestBody_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-75896209"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/components/OperationParameters.vue.script.js
var OperationParameters_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OperationParameters",
  props: mergeModels({
    breadcrumb: {},
    parameters: { default: () => [] },
    requestBody: {},
    eventBus: {},
    document: {},
    options: {}
  }, {
    "selectedContentType": {},
    "selectedContentTypeModifiers": {}
  }),
  emits: ["update:selectedContentType"],
  setup(__props) {
    const { translate } = useLocalization();
    const selectedContentType = useModel(__props, "selectedContentType");
    const splitParameters = computed(() => (__props.parameters ?? []).reduce((acc, p) => {
      const parameter = getResolvedRef(p);
      if (!isHidden(parameter)) flattenDeepObjectQueryParameter(parameter).forEach((flattenedParameter) => {
        acc[flattenedParameter.in].push(flattenedParameter);
      });
      return acc;
    }, {
      cookie: [],
      header: [],
      path: [],
      query: []
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(ParameterList_default, {
          breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "path"] : void 0,
          document: __props.document,
          eventBus: __props.eventBus,
          options: __props.options,
          parameters: splitParameters.value["path"]
        }, {
          title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.pathParameters")), 1)]),
          _: 1
        }, 8, [
          "breadcrumb",
          "document",
          "eventBus",
          "options",
          "parameters"
        ]),
        createVNode(ParameterList_default, {
          breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "query"] : void 0,
          document: __props.document,
          eventBus: __props.eventBus,
          options: __props.options,
          parameters: splitParameters.value["query"]
        }, {
          title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.queryParameters")), 1)]),
          _: 1
        }, 8, [
          "breadcrumb",
          "document",
          "eventBus",
          "options",
          "parameters"
        ]),
        createVNode(ParameterList_default, {
          breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "headers"] : void 0,
          document: __props.document,
          eventBus: __props.eventBus,
          options: __props.options,
          parameters: splitParameters.value["header"]
        }, {
          title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.headers")), 1)]),
          _: 1
        }, 8, [
          "breadcrumb",
          "document",
          "eventBus",
          "options",
          "parameters"
        ]),
        createVNode(ParameterList_default, {
          breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "cookies"] : void 0,
          document: __props.document,
          eventBus: __props.eventBus,
          options: __props.options,
          parameters: splitParameters.value["cookie"]
        }, {
          title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.cookies")), 1)]),
          _: 1
        }, 8, [
          "breadcrumb",
          "document",
          "eventBus",
          "options",
          "parameters"
        ]),
        __props.requestBody ? (openBlock(), createBlock(RequestBody_default, {
          key: 0,
          selectedContentType: selectedContentType.value,
          "onUpdate:selectedContentType": _cache[0] || (_cache[0] = ($event) => selectedContentType.value = $event),
          breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "body"] : void 0,
          document: __props.document,
          eventBus: __props.eventBus,
          options: __props.options,
          requestBody: __props.requestBody
        }, {
          title: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("operation.body")), 1)]),
          _: 1
        }, 8, [
          "selectedContentType",
          "breadcrumb",
          "document",
          "eventBus",
          "options",
          "requestBody"
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/OperationParameters.vue.js
var OperationParameters_default = OperationParameters_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/OperationResponses.vue.script.js
var _hoisted_168 = {
  key: 0,
  class: "mt-6"
};
var _hoisted_248 = { class: "text-c-1 mt-3 mb-3 leading-[1.45] font-medium" };
var _hoisted_335 = ["aria-label"];
var OperationResponses_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "OperationResponses",
  props: {
    responses: {},
    breadcrumb: {},
    collapsableItems: { type: Boolean },
    eventBus: {},
    document: {},
    selectedContentTypes: { default: () => ({}) },
    options: {}
  },
  emits: ["update:selectedContentTypes"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return Object.keys(__props.responses ?? {}).length ? (openBlock(), createElementBlock("div", _hoisted_168, [createBaseVNode("div", _hoisted_248, toDisplayString(unref(translate)("operation.responses")), 1), createBaseVNode("ul", {
        "aria-label": unref(translate)("operation.responses"),
        class: "mb-3 list-none p-0 text-sm"
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.responses, (response, status) => {
        return openBlock(), createBlock(ParameterListItem_default, {
          key: status,
          breadcrumb: __props.breadcrumb ? [...__props.breadcrumb, "responses"] : void 0,
          collapsableItems: __props.collapsableItems,
          document: __props.document,
          eventBus: __props.eventBus,
          name: status,
          options: __props.options,
          parameter: unref(getResolvedRef)(response),
          "onUpdate:selectedContentType": (type) => emit("update:selectedContentTypes", {
            ...__props.selectedContentTypes,
            [status]: type
          })
        }, null, 8, [
          "breadcrumb",
          "collapsableItems",
          "document",
          "eventBus",
          "name",
          "options",
          "parameter",
          "onUpdate:selectedContentType"
        ]);
      }), 128))], 8, _hoisted_335)])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/OperationResponses.vue.js
var OperationResponses_default = OperationResponses_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callback.vue.script.js
var _hoisted_169 = { class: "group callback-list-item" };
var _hoisted_249 = { class: "font-code bg-b-1 callback-sticky-offset callback-list-item-title sticky flex cursor-pointer flex-row items-start gap-2 border-t py-2.5 text-sm group-open:flex-wrap" };
var _hoisted_336 = { class: "text-c-1 min-w-0 flex-1 truncate text-sm leading-5 font-bold group-open:whitespace-normal" };
var _hoisted_422 = { class: "text-c-2 font-normal" };
var _hoisted_514 = { class: "callback-operation-container flex flex-col gap-2" };
var Callback_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Callback",
  props: {
    callback: {},
    method: {},
    name: {},
    url: {},
    eventBus: {},
    document: {},
    options: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("details", _hoisted_169, [createBaseVNode("summary", _hoisted_249, [
        createVNode(unref(ScalarIconCaretRight_default), {
          class: "callback-list-item-icon text-c-3 group-hover:text-c-1 absolute top-3.5 -left-5 size-3 transition-transform duration-100 group-open:rotate-90",
          weight: "bold"
        }),
        createVNode(unref(HttpMethod_default2), {
          as: "span",
          class: "request-method py-0.75 font-bold",
          method: __props.method
        }, null, 8, ["method"]),
        createBaseVNode("div", _hoisted_336, [createTextVNode(toDisplayString(__props.name) + " ", 1), createBaseVNode("span", _hoisted_422, toDisplayString(__props.url), 1)])
      ]), createBaseVNode("div", _hoisted_514, [createVNode(OperationParameters_default, {
        document: __props.document,
        eventBus: __props.eventBus,
        options: __props.options,
        parameters: ((_a = __props.callback.parameters) == null ? void 0 : _a.map((param) => unref(getResolvedRef)(param))) ?? [],
        requestBody: unref(getResolvedRef)(__props.callback.requestBody)
      }, null, 8, [
        "document",
        "eventBus",
        "options",
        "parameters",
        "requestBody"
      ]), createVNode(OperationResponses_default, {
        collapsableItems: false,
        document: __props.document,
        eventBus: __props.eventBus,
        options: __props.options,
        responses: __props.callback.responses
      }, null, 8, [
        "document",
        "eventBus",
        "options",
        "responses"
      ])])]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callback.vue.js
var Callback_default = _plugin_vue_export_helper_default2(Callback_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-474e6fa6"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callbacks.vue.script.js
var _hoisted_170 = ["aria-label"];
var _hoisted_250 = { class: "callbacks-title text-c-1 my-3 text-lg font-medium" };
var Callbacks_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Callbacks",
  props: {
    path: {},
    callbacks: {},
    eventBus: {},
    document: {},
    options: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const flattenedCallbacks = computed(() => {
      const _callbacks = [];
      objectEntries(__props.callbacks).forEach(([name, pathItem]) => {
        objectEntries(getResolvedRef(pathItem)).forEach(([url, methods]) => {
          if (typeof methods !== "object" || !methods) return;
          objectEntries(methods).forEach(([callbackMethod, callback]) => {
            if (!isHttpMethod(callbackMethod)) return;
            _callbacks.push({
              name,
              url,
              method: callbackMethod,
              callback
            });
          });
        });
      });
      return _callbacks;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "aria-label": unref(translate)("operation.callbacks"),
        class: "callbacks-list gap-3",
        role: "group"
      }, [createBaseVNode("div", _hoisted_250, toDisplayString(unref(translate)("operation.callbacks")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(flattenedCallbacks.value, ({ callback, method, name, url }) => {
        return openBlock(), createBlock(Callback_default, {
          key: `${name}-${url}-${method}`,
          callback,
          document: __props.document,
          eventBus: __props.eventBus,
          method,
          name,
          options: __props.options,
          path: __props.path,
          url
        }, null, 8, [
          "callback",
          "document",
          "eventBus",
          "method",
          "name",
          "options",
          "path",
          "url"
        ]);
      }), 128))], 8, _hoisted_170);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/callbacks/Callbacks.vue.js
var Callbacks_default = Callbacks_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadgeScheme.vue.script.js
var _hoisted_171 = { key: 0 };
var _hoisted_251 = { key: 1 };
var SecurityRequirementBadgeScheme_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SecurityRequirementBadgeScheme",
  props: {
    is: { default: "li" },
    scheme: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.is), { class: "markdown" }, {
        default: withCtx(() => {
          var _a;
          return [
            createTextVNode(toDisplayString(__props.scheme.name) + " ", 1),
            ((_a = __props.scheme.scheme) == null ? void 0 : _a.type) ? (openBlock(), createElementBlock("code", _hoisted_171, toDisplayString(__props.scheme.scheme.type), 1)) : createCommentVNode("", true),
            __props.scheme.scopes.length ? (openBlock(), createElementBlock("ul", _hoisted_251, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.scheme.scopes, (scope) => {
              return openBlock(), createElementBlock("li", {
                key: scope,
                class: "font-code text-c-2"
              }, toDisplayString(scope), 1);
            }), 128))])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadgeScheme.vue.js
var SecurityRequirementBadgeScheme_default = SecurityRequirementBadgeScheme_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadge.vue.script.js
var _hoisted_172 = ["aria-expanded"];
var _hoisted_252 = { key: 2 };
var _hoisted_337 = { class: "flex max-w-xs min-w-48 flex-col gap-1.5 p-2 text-sm" };
var _hoisted_423 = { class: "font-medium" };
var _hoisted_515 = {
  key: 0,
  class: "contents"
};
var _hoisted_66 = {
  key: 1,
  class: "contents"
};
var _hoisted_76 = {
  key: 1,
  class: "contents"
};
var SecurityRequirementBadge_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "SecurityRequirementBadge",
  props: {
    requiredSecurity: {},
    hideLabel: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { translate } = useLocalization();
    const triggerRef = ref(null);
    const panelRef = ref(null);
    const isOpen = ref(false);
    const isPinned = ref(false);
    let closeTimeout;
    const scheduleClose = () => {
      if (isPinned.value) return;
      clearTimeout(closeTimeout);
      closeTimeout = setTimeout(() => {
        isOpen.value = false;
      }, 120);
    };
    const cancelClose = () => clearTimeout(closeTimeout);
    const openOnHover = () => {
      cancelClose();
      isOpen.value = true;
    };
    const close = () => {
      cancelClose();
      isOpen.value = false;
      isPinned.value = false;
    };
    const toggleOnClick = () => {
      if (isPinned.value) {
        close();
        return;
      }
      cancelClose();
      isOpen.value = true;
      isPinned.value = true;
    };
    onClickOutside(triggerRef, close, { ignore: [panelRef] });
    onKeyStroke("Escape", () => {
      if (isOpen.value) close();
    });
    onBeforeUnmount(() => clearTimeout(closeTimeout));
    const label = computed(() => __props.requiredSecurity.state === "required" ? translate("authentication.required") : translate("authentication.optional"));
    const verb = computed(() => __props.requiredSecurity.state === "required" ? translate("authentication.requires") : translate("authentication.accepts"));
    const isSingleScheme = computed(() => {
      var _a;
      return __props.requiredSecurity.requirements.length === 1 && ((_a = __props.requiredSecurity.requirements[0]) == null ? void 0 : _a.schemes.length) === 1;
    });
    const isAndGroup = computed(() => {
      var _a;
      return __props.requiredSecurity.requirements.length === 1 && (((_a = __props.requiredSecurity.requirements[0]) == null ? void 0 : _a.schemes.length) ?? 0) > 1;
    });
    const isOrAlternatives = computed(() => __props.requiredSecurity.requirements.length > 1);
    return (_ctx, _cache) => {
      return __props.requiredSecurity.state !== "none" ? (openBlock(), createBlock(unref(ScalarFloating_default), {
        key: 0,
        placement: "bottom-end"
      }, {
        floating: withCtx(() => [isOpen.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "panelRef",
          ref: panelRef,
          class: "relative flex flex-col p-0.75",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"])),
          onMouseenter: cancelClose,
          onMouseleave: scheduleClose
        }, [createBaseVNode("div", _hoisted_337, [createBaseVNode("div", _hoisted_423, [createTextVNode(toDisplayString(verb.value) + " ", 1), isSingleScheme.value ? (openBlock(), createBlock(SecurityRequirementBadgeScheme_default, {
          key: 0,
          is: "span",
          class: "contents",
          scheme: __props.requiredSecurity.requirements[0].schemes[0]
        }, null, 8, ["scheme"])) : isOrAlternatives.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(translate)("authentication.oneOf")), 1)], 64)) : isAndGroup.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(translate)("authentication.allOf")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createTextVNode(toDisplayString(unref(translate)("authentication.authentication")), 1)], 64))]), isOrAlternatives.value ? (openBlock(), createElementBlock("ul", _hoisted_515, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.requiredSecurity.requirements, (group, gi) => {
          return openBlock(), createElementBlock("li", {
            key: gi,
            class: "markdown"
          }, [group.schemes.length === 1 ? (openBlock(), createBlock(SecurityRequirementBadgeScheme_default, {
            key: 0,
            is: "span",
            class: "contents",
            scheme: group.schemes[0]
          }, null, 8, ["scheme"])) : (openBlock(), createElementBlock("ul", _hoisted_66, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.schemes, (scheme, si) => {
            return openBlock(), createBlock(SecurityRequirementBadgeScheme_default, {
              key: si,
              scheme
            }, null, 8, ["scheme"]);
          }), 128))]))]);
        }), 128))])) : isAndGroup.value ? (openBlock(), createElementBlock("ul", _hoisted_76, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.requiredSecurity.requirements[0].schemes, (scheme, key) => {
          return openBlock(), createBlock(SecurityRequirementBadgeScheme_default, {
            key,
            scheme
          }, null, 8, ["scheme"]);
        }), 128))])) : createCommentVNode("", true)]), createVNode(unref(ScalarFloatingBackdrop_default))], 544)) : createCommentVNode("", true)]),
        default: withCtx(() => [createBaseVNode("button", {
          ref_key: "triggerRef",
          ref: triggerRef,
          class: normalizeClass(["security-requirement-badge inline-flex w-fit shrink-0 items-center justify-center gap-1 text-sm", __props.requiredSecurity.state === "optional" ? "text-c-2" : "text-c-1 font-medium"]),
          type: "button",
          "aria-expanded": isOpen.value,
          "aria-haspopup": "dialog",
          onClick: withModifiers(toggleOnClick, ["stop"]),
          onMouseenter: openOnHover,
          onMouseleave: scheduleClose
        }, [__props.requiredSecurity.state === "required" ? (openBlock(), createBlock(unref(ScalarIconLockSimple_default), {
          key: 0,
          class: "size-3",
          weight: "bold"
        })) : (openBlock(), createBlock(unref(ScalarIconLockSimpleOpen_default), {
          key: 1,
          class: "size-3",
          weight: "bold"
        })), !__props.hideLabel ? (openBlock(), createElementBlock("span", _hoisted_252, toDisplayString(label.value), 1)) : createCommentVNode("", true)], 42, _hoisted_172)]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/components/SecurityRequirementBadge.vue.js
var SecurityRequirementBadge_default = SecurityRequirementBadge_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/types/dist/legacy/reference-config.js
var XScalarStability;
(function(XScalarStability2) {
  XScalarStability2["Deprecated"] = "deprecated";
  XScalarStability2["Experimental"] = "experimental";
  XScalarStability2["Stable"] = "stable";
})(XScalarStability || (XScalarStability = {}));

// node_modules/@scalar/api-reference/dist/features/Operation/helpers/operation-stability.js
var isOperationDeprecated = (operation) => operation.deprecated || operation["x-scalar-stability"] === XScalarStability.Deprecated;
var getOperationStability = (operation) => operation.deprecated ? XScalarStability.Deprecated : operation["x-scalar-stability"];
var getOperationStabilityColor = (operation) => {
  switch (getOperationStability(operation)) {
    case XScalarStability.Deprecated:
      return "text-red";
    case XScalarStability.Experimental:
      return "text-orange";
    case XScalarStability.Stable:
      return "text-green";
    default:
      return "";
  }
};

// node_modules/@scalar/api-reference/dist/features/test-request-button/TestRequestButton.vue.script.js
var _hoisted_173 = ["method"];
var TestRequestButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "TestRequestButton",
  props: {
    id: {},
    method: {},
    path: {},
    eventBus: {},
    exampleName: {},
    requestBodyCompositionSelection: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const handleClick = () => {
      const payload = {
        id: __props.id,
        ...__props.exampleName && { exampleName: __props.exampleName },
        ...__props.requestBodyCompositionSelection && Object.keys(__props.requestBodyCompositionSelection).length > 0 && { requestBodyCompositionSelection: __props.requestBodyCompositionSelection }
      };
      __props.eventBus.emit("ui:open:client-modal", payload);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "show-api-client-button",
        method: __props.method,
        type: "button",
        onClick: withModifiers(handleClick, ["stop"])
      }, [
        createVNode(unref(ScalarIconPlay_default), {
          class: "size-3",
          weight: "fill"
        }),
        createBaseVNode("span", null, toDisplayString(unref(translate)("operation.testRequest")), 1),
        createVNode(ScreenReader_default, null, {
          default: withCtx(() => [createTextVNode("(" + toDisplayString(__props.method) + " " + toDisplayString(__props.path) + ")", 1)]),
          _: 1
        })
      ], 8, _hoisted_173);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/test-request-button/TestRequestButton.vue.js
var TestRequestButton_default = _plugin_vue_export_helper_default2(TestRequestButton_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-ad72d914"]]);

// node_modules/@scalar/api-reference/dist/features/x-badges/XBadges.vue.script.js
var XBadges_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "XBadges",
  props: {
    position: {},
    badges: {}
  },
  setup(__props) {
    const filteredBadges = computed(() => {
      if (Array.isArray(__props.badges)) return __props.badges.filter((badge) => badge.position === __props.position || __props.position === "after" && !badge.position);
      return [];
    });
    return (_ctx, _cache) => {
      return filteredBadges.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(filteredBadges.value, (badge) => {
        return openBlock(), createBlock(unref(Badge_default), {
          key: badge.name,
          color: badge.color
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(badge.name), 1)]),
          _: 2
        }, 1032, ["color"]);
      }), 128)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/x-badges/XBadges.vue.js
var XBadges_default = XBadges_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/Operation/layouts/ClassicLayout.vue.script.js
var _hoisted_174 = { class: "operation-title" };
var _hoisted_253 = { class: "operation-details" };
var _hoisted_338 = { class: "endpoint-label-path" };
var _hoisted_424 = { class: "endpoint-label-name" };
var _hoisted_516 = {
  key: 1,
  class: "font-code text-sm"
};
var _hoisted_67 = { class: "endpoint-content" };
var _hoisted_77 = { class: "operation-details-card" };
var _hoisted_84 = {
  key: 0,
  class: "operation-details-card-item"
};
var _hoisted_93 = {
  key: 1,
  class: "operation-details-card-item"
};
var _hoisted_102 = { class: "operation-details-card-item" };
var _hoisted_1110 = { class: "operation-details-card-item" };
var _hoisted_1211 = {
  key: 2,
  class: "operation-details-card-item"
};
var ClassicLayout_vue_vue_type_script_setup_true_lang_default3 = defineComponent({
  __name: "ClassicLayout",
  props: {
    id: {},
    method: {},
    options: {},
    path: {},
    clientOptions: {},
    isCollapsed: { type: Boolean },
    isWebhook: { type: Boolean },
    selectedClient: {},
    selectedExample: {},
    eventBus: {},
    operation: {},
    selectedServer: {},
    selectedSecuritySchemes: {},
    requiredSecurity: {},
    document: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const operationTitle = computed(() => __props.operation.summary || __props.path || "");
    const operationExtensions = computed(() => getXKeysFromObject(__props.operation));
    const hasRequiredScopes = computed(() => getRequiredScopeGroups(__props.requiredSecurity).length > 0);
    const selectedRequestBodyContentType = ref();
    const resolvedExampleKey = ref("");
    const requestBodyCompositionSelection = ref({});
    const requestBodyCompositionSelectionForCodeSample = computed(() => ({ ...requestBodyCompositionSelection.value }));
    const requestBodyCompositionSelectionKey = computed(() => JSON.stringify(requestBodyCompositionSelectionForCodeSample.value));
    provide(REQUEST_BODY_COMPOSITION_INDEX_SYMBOL, requestBodyCompositionSelection);
    const selectedResponseContentTypes = ref({});
    const { copyToClipboard } = useClipboard();
    const { level: headingLevel } = useDocumentOutline("operation");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SectionAccordion_default), {
        id: __props.id,
        "aria-label": operationTitle.value,
        class: "reference-endpoint",
        modelValue: !__props.isCollapsed,
        transparent: "",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = (value) => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("toggle:nav-item", {
            id: __props.id,
            open: value
          });
        })
      }, createSlots({
        title: withCtx(() => [createBaseVNode("div", _hoisted_174, [createBaseVNode("div", _hoisted_253, [createVNode(unref(HttpMethod_default2), {
          class: "endpoint-type",
          method: __props.method,
          short: ""
        }, null, 8, ["method"]), createVNode(unref(Anchor_default), {
          class: "endpoint-anchor",
          onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
            var _a;
            return (_a = __props.eventBus) == null ? void 0 : _a.emit("copy-url:nav-item", { id: __props.id });
          })
        }, {
          default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(`h${unref(headingLevel)}`), { class: "endpoint-label" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_338, [createVNode(OperationPath_default, {
                deprecated: unref(isOperationDeprecated)(__props.operation),
                path: __props.path
              }, null, 8, ["deprecated", "path"])]),
              createBaseVNode("div", _hoisted_424, toDisplayString(operationTitle.value), 1),
              unref(getOperationStability)(__props.operation) ? (openBlock(), createBlock(unref(Badge_default), {
                key: 0,
                class: normalizeClass(["capitalize", unref(getOperationStabilityColor)(__props.operation)])
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(getOperationStability)(__props.operation)), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true),
              __props.isWebhook ? (openBlock(), createBlock(unref(Badge_default), {
                key: 1,
                class: "font-code text-green flex w-fit items-center justify-center gap-1"
              }, {
                default: withCtx(() => [createVNode(unref(ScalarIconWebhooksLogo_default), { weight: "bold" }), createTextVNode(" " + toDisplayString(unref(translate)("operation.webhook")), 1)]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(XBadges_default), {
                badges: __props.operation["x-badges"],
                position: "before"
              }, null, 8, ["badges"])
            ]),
            _: 1
          }))]),
          _: 1
        })])])]),
        actions: withCtx(({ active }) => [
          createVNode(SecurityRequirementBadge_default, {
            hideLabel: "",
            requiredSecurity: __props.requiredSecurity
          }, null, 8, ["requiredSecurity"]),
          createVNode(unref(XBadges_default), {
            badges: __props.operation["x-badges"],
            position: "after"
          }, null, 8, ["badges"]),
          !__props.options.hideTestRequestButton ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [active ? (openBlock(), createBlock(unref(TestRequestButton_default), {
            key: 0,
            id: __props.id,
            eventBus: __props.eventBus,
            exampleName: resolvedExampleKey.value,
            method: __props.method,
            path: __props.path,
            requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value
          }, null, 8, [
            "id",
            "eventBus",
            "exampleName",
            "method",
            "path",
            "requestBodyCompositionSelection"
          ])) : (openBlock(), createBlock(unref(ScalarIconPlay_default), {
            key: 1,
            class: "endpoint-try-hint size-4.5"
          }))], 64)) : createCommentVNode("", true),
          __props.options.showOperationId && __props.operation.operationId ? (openBlock(), createElementBlock("span", _hoisted_516, toDisplayString(__props.operation.operationId), 1)) : createCommentVNode("", true),
          createVNode(unref(ScalarIconButton_default), {
            class: "endpoint-copy p-0.5",
            icon: unref(ScalarIconCopy_default),
            label: unref(translate)("actions.copyEndpointUrl"),
            size: "xs",
            variant: "ghost",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => unref(copyToClipboard)(__props.path), ["stop"]))
          }, null, 8, ["icon", "label"])
        ]),
        default: withCtx(() => {
          var _a;
          return [createBaseVNode("div", _hoisted_67, [
            createBaseVNode("div", _hoisted_77, [
              Object.keys(operationExtensions.value).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_84, [createVNode(SpecificationExtension_default, { value: operationExtensions.value }, null, 8, ["value"])])) : createCommentVNode("", true),
              hasRequiredScopes.value ? (openBlock(), createElementBlock("div", _hoisted_93, [createVNode(OperationScopes_default, { requiredSecurity: __props.requiredSecurity }, null, 8, ["requiredSecurity"])])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_102, [createVNode(OperationParameters_default, {
                selectedContentType: selectedRequestBodyContentType.value,
                "onUpdate:selectedContentType": _cache[2] || (_cache[2] = ($event) => selectedRequestBodyContentType.value = $event),
                document: __props.document,
                eventBus: __props.eventBus,
                options: __props.options,
                parameters: __props.operation.parameters,
                requestBody: unref(getResolvedRef)(__props.operation.requestBody)
              }, null, 8, [
                "selectedContentType",
                "document",
                "eventBus",
                "options",
                "parameters",
                "requestBody"
              ])]),
              createBaseVNode("div", _hoisted_1110, [createVNode(OperationResponses_default, {
                selectedContentTypes: selectedResponseContentTypes.value,
                "onUpdate:selectedContentTypes": _cache[3] || (_cache[3] = ($event) => selectedResponseContentTypes.value = $event),
                document: __props.document,
                eventBus: __props.eventBus,
                options: __props.options,
                responses: __props.operation.responses
              }, null, 8, [
                "selectedContentTypes",
                "document",
                "eventBus",
                "options",
                "responses"
              ])]),
              ((_a = __props.operation) == null ? void 0 : _a.callbacks) ? (openBlock(), createElementBlock("div", _hoisted_1211, [createVNode(Callbacks_default, {
                callbacks: __props.operation.callbacks,
                document: __props.document,
                eventBus: __props.eventBus,
                options: __props.options,
                path: __props.path
              }, null, 8, [
                "callbacks",
                "document",
                "eventBus",
                "options",
                "path"
              ])])) : createCommentVNode("", true)
            ]),
            __props.operation.responses ? (openBlock(), createBlock(unref(ExampleResponses_default), {
              key: 0,
              class: "operation-example-card",
              eventBus: __props.eventBus,
              responses: __props.operation.responses,
              selectedContentTypes: selectedResponseContentTypes.value,
              selectedExample: __props.selectedExample
            }, null, 8, [
              "eventBus",
              "responses",
              "selectedContentTypes",
              "selectedExample"
            ])) : createCommentVNode("", true),
            createBaseVNode("div", null, [__props.operation.externalDocs ? (openBlock(), createBlock(unref(LinkList_default), { key: 0 }, {
              default: withCtx(() => [createVNode(unref(ExternalDocs_default), { value: __props.operation.externalDocs }, null, 8, ["value"])]),
              _: 1
            })) : createCommentVNode("", true), createVNode(unref(ScalarErrorBoundary_default), null, {
              default: withCtx(() => [(openBlock(), createBlock(unref(n3), {
                key: requestBodyCompositionSelectionKey.value,
                class: "operation-example-card",
                clientOptions: __props.clientOptions,
                eventBus: __props.eventBus,
                fallback: "",
                isWebhook: __props.isWebhook,
                method: __props.method,
                operation: __props.operation,
                path: __props.path,
                requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value,
                securitySchemes: __props.selectedSecuritySchemes,
                selectedClient: __props.selectedClient,
                selectedContentType: selectedRequestBodyContentType.value,
                selectedExample: __props.selectedExample,
                selectedServer: __props.selectedServer,
                "onUpdate:exampleKey": _cache[4] || (_cache[4] = ($event) => resolvedExampleKey.value = $event)
              }, null, 8, [
                "clientOptions",
                "eventBus",
                "isWebhook",
                "method",
                "operation",
                "path",
                "requestBodyCompositionSelection",
                "securitySchemes",
                "selectedClient",
                "selectedContentType",
                "selectedExample",
                "selectedServer"
              ]))]),
              _: 1
            })])
          ])];
        }),
        _: 2
      }, [__props.operation.description ? {
        name: "description",
        fn: withCtx(() => [createVNode(unref(ScalarMarkdown_default), {
          anchorPrefix: __props.id,
          "aria-label": unref(translate)("common.description"),
          role: "group",
          transformType: "heading",
          value: __props.operation.description,
          withAnchors: "",
          withImages: ""
        }, null, 8, [
          "anchorPrefix",
          "aria-label",
          "value"
        ])]),
        key: "0"
      } : void 0]), 1032, [
        "id",
        "aria-label",
        "modelValue"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/layouts/ClassicLayout.vue.js
var ClassicLayout_default3 = _plugin_vue_export_helper_default2(ClassicLayout_vue_vue_type_script_setup_true_lang_default3, [["__scopeId", "data-v-d70f7395"]]);

// node_modules/@scalar/api-reference/dist/features/ask-agent-button/AskAgentButton.vue.script.js
var _hoisted_175 = { class: "ask-agent-scalar-input-label" };
var _hoisted_254 = ["placeholder"];
var _hoisted_339 = {
  class: "ask-agent-scalar-send",
  type: "submit"
};
var AskAgentButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "AskAgentButton",
  setup(__props) {
    const agentContext = useAgentContext();
    const { translate } = useLocalization();
    const message = ref("");
    const inputRef = ref();
    function handleSubmit() {
      var _a;
      (_a = agentContext.value) == null ? void 0 : _a.openAgent(message.value);
      message.value = "";
    }
    return (_ctx, _cache) => {
      var _a;
      return ((_a = unref(agentContext)) == null ? void 0 : _a.agentEnabled.value) ? (openBlock(), createElementBlock("form", {
        key: 0,
        class: "agent-button-container",
        onClick: _cache[1] || (_cache[1] = ($event) => {
          var _a2;
          return (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
        }),
        onSubmit: _cache[2] || (_cache[2] = withModifiers(($event) => handleSubmit(), ["prevent"]))
      }, [
        createVNode(unref(ScalarIconSparkle_default), {
          class: "size-3 shrink-0",
          weight: "fill"
        }),
        createBaseVNode("div", _hoisted_175, toDisplayString(unref(translate)("agent.askAiAgent")), 1),
        withDirectives(createBaseVNode("input", {
          ref_key: "inputRef",
          ref: inputRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => message.value = $event),
          class: normalizeClass(["ask-agent-scalar-input", { "ask-agent-scalar-input-not-empty": message.value.length > 0 }]),
          placeholder: unref(translate)("agent.askAiAgent")
        }, null, 10, _hoisted_254), [[vModelText, message.value]]),
        createBaseVNode("button", _hoisted_339, [createVNode(unref(ScalarIconArrowUp_default), {
          class: "size-3",
          weight: "bold"
        })])
      ], 32)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/ask-agent-button/AskAgentButton.vue.js
var AskAgentButton_default = _plugin_vue_export_helper_default2(AskAgentButton_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-10a4fb90"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/layouts/ModernLayout.vue.script.js
var _hoisted_176 = { class: "flex flex-row justify-between gap-1" };
var _hoisted_255 = { class: "flex gap-1" };
var _hoisted_340 = { class: "flex gap-1" };
var _hoisted_425 = { class: "operation-layout" };
var _hoisted_517 = { class: "operation-auth" };
var _hoisted_68 = { class: "operation-description" };
var _hoisted_78 = { class: "operation-details" };
var _hoisted_85 = { class: "examples" };
var _hoisted_94 = { class: "flex" };
var ModernLayout_vue_vue_type_script_setup_true_lang_default3 = defineComponent({
  __name: "ModernLayout",
  props: {
    id: {},
    method: {},
    options: {},
    path: {},
    clientOptions: {},
    isWebhook: { type: Boolean },
    selectedClient: {},
    selectedExample: {},
    eventBus: {},
    operation: {},
    selectedServer: {},
    selectedSecuritySchemes: {},
    requiredSecurity: {},
    document: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const operationTitle = computed(() => __props.operation.summary || __props.path || "");
    const labelId = useId();
    const operationExtensions = computed(() => getXKeysFromObject(__props.operation));
    const selectedRequestBodyContentType = ref();
    const requestBodyCompositionSelection = ref({});
    const requestBodyCompositionSelectionForCodeSample = computed(() => ({ ...requestBodyCompositionSelection.value }));
    const requestBodyCompositionSelectionKey = computed(() => JSON.stringify(requestBodyCompositionSelectionForCodeSample.value));
    provide(REQUEST_BODY_COMPOSITION_INDEX_SYMBOL, requestBodyCompositionSelection);
    const selectedResponseContentTypes = ref({});
    const { level: headingLevel } = useDocumentOutline("operation");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Section_default), {
        id: __props.id,
        "aria-labelledby": unref(labelId),
        label: operationTitle.value,
        tabindex: "-1",
        onIntersecting: _cache[3] || (_cache[3] = () => {
          var _a;
          return (_a = __props.eventBus) == null ? void 0 : _a.emit("intersecting:nav-item", { id: __props.id });
        })
      }, {
        default: withCtx(() => [createVNode(unref(SectionContent_default), null, {
          default: withCtx(() => {
            var _a;
            return [createBaseVNode("div", _hoisted_176, [createBaseVNode("div", _hoisted_255, [
              ((_a = __props.options) == null ? void 0 : _a.showOperationId) && __props.operation.operationId ? (openBlock(), createBlock(unref(Badge_default), { key: 0 }, {
                default: withCtx(() => [createTextVNode(toDisplayString(__props.operation.operationId), 1)]),
                _: 1
              })) : createCommentVNode("", true),
              unref(getOperationStability)(__props.operation) ? (openBlock(), createBlock(unref(Badge_default), {
                key: 1,
                class: normalizeClass(["capitalize", unref(getOperationStabilityColor)(__props.operation)])
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(getOperationStability)(__props.operation)), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true),
              __props.isWebhook ? (openBlock(), createBlock(unref(Badge_default), {
                key: 2,
                class: "font-code text-green flex w-fit items-center justify-center gap-1"
              }, {
                default: withCtx(() => [createVNode(unref(ScalarIconWebhooksLogo_default), { weight: "bold" }), createTextVNode(" " + toDisplayString(unref(translate)("operation.webhook")), 1)]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(XBadges_default), {
                badges: __props.operation["x-badges"],
                position: "before"
              }, null, 8, ["badges"])
            ]), createBaseVNode("div", _hoisted_340, [createVNode(unref(XBadges_default), {
              badges: __props.operation["x-badges"],
              position: "after"
            }, null, 8, ["badges"])])]), createBaseVNode("div", _hoisted_425, [
              createBaseVNode("div", { class: normalizeClass(["operation-title", unref(isOperationDeprecated)(__props.operation) && "deprecated"]) }, [createVNode(unref(Anchor_default), { onCopyAnchorUrl: _cache[0] || (_cache[0] = () => {
                var _a2;
                return (_a2 = __props.eventBus) == null ? void 0 : _a2.emit("copy-url:nav-item", { id: __props.id });
              }) }, {
                default: withCtx(() => [createVNode(unref(SectionHeaderTag_default), {
                  id: unref(labelId),
                  level: unref(headingLevel)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(operationTitle.value), 1)]),
                  _: 1
                }, 8, ["id", "level"])]),
                _: 1
              })], 2),
              createBaseVNode("div", _hoisted_517, [createVNode(SecurityRequirementBadge_default, { requiredSecurity: __props.requiredSecurity }, null, 8, ["requiredSecurity"])]),
              createBaseVNode("div", _hoisted_68, [createVNode(SpecificationExtension_default, { value: operationExtensions.value }, null, 8, ["value"]), createVNode(unref(ScalarMarkdown_default), {
                anchorPrefix: __props.id,
                "aria-label": unref(translate)("common.description"),
                role: "group",
                transformType: "heading",
                value: __props.operation.description,
                withAnchors: "",
                withImages: ""
              }, null, 8, [
                "anchorPrefix",
                "aria-label",
                "value"
              ])]),
              createBaseVNode("div", _hoisted_78, [
                createVNode(OperationScopes_default, { requiredSecurity: __props.requiredSecurity }, null, 8, ["requiredSecurity"]),
                createVNode(OperationParameters_default, {
                  selectedContentType: selectedRequestBodyContentType.value,
                  "onUpdate:selectedContentType": _cache[1] || (_cache[1] = ($event) => selectedRequestBodyContentType.value = $event),
                  breadcrumb: [__props.id],
                  document: __props.document,
                  eventBus: __props.eventBus,
                  options: __props.options,
                  parameters: __props.operation.parameters,
                  requestBody: unref(getResolvedRef)(__props.operation.requestBody)
                }, null, 8, [
                  "selectedContentType",
                  "breadcrumb",
                  "document",
                  "eventBus",
                  "options",
                  "parameters",
                  "requestBody"
                ]),
                createVNode(OperationResponses_default, {
                  selectedContentTypes: selectedResponseContentTypes.value,
                  "onUpdate:selectedContentTypes": _cache[2] || (_cache[2] = ($event) => selectedResponseContentTypes.value = $event),
                  breadcrumb: [__props.id],
                  collapsableItems: !__props.options.expandAllResponses,
                  document: __props.document,
                  eventBus: __props.eventBus,
                  options: __props.options,
                  responses: __props.operation.responses
                }, null, 8, [
                  "selectedContentTypes",
                  "breadcrumb",
                  "collapsableItems",
                  "document",
                  "eventBus",
                  "options",
                  "responses"
                ]),
                createVNode(unref(ScalarErrorBoundary_default), null, {
                  default: withCtx(() => [__props.operation.callbacks ? (openBlock(), createBlock(Callbacks_default, {
                    key: 0,
                    callbacks: __props.operation.callbacks,
                    class: "mt-6",
                    document: __props.document,
                    eventBus: __props.eventBus,
                    options: __props.options,
                    path: __props.path
                  }, null, 8, [
                    "callbacks",
                    "document",
                    "eventBus",
                    "options",
                    "path"
                  ])) : createCommentVNode("", true)]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_85, [
                __props.operation.externalDocs ? (openBlock(), createBlock(unref(LinkList_default), { key: 0 }, {
                  default: withCtx(() => [createVNode(unref(ExternalDocs_default), { value: __props.operation.externalDocs }, null, 8, ["value"])]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(unref(ScalarErrorBoundary_default), null, {
                  default: withCtx(() => [(openBlock(), createBlock(unref(n3), {
                    key: requestBodyCompositionSelectionKey.value,
                    clientOptions: __props.clientOptions,
                    eventBus: __props.eventBus,
                    fallback: "",
                    isWebhook: __props.isWebhook,
                    method: __props.method,
                    operation: __props.operation,
                    path: __props.path,
                    requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value,
                    securitySchemes: __props.selectedSecuritySchemes,
                    selectedClient: __props.selectedClient,
                    selectedContentType: selectedRequestBodyContentType.value,
                    selectedExample: __props.selectedExample,
                    selectedServer: __props.selectedServer
                  }, {
                    header: withCtx(() => {
                      var _a2;
                      return [createVNode(OperationPath_default, {
                        class: "font-code text-c-2 [&_em]:text-c-1 min-w-0 [&_em]:not-italic",
                        deprecated: (_a2 = __props.operation) == null ? void 0 : _a2.deprecated,
                        path: __props.path
                      }, null, 8, ["deprecated", "path"])];
                    }),
                    footer: withCtx(({ exampleName }) => [createBaseVNode("div", _hoisted_94, [createVNode(AskAgentButton_default), !__props.options.hideTestRequestButton ? (openBlock(), createBlock(unref(TestRequestButton_default), {
                      key: 0,
                      id: __props.id,
                      eventBus: __props.eventBus,
                      exampleName,
                      method: __props.method,
                      path: __props.path,
                      requestBodyCompositionSelection: requestBodyCompositionSelectionForCodeSample.value
                    }, null, 8, [
                      "id",
                      "eventBus",
                      "exampleName",
                      "method",
                      "path",
                      "requestBodyCompositionSelection"
                    ])) : createCommentVNode("", true)])]),
                    _: 1
                  }, 8, [
                    "clientOptions",
                    "eventBus",
                    "isWebhook",
                    "method",
                    "operation",
                    "path",
                    "requestBodyCompositionSelection",
                    "securitySchemes",
                    "selectedClient",
                    "selectedContentType",
                    "selectedExample",
                    "selectedServer"
                  ]))]),
                  _: 1
                }),
                createVNode(unref(ScalarErrorBoundary_default), null, {
                  default: withCtx(() => [__props.operation.responses ? (openBlock(), createBlock(unref(ExampleResponses_default), {
                    key: 0,
                    eventBus: __props.eventBus,
                    responses: __props.operation.responses,
                    selectedContentTypes: selectedResponseContentTypes.value,
                    selectedExample: __props.selectedExample,
                    style: { "margin-top": "12px" }
                  }, null, 8, [
                    "eventBus",
                    "responses",
                    "selectedContentTypes",
                    "selectedExample"
                  ])) : createCommentVNode("", true)]),
                  _: 1
                })
              ])
            ])];
          }),
          _: 1
        })]),
        _: 1
      }, 8, [
        "id",
        "aria-labelledby",
        "label"
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/layouts/ModernLayout.vue.js
var ModernLayout_default3 = _plugin_vue_export_helper_default2(ModernLayout_vue_vue_type_script_setup_true_lang_default3, [["__scopeId", "data-v-29191aa0"]]);

// node_modules/@scalar/api-reference/dist/features/Operation/Operation.vue.script.js
var Operation_vue_vue_type_script_setup_true_lang_default2 = defineComponent({
  __name: "Operation",
  props: {
    id: {},
    method: {},
    options: {},
    document: {},
    path: {},
    pathValue: {},
    server: {},
    securitySchemes: {},
    clientOptions: {},
    isCollapsed: { type: Boolean },
    isWebhook: { type: Boolean },
    selectedClient: {},
    selectedExample: {},
    eventBus: {},
    authStore: {}
  },
  setup(__props) {
    const operation = computed(() => {
      var _a, _b;
      const entity = getResolvedRef((_a = __props.pathValue) == null ? void 0 : _a[__props.method]);
      if (!entity) return null;
      const parameters = combineParams((_b = __props.pathValue) == null ? void 0 : _b.parameters, entity.parameters);
      return {
        ...entity,
        parameters
      };
    });
    const selectedServer = computed(() => {
      var _a, _b;
      return getFirstServer(((_a = operation.value) == null ? void 0 : _a.servers) ?? null, ((_b = __props.pathValue) == null ? void 0 : _b.servers) ?? null, __props.server);
    });
    const requiredSecurity = computed(() => getRequiredSecurity(operation.value, __props.document));
    const selectedSecuritySchemes = computed(() => {
      var _a, _b, _c, _d;
      return filterSelectedSecurity(__props.document, operation.value, __props.authStore.getAuthSelectedSchemas({
        type: "document",
        documentName: ((_b = (_a = __props.document) == null ? void 0 : _a["x-scalar-navigation"]) == null ? void 0 : _b.name) ?? ""
      }), __props.authStore.getAuthSelectedSchemas({
        type: "operation",
        documentName: ((_d = (_c = __props.document) == null ? void 0 : _c["x-scalar-navigation"]) == null ? void 0 : _d.name) ?? "",
        path: __props.path,
        method: __props.method
      }), __props.securitySchemes);
    });
    return (_ctx, _cache) => {
      return operation.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.options.layout === "classic" ? (openBlock(), createBlock(ClassicLayout_default3, {
        key: 0,
        id: __props.id,
        clientOptions: __props.clientOptions,
        document: __props.document,
        eventBus: __props.eventBus,
        isCollapsed: __props.isCollapsed,
        isWebhook: __props.isWebhook,
        method: __props.method,
        operation: operation.value,
        options: __props.options,
        path: __props.path,
        requiredSecurity: requiredSecurity.value,
        selectedClient: __props.selectedClient,
        selectedExample: __props.selectedExample,
        selectedSecuritySchemes: selectedSecuritySchemes.value,
        selectedServer: selectedServer.value
      }, null, 8, [
        "id",
        "clientOptions",
        "document",
        "eventBus",
        "isCollapsed",
        "isWebhook",
        "method",
        "operation",
        "options",
        "path",
        "requiredSecurity",
        "selectedClient",
        "selectedExample",
        "selectedSecuritySchemes",
        "selectedServer"
      ])) : (openBlock(), createBlock(ModernLayout_default3, {
        key: 1,
        id: __props.id,
        clientOptions: __props.clientOptions,
        document: __props.document,
        eventBus: __props.eventBus,
        isWebhook: __props.isWebhook,
        method: __props.method,
        operation: operation.value,
        options: __props.options,
        path: __props.path,
        requiredSecurity: requiredSecurity.value,
        selectedClient: __props.selectedClient,
        selectedExample: __props.selectedExample,
        selectedSecuritySchemes: selectedSecuritySchemes.value,
        selectedServer: selectedServer.value
      }, null, 8, [
        "id",
        "clientOptions",
        "document",
        "eventBus",
        "isWebhook",
        "method",
        "operation",
        "options",
        "path",
        "requiredSecurity",
        "selectedClient",
        "selectedExample",
        "selectedSecuritySchemes",
        "selectedServer"
      ]))], 64)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/Operation/Operation.vue.js
var Operation_default2 = Operation_vue_vue_type_script_setup_true_lang_default2;

// node_modules/@scalar/api-reference/dist/components/Content/Operations/TraversedEntry.vue.script.js
var _hoisted_177 = ["id"];
var TraversedEntry_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "TraversedEntry",
  props: {
    authStore: {},
    level: { default: 0 },
    insideTagContainer: {
      type: Boolean,
      default: false
    },
    entries: {},
    document: {},
    clientOptions: {},
    options: {},
    selectedServer: {},
    securitySchemes: {},
    selectedClient: {},
    selectedExample: {},
    expandedItems: {},
    eventBus: {}
  },
  setup(__props) {
    const isTagGroup = (entry) => entry["type"] === "tag" && entry.isGroup === true && entry.isTagGroup === true;
    const isTag = (entry) => entry["type"] === "tag" && !isTagGroup(entry) && entry.id !== "models";
    const isOperation = (entry) => entry["type"] === "operation";
    const isWebhook = (entry) => entry["type"] === "webhook";
    const isModelsTag = (entry) => entry["type"] === "models";
    const isModel = (entry) => entry["type"] === "model";
    function getPathValue(entry) {
      var _a, _b;
      return isWebhook(entry) ? getResolvedPathItem((_a = __props.document.webhooks) == null ? void 0 : _a[entry.name]) : getResolvedPathItem((_b = __props.document.paths) == null ? void 0 : _b[entry.path]);
    }
    return (_ctx, _cache) => {
      const _component_TraversedEntry = resolveComponent("TraversedEntry", true);
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.entries, (entry) => {
        return openBlock(), createBlock(Lazy_default, {
          id: entry.id,
          key: `${entry.id}-${__props.options.layout}`,
          expanded: !!__props.expandedItems[entry.id]
        }, {
          default: withCtx(() => {
            var _a, _b, _c;
            return [isOperation(entry) || isWebhook(entry) ? (openBlock(), createBlock(unref(SectionContainer_default), {
              key: 0,
              omit: __props.level !== 0
            }, {
              default: withCtx(() => [createVNode(unref(Operation_default2), {
                id: entry.id,
                authStore: __props.authStore,
                clientOptions: __props.clientOptions,
                document: __props.document,
                eventBus: __props.eventBus,
                isCollapsed: !__props.expandedItems[entry.id],
                isWebhook: isWebhook(entry),
                method: entry.method,
                options: __props.options,
                path: isWebhook(entry) ? entry.name : entry.path,
                pathValue: getPathValue(entry),
                securitySchemes: __props.securitySchemes,
                selectedClient: __props.selectedClient,
                selectedExample: __props.selectedExample,
                server: __props.selectedServer
              }, null, 8, [
                "id",
                "authStore",
                "clientOptions",
                "document",
                "eventBus",
                "isCollapsed",
                "isWebhook",
                "method",
                "options",
                "path",
                "pathValue",
                "securitySchemes",
                "selectedClient",
                "selectedExample",
                "server"
              ])]),
              _: 2
            }, 1032, ["omit"])) : isTag(entry) || isTagGroup(entry) && __props.options.layout === "classic" ? (openBlock(), createBlock(unref(Tag_default), {
              key: 1,
              eventBus: __props.eventBus,
              isCollapsed: !__props.expandedItems[entry.id],
              layout: __props.options.layout,
              moreThanOneTag: __props.entries.filter(isTag).length > 1,
              nested: __props.insideTagContainer,
              tag: entry
            }, {
              default: withCtx(() => {
                var _a2;
                return ["children" in entry && ((_a2 = entry.children) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(_component_TraversedEntry, {
                  key: 0,
                  authStore: __props.authStore,
                  clientOptions: __props.clientOptions,
                  document: __props.document,
                  entries: entry.children,
                  eventBus: __props.eventBus,
                  expandedItems: __props.expandedItems,
                  insideTagContainer: true,
                  level: __props.level + 1,
                  options: __props.options,
                  securitySchemes: __props.securitySchemes,
                  selectedClient: __props.selectedClient,
                  selectedExample: __props.selectedExample,
                  selectedServer: __props.selectedServer
                }, null, 8, [
                  "authStore",
                  "clientOptions",
                  "document",
                  "entries",
                  "eventBus",
                  "expandedItems",
                  "level",
                  "options",
                  "securitySchemes",
                  "selectedClient",
                  "selectedExample",
                  "selectedServer"
                ])) : createCommentVNode("", true)];
              }),
              _: 2
            }, 1032, [
              "eventBus",
              "isCollapsed",
              "layout",
              "moreThanOneTag",
              "nested",
              "tag"
            ])) : isTagGroup(entry) ? (openBlock(), createElementBlock("div", {
              key: 2,
              id: entry.id
            }, [createVNode(_component_TraversedEntry, {
              authStore: __props.authStore,
              clientOptions: __props.clientOptions,
              document: __props.document,
              entries: entry.children || [],
              eventBus: __props.eventBus,
              expandedItems: __props.expandedItems,
              insideTagContainer: __props.insideTagContainer,
              level: __props.level + 1,
              options: __props.options,
              securitySchemes: __props.securitySchemes,
              selectedClient: __props.selectedClient,
              selectedExample: __props.selectedExample,
              selectedServer: __props.selectedServer
            }, null, 8, [
              "authStore",
              "clientOptions",
              "document",
              "entries",
              "eventBus",
              "expandedItems",
              "insideTagContainer",
              "level",
              "options",
              "securitySchemes",
              "selectedClient",
              "selectedExample",
              "selectedServer"
            ])], 8, _hoisted_177)) : isModelsTag(entry) && ((_a = __props.document.components) == null ? void 0 : _a.schemas) ? (openBlock(), createBlock(ModelTag_default, {
              key: 3,
              id: entry.id,
              eventBus: __props.eventBus,
              isCollapsed: !__props.expandedItems[entry.id],
              layout: __props.options.layout,
              modelsSectionLabel: __props.options.modelsSectionLabel
            }, {
              default: withCtx(() => [createVNode(_component_TraversedEntry, {
                authStore: __props.authStore,
                clientOptions: __props.clientOptions,
                document: __props.document,
                entries: entry.children || [],
                eventBus: __props.eventBus,
                expandedItems: __props.expandedItems,
                level: __props.level + 1,
                options: __props.options,
                securitySchemes: __props.securitySchemes,
                selectedClient: __props.selectedClient,
                selectedExample: __props.selectedExample,
                selectedServer: __props.selectedServer
              }, null, 8, [
                "authStore",
                "clientOptions",
                "document",
                "entries",
                "eventBus",
                "expandedItems",
                "level",
                "options",
                "securitySchemes",
                "selectedClient",
                "selectedExample",
                "selectedServer"
              ])]),
              _: 2
            }, 1032, [
              "id",
              "eventBus",
              "isCollapsed",
              "layout",
              "modelsSectionLabel"
            ])) : isModel(entry) && ((_c = (_b = __props.document.components) == null ? void 0 : _b.schemas) == null ? void 0 : _c[entry.name]) ? (openBlock(), createBlock(Model_default, {
              key: 4,
              id: entry.id,
              document: __props.document,
              eventBus: __props.eventBus,
              isCollapsed: !__props.expandedItems[entry.id],
              name: entry.name,
              options: __props.options,
              schema: unref(getResolvedRef)(__props.document.components.schemas[entry.name])
            }, null, 8, [
              "id",
              "document",
              "eventBus",
              "isCollapsed",
              "name",
              "options",
              "schema"
            ])) : createCommentVNode("", true)];
          }),
          _: 2
        }, 1032, ["id", "expanded"]);
      }), 128);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Operations/TraversedEntry.vue.js
var TraversedEntry_default = TraversedEntry_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPluginView.vue.script.js
var _hoisted_178 = ["id"];
var RenderPluginView_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "RenderPluginView",
  props: {
    item: {},
    options: {},
    eventBus: {}
  },
  setup(__props) {
    const el = useTemplateRef("el");
    useIntersection(el, () => {
      var _a, _b;
      if ((_a = __props.item.sidebar) == null ? void 0 : _a.show) (_b = __props.eventBus) == null ? void 0 : _b.emit("intersecting:nav-item", { id: __props.item.id });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.item.id,
        ref_key: "el",
        ref: el
      }, [createVNode(unref(ScalarErrorBoundary_default), null, {
        default: withCtx(() => [__props.item.renderer ? (openBlock(), createBlock(resolveDynamicComponent(__props.item.renderer), normalizeProps(mergeProps({ key: 0 }, {
          component: __props.item.component,
          options: __props.options,
          ...__props.item.props
        })), null, 16)) : (openBlock(), createBlock(resolveDynamicComponent(__props.item.component), normalizeProps(mergeProps({ key: 1 }, {
          options: __props.options,
          ...__props.item.props
        })), null, 16))]),
        _: 1
      })], 8, _hoisted_178);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPluginView.vue.js
var RenderPluginView_default = RenderPluginView_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPlugins.vue.script.js
var _hoisted_179 = {
  key: 0,
  class: "plugin-view"
};
var RenderPlugins_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "RenderPlugins",
  props: {
    viewName: {},
    options: {},
    eventBus: {},
    documentSlug: {}
  },
  setup(__props) {
    const { getViewComponents } = usePluginManager();
    const components = computed(() => getViewComponents(__props.viewName, __props.documentSlug));
    return (_ctx, _cache) => {
      return components.value.length ? (openBlock(), createElementBlock("div", _hoisted_179, [(openBlock(true), createElementBlock(Fragment, null, renderList(components.value, (item) => {
        return openBlock(), createBlock(RenderPluginView_default, {
          key: item.id,
          eventBus: __props.eventBus,
          item,
          options: __props.options
        }, null, 8, [
          "eventBus",
          "item",
          "options"
        ]);
      }), 128))])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/RenderPlugins/RenderPlugins.vue.js
var RenderPlugins_default = RenderPlugins_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/SectionFlare/SectionFlare.vue.js
var _sfc_main7 = {};
var _hoisted_180 = { class: "section-flare" };
function _sfc_render7(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_180, [..._cache[0] || (_cache[0] = [createStaticVNode('<div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div><div class="section-flare-item" data-v-5cebff7a></div>', 8)])]);
}
var SectionFlare_default = _plugin_vue_export_helper_default2(_sfc_main7, [["render", _sfc_render7], ["__scopeId", "data-v-5cebff7a"]]);

// node_modules/@scalar/api-reference/dist/components/Content/Content.vue.script.js
var _hoisted_181 = { class: "narrow-references-container" };
var _hoisted_256 = {
  key: 3,
  class: "h-dvh"
};
var Content_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "Content",
  props: {
    infoSectionId: {},
    contextChain: { default: () => [] },
    documentSlug: {},
    options: {},
    document: {},
    clientDocument: {},
    authStore: {},
    xScalarDefaultClient: {},
    xScalarDefaultExample: {},
    items: {},
    expandedItems: {},
    eventBus: {},
    environment: {},
    headingSlugGenerator: { type: Function }
  },
  setup(__props) {
    const clientOptions = computed(() => i2(mapHiddenClientsConfig(__props.options.hiddenClients)));
    const showContextBar = computed(() => hasRenderableTagHierarchy(__props.items, __props.options.layout));
    const contextBarChain = computed(() => __props.contextChain.length >= 2 ? __props.contextChain : getInitialContextChain(__props.items, __props.options.layout));
    const sdkInstallation = computed(() => {
      var _a, _b;
      return getRenderableSdks((_b = (_a = openApiDocument.value) == null ? void 0 : _a.info) == null ? void 0 : _b["x-scalar-sdk-installation"]);
    });
    const openApiDocument = computed(() => isOpenApiDocument(__props.document) ? __props.document : void 0);
    const openApiClientDocument = computed(() => isOpenApiDocument(__props.clientDocument) ? __props.clientDocument : void 0);
    const asyncApiDocument = computed(() => isAsyncApiDocument(__props.document) ? __props.document : void 0);
    const asyncApiClientDocument = computed(() => isAsyncApiDocument(__props.clientDocument) ? __props.clientDocument : void 0);
    const documentType = computed(() => getDocumentType(__props.document));
    const specificationVersion = computed(() => {
      var _a;
      if (isAsyncApiDocument(__props.document)) return __props.document["x-original-aas-version"] ?? __props.document.asyncapi;
      return (_a = openApiDocument.value) == null ? void 0 : _a["x-original-oas-version"];
    });
    const documentExtensions = computed(() => getXKeysFromObject(__props.document));
    const infoExtensions = computed(() => {
      var _a;
      return getXKeysFromObject((_a = __props.document) == null ? void 0 : _a.info);
    });
    const servers = computed(() => {
      var _a, _b, _c, _d;
      return getServers(((_a = __props.options) == null ? void 0 : _a.servers) ?? ((_b = openApiClientDocument.value) == null ? void 0 : _b.servers), {
        baseServerUrl: (_c = __props.options) == null ? void 0 : _c.baseServerURL,
        documentUrl: (_d = __props.clientDocument) == null ? void 0 : _d["x-scalar-original-source-url"]
      });
    });
    const selectedServer = computed(() => getSelectedServer(openApiClientDocument.value ?? null, null, null, servers.value));
    const asyncApiServers = computed(() => asyncApiClientDocument.value ? getAsyncApiServers(asyncApiClientDocument.value, { webSocketOnly: false }) : []);
    const asyncApiSelectedServer = computed(() => getSelectedAsyncApiServer(asyncApiClientDocument.value ?? null, asyncApiServers.value));
    const securitySchemes = computed(() => {
      var _a, _b, _c;
      const sourceDocument = asyncApiClientDocument.value ?? openApiClientDocument.value;
      return mergeSecurity((_a = (sourceDocument == null ? void 0 : sourceDocument.components) ? getResolvedRef(sourceDocument.components) : void 0) == null ? void 0 : _a.securitySchemes, (_b = __props.options.authentication) == null ? void 0 : _b.securitySchemes, __props.authStore, ((_c = sourceDocument == null ? void 0 : sourceDocument["x-scalar-navigation"]) == null ? void 0 : _c.name) ?? "", __props.options.oauth2RedirectUri);
    });
    const showAuthSelector = computed(() => Boolean(__props.document) && (Boolean(asyncApiDocument.value) || !__props.options.hideTestRequestButton));
    onMounted(() => {
      scheduleInitialLoadComplete();
    });
    provideDocumentOutline("document");
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(SectionFlare_default)), createBaseVNode("div", _hoisted_181, [
        renderSlot(_ctx.$slots, "start"),
        createVNode(unref(RenderPlugins_default), {
          documentSlug: __props.documentSlug,
          eventBus: __props.eventBus,
          options: __props.options,
          viewName: "content.start"
        }, null, 8, [
          "documentSlug",
          "eventBus",
          "options"
        ]),
        createVNode(unref(InfoBlock_default), {
          id: __props.infoSectionId,
          documentDownloadType: __props.options.documentDownloadType,
          documentExtensions: documentExtensions.value,
          documentType: documentType.value,
          documentUrl: (_a = __props.document) == null ? void 0 : _a["x-scalar-original-source-url"],
          eventBus: __props.eventBus,
          externalDocs: (_b = openApiDocument.value) == null ? void 0 : _b.externalDocs,
          headingSlugGenerator: __props.headingSlugGenerator,
          info: (_c = __props.document) == null ? void 0 : _c.info,
          infoExtensions: infoExtensions.value,
          layout: __props.options.layout,
          specificationVersion: specificationVersion.value
        }, {
          selectors: withCtx(() => [
            createVNode(unref(ScalarErrorBoundary_default), null, {
              default: withCtx(() => {
                var _a2;
                return [((_a2 = servers.value) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
                  key: 0,
                  class: "scalar-reference-intro-server scalar-client introduction-card-item text-base leading-normal [--scalar-address-bar-height:0px]"
                }, {
                  default: withCtx(() => [createVNode(unref(ServerSelector_default), {
                    eventBus: __props.eventBus,
                    selectedServer: selectedServer.value,
                    servers: servers.value
                  }, null, 8, [
                    "eventBus",
                    "selectedServer",
                    "servers"
                  ])]),
                  _: 1
                })) : createCommentVNode("", true)];
              }),
              _: 1
            }),
            createVNode(unref(ScalarErrorBoundary_default), null, {
              default: withCtx(() => [asyncApiServers.value.length ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
                key: 0,
                class: "scalar-reference-intro-server scalar-client introduction-card-item text-base leading-normal [--scalar-address-bar-height:0px]"
              }, {
                default: withCtx(() => [createVNode(unref(AsyncApiServerSelector_default), {
                  eventBus: __props.eventBus,
                  selectedServer: asyncApiSelectedServer.value,
                  servers: asyncApiServers.value
                }, null, 8, [
                  "eventBus",
                  "selectedServer",
                  "servers"
                ])]),
                _: 1
              })) : createCommentVNode("", true)]),
              _: 1
            }),
            createVNode(unref(ScalarErrorBoundary_default), null, {
              default: withCtx(() => [showAuthSelector.value ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
                key: 0,
                class: "scalar-reference-intro-auth scalar-client introduction-card-item leading-normal"
              }, {
                default: withCtx(() => [createVNode(unref(Auth_default), {
                  authStore: __props.authStore,
                  document: __props.clientDocument,
                  environment: __props.environment,
                  eventBus: __props.eventBus,
                  options: __props.options,
                  securitySchemes: securitySchemes.value,
                  selectedServer: selectedServer.value
                }, null, 8, [
                  "authStore",
                  "document",
                  "environment",
                  "eventBus",
                  "options",
                  "securitySchemes",
                  "selectedServer"
                ])]),
                _: 1
              })) : createCommentVNode("", true)]),
              _: 1
            }),
            createVNode(unref(ScalarErrorBoundary_default), null, {
              default: withCtx(() => [sdkInstallation.value.length ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
                key: 0,
                class: "introduction-card-item scalar-reference-intro-clients"
              }, {
                default: withCtx(() => [createVNode(unref(SdkInstallationInstructions_default), {
                  class: "introduction-card-item scalar-reference-intro-clients",
                  eventBus: __props.eventBus,
                  selectedClient: __props.xScalarDefaultClient,
                  xScalarSdkInstallation: sdkInstallation.value
                }, null, 8, [
                  "eventBus",
                  "selectedClient",
                  "xScalarSdkInstallation"
                ])]),
                _: 1
              })) : clientOptions.value.length && !asyncApiDocument.value ? (openBlock(), createBlock(unref(IntroductionCardItem_default), {
                key: 1,
                class: "introduction-card-item scalar-reference-intro-clients"
              }, {
                default: withCtx(() => [createVNode(unref(ClientSelector_default), {
                  class: "introduction-card-item scalar-reference-intro-clients",
                  clientOptions: clientOptions.value,
                  eventBus: __props.eventBus,
                  selectedClient: __props.xScalarDefaultClient
                }, null, 8, [
                  "clientOptions",
                  "eventBus",
                  "selectedClient"
                ])]),
                _: 1
              })) : createCommentVNode("", true)]),
              _: 1
            })
          ]),
          _: 1
        }, 8, [
          "id",
          "documentDownloadType",
          "documentExtensions",
          "documentType",
          "documentUrl",
          "eventBus",
          "externalDocs",
          "headingSlugGenerator",
          "info",
          "infoExtensions",
          "layout",
          "specificationVersion"
        ]),
        showContextBar.value ? (openBlock(), createBlock(unref(ContextBar_default), {
          key: 0,
          chain: contextBarChain.value,
          onNavigate: _cache[0] || (_cache[0] = (id) => __props.eventBus.emit("scroll-to:nav-item", { id }))
        }, null, 8, ["chain"])) : createCommentVNode("", true),
        __props.items.length && openApiDocument.value ? (openBlock(), createBlock(TraversedEntry_default, {
          key: 1,
          authStore: __props.authStore,
          clientOptions: clientOptions.value,
          document: openApiDocument.value,
          entries: __props.items,
          eventBus: __props.eventBus,
          expandedItems: __props.expandedItems,
          options: __props.options,
          securitySchemes: securitySchemes.value,
          selectedClient: __props.xScalarDefaultClient,
          selectedExample: __props.xScalarDefaultExample,
          selectedServer: selectedServer.value
        }, null, 8, [
          "authStore",
          "clientOptions",
          "document",
          "entries",
          "eventBus",
          "expandedItems",
          "options",
          "securitySchemes",
          "selectedClient",
          "selectedExample",
          "selectedServer"
        ])) : __props.items.length && asyncApiDocument.value ? (openBlock(), createBlock(unref(AsyncApiTraversedEntry_default), {
          key: 2,
          document: asyncApiDocument.value,
          entries: __props.items,
          eventBus: __props.eventBus,
          expandedItems: __props.expandedItems,
          options: __props.options
        }, null, 8, [
          "document",
          "entries",
          "eventBus",
          "expandedItems",
          "options"
        ])) : createCommentVNode("", true),
        createVNode(unref(RenderPlugins_default), {
          documentSlug: __props.documentSlug,
          eventBus: __props.eventBus,
          options: __props.options,
          viewName: "content.end"
        }, null, 8, [
          "documentSlug",
          "eventBus",
          "options"
        ]),
        renderSlot(_ctx.$slots, "end"),
        !unref(firstLazyLoadComplete) ? (openBlock(), createElementBlock("div", _hoisted_256)) : createCommentVNode("", true)
      ])], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/Content/Content.vue.js
var Content_default = Content_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/CrawlerNav.vue.script.js
var _hoisted_182 = {
  key: 0,
  "aria-hidden": "true",
  "data-scalar-crawler-nav": "",
  hidden: ""
};
var _hoisted_257 = ["href"];
var CrawlerNav_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "CrawlerNav",
  props: {
    items: {},
    basePath: {},
    isMultiDocument: { type: Boolean },
    options: {}
  },
  setup(__props) {
    const links = computed(() => {
      const result = [];
      const walk = (entries) => {
        var _a;
        for (const entry of filterItems("reference", entries, (_a = __props.options) == null ? void 0 : _a.hideOperationDefaultExamples)) {
          const href = makeHrefFromId(entry.id, __props.basePath, __props.isMultiDocument);
          if (href) result.push({
            id: entry.id,
            href,
            title: entry.title
          });
          if ("children" in entry && entry.children) walk(entry.children);
        }
      };
      walk(__props.items);
      return result;
    });
    return (_ctx, _cache) => {
      return links.value.length > 0 ? (openBlock(), createElementBlock("nav", _hoisted_182, [createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(links.value, (link) => {
        return openBlock(), createElementBlock("li", { key: link.id }, [createBaseVNode("a", { href: link.href }, toDisplayString(link.title), 9, _hoisted_257)]);
      }), 128))])])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/CrawlerNav.vue.js
var CrawlerNav_default = CrawlerNav_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/components/MobileHeader.vue.script.js
var _hoisted_183 = { class: "flex h-(--scalar-header-height) w-full items-center border-b bg-inherit px-2" };
var _hoisted_258 = {
  key: 1,
  class: "flex-1 text-sm font-medium whitespace-nowrap"
};
var _hoisted_341 = { class: "flex h-6 items-center gap-1 pl-1" };
var MobileHeader_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "MobileHeader",
  props: {
    breadcrumb: {},
    isSidebarOpen: { type: Boolean },
    showSidebar: { type: Boolean }
  },
  emits: ["toggleSidebar"],
  setup(__props, { emit: __emit }) {
    const { translate } = useLocalization();
    const emit = __emit;
    const variants = cva({
      base: "lg:hidden items-center bg-b-1 sticky top-(--scalar-custom-header-height,0) z-10 [grid-area:header]",
      variants: { open: { true: "h-(--refs-sidebar-height) custom-scrollbar flex flex-col z-50" } }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [renderSlot(_ctx.$slots, "sidebar", normalizeProps(guardReactiveProps({ sidebarClasses: "hidden lg:flex sticky top-(--refs-header-height) h-(--refs-sidebar-height) w-(--refs-sidebar-width) [grid-area:navigation]" }))), createBaseVNode("div", { class: normalizeClass(["t-doc__header", unref(variants)({ open: __props.isSidebarOpen })]) }, [createBaseVNode("header", _hoisted_183, [
        __props.showSidebar ? (openBlock(), createBlock(unref(ScalarIconButton_default), {
          key: 0,
          icon: __props.isSidebarOpen ? unref(ScalarIconX_default) : unref(ScalarIconList_default),
          label: __props.isSidebarOpen ? unref(translate)("navigation.closeMenu") : unref(translate)("navigation.openMenu"),
          size: "md",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("toggleSidebar"))
        }, null, 8, ["icon", "label"])) : createCommentVNode("", true),
        __props.showSidebar ? (openBlock(), createElementBlock("span", _hoisted_258, toDisplayString(__props.breadcrumb), 1)) : renderSlot(_ctx.$slots, "search", {}, void 0, void 0, 2),
        createBaseVNode("div", _hoisted_341, [renderSlot(_ctx.$slots, "actions")])
      ]), __props.isSidebarOpen ? renderSlot(_ctx.$slots, "sidebar", normalizeProps(guardReactiveProps({ sidebarClasses: "overflow-y-auto custom-scrollbar min-h-0 flex-1 w-full border-none" })), void 0, void 0, 0) : createCommentVNode("", true)], 2)], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/MobileHeader.vue.js
var MobileHeader_default = MobileHeader_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarPopover.vue.script.js
var _hoisted_184 = {
  class: "text-c-2 hover:text-c-1 hover:bg-b-2 flex items-center gap-1 rounded px-2 py-2.25 text-base leading-none",
  type: "button"
};
var _hoisted_259 = { class: "custom-scroll bg-b-1 flex flex-col gap-7 rounded-lg p-7 pb-6" };
var _hoisted_342 = { class: "text-c-2 flex items-center justify-center gap-1 p-2 text-sm" };
var ApiReferenceToolbarPopover_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarPopover",
  setup(__props) {
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarPopover_default), {
        class: "max-h-[inherit] max-w-[inherit] p-0 text-base",
        placement: "bottom-end",
        teleport: ""
      }, {
        default: withCtx(({ open }) => [renderSlot(_ctx.$slots, "button", { open }, () => [createBaseVNode("button", _hoisted_184, [renderSlot(_ctx.$slots, "label"), createVNode(unref(ScalarIconCaretDown_default), { class: normalizeClass(["size-3", { "rotate-180": open }]) }, null, 8, ["class"])])])]),
        popover: withCtx((props) => [createBaseVNode("div", _hoisted_259, [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(props)))]), createBaseVNode("div", _hoisted_342, [createVNode(unref(ScalarIconInfo_default), { class: "size-3.5 shrink-0" }), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "info", {}, () => [createTextVNode(toDisplayString(unref(translate)("developerTools.localhostOnly")), 1)])])])]),
        backdrop: withCtx(() => [createVNode(unref(ScalarFloatingBackdrop_default), { class: "bg-b-2 rounded-lg" })]),
        _: 3
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarPopover.vue.js
var ApiReferenceToolbarPopover_default = ApiReferenceToolbarPopover_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarTitle.vue.script.js
var _hoisted_185 = {
  class: "text-c-2 hover:text-c-1 hover:bg-b-2 ml-auto flex items-center gap-1 rounded px-2 py-2.25 text-base leading-none",
  type: "button"
};
var _hoisted_260 = { class: "-m-2 flex flex-col gap-2 leading-relaxed" };
var _hoisted_343 = { class: "bg-b-2 inline-flex items-center gap-0.5 rounded border px-1 py-0.5 text-sm" };
var CONFIG_SETTING = 'showDeveloperTools: "never"';
var ApiReferenceToolbarTitle_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarTitle",
  setup(__props) {
    const { copyToClipboard } = useClipboard();
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ApiReferenceToolbarPopover_default, {
        class: "w-120",
        placement: "bottom-start"
      }, {
        button: withCtx(() => [createBaseVNode("button", _hoisted_185, [createVNode(unref(ScalarIconInfo_default)), createTextVNode(" " + toDisplayString(unref(translate)("developerTools.title")), 1)])]),
        info: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.localhostOnly")), 1)]),
        default: withCtx(() => [createBaseVNode("div", _hoisted_260, [createBaseVNode("div", null, toDisplayString(unref(translate)("developerTools.intro")), 1), createBaseVNode("div", null, [
          createTextVNode(toDisplayString(unref(translate)("developerTools.disableToolbarBefore")) + " ", 1),
          createBaseVNode("div", _hoisted_343, [createBaseVNode("code", { class: "font-code" }, toDisplayString(CONFIG_SETTING)), createVNode(unref(ScalarIconButton_default), {
            class: "-m-1 p-1.25",
            icon: unref(ScalarIconCopy_default),
            label: unref(translate)("actions.copyToClipboard"),
            size: "sm",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(copyToClipboard)(CONFIG_SETTING))
          }, null, 8, ["icon", "label"])]),
          createTextVNode(" " + toDisplayString(unref(translate)("developerTools.disableToolbarAfter")), 1)
        ])])]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarTitle.vue.js
var ApiReferenceToolbarTitle_default = ApiReferenceToolbarTitle_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarBlurb.vue.js
var _sfc_main8 = {};
var _hoisted_186 = { class: "text-c-3 [&_code]:font-code [&_a:hover]:text-c-1 text-center leading-normal [&_a]:underline" };
function _sfc_render8(_ctx, _cache) {
  return openBlock(), createElementBlock("p", _hoisted_186, [renderSlot(_ctx.$slots, "default")]);
}
var ApiReferenceToolbarBlurb_default = _plugin_vue_export_helper_default2(_sfc_main8, [["render", _sfc_render8]]);

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarRegisterButton.vue.script.js
var ApiReferenceToolbarRegisterButton_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarRegisterButton",
  props: mergeModels({
    workspace: {},
    externalUrls: {},
    sdks: { default: () => [] }
  }, {
    "url": {},
    "urlModifiers": {}
  }),
  emits: ["update:url"],
  setup(__props) {
    const tempDocUrl = useModel(__props, "url");
    const { toast } = useToasts();
    const loader = useLoadingState();
    const { translate } = useLocalization();
    function openRegisterLink(docUrl) {
      const url = new URL(`${__props.externalUrls.dashboardUrl}/register`);
      url.searchParams.set("url", docUrl);
      __props.sdks.forEach((sdk) => url.searchParams.append("sdk", sdk));
      window.open(url.toString(), "_blank");
    }
    async function generateRegisterLink() {
      if (loader.isLoading || !__props.workspace) return;
      if (tempDocUrl.value) {
        openRegisterLink(tempDocUrl.value);
        return;
      }
      loader.start();
      const document2 = __props.workspace.exportActiveDocument("json");
      if (!document2) {
        toast(translate("developerTools.unableToExportDocument"), "error");
        await loader.invalidate();
        return;
      }
      try {
        tempDocUrl.value = await uploadTempDocument(document2, __props.externalUrls);
        await loader.validate();
        openRegisterLink(tempDocUrl.value);
        await nextTick();
        await loader.clear();
      } catch (error) {
        const message = error instanceof Error ? error.message : translate("developerTools.unknownError");
        toast(message, "error");
        await loader.invalidate();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarButton_default), {
        class: "h-auto p-2.5",
        loader: unref(loader),
        onClick: generateRegisterLink
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(translate)("developerTools.generate")), 1)])]),
        _: 3
      }, 8, ["loader"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarRegisterButton.vue.js
var ApiReferenceToolbarRegisterButton_default = ApiReferenceToolbarRegisterButton_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareRegister.vue.script.js
var _hoisted_187 = { class: "text-c-2 mb-2 grid grid-cols-2 gap-2.5 font-medium" };
var ApiReferenceToolbarShareRegister_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarShareRegister",
  props: {
    workspace: {},
    externalUrls: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    const FEATURES = [
      {
        icon: ScalarIconLockSimple_default,
        labelKey: "developerTools.passwordProtection"
      },
      {
        icon: ScalarIconGlobeSimple_default,
        labelKey: "developerTools.customDomains"
      },
      {
        icon: ScalarIconBookOpen_default,
        labelKey: "developerTools.freeFormContent"
      },
      {
        icon: ScalarIconCloud_default,
        labelKey: "developerTools.cdnInfrastructure"
      },
      {
        icon: ScalarIconGitBranch_default,
        labelKey: "developerTools.pullFromGitHub"
      },
      {
        icon: ScalarIconFileMd_default,
        labelKey: "developerTools.markdownMdx"
      },
      {
        icon: ScalarIconWarningOctagon_default,
        labelKey: "developerTools.spectralLinting"
      },
      {
        icon: ScalarIconBracketsCurly_default,
        labelKey: "developerTools.jsonSchemaHosting"
      },
      {
        icon: ScalarIconSparkle_default,
        labelKey: "developerTools.askAi"
      },
      {
        icon: ScalarIconPlugsConnected_default,
        labelKey: "developerTools.mcpServers"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("ul", _hoisted_187, [(openBlock(), createElementBlock(Fragment, null, renderList(FEATURES, (feature) => {
          return createBaseVNode("li", {
            key: feature.labelKey,
            class: "flex items-center gap-2"
          }, [(openBlock(), createBlock(resolveDynamicComponent(feature.icon), {
            class: "text-c-3 size-3.5",
            weight: "bold"
          })), createTextVNode(" " + toDisplayString(unref(translate)(feature.labelKey)), 1)]);
        }), 64))]),
        createVNode(ApiReferenceToolbarRegisterButton_default, {
          externalUrls: __props.externalUrls,
          workspace: __props.workspace
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.deployOnScalar")), 1)]),
          _: 1
        }, 8, ["externalUrls", "workspace"]),
        createVNode(ApiReferenceToolbarBlurb_default, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(translate)("developerTools.deployFree")) + " ", 1),
            _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
            createTextVNode(" " + toDisplayString(unref(translate)("developerTools.additionalFeaturesMightRequire")) + " ", 1),
            _cache[1] || (_cache[1] = createBaseVNode("span", null, [createBaseVNode("a", {
              href: "https://scalar.com/products/docs/getting-started",
              rel: "noopener noreferrer",
              target: "_blank"
            }, " Scalar Pro. ")], -1))
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareRegister.vue.js
var ApiReferenceToolbarShareRegister_default = ApiReferenceToolbarShareRegister_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarForm.vue.script.js
var ScalarForm_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarForm",
  emits: ["submit"],
  setup(__props) {
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", mergeProps(unref(cx)("flex flex-col"), { onSubmit: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("submit", $event), ["prevent"])) }), [renderSlot(_ctx.$slots, "default")], 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormError.vue.script.js
var ScalarFormError_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarFormError",
  props: {
    variant: { default: "error" },
    icon: {}
  },
  setup(__props) {
    const iconIs = computed(() => {
      if (__props.icon) return __props.icon;
      return __props.variant === "error" ? ScalarIconWarningCircle_default : ScalarIconWarning_default;
    });
    const variants = cva({
      base: "flex items-baseline gap-1.5 rounded border p-2",
      variants: { variant: {
        error: "border-c-danger bg-b-danger text-c-danger",
        warning: "border-c-alert bg-b-alert text-c-alert"
      } }
    });
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ role: "alert" }, unref(cx)(unref(variants)({ variant: __props.variant }))), [(openBlock(), createBlock(resolveDynamicComponent(iconIs.value), {
        class: "relative top-0.5 shrink-0",
        weight: "bold"
      })), renderSlot(_ctx.$slots, "default")], 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormField.vue.script.js
var _hoisted_188 = {
  key: 0,
  class: "flex items-start justify-between gap-2 text-sm/none text-c-1 whitespace-nowrap font-medium"
};
var ScalarFormField_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarFormField",
  props: { is: { default: "label" } },
  setup(__props) {
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.is), normalizeProps(guardReactiveProps(unref(cx)("flex flex-col gap-1.5 rounded"))), {
        default: withCtx(() => [
          _ctx.$slots.label ? (openBlock(), createElementBlock("div", _hoisted_188, [renderSlot(_ctx.$slots, "label")])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default"),
          _ctx.$slots.below ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(unref(cx)("-mt-1.5 text-sm"))
          }, [renderSlot(_ctx.$slots, "below")], 2)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormField.vue.js
var ScalarFormField_default = ScalarFormField_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormInputGroup.vue.script.js
var ScalarFormInputGroup_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarFormInputGroup",
  props: { is: { default: "div" } },
  setup(__props) {
    const { cx } = useBindCx();
    useFormGroup();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.is), normalizeProps(guardReactiveProps(unref(cx)("flex flex-col border rounded divide-y"))), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormInputGroup.vue.js
var ScalarFormInputGroup_default = ScalarFormInputGroup_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormSection.vue.script.js
var ScalarFormSection_vue_vue_type_script_lang_default = {};

// node_modules/@scalar/components/dist/components/ScalarForm/ScalarFormSection.vue.js
var _hoisted_189 = { class: "flex min-w-0 flex-col gap-3" };
var _hoisted_261 = { class: "contents" };
var _hoisted_344 = { class: "text-base font-medium text-c-1" };
function _sfc_render9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_189, [createBaseVNode("legend", _hoisted_261, [createBaseVNode("span", _hoisted_344, [renderSlot(_ctx.$slots, "label")])]), renderSlot(_ctx.$slots, "default")]);
}
var ScalarFormSection_default = _plugin_vue_export_helper_default(ScalarFormSection_vue_vue_type_script_lang_default, [["render", _sfc_render9]]);

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/DeployApiReference.vue.script.js
var _hoisted_190 = { class: "text-c-2 mb-2 leading-normal" };
var DeployApiReference_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "DeployApiReference",
  props: {
    workspace: {},
    externalUrls: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ApiReferenceToolbarPopover_default, { class: "w-120" }, {
        label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.deploy")), 1)]),
        default: withCtx(() => [createVNode(unref(ScalarFormSection_default), null, {
          label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.scalarDocs")), 1)]),
          default: withCtx(() => [createBaseVNode("p", _hoisted_190, toDisplayString(unref(translate)("developerTools.deployDescription")), 1), createVNode(ApiReferenceToolbarShareRegister_default, {
            externalUrls: __props.externalUrls,
            workspace: __props.workspace
          }, null, 8, ["externalUrls", "workspace"])]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/DeployApiReference.vue.js
var DeployApiReference_default = DeployApiReference_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckbox.vue.script.js
var ScalarCheckbox_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarCheckbox",
  props: {
    selected: { type: Boolean },
    indeterminate: {
      type: Boolean,
      default: false
    },
    type: { default: "checkbox" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", { class: normalizeClass(["flex size-4 items-center justify-center p-0.75", [props.selected ? "bg-c-accent text-b-1" : props.indeterminate && props.type === "checkbox" ? "bg-c-accent text-b-1" : "text-transparent shadow-border", props.type === "checkbox" ? "rounded" : "rounded-full"]]) }, [props.selected ? (openBlock(), createBlock(unref(ScalarIconCheck_default), {
        key: 0,
        class: "size-3",
        weight: "bold"
      })) : props.indeterminate && props.type === "checkbox" ? (openBlock(), createBlock(unref(ScalarIconMinus_default), {
        key: 1,
        "aria-hidden": "true",
        class: "size-3",
        weight: "bold"
      })) : createCommentVNode("", true)], 2);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckbox.vue.js
var ScalarCheckbox_default = ScalarCheckbox_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxInput.vue.script.js
var _hoisted_191 = { class: "flex-1 text-left min-w-0 truncate" };
var _hoisted_262 = ["type"];
var ScalarCheckboxInput_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarCheckboxInput",
  props: mergeModels({
    type: { default: "checkbox" },
    indeterminate: {
      type: Boolean,
      default: false
    }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const { stylingAttrsCx, otherAttrs } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "label" }, unref(stylingAttrsCx)("cursor-pointer gap-2 hover:bg-b-2", { "text-c-1": model.value })), {
        default: withCtx(() => [
          createVNode(ScalarCheckbox_default, {
            class: "shrink-0",
            indeterminate: props.indeterminate && props.type === "checkbox",
            selected: model.value,
            type: props.type
          }, null, 8, [
            "indeterminate",
            "selected",
            "type"
          ]),
          createBaseVNode("div", _hoisted_191, [renderSlot(_ctx.$slots, "default")]),
          withDirectives(createBaseVNode("input", mergeProps({
            ref: "inputEl",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
            class: "sr-only",
            type: props.type
          }, unref(otherAttrs)), null, 16, _hoisted_262), [[vModelDynamic, model.value]])
        ]),
        _: 3
      }, 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxInput.vue.js
var ScalarCheckboxInput_default = ScalarCheckboxInput_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxGroup.vue.script.js
var ScalarCheckboxGroup_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarCheckboxGroup",
  props: mergeModels({ options: { default: () => [] } }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const name = useId();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
          var _a;
          return openBlock(), createBlock(ScalarCheckboxInput_default, {
            key: option.value,
            modelValue: (_a = model.value) == null ? void 0 : _a.some(({ value }) => value === option.value),
            name: unref(name),
            value: option.value,
            "onUpdate:modelValue": (checked) => model.value = checked ? [...model.value, option] : model.value.filter(({ value }) => value !== option.value)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
            _: 2
          }, 1032, [
            "modelValue",
            "name",
            "value",
            "onUpdate:modelValue"
          ]);
        }), 128))]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxRadioGroup.vue.script.js
var ScalarCheckboxRadioGroup_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarCheckboxRadioGroup",
  props: mergeModels({ options: { default: () => [] } }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const name = useId();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
          var _a;
          return openBlock(), createBlock(ScalarCheckboxInput_default, {
            key: option.value,
            modelValue: ((_a = model.value) == null ? void 0 : _a.value) === option.value,
            name: unref(name),
            type: "radio",
            value: option.value,
            "onUpdate:modelValue": (checked) => model.value = checked ? option : void 0
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
            _: 2
          }, 1032, [
            "modelValue",
            "name",
            "value",
            "onUpdate:modelValue"
          ]);
        }), 128))]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarCheckboxInput/ScalarCheckboxRadioGroup.vue.js
var ScalarCheckboxRadioGroup_default = ScalarCheckboxRadioGroup_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigLayout.vue.script.js
var ApiReferenceToolbarConfigLayout_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarConfigLayout",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const { translate } = useLocalization();
    const options = computed(() => [{
      label: translate("developerTools.layoutModern"),
      value: "modern"
    }, {
      label: translate("developerTools.layoutClassic"),
      value: "classic"
    }]);
    const selected = computed({
      get: () => options.value.find((option) => option.value === model.value) ?? options.value[0],
      set: (option) => model.value = option.value
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarCheckboxRadioGroup_default), {
        modelValue: selected.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
        options: options.value
      }, null, 8, ["modelValue", "options"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigLayout.vue.js
var ApiReferenceToolbarConfigLayout_default = ApiReferenceToolbarConfigLayout_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleSlider.vue.script.js
var _hoisted_192 = ["aria-disabled"];
var _hoisted_263 = {
  key: 0,
  class: "sr-only"
};
var ScalarToggleSlider_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarToggleSlider",
  props: {
    thumb: { default: "start" },
    disabled: { type: Boolean },
    label: {}
  },
  setup(__props) {
    const variants = cva({
      base: "relative h-3.5 min-w-6 w-6 cursor-pointer rounded-full bg-b-3 transition-colors duration-300",
      variants: { disabled: { true: "cursor-not-allowed opacity-40" } }
    });
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", mergeProps({
        "aria-disabled": __props.disabled,
        type: "button"
      }, unref(cx)(unref(variants)({ disabled: __props.disabled }))), [createBaseVNode("div", { class: normalizeClass(["absolute left-px top-px flex h-3 w-3 items-center justify-center rounded-full bg-b-1 transition-transform duration-300", {
        "translate-x-1.25": __props.thumb === "center",
        "translate-x-2.5": __props.thumb === "end"
      }]) }, null, 2), __props.label ? (openBlock(), createElementBlock("span", _hoisted_263, toDisplayString(__props.label), 1)) : createCommentVNode("", true)], 16, _hoisted_192);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleSlider.vue.js
var ScalarToggleSlider_default = ScalarToggleSlider_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggle.vue.script.js
var ScalarToggle_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarToggle",
  props: mergeModels({
    disabled: { type: Boolean },
    label: {}
  }, {
    "modelValue": {
      type: Boolean,
      default: false
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    function toggle() {
      if (props.disabled) return;
      model.value = !model.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ScalarToggleSlider_default, {
        "aria-checked": model.value,
        class: normalizeClass(model.value ? "bg-c-accent" : ""),
        disabled: __props.disabled,
        label: __props.label,
        role: "switch",
        thumb: model.value ? "end" : "start",
        onClick: toggle
      }, null, 8, [
        "aria-checked",
        "class",
        "disabled",
        "label",
        "thumb"
      ]);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggle.vue.js
var ScalarToggle_default = ScalarToggle_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleInput.vue.script.js
var _hoisted_193 = { class: "flex-1 text-left min-w-0 truncate" };
var ScalarToggleInput_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarToggleInput",
  props: {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const { stylingAttrsCx, otherAttrs } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "label" }, unref(stylingAttrsCx)("cursor-pointer gap-2 hover:bg-b-2", { "text-c-1": model.value })), {
        default: withCtx(() => [createBaseVNode("div", _hoisted_193, [renderSlot(_ctx.$slots, "default")]), createVNode(ScalarToggle_default, mergeProps({
          modelValue: model.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          class: "shrink-0"
        }, unref(otherAttrs)), null, 16, ["modelValue"])]),
        _: 3
      }, 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleInput.vue.js
var ScalarToggleInput_default = ScalarToggleInput_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarToggleGroup.vue.script.js
var ScalarToggleGroup_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarToggleGroup",
  props: mergeModels({ options: { default: () => [] } }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
          var _a;
          return openBlock(), createBlock(ScalarToggleInput_default, {
            key: option.value,
            modelValue: (_a = model.value) == null ? void 0 : _a.some(({ value }) => value === option.value),
            "onUpdate:modelValue": (checked) => model.value = checked ? [...model.value, option] : model.value.filter(({ value }) => value !== option.value)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue"]);
        }), 128))]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarTristateToggle.vue.script.js
var ScalarTristateToggle_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarTristateToggle",
  props: mergeModels({
    disabled: { type: Boolean },
    label: {}
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const state = computed(() => {
      if (model.value === void 0) return "unset";
      return model.value ? "on" : "off";
    });
    const SLIDER_PROPS = {
      unset: {
        class: "",
        thumb: "center"
      },
      on: {
        class: "bg-green",
        thumb: "end"
      },
      off: {
        class: "bg-c-danger",
        thumb: "start"
      }
    };
    function toggle() {
      if (props.disabled) return;
      if (model.value === void 0) model.value = true;
      else if (model.value === true) model.value = false;
      else model.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ScalarToggleSlider_default, mergeProps({
        "aria-checked": state.value === "unset" ? "mixed" : model.value,
        disabled: __props.disabled,
        label: __props.label,
        role: "checkbox"
      }, SLIDER_PROPS[state.value], { onClick: toggle }), null, 16, [
        "aria-checked",
        "disabled",
        "label"
      ]);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarTristateToggle.vue.js
var ScalarTristateToggle_default = ScalarTristateToggle_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarTristateToggleInput.vue.script.js
var _hoisted_194 = { class: "flex-1 text-left min-w-0 truncate" };
var ScalarTristateToggleInput_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarTristateToggleInput",
  props: {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const { stylingAttrsCx, otherAttrs } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInput_default), mergeProps({ is: "label" }, unref(stylingAttrsCx)("cursor-pointer gap-2 hover:bg-b-2", { "text-c-1": model.value !== void 0 })), {
        default: withCtx(() => [createBaseVNode("div", _hoisted_194, [renderSlot(_ctx.$slots, "default")]), createVNode(ScalarTristateToggle_default, mergeProps({
          modelValue: model.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          class: "shrink-0"
        }, unref(otherAttrs)), null, 16, ["modelValue"])]),
        _: 3
      }, 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarTristateToggleInput.vue.js
var ScalarTristateToggleInput_default = ScalarTristateToggleInput_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/components/dist/components/ScalarToggle/ScalarTristateToggleGroup.vue.script.js
var ScalarTristateToggleGroup_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ScalarTristateToggleGroup",
  props: mergeModels({ options: { default: () => [] } }, {
    "modelValue": { default: () => [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    function getValue(option) {
      var _a;
      return (_a = model.value.find((entry) => entry.value === option.value)) == null ? void 0 : _a.checked;
    }
    function setValue(option, checked) {
      const rest = model.value.filter((entry) => entry.value !== option.value);
      model.value = checked === void 0 ? rest : [...rest, {
        ...option,
        checked
      }];
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
          return openBlock(), createBlock(ScalarTristateToggleInput_default, {
            key: option.value,
            modelValue: getValue(option),
            "onUpdate:modelValue": (checked) => setValue(option, checked)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(option.label), 1)]),
            _: 2
          }, 1032, ["modelValue", "onUpdate:modelValue"]);
        }), 128))]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigLayoutOptions.vue.script.js
var ApiReferenceToolbarConfigLayoutOptions_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarConfigLayoutOptions",
  props: mergeModels({ configuration: {} }, {
    "modelValue": { default: () => ({}) },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const { translate } = useLocalization();
    function getValue(key, defaultValue = false) {
      var _a;
      return model.value[key] ?? ((_a = __props.configuration) == null ? void 0 : _a[key]) ?? defaultValue;
    }
    function setValue(key, value, defaultValue = false) {
      if (value !== defaultValue) model.value = {
        ...model.value,
        [key]: value
      };
      else model.value = Object.fromEntries(Object.entries(model.value).filter(([k]) => key !== k));
    }
    const modelsSectionLabel = computed(() => {
      var _a;
      return ((_a = __props.configuration) == null ? void 0 : _a.modelsSectionLabel) ?? DEFAULT_MODELS_SECTION_LABEL;
    });
    const expandAllModelsLabel = computed(() => translate("developerTools.expandAll", { label: modelsSectionLabel.value }));
    const hideModelsLabel = computed(() => translate("developerTools.hideModels", { label: modelsSectionLabel.value }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarFormInputGroup_default), null, {
        default: withCtx(() => [
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("showSidebar", true),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = (v) => setValue("showSidebar", !!v, true))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.showSidebar")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("defaultOpenFirstTag", true),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = (v) => setValue("defaultOpenFirstTag", !!v, true))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.defaultOpenFirstTag")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("defaultOpenAllTags"),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = (v) => setValue("defaultOpenAllTags", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.defaultOpenAllTags")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("expandAllModelSections"),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = (v) => setValue("expandAllModelSections", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(expandAllModelsLabel.value), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("expandAllResponses"),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = (v) => setValue("expandAllResponses", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.expandAllResponses")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("hideClientButton"),
            "onUpdate:modelValue": _cache[5] || (_cache[5] = (v) => setValue("hideClientButton", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideClientButton")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("hideDarkModeToggle"),
            "onUpdate:modelValue": _cache[6] || (_cache[6] = (v) => setValue("hideDarkModeToggle", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideDarkModeToggle")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("hideModels"),
            "onUpdate:modelValue": _cache[7] || (_cache[7] = (v) => setValue("hideModels", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(hideModelsLabel.value), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("hideSearch"),
            "onUpdate:modelValue": _cache[8] || (_cache[8] = (v) => setValue("hideSearch", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideSearch")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("showOperationId"),
            "onUpdate:modelValue": _cache[9] || (_cache[9] = (v) => setValue("showOperationId", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.showOperationId")), 1)]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(unref(ScalarToggleInput_default), {
            modelValue: getValue("hideTestRequestButton"),
            "onUpdate:modelValue": _cache[10] || (_cache[10] = (v) => setValue("hideTestRequestButton", !!v))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.hideTestRequestButton")), 1)]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigLayoutOptions.vue.js
var ApiReferenceToolbarConfigLayoutOptions_default = ApiReferenceToolbarConfigLayoutOptions_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/themes/dist/index.js
var fonts_default = '/* Inter (--scalar-font) */\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-cyrillic-ext.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-cyrillic.woff2) format("woff2");\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-greek-ext.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-greek.woff2) format("woff2");\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-vietnamese.woff2) format("woff2");\n  unicode-range:\n    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,\n    U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,\n    U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-latin-ext.woff2) format("woff2");\n  unicode-range:\n    U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n    U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-latin.woff2) format("woff2");\n  unicode-range:\n    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* keyboard symbols (←↑→↓↵⇧⇪⌘⌥) */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(https://fonts.scalar.com/inter-symbols.woff2) format("woff2");\n  unicode-range: U+2190-2193, U+21B5, U+21E7, U+21EA, U+2318, U+2325;\n}\n\n/* JetBrains Mono (--scalar-font-code) */\n/* cyrillic-ext */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-cyrillic-ext.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-cyrillic.woff2) format("woff2");\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-greek.woff2) format("woff2");\n  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-vietnamese.woff2) format("woff2");\n  unicode-range:\n    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,\n    U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,\n    U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-latin-ext.woff2) format("woff2");\n  unicode-range:\n    U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n    U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "JetBrains Mono";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.scalar.com/mono-latin.woff2) format("woff2");\n  unicode-range:\n    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n';
var alternate_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n\n.dark-mode {\n  --scalar-background-1: #131313;\n  --scalar-background-2: #1d1d1d;\n  --scalar-background-3: #272727;\n  --scalar-background-card: #1d1d1d;\n\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: var(--scalar-background-3);\n\n  --scalar-border-color: #2a2b2a;\n}\n\n.light-mode,\n.light-mode .dark-mode {\n  --scalar-background-1: #f9f9f9;\n  --scalar-background-2: #f1f1f1;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-card: #fff;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: var(--scalar-background-3);\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n\n/* Document Sidebar */\n.t-doc__sidebar {\n  --scalar-color-green: var(--scalar-color-1);\n  --scalar-color-red: var(--scalar-color-1);\n  --scalar-color-yellow: var(--scalar-color-1);\n  --scalar-color-blue: var(--scalar-color-1);\n  --scalar-color-orange: var(--scalar-color-1);\n  --scalar-color-purple: var(--scalar-color-1);\n}\n\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode .dark-mode,\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dd2f2c;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n\n.scalar-api-client__item,\n.scalar-card,\n.dark-mode .dark-mode.scalar-card {\n  --scalar-background-1: var(--scalar-background-card);\n  --scalar-background-2: var(--scalar-background-1);\n  --scalar-background-3: var(--scalar-background-1);\n}\n.dark-mode .dark-mode.scalar-card {\n  --scalar-background-3: var(--scalar-background-3);\n}\n\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 50%);\n}\n";
var bluePlanet_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #f0f2f5;\n  --scalar-background-2: #eaecf0;\n  --scalar-background-3: #e0e2e6;\n  --scalar-border-color: rgb(213 213 213);\n\n  --scalar-color-1: rgb(9, 9, 11);\n  --scalar-color-2: rgb(113, 113, 122);\n  --scalar-color-3: rgba(25, 25, 28, 0.5);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #8ab4f81f;\n}\n.light-mode .scalar-card.dark-mode,\n.dark-mode {\n  --scalar-background-1: #000e23;\n  --scalar-background-2: #01132e;\n  --scalar-background-3: #03193b;\n  --scalar-border-color: #2e394c;\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n\n  --scalar-color-accent: var(--scalar-color-1);\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  z-index: 1;\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-search-background: white;\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom theme */\n/* Document header */\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n\n.light-mode .t-doc__header,\n.dark-mode .t-doc__header {\n  animation: headerbackground forwards;\n  animation-timeline: scroll();\n  animation-range: 0px 200px;\n}\n\n/* Document Layout */\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n/* Hero Section Flare */\n.section-flare-item:nth-of-type(1) {\n  --c1: #ffffff;\n  --c2: #babfd8;\n  --c3: #2e8bb2;\n  --c4: #1a8593;\n  --c5: #0a143e;\n  --c6: #0a0f52;\n  --c7: #2341b8;\n\n  --solid: var(--c1), var(--c2), var(--c3), var(--c4), var(--c5), var(--c6), var(--c7);\n  --solid-wrap: var(--solid), var(--c1);\n  --trans:\n    var(--c1), transparent, var(--c2), transparent, var(--c3),\n    transparent, var(--c4), transparent, var(--c5), transparent, var(--c6),\n    transparent, var(--c7);\n  --trans-wrap: var(--trans), transparent, var(--c1);\n\n  background:\n    radial-gradient(circle, var(--trans)), conic-gradient(from 180deg, var(--trans-wrap)),\n    radial-gradient(circle, var(--trans)), conic-gradient(var(--solid-wrap));\n  width: 70vw;\n  height: 700px;\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n  right: 0;\n  position: absolute;\n  transform: rotate(-45deg);\n  top: -300px;\n  opacity: 0.3;\n}\n.section-flare-item:nth-of-type(3) {\n  --star-color: #6b9acc;\n  --star-color2: #446b8d;\n  --star-color3: #3e5879;\n  background-image:\n    radial-gradient(2px 2px at 20px 30px, var(--star-color2), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 40px 70px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 50px 160px, var(--star-color3), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 90px 40px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 130px 80px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 160px 120px, var(--star-color3), rgba(0, 0, 0, 0));\n  background-repeat: repeat;\n  background-size: 200px 200px;\n  width: 100%;\n  height: 100%;\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n}\n.section-flare {\n  top: -150px !important;\n  height: 100vh;\n  background: linear-gradient(#000, var(--scalar-background-1));\n  width: 100vw;\n  overflow-x: hidden;\n}\n.light-mode .section-flare {\n  display: none;\n}\n.light-mode .scalar-card {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #fff;\n  --scalar-background-3: #fff;\n}\n\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 60%);\n}\n\n@media (max-width: 1000px) {\n  .light-mode .t-doc__sidebar,\n  .dark-mode .t-doc__sidebar {\n    --scalar-sidebar-background-1: var(--scalar-background-1);\n  }\n  .light-mode .t-doc__header,\n  .dark-mode .t-doc__header {\n    animation: none;\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n";
var deepSpace_default = '/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-color-1: rgb(9, 9, 11);\n  --scalar-color-2: rgb(113, 113, 122);\n  --scalar-color-3: rgba(25, 25, 28, 0.5);\n  --scalar-color-accent: var(--scalar-color-1);\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f4f4f5;\n  --scalar-background-3: #e3e3e6;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: rgb(228, 228, 231);\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n.dark-mode {\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n  --scalar-color-accent: var(--scalar-color-1);\n\n  --scalar-background-1: #09090b;\n  --scalar-background-2: #18181b;\n  --scalar-background-3: #2c2c30;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.16);\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.examples .scalar-card-footer {\n  --scalar-background-3: transparent;\n  padding-top: 0;\n}\n/* Hero section flare */\n.section-flare {\n  width: 100vw;\n  height: 550px;\n  position: absolute;\n}\n.section-flare-item:nth-of-type(1) {\n  position: absolute;\n  width: 100vw;\n  height: 550px;\n  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%);\n  --rainbow: repeating-linear-gradient(100deg, #fff 10%, #fff 16%, #fff 22%, #fff 30%);\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 300%, 200%;\n  background-position:\n    50% 50%,\n    50% 50%;\n  filter: invert(100%);\n  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  pointer-events: none;\n  opacity: 0.07;\n}\n.dark-mode .section-flare-item:nth-of-type(1) {\n  background-image: var(--stripesDark), var(--rainbow);\n  filter: opacity(50%) saturate(200%);\n  opacity: 0.25;\n  height: 350px;\n}\n.section-flare-item:nth-of-type(1):after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 200%, 100%;\n  background-attachment: fixed;\n  mix-blend-mode: difference;\n}\n.dark-mode .section-flare:after {\n  background-image: var(--stripesDark), var(--rainbow);\n}\n.section-flare-item:nth-of-type(2) {\n  --star-color: #fff;\n  --star-color2: #fff;\n  --star-color3: #fff;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-image:\n    radial-gradient(2px 2px at 20px 30px, var(--star-color2), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 40px 70px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 50px 160px, var(--star-color3), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 90px 40px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 130px 80px, var(--star-color), rgba(0, 0, 0, 0)),\n    radial-gradient(2px 2px at 160px 120px, var(--star-color3), rgba(0, 0, 0, 0));\n  background-repeat: repeat;\n  background-size: 200px 200px;\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  opacity: 0.2;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-blue), transparent 50%);\n}\n\n/* document header */\n.light-mode .t-doc__header,\n.dark-mode .t-doc__header {\n  animation: headerbackground forwards;\n  animation-timeline: scroll();\n  animation-range: 0px 200px;\n}\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n/* remove flare on safari to prevent dropped frames on scroll */\n@supports (-webkit-hyphens: none) {\n  .section-flare {\n    display: none;\n  }\n}\n\n/* document background */\n.light-mode .t-doc .layout-content,\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n';
var default_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #0099ff;\n  --scalar-border-color: #dfdfdf;\n}\n.dark-mode {\n  --scalar-background-1: #0f0f0f;\n  --scalar-background-2: #1a1a1a;\n  --scalar-background-3: #272727;\n\n  --scalar-color-1: #e7e7e7;\n  --scalar-color-2: #a4a4a4;\n  --scalar-color-3: #797979;\n\n  --scalar-color-accent: #00aeff;\n  --scalar-background-accent: #3ea6ff1f;\n\n  --scalar-border-color: #2d2d2d;\n}\n/* Document Sidebar */\n.light-mode,\n.dark-mode {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n\n  --scalar-sidebar-indent-border: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-hover: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-active: var(--scalar-sidebar-border-color);\n\n  --scalar-sidebar-search-background: color-mix(in srgb, var(--scalar-background-2), var(--scalar-background-1));\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #ff5800;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), transparent 10%);\n  --scalar-tooltip-color: var(--scalar-color-1);\n\n  --scalar-color-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-color-1) 20%);\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-color-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), #fff 10%);\n  --scalar-tooltip-color: color-mix(in srgb, #fff, transparent 5%);\n\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0 0.6 1 / 1);\n    --scalar-color-green: color(display-p3 0.023529 0.564706 0.380392 / 1);\n    --scalar-color-red: color(display-p3 0.937255 0 0.023529 / 1);\n    --scalar-color-yellow: color(display-p3 0.929412 0.745098 0.12549 / 1);\n    --scalar-color-blue: color(display-p3 0 0.509804 0.815686 / 1);\n    --scalar-color-orange: color(display-p3 1 0.4 0.02);\n    --scalar-color-purple: color(display-p3 0.321569 0.011765 0.819608 / 1);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.07 0.67 1);\n    --scalar-color-green: color(display-p3 0 0.713725 0.282353 / 1);\n    --scalar-color-red: color(display-p3 0.862745 0.105882 0.098039 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.788235 0.05098 / 1);\n    --scalar-color-blue: color(display-p3 0.305882 0.701961 0.92549 / 1);\n    --scalar-color-orange: color(display-p3 1 0.552941 0.301961 / 1);\n    --scalar-color-purple: color(display-p3 0.694118 0.568627 0.976471 / 1);\n  }\n}\n";
var elysiajs_default = '.light-mode {\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #f06292;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n}\n.dark-mode {\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(156, 163, 175, 1);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n  --scalar-color-accent: #f06292;\n\n  --scalar-background-1: #111728;\n  --scalar-background-2: #1e293b;\n  --scalar-background-3: #334155;\n  --scalar-background-accent: #f062921f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: #f062921f;\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #a3ffa9;\n  --scalar-color-red: #ffa3a3;\n  --scalar-color-yellow: #fffca3;\n  --scalar-color-blue: #a5d6ff;\n  --scalar-color-orange: #e2ae83;\n  --scalar-color-purple: #d2a8ff;\n\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n.section-flare {\n  width: 100%;\n  height: 400px;\n  position: absolute;\n}\n.section-flare-item:first-of-type:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  --stripes: repeating-linear-gradient(100deg, #fff 0%, #fff 0%, transparent 2%, transparent 12%, #fff 17%);\n  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 0%, transparent 10%, transparent 12%, #000 17%);\n  --rainbow: repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 16%, #5eead4 22%, #60a5fa 30%);\n  contain: strict;\n  contain-intrinsic-size: 100vw 40vh;\n  background-image: var(--stripesDark), var(--rainbow);\n  background-size: 300%, 200%;\n  background-position:\n    50% 50%,\n    50% 50%;\n  filter: opacity(20%) saturate(200%);\n  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);\n  pointer-events: none;\n}\n.section-flare-item:first-of-type:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: var(--stripes), var(--rainbow);\n  background-size: 200%, 100%;\n  background-attachment: fixed;\n  mix-blend-mode: difference;\n  background-image: var(--stripesDark), var(--rainbow);\n  pointer-events: none;\n}\n.light-mode .section-flare-item:first-of-type:after,\n.light-mode .section-flare-item:first-of-type:before {\n  background-image: var(--stripes), var(--rainbow);\n  filter: opacity(4%) saturate(200%);\n}\n';
var fastify_default = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #1c1e21;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-disabled: #b4b1b1;\n  --scalar-color-ghost: #a7a7a7;\n  --scalar-color-accent: #2f8555;\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f5f5f5;\n  --scalar-background-3: #ededed;\n  --scalar-background-4: rgba(0, 0, 0, 0.06);\n  --scalar-background-accent: #2f85551f;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #007300;\n  --scalar-color-red: #af272b;\n  --scalar-color-yellow: #b38200;\n  --scalar-color-blue: #3b8ba5;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n  --scalar-color-disabled: rgba(255, 255, 255, 0.34);\n  --scalar-color-ghost: rgba(255, 255, 255, 0.26);\n  --scalar-color-accent: #27c2a0;\n  --scalar-background-1: #1b1b1d;\n  --scalar-background-2: #242526;\n  --scalar-background-3: #3b3b3b;\n  --scalar-background-4: rgba(255, 255, 255, 0.06);\n  --scalar-background-accent: #27c2a01f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);\n  --scalar-shadow-2:\n    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #26b226;\n  --scalar-color-red: #fb565b;\n  --scalar-color-yellow: #ffc426;\n  --scalar-color-blue: #6ecfef;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n}\n";
var kepler_default = "/* basic theme */\n.light-mode {\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n  --scalar-color-accent: #7070ff;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #7070ff1f;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.1);\n\n  --scalar-code-language-color-supersede: var(--scalar-color-3);\n}\n.dark-mode {\n  --scalar-color-1: #f7f8f8;\n  --scalar-color-2: rgb(180, 188, 208);\n  --scalar-color-3: #b4bcd099;\n  --scalar-color-accent: #828fff;\n\n  --scalar-background-1: #000212;\n  --scalar-background-2: #0d0f1e;\n  --scalar-background-3: #232533;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-border-color: #313245;\n  --scalar-code-language-color-supersede: var(--scalar-color-3);\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: rgba(0, 0, 0, 0.05);\n  --scalar-sidebar-search-border-color: 1px solid rgba(0, 0, 0, 0.05);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-background-2: rgba(0, 0, 0, 0.03);\n}\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-border-color: 1px solid rgba(255, 255, 255, 0.05);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #fb892c;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom Theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.sidebar-search {\n  backdrop-filter: blur(12px);\n}\n@keyframes headerbackground {\n  from {\n    background: transparent;\n    backdrop-filter: none;\n  }\n  to {\n    background: var(--scalar-header-background-1);\n    backdrop-filter: blur(12px);\n  }\n}\n.dark-mode .scalar-card {\n  background: rgba(255, 255, 255, 0.05) !important;\n}\n.dark-mode .scalar-card * {\n  --scalar-background-2: transparent !important;\n  --scalar-background-1: transparent !important;\n}\n.light-mode .dark-mode.scalar-card *,\n.light-mode .dark-mode.scalar-card {\n  --scalar-background-1: #0d0f1e !important;\n  --scalar-background-2: #0d0f1e !important;\n  --scalar-background-3: #191b29 !important;\n}\n.light-mode .dark-mode.scalar-card {\n  background: #191b29 !important;\n}\n.badge {\n  box-shadow: 0 0 0 1px var(--scalar-border-color);\n  margin-right: 6px;\n}\n\n.table-row.required-parameter .table-row-item:nth-of-type(2):after {\n  background: transparent;\n  box-shadow: none;\n}\n/* Hero Section Flare */\n.section-flare {\n  width: 100vw;\n  background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent);\n  height: 100vh;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n\n/* document layout */\n.light-mode .t-doc .layout-content,\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";
var laserwave_default = "/* basic theme */\n.light-mode {\n  color-scheme: light;\n  --scalar-color-1: #322b3b;\n  --scalar-color-2: #645676;\n  --scalar-color-3: #9789a9;\n  --scalar-color-accent: #40b4c4;\n\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f4f2f7;\n  --scalar-background-3: #cfc7dc;\n  --scalar-background-accent: #f3fafb;\n\n  --scalar-border-color: #e4e0eb;\n}\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fff;\n  --scalar-color-2: #b8b6ba;\n  --scalar-color-3: #706c74;\n  --scalar-color-accent: #ed78c2;\n\n  --scalar-background-1: #27212e;\n  --scalar-background-2: #322c39;\n  --scalar-background-3: #4c4059;\n  --scalar-background-accent: #eb64b91f;\n\n  --scalar-border-color: rgba(255, 255, 255, 0.1);\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: #514c56;\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n/* advanced */\n.light-mode {\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-green: #74dfc4;\n  --scalar-color-red: #d887f5;\n  --scalar-color-yellow: #ffe261;\n  --scalar-color-blue: #40b4c4;\n  --scalar-color-orange: #ff52bf;\n  --scalar-color-purple: #91889b;\n\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n}\n.dark-mode {\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #27212e;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #74dfc4;\n  --scalar-color-red: #d887f5;\n  --scalar-color-yellow: #ffe261;\n  --scalar-color-blue: #40b4c4;\n  --scalar-color-orange: #ff52bf;\n  --scalar-color-purple: #91889b;\n\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n}\n/* Radius */\n:root {\n  --scalar-radius: 2px;\n  --scalar-radius-lg: 3px;\n  --scalar-radius-xl: 4px;\n}\n/* P3 color support */\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0.25098 0.705882 0.768627 / 1);\n    --scalar-color-green: color(display-p3 0.454902 0.87451 0.768627 / 1);\n    --scalar-color-red: color(display-p3 0.847059 0.529412 0.960784 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.886275 0.380392 / 1);\n    --scalar-color-blue: color(display-p3 0.25098 0.705882 0.768627 / 1);\n    --scalar-color-orange: color(display-p3 1 0.321569 0.74902 / 1);\n    --scalar-color-purple: color(display-p3 0.568627 0.533333 0.607843 / 1);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.929412 0.470588 0.760784 / 1);\n    --scalar-color-green: color(display-p3 0.454902 0.87451 0.768627 / 1);\n    --scalar-color-red: color(display-p3 0.847059 0.529412 0.960784 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.886275 0.380392 / 1);\n    --scalar-color-blue: color(display-p3 0.25098 0.705882 0.768627 / 1);\n    --scalar-color-orange: color(display-p3 1 0.321569 0.74902 / 1);\n    --scalar-color-purple: color(display-p3 0.568627 0.533333 0.607843 / 1);\n  }\n}\n";
var mars_default = "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #f9f6f0;\n  --scalar-background-2: #f2efe8;\n  --scalar-background-3: #e9e7e2;\n  --scalar-border-color: rgba(203, 165, 156, 0.6);\n\n  --scalar-color-1: #c75549;\n  --scalar-color-2: #c75549;\n  --scalar-color-3: #c75549;\n\n  --scalar-color-accent: #c75549;\n  --scalar-background-accent: #dcbfa81f;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n.dark-mode {\n  --scalar-background-1: #140507;\n  --scalar-background-2: #20090c;\n  --scalar-background-3: #321116;\n  --scalar-border-color: #3c3031;\n\n  --scalar-color-1: rgba(255, 255, 255, 0.9);\n  --scalar-color-2: rgba(255, 255, 255, 0.62);\n  --scalar-color-3: rgba(255, 255, 255, 0.44);\n\n  --scalar-color-accent: rgba(255, 255, 255, 0.9);\n  --scalar-background-accent: #441313;\n\n  --scalar-code-language-color-supersede: var(--scalar-color-1);\n}\n\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: rgba(255, 255, 255, 0.1);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  z-index: 1;\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #09533a;\n  --scalar-color-red: #aa181d;\n  --scalar-color-yellow: #ab8d2b;\n  --scalar-color-blue: #19689a;\n  --scalar-color-orange: #b26c34;\n  --scalar-color-purple: #4c2191;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: rgba(69, 255, 165, 0.823);\n  --scalar-color-red: #ff8589;\n  --scalar-color-yellow: #ffcc4d;\n  --scalar-color-blue: #6bc1fe;\n  --scalar-color-orange: #f98943;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n/* Custom Theme */\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-search-background: white;\n}\n.examples .scalar-card-footer {\n  --scalar-background-3: transparent;\n  padding-top: 0;\n}\n/* Hero section flare */\n.section-flare {\n  overflow-x: hidden;\n  height: 100vh;\n  left: initial;\n}\n.section-flare-item:nth-of-type(1) {\n  background: #d25019;\n  position: relative;\n  top: -150px;\n  right: -400px;\n  width: 80vw;\n  height: 500px;\n  margin-top: -150px;\n  border-radius: 50%;\n  filter: blur(100px);\n  z-index: 0;\n}\n.light-mode .section-flare {\n  display: none;\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-red), transparent 75%);\n}\n\n/* document layout */\n.dark-mode .t-doc .layout-content {\n  background: transparent;\n}\n";
var moon_default = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #000000;\n  --scalar-color-2: #000000;\n  --scalar-color-3: #000000;\n  --scalar-color-accent: #645b0f;\n  --scalar-background-1: #ccc9b3;\n  --scalar-background-2: #c2bfaa;\n  --scalar-background-3: #b8b5a1;\n  --scalar-background-accent: #000000;\n\n  --scalar-border-color: rgba(0, 0, 0, 0.2);\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2:\n    rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, var(--scalar-border-color) 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-red: #b91c1c;\n  --scalar-color-orange: #a16207;\n  --scalar-color-green: #047857;\n  --scalar-color-blue: #1d4ed8;\n  --scalar-color-orange: #c2410c;\n  --scalar-color-purple: #6d28d9;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fffef3;\n  --scalar-color-2: #fffef3;\n  --scalar-color-3: #fffef3;\n  --scalar-color-accent: #c3b531;\n  --scalar-background-1: #313332;\n  --scalar-background-2: #393b3a;\n  --scalar-background-3: #414342;\n  --scalar-background-accent: #fffef3;\n\n  --scalar-border-color: #505452;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2:\n    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-search-background: transparent;\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 80%);\n}\n";
var purple_default = "/* basic theme */\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f5f6f8;\n  --scalar-background-3: #eceef1;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #5469d4;\n  --scalar-background-accent: #5469d41f;\n\n  --scalar-border-color: rgba(215, 215, 206, 0.68);\n}\n.dark-mode {\n  --scalar-background-1: #15171c;\n  --scalar-background-2: #1c1e24;\n  --scalar-background-3: #22252b;\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: #c9ced8;\n  --scalar-color-3: #8c99ad;\n\n  --scalar-color-accent: #5469d4;\n  --scalar-background-accent: #5469d41f;\n\n  --scalar-border-color: #3f4145;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-3);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n\n  --scalar-sidebar-search-background: var(--scalar-background-1);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-color-green: #17803d;\n  --scalar-color-red: #e10909;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #1763a6;\n  --scalar-color-orange: #e25b09;\n  --scalar-color-purple: #5c3993;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #30a159;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #eec644;\n  --scalar-color-blue: #2b7abf;\n  --scalar-color-orange: #f07528;\n  --scalar-color-purple: #7a59b1;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n";
var saturn_default = "/* basic theme */\n.light-mode {\n  --scalar-background-1: #f3f3ee;\n  --scalar-background-2: #e8e8e3;\n  --scalar-background-3: #e4e4df;\n  --scalar-border-color: rgba(215, 215, 206, 0.85);\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #1763a6;\n  --scalar-background-accent: #1f648e1f;\n}\n.dark-mode {\n  --scalar-background-1: #09090b;\n  --scalar-background-2: #18181b;\n  --scalar-background-3: #2c2c30;\n  --scalar-border-color: rgba(255, 255, 255, 0.17);\n\n  --scalar-color-1: #fafafa;\n  --scalar-color-2: rgb(161, 161, 170);\n  --scalar-color-3: rgba(255, 255, 255, 0.533);\n\n  --scalar-color-accent: #4eb3ec;\n  --scalar-background-accent: #8ab4f81f;\n}\n/* Document Sidebar */\n.light-mode .t-doc__sidebar,\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: currentColor;\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-3);\n  --scalar-sidebar-color-active: var(--scalar-color-1);\n\n  --scalar-sidebar-search-background: var(--scalar-background-1);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n}\n\n/* advanced */\n.light-mode {\n  --scalar-color-green: #17803d;\n  --scalar-color-red: #e10909;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #1763a6;\n  --scalar-color-orange: #e25b09;\n  --scalar-color-purple: #5c3993;\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n}\n.dark-mode {\n  --scalar-color-green: #30a159;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #eec644;\n  --scalar-color-blue: #2b7abf;\n  --scalar-color-orange: #f07528;\n  --scalar-color-purple: #7a59b1;\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n}\n.dark-mode h2.t-editor__heading,\n.dark-mode .t-editor__page-title h1,\n.dark-mode h1.section-header:not(::selection),\n.dark-mode .markdown h1,\n.dark-mode .markdown h2,\n.dark-mode .markdown h3,\n.dark-mode .markdown h4,\n.dark-mode .markdown h5,\n.dark-mode .markdown h6 {\n  -webkit-text-fill-color: transparent;\n  background-image: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.light-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n.dark-mode *::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 50%);\n}\n";
var solarized_default = ".light-mode {\n  color-scheme: light;\n  --scalar-color-1: #584c27;\n  --scalar-color-2: #616161;\n  --scalar-color-3: #a89f84;\n  --scalar-color-accent: #b58900;\n  --scalar-background-1: #fdf6e3;\n  --scalar-background-2: #eee8d5;\n  --scalar-background-3: #ddd6c1;\n  --scalar-background-accent: #b589001f;\n\n  --scalar-border-color: #ded8c8;\n  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);\n  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);\n  --scalar-lifted-brightness: 1;\n  --scalar-backdrop-brightness: 1;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);\n  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px, rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;\n\n  --scalar-button-1: rgb(49 53 56);\n  --scalar-button-1-color: #fff;\n  --scalar-button-1-hover: rgb(28 31 33);\n\n  --scalar-color-red: #b91c1c;\n  --scalar-color-orange: #a16207;\n  --scalar-color-green: #047857;\n  --scalar-color-blue: #1d4ed8;\n  --scalar-color-orange: #c2410c;\n  --scalar-color-purple: #6d28d9;\n}\n\n.dark-mode {\n  color-scheme: dark;\n  --scalar-color-1: #fff;\n  --scalar-color-2: #cccccc;\n  --scalar-color-3: #6d8890;\n  --scalar-color-accent: #007acc;\n  --scalar-background-1: #00212b;\n  --scalar-background-2: #012b36;\n  --scalar-background-3: #004052;\n  --scalar-background-accent: #015a6f;\n\n  --scalar-border-color: #2f4851;\n  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);\n  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);\n  --scalar-lifted-brightness: 1.45;\n  --scalar-backdrop-brightness: 0.5;\n\n  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);\n  --scalar-shadow-2:\n    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);\n\n  --scalar-button-1: #f6f6f6;\n  --scalar-button-1-color: #000;\n  --scalar-button-1-hover: #e7e7e7;\n\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n}\n\n/* Sidebar */\n.light-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-color-accent);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-search-background);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n\n.dark-mode .t-doc__sidebar {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-item-hover-color: currentColor;\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-active-background: var(--scalar-background-accent);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n  --scalar-sidebar-search-background: var(--scalar-background-2);\n  --scalar-sidebar-search-border-color: var(--scalar-sidebar-search-background);\n  --scalar-sidebar-search--color: var(--scalar-color-3);\n}\n*::selection {\n  background-color: color-mix(in srgb, var(--scalar-color-accent), transparent 70%);\n}\n";
function hasObtrusiveScrollbars() {
  if (typeof window === "undefined") return false;
  const parent = document.createElement("div");
  parent.setAttribute("style", "width:30px;height:30px;overflow-y:scroll;");
  parent.classList.add("scrollbar-test");
  const child = document.createElement("div");
  child.setAttribute("style", "width:100%;height:40px");
  parent.appendChild(child);
  document.body.appendChild(parent);
  const scrollbarWidth = 30 - parent.firstChild.clientWidth;
  document.body.removeChild(parent);
  return !!scrollbarWidth;
}
var themeIds = [
  "alternate",
  "default",
  "moon",
  "purple",
  "solarized",
  "bluePlanet",
  "deepSpace",
  "saturn",
  "kepler",
  "elysiajs",
  "fastify",
  "mars",
  "laserwave",
  "none"
];
var themeLabels = {
  default: "Default",
  alternate: "Alternate",
  moon: "Moon",
  purple: "Purple",
  solarized: "Solarized",
  elysiajs: "Elysia.js",
  fastify: "Fastify",
  bluePlanet: "Blue Planet",
  saturn: "Saturn",
  kepler: "Kepler-11e",
  mars: "Mars",
  deepSpace: "Deep Space",
  laserwave: "Laserwave",
  none: "None"
};
var presets = {
  default: {
    uid: "qTQR9jSM8E-LihpyZzPOi",
    name: "Default",
    description: "Default Scalar theme",
    theme: default_default,
    slug: "default"
  },
  alternate: {
    uid: "2skUDSH4S8HYFF9yXysr-",
    name: "Alternate",
    description: "Alternate Scalar theme",
    theme: alternate_default,
    slug: "alternate"
  },
  moon: {
    uid: "DG9ZUNp5lJhDeX_kPX4Bl",
    name: "Moon",
    description: "Lunar styles",
    theme: moon_default,
    slug: "moon"
  },
  purple: {
    uid: "pE_1ysxcZ-y2LM1GGNBUv",
    name: "Purple",
    description: "Purple Scalar theme",
    theme: purple_default,
    slug: "purple"
  },
  solarized: {
    uid: "BdGVG1vf-4nYl3wJKyj8l",
    name: "Solarized",
    description: "Solarized Scalar theme",
    theme: solarized_default,
    slug: "solarized"
  },
  bluePlanet: {
    uid: "X12IfAvl7ue-42V2lW40S",
    name: "Blue Planet",
    description: "Blue Planet Scalar theme",
    theme: bluePlanet_default,
    slug: "blue-planet"
  },
  deepSpace: {
    uid: "K8b38NWQiicq4-zXGXKdI",
    name: "Deep Space",
    description: "Deep Space Scalar theme",
    theme: deepSpace_default,
    slug: "deep-space"
  },
  saturn: {
    uid: "1jyAjmbIZQG-RUU4Ugk9o",
    name: "Saturn",
    description: "Saturn Scalar theme",
    theme: saturn_default,
    slug: "saturn"
  },
  kepler: {
    uid: "jZ6dnWbtqQ0Hz3s9jLPH0",
    name: "Kepler-11e",
    description: "Kepler-11e Scalar theme",
    theme: kepler_default,
    slug: "kepler-11e"
  },
  mars: {
    uid: "YY4LQgwiXix55-TmMz9qd",
    name: "Mars",
    description: "Mars Scalar theme",
    theme: mars_default,
    slug: "mars"
  },
  laserwave: {
    uid: "c5fZEi-K-hP-xXf885dkf",
    name: "Laserwave",
    description: "Laserwave Scalar theme",
    theme: laserwave_default,
    slug: "laserwave"
  },
  elysiajs: {
    uid: "nEVZkRmCylPkT0o9YJa7y",
    name: "Elysia.js",
    description: "Elysia.js theme",
    theme: elysiajs_default,
    slug: "elysiajs"
  },
  fastify: {
    uid: "nTZcdcM2_yHFZFxTQe9Kk",
    name: "Fastify",
    description: "Fastify theme",
    theme: fastify_default,
    slug: "fastify"
  }
};
var themePresets = Object.values(presets);
var getThemeStyles = (themeId, opts) => {
  var _a;
  const { fonts = true, layer = "scalar-theme" } = opts ?? {};
  const styles = [((_a = presets[themeId || "default"]) == null ? void 0 : _a.theme) ?? "/* basic theme */\n:root {\n  --scalar-text-decoration: underline;\n  --scalar-text-decoration-hover: underline;\n}\n.light-mode {\n  --scalar-background-1: #fff;\n  --scalar-background-2: #f6f6f6;\n  --scalar-background-3: #e7e7e7;\n  --scalar-background-accent: #8ab4f81f;\n\n  --scalar-color-1: #1b1b1b;\n  --scalar-color-2: #757575;\n  --scalar-color-3: #8e8e8e;\n\n  --scalar-color-accent: #0099ff;\n  --scalar-border-color: #dfdfdf;\n}\n.dark-mode {\n  --scalar-background-1: #0f0f0f;\n  --scalar-background-2: #1a1a1a;\n  --scalar-background-3: #272727;\n\n  --scalar-color-1: #e7e7e7;\n  --scalar-color-2: #a4a4a4;\n  --scalar-color-3: #797979;\n\n  --scalar-color-accent: #00aeff;\n  --scalar-background-accent: #3ea6ff1f;\n\n  --scalar-border-color: #2d2d2d;\n}\n/* Document Sidebar */\n.light-mode,\n.dark-mode {\n  --scalar-sidebar-background-1: var(--scalar-background-1);\n  --scalar-sidebar-color-1: var(--scalar-color-1);\n  --scalar-sidebar-color-2: var(--scalar-color-2);\n  --scalar-sidebar-border-color: var(--scalar-border-color);\n\n  --scalar-sidebar-item-hover-background: var(--scalar-background-2);\n  --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-2);\n\n  --scalar-sidebar-item-active-background: var(--scalar-background-2);\n  --scalar-sidebar-color-active: var(--scalar-sidebar-color-1);\n\n  --scalar-sidebar-indent-border: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-hover: var(--scalar-sidebar-border-color);\n  --scalar-sidebar-indent-border-active: var(--scalar-sidebar-border-color);\n\n  --scalar-sidebar-search-background: color-mix(in srgb, var(--scalar-background-2), var(--scalar-background-1));\n  --scalar-sidebar-search-color: var(--scalar-color-3);\n  --scalar-sidebar-search-border-color: var(--scalar-border-color);\n}\n/* advanced */\n.light-mode {\n  --scalar-color-green: #069061;\n  --scalar-color-red: #ef0006;\n  --scalar-color-yellow: #edbe20;\n  --scalar-color-blue: #0082d0;\n  --scalar-color-orange: #ff5800;\n  --scalar-color-purple: #5203d1;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(0, 0, 0, 1);\n  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);\n  --scalar-button-1-color: #fff;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), transparent 10%);\n  --scalar-tooltip-color: var(--scalar-color-1);\n\n  --scalar-color-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-color-1) 20%);\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-color-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n.dark-mode {\n  --scalar-color-green: #00b648;\n  --scalar-color-red: #dc1b19;\n  --scalar-color-yellow: #ffc90d;\n  --scalar-color-blue: #4eb3ec;\n  --scalar-color-orange: #ff8d4d;\n  --scalar-color-purple: #b191f9;\n\n  --scalar-link-color: var(--scalar-color-1);\n  --scalar-link-color-hover: var(--scalar-link-color);\n\n  --scalar-button-1: rgba(255, 255, 255, 1);\n  --scalar-button-1-hover: rgba(255, 255, 255, 0.9);\n  --scalar-button-1-color: black;\n\n  --scalar-tooltip-background: color-mix(in srgb, var(--scalar-background-1), #fff 10%);\n  --scalar-tooltip-color: color-mix(in srgb, #fff, transparent 5%);\n\n  --scalar-color-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 20%);\n\n  --scalar-background-alert: color-mix(in srgb, var(--scalar-color-orange), var(--scalar-background-1) 95%);\n  --scalar-background-danger: color-mix(in srgb, var(--scalar-color-red), var(--scalar-background-1) 95%);\n}\n@supports (color: color(display-p3 1 1 1)) {\n  .light-mode {\n    --scalar-color-accent: color(display-p3 0 0.6 1 / 1);\n    --scalar-color-green: color(display-p3 0.023529 0.564706 0.380392 / 1);\n    --scalar-color-red: color(display-p3 0.937255 0 0.023529 / 1);\n    --scalar-color-yellow: color(display-p3 0.929412 0.745098 0.12549 / 1);\n    --scalar-color-blue: color(display-p3 0 0.509804 0.815686 / 1);\n    --scalar-color-orange: color(display-p3 1 0.4 0.02);\n    --scalar-color-purple: color(display-p3 0.321569 0.011765 0.819608 / 1);\n  }\n  .dark-mode {\n    --scalar-color-accent: color(display-p3 0.07 0.67 1);\n    --scalar-color-green: color(display-p3 0 0.713725 0.282353 / 1);\n    --scalar-color-red: color(display-p3 0.862745 0.105882 0.098039 / 1);\n    --scalar-color-yellow: color(display-p3 1 0.788235 0.05098 / 1);\n    --scalar-color-blue: color(display-p3 0.305882 0.701961 0.92549 / 1);\n    --scalar-color-orange: color(display-p3 1 0.552941 0.301961 / 1);\n    --scalar-color-purple: color(display-p3 0.694118 0.568627 0.976471 / 1);\n  }\n}\n", fonts ? fonts_default : ""].join("");
  if (layer) return `@layer ${layer} {
${styles}}`;
  return styles;
};

// node_modules/@scalar/components/dist/components/ScalarThemeSwatches/useThemeSwatches.js
var THEME_CSS_VARS = [
  "--scalar-color-1",
  "--scalar-color-2",
  "--scalar-color-3",
  "--scalar-background-1",
  "--scalar-background-2",
  "--scalar-background-3",
  "--scalar-color-accent"
];
function getVars(cssVarPattern, css) {
  const matches = [...css.matchAll(new RegExp(`(${cssVarPattern}): ([^;]+);`, "gm"))];
  if (matches.length === 0) return {};
  return Object.fromEntries(matches.map((match) => [match[1], match[2]]));
}
function parseRules(css) {
  if (!css) return {};
  return {
    ...getVars("--scalar-color-[1-3]", css),
    ...getVars("--scalar-background-[1-3]", css),
    ...getVars("--scalar-color-accent", css)
  };
}
function useThemeSwatches(css) {
  return { colors: computed(() => {
    var _a, _b;
    return {
      light: parseRules((_a = toValue(css).match(/\.light-mode[^{]*{[^}]*}/m)) == null ? void 0 : _a[0]),
      dark: parseRules((_b = toValue(css).match(/\.dark-mode[^{]*{[^}]*}/m)) == null ? void 0 : _b[0])
    };
  }) };
}

// node_modules/@scalar/components/dist/components/ScalarThemeSwatches/ScalarThemeSwatches.vue.script.js
var ScalarThemeSwatches_vue_vue_type_script_setup_true_lang_default = defineComponent({
  inheritAttrs: false,
  __name: "ScalarThemeSwatches",
  props: { css: {} },
  setup(__props) {
    const { colors } = useThemeSwatches(() => __props.css);
    const { cx } = useBindCx();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ style: {
        "--bg-light": unref(colors).light["--scalar-background-1"],
        "--bg-dark": unref(colors).dark["--scalar-background-1"]
      } }, unref(cx)("flex *:size-3 overflow-hidden rounded", "bg-(--bg-light) dark:bg-(--bg-dark)")), [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(THEME_CSS_VARS), (v) => {
        return openBlock(), createElementBlock("div", {
          key: v,
          class: "bg-(--bg-light) dark:bg-(--bg-dark)",
          style: normalizeStyle({
            "--bg-light": unref(colors).light[v],
            "--bg-dark": unref(colors).dark[v]
          })
        }, null, 4);
      }), 128))], 16);
    };
  }
});

// node_modules/@scalar/components/dist/components/ScalarThemeSwatches/ScalarThemeSwatches.vue.js
var ScalarThemeSwatches_default = ScalarThemeSwatches_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigTheme.vue.script.js
var _hoisted_195 = { class: "min-w-0 flex-1 truncate text-left" };
var _hoisted_264 = { class: "text-c-1 inline-block min-w-0 flex-1 truncate" };
var ApiReferenceToolbarConfigTheme_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarConfigTheme",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const options = computed(() => themeIds.filter((id) => id !== "none").map((id) => ({
      id,
      label: themeLabels[id],
      css: presets[id].theme
    })));
    const selected = computed({
      get: () => {
        const theme = model.value ?? "default";
        return options.value.find((o) => o.id === theme) ?? options.value[0];
      },
      set: (option) => model.value = option.id
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ScalarCombobox_default), {
        modelValue: selected.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selected.value = $event),
        options: options.value,
        resize: ""
      }, {
        default: withCtx(({ open }) => [createVNode(unref(ScalarFormInput_default), null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_195, toDisplayString(selected.value.label), 1),
            createVNode(unref(ScalarThemeSwatches_default), {
              class: "mr-2",
              css: selected.value.css
            }, null, 8, ["css"]),
            createVNode(unref(ScalarIconCaretDown_default), { class: normalizeClass(["size-3.5 transition-transform", { "rotate-180": open }]) }, null, 8, ["class"])
          ]),
          _: 2
        }, 1024)]),
        option: withCtx(({ selected: selected2, option }) => [
          createVNode(unref(ScalarListboxCheckbox_default), { selected: selected2 }, null, 8, ["selected"]),
          createBaseVNode("span", _hoisted_264, toDisplayString(option.label), 1),
          createVNode(unref(ScalarThemeSwatches_default), { css: option.css }, null, 8, ["css"])
        ]),
        _: 1
      }, 8, ["modelValue", "options"]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarConfigTheme.vue.js
var ApiReferenceToolbarConfigTheme_default = ApiReferenceToolbarConfigTheme_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ModifyConfiguration.vue.script.js
var _hoisted_196 = { class: "flex flex-col gap-4" };
var ModifyConfiguration_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ModifyConfiguration",
  props: mergeModels({ configuration: {} }, {
    "overrides": {},
    "overridesModifiers": {}
  }),
  emits: ["update:overrides"],
  setup(__props) {
    const overrides = useModel(__props, "overrides");
    const { translate } = useLocalization();
    const snippet = computed(() => {
      return prettyPrintJson({
        ...overrides.value,
        ...__props.configuration,
        ...overrides.value
      });
    });
    const theme = computed({
      get: () => {
        var _a, _b;
        return ((_a = overrides.value) == null ? void 0 : _a.theme) ?? ((_b = __props.configuration) == null ? void 0 : _b.theme) ?? "default";
      },
      set: (t3) => overrides.value = {
        ...overrides.value,
        theme: t3
      }
    });
    const layout = computed({
      get: () => {
        var _a, _b;
        return ((_a = overrides.value) == null ? void 0 : _a.layout) ?? ((_b = __props.configuration) == null ? void 0 : _b.layout) ?? "modern";
      },
      set: (l) => overrides.value = {
        ...overrides.value,
        layout: l
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ApiReferenceToolbarPopover_default, { class: "w-120" }, {
        label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.configure")), 1)]),
        default: withCtx(() => [createVNode(unref(ScalarFormSection_default), null, {
          label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.scalarConfiguration")), 1)]),
          default: withCtx(() => [createVNode(unref(ScalarCodeBlock_default), {
            class: "bg-b-1.5 flex max-h-40 flex-col rounded border text-sm",
            content: snippet.value,
            lang: "json"
          }, null, 8, ["content"])]),
          _: 1
        }), createBaseVNode("div", _hoisted_196, [
          createVNode(unref(ScalarFormField_default), null, {
            label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.theme")), 1)]),
            default: withCtx(() => [createVNode(ApiReferenceToolbarConfigTheme_default, {
              modelValue: theme.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => theme.value = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }),
          createVNode(unref(ScalarFormField_default), null, {
            label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.layout")), 1)]),
            default: withCtx(() => [createVNode(ApiReferenceToolbarConfigLayout_default, {
              modelValue: layout.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => layout.value = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }),
          createVNode(unref(ScalarFormField_default), { is: "div" }, {
            label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.layoutOptions")), 1)]),
            default: withCtx(() => [createVNode(ApiReferenceToolbarConfigLayoutOptions_default, {
              modelValue: overrides.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => overrides.value = $event),
              configuration: __props.configuration
            }, null, 8, ["modelValue", "configuration"])]),
            _: 1
          })
        ])]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ModifyConfiguration.vue.js
var ModifyConfiguration_default = ModifyConfiguration_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareTemporary.vue.script.js
var ApiReferenceToolbarShareTemporary_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReferenceToolbarShareTemporary",
  props: mergeModels({
    workspace: {},
    externalUrls: {}
  }, {
    "url": {},
    "urlModifiers": {}
  }),
  emits: ["update:url"],
  setup(__props) {
    const { toast } = useToasts();
    const loader = useLoadingState();
    const { translate } = useLocalization();
    const tempDocUrl = useModel(__props, "url");
    async function generateTemporaryLink() {
      if (loader.isLoading || !__props.workspace || !!tempDocUrl.value) return;
      loader.start();
      const document2 = __props.workspace.exportActiveDocument("json");
      if (!document2) {
        toast(translate("developerTools.unableToExportDocument"), "error");
        await loader.invalidate();
        return;
      }
      try {
        const url = await uploadTempDocument(document2, __props.externalUrls);
        await loader.validate({
          duration: 900,
          persist: true
        });
        tempDocUrl.value = url;
      } catch (error) {
        const message = error instanceof Error ? error.message : translate("developerTools.unknownError");
        toast(message, "error");
        await loader.invalidate();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [tempDocUrl.value ? (openBlock(), createBlock(unref(ScalarTextInputCopy_default), {
        key: 0,
        immediate: "",
        modelValue: tempDocUrl.value,
        name: "temporary-link",
        placeholder: `${__props.externalUrls.registryUrl}/share/apis/…`
      }, null, 8, ["modelValue", "placeholder"])) : (openBlock(), createBlock(unref(ScalarButton_default), {
        key: 1,
        class: "h-auto p-2.5",
        loader: unref(loader),
        variant: "gradient",
        onClick: generateTemporaryLink
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.uploadDocument")), 1)]),
        _: 1
      }, 8, ["loader"])), createVNode(ApiReferenceToolbarBlurb_default, { class: "-mt-1" }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.temporaryLinkExpiration")), 1)]),
        _: 1
      })], 64);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ApiReferenceToolbarShareTemporary.vue.js
var ApiReferenceToolbarShareTemporary_default = ApiReferenceToolbarShareTemporary_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ShareApiReference.vue.script.js
var _hoisted_197 = { class: "text-c-2 mb-2 leading-normal" };
var ShareApiReference_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ShareApiReference",
  props: {
    workspace: {},
    externalUrls: {}
  },
  setup(__props) {
    const { translate } = useLocalization();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ApiReferenceToolbarPopover_default, { class: "w-120" }, {
        label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.share")), 1)]),
        default: withCtx(() => [createVNode(unref(ScalarFormSection_default), null, {
          label: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("developerTools.shareTitle")), 1)]),
          default: withCtx(() => [createBaseVNode("p", _hoisted_197, toDisplayString(unref(translate)("developerTools.shareDescription")), 1), createVNode(ApiReferenceToolbarShareTemporary_default, {
            externalUrls: __props.externalUrls,
            workspace: __props.workspace
          }, null, 8, ["externalUrls", "workspace"])]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/components/ShareApiReference.vue.js
var ShareApiReference_default = ShareApiReference_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/developer-tools/DeveloperTools.vue.script.js
var _hoisted_198 = ["aria-label"];
var _hoisted_265 = { class: "-mx-2 flex max-w-(--refs-content-max-width) flex-1 items-center" };
var _hoisted_345 = { class: "flex flex-1 items-center" };
var DeveloperTools_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "DeveloperTools",
  props: mergeModels({
    workspace: {},
    configuration: {},
    externalUrls: {}
  }, {
    "overrides": {},
    "overridesModifiers": {}
  }),
  emits: ["update:overrides"],
  setup(__props) {
    const overrides = useModel(__props, "overrides");
    const { translate } = useLocalization();
    const showDeveloperTools = computed(() => {
      var _a, _b;
      if (((_a = __props.configuration) == null ? void 0 : _a.showDeveloperTools) === "always") return true;
      if (((_b = __props.configuration) == null ? void 0 : _b.showDeveloperTools) === "never") return false;
      if (typeof window === "undefined") return false;
      return isLocalUrl(window.location.href);
    });
    return (_ctx, _cache) => {
      return showDeveloperTools.value ? (openBlock(), createElementBlock("header", {
        key: 0,
        "aria-label": unref(translate)("developerTools.title"),
        class: "api-reference-toolbar bg-b-1 relative z-1 flex h-10 justify-center border-b px-15"
      }, [createBaseVNode("div", _hoisted_265, [
        createBaseVNode("div", _hoisted_345, [createVNode(ApiReferenceToolbarTitle_default)]),
        createVNode(ModifyConfiguration_default, {
          overrides: overrides.value,
          "onUpdate:overrides": _cache[0] || (_cache[0] = ($event) => overrides.value = $event),
          configuration: __props.configuration
        }, null, 8, ["overrides", "configuration"]),
        __props.workspace ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(ShareApiReference_default, {
          externalUrls: __props.externalUrls,
          workspace: __props.workspace
        }, null, 8, ["externalUrls", "workspace"]), createVNode(DeployApiReference_default, {
          externalUrls: __props.externalUrls,
          workspace: __props.workspace
        }, null, 8, ["externalUrls", "workspace"])], 64)) : createCommentVNode("", true)
      ])], 8, _hoisted_198)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/developer-tools/DeveloperTools.vue.js
var DeveloperTools_default = DeveloperTools_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/features/multiple-documents/DocumentSelector.vue.script.js
var _hoisted_199 = {
  key: 0,
  class: "document-selector px-3 pt-3"
};
var _hoisted_266 = {
  class: "group/dropdown-label text-c-2 hover:text-c-1 flex w-full cursor-pointer items-center gap-1 font-medium",
  type: "button"
};
var _hoisted_346 = { class: "overflow-hidden text-base text-ellipsis" };
var DocumentSelector_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "DocumentSelector",
  props: {
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const formattedOptions = computed(() => props.options.map((o) => ({
      id: o.id,
      label: o.label
    })));
    const selected = computed(() => formattedOptions.value.find((o) => o.id === props.modelValue));
    return (_ctx, _cache) => {
      return __props.options.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_199, [createVNode(unref(ScalarListbox_default), {
        modelValue: selected.value,
        options: formattedOptions.value,
        resize: "",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (e) => emit("update:modelValue", e.id))
      }, {
        default: withCtx(({ open }) => {
          var _a;
          return [createBaseVNode("button", _hoisted_266, [createBaseVNode("span", _hoisted_346, toDisplayString(((_a = selected.value) == null ? void 0 : _a.label) || "Select API"), 1), createVNode(unref(ScalarIconCaretDown_default), {
            class: normalizeClass(["size-3 text-current transition-transform", { "rotate-180": open }]),
            weight: "bold"
          }, null, 8, ["class"])])];
        }),
        _: 1
      }, 8, ["modelValue", "options"])])) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-reference/dist/features/multiple-documents/DocumentSelector.vue.js
var DocumentSelector_default = DocumentSelector_vue_vue_type_script_setup_true_lang_default;

// node_modules/@scalar/api-reference/dist/helpers/build-models-index.js
var buildModelsIndex = (entries) => {
  const index = {};
  const collect = (items) => {
    var _a, _b;
    for (const item of items) {
      if (item.type === "model") index[_a = item.name] ?? (index[_a] = item.id);
      if ("children" in item && ((_b = item.children) == null ? void 0 : _b.length)) collect(item.children);
    }
  };
  collect(entries);
  return index;
};

// node_modules/@scalar/api-reference/dist/helpers/color-mode.js
var getSystemModePreference = () => {
  if (typeof window === "undefined" || typeof (window == null ? void 0 : window.matchMedia) !== "function") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

// node_modules/@scalar/api-reference/dist/helpers/download.js
function createClickEvent() {
  try {
    return new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    });
  } catch {
    return new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    });
  }
}
async function parseContent(content) {
  try {
    return JSON.parse(content);
  } catch {
    const { parse } = await import("./browser-KHSETXML.js");
    return parse(content, {
      maxAliasCount: 1e4,
      merge: true
    });
  }
}
function detectFormat(content) {
  const trimmed = content.trimStart();
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) return "json";
  return "yaml";
}
async function formatContent(content, inputFormat, outputFormat) {
  if (inputFormat === outputFormat) return content;
  const parsed = await parseContent(content);
  if (outputFormat === "json") return JSON.stringify(parsed, null, 2);
  const { stringify } = await import("./browser-KHSETXML.js");
  return stringify(parsed);
}
async function downloadDocument(content, filename, format) {
  const inputFormat = detectFormat(content);
  const outputFormat = format ?? inputFormat;
  const contentFilename = `${filename ?? "openapi"}.${outputFormat}`;
  const mimeType = outputFormat === "json" ? "application/json" : "application/x-yaml";
  const formattedContent = await formatContent(content, inputFormat, outputFormat);
  const blob = new Blob([formattedContent], { type: mimeType });
  const data = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = data;
  link.download = contentFilename;
  link.dispatchEvent(createClickEvent());
  setTimeout(() => {
    window.URL.revokeObjectURL(data);
    link.remove();
  }, 100);
}

// node_modules/@scalar/api-reference/dist/helpers/load-from-perssistance.js
var loadClientFromStorage = (store) => {
  const storedClient = clientStorage().get();
  if (r(storedClient) && !store.workspace["x-scalar-default-client"]) store.update("x-scalar-default-client", storedClient);
};
var loadAuthFromStorage = (store, slug) => {
  const auth = authStorage().getAuth(slug);
  store.auth.load({ [slug]: auth });
};

// node_modules/@scalar/api-reference/dist/helpers/map-config-plugins.js
var mapConfigPlugins = (config, environment) => {
  const plugin = { hooks: {} };
  watch([
    () => config.value.onBeforeRequest,
    () => config.value.onRequestBuilt,
    () => config.value.onRequestSent,
    () => environment.value
  ], ([onBeforeRequest, onRequestBuilt, onRequestSent, environment2]) => {
    const envVariables = getEnvironmentVariables(environment2);
    if (!plugin.hooks) plugin.hooks = {};
    plugin.hooks.beforeRequest = onBeforeRequest ? async (payload) => {
      const built = buildRequest(payload.requestBuilder, {
        envVariables,
        allowMissingRequestServerBase: true
      });
      if (!built.ok) {
        console.error("[@scalar/api-reference] onBeforeRequest was not run because the request could not be built:", built.message ?? built.error);
        return;
      }
      await onBeforeRequest({
        request: buildSafeBodyRequest(...built.data.requestPayload),
        requestBuilder: payload.requestBuilder,
        envVariables
      });
    } : void 0;
    plugin.hooks.requestBuilt = onRequestBuilt ? async (payload) => {
      await onRequestBuilt({
        request: payload.request,
        requestBuilder: payload.requestBuilder,
        envVariables
      });
    } : void 0;
    plugin.hooks.responseReceived = onRequestSent ? (payload) => {
      onRequestSent(payload.request.url);
    } : void 0;
  }, { immediate: true });
  return [plugin];
};

// node_modules/unhead/dist/shared/unhead.AvDFlk_u.mjs
var DupeableTags = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
var TagsWithInnerContent = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
var HasElementTags = /* @__PURE__ */ new Set([
  "base",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
var ValidHeadTags = /* @__PURE__ */ new Set([
  "title",
  "base",
  "htmlAttrs",
  "bodyAttrs",
  "meta",
  "link",
  "style",
  "script",
  "noscript"
]);
var UniqueTags = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
var TagConfigKeys = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
var UsesMergeStrategy = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
var MetaTagsArrayable = /* @__PURE__ */ new Set([
  "theme-color",
  "google-site-verification",
  "og",
  "article",
  "book",
  "profile",
  "twitter",
  "author"
]);
var hasContent = (value) => typeof value === "number" ? Number.isFinite(value) : value;

// node_modules/unhead/dist/shared/unhead.h_KkEIE6.mjs
var NAMESPACES = {
  META: /* @__PURE__ */ new Set(["twitter"]),
  OG: /* @__PURE__ */ new Set(["og", "book", "article", "profile", "fb"]),
  MEDIA: /* @__PURE__ */ new Set(["ogImage", "ogVideo", "ogAudio", "twitterImage"]),
  HTTP_EQUIV: /* @__PURE__ */ new Set(["contentType", "defaultStyle", "xUaCompatible"])
};
var META_ALIASES = {
  articleExpirationTime: "article:expiration_time",
  articleModifiedTime: "article:modified_time",
  articlePublishedTime: "article:published_time",
  bookReleaseDate: "book:release_date",
  fbAppId: "fb:app_id",
  ogAudioSecureUrl: "og:audio:secure_url",
  ogAudioUrl: "og:audio",
  ogImageSecureUrl: "og:image:secure_url",
  ogImageUrl: "og:image",
  ogSiteName: "og:site_name",
  ogVideoSecureUrl: "og:video:secure_url",
  ogVideoUrl: "og:video",
  profileFirstName: "profile:first_name",
  profileLastName: "profile:last_name",
  profileUsername: "profile:username",
  msapplicationConfig: "msapplication-Config",
  msapplicationTileColor: "msapplication-TileColor",
  msapplicationTileImage: "msapplication-TileImage"
};
var MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      // @ts-expect-error untyped
      resolve: ({ key, value }) => `${fixKeyCase(key)}=${value}`
    }
  },
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      // @ts-expect-error untyped
      resolve: ({ key, value }) => key === "seconds" ? `${value}` : void 0
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      // @ts-expect-error untyped
      resolve: ({ key, value }) => typeof value === "boolean" ? fixKeyCase(key) : `${fixKeyCase(key)}:${value}`
    }
  },
  contentSecurityPolicy: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: "; ",
      // @ts-expect-error untyped
      resolve: ({ key, value }) => `${fixKeyCase(key)} ${value}`
    }
  },
  charset: {}
};
function fixKeyCase(key) {
  const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  const prefixIndex = updated.indexOf("-");
  return prefixIndex === -1 ? updated : NAMESPACES.META.has(updated.slice(0, prefixIndex)) || NAMESPACES.OG.has(updated.slice(0, prefixIndex)) ? key.replace(/([A-Z])/g, ":$1").toLowerCase() : updated;
}
function sanitizeObject(input) {
  return Object.fromEntries(Object.entries(input).filter(([k, v]) => String(v) !== "false" && k));
}
function transformObject(obj) {
  return Array.isArray(obj) ? obj.map(transformObject) : !obj || typeof obj !== "object" ? obj : Object.fromEntries(Object.entries(obj).map(([k, v]) => [fixKeyCase(k), transformObject(v)]));
}
function unpackToString(value, options = {}) {
  const { entrySeparator = "", keyValueSeparator = "", wrapValue, resolve: resolve2 } = options;
  return Object.entries(value).map(([key, val]) => {
    if (resolve2) {
      const resolved = resolve2({ key, value: val });
      if (resolved !== void 0)
        return resolved;
    }
    const processedVal = typeof val === "object" ? unpackToString(val, options) : typeof val === "number" ? val.toString() : typeof val === "string" && wrapValue ? `${wrapValue}${val.replace(new RegExp(wrapValue, "g"), `\\${wrapValue}`)}${wrapValue}` : val;
    return `${key}${keyValueSeparator}${processedVal}`;
  }).join(entrySeparator);
}
function handleObjectEntry(key, value) {
  const sanitizedValue = sanitizeObject(value);
  const fixedKey = fixKeyCase(key);
  const attr = resolveMetaKeyType(fixedKey);
  if (!MetaTagsArrayable.has(fixedKey)) {
    return [{ [attr]: fixedKey, ...sanitizedValue }];
  }
  const input = Object.fromEntries(
    Object.entries(sanitizedValue).map(([k, v]) => [`${key}${k === "url" ? "" : `${k[0].toUpperCase()}${k.slice(1)}`}`, v])
  );
  return unpackMeta(input || {}).sort((a, b) => {
    var _a, _b;
    return (((_a = a[attr]) == null ? void 0 : _a.length) || 0) - (((_b = b[attr]) == null ? void 0 : _b.length) || 0);
  });
}
function resolveMetaKeyType(key) {
  var _a;
  if (((_a = MetaPackingSchema[key]) == null ? void 0 : _a.metaKey) === "http-equiv" || NAMESPACES.HTTP_EQUIV.has(key)) {
    return "http-equiv";
  }
  const fixed = fixKeyCase(key);
  const colonIndex = fixed.indexOf(":");
  return colonIndex === -1 ? "name" : NAMESPACES.OG.has(fixed.slice(0, colonIndex)) ? "property" : "name";
}
function resolveMetaKeyValue(key) {
  return META_ALIASES[key] || fixKeyCase(key);
}
function resolvePackedMetaObjectValue(value, key) {
  var _a;
  if (key === "refresh")
    return `${value.seconds};url=${value.url}`;
  return unpackToString(transformObject(value), {
    keyValueSeparator: "=",
    entrySeparator: ", ",
    resolve: ({ value: value2, key: key2 }) => value2 === null ? "" : typeof value2 === "boolean" ? key2 : void 0,
    // @ts-expect-error untyped
    ...(_a = MetaPackingSchema[key]) == null ? void 0 : _a.unpack
  });
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  for (const [key, value] of Object.entries(input)) {
    if (Array.isArray(value)) {
      if (key === "themeColor") {
        value.forEach((v) => {
          if (typeof v === "object" && v !== null) {
            extras.push({ name: "theme-color", ...v });
          }
        });
        continue;
      }
      for (const v of value) {
        if (typeof v === "object" && v !== null) {
          const urlProps = [];
          const otherProps = [];
          for (const [propKey, propValue] of Object.entries(v)) {
            const metaKey = `${key}${propKey === "url" ? "" : `:${propKey}`}`;
            const meta2 = unpackMeta({ [metaKey]: propValue });
            (propKey === "url" ? urlProps : otherProps).push(...meta2);
          }
          extras.push(...urlProps, ...otherProps);
        } else {
          extras.push(...typeof v === "string" ? unpackMeta({ [key]: v }) : handleObjectEntry(key, v));
        }
      }
      continue;
    }
    if (typeof value === "object" && value) {
      if (NAMESPACES.MEDIA.has(key)) {
        const prefix = key.startsWith("twitter") ? "twitter" : "og";
        const type = key.replace(/^(og|twitter)/, "").toLowerCase();
        const metaKey = prefix === "twitter" ? "name" : "property";
        if (value.url) {
          extras.push({
            [metaKey]: `${prefix}:${type}`,
            content: value.url
          });
        }
        if (value.secureUrl) {
          extras.push({
            [metaKey]: `${prefix}:${type}:secure_url`,
            content: value.secureUrl
          });
        }
        for (const [propKey, propValue] of Object.entries(value)) {
          if (propKey !== "url" && propKey !== "secureUrl") {
            extras.push({
              [metaKey]: `${prefix}:${type}:${propKey}`,
              // @ts-expect-error untyped
              content: propValue
            });
          }
        }
      } else if (MetaTagsArrayable.has(fixKeyCase(key))) {
        extras.push(...handleObjectEntry(key, value));
      } else {
        primitives[key] = sanitizeObject(value);
      }
    } else {
      primitives[key] = value;
    }
  }
  const meta = Object.entries(primitives).map(([key, value]) => {
    if (key === "charset")
      return { charset: value === null ? "_null" : value };
    const metaKey = resolveMetaKeyType(key);
    const keyValue = resolveMetaKeyValue(key);
    const processedValue = value === null ? "_null" : typeof value === "object" ? resolvePackedMetaObjectValue(value, key) : typeof value === "number" ? value.toString() : value;
    return metaKey === "http-equiv" ? { "http-equiv": keyValue, "content": processedValue } : { [metaKey]: keyValue, content: processedValue };
  });
  return [...extras, ...meta].map(
    (m) => !("content" in m) ? m : m.content === "_null" ? { ...m, content: null } : m
  );
}

// node_modules/unhead/dist/shared/unhead.ChXiQvI8.mjs
function isUnsafeKey(key) {
  return key === "__proto__" || key === "constructor" || key === "prototype";
}
var sortTags = (a, b) => a._w === b._w ? a._p - b._p : a._w - b._w;
var TAG_WEIGHTS = {
  base: -10,
  title: 10
};
var TAG_ALIASES = {
  critical: -8,
  high: -1,
  low: 2
};
var WEIGHT_MAP = {
  meta: {
    "content-security-policy": -30,
    "charset": -20,
    "viewport": -15
  },
  link: {
    "preconnect": 20,
    "stylesheet": 60,
    "preload": 70,
    "modulepreload": 70,
    "prefetch": 90,
    "dns-prefetch": 90,
    "prerender": 90
  },
  script: {
    async: 30,
    defer: 80,
    sync: 50
  },
  style: {
    imported: 40,
    sync: 60
  }
};
var ImportStyleRe = /@import/;
var isTruthy = (val) => val === "" || val === true;
function tagWeight(head, tag) {
  if (typeof tag.tagPriority === "number")
    return tag.tagPriority;
  let weight = 100;
  const offset = TAG_ALIASES[tag.tagPriority] || 0;
  const weightMap = head.resolvedOptions.disableCapoSorting ? {
    link: {},
    script: {},
    style: {}
  } : WEIGHT_MAP;
  if (tag.tag in TAG_WEIGHTS) {
    weight = TAG_WEIGHTS[tag.tag];
  } else if (tag.tag === "meta") {
    const metaType = tag.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : tag.props.charset ? "charset" : tag.props.name === "viewport" ? "viewport" : null;
    if (metaType)
      weight = WEIGHT_MAP.meta[metaType];
  } else if (tag.tag === "link" && tag.props.rel) {
    weight = weightMap.link[tag.props.rel];
  } else if (tag.tag === "script") {
    const type = String(tag.props.type);
    if (isTruthy(tag.props.async)) {
      weight = weightMap.script.async;
    } else if (tag.props.src && !isTruthy(tag.props.defer) && !isTruthy(tag.props.async) && type !== "module" && !type.endsWith("json") || tag.innerHTML && !type.endsWith("json")) {
      weight = weightMap.script.sync;
    } else if (isTruthy(tag.props.defer) && tag.props.src && !isTruthy(tag.props.async) || type === "module") {
      weight = weightMap.script.defer;
    }
  } else if (tag.tag === "style") {
    weight = tag.innerHTML && ImportStyleRe.test(tag.innerHTML) ? weightMap.style.imported : weightMap.style.sync;
  }
  return (weight || 100) + offset;
}

// node_modules/unhead/dist/shared/unhead.ylJpsHyA.mjs
function defineHeadPlugin(plugin) {
  return plugin;
}
var FlatMetaPlugin = defineHeadPlugin({
  key: "flatMeta",
  hooks: {
    "entries:normalize": (ctx) => {
      const tagsToAdd = [];
      ctx.tags = ctx.tags.map((t3) => {
        if (t3.tag !== "_flatMeta") {
          return t3;
        }
        tagsToAdd.push(unpackMeta(t3.props).map((p) => ({
          ...t3,
          tag: "meta",
          props: p
        })));
        return false;
      }).filter(Boolean).concat(...tagsToAdd);
    }
  }
});
var WhitelistAttributes = {
  htmlAttrs: /* @__PURE__ */ new Set(["class", "style", "lang", "dir"]),
  bodyAttrs: /* @__PURE__ */ new Set(["class", "style"]),
  meta: /* @__PURE__ */ new Set(["name", "property", "charset", "content", "media"]),
  noscript: /* @__PURE__ */ new Set([]),
  style: /* @__PURE__ */ new Set(["media", "nonce", "title", "blocking"]),
  script: /* @__PURE__ */ new Set(["type", "textContent", "nonce", "blocking"]),
  link: /* @__PURE__ */ new Set(["color", "crossorigin", "fetchpriority", "href", "hreflang", "imagesrcset", "imagesizes", "integrity", "media", "referrerpolicy", "rel", "sizes", "type"])
};
var BlockedLinkRels = /* @__PURE__ */ new Set(["canonical", "modulepreload", "prerender", "preload", "prefetch", "dns-prefetch", "preconnect", "manifest", "pingback"]);
var AsciiWhitespace = /[\t\n\f\r ]+/;
var SafeAttrName = /^[a-z][a-z0-9\-]*[a-z0-9]$/i;
var HtmlEntityHex = /&#x([0-9a-f]+);?/gi;
var HtmlEntityDec = /&#(\d+);?/g;
var HtmlEntityNamed = /&(tab|newline|colon|semi|lpar|rpar|sol|bsol|comma|period|excl|num|dollar|percnt|amp|apos|ast|plus|lt|gt|equals|quest|at|lsqb|rsqb|lcub|rcub|vert|hat|grave|tilde|nbsp);?/gi;
var ControlChars = /[\x00-\x20]+/g;
var NamedEntityMap = {
  tab: "	",
  newline: "\n",
  colon: ":",
  semi: ";",
  lpar: "(",
  rpar: ")",
  sol: "/",
  bsol: "\\",
  comma: ",",
  period: ".",
  excl: "!",
  num: "#",
  dollar: "$",
  percnt: "%",
  amp: "&",
  apos: "'",
  ast: "*",
  plus: "+",
  lt: "<",
  gt: ">",
  equals: "=",
  quest: "?",
  at: "@",
  lsqb: "[",
  rsqb: "]",
  lcub: "{",
  rcub: "}",
  vert: "|",
  hat: "^",
  grave: "`",
  tilde: "~",
  nbsp: " "
};
function safeFromCodePoint(codePoint) {
  if (codePoint > 1114111 || codePoint < 0 || Number.isNaN(codePoint))
    return "";
  return String.fromCodePoint(codePoint);
}
function decodeHtmlEntities(str) {
  return str.replace(HtmlEntityHex, (_, hex) => safeFromCodePoint(Number.parseInt(hex, 16))).replace(HtmlEntityDec, (_, dec) => safeFromCodePoint(Number(dec))).replace(HtmlEntityNamed, (_, name) => NamedEntityMap[name.toLowerCase()] || "");
}
function hasDangerousProtocol(url) {
  const entityDecoded = decodeHtmlEntities(url);
  const cleaned = entityDecoded.replace(ControlChars, "");
  let decoded;
  try {
    decoded = decodeURIComponent(cleaned);
  } catch {
    decoded = cleaned;
  }
  const sanitized = decoded.replace(ControlChars, "");
  const lower = sanitized.toLowerCase();
  return lower.startsWith("javascript:") || lower.startsWith("data:") || lower.startsWith("vbscript:");
}
function stripProtoKeys(obj) {
  if (Array.isArray(obj))
    return obj.map(stripProtoKeys);
  if (obj && typeof obj === "object") {
    const clean = {};
    for (const key of Object.keys(obj)) {
      if (isUnsafeKey(key))
        continue;
      clean[key] = stripProtoKeys(obj[key]);
    }
    return clean;
  }
  return obj;
}
function acceptDataAttrs(value, allowId = true) {
  return Object.fromEntries(
    Object.entries(value || {}).filter(([key]) => (allowId && key === "id" || key.startsWith("data-")) && SafeAttrName.test(key))
  );
}
function hasBlockedRel(rel) {
  const tokens = rel.split(AsciiWhitespace);
  return !tokens.some(Boolean) || tokens.some((token) => BlockedLinkRels.has(token.toLowerCase()));
}
function makeTagSafe(tag) {
  let next = {};
  const { tag: type, props: prev } = tag;
  switch (type) {
    case "title":
      break;
    case "titleTemplate":
    case "templateParams":
      next = prev;
      break;
    case "htmlAttrs":
    case "bodyAttrs":
      WhitelistAttributes[type].forEach((attr) => {
        if (prev[attr]) {
          next[attr] = prev[attr];
        }
      });
      delete tag.innerHTML;
      delete tag.textContent;
      tag.props = { ...acceptDataAttrs(prev, false), ...next };
      return !Object.keys(tag.props).length ? false : tag;
    case "style":
      next = acceptDataAttrs(prev);
      WhitelistAttributes.style.forEach((key) => {
        if (prev[key]) {
          next[key] = prev[key];
        }
      });
      break;
    case "meta":
      WhitelistAttributes.meta.forEach((key) => {
        if (hasContent(prev[key])) {
          next[key] = prev[key];
        }
      });
      break;
    case "link":
      WhitelistAttributes.link.forEach((key) => {
        const val = prev[key];
        if (!val) {
          return;
        }
        if (key === "rel" && (typeof val !== "string" || hasBlockedRel(val))) {
          return;
        }
        if (key === "href" || key === "imagesrcset") {
          if (typeof val !== "string") {
            return;
          }
          const urls = key === "imagesrcset" ? val.split(",").map((s2) => s2.trim()) : [val];
          if (urls.some((u) => hasDangerousProtocol(u))) {
            return;
          }
          next[key] = val;
        } else if (val) {
          next[key] = val;
        }
      });
      if (!next.href && !next.imagesrcset || !next.rel) {
        return false;
      }
      break;
    case "noscript":
      WhitelistAttributes.noscript.forEach((key) => {
        if (prev[key]) {
          next[key] = prev[key];
        }
      });
      break;
    case "script":
      if (!tag.textContent || typeof prev.type !== "string" || !prev.type.endsWith("json")) {
        return false;
      }
      try {
        const jsonVal = typeof tag.textContent === "string" ? JSON.parse(tag.textContent) : tag.textContent;
        tag.textContent = JSON.stringify(stripProtoKeys(jsonVal), null, 0);
      } catch {
        return false;
      }
      WhitelistAttributes.script.forEach((s2) => {
        if (s2 !== "textContent" && prev[s2]) {
          next[s2] = prev[s2];
        }
      });
      break;
  }
  delete tag.innerHTML;
  if (type !== "title" && type !== "script") {
    delete tag.textContent;
  }
  tag.props = { ...acceptDataAttrs(prev), ...next };
  if (!Object.keys(tag.props).length && !tag.tag.endsWith("Attrs") && !tag.textContent) {
    return false;
  }
  return tag;
}
var SafeInputPlugin = (
  /* @PURE */
  defineHeadPlugin({
    key: "safe",
    hooks: {
      "entries:normalize": (ctx) => {
        var _a;
        if ((_a = ctx.entry.options) == null ? void 0 : _a._safe) {
          ctx.tags = ctx.tags.reduce((acc, tag) => {
            const safeTag = makeTagSafe(tag);
            if (safeTag)
              acc.push(safeTag);
            return acc;
          }, []);
        }
      },
      "tags:afterResolve": (ctx) => {
        ctx.tags = ctx.tags.reduce((acc, tag) => {
          if (!tag._safe || tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs") {
            acc.push(tag);
            return acc;
          }
          const safeTag = makeTagSafe(tag);
          if (safeTag)
            acc.push(safeTag);
          return acc;
        }, []);
      }
    }
  })
);

// node_modules/unhead/node_modules/hookable/dist/index.mjs
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) flatHooks(subHook, hooks, name);
    else if (typeof subHook === "function") hooks[name] = subHook;
  }
  return hooks;
}
var createTask = (() => {
  if (console.createTask) return console.createTask;
  const defaultTask = { run: (fn) => fn() };
  return () => defaultTask;
})();
function callHooks(hooks, args, startIndex, task) {
  for (let i3 = startIndex; i3 < hooks.length; i3 += 1) try {
    const result = task ? task.run(() => hooks[i3](...args)) : hooks[i3](...args);
    if (result && typeof result.then === "function") return Promise.resolve(result).then(() => callHooks(hooks, args, i3 + 1, task));
  } catch (error) {
    return Promise.reject(error);
  }
}
function serialTaskCaller(hooks, args, name) {
  if (hooks.length > 0) return callHooks(hooks, args, 0, createTask(name));
}
function parallelTaskCaller(hooks, args, name) {
  if (hooks.length > 0) {
    const task = createTask(name);
    return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
  }
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) callback(arg0);
}
var Hookable = class {
  constructor() {
    __publicField(this, "_hooks");
    __publicField(this, "_before");
    __publicField(this, "_after");
    __publicField(this, "_deprecatedHooks");
    __publicField(this, "_deprecatedMessages");
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") return () => {
    };
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      if (!this._deprecatedMessages) this._deprecatedMessages = /* @__PURE__ */ new Set();
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) try {
      Object.defineProperty(function_, "name", {
        get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
        configurable: true
      });
    } catch {
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") _unreg();
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    const hooks = this._hooks[name];
    if (hooks) {
      const index = hooks.indexOf(function_);
      if (index !== -1) hooks.splice(index, 1);
      if (hooks.length === 0) this._hooks[name] = void 0;
    }
  }
  clearHook(name) {
    this._hooks[name] = void 0;
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    this._hooks[name] = void 0;
    for (const hook of _hooks) this.hook(name, hook);
  }
  deprecateHooks(deprecatedHooks) {
    for (const name in deprecatedHooks) this.deprecateHook(name, deprecatedHooks[name]);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      for (const unreg of removeFns) unreg();
      removeFns.length = 0;
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) this.removeHook(key, hooks[key]);
  }
  removeAllHooks() {
    this._hooks = {};
  }
  callHook(name, ...args) {
    return this.callHookWith(serialTaskCaller, name, args);
  }
  callHookParallel(name, ...args) {
    return this.callHookWith(parallelTaskCaller, name, args);
  }
  callHookWith(caller, name, args) {
    const event = this._before || this._after ? {
      name,
      args,
      context: {}
    } : void 0;
    if (this._before) callEachWith(this._before, event);
    const result = caller(this._hooks[name] ? [...this._hooks[name]] : [], args, name);
    if (result instanceof Promise) return result.finally(() => {
      if (this._after && event) callEachWith(this._after, event);
    });
    if (this._after && event) callEachWith(this._after, event);
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) this._before.splice(index, 1);
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) this._after.splice(index, 1);
      }
    };
  }
};
function createHooks() {
  return new Hookable();
}

// node_modules/unhead/dist/shared/unhead.J7R8psSN.mjs
var allowedMetaProperties = ["name", "property", "http-equiv"];
var StandardSingleMetaTags = /* @__PURE__ */ new Set([
  "viewport",
  "description",
  "keywords",
  "robots"
]);
function isMetaArrayDupeKey(v) {
  const i3 = v.indexOf(":");
  if (i3 === -1)
    return false;
  const j = v.indexOf(":", i3 + 1);
  const namespace = v.slice(i3 + 1, j === -1 ? v.length : j);
  if (namespace === "twitter")
    return v === "meta:twitter:image" || v.startsWith("meta:twitter:image:");
  return MetaTagsArrayable.has(namespace);
}
function dedupeKey(tag) {
  const { props, tag: name } = tag;
  if (UniqueTags.has(name))
    return name;
  if (name === "link" && props.rel === "canonical")
    return "canonical";
  if (name === "link" && props.rel === "alternate") {
    if (props.hreflang)
      return `alternate:${props.hreflang}`;
    if (props.type)
      return `alternate:${props.type}:${props.href || ""}`;
  }
  if (props.charset)
    return "charset";
  if (tag.tag === "meta") {
    for (const n4 of allowedMetaProperties) {
      if (props[n4] !== void 0) {
        const propValue = props[n4];
        const isStructured = propValue && typeof propValue === "string" && propValue.includes(":");
        const isStandardSingle = propValue && StandardSingleMetaTags.has(propValue);
        const shouldAlwaysDedupe = isStructured || isStandardSingle;
        const keyPart = !shouldAlwaysDedupe && tag.key ? `:key:${tag.key}` : "";
        return `${name}:${propValue}${keyPart}`;
      }
    }
  }
  if (tag.key) {
    return `${name}:key:${tag.key}`;
  }
  if (props.id) {
    return `${name}:id:${props.id}`;
  }
  if (name === "link" && props.rel === "alternate") {
    return `alternate:${props.href || ""}`;
  }
  if (TagsWithInnerContent.has(name)) {
    const v = tag.textContent || tag.innerHTML;
    if (v) {
      return `${name}:content:${v}`;
    }
  }
}
function hashTag(tag) {
  const dedupe = tag._h || tag._d;
  if (dedupe)
    return dedupe;
  const inner = tag.textContent || tag.innerHTML;
  if (inner)
    return inner;
  const keys = Object.keys(tag.props).sort();
  return `${tag.tag}:${keys.map((k) => `${k}:${String(tag.props[k])}`).join(",")}`;
}
function walkResolver(val, resolve2, key) {
  const type = typeof val;
  if (type === "function") {
    if (!key || key !== "titleTemplate" && !(key[0] === "o" && key[1] === "n")) {
      val = val();
    }
  }
  const v = resolve2 ? resolve2(key, val) : val;
  if (Array.isArray(v)) {
    let out;
    for (let i3 = 0; i3 < v.length; i3++) {
      const resolved = walkResolver(v[i3], resolve2);
      if (out) {
        out[i3] = resolved;
      } else if (resolved !== v[i3]) {
        out = v.slice(0, i3);
        out[i3] = resolved;
      }
    }
    return out || v;
  }
  if ((v == null ? void 0 : v.constructor) === Object) {
    let next;
    for (const k in v) {
      const unsafe = isUnsafeKey(k);
      const resolved = unsafe ? void 0 : walkResolver(v[k], resolve2, k);
      const requiresCopy = k === "_resolver";
      if (!next && (unsafe || requiresCopy || resolved !== v[k])) {
        next = {};
        for (const previousKey in v) {
          if (previousKey === k) {
            break;
          }
          next[previousKey] = v[previousKey];
        }
      }
      if (next && !unsafe) {
        next[k] = resolved;
      }
    }
    return next || v;
  }
  return v;
}
var INVALID_ATTR_NAME_RE = /[\s"'<>/=\x00-\x1F\x7F]/;
function normalizeStyleClassProps(key, value) {
  const store = key === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
  function processValue(rawValue) {
    if (rawValue == null || rawValue === void 0)
      return;
    const value2 = String(rawValue).trim();
    if (!value2)
      return;
    if (key === "style") {
      const [k, ...v] = value2.split(":").map((s2) => s2 ? s2.trim() : "");
      if (k && v.length)
        store.set(k, v.join(":"));
    } else {
      value2.split(" ").filter(Boolean).forEach((c) => store.add(c));
    }
  }
  if (typeof value === "string") {
    key === "style" ? value.split(";").forEach(processValue) : processValue(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => processValue(item));
  } else if (value && typeof value === "object") {
    Object.entries(value).forEach(([k, v]) => {
      if (v && v !== "false") {
        key === "style" ? store.set(String(k).trim(), String(v)) : processValue(k);
      }
    });
  }
  return store;
}
function normalizeProps2(tag, input) {
  tag.props = tag.props || {};
  if (!input) {
    return tag;
  }
  if (tag.tag === "templateParams") {
    tag.props = input;
    return tag;
  }
  const isHtmlTag = HasElementTags.has(tag.tag) || tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs";
  for (const prop of Object.keys(input)) {
    if (isUnsafeKey(prop))
      continue;
    const isDataKey = prop.startsWith("data-");
    const isHtmlAttr = isHtmlTag && !TagConfigKeys.has(prop);
    const key = isHtmlAttr && !isDataKey ? prop.toLowerCase() : prop;
    if (isHtmlAttr && (!key || INVALID_ATTR_NAME_RE.test(key)))
      continue;
    const value = input[prop];
    if (value === null) {
      tag.props[key] = null;
      continue;
    }
    if (prop === "class" || prop === "style") {
      tag.props[prop] = normalizeStyleClassProps(prop, value);
      continue;
    }
    if (TagConfigKeys.has(prop)) {
      if ((prop === "textContent" || prop === "innerHTML") && typeof value === "object") {
        let type = input.type;
        if (!input.type) {
          type = "application/json";
        }
        if (!(type == null ? void 0 : type.endsWith("json")) && type !== "speculationrules") {
          continue;
        }
        input.type = type;
        tag.props.type = type;
        tag[prop] = JSON.stringify(value);
      } else {
        tag[prop] = value;
      }
      continue;
    }
    const strValue = String(value);
    const isMetaContentKey = tag.tag === "meta" && key === "content";
    if (strValue === "true" || strValue === "") {
      tag.props[key] = isDataKey || isMetaContentKey ? strValue : true;
    } else if (!value && isDataKey && strValue === "false") {
      tag.props[key] = "false";
    } else if (value !== void 0) {
      tag.props[key] = value;
    }
  }
  return tag;
}
function normalizeTag(tagName, _input) {
  const input = typeof _input === "object" && typeof _input !== "function" ? _input : { [tagName === "script" || tagName === "noscript" || tagName === "style" ? "innerHTML" : "textContent"]: _input };
  const tag = normalizeProps2({ tag: tagName, props: {} }, input);
  if (tag.key && DupeableTags.has(tag.tag)) {
    tag.props["data-hid"] = tag._h = tag.key;
  }
  if (tag.tag === "script" && typeof tag.innerHTML === "object") {
    tag.innerHTML = JSON.stringify(tag.innerHTML);
    tag.props.type = tag.props.type || "application/json";
  }
  return Array.isArray(tag.props.content) ? tag.props.content.map((v) => ({ ...tag, props: { ...tag.props, content: v } })) : tag;
}
function normalizeEntryToTags(input, propResolvers) {
  if (!input) {
    return [];
  }
  if (typeof input === "function") {
    input = input();
  }
  const resolvers = (key, val) => {
    for (let i3 = 0; i3 < propResolvers.length; i3++) {
      val = propResolvers[i3](key, val);
    }
    return val;
  };
  input = resolvers(void 0, input);
  const tags = [];
  input = walkResolver(input, resolvers);
  Object.entries(input || {}).forEach(([key, value]) => {
    if (value === void 0)
      return;
    for (const v of Array.isArray(value) ? value : [value])
      tags.push(normalizeTag(key, v));
  });
  return tags.flat();
}

// node_modules/unhead/dist/shared/unhead.BrXkGDAU.mjs
function registerPlugin(head, p) {
  const plugin = typeof p === "function" ? p(head) : p;
  const key = plugin.key || String(head.plugins.size + 1);
  const exists = head.plugins.get(key);
  if (!exists) {
    head.plugins.set(key, plugin);
    head.hooks.addHooks(plugin.hooks || {});
  }
}
function createUnhead(resolvedOptions = {}) {
  var _a;
  const hooks = createHooks();
  hooks.addHooks(resolvedOptions.hooks || {});
  const ssr = !resolvedOptions.document;
  const entries = /* @__PURE__ */ new Map();
  const plugins = /* @__PURE__ */ new Map();
  const normalizeQueue = /* @__PURE__ */ new Set();
  const head = {
    _entryCount: 1,
    // 0 is reserved for internal use
    plugins,
    dirty: false,
    resolvedOptions,
    hooks,
    ssr,
    entries,
    headEntries() {
      return [...entries.values()];
    },
    use: (p) => registerPlugin(head, p),
    push(input, _options) {
      const options = { ..._options || {} };
      delete options.head;
      const _i = options._index ?? head._entryCount++;
      const inst = { _i, input, options };
      const _ = {
        _poll(rm = false) {
          head.dirty = true;
          !rm && normalizeQueue.add(_i);
          hooks.callHook("entries:updated", head);
        },
        dispose() {
          if (entries.delete(_i)) {
            head.invalidate();
          }
        },
        // a patch is the same as creating a new entry, just a nice DX
        patch(input2) {
          if (!options.mode || options.mode === "server" && ssr || options.mode === "client" && !ssr) {
            inst.input = input2;
            entries.set(_i, inst);
            _._poll();
          }
        }
      };
      _.patch(input);
      return _;
    },
    async resolveTags() {
      const ctx = {
        tagMap: /* @__PURE__ */ new Map(),
        tags: [],
        entries: [...head.entries.values()]
      };
      await hooks.callHook("entries:resolve", ctx);
      while (normalizeQueue.size) {
        const i3 = normalizeQueue.values().next().value;
        normalizeQueue.delete(i3);
        const e = entries.get(i3);
        if (e) {
          const normalizeCtx = {
            tags: normalizeEntryToTags(e.input, resolvedOptions.propResolvers || []).map((t3) => Object.assign(t3, e.options)),
            entry: e
          };
          await hooks.callHook("entries:normalize", normalizeCtx);
          e._tags = normalizeCtx.tags.map((t3, i22) => {
            t3._w = tagWeight(head, t3);
            t3._p = (e._i << 10) + i22;
            t3._d = dedupeKey(t3);
            if (!t3._d)
              t3._h = hashTag(t3);
            return t3;
          });
        }
      }
      let hasFlatMeta = false;
      ctx.entries.flatMap((e) => (e._tags || []).map((t3) => ({ ...t3, props: { ...t3.props } }))).sort(sortTags).reduce((acc, next) => {
        const k = next._d || next._h;
        if (!acc.has(k))
          return acc.set(k, next);
        const prev = acc.get(k);
        const strategy = (next == null ? void 0 : next.tagDuplicateStrategy) || (UsesMergeStrategy.has(next.tag) ? "merge" : null) || (next.key && next.key === prev.key ? "merge" : null);
        if (strategy === "merge") {
          const newProps = { ...prev.props };
          Object.entries(next.props).forEach(([p, v]) => (
            // @ts-expect-error untyped
            newProps[p] = p === "style" ? new Map([...prev.props.style || /* @__PURE__ */ new Map(), ...v]) : p === "class" ? /* @__PURE__ */ new Set([...prev.props.class || /* @__PURE__ */ new Set(), ...v]) : v
          ));
          acc.set(k, { ...next, props: newProps });
        } else if (next._p >> 10 === prev._p >> 10 && next.tag === "meta" && isMetaArrayDupeKey(k)) {
          acc.set(k, Object.assign([...Array.isArray(prev) ? prev : [prev], next], next));
          hasFlatMeta = true;
        } else if (next._w === prev._w ? next._p > prev._p : (next == null ? void 0 : next._w) < (prev == null ? void 0 : prev._w)) {
          acc.set(k, next);
        }
        return acc;
      }, ctx.tagMap);
      const title = ctx.tagMap.get("title");
      const titleTemplate = ctx.tagMap.get("titleTemplate");
      head._title = title == null ? void 0 : title.textContent;
      if (titleTemplate) {
        const titleTemplateFn = titleTemplate == null ? void 0 : titleTemplate.textContent;
        head._titleTemplate = titleTemplateFn;
        if (titleTemplateFn) {
          let newTitle = typeof titleTemplateFn === "function" ? titleTemplateFn(title == null ? void 0 : title.textContent) : titleTemplateFn;
          if (typeof newTitle === "string" && !head.plugins.has("template-params")) {
            newTitle = newTitle.replace("%s", (title == null ? void 0 : title.textContent) || "");
          }
          if (title) {
            newTitle === null ? ctx.tagMap.delete("title") : ctx.tagMap.set("title", { ...title, textContent: newTitle });
          } else {
            titleTemplate.tag = "title";
            titleTemplate.textContent = newTitle;
          }
        }
      }
      ctx.tags = Array.from(ctx.tagMap.values());
      if (hasFlatMeta) {
        ctx.tags = ctx.tags.flat().sort(sortTags);
      }
      await hooks.callHook("tags:beforeResolve", ctx);
      await hooks.callHook("tags:resolve", ctx);
      await hooks.callHook("tags:afterResolve", ctx);
      const finalTags = [];
      for (const t3 of ctx.tags) {
        const { innerHTML, tag, props } = t3;
        if (!ValidHeadTags.has(tag)) {
          continue;
        }
        if (Object.keys(props).length === 0 && !hasContent(t3.innerHTML) && !hasContent(t3.textContent)) {
          continue;
        }
        if (tag === "meta") {
          if (!hasContent(props.content) && !props["http-equiv"] && !props.charset) {
            continue;
          }
        }
        if (tag === "script" && innerHTML) {
          if (String(props.type).endsWith("json")) {
            const v = typeof innerHTML === "string" ? innerHTML : JSON.stringify(innerHTML);
            t3.innerHTML = v.replace(/</g, "\\u003C");
          } else if (typeof innerHTML === "string") {
            t3.innerHTML = innerHTML.replace(new RegExp(`</${tag}`, "g"), `<\\/${tag}`);
          }
          t3._d = dedupeKey(t3);
        }
        finalTags.push(t3);
      }
      return finalTags;
    },
    invalidate() {
      for (const entry of entries.values()) {
        normalizeQueue.add(entry._i);
      }
      head.dirty = true;
      hooks.callHook("entries:updated", head);
    }
  };
  ((resolvedOptions == null ? void 0 : resolvedOptions.plugins) || []).forEach((p) => registerPlugin(head, p));
  head.hooks.callHook("init", head);
  (_a = resolvedOptions.init) == null ? void 0 : _a.forEach((e) => e && head.push(e));
  return head;
}

// node_modules/unhead/dist/shared/unhead.BYvz9V1x.mjs
var SepSub = "%separator";
function sub(p, token, isJson = false) {
  var _a;
  let val;
  if (token === "s" || token === "pageTitle") {
    val = p.pageTitle;
  } else if (token.includes(".")) {
    const dotIndex = token.indexOf(".");
    val = (_a = p[token.substring(0, dotIndex)]) == null ? void 0 : _a[token.substring(dotIndex + 1)];
  } else {
    val = p[token];
  }
  if (val !== void 0) {
    return isJson ? (val || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : val || "";
  }
  return void 0;
}
function processTemplateParams(s2, p, sep, isJson = false) {
  if (typeof s2 !== "string" || !s2.includes("%"))
    return s2;
  let decoded = s2;
  try {
    decoded = decodeURI(s2);
  } catch {
  }
  const tokens = decoded.match(/%\w+(?:\.\w+)?/g);
  if (!tokens) {
    return s2;
  }
  const hasSepSub = s2.includes(SepSub);
  s2 = s2.replace(/%\w+(?:\.\w+)?/g, (token) => {
    if (token === SepSub || !tokens.includes(token)) {
      return token;
    }
    const re = sub(p, token.slice(1), isJson);
    return re !== void 0 ? re : token;
  }).trim();
  if (hasSepSub) {
    s2 = s2.split(SepSub).map((part) => part.trim()).filter((part) => part !== "").join(sep ? ` ${sep} ` : " ");
  }
  return s2;
}

// node_modules/unhead/dist/shared/unhead.AtIkjM2B.mjs
var formatKey = (k) => !k.includes(":key") ? k.split(":").join(":key:") : k;
var AliasSortingPlugin = defineHeadPlugin({
  key: "aliasSorting",
  hooks: {
    "tags:resolve": (ctx) => {
      let m = false;
      for (const t3 of ctx.tags) {
        const p = t3.tagPriority;
        if (!p)
          continue;
        const s2 = String(p);
        if (s2.startsWith("before:")) {
          const k = formatKey(s2.slice(7));
          const l = ctx.tagMap.get(k);
          if (l) {
            if (typeof l.tagPriority === "number")
              t3.tagPriority = l.tagPriority;
            t3._p = l._p - 1;
            m = true;
          }
        } else if (s2.startsWith("after:")) {
          const k = formatKey(s2.slice(6));
          const l = ctx.tagMap.get(k);
          if (l) {
            if (typeof l.tagPriority === "number")
              t3.tagPriority = l.tagPriority;
            t3._p = l._p + 1;
            m = true;
          }
        }
      }
      if (m)
        ctx.tags = ctx.tags.sort(sortTags);
    }
  }
});
var DeprecationsPlugin = defineHeadPlugin({
  key: "deprecations",
  hooks: {
    "entries:normalize": ({ tags }) => {
      for (const tag of tags) {
        if (tag.props.children) {
          tag.innerHTML = tag.props.children;
          delete tag.props.children;
        }
        if (tag.props.hid) {
          tag.key = tag.props.hid;
          delete tag.props.hid;
        }
        if (tag.props.vmid) {
          tag.key = tag.props.vmid;
          delete tag.props.vmid;
        }
        if (tag.props.body) {
          tag.tagPosition = "bodyClose";
          delete tag.props.body;
        }
      }
    }
  }
});
async function walkPromises(v) {
  const type = typeof v;
  if (type === "function") {
    return v;
  }
  if (v instanceof Promise) {
    return await v;
  }
  if (Array.isArray(v)) {
    return await Promise.all(v.map((r3) => walkPromises(r3)));
  }
  if ((v == null ? void 0 : v.constructor) === Object) {
    const next = {};
    for (const key of Object.keys(v)) {
      next[key] = await walkPromises(v[key]);
    }
    return next;
  }
  return v;
}
var PromisesPlugin = defineHeadPlugin({
  key: "promises",
  hooks: {
    "entries:resolve": async (ctx) => {
      const promises = [];
      for (const k in ctx.entries) {
        if (!ctx.entries[k]._promisesProcessed) {
          promises.push(
            walkPromises(ctx.entries[k].input).then((val) => {
              ctx.entries[k].input = val;
              ctx.entries[k]._promisesProcessed = true;
            })
          );
        }
      }
      await Promise.all(promises);
    }
  }
});
var SupportedAttrs = {
  meta: "content",
  link: "href",
  htmlAttrs: "lang"
};
var contentAttrs = ["innerHTML", "textContent"];
var TemplateParamsPlugin = defineHeadPlugin((head) => {
  return {
    key: "template-params",
    hooks: {
      "entries:normalize": (ctx) => {
        var _a, _b, _c;
        const params = ((_b = (_a = ctx.tags.filter((t3) => t3.tag === "templateParams" && t3.mode === "server")) == null ? void 0 : _a[0]) == null ? void 0 : _b.props) || {};
        if (Object.keys(params).length) {
          head._ssrPayload = {
            templateParams: {
              ...((_c = head._ssrPayload) == null ? void 0 : _c.templateParams) || {},
              ...params
            }
          };
        }
      },
      "tags:resolve": ({ tagMap, tags }) => {
        var _a;
        const params = ((_a = tagMap.get("templateParams")) == null ? void 0 : _a.props) || {};
        const sep = params.separator || "|";
        delete params.separator;
        params.pageTitle = processTemplateParams(
          // find templateParams
          params.pageTitle || head._title || "",
          params,
          sep
        );
        for (const tag of tags) {
          if (tag.processTemplateParams === false) {
            continue;
          }
          const v = SupportedAttrs[tag.tag];
          if (v && typeof tag.props[v] === "string") {
            tag.props[v] = processTemplateParams(tag.props[v], params, sep);
          } else if (tag.processTemplateParams || tag.tag === "titleTemplate" || tag.tag === "title") {
            for (const p of contentAttrs) {
              if (typeof tag[p] === "string")
                tag[p] = processTemplateParams(tag[p], params, sep, tag.tag === "script" && tag.props.type.endsWith("json"));
            }
          }
        }
        head._templateParams = params;
        head._separator = sep;
      },
      "tags:afterResolve": ({ tagMap }) => {
        const title = tagMap.get("title");
        if ((title == null ? void 0 : title.textContent) && title.processTemplateParams !== false) {
          title.textContent = processTemplateParams(title.textContent, head._templateParams, head._separator);
        }
      }
    }
  };
});

// node_modules/@unhead/vue/dist/shared/vue.N9zWjxoK.mjs
var VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

// node_modules/@unhead/vue/dist/shared/vue.Cd6dkybA.mjs
var headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (instance) {
      return instance;
    }
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead2(input, options = {}) {
  const head = options.head || injectHead();
  return head.ssr ? head.push(input || {}, options) : clientUseHead(head, input, options);
}
function clientUseHead(head, input, options = {}) {
  const scope = getCurrentScope();
  if (scope && !scope.active)
    return { patch() {
    }, dispose() {
    }, _poll() {
    } };
  const deactivated = ref(false);
  let entry;
  watchEffect(() => {
    const i3 = deactivated.value ? {} : walkResolver(input, VueResolver);
    if (entry) {
      entry.patch(i3);
    } else {
      entry = head.push(i3, options);
    }
  });
  const vm = getCurrentInstance();
  if (vm) {
    onBeforeUnmount(() => {
      entry.dispose();
    });
    onDeactivated(() => {
      deactivated.value = true;
    });
    onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}
function useSeoMeta2(input = {}, options = {}) {
  const head = options.head || injectHead();
  head.use(FlatMetaPlugin);
  const entry = useHead2(normalizeSeoMetaInput(input), options);
  const corePatch = entry.patch;
  entry.patch = (input2) => corePatch(normalizeSeoMetaInput(input2));
  return entry;
}
function normalizeSeoMetaInput(input) {
  if (input._flatMeta)
    return input;
  const meta = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key) || key === "title" || key === "titleTemplate")
      continue;
    meta[key] = input[key];
  }
  return {
    title: input.title,
    titleTemplate: input.titleTemplate,
    _flatMeta: meta
  };
}

// node_modules/@scalar/api-reference/dist/helpers/map-config-to-workspace-store.js
var mapConfigToWorkspaceStore = ({ config, store, isDarkMode }) => {
  watch(() => toValue(config).defaultHttpClient, (newValue) => {
    if (newValue) {
      const { targetKey, clientKey } = newValue;
      const clientId = `${targetKey}/${clientKey}`;
      if (n2(clientId)) store.update("x-scalar-default-client", clientId);
    }
  }, { immediate: true });
  watch(() => toValue(config).darkMode, (isDark) => store.update("x-scalar-color-mode", isDark ? "dark" : "light"));
  watch(() => isDarkMode.value, (newIsDark) => store.update("x-scalar-color-mode", newIsDark ? "dark" : "light"), { immediate: true });
  if (toValue(config).metaData) useSeoMeta2(toValue(config).metaData);
  watch(() => toValue(config).proxyUrl, (newProxyUrl) => store.update("x-scalar-active-proxy", newProxyUrl), { immediate: true });
  useFavicon(computed(() => toValue(config).favicon));
};

// node_modules/@scalar/api-reference/dist/helpers/normalize-configurations.js
var isConfigWithRequiredSource = (input) => {
  var _a;
  return !!((_a = input.url) == null ? void 0 : _a.trim()) || !!input.content;
};
var normalizeConfigurations = (configuration) => {
  const { slug } = slugger();
  const normalized = {};
  if (!configuration) return normalized;
  (Array.isArray(configuration) ? configuration : [configuration]).flatMap((c) => {
    if (isConfigurationWithSources(c)) {
      const { sources: configSources, ...rest } = c;
      return (configSources == null ? void 0 : configSources.map((source) => ({
        ...rest,
        ...source
      }))) ?? [];
    }
    return [c];
  }).map((source) => apiReferenceConfigurationWithSourceSchema(source)).filter(isConfigWithRequiredSource).map((source, index) => addSlugAndTitle(source, index, slug)).forEach((c) => {
    const { url, content, ...config } = c;
    normalized[c.slug] = {
      config,
      title: c.title,
      slug: c.slug,
      default: !!(c == null ? void 0 : c.default),
      agent: c.agent,
      source: content ? { content: normalizeContent(content) ?? {} } : { url }
    };
  });
  return normalized;
};
var normalizeContent = (content) => {
  if (!content) return null;
  if (typeof content === "function") return normalizeContent(content());
  if (typeof content === "string") return parseJsonOrYaml(content);
  return content;
};
var addSlugAndTitle = (source, index = 0, slug) => {
  if (source.title) return {
    ...source,
    slug: source.slug || slug(source.title),
    title: source.title
  };
  if (source.slug) return {
    ...source,
    slug: slug(source.slug),
    title: source.slug
  };
  return {
    ...source,
    slug: `api-${index + 1}`,
    title: `API #${index + 1}`
  };
};

// node_modules/@scalar/api-reference/dist/helpers/safe-deep-clone.js
var safeDeepClone = (value) => {
  if (typeof window === "undefined") return deepClone(value);
  return window.structuredClone(value);
};

// node_modules/@scalar/helpers/dist/object/to-json-compatible.js
var toJsonCompatible = (obj, options = {}) => {
  const { prefix = "", cache = /* @__PURE__ */ new WeakMap() } = options;
  const toRef2 = (path) => ({ $ref: `#${path ?? ""}` });
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const rootPath = prefix;
  cache.set(obj, rootPath);
  const rootResult = Array.isArray(obj) ? new Array(obj.length) : {};
  const queue = new Queue();
  queue.enqueue({ node: obj, result: rootResult, path: rootPath });
  while (!queue.isEmpty()) {
    const frame = queue.dequeue();
    if (!frame) {
      continue;
    }
    const { node, result, path } = frame;
    if (Array.isArray(node)) {
      const input = node;
      const out2 = result;
      for (let index = 0; index < input.length; index++) {
        if (!(index in input)) {
          continue;
        }
        const item = input[index];
        const itemPath = `${path}/${index}`;
        if (typeof item !== "object" || item === null) {
          out2[index] = item;
          continue;
        }
        const existingPath = cache.get(item);
        if (existingPath !== void 0) {
          out2[index] = toRef2(existingPath);
          continue;
        }
        cache.set(item, itemPath);
        const childResult = Array.isArray(item) ? new Array(item.length) : {};
        out2[index] = childResult;
        queue.enqueue({ node: item, result: childResult, path: itemPath });
      }
      continue;
    }
    const out = result;
    for (const [key, value] of Object.entries(node)) {
      const valuePath = `${path}/${escapeJsonPointer(key)}`;
      if (typeof value !== "object" || value === null) {
        out[key] = value;
        continue;
      }
      const existingPath = cache.get(value);
      if (existingPath !== void 0) {
        out[key] = toRef2(existingPath);
        continue;
      }
      cache.set(value, valuePath);
      const childResult = Array.isArray(value) ? new Array(value.length) : {};
      out[key] = childResult;
      queue.enqueue({ node: value, result: childResult, path: valuePath });
    }
  }
  return rootResult;
};

// node_modules/microdiff/dist/index.js
var richTypes = ["Date", "RegExp", "String", "Number"];
var temporalTypes = Object.getOwnPropertyNames(globalThis.Temporal || {});
function diff(obj, newObj, options = { cyclesFix: true }, _stack = []) {
  var _a, _b;
  let diffs = [];
  const isObjArray = Array.isArray(obj);
  for (const key in obj) {
    const value = obj[key];
    const path = isObjArray ? +key : key;
    if (!(key in newObj)) {
      diffs.push({
        type: "REMOVE",
        path: [path],
        oldValue: value
      });
      continue;
    }
    const newValue = newObj[key];
    const areCompatibleObjects = typeof value === "object" && typeof newValue === "object" && Array.isArray(value) === Array.isArray(newValue);
    const objConstructor = areCompatibleObjects && value ? (_b = (_a = Object.getPrototypeOf(value)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name : void 0;
    if (value && newValue && areCompatibleObjects && !richTypes.includes(objConstructor) && !temporalTypes.includes(objConstructor) && (!options.cyclesFix || !_stack.includes(value))) {
      if (options.cyclesFix) {
        _stack.push(value);
      }
      const subDiffs = diff(value, newValue, options, _stack);
      if (options.cyclesFix) {
        _stack.pop();
      }
      for (const subDiff of subDiffs) {
        subDiff.path.unshift(path);
        diffs.push(subDiff);
      }
    } else if (!(Object.is(value, newValue) || temporalTypes.includes(objConstructor) && String(value) === String(newValue) || richTypes.includes(objConstructor) && (isNaN(value) ? value + "" === newValue + "" : +value === +newValue))) {
      diffs.push({
        path: [path],
        type: "CHANGE",
        value: newValue,
        oldValue: value
      });
    }
  }
  const isNewObjArray = Array.isArray(newObj);
  for (const key in newObj) {
    if (!(key in obj)) {
      diffs.push({
        type: "CREATE",
        path: [isNewObjArray ? +key : key],
        value: newObj[key]
      });
    }
  }
  return diffs;
}

// node_modules/@scalar/api-reference/dist/components/ApiReference.vue.script.js
var _hoisted_1100 = ["dir", "lang"];
var _hoisted_267 = {
  key: 1,
  class: "flex gap-1.5 px-3 pt-3"
};
var _hoisted_347 = {
  class: "no-underline hover:underline",
  href: "https://www.scalar.com",
  rel: "noopener noreferrer",
  target: "_blank"
};
var _hoisted_426 = { key: 1 };
var _hoisted_518 = ["aria-label", "inert"];
var _hoisted_69 = { class: "w-64 empty:hidden" };
var _hoisted_79 = {
  key: 3,
  class: "references-footer"
};
var version = "1.67.0";
if (typeof window !== "undefined") console.info(`@scalar/api-reference@${version}`);
var ApiReference_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "ApiReference",
  props: { configuration: {} },
  setup(__props, { expose: __expose }) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const { copyToClipboard } = useClipboard();
    const isDevelopment = false;
    const obtrusiveScrollbars = ref(false);
    onMounted(() => {
      obtrusiveScrollbars.value = hasObtrusiveScrollbars();
    });
    const eventBus = createWorkspaceEventBus({ debug: isDevelopment });
    const isSidebarOpen = ref(false);
    s(() => useId());
    const configList = computed(() => normalizeConfigurations(props.configuration));
    const isMultiDocument = computed(() => Object.keys(configList.value).length > 1);
    const activeSlug = ref(((_a = Object.values(configList.value).find((c) => c.default)) == null ? void 0 : _a.slug) ?? ((_c = configList.value[((_b = Object.keys(configList.value)) == null ? void 0 : _b[0]) ?? ""]) == null ? void 0 : _c.slug) ?? "");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const apiParam = url.searchParams.get("api");
      if (apiParam && configList.value[apiParam]) {
        activeSlug.value = apiParam;
        const newUrl = makeUrlFromId(getIdFromUrl(url, (_d = configList.value[apiParam].config.pathRouting) == null ? void 0 : _d.basePath, apiParam), (_e = configList.value[apiParam].config.pathRouting) == null ? void 0 : _e.basePath, isMultiDocument.value);
        if (newUrl) {
          newUrl.searchParams.delete("api");
          window.history.replaceState({}, "", newUrl.toString());
        }
      }
      const documentSlug = getIdFromUrl(url, Object.values(configList.value).map((c) => {
        var _a2;
        return (_a2 = c.config.pathRouting) == null ? void 0 : _a2.basePath;
      }).find((p) => p ? matchesBasePath(url, p) : false), isMultiDocument.value ? void 0 : activeSlug.value).split("/")[0];
      if (documentSlug && configList.value[documentSlug]) activeSlug.value = documentSlug;
    }
    const documentOptionList = computed(() => Object.values(configList.value).map((c) => ({
      label: c.title,
      id: c.slug
    })));
    const selectedProtocol = ref("");
    const selectedServer = ref("");
    const activeAsyncApiDocument = computed(() => {
      const document2 = workspaceStore.workspace.activeDocument;
      return isAsyncApiDocument(document2) ? document2 : null;
    });
    watch(activeSlug, () => {
      selectedProtocol.value = "";
      selectedServer.value = "";
    });
    const configurationOverrides = ref({});
    const withLocalizedConfigurationDefaults = (config, activeConfig) => {
      const localization = resolveLocalization(config.localization);
      const configuredModelsSectionLabel = configurationOverrides.value.modelsSectionLabel ?? ((activeConfig == null ? void 0 : activeConfig.modelsSectionLabel) !== DEFAULT_MODELS_SECTION_LABEL ? activeConfig == null ? void 0 : activeConfig.modelsSectionLabel : void 0);
      return {
        ...config,
        modelsSectionLabel: configuredModelsSectionLabel ?? localization.translations.models.label ?? DEFAULT_MODELS_SECTION_LABEL
      };
    };
    const mergedConfig = computed(() => {
      var _a2;
      const activeConfig = (_a2 = configList.value[activeSlug.value]) == null ? void 0 : _a2.config;
      const merged = {
        ...coerce(apiReferenceConfigurationSchema, {}),
        ...activeConfig,
        ...configurationOverrides.value
      };
      return withLocalizedConfigurationDefaults(merged, activeConfig);
    });
    const apiReferenceLocalization = provideLocalization(() => mergedConfig.value.localization);
    const sidebarOptions = computed(() => ({
      ...mergedConfig.value,
      labels: {
        closeGroup: apiReferenceLocalization.translate("navigation.closeGroup"),
        httpMethod: apiReferenceLocalization.translate("common.httpMethod"),
        openGroup: apiReferenceLocalization.translate("navigation.openGroup")
      }
    }));
    const documentLang = computed(() => apiReferenceLocalization.locale.value.replace("_", "-"));
    const basePath = computed(() => {
      var _a2;
      return (_a2 = mergedConfig.value.pathRouting) == null ? void 0 : _a2.basePath;
    });
    const getSidebarItemHref = (item) => makeHrefFromId(item.id, basePath.value, isMultiDocument.value);
    const themeStyle = computed(() => getThemeStyles(mergedConfig.value.theme, { fonts: mergedConfig.value.withDefaultFonts }));
    const styleContent = computed(() => `${mergedConfig.value.customCss ?? ""}
${themeStyle.value}`.replace(/<\/style/gi, "<\\/style"));
    const collectWebhooks = (entries) => entries.flatMap((entry) => {
      const nested = "children" in entry && entry.children ? collectWebhooks(entry.children) : [];
      return entry.type === "webhook" ? [{
        name: entry.name,
        method: entry.method,
        id: entry.id
      }, ...nested] : nested;
    });
    if (typeof window !== "undefined") {
      const canonical = redirectUrl(window.location.href, slugify(mergedConfig.value.modelsSectionLabel ?? DEFAULT_MODELS_SECTION_LABEL), activeSlug.value, isMultiDocument.value, (_f = mergedConfig.value.pathRouting) == null ? void 0 : _f.basePath);
      if (canonical) window.history.replaceState({}, "", canonical.toString());
    }
    if (mergedConfig.value.redirect && typeof window !== "undefined") {
      const newPath = mergedConfig.value.redirect((mergedConfig.value.pathRouting ? window.location.pathname : "") + window.location.hash);
      if (newPath) window.history.replaceState({}, "", newPath);
    }
    function syncSlugAndUrlWithDocument(slug, elementId, config) {
      var _a2;
      const url = makeUrlFromId(elementId || slug, (_a2 = config.pathRouting) == null ? void 0 : _a2.basePath, isMultiDocument.value);
      if (url) window.history.replaceState({}, "", url.toString());
      activeSlug.value = slug;
    }
    const workspaceStore = createWorkspaceStore({ verbose: isDevelopment });
    const clientStore = createWorkspaceStore({
      verbose: isDevelopment,
      plugins: [persistencePlugin({ persistAuth: () => mergedConfig.value.persistAuth ?? false })]
    });
    const pluginManager = createPluginManager({
      plugins: Object.values(configList.value).flatMap((c) => c.config.plugins ?? []),
      /**
      * Read-only view of the global authentication state, so plugins can read stored secrets and
      * the selected security schemes without being able to mutate them. Wraps the client store's
      * auth methods (rather than passing the store directly) to keep the setters out of the plugin API.
      *
      * The getters return a deep copy (`export` already snapshots internally, the others go through
      * `toJsonCompatible`) so plugins receive plain data rather than the store's live reactive proxies —
      * mutating what they get back can never leak into the store.
      */
      auth: {
        export: () => clientStore.auth.export(),
        getAuthSecrets: (documentName, schemeName) => toJsonCompatible(clientStore.auth.getAuthSecrets(documentName, schemeName)),
        getAuthSelectedSchemas: (payload) => toJsonCompatible(clientStore.auth.getAuthSelectedSchemas(payload))
      }
    });
    provide(PLUGIN_MANAGER_SYMBOL, pluginManager);
    pluginManager.notifyInit(mergedConfig.value);
    watch(mergedConfig, (config) => pluginManager.notifyConfigChange(config));
    const { toggleColorMode, isDarkMode } = useColorMode({
      initialColorMode: {
        true: "dark",
        false: "light",
        undefined: "system"
      }[String(mergedConfig.value.darkMode)],
      overrideColorMode: mergedConfig.value.forceDarkModeState
    });
    const activeSearchableDocument = computed(() => workspaceStore.workspace.activeDocument);
    const pluginSidebarEntries = computed(() => pluginManager.getSidebarEntries(activeSlug.value).reduce((grouped, entry) => {
      grouped[entry.viewName].push({
        id: entry.id,
        title: entry.label,
        type: "text"
      });
      return grouped;
    }, {
      "content.start": [],
      "content.end": []
    }));
    const localizeNavigationEntries = (entries) => {
      const introductionTitle = apiReferenceLocalization.translate("navigation.introduction");
      const webhooksTitle = apiReferenceLocalization.translate("navigation.webhooks");
      const modelsSectionLabel = mergedConfig.value.modelsSectionLabel ?? DEFAULT_MODELS_SECTION_LABEL;
      const localize = (list) => {
        let changed = false;
        const result = list.map((entry) => {
          let localized = entry;
          if (isIntroductionEntry(entry) && entry.title !== introductionTitle) localized = {
            ...entry,
            title: introductionTitle
          };
          else if (entry.type === "tag" && entry.isWebhooks === true && (entry.title !== webhooksTitle || entry.name !== webhooksTitle)) localized = {
            ...entry,
            title: webhooksTitle,
            name: webhooksTitle
          };
          else if (entry.type === "models" && (entry.title !== modelsSectionLabel || entry.name !== modelsSectionLabel)) localized = {
            ...entry,
            title: modelsSectionLabel,
            name: modelsSectionLabel
          };
          if ("children" in entry && entry.children) {
            const localizedChildren = localize(entry.children);
            if (localizedChildren !== entry.children) {
              localized = localized === entry ? { ...entry } : localized;
              localized.children = localizedChildren;
            }
          }
          if (localized !== entry) changed = true;
          return localized;
        });
        return changed ? result : list;
      };
      return localize(entries);
    };
    const sidebarState = createSidebarState(computed(() => {
      return Object.entries(workspaceStore.workspace.documents).map(([slug, document2]) => {
        var _a2;
        const children = ((_a2 = document2["x-scalar-navigation"]) == null ? void 0 : _a2.children) ?? [];
        const childrenWithPlugins = slug === activeSlug.value ? [
          ...pluginSidebarEntries.value["content.start"],
          ...localizeNavigationEntries(children),
          ...pluginSidebarEntries.value["content.end"]
        ] : localizeNavigationEntries(children);
        return {
          id: slug,
          type: "document",
          description: document2.info.description,
          name: document2.info.title ?? slug,
          title: document2.info.title ?? slug,
          children: childrenWithPlugins
        };
      });
    }), { hooks: {} });
    const setChildrenOpen = (items) => {
      items.forEach((item) => {
        if (item.type === "tag" || item.type === "models") sidebarState.setExpanded(item.id, true);
        if ("children" in item && item.children) setChildrenOpen(item.children);
      });
    };
    const sidebarItems = computed(() => {
      var _a2, _b2;
      const config = mergedConfig.value;
      if (!config) return [];
      const rawDocItems = ((_a2 = sidebarState.items.value.find((item) => item.id === activeSlug.value)) == null ? void 0 : _a2.children) ?? [];
      const docItems = activeAsyncApiDocument.value ? filterAsyncApiNavigation(rawDocItems, activeAsyncApiDocument.value, {
        protocol: selectedProtocol.value,
        server: selectedServer.value
      }) : rawDocItems;
      if (config.defaultOpenAllTags) setChildrenOpen(docItems);
      if (config.expandAllModelSections) {
        const models = docItems.find((item) => item.type === "models");
        if (models) {
          sidebarState.setExpanded(models.id, true);
          (_b2 = models.children) == null ? void 0 : _b2.forEach((child) => {
            sidebarState.setExpanded(child.id, true);
          });
        }
      }
      return docItems;
    });
    const infoSectionId = computed(() => {
      var _a2;
      return ((_a2 = sidebarItems.value.find(isIntroductionEntry)) == null ? void 0 : _a2.id) ?? `${activeSlug.value}/description/introduction`;
    });
    const showCrawlerNav = ref(true);
    onMounted(() => {
      showCrawlerNav.value = false;
    });
    const breadcrumb = ref("");
    const slotProps = computed(() => ({ breadcrumb: breadcrumb.value }));
    const setBreadcrumb = (id) => {
      const item = sidebarState.getEntryById(id);
      if (!item || item.type === "document") breadcrumb.value = "";
      else breadcrumb.value = item.title;
    };
    const contextChain = computed(() => {
      const selectedId = sidebarState.selectedItem.value;
      if (!selectedId) return [];
      const crumbs = [];
      let node = sidebarState.getEntryById(selectedId);
      while (node) {
        if (node.type === "tag") {
          if (node.isTagGroup !== true || mergedConfig.value.layout === "classic") crumbs.unshift({
            id: node.id,
            title: node.title
          });
        }
        node = node.parent;
      }
      return crumbs;
    });
    const scrollToLazyElement = (id) => {
      setBreadcrumb(id);
      sidebarState.setSelected(id);
      scrollToLazy(id, sidebarState.setExpanded, sidebarState.getEntryById);
    };
    const updatePageTitle = (id) => {
      var _a2, _b2;
      const setPageTitle = (_a2 = mergedConfig.value) == null ? void 0 : _a2.setPageTitle;
      const entry = sidebarState.getEntryById(id);
      if (!setPageTitle || typeof document === "undefined" || !(entry == null ? void 0 : entry.title)) return;
      const activeDocument = workspaceStore.workspace.activeDocument;
      document.title = setPageTitle({
        title: entry.title,
        document: {
          title: ((_b2 = activeDocument == null ? void 0 : activeDocument.info) == null ? void 0 : _b2.title) ?? activeSlug.value,
          slug: activeSlug.value
        }
      });
    };
    mapConfigToWorkspaceStore({
      config: () => mergedConfig.value,
      store: workspaceStore,
      isDarkMode
    });
    mapConfigToWorkspaceStore({
      config: () => mergedConfig.value,
      store: clientStore,
      isDarkMode
    });
    const environment = computed(() => getActiveEnvironment(workspaceStore, workspaceStore.workspace.activeDocument ?? null).environment);
    if (typeof window !== "undefined") window.dataDumpWorkspace = () => workspaceStore;
    __expose({
      eventBus,
      workspaceStore,
      sidebarItems
    });
    const modelsIndex = computed(() => buildModelsIndex(sidebarItems.value));
    eventBus.on("scroll-to:model-by-name", ({ name }) => {
      const model = modelsIndex.value[name];
      if (model) scrollToLazyElement(model);
    });
    const addDocument = async (input, navigationOptions) => {
      const result = await workspaceStore.addDocument(input, navigationOptions);
      const previousDocument = clientStore.workspace.documents[input.name];
      const selectedServer2 = previousDocument && typeof previousDocument === "object" ? previousDocument["x-scalar-selected-server"] : void 0;
      const nextDocument = safeDeepClone(workspaceStore.exportWorkspace().documents[input.name]) ?? {
        "openapi": "3.1.0",
        "info": {
          title: "",
          version: ""
        },
        "x-scalar-original-document-hash": ""
      };
      if (typeof selectedServer2 === "string") Object.assign(nextDocument, { "x-scalar-selected-server": selectedServer2 });
      clientStore.loadWorkspace({
        auth: {},
        documents: { [input.name]: nextDocument },
        intermediateDocuments: {},
        originalDocuments: {},
        overrides: {},
        history: {},
        meta: {}
      });
      return result;
    };
    const documentLoadPromises = /* @__PURE__ */ new Map();
    const ensureDocumentLoaded = (slug) => {
      if (workspaceStore.workspace.documents[slug]) return Promise.resolve();
      const pending = documentLoadPromises.get(slug);
      if (pending) return pending;
      const normalized = configList.value[slug];
      if (!normalized) return Promise.resolve();
      const config = withLocalizedConfigurationDefaults({
        ...normalized.config,
        ...configurationOverrides.value
      }, normalized.config);
      const promise = (async () => {
        const result = await addDocument(normalized.source.url ? {
          name: slug,
          url: normalized.source.url,
          fetch: config.customFetch
        } : {
          name: slug,
          document: normalized.source.content ?? {}
        }, config);
        const document2 = clientStore.workspace.documents[slug];
        if (result === true && isOpenApiDocument(document2) && document2["x-scalar-selected-server"] === void 0) {
          const servers = getServers(normalized.config.servers ?? document2.servers, {
            baseServerUrl: config.baseServerURL,
            documentUrl: normalized.source.url
          });
          if (servers.length > 0) clientStore.updateDocument(slug, "x-scalar-selected-server", servers[0].url);
        }
      })().finally(() => {
        documentLoadPromises.delete(slug);
      });
      documentLoadPromises.set(slug, promise);
      return promise;
    };
    let isPreloadStopped = false;
    let cancelScheduledPreload;
    const stopPreloadingDocuments = () => {
      isPreloadStopped = true;
      cancelScheduledPreload == null ? void 0 : cancelScheduledPreload();
      cancelScheduledPreload = void 0;
    };
    const preloadDocumentsWhenIdle = () => {
      if (typeof window === "undefined") return;
      const pendingSlugs = Object.keys(configList.value).filter((slug) => !workspaceStore.workspace.documents[slug]);
      const scheduleIdle = (callback) => {
        if (typeof window.requestIdleCallback === "function") {
          const handle = window.requestIdleCallback(callback, { timeout: 1500 });
          cancelScheduledPreload = () => window.cancelIdleCallback(handle);
        } else {
          const handle = window.setTimeout(callback, 200);
          cancelScheduledPreload = () => window.clearTimeout(handle);
        }
      };
      const loadNext = () => {
        if (isPreloadStopped) return;
        const slug = pendingSlugs.shift();
        if (!slug) return;
        ensureDocumentLoaded(slug).finally(() => {
          if (!isPreloadStopped) scheduleIdle(loadNext);
        });
      };
      scheduleIdle(loadNext);
    };
    const changeSelectedDocument = async (slug, elementId) => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      const normalized = configList.value[slug];
      if (!normalized) {
        console.warn(`Document ${slug} not found in configList`);
        return;
      }
      const config = withLocalizedConfigurationDefaults({
        ...normalized.config,
        ...configurationOverrides.value
      }, normalized.config);
      const onDocumentSelectPromise = (_a2 = config.onDocumentSelect) == null ? void 0 : _a2.call(config);
      syncSlugAndUrlWithDocument(slug, elementId, config);
      (_b2 = apiClient.value) == null ? void 0 : _b2.route({
        documentSlug: slug,
        method: "get",
        path: "/"
      });
      await ensureDocumentLoaded(slug);
      workspaceStore.update("x-scalar-active-document", slug);
      clientStore.update("x-scalar-active-document", slug);
      if (elementId && typeof window !== "undefined") {
        const canonical = redirectUrl(window.location.href, slugify(config.modelsSectionLabel ?? DEFAULT_MODELS_SECTION_LABEL), slug, isMultiDocument.value, (_c2 = config.pathRouting) == null ? void 0 : _c2.basePath, collectWebhooks(((_e2 = (_d2 = workspaceStore.workspace.activeDocument) == null ? void 0 : _d2["x-scalar-navigation"]) == null ? void 0 : _e2.children) ?? []));
        if (canonical) {
          window.history.replaceState({}, "", canonical.toString());
          elementId = getIdFromUrl(canonical.href, (_f2 = config.pathRouting) == null ? void 0 : _f2.basePath, isMultiDocument.value ? void 0 : slug) || elementId;
        }
      }
      if (config.persistAuth) loadAuthFromStorage(clientStore, slug);
      (async () => {
        var _a3;
        await onDocumentSelectPromise;
        (_a3 = config.onLoaded) == null ? void 0 : _a3.call(config, slug);
      })();
      if (elementId && elementId !== slug) scrollToLazyElement(elementId);
      else if (config.defaultOpenFirstTag) {
        const firstTag = sidebarItems.value.find((item) => item.type === "tag");
        if (firstTag) sidebarState.setExpanded(firstTag.id, true);
      }
      updatePageTitle(elementId && elementId !== slug ? elementId : slug);
    };
    watch(() => Object.values(configList.value), async (newConfigList, oldConfigList) => {
      const updateSource = async (updated, previous) => {
        const config = withLocalizedConfigurationDefaults({
          ...updated.config,
          ...configurationOverrides.value
        }, updated.config);
        const pendingLoad = documentLoadPromises.get(updated.slug);
        if (pendingLoad) await pendingLoad;
        if (!workspaceStore.workspace.documents[updated.slug]) return;
        if (updated.source.url && updated.source.url !== (previous == null ? void 0 : previous.source.url)) {
          await addDocument({
            name: updated.slug,
            url: updated.source.url,
            fetch: config.customFetch
          }, config);
          return;
        }
        if (!updated.source.content) return;
        if (diff(updated.source.content, previous && "content" in previous.source ? previous.source.content ?? {} : {}).length) await addDocument({
          name: updated.slug,
          document: updated.source.content
        }, config);
      };
      newConfigList.forEach((newConfig, index) => updateSource(newConfig, oldConfigList[index]));
      const newSlugs = newConfigList.map((c) => c.slug);
      const oldSlugs = oldConfigList.map((c) => c.slug);
      if (newSlugs.length !== oldSlugs.length || !newSlugs.every((slug, index) => slug === oldSlugs[index])) await changeSelectedDocument(newSlugs[0] ?? "");
    }, { deep: true });
    onServerPrefetch(() => changeSelectedDocument(activeSlug.value));
    onBeforeMount(async () => {
      var _a2, _b2;
      loadClientFromStorage(clientStore);
      await changeSelectedDocument(activeSlug.value, getIdFromUrl(window.location.href, (_b2 = (_a2 = configList.value[activeSlug.value]) == null ? void 0 : _a2.config.pathRouting) == null ? void 0 : _b2.basePath, isMultiDocument.value ? void 0 : activeSlug.value));
      preloadDocumentsWhenIdle();
    });
    const documentUrl = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = configList.value[activeSlug.value]) == null ? void 0 : _a2.source) == null ? void 0 : _b2.url;
    });
    const agent = useAgent({ agentEnabled: computed(() => {
      var _a2, _b2, _c2, _d2;
      if ((_b2 = (_a2 = configList.value[activeSlug.value]) == null ? void 0 : _a2.agent) == null ? void 0 : _b2.disabled) return false;
      if (typeof window !== "undefined" && isLocalUrl(window.location.href)) return true;
      return Boolean((_d2 = (_c2 = configList.value[activeSlug.value]) == null ? void 0 : _c2.agent) == null ? void 0 : _d2.key);
    }) });
    provide(AGENT_CONTEXT_SYMBOL, agent);
    const modal = useTemplateRef("modal");
    const apiClient = ref(null);
    onMounted(async () => {
      if (!modal.value) return;
      const { createApiClientModal } = await import("./modal-2RR6FWB5.js");
      if (!modal.value) return;
      apiClient.value = createApiClientModal({
        el: modal.value,
        eventBus,
        workspaceStore: clientStore,
        options: mergedConfig,
        plugins: [...pluginManager.getApiClientPlugins(), ...mapConfigPlugins(mergedConfig, environment)]
      });
    });
    onBeforeUnmount(() => {
      var _a2;
      stopPreloadingDocuments();
      pluginManager.notifyDestroy();
      (_a2 = apiClient.value) == null ? void 0 : _a2.app.unmount();
    });
    eventBus.on("server:update:selected", ({ url }) => {
      var _a2, _b2;
      return (_b2 = (_a2 = mergedConfig.value).onServerChange) == null ? void 0 : _b2.call(_a2, url);
    });
    eventBus.on("asyncapi-server:update:selected", ({ name }) => {
      var _a2, _b2;
      const document2 = clientStore.workspace.activeDocument;
      if (!isAsyncApiDocument(document2)) return;
      const server = getAsyncApiServers(document2, { webSocketOnly: false }).find((s2) => s2.name === name);
      (_b2 = (_a2 = mergedConfig.value).onServerChange) == null ? void 0 : _b2.call(_a2, (server == null ? void 0 : server.url) ?? name);
    });
    eventBus.on("ui:download:document", ({ format }) => {
      const document2 = workspaceStore.exportActiveDocument(format);
      if (!document2) {
        console.error("No document found to download");
        return;
      }
      downloadDocument(document2, activeSlug.value ?? "openapi", format);
    });
    const handleSelectSidebarEntry = (id, caller) => {
      var _a2, _b2;
      const item = sidebarState.getEntryById(id);
      updatePageTitle(id);
      if (((item == null ? void 0 : item.type) === "tag" || (item == null ? void 0 : item.type) === "models" || (item == null ? void 0 : item.type) === "text") && sidebarState.isExpanded(id) && sidebarState.selectedItem.value === id) {
        const unblock = blockIntersection();
        sidebarState.setExpanded(id, false);
        unblock();
        return;
      }
      if ((item == null ? void 0 : item.type) !== "tag" && (item == null ? void 0 : item.type) !== "models") isSidebarOpen.value = false;
      scrollToLazyElement(id);
      const url = makeUrlFromId(id, basePath.value, isMultiDocument.value);
      if (url) {
        window.history.pushState({}, "", url);
        if (caller === "sidebar") (_b2 = (_a2 = mergedConfig.value).onSidebarClick) == null ? void 0 : _b2.call(_a2, url.toString());
      }
      if (agent.showAgent.value) agent.closeAgent();
    };
    eventBus.on("select:nav-item", ({ id }) => handleSelectSidebarEntry(id));
    eventBus.on("scroll-to:nav-item", ({ id }) => handleSelectSidebarEntry(id));
    eventBus.on("intersecting:nav-item", ({ id }) => {
      if (!intersectionEnabled.value) return;
      sidebarState.setSelected(id);
      setBreadcrumb(id);
      updatePageTitle(id);
      scrollSidebarToTop(id);
      const url = makeUrlFromId(id, basePath.value, isMultiDocument.value);
      if (url && workspaceStore.workspace.activeDocument) window.history.replaceState({}, "", url.toString());
    });
    eventBus.on("toggle:nav-item", ({ id, open }) => {
      var _a2, _b2;
      if (open) {
        (_b2 = (_a2 = mergedConfig.value).onShowMore) == null ? void 0 : _b2.call(_a2, id);
        const entry = sidebarState.getEntryById(id);
        if (entry && "children" in entry && entry.children) {
          const first = entry.children[0];
          if (first) addToPriorityQueue(first.id);
        }
      }
      sidebarState.setExpanded(id, open ?? !sidebarState.isExpanded(id));
    });
    eventBus.on("copy-url:nav-item", ({ id }) => {
      var _a2;
      const url = (_a2 = makeUrlFromId(id, basePath.value, isMultiDocument.value)) == null ? void 0 : _a2.toString();
      return url && copyToClipboard(url);
    });
    onBeforeMount(() => {
      window.history.scrollRestoration = "manual";
      addScalarClassesToHeadless();
      window.addEventListener("popstate", () => {
        var _a2;
        const id = getIdFromUrl(window.location.href, (_a2 = mergedConfig.value.pathRouting) == null ? void 0 : _a2.basePath, isMultiDocument.value ? void 0 : activeSlug.value);
        if (id) scrollToLazyElement(id);
      });
    });
    const documentStartRef = useTemplateRef("documentStartRef");
    useIntersection(documentStartRef, () => {
      eventBus.emit("intersecting:nav-item", { id: infoSectionId.value });
    }, {
      onExit: () => {
        const centerY = window.innerHeight / 2;
        const section = document.elementsFromPoint(window.innerWidth / 2, centerY).find((el) => el.tagName === "SECTION" && el.id);
        if (section == null ? void 0 : section.id) eventBus.emit("intersecting:nav-item", { id: section.id });
      },
      immediate: true
    });
    const colorMode = computed(() => {
      const mode = workspaceStore.workspace["x-scalar-color-mode"];
      if (mode === "system") return getSystemModePreference();
      return mode;
    });
    const bodyScrollLocked = useScrollLock(typeof document !== "undefined" ? document.body : null);
    watch(agent.showAgent, () => bodyScrollLocked.value = agent.showAgent.value);
    const showMCPButton = computed(() => {
      var _a2;
      if ((_a2 = mergedConfig.value.mcp) == null ? void 0 : _a2.disabled) return false;
      if (typeof window !== "undefined" && isLocalUrl(window.location.href)) return true;
      if (mergedConfig.value.mcp) return true;
      return false;
    });
    return (_ctx, _cache) => {
      var _a2, _b2, _c2;
      return openBlock(), createElementBlock("div", null, [
        (openBlock(), createBlock(resolveDynamicComponent("style"), { innerHTML: styleContent.value }, null, 8, ["innerHTML"])),
        createBaseVNode("div", {
          ref: "documentEl",
          class: normalizeClass(["scalar-app scalar-api-reference references-layout", [{
            "scalar-api-references-standalone-mobile": mergedConfig.value.showSidebar,
            "scalar-scrollbars-obtrusive": obtrusiveScrollbars.value,
            "references-editable": mergedConfig.value.isEditable,
            "references-sidebar": mergedConfig.value.showSidebar,
            "references-sidebar-mobile-open": isSidebarOpen.value,
            "references-classic": mergedConfig.value.layout === "classic"
          }, _ctx.$attrs.class]]),
          dir: unref(apiReferenceLocalization).direction.value,
          lang: documentLang.value
        }, [
          unref(agent).agentEnabled.value ? (openBlock(), createBlock(unref(AgentScalarDrawer_default), {
            key: 0,
            agentScalarConfiguration: (_a2 = configList.value[activeSlug.value]) == null ? void 0 : _a2.agent,
            externalUrls: mergedConfig.value.externalUrls,
            workspaceStore: unref(workspaceStore)
          }, null, 8, [
            "agentScalarConfiguration",
            "externalUrls",
            "workspaceStore"
          ])) : createCommentVNode("", true),
          mergedConfig.value.layout === "modern" ? (openBlock(), createBlock(MobileHeader_default, {
            key: 1,
            breadcrumb: breadcrumb.value,
            isSidebarOpen: isSidebarOpen.value,
            showSidebar: mergedConfig.value.showSidebar,
            onToggleSidebar: _cache[5] || (_cache[5] = () => isSidebarOpen.value = !isSidebarOpen.value)
          }, {
            search: withCtx(() => [!mergedConfig.value.hideSearch ? (openBlock(), createBlock(SearchButton_default, {
              key: 0,
              class: "my-2",
              document: activeSearchableDocument.value,
              eventBus: unref(eventBus),
              hideModels: mergedConfig.value.hideModels,
              modelsSectionLabel: mergedConfig.value.modelsSectionLabel,
              searchHotKey: mergedConfig.value.searchHotKey,
              showSidebar: mergedConfig.value.showSidebar
            }, null, 8, [
              "document",
              "eventBus",
              "hideModels",
              "modelsSectionLabel",
              "searchHotKey",
              "showSidebar"
            ])) : createCommentVNode("", true)]),
            sidebar: withCtx(({ sidebarClasses }) => {
              var _a3, _b3;
              return [mergedConfig.value.showSidebar && mergedConfig.value.layout === "modern" ? (openBlock(), createBlock(unref(ScalarSidebar_default), {
                key: 0,
                "aria-label": unref(apiReferenceLocalization).translate("navigation.sidebarFor", { name: ((_b3 = (_a3 = unref(workspaceStore).workspace.activeDocument) == null ? void 0 : _a3.info) == null ? void 0 : _b3.title) ?? "" }),
                class: normalizeClass(["t-doc__sidebar", sidebarClasses]),
                getHref: getSidebarItemHref,
                isExpanded: unref(sidebarState).isExpanded,
                isSelected: unref(sidebarState).isSelected,
                items: sidebarItems.value,
                layout: "reference",
                options: sidebarOptions.value,
                onSelectItem: _cache[3] || (_cache[3] = (id) => handleSelectSidebarEntry(id, "sidebar")),
                onToggleGroup: _cache[4] || (_cache[4] = (id) => unref(sidebarState).setExpanded(id, !unref(sidebarState).isExpanded(id)))
              }, {
                header: withCtx(() => [
                  documentOptionList.value.length > 1 ? (openBlock(), createBlock(DocumentSelector_default, {
                    key: 0,
                    modelValue: activeSlug.value,
                    options: documentOptionList.value,
                    "onUpdate:modelValue": changeSelectedDocument
                  }, null, 8, ["modelValue", "options"])) : createCommentVNode("", true),
                  !mergedConfig.value.hideSearch ? (openBlock(), createElementBlock("div", _hoisted_267, [createVNode(SearchButton_default, {
                    document: activeSearchableDocument.value,
                    eventBus: unref(eventBus),
                    hideModels: mergedConfig.value.hideModels,
                    modelsSectionLabel: mergedConfig.value.modelsSectionLabel,
                    searchHotKey: mergedConfig.value.searchHotKey
                  }, null, 8, [
                    "document",
                    "eventBus",
                    "hideModels",
                    "modelsSectionLabel",
                    "searchHotKey"
                  ]), unref(agent).agentEnabled.value ? (openBlock(), createBlock(unref(AgentScalarButton_default), { key: 0 })) : createCommentVNode("", true)])) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "sidebar-start", normalizeProps(guardReactiveProps(slotProps.value)), void 0, true)
                ]),
                before: withCtx(() => [createVNode(unref(AsyncApiSidebarFilters_default), {
                  protocol: selectedProtocol.value,
                  "onUpdate:protocol": _cache[0] || (_cache[0] = ($event) => selectedProtocol.value = $event),
                  server: selectedServer.value,
                  "onUpdate:server": _cache[1] || (_cache[1] = ($event) => selectedServer.value = $event),
                  document: activeAsyncApiDocument.value
                }, null, 8, [
                  "protocol",
                  "server",
                  "document"
                ]), activeAsyncApiDocument.value ? (openBlock(), createBlock(unref(ScalarSidebarSection_default), {
                  key: 0,
                  class: "asyncapi-sidebar-document-section"
                }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Document ", -1)])]),
                  _: 1
                })) : createCommentVNode("", true)]),
                footer: withCtx(() => [renderSlot(_ctx.$slots, "sidebar-end", normalizeProps(guardReactiveProps(slotProps.value)), () => [createVNode(unref(ScalarSidebarFooter_default), { class: "darklight-reference" }, {
                  description: withCtx(() => [createBaseVNode("a", _hoisted_347, toDisplayString(unref(apiReferenceLocalization).translate("footer.poweredByScalar")), 1)]),
                  toggle: withCtx(() => [!mergedConfig.value.hideDarkModeToggle && !mergedConfig.value.forceDarkModeState ? (openBlock(), createBlock(unref(ScalarColorModeToggleButton_default), {
                    key: 0,
                    modelValue: colorMode.value === "dark",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = () => unref(toggleColorMode)())
                  }, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_426))]),
                  default: withCtx(() => [!mergedConfig.value.hideClientButton && !showMCPButton.value ? (openBlock(), createBlock(unref(OpenApiClientButton_default), {
                    key: 0,
                    buttonSource: "sidebar",
                    integration: mergedConfig.value._integration,
                    isDevelopment: unref(isDevelopment),
                    url: documentUrl.value
                  }, null, 8, [
                    "integration",
                    "isDevelopment",
                    "url"
                  ])) : createCommentVNode("", true), showMCPButton.value ? (openBlock(), createBlock(unref(OpenMCPButton_default), {
                    key: 1,
                    config: mergedConfig.value.mcp,
                    externalUrls: mergedConfig.value.externalUrls,
                    isDevelopment: unref(isDevelopment),
                    url: documentUrl.value,
                    workspace: unref(workspaceStore)
                  }, null, 8, [
                    "config",
                    "externalUrls",
                    "isDevelopment",
                    "url",
                    "workspace"
                  ])) : createCommentVNode("", true)]),
                  _: 1
                })], true)]),
                _: 3
              }, 8, [
                "aria-label",
                "class",
                "isExpanded",
                "isSelected",
                "items",
                "options"
              ])) : createCommentVNode("", true)];
            }),
            _: 3
          }, 8, [
            "breadcrumb",
            "isSidebarOpen",
            "showSidebar"
          ])) : createCommentVNode("", true),
          showCrawlerNav.value ? (openBlock(), createBlock(CrawlerNav_default, {
            key: 2,
            basePath: basePath.value,
            isMultiDocument: isMultiDocument.value,
            items: sidebarItems.value,
            options: sidebarOptions.value
          }, null, 8, [
            "basePath",
            "isMultiDocument",
            "items",
            "options"
          ])) : createCommentVNode("", true),
          createBaseVNode("main", {
            "aria-label": unref(apiReferenceLocalization).translate("navigation.mainContent", { name: ((_c2 = (_b2 = unref(workspaceStore).workspace.activeDocument) == null ? void 0 : _b2.info) == null ? void 0 : _c2.title) ?? "" }),
            class: "references-rendered",
            inert: unref(agent).showAgent.value
          }, [createVNode(Content_default, {
            authStore: unref(clientStore).auth,
            clientDocument: unref(clientStore).workspace.activeDocument,
            contextChain: contextChain.value,
            document: unref(workspaceStore).workspace.activeDocument,
            documentSlug: activeSlug.value,
            environment: environment.value,
            eventBus: unref(eventBus),
            expandedItems: unref(sidebarState).expandedItems.value,
            headingSlugGenerator: mergedConfig.value.generateHeadingSlug ?? ((heading) => `${activeSlug.value}/description/${heading.slug}`),
            infoSectionId: infoSectionId.value,
            items: sidebarItems.value,
            options: mergedConfig.value,
            xScalarDefaultClient: unref(clientStore).workspace["x-scalar-default-client"],
            xScalarDefaultExample: unref(clientStore).workspace["x-scalar-default-example"]
          }, createSlots({
            start: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "documentStartRef",
                ref: documentStartRef
              }, null, 512),
              unref(workspaceStore).workspace.activeDocument ? (openBlock(), createBlock(unref(DeveloperTools_default), {
                key: 0,
                overrides: configurationOverrides.value,
                "onUpdate:overrides": _cache[6] || (_cache[6] = ($event) => configurationOverrides.value = $event),
                class: "references-developer-tools",
                configuration: mergedConfig.value,
                externalUrls: mergedConfig.value.externalUrls,
                workspace: unref(workspaceStore)
              }, null, 8, [
                "overrides",
                "configuration",
                "externalUrls",
                "workspace"
              ])) : createCommentVNode("", true),
              mergedConfig.value.layout === "classic" ? (openBlock(), createBlock(ClassicHeader_default, { key: 1 }, {
                "dark-mode-toggle": withCtx(() => [!mergedConfig.value.hideDarkModeToggle && !mergedConfig.value.forceDarkModeState ? (openBlock(), createBlock(unref(ScalarColorModeToggleIcon_default), {
                  key: 0,
                  class: "text-c-2 hover:text-c-1",
                  mode: colorMode.value,
                  style: { "transform": "scale(1.4)" },
                  variant: "icon",
                  onClick: _cache[7] || (_cache[7] = () => unref(toggleColorMode)())
                }, null, 8, ["mode"])) : createCommentVNode("", true)]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_69, [documentOptionList.value.length > 1 ? (openBlock(), createBlock(DocumentSelector_default, {
                  key: 0,
                  modelValue: activeSlug.value,
                  options: documentOptionList.value,
                  "onUpdate:modelValue": changeSelectedDocument
                }, null, 8, ["modelValue", "options"])) : createCommentVNode("", true)]), !mergedConfig.value.hideSearch ? (openBlock(), createBlock(SearchButton_default, {
                  key: 0,
                  class: "t-doc__sidebar max-w-64",
                  document: activeSearchableDocument.value,
                  eventBus: unref(eventBus),
                  hideModels: mergedConfig.value.hideModels,
                  modelsSectionLabel: mergedConfig.value.modelsSectionLabel,
                  searchHotKey: mergedConfig.value.searchHotKey
                }, null, 8, [
                  "document",
                  "eventBus",
                  "hideModels",
                  "modelsSectionLabel",
                  "searchHotKey"
                ])) : createCommentVNode("", true)]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "content-start", normalizeProps(guardReactiveProps(slotProps.value)), void 0, true)
            ]),
            end: withCtx(() => [renderSlot(_ctx.$slots, "content-end", normalizeProps(guardReactiveProps(slotProps.value)), void 0, true)]),
            _: 2
          }, [mergedConfig.value.isEditable ? {
            name: "empty-state",
            fn: withCtx(() => [renderSlot(_ctx.$slots, "editor-placeholder", normalizeProps(guardReactiveProps(slotProps.value)), void 0, true)]),
            key: "0"
          } : void 0]), 1032, [
            "authStore",
            "clientDocument",
            "contextChain",
            "document",
            "documentSlug",
            "environment",
            "eventBus",
            "expandedItems",
            "headingSlugGenerator",
            "infoSectionId",
            "items",
            "options",
            "xScalarDefaultClient",
            "xScalarDefaultExample"
          ])], 8, _hoisted_518),
          _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_79, [renderSlot(_ctx.$slots, "footer", normalizeProps(guardReactiveProps(slotProps.value)), void 0, true)])) : createCommentVNode("", true),
          createBaseVNode("div", {
            ref_key: "modal",
            ref: modal
          }, null, 512)
        ], 10, _hoisted_1100),
        createVNode(unref(ScalarToasts_default))
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/ApiReference.vue.js
var ApiReference_default = _plugin_vue_export_helper_default2(ApiReference_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-2e948397"]]);

// node_modules/@scalar/api-reference/dist/components/GettingStarted.vue.script.js
var _hoisted_1101 = { class: "custom-scroll start" };
var _hoisted_268 = { class: "start-copy" };
var _hoisted_348 = { class: "start-p" };
var _hoisted_427 = { class: "start-cta" };
var _hoisted_519 = { class: "start-row" };
var _hoisted_610 = { class: "start-section start-section-integrations" };
var _hoisted_710 = { class: "start-h2" };
var _hoisted_86 = { class: "start-section start-section-colors" };
var _hoisted_95 = { class: "start-h2" };
var _hoisted_103 = ["onClick"];
var _hoisted_1111 = { class: "start-h1" };
var _hoisted_1212 = { class: "start-ul" };
var _hoisted_1310 = { class: "start-h3" };
var _hoisted_1410 = { class: "start-h3" };
var _hoisted_1510 = { class: "start-h3" };
var _hoisted_1610 = { class: "start-h3" };
var _hoisted_1710 = { class: "start-h3" };
var _hoisted_1810 = { class: "start-h3" };
var GettingStarted_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: "GettingStarted",
  props: { theme: {} },
  emits: [
    "changeTheme",
    "loadSwaggerFile",
    "linkSwaggerFile",
    "updateContent"
  ],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { translate } = useLocalization();
    const themeIds2 = [
      "default",
      "alternate",
      "moon",
      "purple",
      "solarized",
      "bluePlanet",
      "saturn",
      "kepler",
      "mars",
      "deepSpace"
    ];
    async function fetchExampleSpecification() {
      const response = await fetch("https://registry.scalar.com/@scalar/apis/galaxy?format=yaml");
      emits("updateContent", await response.text());
    }
    const { level: headingLevel } = useDocumentOutline("document");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1101, [
        createBaseVNode("div", _hoisted_268, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "start-logo" }, [createBaseVNode("svg", {
            height: "36",
            viewBox: "0 0 36 36",
            width: "36",
            xmlns: "http://www.w3.org/2000/svg"
          }, [createBaseVNode("path", {
            d: "M18 0a18 18 0 1 1 0 36 18 18 0 0 1 0-36Zm11.2 6.5c-3.3-3.3-11.1-1-17.4 5.3-6.2 6.3-8.6 14-5.3 17.4 3.3 3.3 11 .9 17.3-5.4 6.3-6.2 8.7-14 5.4-17.3ZM17.6 12a6.3 6.3 0 1 1 0 12.7 6.3 6.3 0 0 1 0-12.7Z",
            fill: "currentColor",
            "fill-rule": "evenodd"
          })])], -1)),
          (openBlock(), createBlock(resolveDynamicComponent(`h${unref(headingLevel)}`), { class: "start-h1" }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("gettingStarted.swaggerEditor")), 1)]),
            _: 1
          })),
          createBaseVNode("p", _hoisted_348, toDisplayString(unref(translate)("gettingStarted.description")), 1),
          createBaseVNode("div", _hoisted_427, [createVNode(unref(ScalarButton_default), {
            class: "w-full",
            onClick: fetchExampleSpecification
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("gettingStarted.showExample")), 1)]),
            _: 1
          }), createVNode(unref(ScalarButton_default), {
            class: "w-full",
            variant: "outlined",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("loadSwaggerFile"))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(translate)("gettingStarted.uploadFile")), 1)]),
            _: 1
          })])
        ]),
        createBaseVNode("div", _hoisted_519, [createBaseVNode("div", _hoisted_610, [createBaseVNode("div", _hoisted_710, toDisplayString(unref(translate)("gettingStarted.integrations")), 1), _cache[2] || (_cache[2] = createStaticVNode('<a class="start-item" href="https://github.com/scalar/scalar/tree/main/integrations/fastify#readme" rel="noopener noreferrer" target="_blank" data-v-0c8b6339><svg fill="currentColor" height="16" viewBox="0 0 19 16" width="19" xmlns="http://www.w3.org/2000/svg" data-v-0c8b6339><path d="m18.2 3.1.8-2V.9l-4.7 1.3C15.2 1 15 0 15 0s-2.5 1.6-4.3 1.5c-2 0-3.6.8-4 1-1.8 1.2-2.5 3.3-3.2 3.8L0 8.9 2.3 8l-2 2.5c.2.3 1.2 1.6 2.1 1.3l.4-.1 1.6.5-.7-1 .2-.2.9.3-.1-.8.9.3-.1-.8.3-.1 1-3.5 3.7-2.6-.3.7A4 4 0 0 1 8 7l-.6.2c-.5.5-.7.7-.8 2.5a2 2 0 0 1 1 0c1.6.4 2.2 2.3 1.7 2.9l-.7.6H8v.6h-.7v.5l-.2.2c-.7 0-1.4-.6-1.4-.6 0 .5.4 1.3.4 1.3s1.7 1.1 2.7.7c1-.4.7-2.3 2.8-3.2l3.3-.9.8-2.2-1.7.5v-2l2.5-.6.9-2.2-3.4.9v-2l4.2-1.1Z" fill="currentColor" fill-rule="nonzero" data-v-0c8b6339></path></svg><span data-v-0c8b6339>Fastify</span></a><a class="start-item" href="https://github.com/scalar/scalar/blob/main/documentation/integrations/html-js.md#html" rel="noopener noreferrer" target="_blank" data-v-0c8b6339><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-0c8b6339><g data-v-0c8b6339><path d="M22.5 1.5h-21A1.5 1.5 0 0 0 0 3v3a1.5 1.5 0 0 0 1.5 1.5h21A1.5 1.5 0 0 0 24 6V3a1.5 1.5 0 0 0-1.5-1.5Zm-19.25 3A1.25 1.25 0 1 1 4.5 5.75 1.25 1.25 0 0 1 3.25 4.5ZM8.5 5.75A1.25 1.25 0 1 1 9.75 4.5 1.25 1.25 0 0 1 8.5 5.75Z" fill="currentColor" data-v-0c8b6339></path><path d="M22.5 9h-21A1.5 1.5 0 0 0 0 10.5v3A1.5 1.5 0 0 0 1.5 15h21a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 22.5 9ZM3.25 12a1.25 1.25 0 1 1 1.25 1.25A1.25 1.25 0 0 1 3.25 12Zm5.25 1.25A1.25 1.25 0 1 1 9.75 12a1.25 1.25 0 0 1-1.25 1.25Z" fill="currentColor" data-v-0c8b6339></path><path d="M22.5 16.5h-21A1.5 1.5 0 0 0 0 18v3a1.5 1.5 0 0 0 1.5 1.5h21A1.5 1.5 0 0 0 24 21v-3a1.5 1.5 0 0 0-1.5-1.5Zm-19.25 3a1.25 1.25 0 1 1 1.25 1.25 1.25 1.25 0 0 1-1.25-1.25Zm5.25 1.25a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25Z" fill="currentColor" data-v-0c8b6339></path></g></svg><span data-v-0c8b6339>CDN</span></a><a class="start-item" href="https://github.com/scalar/scalar/blob/main/packages/api-reference/README.md#vuejs" rel="noopener noreferrer" target="_blank" data-v-0c8b6339><svg height="170" viewBox="0 0 196.3 170" width="196.3" xmlns="http://www.w3.org/2000/svg" data-v-0c8b6339><g fill="currentColor" fill-rule="nonzero" data-v-0c8b6339><polygon points="39.23 0 0 0 2.9450761 5.1010782 98.16 170.02 196.32 0 157.06 0 98.16 102.01 42.175701 5.0991171" data-v-0c8b6339></polygon><polygon points="75.5 2.009956e-14 0 2.009956e-14 2.94 5.1 78.44871 5.1 98.16 39.26 117.87937 5.1 193.38 5.1 196.325 0 120.82 7.8065636e-15 114.97322 2.009956e-14 98.16 29.037153 81.35 2.009956e-14" data-v-0c8b6339></polygon></g></svg><span data-v-0c8b6339>Vue</span></a><a class="start-item" href="https://github.com/scalar/scalar/blob/main/packages/api-reference-react/README.md#usage" rel="noopener noreferrer" target="_blank" data-v-0c8b6339><svg height="23.3" viewBox="0 0 22 23.3" width="22" xmlns="http://www.w3.org/2000/svg" data-v-0c8b6339><g fill="none" fill-rule="evenodd" data-v-0c8b6339><circle cx="11" cy="11.6" fill="currentColor" fill-rule="nonzero" r="2" data-v-0c8b6339></circle><g stroke="currentColor" data-v-0c8b6339><ellipse cx="11" cy="11.6" rx="11" ry="4.2" data-v-0c8b6339></ellipse><ellipse cx="11" cy="11.6" rx="11" ry="4.2" transform="rotate(60 11 11.6)" data-v-0c8b6339></ellipse><ellipse cx="11" cy="11.6" rx="11" ry="4.2" transform="rotate(120 11 11.6)" data-v-0c8b6339></ellipse></g></g></svg><span data-v-0c8b6339>React</span></a>', 4))]), createBaseVNode("div", _hoisted_86, [createBaseVNode("p", _hoisted_95, toDisplayString(unref(translate)("gettingStarted.theming")), 1), (openBlock(), createElementBlock(Fragment, null, renderList(themeIds2, (themeId) => {
          return createBaseVNode("div", {
            key: themeId,
            class: normalizeClass(["start-item", { "start-item-active": themeId === __props.theme }]),
            onClick: ($event) => _ctx.$emit("changeTheme", {
              id: themeId,
              label: unref(themeLabels)[themeId]
            })
          }, toDisplayString(unref(themeLabels)[themeId]), 11, _hoisted_103);
        }), 64))])]),
        createBaseVNode("p", _hoisted_1111, toDisplayString(unref(translate)("gettingStarted.features")), 1),
        createBaseVNode("ul", _hoisted_1212, [
          createBaseVNode("li", null, [createBaseVNode("p", _hoisted_1310, toDisplayString(unref(translate)("gettingStarted.customize")), 1), createTextVNode(" " + toDisplayString(unref(translate)("gettingStarted.customizeDescription")), 1)]),
          createBaseVNode("li", null, [createBaseVNode("p", _hoisted_1410, toDisplayString(unref(translate)("gettingStarted.testing")), 1), createTextVNode(" " + toDisplayString(unref(translate)("gettingStarted.testingDescription")), 1)]),
          createBaseVNode("li", null, [createBaseVNode("p", _hoisted_1510, toDisplayString(unref(translate)("gettingStarted.search")), 1), createTextVNode(" " + toDisplayString(unref(translate)("gettingStarted.searchDescription")), 1)]),
          createBaseVNode("li", null, [createBaseVNode("p", _hoisted_1610, toDisplayString(unref(translate)("gettingStarted.hosting")), 1), createTextVNode(" " + toDisplayString(unref(translate)("gettingStarted.hostingDescription")), 1)]),
          createBaseVNode("li", null, [createBaseVNode("p", _hoisted_1710, toDisplayString(unref(translate)("gettingStarted.openApiSwagger")), 1), createTextVNode(" " + toDisplayString(unref(translate)("gettingStarted.openApiSwaggerDescription")), 1)]),
          createBaseVNode("li", null, [createBaseVNode("p", _hoisted_1810, toDisplayString(unref(translate)("gettingStarted.codeSamples")), 1), createTextVNode(" " + toDisplayString(unref(translate)("gettingStarted.codeSamplesDescription")), 1)])
        ])
      ]);
    };
  }
});

// node_modules/@scalar/api-reference/dist/components/GettingStarted.vue.js
var GettingStarted_default = _plugin_vue_export_helper_default2(GettingStarted_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-0c8b6339"]]);

// node_modules/@scalar/api-reference/dist/standalone/lib/load-plugins-from-urls.js
var importModule = (url) => import(
  /* @vite-ignore */
  url
);
var loadPluginFromUrl = async (url) => {
  var _a;
  try {
    const plugin = (_a = await importModule(url)) == null ? void 0 : _a.default;
    if (typeof plugin !== "function") {
      console.error(`[@scalar/api-reference] The module at ${url} does not export an API Reference plugin as its default export.`);
      return;
    }
    return plugin;
  } catch (error) {
    console.error(`[@scalar/api-reference] Failed to load the plugin module at ${url}:`, error);
    return;
  }
};
var getConfigurations = (configuration) => Array.isArray(configuration) ? configuration : [configuration];
var hasPluginUrls = (configuration) => getConfigurations(configuration).some((config) => {
  var _a;
  return Boolean((_a = config.pluginUrls) == null ? void 0 : _a.length);
});
var loadPluginsFromUrls = async (configuration) => {
  const pendingImports = /* @__PURE__ */ new Map();
  const importOnce = (url) => {
    const pending = pendingImports.get(url) ?? loadPluginFromUrl(url);
    pendingImports.set(url, pending);
    return pending;
  };
  await Promise.all(getConfigurations(configuration).map(async (config) => {
    var _a;
    if (!((_a = config.pluginUrls) == null ? void 0 : _a.length)) return;
    const plugins = (await Promise.all(config.pluginUrls.map(importOnce))).filter((plugin) => plugin !== void 0);
    if (plugins.length) config.plugins = [...config.plugins ?? [], ...plugins];
  }));
};

// node_modules/unhead/dist/client.mjs
async function renderDOMHead(head, options = {}) {
  const dom = options.document || head.resolvedOptions.document;
  if (!dom || !head.dirty)
    return;
  const beforeRenderCtx = { shouldRender: true, tags: [] };
  await head.hooks.callHook("dom:beforeRender", beforeRenderCtx);
  if (!beforeRenderCtx.shouldRender)
    return;
  if (head._domUpdatePromise) {
    return head._domUpdatePromise;
  }
  head._domUpdatePromise = new Promise(async (resolve2) => {
    var _a;
    const dupeKeyCounter = /* @__PURE__ */ new Map();
    const resolveTagPromise = new Promise((resolve22) => {
      head.resolveTags().then((tags2) => {
        resolve22(
          tags2.map((tag) => {
            const count = dupeKeyCounter.get(tag._d) || 0;
            const res = {
              tag,
              id: (count ? `${tag._d}:${count}` : tag._d) || tag._h,
              shouldRender: true
            };
            if (tag._d && isMetaArrayDupeKey(tag._d)) {
              dupeKeyCounter.set(tag._d, count + 1);
            }
            return res;
          })
        );
      });
    });
    let state = head._dom;
    if (!state) {
      state = {
        title: dom.title,
        elMap: (/* @__PURE__ */ new Map()).set("htmlAttrs", dom.documentElement).set("bodyAttrs", dom.body)
      };
      for (const key of ["body", "head"]) {
        const children = (_a = dom[key]) == null ? void 0 : _a.children;
        for (const c of children) {
          const tag = c.tagName.toLowerCase();
          if (!HasElementTags.has(tag)) {
            continue;
          }
          const next = normalizeProps2({ tag, props: {} }, {
            innerHTML: c.innerHTML,
            ...c.getAttributeNames().reduce((props, name) => {
              props[name] = c.getAttribute(name);
              return props;
            }, {}) || {}
          });
          next.key = c.getAttribute("data-hid") || void 0;
          next._d = dedupeKey(next) || hashTag(next);
          if (state.elMap.has(next._d)) {
            let count = 1;
            let k = next._d;
            while (state.elMap.has(k)) {
              k = `${next._d}:${count++}`;
            }
            state.elMap.set(k, c);
          } else {
            state.elMap.set(next._d, c);
          }
        }
      }
    }
    state.pendingSideEffects = { ...state.sideEffects };
    state.sideEffects = {};
    function track(id, scope, fn) {
      const k = `${id}:${scope}`;
      state.sideEffects[k] = fn;
      delete state.pendingSideEffects[k];
    }
    function trackCtx({ id, $el, tag }) {
      const isAttrTag = tag.tag.endsWith("Attrs");
      state.elMap.set(id, $el);
      if (!isAttrTag) {
        if (tag.textContent && tag.textContent !== $el.textContent) {
          $el.textContent = tag.textContent;
        }
        if (tag.innerHTML && tag.innerHTML !== $el.innerHTML) {
          $el.innerHTML = tag.innerHTML;
        }
        track(id, "el", () => {
          $el == null ? void 0 : $el.remove();
          state.elMap.delete(id);
        });
      }
      for (const k in tag.props) {
        if (!Object.prototype.hasOwnProperty.call(tag.props, k))
          continue;
        const value = tag.props[k];
        if (k.startsWith("on") && typeof value === "function") {
          const dataset = $el == null ? void 0 : $el.dataset;
          if (dataset && dataset[`${k}fired`]) {
            const ek = k.slice(0, -5);
            value.call($el, new Event(ek.substring(2)));
          }
          if ($el.getAttribute(`data-${k}`) !== "") {
            (tag.tag === "bodyAttrs" ? dom.defaultView : $el).addEventListener(
              // onload -> load
              k.substring(2),
              value.bind($el)
            );
            $el.setAttribute(`data-${k}`, "");
          }
          continue;
        }
        const ck = `attr:${k}`;
        if (k === "class") {
          if (!value) {
            continue;
          }
          for (const c of value) {
            isAttrTag && track(id, `${ck}:${c}`, () => $el.classList.remove(c));
            !$el.classList.contains(c) && $el.classList.add(c);
          }
        } else if (k === "style") {
          if (!value) {
            continue;
          }
          for (const [k2, v] of value) {
            track(id, `${ck}:${k2}`, () => {
              $el.style.removeProperty(k2);
            });
            $el.style.setProperty(k2, v);
          }
        } else if (value !== false && value !== null) {
          $el.getAttribute(k) !== value && $el.setAttribute(k, value === true ? "" : String(value));
          isAttrTag && track(id, ck, () => $el.removeAttribute(k));
        }
      }
    }
    const pending = [];
    const frag = {
      bodyClose: void 0,
      bodyOpen: void 0,
      head: void 0
    };
    const tags = await resolveTagPromise;
    for (const ctx of tags) {
      const { tag, shouldRender, id } = ctx;
      if (!shouldRender)
        continue;
      if (tag.tag === "title") {
        dom.title = tag.textContent;
        track("title", "", () => dom.title = state.title);
        continue;
      }
      ctx.$el = ctx.$el || state.elMap.get(id);
      if (ctx.$el) {
        trackCtx(ctx);
      } else if (HasElementTags.has(tag.tag)) {
        pending.push(ctx);
      }
    }
    for (const ctx of pending) {
      const pos = ctx.tag.tagPosition || "head";
      ctx.$el = dom.createElement(ctx.tag.tag);
      trackCtx(ctx);
      frag[pos] = frag[pos] || dom.createDocumentFragment();
      frag[pos].appendChild(ctx.$el);
    }
    for (const ctx of tags)
      await head.hooks.callHook("dom:renderTag", ctx, dom, track);
    frag.head && dom.head.appendChild(frag.head);
    frag.bodyOpen && dom.body.insertBefore(frag.bodyOpen, dom.body.firstChild);
    frag.bodyClose && dom.body.appendChild(frag.bodyClose);
    for (const k in state.pendingSideEffects) {
      state.pendingSideEffects[k]();
    }
    head._dom = state;
    await head.hooks.callHook("dom:rendered", { renders: tags });
    resolve2();
  }).finally(() => {
    head._domUpdatePromise = void 0;
    head.dirty = false;
  });
  return head._domUpdatePromise;
}
function createHead(options = {}) {
  var _a, _b, _c;
  const render = ((_a = options.domOptions) == null ? void 0 : _a.render) || renderDOMHead;
  options.document = options.document || (typeof window !== "undefined" ? document : void 0);
  const initialPayload = ((_c = (_b = options.document) == null ? void 0 : _b.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c.innerHTML) || false;
  const head = createUnhead({
    ...options,
    plugins: [
      ...options.plugins || [],
      {
        key: "client",
        hooks: {
          "entries:updated": render
        }
      }
    ],
    init: [
      initialPayload ? JSON.parse(initialPayload) : false,
      ...options.init || []
    ]
  });
  head.ssr = false;
  return head;
}
function createDebouncedFn(callee, delayer) {
  let ctxId = 0;
  return () => {
    const delayFnCtxId = ++ctxId;
    delayer(() => {
      if (ctxId === delayFnCtxId) {
        callee();
      }
    });
  };
}

// node_modules/@unhead/vue/dist/client.mjs
function createHead2(options = {}) {
  const head = createHead({
    domOptions: {
      render: createDebouncedFn(() => renderDOMHead(head), (fn) => setTimeout(fn, 0))
    },
    ...options
  });
  head.install = vueInstall(head);
  return head;
}

// node_modules/@scalar/api-reference/dist/standalone/lib/html-api.js
var STANDALONE_STYLE_ID = "scalar-style";
var standaloneStyleState = /* @__PURE__ */ new WeakMap();
var getStandaloneStyleState = (doc) => {
  const existing = standaloneStyleState.get(doc);
  if (existing) return existing;
  const state = {
    count: 0,
    detachedStyle: null
  };
  standaloneStyleState.set(doc, state);
  return state;
};
var retainStandaloneStyles = (doc) => {
  const state = getStandaloneStyleState(doc);
  state.count += 1;
  if (state.detachedStyle && !doc.getElementById(STANDALONE_STYLE_ID)) {
    doc.head.appendChild(state.detachedStyle);
    state.detachedStyle = null;
  }
};
var releaseStandaloneStyles = (doc) => {
  const state = getStandaloneStyleState(doc);
  state.count = Math.max(0, state.count - 1);
  if (state.count > 0) return;
  const styleElement = doc.getElementById(STANDALONE_STYLE_ID);
  if (styleElement instanceof HTMLStyleElement) {
    state.detachedStyle = styleElement;
    styleElement.remove();
  }
};
var createApiReference = (elementOrSelectorOrConfig, optionalConfiguration) => {
  const idPrefix = "scalar-refs";
  const props = reactive({ configuration: optionalConfiguration ?? elementOrSelectorOrConfig ?? {} });
  const createReferenceApp = (isSsr = false) => {
    const referenceApp = isSsr ? createSSRApp(() => h(ApiReference_default, props)) : createApp(() => h(ApiReference_default, props));
    referenceApp.use(createHead2());
    referenceApp.config.idPrefix = idPrefix;
    return referenceApp;
  };
  const mountElement = optionalConfiguration ? typeof elementOrSelectorOrConfig === "string" ? document.querySelector(elementOrSelectorOrConfig) : elementOrSelectorOrConfig : null;
  let app = createReferenceApp(!!optionalConfiguration && !!mountElement && mountElement.children.length > 0);
  let hasMounted = false;
  if (optionalConfiguration) if (mountElement) {
    const mount = () => {
      app.mount(mountElement);
      hasMounted = true;
      retainStandaloneStyles(document);
    };
    if (hasPluginUrls(props.configuration)) loadPluginsFromUrls(props.configuration).then(() => {
      if (!abortController.signal.aborted) mount();
    });
    else mount();
  } else console.error("Could not find a mount point for API References:", elementOrSelectorOrConfig);
  const abortController = new AbortController();
  const listenerOptions = {
    capture: false,
    signal: abortController.signal
  };
  document.addEventListener("scalar:reload-references", () => {
    console.warn("scalar:reload-references event has been deprecated, please use the scalarInstance.app.mount method instead.");
    if (!props.configuration) return;
    const currentElement = typeof elementOrSelectorOrConfig === "string" ? document.querySelector(elementOrSelectorOrConfig) : elementOrSelectorOrConfig;
    if (!currentElement) return;
    if (currentElement && !document.body.contains(currentElement)) document.body.appendChild(currentElement);
    app.unmount();
    app = createReferenceApp();
    app.mount(currentElement);
  }, listenerOptions);
  const destroy = () => {
    abortController.abort();
    props.configuration = {};
    if (hasMounted) {
      hasMounted = false;
      app.unmount();
      releaseStandaloneStyles(document);
    }
  };
  document.addEventListener("scalar:destroy-references", () => {
    console.warn("scalar:destroy-references event has been deprecated, please use scalarInstance.destroy instead.");
    destroy();
  }, listenerOptions);
  document.addEventListener("scalar:update-references-config", (ev) => {
    console.warn("scalar:update-references-config event has been deprecated, please use scalarInstance.updateConfiguration instead.");
    if ("detail" in ev) Object.assign(props, ev.detail);
  }, listenerOptions);
  return {
    app,
    getConfiguration: () => props.configuration ?? {},
    updateConfiguration: (newConfig) => {
      props.configuration = newConfig;
    },
    destroy
  };
};
export {
  ApiReference_default as ApiReference,
  GettingStarted_default as GettingStarted,
  SearchButton_default as SearchButton,
  SearchModal_default as SearchModal,
  createApiReference,
  createEmptySpecification
};
//# sourceMappingURL=@scalar_api-reference.js.map
