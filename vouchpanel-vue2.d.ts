import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const VouchpanelVue2: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default VouchpanelVue2;
