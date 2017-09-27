<template>
<div :class="$style.root">
    <header :class="$style.head">
        <u-logo slot="left"></u-logo>
        <u-navbar alignment="right">
            <u-navbar-item selected>主体</u-navbar-item>
            <u-navbar-item>备案管理</u-navbar-item>
            <u-navbar-item>帮助</u-navbar-item>
        </u-navbar>
    </header>
    <side :class="$style.side">
        <u-sidebar :class="$style.sidebar">
            <u-sidebar-item>管理</u-sidebar-item>
            <u-sidebar-item selected>链接1</u-sidebar-item>
            <u-sidebar-item>链接2</u-sidebar-item>
        </u-sidebar>
    </side>
    <main :class="$style.main">
        <u-linear-layout direction="vertical">
            <u-linear-layout><u-button color="primary">创建</u-button><u-button>取消</u-button></u-linear-layout>
            <u-tablets>
                <u-tablet>Apple</u-tablet>
                <u-tablet>Banana</u-tablet>
                <u-tablet>Cake</u-tablet>
            </u-tablets>
            <u-tabs>
                <u-tab title="详细信息"><u-loading></u-loading></u-tab>
                <u-tab title="性能监控"><u-loading></u-loading></u-tab>
                <u-tab title="操作日志"><u-loading></u-loading></u-tab>
            </u-tabs>
            <u-form>
                <u-form-item title="实例名称">
                    <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
                </u-form-item>
                <u-form-item title="规格">
                    <u-capsules value="0101">
                        <u-capsule value="0101">1核 1GB</u-capsule>
                        <u-capsule value="0102">1核 2GB</u-capsule>
                        <u-capsule value="0204">2核 4GB</u-capsule>
                        <u-capsule value="0408">4核 8GB</u-capsule>
                        <u-capsule value="0816">8核 16GB</u-capsule>
                        <u-capsule value="0832">8核 32GB</u-capsule>
                        <u-capsule value="1664">16核 64GB</u-capsule>
                    </u-capsules>
                </u-form-item>
                <u-form-item title="端口号">
                    <u-input size="huge" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
                </u-form-item>
                <u-form-item title="详情">
                    <u-textarea></u-textarea>
                </u-form-item>
                <u-form-item>
                    <u-button color="primary">立即创建</u-button>
                </u-form-item>
            </u-form>
        </u-linear-layout>
    </main>
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
    padding: 0 10px;
    z-index: 1;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: 64px;
}

.side {
    position: fixed;
    top: 64px;
    left: 0;
    bottom: 0;
    width: 160px;
}

.main {
    position: fixed;
    top: 64px;
    left: 160px;
    bottom: 0;
    right: 0;
    padding: 40px;
}

.sidebar {
    height: 100%;
}
</style>
