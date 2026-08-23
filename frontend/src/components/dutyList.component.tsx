import { Button, Input, Popconfirm, Table } from "antd";
import type { Duty, UpdateDutyInput } from "../types/duty.types";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";

interface DutyListProps {
    duties: Duty[];
    onEdit: (id: string, data: UpdateDutyInput) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
}

export const DutyList = ({duties, onEdit, onDelete}: DutyListProps) => {
    const [editedNames, setEditedNames] =
        useState<Record<string, string>>({});

    const handleNameChange = (
        id: string,
        name: string
    ) => {
        setEditedNames((current) => ({
            ...current,
            [id]: name,
        }));
    };

    const handleUpdate = async (
        duty: Duty
    ) => {
        const name =
            editedNames[duty.id] ?? duty.name;

        await onEdit(duty.id, {...duty, name});

        setEditedNames((current) => {
            const updated = { ...current };

            delete updated[duty.id];

            return updated;
        });
    };

    const columns: ColumnsType<Duty> = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (_, duty) => (
                <Input
                    value={
                        editedNames[duty.id] ??
                        duty.name
                    }
                    maxLength={20}
                    onChange={(event) =>
                        handleNameChange(
                            duty.id,
                            event.target.value
                        )
                    }
                />
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 180,
            render: (_, duty) => (
                <>
                    <Popconfirm
                        title="Update duty"
                        description="Are you sure you want to update this duty?"
                        okText="Confirm"
                        cancelText="Cancel"
                        okButtonProps={{
                            danger: false,
                        }}
                        onConfirm={() =>
                            handleUpdate(duty)
                        }
                    >
                        <Button
                            type="link"
                            color="primary" 
                            variant="text"
                        >
                            Update
                        </Button>
                    </Popconfirm>
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
                </>
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