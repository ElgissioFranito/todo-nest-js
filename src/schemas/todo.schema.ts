import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// ici Todo est celui qui est exporté en bas mais l'interface "Todo"
export type TodoDocument = HydratedDocument<Todo>;  

@Schema()
export class Todo {

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  date: string;

  @Prop()
  time: string;

  @Prop()
  isDone: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);