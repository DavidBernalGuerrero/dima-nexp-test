import {
    describe,
    expect,
    it,
    jest,
} from "@jest/globals";

import { DutyService } from "../../src/services/duty.service.js";
import { NotFoundError, BadRequestError } from "../../src/middlewares/error.middleware.js";
import { Duty } from "../types/duty.types.js";

describe("DutyService - getDuties: ", () => {
    it("should return the list of duties", async () => {
        const duties: Duty[] = [
            { id: "1", name: "Duty 1" },
            { id: "2", name: "Duty 2" }
        ];
        
        const mockRepo = { getDuties: jest.fn().mockResolvedValue(duties)};
        const service = new DutyService(mockRepo);

        const result = await service.getDuties();

        expect(duties).toEqual(result);
        expect(mockRepo.getDuties).toHaveBeenCalledTimes(1);
        expect(mockRepo.getDuties).not.toThrow();
    });

    it("should propagate error if something happens in DB", async () => {
        const mockRepo = { getDuties: jest.fn().mockRejectedValue(new Error())};
        const service = new DutyService(mockRepo);

        await expect(service.getDuties()).rejects.toThrow(Error);
        expect(mockRepo.getDuties).toHaveBeenCalledTimes(1);
    });
});

describe("DutyService - addDuty: ", () => {
    it("should raise a BadRequestError if name is null or not send", async () => {
        const mockRepo = { addDuty: jest.fn().mockReturnValue(false)};
        const service = new DutyService(mockRepo);

        await expect(service.addDuty()).rejects.toThrow(BadRequestError);
        expect(mockRepo.addDuty).toHaveBeenCalledTimes(0);
    });

    it("should call to the addDuty repo method with the same name but with an additional generated ID", async () => {
        const mockRepo = { addDuty: jest.fn().mockReturnValue(false)};
        const service = new DutyService(mockRepo);
        const name = "testeando";

        await service.addDuty(name);

        expect(mockRepo.addDuty).toHaveBeenCalledTimes(1);
        expect(mockRepo.addDuty).toHaveBeenCalledWith(
            expect.objectContaining({
                id: expect.any(String),
                name,
            })
        );
    });
});

describe("DutyService - updateDuty: ", () => {
    it("should raise a BadRequestError if id is null or not send", async () => {
        const mockRepo = { updateDuty: jest.fn().mockReturnValue(false)};
        const service = new DutyService(mockRepo);

        await expect(service.updateDuty(null, {})).rejects.toThrow(BadRequestError);
        expect(mockRepo.updateDuty).toHaveBeenCalledTimes(0);
    });

    it("should call to the updateDuty repo method with the same name but with an additional generated ID", async () => {
        const mockRepo = { updateDuty: jest.fn().mockReturnValue(false)};
        const service = new DutyService(mockRepo);
        const id = "old value";
        const newId = "new value";
        const name = "testeando";

        await service.updateDuty(id, {id: newId, name});

        expect(mockRepo.updateDuty).toHaveBeenCalledTimes(1);
        expect(mockRepo.updateDuty).toHaveBeenCalledWith(id, {id: newId, name});
    });
});

describe("DutyService - deleteDuty: ", () => {
    it("should call to deleteDuty repo method without error", async () => {
        const mockRepo = { deleteDuty: jest.fn().mockResolvedValue(true)};
        const service = new DutyService(mockRepo);

        await service.deleteDuty("716ac41f-9ab5-4f7c-81b7-374866d021aa");

        expect(mockRepo.deleteDuty).toHaveBeenCalledTimes(1);
        expect(mockRepo.deleteDuty).toHaveBeenCalledWith("716ac41f-9ab5-4f7c-81b7-374866d021aa");
        expect(mockRepo.deleteDuty).not.toThrow();
    });

    it("should throw when duty does not exist", async () => {
        const mockRepo = { deleteDuty: jest.fn().mockResolvedValue(false)};
        const service = new DutyService(mockRepo);

        await expect(
            service.deleteDuty("716ac41f-9ab5-4f7c-81b7-374866d021aa")
        ).rejects.toThrow(NotFoundError);
        
        expect(mockRepo.deleteDuty).toHaveBeenCalledTimes(1);
        expect(mockRepo.deleteDuty).toHaveBeenCalledWith("716ac41f-9ab5-4f7c-81b7-374866d021aa");
    });

    it("should throw when id is missing", async () => {
        const mockRepo = { deleteDuty: jest.fn() };
        const service = new DutyService(mockRepo);

        await expect(
            service.deleteDuty("")
        ).rejects.toThrow(BadRequestError);

        expect(mockRepo.deleteDuty).not.toHaveBeenCalled();
    });
});