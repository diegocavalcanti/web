var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { c as createComponent, h as hSlot } from "./render.e72151d8.js";
import { c as computed, h, a as inject, g as getCurrentInstance, m as layoutKey, D as pageContainerKey, I as defineComponent, Y as toRef, _ as _export_sfc, r as ref, J as openBlock, S as createElementBlock, R as createBaseVNode, O as toDisplayString, F as Fragment, U as renderList, K as createBlock, L as withCtx, Q as resolveComponent, d as createVNode } from "./index.4d770d9b.js";
var QPage = createComponent({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey);
    inject(pageContainerKey, () => {
      console.error("QPage needs to be child of QPageContainer");
    });
    const style = computed(() => {
      const offset = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
      if (typeof props.styleFn === "function") {
        const height = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
        return props.styleFn(offset, height);
      }
      return {
        minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset + "px" : $q.screen.height === 0 ? offset !== 0 ? `calc(100vh - ${offset}px)` : "100vh" : $q.screen.height - offset + "px"
      };
    });
    const classes = computed(() => `q-page ${props.padding === true ? " q-layout-padding" : ""}`);
    return () => h("main", {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }
  return { clickCount, increment };
}
function useDisplayTodo(todos) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}
const _sfc_main$1 = defineComponent({
  name: "ExampleComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      default: () => []
    },
    meta: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(props) {
    return __spreadValues(__spreadValues({}, useClickCount()), useDisplayTodo(toRef(props, "todos")));
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, toDisplayString(_ctx.title), 1),
    createBaseVNode("ul", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.todos, (todo) => {
        return openBlock(), createElementBlock("li", {
          key: todo.id,
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.increment && _ctx.increment(...args))
        }, toDisplayString(todo.id) + " - " + toDisplayString(todo.content), 1);
      }), 128))
    ]),
    createBaseVNode("p", null, "Count: " + toDisplayString(_ctx.todoCount) + " / " + toDisplayString(_ctx.meta.totalCount), 1),
    createBaseVNode("p", null, "Active: " + toDisplayString(_ctx.active ? "yes" : "no"), 1),
    createBaseVNode("p", null, "Clicks on todos: " + toDisplayString(_ctx.clickCount), 1)
  ]);
}
var ExampleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "IndexPage",
  components: { ExampleComponent },
  setup() {
    const todos = ref([
      {
        id: 1,
        content: "ct1"
      },
      {
        id: 2,
        content: "ct2"
      },
      {
        id: 3,
        content: "ct3"
      },
      {
        id: 4,
        content: "ct4"
      },
      {
        id: 5,
        content: "ct5"
      }
    ]);
    const meta = ref({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_example_component = resolveComponent("example-component");
  return openBlock(), createBlock(QPage, { class: "row items-center justify-evenly" }, {
    default: withCtx(() => [
      createVNode(_component_example_component, {
        title: "Example component",
        active: "",
        todos: _ctx.todos,
        meta: _ctx.meta
      }, null, 8, ["todos", "meta"])
    ]),
    _: 1
  });
}
var IndexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { IndexPage as default };
