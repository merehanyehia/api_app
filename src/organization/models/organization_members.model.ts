import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { User, userSchema } from 'src/auth/model/auth.model';

@Schema({
  timestamps: true,
})
export class Organization_members {
  @Prop()
  name: string;
  @Prop({ unique: [true, 'this email is already exists'] })
  email: string;
  @Prop()
  access_level: string;
  @Prop({ type: Types.ObjectId, ref: 'Organization' })
  orgId: string;
}
export const Organization_membersSchema =
  SchemaFactory.createForClass(Organization_members);
