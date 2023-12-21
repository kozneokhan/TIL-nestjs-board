import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { RemovePostDTO } from './dto/remove-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  // GET http://localhost:3000/post/1
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  // Patch http://localhost:3000/post/1
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }
  // Delete http://localhost:3000/post/1
  @Delete(':id')
  remove(@Param('id') id: string, @Body() deletePostDto: RemovePostDTO) {
    return this.postService.remove(+id, deletePostDto);
  }
}
