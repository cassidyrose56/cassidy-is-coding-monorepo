import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, o as onDestroy, f as spread, h as escape_object, i as createEventDispatcher } from "../../chunks/ssr.js";
import { gsap } from "gsap";
/* empty css               */
const Name = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img class="md:w-1/2 w-2/3 pt-10" src="/svg/Name.png" alt="Name">`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center justify-center md:col-span-7 md:row-span-3 bg-transparent rounded-lg pt-4">${validate_component(Name, "Name").$$render($$result, {}, {}, {})}</div>`;
});
const Desc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="desc-tile" class="md:col-span-6 md:row-span-4 md:row-start-1 md:col-start-1 col-span-3 relative group" data-svelte-h="svelte-78np2w"><div class="absolute inset-0 bg-quaternary-100 dark:bg-primary-900 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> <div id=" desc-tile" class="relative flex justify-center items-center h-full bg-quaternary-100 dark:bg-primary-900 shadow-md rounded-lg p-4"><p class="font-Hatch font-light text-2xl md:leading-loose leading-relaxed text-center">I love making <span class="font-semibold">fun, accessible, and exciting</span> applications that are easily usable for everyone.</p></div></div>`;
});
const Skillz = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="skillz-tile" class="md:col-span-4 md:row-span-6 md:row-start-5 col-span-3 md:col-start-1 relative group" data-svelte-h="svelte-17kklmj"><div class="absolute inset-0 bg-tertiary-100 dark:bg-quaternary-700 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> <div class="relative flex flex-col h-full gap-3 pt-10 bg-tertiary-100 dark:bg-quaternary-700 min-h-fit shadow-md rounded-lg p-6"><h2 class="font-June text-4xl">Skills</h2> <ul class="font-Hatch font-light text-xl flex flex-col gap-5"><li>TypeScript</li> <li>React</li> <li>Web Accessibility</li> <li>Tailwind CSS</li> <li>UX/UI Design</li> <li>REST APIs</li> <li>Node.js</li> <li>Responsive Web Design</li> <li>Jotai</li> <li>Mobile-First Development</li> <li>GSAP</li> <li>Framer Motion</li> <li>Atomic Design System</li> <li>GraphQL</li> <li>Svelte</li></ul></div></div>`;
});
const WorkSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  let { svg } = $$props;
  let { altText } = $$props;
  let { title } = $$props;
  let { date } = $$props;
  let { description } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  if ($$props.svg === void 0 && $$bindings.svg && svg !== void 0) $$bindings.svg(svg);
  if ($$props.altText === void 0 && $$bindings.altText && altText !== void 0) $$bindings.altText(altText);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  return `<div class="flex gap-6"><a${add_attribute("href", link, 0)} target="_blank" tabindex="-1"><div class="h-16 w-16 bg-primary-700 dark:bg-secondary-500 flex items-center justify-center rounded-md shadow-light-icon shadow-primary-500 dark:shadow-secondary-700"><img${add_attribute("src", svg, 0)}${add_attribute("alt", altText, 0)} class="h-8 w-auto"></div></a> <div class="flex flex-col gap-2"><div class="flex flex-col"><a${add_attribute("href", link, 0)} target="_blank"><h4 class="font-Hatch font-semibold text-xl tracking-wide">${escape(title)}</h4></a> <p class="uppercase font-Hatch text-sm">${escape(date)}</p></div> <p class="font-Hatch font-light">${escape(description)}</p></div></div>`;
});
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="work-tile" class="md:col-span-8 md:col-start-5 col-span-3 md:row-span-6 relative group h-full"><div class="absolute inset-0 bg-primary-300 dark:bg-secondary-700 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> <div class="relative h-full flex flex-col md:gap-6 gap-4 md:p-12 p-6 bg-primary-300 dark:bg-secondary-700 shadow-md rounded-lg"><h2 class="font-June md:text-6xl text-4xl" data-svelte-h="svelte-6k8ji1">Work</h2> <div class="flex flex-col md:gap-6 gap-3"><h3 class="font-Hatch md:text-3xl text-2xl font-bold" data-svelte-h="svelte-g0njy1">Professional Experience</h3> ${validate_component(WorkSection, "WorkSection").$$render(
    $$result,
    {
      link: "https://lifecloud.com/",
      svg: "/svg/LifeCloudLogo.svg",
      altText: "LifeCloud Logo",
      title: "LifeCloud",
      date: "March 2023 - Present",
      description: "A platform to organize your important documents and financial assets to make life easier for your loved ones when you pass."
    },
    {},
    {}
  )} ${validate_component(WorkSection, "WorkSection").$$render(
    $$result,
    {
      link: "https://www.intern.house/",
      svg: "/svg/InternHouseLogo.svg",
      altText: "Intern.House Logo",
      title: "Intern.House",
      date: "April 2022 - March 2023",
      description: "A startup specializing in helping tech interns find flexible, shared housing in Austin."
    },
    {},
    {}
  )}</div> <div class="flex flex-col md:gap-6 gap-3"><h3 class="font-Hatch md:text-3xl text-2xl font-bold" data-svelte-h="svelte-1x9wtiu">Volunteering</h3> ${validate_component(WorkSection, "WorkSection").$$render(
    $$result,
    {
      link: "https://foundcom.org/home-for-the-holidays/",
      svg: "/svg/FoundcomLogo.svg",
      altText: "FoundCom Logo",
      title: "Foundation Communities",
      date: "August 2023 - Present",
      description: "A public-facing app to help nonprofit with their Home for the Holidays project, connecting families in need with sponsors in the community for holiday gifts."
    },
    {},
    {}
  )}</div> <div class="flex flex-col md:gap-6 gap-3"><h3 class="font-Hatch md:text-3xl text-2xl font-bold" data-svelte-h="svelte-1nz89fq">Projects</h3> ${validate_component(WorkSection, "WorkSection").$$render(
    $$result,
    {
      link: "https://www.lightql.com/",
      svg: "/svg/LightQLLogo.svg",
      altText: "LightQL Logo",
      title: "LightQL",
      date: "2022",
      description: "An Open Source Project composed of a lightweight client-side caching library for GraphQL, similar to Apollo Client."
    },
    {},
    {}
  )}</div></div></div>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="contact-tile" class="md:col-span-12 md:row-span-4 col-span-3 relative group rounded-lg" data-svelte-h="svelte-4v5o4r"><div class="absolute inset-0 bg-secondary-300 dark:bg-primary-900 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> <div class="relative h-fit p-6 bg-secondary-300 dark:bg-primary-900 rounded-lg shadow-md flex flex-col gap-2"><h2 id="contact-title" class="font-June md:text-5xl text-4xl text-center">Hey there!</h2> <p class="font-Hatch font-light text-xl text-center">I would love to connect! Feel free to <a class="duration-150 underline font-medium hover:font-semibold" href="mailto:cassidyrose56@gmail.com">send me an email</a> at cassidyrose56@gmail.com, or shoot me a message on social media.</p></div></div>`;
});
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (!name.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(
      icon,
      defaultExtendedIconProps
    )) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
