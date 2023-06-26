
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, c as validate_slots, o as onMount, e as element, n as noop, g as add_location, h as attr_dev, k as append_dev, l as detach_dev } from './index-3b678a7c.js';

/* src\components\cookies-dialog.svelte generated by Svelte v3.52.0 */
const file = "src\\components\\cookies-dialog.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let p;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			p = element("p");
			p.textContent = "We use cookies to improve your experience, personalise your content and analyse site usage. By clicking “OK”, you agree to the use of cookies.";
			this.c = noop;
			add_location(p, file, 19, 8, 248);
			add_location(div0, file, 18, 4, 233);
			attr_dev(div1, "id", "wrapper");
			add_location(div1, file, 17, 0, 209);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, p);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
	validate_slots('cookies-dialog', slots, []);

	onMount(() => {
		
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<cookies-dialog> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ onMount });
	return [];
}

class Cookies_dialog extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';#wrapper{display:none;position:relative;height:5rem;width:100%;background:white;box-shadow:0 0 0.314rem rgb(187, 187, 187);;}</style>`;

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

customElements.define("cookies-dialog", Cookies_dialog);

export { Cookies_dialog as default };
