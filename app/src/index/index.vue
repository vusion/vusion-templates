<template>
<div :class="$style.root">
    <header :class="$style.head">
        <div :class="$style.wrap">
            <u-navbar>
                <u-logo slot="left"></u-logo>
                <u-navbar-item selected>首页</u-navbar-item>
                <u-navbar-item>链接1</u-navbar-item>
                <u-navbar-item>链接2</u-navbar-item>
            </u-navbar>
        </div>
    </header>
    <main :class="$style.body">
        <slot name="body">
            <div :class="$style.wrap">
                <slot></slot>
            </div>
        </slot>
    </main>
    <!-- <footer :class="$style.foot">
        <div :class="$style.wrap">
            <slot name="foot"></slot>
        </div>
    </footer> -->
</div>
</template>

<script>
export default {
    name: 'u-global-layout',
};
</script>

<style module>
.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 64px;
    background: #1c2b41;
    color: white;
    box-shadow: 0 3px 4px rgba(0,0,0,0.1);
    z-index: 1;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: 64px;
}

.foot {
    height: 70px;
    background: #34383b;
}

.wrap {
    width: 1180px;
    margin: 0 auto;
}
</style>