let simpleNames = false;
function allowSimpleNames(allow) {
  {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  return addIconToStorage(storage2, icon.name, data);
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (icon && addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
  try {
    return func.getItem(key);
  } catch (err) {
  }
}
function setStoredItem(func, key, value) {
  try {
    func.setItem(key, value);
    return true;
  } catch (err) {
  }
}
function removeStoredItem(func, key) {
  try {
    func.removeItem(key);
  } catch (err) {
  }
}
function setBrowserStorageItemsCount(storage2, value) {
  return setStoredItem(storage2, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage2) {
  return parseInt(getStoredItem(storage2, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: true,
  session: true
};
const browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
  browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
  const attr = key + "Storage";
  try {
    if (_window && _window[attr] && typeof _window[attr].length === "number") {
      return _window[attr];
    }
  } catch (err) {
  }
  browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
  const func = getBrowserStorage(key);
  if (!func) {
    return;
  }
  const version = getStoredItem(func, browserCacheVersionKey);
  if (version !== browserCacheVersion) {
    if (version) {
      const total2 = getBrowserStorageItemsCount(func);
      for (let i = 0; i < total2; i++) {
        removeStoredItem(func, browserCachePrefix + i.toString());
      }
    }
    setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
    setBrowserStorageItemsCount(func, 0);
    return;
  }
  const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
  const parseItem = (index) => {
    const name = browserCachePrefix + index.toString();
    const item = getStoredItem(func, name);
    if (typeof item !== "string") {
      return;
    }
    try {
      const data = JSON.parse(item);
      if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && // Valid item: run callback
      callback(data, index)) {
        return true;
      }
    } catch (err) {
    }
    removeStoredItem(func, name);
  };
  let total = getBrowserStorageItemsCount(func);
  for (let i = total - 1; i >= 0; i--) {
    if (!parseItem(i)) {
      if (i === total - 1) {
        total--;
        setBrowserStorageItemsCount(func, total);
      } else {
        browserStorageEmptyItems[key].add(i);
      }
    }
  }
}
function initBrowserStorage() {
  if (browserStorageStatus) {
    return;
  }
  setBrowserStorageStatus(true);
  for (const key in browserStorageConfig) {
    iterateBrowserStorage(key, (item) => {
      const iconSet = item.data;
      const provider = item.provider;
      const prefix = iconSet.prefix;
      const storage2 = getStorage(
        provider,
        prefix
      );
      if (!addIconSet(storage2, iconSet).length) {
        return false;
      }
      const lastModified = iconSet.lastModified || -1;
      storage2.lastModifiedCached = storage2.lastModifiedCached ? Math.min(storage2.lastModifiedCached, lastModified) : lastModified;
      return true;
    });
  }
}
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  "background-color": "currentColor"
};
const coloredProps = {
  "background-color": "transparent"
};
const propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
const propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
function render(icon, props) {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const mode = props.mode || "svg";
  const componentProps = mode === "svg" ? { ...svgDefaults } : {};
  if (icon.body.indexOf("xlink:") === -1) {
    delete componentProps["xmlns:xlink"];
  }
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (mode === "svg") {
    Object.assign(componentProps, renderAttribs);
    if (style !== "") {
      componentProps.style = style;
    }
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    return {
      svg: true,
      attributes: componentProps,
      body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
    };
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  const url = svgToURL(html);
  const styles = {
    "--svg": url
  };
  const size = (prop) => {
    const value = renderAttribs[prop];
    if (value) {
      styles[prop] = fixSize(value);
    }
  };
  size("width");
  size("height");
  Object.assign(styles, commonProps, useMask ? monotoneProps : coloredProps);
  let customStyle = "";
  for (const key in styles) {
    customStyle += key + ": " + styles[key] + ";";
  }
  componentProps.style = customStyle + style;
  return {
    svg: false,
    attributes: componentProps
  };
}
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  initBrowserStorage();
  const _window2 = window;
  if (_window2.IconifyPreload !== void 0) {
    const preload = _window2.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window2.IconifyProviders !== void 0) {
    const providers = _window2.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
function checkIconState(icon, state, mounted, callback, onload) {
  if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
    state.name = "";
    return { data: { ...defaultIconProps, ...icon } };
  }
  let iconName;
  if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
    return null;
  }
  const data = getIconData(iconName);
  if (!data) {
    return null;
  }
  if (state.name !== icon) {
    state.name = icon;
    if (onload && !state.destroyed) {
      onload(icon);
    }
  }
  const classes = ["iconify"];
  if (iconName.prefix !== "") {
    classes.push("iconify--" + iconName.prefix);
  }
  if (iconName.provider !== "") {
    classes.push("iconify--" + iconName.provider);
  }
  return { data, classes };
}
function generateIcon(icon, props) {
  return icon ? render({
    ...defaultIconProps,
    ...icon
  }, props) : null;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full relative group md:col-span-2 col-start-1 md:row-start-1 md:col-start-7 md:row-span-2"><a href="https://github.com/cassidyrose56" target="_blank" class="block absolute inset-0 z-10" data-svelte-h="svelte-rq335s"><span class="sr-only">Link to Cassidy&#39;s Github</span></a> <div class="relative flex bg-myBlack dark:bg-myWhite justify-around items-center h-full md:shadow-md rounded-lg md:p-4"><div class="absolute inset-0 bg-myBlack dark:bg-myWhite rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "bxl:github",
      class: "text-myWhite dark:text-myBlack text-6xl relative z-20"
    },
    {},
    {}
  )}</div></div>`;
});
const LinkedIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="sm-tile" class="relative w-full group md:col-span-2 col-start-2 lg:row-start-1 md:col-start-9 md:row-span-2"><a href="https://www.linkedin.com/in/cassidy-r-johnson/" target="_blank" class="block absolute inset-0 z-10" data-svelte-h="svelte-15t31sx"><span class="sr-only">Link to Cassidy&#39;s LinkedIn</span></a> <div class="relative flex bg-tertiary-700 dark:bg-myWhite justify-around items-center h-full md:shadow-md rounded-lg md:p-4"><div class="absolute inset-0 bg-tertiary-700 dark:bg-myWhite rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "bxl:linkedin-square",
      class: "text-myWhite dark:text-tertiary-700 text-6xl relative z-20"
    },
    {},
    {}
  )}</div></div>`;
});
const Medium = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="sm-tile" class="relative group w-full md:col-span-2 col-start-3 lg:row-start-1 md:col-start-11 md:row-span-2"><a href="https://medium.com/@cassidyrose56/" target="_blank" class="block absolute inset-0 z-10" data-svelte-h="svelte-hznmmf"><span class="sr-only">Link to Cassidy&#39;s Medium</span></a> <div class="relative flex bg-myBlack dark:bg-myWhite justify-around items-center h-full md:shadow-md rounded-lg md:p-4"><div class="absolute inset-0 bg-myBlack dark:bg-myWhite rounded-lg blur-sm opacity-75 transition duration-1000"></div> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "bxl:medium",
      class: "text-myWhite dark:text-myBlack text-6xl relative z-20"
    },
    {},
    {}
  )}</div></div>`;
});
const css = {
  code: "#theme-toggle.svelte-1rhsz9i+label.svelte-1rhsz9i{display:inline-block;height:3rem;width:3rem;cursor:pointer;border-radius:9999px;transition-duration:300ms;--tw-content:'';content:var(--tw-content)\n}#theme-toggle.svelte-1rhsz9i+label.svelte-1rhsz9i:focus-visible{border-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(255 153 102 / var(--tw-border-opacity))\n}#theme-toggle.svelte-1rhsz9i:not(:checked)+label.svelte-1rhsz9i{--tw-bg-opacity:1;background-color:rgb(255 153 102 / var(--tw-bg-opacity))\n}#theme-toggle.svelte-1rhsz9i:checked+label.svelte-1rhsz9i{background-color:transparent;box-shadow:inset -18px -16px 1px 1px #ddd\n}",
  map: `{"version":3,"file":"ThemeSwitch.svelte","sources":["ThemeSwitch.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { browser } from \\"$app/environment\\";\\nlet darkMode = true;\\nconst handleSwitchDarkMode = () => {\\n  darkMode = !darkMode;\\n  localStorage.setItem(\\"theme\\", darkMode ? \\"dark\\" : \\"light\\");\\n  darkMode ? document.documentElement.classList.add(\\"dark\\") : document.documentElement.classList.remove(\\"dark\\");\\n  window.dispatchEvent(new CustomEvent(\\"dark-mode-toggle\\", { detail: darkMode }));\\n};\\nif (browser) {\\n  if (localStorage.theme === \\"dark\\" || !(\\"theme\\" in localStorage) && window.matchMedia(\\"(prefers-color-scheme: dark)\\").matches) {\\n    document.documentElement.classList.add(\\"dark\\");\\n    darkMode = true;\\n  } else {\\n    document.documentElement.classList.remove(\\"dark\\");\\n    darkMode = false;\\n  }\\n}\\n<\/script>\\n  \\n  <div class=\\"w-fit h-fit relative\\">\\n    <input checked={darkMode} tabindex=\\"0\\" on:click={handleSwitchDarkMode} type=\\"checkbox\\" id=\\"theme-toggle\\" class=\\"sr-only\\" />\\n    <label for=\\"theme-toggle\\" class=\\"block\\"><span class=\\"text-[0]\\">Toggle Dark Mode</span></label>\\n  </div>\\n\\n  <style lang=\\"postcss\\">\\n    #theme-toggle + label {\\n        display: inline-block;\\n        height: 3rem;\\n        width: 3rem;\\n        cursor: pointer;\\n        border-radius: 9999px;\\n        transition-duration: 300ms;\\n        --tw-content: '';\\n        content: var(--tw-content)\\n}\\n\\n#theme-toggle + label:focus-visible {\\n        border-width: 2px;\\n        border-style: solid;\\n        --tw-border-opacity: 1;\\n        border-color: rgb(255 153 102 / var(--tw-border-opacity))\\n}\\n\\n    #theme-toggle:not(:checked) + label {\\n        --tw-bg-opacity: 1;\\n        background-color: rgb(255 153 102 / var(--tw-bg-opacity))\\n}\\n\\n    #theme-toggle:checked + label {\\n        background-color: transparent;\\n        box-shadow: inset -18px -16px 1px 1px #ddd\\n}\\n</style>"],"names":[],"mappings":"AAyBI,4BAAa,CAAG,oBAAM,CAClB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,MAAM,CACrB,mBAAmB,CAAE,KAAK,CAC1B,YAAY,CAAE,EAAE,CAChB,OAAO,CAAE,IAAI,YAAY,CAAC;AAClC,CAEA,4BAAa,CAAG,oBAAK,cAAe,CAC5B,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,KAAK,CACnB,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC;AACjE,CAEI,4BAAa,KAAK,QAAQ,CAAC,CAAG,oBAAM,CAChC,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC;AACjE,CAEI,4BAAa,QAAQ,CAAG,oBAAM,CAC1B,gBAAgB,CAAE,WAAW,CAC7B,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI;AAClD"}`
};
const ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-fit h-fit relative"><input ${"checked"} tabindex="0" type="checkbox" id="theme-toggle" class="sr-only svelte-1rhsz9i"> <label for="theme-toggle" class="block svelte-1rhsz9i" data-svelte-h="svelte-7e66eh"><span class="text-[0]">Toggle Dark Mode</span></label> </div>`;
});
const ThemeSwitch_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="theme-tile" class="h-full relative group md:col-span-6 md:row-span-2 col-span-3 md:row-start-3 md:col-start-7"><div class="absolute inset-0 bg-secondary dark:bg-tertiary-700 rounded-lg blur-sm opacity-75 group-hover:bg-opacity-100 group-hover:blur-md group-hover:duration-200 transition duration-1000"></div> <div class="relative flex gap-2 w-full py-8 bg-secondary dark:bg-tertiary-700 justify-around items-center h-full md:shadow-md rounded-lg md:p-4">${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
  return `<div class="md:px-[12vw] pb-12">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div id="pageContent" class="invisible min-h-screen grid md:grid-cols-12 grid-cols-3 md:grid-rows-[10] gap-8 p-8 justify-between">${validate_component(Desc, "DescTile").$$render($$result, {}, {}, {})} ${validate_component(Github, "GithubTile").$$render($$result, {}, {}, {})} ${validate_component(LinkedIn, "LinkedInTile").$$render($$result, {}, {}, {})} ${validate_component(Medium, "MediumTile").$$render($$result, {}, {}, {})} ${validate_component(ThemeSwitch_1, "ThemeSwitch").$$render($$result, {}, {}, {})} ${validate_component(Skillz, "SkillzTile").$$render($$result, {}, {}, {})} ${validate_component(Work, "WorkTile").$$render($$result, {}, {}, {})} ${validate_component(Contact, "ContactTile").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
