<template>
<div :class="$style.root">
    <header :class="$style.head">
        <u-logo :class="$style.left" color></u-logo>
        <u-navbar :class="$style.right">
            <u-navbar-item inverse href="https://vusion.github.io" target="_blank">Vusion</u-navbar-item>
            <u-navbar-item inverse href="https://vusion.github.io/cloud-ui" target="_blank">CloudUI</u-navbar-item>
            <u-navbar-item inverse href="https://github.com/vusion" target="_blank">GitHub</u-navbar-item>
        </u-navbar>
    </header>
    <aside :class="$style.side">
        <u-sidebar :class="$style.sidebar" collapsible accordion>
            <u-sidebar-item to="/overview">总览</u-sidebar-item>
            <u-sidebar-group title="列表页">
                <u-sidebar-item to="/list/table">表格列表</u-sidebar-item>
                <!-- <u-sidebar-item to="/list/card">卡片列表</u-sidebar-item> -->
                <u-sidebar-item to="/list/advanced">高级列表</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="表单页">
                <u-sidebar-item to="/form/basic">基础表单</u-sidebar-item>
                <u-sidebar-item to="/form/steps">高级表单</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="详情页">
                <u-sidebar-item to="/detail/basic">基础详情</u-sidebar-item>
                <u-sidebar-item to="/detail/advanced">高级详情</u-sidebar-item>
            </u-sidebar-group>
        </u-sidebar>
    </aside>
    <main :class="$style.main">
        <router-view></router-view>
    </main>
</div>
</template>

<script>
export default {
    name: 'u-global-layout',
};
</script>

<style module>
$head-height: 68px;
$side-width: 160px;

.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: $head-height;
    background: white;
    color: white;
    box-shadow: 0 3px 4px rgba(0,0,0,0.1);
    /* padding: 0 10px; */
    z-index: 1;
}

.left {
    float: left;
}

.right {
    float: right;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: $head-height;
}

.side {
    position: fixed;
    top: $head-height;
    left: 0;
    bottom: 0;
    width: $side-width;
}

.main {
    position: fixed;
    top: $head-height;
    left: $side-width;
    bottom: 0;
    right: 0;
    padding: 40px;
    overflow: auto;
}

.sidebar {
    height: 100%;
}
</style>
