// Mock Prisma client for demo purposes
// This is a placeholder to allow the build to pass.
// In production, replace this with actual Prisma client setup:
//
// import { PrismaClient } from '@prisma/client'
// 
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined
// }
//
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ['query'],
//   })
//
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

interface MockUser {
  id: string;
  clerkId: string;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MockHabit {
  id: string;
  title: string;
  description?: string;
  color: string;
  frequency: string;
  target: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  completions?: MockHabitCompletion[];
}

interface MockHabitCompletion {
  id: string;
  date: Date;
  value: number;
  notes?: string;
  createdAt: Date;
  habitId: string;
}

interface MockJournal {
  id: string;
  title?: string;
  content: string;
  mood?: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

interface MockPrismaClient {
  user: {
    findUnique: (args: { where: { clerkId: string } }) => Promise<MockUser | null>;
    create: (args: { data: Partial<MockUser> }) => Promise<MockUser>;
  };
  habit: {
    findMany: (args: { 
      where: { userId: string };
      include?: { completions?: { where?: { date?: { gte?: Date } } } };
      orderBy?: { createdAt: string };
    }) => Promise<MockHabit[]>;
    create: (args: { data: Partial<MockHabit> }) => Promise<MockHabit>;
  };
  journal: {
    findMany: (args: { 
      where: { userId: string };
      orderBy?: { createdAt: string };
    }) => Promise<MockJournal[]>;
    create: (args: { data: Partial<MockJournal> }) => Promise<MockJournal>;
  };
}

export const prisma: MockPrismaClient = {
  user: {
    findUnique: async () => null,
    create: async (args) => ({
      id: 'mock-user-id',
      clerkId: args.data.clerkId || '',
      email: args.data.email || '',
      name: args.data.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  },
  habit: {
    findMany: async () => [],
    create: async (args) => ({
      id: 'mock-habit-id',
      title: args.data.title || '',
      description: args.data.description,
      color: args.data.color || '#3b82f6',
      frequency: args.data.frequency || 'daily',
      target: args.data.target || 1,
      isActive: args.data.isActive !== false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: args.data.userId || '',
    }),
  },
  journal: {
    findMany: async () => [],
    create: async (args) => ({
      id: 'mock-journal-id',
      title: args.data.title,
      content: args.data.content || '',
      mood: args.data.mood,
      tags: args.data.tags || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: args.data.userId || '',
    }),
  },
};