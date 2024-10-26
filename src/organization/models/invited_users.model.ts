import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Invited_users {
  @Prop({ unique: [true, 'this email is already exists'] })
  user_email: string;
  @Prop({ type: Types.ObjectId, ref: 'Organization' })
  orgId: string;
}
export const Invited_usersSchema = SchemaFactory.createForClass(Invited_users);
