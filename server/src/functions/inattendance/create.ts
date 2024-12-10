import { randomUUID } from "crypto";
import { inattendancePrisma } from "../../../prisma/clients.js";

export default async function create(body: {
    student_id: string,
    reason: string,
    evidence_photo_path: string
}) {
    return await inattendancePrisma.create({
        data: {
            id: randomUUID(),
            student: {
                connect: {
                    id: body.student_id
                }
            },
            reason: body.reason,
            evidence_photo_path: body.evidence_photo_path,
        }
    });
}