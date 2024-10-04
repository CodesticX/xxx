import { Response } from 'express';

interface ErrorTypes {
  statusCode: number;
  message: string;
}

export default function handleError(err: ErrorTypes, res: Response) {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json({
    success: false,
    statusCode: statusCode || 500,
    message: message || 'Internal Server Error'
  });
}
