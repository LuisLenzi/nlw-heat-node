import prismaClient from '../prisma'

class GetLast3MessagesService {
  async execute() {
    const messages = await prismaClient.message.findMany({
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    })

    // SELECT * FROM MESSAGES ORDER BY CREATED_AT DESC

    return messages
  }
}

export { GetLast3MessagesService }
