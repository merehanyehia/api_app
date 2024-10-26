import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, organizationSchema } from './models/organization.model';
import {
  Organization_members,
  Organization_membersSchema,
} from './models/organization_members.model';
import {
  Invited_users,
  Invited_usersSchema,
} from './models/invited_users.model';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AuthGuard } from 'src/guards/auth.guard';
import { CustomFilter } from 'src/error/error.filter';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
  imports: [
    MongooseModule.forFeature([
      { name: Organization.name, schema: organizationSchema },
      { name: Organization_members.name, schema: Organization_membersSchema },
      { name: Invited_users.name, schema: Invited_usersSchema },
    ]),
  ],
})
export class OrganizationModule {}
