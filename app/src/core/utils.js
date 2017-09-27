export const installComponents = (Components, Vue) => Object.keys(Components).forEach((key) => {
    const Component = Components[key];
    Vue.component(Component.name, Component);
});
