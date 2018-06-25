<template>
<u-steps :value="stepCurrent">
    <u-step title="创建工作负载">
        <u-form gap="large">
            <u-form-item label="可用区">
                <u-capsules v-model="model.availableZone">
                    <u-capsule value="A">可用区 A</u-capsule>
                    <u-capsule value="B">可用区 B</u-capsule>
                </u-capsules>
            </u-form-item>
            <u-form-item required label="安全组">
                <u-select v-model="model.securityGroup" size="huge medium">
                    <u-select-item>default</u-select-item>
                </u-select>
            </u-form-item>
            <u-form-item label="容器类型" layout="block" description="高性能容器不支持服务发现">
                <u-radios v-model="model.type">
                    <u-radio>普通容器</u-radio>
                    <u-radio>高性能容器</u-radio>
                </u-radios>
            </u-form-item>
            <u-form-item required layout="block" label="适用范围" description="面向容器服务的云硬盘默认格式化成 Ext4，面向云服务器的云硬盘需自行挂载后执行 mount 操作才能成功挂载">
                <u-capsules v-model="model.scope">
                    <u-capsule value="Ext4">面向容器服务</u-capsule>
                    <u-capsule value="Raw">面向云服务器</u-capsule>
                </u-capsules>
            </u-form-item>
            <u-form-item layout="block" label="规格">
                <u-cascade-capsules v-model="model.specType" :data="specTypes" :categories="[
                    { label: 'CPU', key: 'cpu' },
                    { label: '内存', key: 'memory' },
                    { label: '系统盘', key: 'storage' },
                ]" converter="join"></u-cascade-capsules>
            </u-form-item>
            <u-form-item label="名称" required>
                <u-input v-model="model.name" size="huge" maxlength="32" placeholder="1-32位小写字母、数字、或中划线组成，以字母开头，字母或数字结尾"></u-input>
            </u-form-item>
            <u-form-item label="副本数" required layout="block">
                <u-number-input v-model="model.number" size="huge normal"></u-number-input> 个
            </u-form-item>
            <u-form-item>
                <u-button color="primary" @click="next">下一步</u-button>
            </u-form-item>
        </u-form>
    </u-step>
    <u-step title="添加容器">
        <u-form gap="large">
            <u-form-item label="容器名称" required>
                <u-input v-model="model.name" size="huge" maxlength="32" placeholder="1-63位小写字母、数字、或中划线组成，以字母开头，字母或数字结尾"></u-input>
            </u-form-item>
            <u-form-item layout="block" label="启动命令" required>
                <div slot="description">容器默认运行镜像中指定的 ENTRYPOINT, 可自定义启动命令将其覆盖。 填写可参照 <u-link>帮助文档</u-link></div>
                <u-textarea size="large huge" placeholder="1024字符以内，区分大小写字母"></u-textarea>
            </u-form-item>
            <u-form-item>
                <u-linear-layout>
                    <u-button @click="prev">上一步</u-button>
                    <u-button color="primary" @click="next">下一步</u-button>
                </u-linear-layout>
            </u-form-item>
        </u-form>
    </u-step>
    <u-step title="高级设置">
        <u-form gap="large">
            <u-form-item layout="block" label="权限设置" required>
                <u-linear-layout direction="vertical" gap="small">
                    <u-radios v-model="model.type">
                        <u-radio>默认权限</u-radio>
                        <u-radio>配置权限</u-radio>
                    </u-radios>
                    <u-select size="large huge">
                        <u-select-item>SYS_ADMIN</u-select-item>
                    </u-select>
                </u-linear-layout>
            </u-form-item>
            <u-form-item>
                <u-linear-layout>
                    <u-button @click="prev">上一步</u-button>
                    <u-button color="primary" @click="next">立即创建</u-button>
                </u-linear-layout>
            </u-form-item>
        </u-form>
    </u-step>
</u-steps>
</template>

<script>
export default {
    data() {
        return {
            canSubmit: false,
            model: {
                availableZone: 'A',
                securityGroup: undefined,
                email: '',
                phone: '',
            },
            rules: {
                username: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入用户名' },
                    { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' },
                ],
                email: [
                    { type: 'string', required: true, trigger: 'input+blur', message: '请输入邮箱' },
                    { type: 'email', trigger: 'input+blur', message: '邮箱格式不正确' },
                ],
                phone: [
                    { type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: '手机号码格式不正确' },
                ],
            },
            specTypes: [
                { text: '1核', value: 1, children: [
                    { text: '1GB', value: 1, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '2GB', value: 2, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
                { text: '2核', value: 2, children: [
                    { text: '2GB', value: 2, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '4GB', value: 4, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '8GB', value: 8, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
                { text: '4核', value: 4, children: [
                    { text: '4GB', value: 4, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '8GB', value: 8, children: [
                        { text: '20GB', value: 20 },
                    ] },
                    { text: '16GB', value: 16, children: [
                        { text: '20GB', value: 20 },
                    ] },
                ] },
            ],
            stepCurrent: 0,
        };
    },
    mounted() {
        // 必须初始化时或在获取数据到时安静验证一次
        this.$refs.form.validate(true)
            .catch(() => { /* */ });
        // 在获取数据到时如下
        // this.getData().then(...)
        //  .then(() => this.$refs.form.validate(true))
        //  .catch(() => {});
    },
    methods: {
        prev() {
            if (this.stepCurrent > 0)
                this.stepCurrent--;
        },
        next() {
            if (this.stepCurrent < 2)
                this.stepCurrent++;
        },
        submit() {
            this.$refs.form.validate()
                .then(() => alert('提交成功'))
                .catch(() => { /* */ });
        },
    },
};
</script>
