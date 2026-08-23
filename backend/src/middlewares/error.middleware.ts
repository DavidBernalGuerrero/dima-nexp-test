import type { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);

        this.name = "AppError";
        this.statusCode = statusCode;

        Object.setPrototypeOf(
            this,
            new.target.prototype
        );
    }
}

export class BadRequestError extends AppError {
    constructor(message = "Bad request") {
        super(message, 400);
    }
}

export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(message, 404);
    }
}

export const errorMiddleware: ErrorRequestHandler = (
    error: any,
    _req: Request,
    res: Response,
    _next: NextFunction
): void => {
    console.error(error);
    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            statusCode: error.statusCode,
            error: error.constructor.name,
            message: error.message,
        });

        return;
    }

    res.status(500).json({
        statusCode: 500,
        error: "InternalServerError",
        message: "Internal server error",
    });
};