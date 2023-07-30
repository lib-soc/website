
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, t as flush, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, A as validate_each_argument, f as element, n as noop, k as attr_dev, j as add_location, p as detach_dev, q as binding_callbacks, B as text, h as space, u as src_url_equal, F as set_style, l as append_dev, m as listen_dev, C as set_data_dev, D as destroy_each } from './index-998178c7.js';
import { px2rem, getTextWidth, getCanvasFont } from '../../../../../../../../../js/libraries/miscTools.js';

/* src\components\select-component.svelte generated by Svelte v3.52.0 */
const file = "src\\components\\select-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[26] = list[i];
	child_ctx[27] = list;
	child_ctx[28] = i;
	return child_ctx;
}

// (135:12) {#each options as option, i}
function create_each_block(ctx) {
	let button;
	let span;
	let t0_value = /*option*/ ctx[26] + "";
	let t0;
	let t1;
	let i = /*i*/ ctx[28];
	let mounted;
	let dispose;
	const assign_button = () => /*button_binding_1*/ ctx[14](button, i);
	const unassign_button = () => /*button_binding_1*/ ctx[14](null, i);

	function click_handler() {
		return /*click_handler*/ ctx[15](/*i*/ ctx[28]);
	}

	const block = {
		c: function create() {
			button = element("button");
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			add_location(span, file, 136, 20, 4826);
			button.value = /*i*/ ctx[28];
			add_location(button, file, 135, 16, 4715);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, span);
			append_dev(span, t0);
			append_dev(button, t1);
			assign_button();

			if (!mounted) {
				dispose = listen_dev(button, "click", click_handler, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*options*/ 4 && t0_value !== (t0_value = /*option*/ ctx[26] + "")) set_data_dev(t0, t0_value);

			if (i !== /*i*/ ctx[28]) {
				unassign_button();
				i = /*i*/ ctx[28];
				assign_button();
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			unassign_button();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(135:12) {#each options as option, i}",
		ctx
	});

	return block;
}

// (127:4) {#key key}
function create_key_block(ctx) {
	let button;
	let div0;
	let span;
	let t0_value = (/*value*/ ctx[0] != null ? /*value*/ ctx[0] : "") + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let div1;
	let mounted;
	let dispose;
	let each_value = /*options*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			button = element("button");
			div0 = element("div");
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			img = element("img");
			t2 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(span, "id", "current-options-span");
			add_location(span, file, 129, 16, 4359);
			attr_dev(div0, "id", "current-options-div");
			add_location(div0, file, 128, 12, 4311);
			attr_dev(img, "id", "arrow-down");
			if (!src_url_equal(img.src, img_src_value = "../assets/arrow_down.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "arrow down");
			add_location(img, file, 131, 12, 4484);
			attr_dev(button, "id", "current-option-button");
			add_location(button, file, 127, 8, 4202);
			attr_dev(div1, "id", "options-holder");
			set_style(div1, "display", "none");
			add_location(div1, file, 133, 8, 4582);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, div0);
			append_dev(div0, span);
			append_dev(span, t0);
			/*span_binding*/ ctx[12](span);
			append_dev(button, t1);
			append_dev(button, img);
			/*button_binding*/ ctx[13](button);
			insert_dev(target, t2, anchor);
			insert_dev(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			/*div1_binding*/ ctx[16](div1);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*changeVisibility*/ ctx[9], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*value*/ 1 && t0_value !== (t0_value = (/*value*/ ctx[0] != null ? /*value*/ ctx[0] : "") + "")) set_data_dev(t0, t0_value);

			if (dirty & /*optionButtons, changeOption, callback, options*/ 1062) {
				each_value = /*options*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			/*span_binding*/ ctx[12](null);
			/*button_binding*/ ctx[13](null);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
			/*div1_binding*/ ctx[16](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_key_block.name,
		type: "key",
		source: "(127:4) {#key key}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let previous_key = /*key*/ ctx[8];
	let key_block = create_key_block(ctx);

	const block = {
		c: function create() {
			div = element("div");
			key_block.c();
			this.c = noop;
			attr_dev(div, "class", "select");
			add_location(div, file, 125, 0, 4137);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			key_block.m(div, null);
			/*div_binding*/ ctx[17](div);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*key*/ 256 && safe_not_equal(previous_key, previous_key = /*key*/ ctx[8])) {
				key_block.d(1);
				key_block = create_key_block(ctx);
				key_block.c();
				key_block.m(div, null);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			key_block.d(detaching);
			/*div_binding*/ ctx[17](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('select-component', slots, []);
	let { callback = null } = $$props;
	let { options = [""] } = $$props;
	let { value = null } = $$props;
	let { valueindex = null } = $$props;

	// Main code
	let root = arguments[0];

	let select;
	let optionsHolder;
	let optionButtons = [];
	let currentOption;
	let currentOptionButton;
	let init = false;
	let key = 0;
	let obs = null;

	function setKeyValue(value, options) {
		if (value !== null) {
			if (options.includes(value)) {
				let index = options.findIndex(element => element == value);
				$$invalidate(6, currentOption.innerHTML = value, currentOption);
				$$invalidate(5, optionButtons[index].style.display = "none", optionButtons);
				$$invalidate(11, valueindex = index);
			}

			$$invalidate(8, key += 1);
		}
	}

	function setKeyIndex(valueindex, options) {
		if (valueindex != null && options != undefined && options[valueindex] != value) {
			$$invalidate(0, value = options[valueindex]);
			$$invalidate(8, key += 1);
		}
	}

	function indexToValue(index) {
		$$invalidate(0, value = options[index]);
	}

	function changeVisibility() {
		if (optionsHolder.style.display == "none") {
			$$invalidate(4, optionsHolder.style.display = "initial", optionsHolder);
		} else {
			$$invalidate(4, optionsHolder.style.display = "none", optionsHolder);
		}
	}

	function changeOption(index, callback) {
		$$invalidate(11, valueindex = index);
		$$invalidate(0, value = options[index]);

		if (callback != undefined && callback != null) {
			callback(index);
		}
	}

	function hideSelect() {
		$$invalidate(4, optionsHolder.style.display = "none", optionsHolder);
	}

	function changeOptionsWidth(select, optionsHolder) {
		let selectWidth;

		if (select != undefined && optionsHolder != undefined) {
			let selectWidthText = getComputedStyle(select).getPropertyValue('--width');

			if (isNaN(selectWidthText) || selectWidthText == "") {
				if (obs == null) {
					obs = new ResizeObserver(() => changeOptionsWidth(select, optionsHolder));
					obs.observe(currentOptionButton);
					return;
				} else {
					selectWidthText = getComputedStyle(currentOptionButton).getPropertyValue('width');
					selectWidth = px2rem(parseFloat(selectWidthText.slice(0, selectWidthText.length - 2)));
				}
			} else {
				selectWidth = parseFloat(selectWidthText.slice(0, selectWidthText.length - 2));
			}

			let spanWidths = [];

			for (let i = 0; i < optionsHolder.children.length; i++) {
				let span = optionsHolder.children[i].children[0];
				let spanWidth = getTextWidth(span.innerHTML, getCanvasFont(span));
				spanWidths.push(spanWidth);
			}

			let maxOptionsWidth = px2rem(Math.max(...spanWidths));

			if (maxOptionsWidth > selectWidth) {
				let width = 1.1 * maxOptionsWidth + "rem";
				optionsHolder.style.width = width;

				for (let i = 0; i < optionsHolder.children.length; i++) {
					let button = optionsHolder.children[i];
					button.style.width = width;
				}

				optionsHolder.style.marginLeft = -(1.1 * maxOptionsWidth - selectWidth) / 2 - 0.05 + "rem";
			} else {
				let width = selectWidth + 0.1 + "rem";

				for (let i = 0; i < optionsHolder.children.length; i++) {
					let button = optionsHolder.children[i];
					button.style.width = width;
				}
			}
		}
	}

	onMount(() => {
		init = true;
		root.addEventListener('focusout', hideSelect);
	});

	const writable_props = ['callback', 'options', 'value', 'valueindex'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<select-component> was created with unknown prop '${key}'`);
	});

	function span_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			currentOption = $$value;
			$$invalidate(6, currentOption);
		});
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			currentOptionButton = $$value;
			$$invalidate(7, currentOptionButton);
		});
	}

	function button_binding_1($$value, i) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			optionButtons[i] = $$value;
			$$invalidate(5, optionButtons);
		});
	}

	const click_handler = i => changeOption(i, callback);

	function div1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			optionsHolder = $$value;
			$$invalidate(4, optionsHolder);
		});
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			select = $$value;
			$$invalidate(3, select);
		});
	}

	$$self.$$set = $$props => {
		if ('callback' in $$props) $$invalidate(1, callback = $$props.callback);
		if ('options' in $$props) $$invalidate(2, options = $$props.options);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('valueindex' in $$props) $$invalidate(11, valueindex = $$props.valueindex);
	};

	$$self.$capture_state = () => ({
		onMount,
		px2rem,
		getTextWidth,
		getCanvasFont,
		callback,
		options,
		value,
		valueindex,
		root,
		select,
		optionsHolder,
		optionButtons,
		currentOption,
		currentOptionButton,
		init,
		key,
		obs,
		setKeyValue,
		setKeyIndex,
		indexToValue,
		changeVisibility,
		changeOption,
		hideSelect,
		changeOptionsWidth
	});

	$$self.$inject_state = $$props => {
		if ('callback' in $$props) $$invalidate(1, callback = $$props.callback);
		if ('options' in $$props) $$invalidate(2, options = $$props.options);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('valueindex' in $$props) $$invalidate(11, valueindex = $$props.valueindex);
		if ('root' in $$props) root = $$props.root;
		if ('select' in $$props) $$invalidate(3, select = $$props.select);
		if ('optionsHolder' in $$props) $$invalidate(4, optionsHolder = $$props.optionsHolder);
		if ('optionButtons' in $$props) $$invalidate(5, optionButtons = $$props.optionButtons);
		if ('currentOption' in $$props) $$invalidate(6, currentOption = $$props.currentOption);
		if ('currentOptionButton' in $$props) $$invalidate(7, currentOptionButton = $$props.currentOptionButton);
		if ('init' in $$props) init = $$props.init;
		if ('key' in $$props) $$invalidate(8, key = $$props.key);
		if ('obs' in $$props) obs = $$props.obs;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value, options*/ 5) {
			setKeyValue(value, options);
		}

		if ($$self.$$.dirty & /*valueindex, options*/ 2052) {
			setKeyIndex(valueindex, options);
		}

		if ($$self.$$.dirty & /*select, optionsHolder*/ 24) {
			changeOptionsWidth(select, optionsHolder);
		}
	};

	return [
		value,
		callback,
		options,
		select,
		optionsHolder,
		optionButtons,
		currentOption,
		currentOptionButton,
		key,
		changeVisibility,
		changeOption,
		valueindex,
		span_binding,
		button_binding,
		button_binding_1,
		click_handler,
		div1_binding,
		div_binding
	];
}

class Select_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';#current-options-div{position:relative;overflow:hidden;width:calc(100% - 2.5rem);text-align:var(--text-align,left);padding-top:0.5rem}#arrow-down{right:0.5rem;width:1.365rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.select{position:relative;margin-top:var(--margin-top,0);width:var(--width);max-width:var(--max-width);height:var(--height,2.75rem);border:var(--border,rgba(0,0,0,var(--opacity,1)) solid);border-width:var(--border-width, 0.063rem);border-radius:var(--border-radius,0.126rem)}.select button{width:var(--width);max-width:var(--max-width)}#current-option-button,#current-option-button *{opacity:var(--opacity,1);font-family:var(--font-family,var(--serif), serif);font-size:var(--font-size, 1.3rem)}.select>:first-child{margin-right:-2.75rem;padding-right:0.0rem}.select span{position:relative;padding-top:0.5rem;padding-left:0.3rem;white-space:nowrap}#current-option-button{display:flex;width:100%;height:100%;padding-left:0.341rem;font-weight:var(--font-weight,400)}#options-holder{position:absolute;margin-top:calc(-1 * var(--border-width, 0.063rem));background:white;z-index:1;margin-left:-0.05rem;border-radius:var(--border-radius-options,0.126rem)}#options-holder *{font-size:var(--options-font-size, 1.2rem);font-family:var(--font-family,var(--serif), serif)}#options-holder button{display:flex;position:relative;width:var(--width);background:white;font-weight:400;text-align:var(--text-align,left);padding-top:0.341rem;padding-bottom:0.341rem;padding-right:3.515rem;padding-left:0.341rem}#options-holder button:hover{background:#cdcdcd}#options-holder button{border:black solid;border-width:0 var(--border-width-options,var(--border-width, 0.063rem)) 0 var(--border-width-options,var(--border-width, 0.063rem))}#options-holder>:first-child{border-top:black solid var(--border-width-options,var(--border-width, 0.063rem));border-top-left-radius:var(--border-radius-options,0.126rem);border-top-right-radius:var(--border-radius-options,0.126rem)}#options-holder>:last-child{border-bottom:black solid var(--border-width-options,var(--border-width, 0.063rem));border-bottom-left-radius:var(--border-radius-options,0.126rem);border-bottom-right-radius:var(--border-radius-options,0.126rem)}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			instance,
			create_fragment,
			safe_not_equal,
			{
				callback: 1,
				options: 2,
				value: 0,
				valueindex: 11
			},
			null
		);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}

			if (options.props) {
				this.$set(options.props);
				flush();
			}
		}
	}

	static get observedAttributes() {
		return ["callback", "options", "value", "valueindex"];
	}

	get callback() {
		return this.$$.ctx[1];
	}

	set callback(callback) {
		this.$$set({ callback });
		flush();
	}

	get options() {
		return this.$$.ctx[2];
	}

	set options(options) {
		this.$$set({ options });
		flush();
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get valueindex() {
		return this.$$.ctx[11];
	}

	set valueindex(valueindex) {
		this.$$set({ valueindex });
		flush();
	}
}

customElements.define("select-component", Select_component);

export { Select_component as default };
