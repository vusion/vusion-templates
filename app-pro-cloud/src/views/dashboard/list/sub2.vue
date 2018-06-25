<template>
    <u-linear-layout direction="vertical">
        <u-linear-layout><u-button color="primary" icon="create">创建 Connect 集群</u-button><u-button square icon="refresh"></u-button></u-linear-layout>
        <u-table-view :data="data">
            <u-table-view-column type="selection"></u-table-view-column>
            <u-table-view-column title="名称" label="name"></u-table-view-column>
            <u-table-view-column title="日期" label="date" type="time"></u-table-view-column>
            <u-table-view-column title="状态" label="status" width="200">
                <template slot-scope="scope">
                    <u-status-icon :name="scope.row.status">{{ scope.row.status | statusName }}</u-status-icon>
                </template>
            </u-table-view-column>
            <u-table-view-column title="地址" label="address"></u-table-view-column>
            <u-table-view-column title="操作" label="action" width="200">
                <template slot-scope="scope">
                    <u-linear-layout>
                        <u-link>设置</u-link>
                        <u-link disabled>删除</u-link>
                        <u-link>更多</u-link>
                    </u-linear-layout>
                </template>
            </u-table-view-column>
            <div slot="no-data-text">
                 暂无数据，<u-link>请刷新页面</u-link>
            </div>
        </u-table-view>
    </u-linear-layout>
</template>

<script>
export default {
    filters: {
        statusName(status) {
            const STATUS_NAMES = {
                success: '正常',
                warning: '异常',
                error: '警告',
            };
            return STATUS_NAMES[status];
        },
    },
    data() {
        return {
            data: [],
        };
    },
};
</script>
