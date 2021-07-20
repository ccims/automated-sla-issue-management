import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AlertHandlerService } from './alert-handler.service';

@Controller('alert')
export class AlertController {
    private readonly logger = new Logger(AlertController.name);

    constructor(private alertService: AlertHandlerService) {}

    @Post('aws')
    receiveCwAlert(@Body() cwAlert) {
        this.logger.log('called receiveCwAlert()')
        return this.alertService.handleCwAlert(cwAlert);
    }

    @Post('kubernetes')
    receivePrometheusAlert(@Body() promAlert) {
        this.logger.log('called receivePrometheusAlert()')
        return this.alertService.handlePrometheusAlert(promAlert);
    }
}