import { inattendancePrisma } from "../../../prisma/clients.js";

export default async function show(body: {
    id: string,
}) {
    return await inattendancePrisma.findUnique({
        where: {
            id: body.id
        }
    });
}