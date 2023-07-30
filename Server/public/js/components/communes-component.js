
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, w as validate_store, x as component_subscribe, o as onMount, e as globals, y as empty, n as noop, p as detach_dev, A as validate_each_argument, f as element, B as text, h as space, j as add_location, k as attr_dev, u as src_url_equal, z as set_custom_element_data, l as append_dev, C as set_data_dev, D as destroy_each } from './index-998178c7.js';
import { w as writable } from './index-f9998ce7.js';
import { loadLocaleContent, getData } from '../../../../../../../../../js/libraries/serverTools.js';
import { addMarkersEntries, translate } from '../../../../../../../../../js/libraries/mapTools.js';
import { addCommunePinContent } from '../../../../../../../../../js/mapFuncs.js';
import '../../../../../../../../../js/components/map-component.js';

/* src\communes-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;

const file = "src\\communes-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i][0];
	child_ctx[3] = list[i][1];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	return child_ctx;
}

// (64:4) {#if $loaded==3}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0_value = /*$content*/ ctx[1].communes + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let p0;
	let t3_value = /*$content*/ ctx[1].p1 + "";
	let t3;
	let t4;
	let h3;
	let t5_value = /*$content*/ ctx[1].subheading1 + "";
	let t5;
	let t6;
	let map_component;
	let map_component_callback_value;
	let t7;
	let p1;
	let t8_value = /*$content*/ ctx[1]["map-prompt"] + "";
	let t8;
	let t9;
	let each_value = Object.entries(/*entriesByCountry*/ ctx[0]);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			img = element("img");
			t2 = space();
			p0 = element("p");
			t3 = text(t3_value);
			t4 = space();
			h3 = element("h3");
			t5 = text(t5_value);
			t6 = space();
			map_component = element("map-component");
			t7 = space();
			p1 = element("p");
			t8 = text(t8_value);
			t9 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(h1, file, 68, 16, 2090);
			attr_dev(img, "id", "communes-img");
			if (!src_url_equal(img.src, img_src_value = "/img/common/communes.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "commune");
			add_location(img, file, 69, 16, 2136);
			attr_dev(p0, "class", "description");
			add_location(p0, file, 70, 16, 2222);
			add_location(h3, file, 71, 16, 2280);
			set_custom_element_data(map_component, "id", "map");
			set_custom_element_data(map_component, "callback", map_component_callback_value = /*func*/ ctx[10]);
			add_location(map_component, file, 72, 16, 2329);
			attr_dev(p1, "id", "add-prompt");
			add_location(p1, file, 73, 16, 2452);
			attr_dev(div0, "id", "text-container");
			add_location(div0, file, 67, 12, 2047);
			attr_dev(div1, "id", "container");
			add_location(div1, file, 65, 8, 1944);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, img);
			append_dev(div0, t2);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div0, t4);
			append_dev(div0, h3);
			append_dev(h3, t5);
			append_dev(div0, t6);
			append_dev(div0, map_component);
			append_dev(div0, t7);
			append_dev(div0, p1);
			append_dev(p1, t8);
			append_dev(div0, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 2 && t0_value !== (t0_value = /*$content*/ ctx[1].communes + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 2 && t3_value !== (t3_value = /*$content*/ ctx[1].p1 + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 2 && t5_value !== (t5_value = /*$content*/ ctx[1].subheading1 + "")) set_data_dev(t5, t5_value);

			if (dirty & /*$content*/ 2 && map_component_callback_value !== (map_component_callback_value = /*func*/ ctx[10])) {
				set_custom_element_data(map_component, "callback", map_component_callback_value);
			}

			if (dirty & /*$content*/ 2 && t8_value !== (t8_value = /*$content*/ ctx[1]["map-prompt"] + "")) set_data_dev(t8, t8_value);

			if (dirty & /*Object, entriesByCountry, $content, getAddress, getCountry*/ 771) {
				each_value = Object.entries(/*entriesByCountry*/ ctx[0]);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(64:4) {#if $loaded==3}",
		ctx
	});

	return block;
}

// (78:24) {#each entries as entry}
function create_each_block_1(ctx) {
	let div;
	let p0;
	let b0;
	let t0_value = /*$content*/ ctx[1].location + "";
	let t0;
	let t1;
	let t2_value = /*getAddress*/ ctx[9](/*entry*/ ctx[15]) + "";
	let t2;
	let t3;
	let p1;
	let b1;
	let t4_value = /*$content*/ ctx[1].status + "";
	let t4;
	let t5;
	let t6_value = /*$content*/ ctx[1][/*entry*/ ctx[15].status] + "";
	let t6;
	let t7;
	let p2;
	let b2;
	let t8_value = /*$content*/ ctx[1].members + "";
	let t8;
	let t9;
	let t10_value = /*entry*/ ctx[15].members + "";
	let t10;
	let t11;
	let p3;
	let b3;
	let t12_value = /*$content*/ ctx[1].contact + "";
	let t12;
	let t13;
	let a;
	let t14_value = /*entry*/ ctx[15].contact + "";
	let t14;
	let a_href_value;

	const block = {
		c: function create() {
			div = element("div");
			p0 = element("p");
			b0 = element("b");
			t0 = text(t0_value);
			t1 = text(": ");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			b1 = element("b");
			t4 = text(t4_value);
			t5 = text(": ");
			t6 = text(t6_value);
			t7 = space();
			p2 = element("p");
			b2 = element("b");
			t8 = text(t8_value);
			t9 = text(": ");
			t10 = text(t10_value);
			t11 = space();
			p3 = element("p");
			b3 = element("b");
			t12 = text(t12_value);
			t13 = text(": ");
			a = element("a");
			t14 = text(t14_value);
			add_location(b0, file, 80, 35, 2868);
			add_location(p0, file, 80, 32, 2865);
			add_location(b1, file, 81, 35, 2956);
			add_location(p1, file, 81, 32, 2953);
			add_location(b2, file, 82, 35, 3047);
			add_location(p2, file, 82, 32, 3044);
			add_location(b3, file, 83, 35, 3130);
			attr_dev(a, "href", a_href_value = /*entry*/ ctx[15].contact);
			attr_dev(a, "target", ";_blank;");
			attr_dev(a, "rel", "noreferrer");
			add_location(a, file, 83, 62, 3157);
			add_location(p3, file, 83, 32, 3127);
			attr_dev(div, "class", "location-info");
			add_location(div, file, 79, 28, 2804);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, b0);
			append_dev(b0, t0);
			append_dev(b0, t1);
			append_dev(p0, t2);
			append_dev(div, t3);
			append_dev(div, p1);
			append_dev(p1, b1);
			append_dev(b1, t4);
			append_dev(b1, t5);
			append_dev(p1, t6);
			append_dev(div, t7);
			append_dev(div, p2);
			append_dev(p2, b2);
			append_dev(b2, t8);
			append_dev(b2, t9);
			append_dev(p2, t10);
			append_dev(div, t11);
			append_dev(div, p3);
			append_dev(p3, b3);
			append_dev(b3, t12);
			append_dev(b3, t13);
			append_dev(p3, a);
			append_dev(a, t14);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 2 && t0_value !== (t0_value = /*$content*/ ctx[1].location + "")) set_data_dev(t0, t0_value);
			if (dirty & /*entriesByCountry*/ 1 && t2_value !== (t2_value = /*getAddress*/ ctx[9](/*entry*/ ctx[15]) + "")) set_data_dev(t2, t2_value);
			if (dirty & /*$content*/ 2 && t4_value !== (t4_value = /*$content*/ ctx[1].status + "")) set_data_dev(t4, t4_value);
			if (dirty & /*$content, entriesByCountry*/ 3 && t6_value !== (t6_value = /*$content*/ ctx[1][/*entry*/ ctx[15].status] + "")) set_data_dev(t6, t6_value);
			if (dirty & /*$content*/ 2 && t8_value !== (t8_value = /*$content*/ ctx[1].members + "")) set_data_dev(t8, t8_value);
			if (dirty & /*entriesByCountry*/ 1 && t10_value !== (t10_value = /*entry*/ ctx[15].members + "")) set_data_dev(t10, t10_value);
			if (dirty & /*$content*/ 2 && t12_value !== (t12_value = /*$content*/ ctx[1].contact + "")) set_data_dev(t12, t12_value);
			if (dirty & /*entriesByCountry*/ 1 && t14_value !== (t14_value = /*entry*/ ctx[15].contact + "")) set_data_dev(t14, t14_value);

			if (dirty & /*entriesByCountry*/ 1 && a_href_value !== (a_href_value = /*entry*/ ctx[15].contact)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(78:24) {#each entries as entry}",
		ctx
	});

	return block;
}

// (75:16) {#each Object.entries(entriesByCountry) as [name,entries]}
function create_each_block(ctx) {
	let h4;
	let t0_value = /*getCountry*/ ctx[8](/*name*/ ctx[12]) + "";
	let t0;
	let t1;
	let div;
	let t2;
	let each_value_1 = /*entries*/ ctx[3];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			h4 = element("h4");
			t0 = text(t0_value);
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			attr_dev(h4, "class", "country-name");
			add_location(h4, file, 75, 20, 2597);
			attr_dev(div, "class", "country-block");
			add_location(div, file, 76, 20, 2667);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h4, anchor);
			append_dev(h4, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*entriesByCountry*/ 1 && t0_value !== (t0_value = /*getCountry*/ ctx[8](/*name*/ ctx[12]) + "")) set_data_dev(t0, t0_value);

			if (dirty & /*Object, entriesByCountry, $content, getAddress*/ 515) {
				each_value_1 = /*entries*/ ctx[3];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, t2);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h4);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(75:16) {#each Object.entries(entriesByCountry) as [name,entries]}",
		ctx
	});

	return block;
}

