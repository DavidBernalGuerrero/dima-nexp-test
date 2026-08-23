import { Table } from "antd";
import type { Duty } from "../types/duty.types";
import type { ColumnsType } from "antd/es/table";

interface DutyListProps {
    duties: Duty[];
}

export const DutyList = ({duties}: DutyListProps) => {
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
        }];

    return (
        <Table<Duty>
            bordered
            dataSource={duties}
            columns={columns}
            pagination={false}
        />
    );
}