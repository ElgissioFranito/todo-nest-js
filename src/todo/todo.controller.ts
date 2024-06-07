import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from 'src/interfaces/todo';
import { createTodoDto } from 'src/dtos/create-todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) { }

    @Get('/findTodos')
    async findTodos(): Promise<Todo[]> {
    return this.todoService.findTodos();
    }

    @Post('/createTodo')
    async createTodo(@Body() todo: createTodoDto): Promise<Todo> {
        return this.todoService.createTodo(todo);
    }



}
