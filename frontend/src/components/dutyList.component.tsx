import { Button, Popconfirm, Table } from "antd";
import type { Duty } from "../types/duty.types";
import type { ColumnsType } from "antd/es/table";

interface DutyListProps {
    duties: Duty[];
    onDelete: (id: string) => Promise<void>;
}

export const DutyList = ({duties, onDelete}: DutyListProps) => {
    const columns: ColumnsType<Duty> = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Actions",
            key: "actions",
            width: 180,
            render: (_, duty) => (
                    <Popconfirm
                        title="Delete duty"
                        description="Are you sure you want to delete this duty?"
                        okText="Confirm"
                        cancelText="Cancel"
                        okButtonProps={{
                            danger: true,
                        }}
                        onConfirm={async () =>
                            await onDelete(duty.id)
                        }
                    >
                        <Button
                            type="link"
                            danger
                        >
                            Delete
                        </Button>
                    </Popconfirm>
            ),
        }
    ];

    return (
        <Table<Duty>
            bordered
            dataSource={duties}
            columns={columns}
            pagination={false}
        />
    );
}