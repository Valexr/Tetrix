import { name, repository } from 'package.json'
import App from './App.svelte';

var app = new App({
    target: document.body,
    props: { name, repository }
});

export default app;