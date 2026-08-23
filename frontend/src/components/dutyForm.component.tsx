import { Button, Form, Input } from "antd";
import type { CreateDutyInput } from "../types/duty.types";

interface DutyFormProps {
    onSubmit: (data: CreateDutyInput) => Promise<void>;
}

export const DutyForm = ({onSubmit}: DutyFormProps) => {
    const [form] = Form.useForm<CreateDutyInput>();

    const handleFinish = async (
        values: CreateDutyInput
    ) => {
        await onSubmit(values);

        form.resetFields();
    };

    return(
        <Form
            form={form}
            onFinish={handleFinish}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message:
                            "Please enter a valid duty name",
                    },
                    {
                        max: 20,
                        message:
                            "The name cannot exceed 20 chars",
                    },
                ]}
            >
                <Input
                    placeholder="Enter a duty ame"
                    maxLength={20}
                    showCount
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}