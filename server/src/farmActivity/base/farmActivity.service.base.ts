/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, FarmActivity } from "@prisma/client";

export class FarmActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FarmActivityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmActivityFindManyArgs>
  ): Promise<number> {
    return this.prisma.farmActivity.count(args);
  }

  async findMany<T extends Prisma.FarmActivityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmActivityFindManyArgs>
  ): Promise<FarmActivity[]> {
    return this.prisma.farmActivity.findMany(args);
  }
  async findOne<T extends Prisma.FarmActivityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmActivityFindUniqueArgs>
  ): Promise<FarmActivity | null> {
    return this.prisma.farmActivity.findUnique(args);
  }
  async create<T extends Prisma.FarmActivityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmActivityCreateArgs>
  ): Promise<FarmActivity> {
    return this.prisma.farmActivity.create<T>(args);
  }
  async update<T extends Prisma.FarmActivityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmActivityUpdateArgs>
  ): Promise<FarmActivity> {
    return this.prisma.farmActivity.update<T>(args);
  }
  async delete<T extends Prisma.FarmActivityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmActivityDeleteArgs>
  ): Promise<FarmActivity> {
    return this.prisma.farmActivity.delete(args);
  }
}
