import { prisma } from '@lib/prisma'

export default async function Users() {

const users = await prisma.user.findMany();

    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}