// (63:0) {#key $loaded}
function create_key_block(ctx) {
	let if_block_anchor;
	let if_block = /*$loaded*/ ctx[2] == 3 && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*$loaded*/ ctx[2] == 3) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_key_block.name,
		type: "key",
		source: "(63:0) {#key $loaded}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let previous_key = /*$loaded*/ ctx[2];
	let key_block_anchor;
	let key_block = create_key_block(ctx);

	const block = {
		c: function create() {
			key_block.c();
			key_block_anchor = empty();
			this.c = noop;
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			key_block.m(target, anchor);
			insert_dev(target, key_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$loaded*/ 4 && safe_not_equal(previous_key, previous_key = /*$loaded*/ ctx[2])) {
				key_block.d(1);
				key_block = create_key_block(ctx);
				key_block.c();
				key_block.m(key_block_anchor.parentNode, key_block_anchor);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(key_block_anchor);
			key_block.d(detaching);
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
	let $content;
	let $loaded;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('communes-component', slots, []);
	let loaded = writable(0);
	validate_store(loaded, 'loaded');
	component_subscribe($$self, loaded, value => $$invalidate(2, $loaded = value));
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(1, $content = value));
	let entries;
	let entriesByCountry;
	let locale = loadLocaleContent(content, "communes-component", loaded);
	loadLocaleContent(content, "countries", loaded);

	let callback = response => {
		$$invalidate(3, entries = JSON.parse(response));
		$$invalidate(0, entriesByCountry = {});

		for (let g of entries) {
			let country = g.country;

			if (g.contact == null) {
				g.contact = "https://discord.gg/Qk8KUk787z";
			}

			if (country in entriesByCountry) {
				entriesByCountry[country].push(g);
			} else {
				$$invalidate(0, entriesByCountry[country] = [g], entriesByCountry);
			}
		}

		loaded.update(val => {
			return val + 1;
		});
	};

	getData("/assets/communes.json", callback);

	function mapCallback(createMap, content, locale) {
		let map = createMap([22, 0], 2);
		addMarkersEntries(entries, entriesByCountry, map, content, locale, addCommunePinContent, "red");
	}

	function getCountry(x) {
		return locale == "en" ? x : translate($content, x);
	}

	function getAddress(g) {
		let location = [g.country, g.state, g.town].filter(x => x != null);
		return location.map(x => locale == "en" ? x : translate($content, x)).join(", ");
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<communes-component> was created with unknown prop '${key}'`);
	});

	const func = createMap => mapCallback(createMap, $content, locale);

	$$self.$capture_state = () => ({
		onMount,
		writable,
		loadLocaleContent,
		getData,
		addMarkersEntries,
		translate,
		addCommunePinContent,
		loaded,
		content,
		entries,
		entriesByCountry,
		locale,
		callback,
		mapCallback,
		getCountry,
		getAddress,
		$content,
		$loaded
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(4, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(5, content = $$props.content);
		if ('entries' in $$props) $$invalidate(3, entries = $$props.entries);
		if ('entriesByCountry' in $$props) $$invalidate(0, entriesByCountry = $$props.entriesByCountry);
		if ('locale' in $$props) $$invalidate(6, locale = $$props.locale);
		if ('callback' in $$props) callback = $$props.callback;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		entriesByCountry,
		$content,
		$loaded,
		entries,
		loaded,
		content,
		locale,
		mapCallback,
		getCountry,
		getAddress,
		func
	];
}

class Communes_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';.description{margin-bottom:1rem}#add-prompt{margin-bottom:2rem}#communes-img{position:absolute;width:11.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.country-name{margin-bottom:0.5rem}.country-block{margin-bottom:2rem}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:0,5rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-top:1rem;margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>`;

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
			{},
			null
		);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("communes-component", Communes_component);

export { Communes_component as default };
