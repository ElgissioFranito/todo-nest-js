import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createTodoDto } from 'src/dtos/create-todo.dto';
import { Todo } from 'src/interfaces/todo';

@Injectable()
export class TodoService {
    
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async findTodos(): Promise<Todo[]> {
        return this.todoModel.find().exec();
    }

    // write a function who create a todo
    async createTodo(todo: createTodoDto): Promise<Todo> {
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    }
    
}
