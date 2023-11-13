import { Module } from "@nestjs/common";
import { pdfFilesService } from './services/pdfFiles.service';
import { pdfFilesController } from './controller/pdfFiles.controller';

@Module({
    controllers: [pdfFilesController],
    providers: [pdfFilesService],
})

export class pdfFilesModule{}