import { Module } from '@nestjs/common';
import { FilamentsService } from './filaments.service';
import { FilamentsController } from './filaments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Filaments, FilamentsSchema } from './schemas/filaments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Filaments.name, schema: FilamentsSchema },
    ]),
  ],
  controllers: [FilamentsController],
  providers: [FilamentsService],
})
export class FilamentsModule {}
