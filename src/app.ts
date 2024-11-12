import { name, repository } from 'package.json'
import { mount } from 'svelte'
import App from './App.svelte';

export default mount(App, {
    target: document.body,
    props: { name, repository }
});
