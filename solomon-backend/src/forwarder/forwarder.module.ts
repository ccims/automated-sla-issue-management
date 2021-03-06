import { Module } from '@nestjs/common';
import { ConnectorCloudwatchModule } from 'src/connector-cloudwatch/connector-cloudwatch.module';
import { ConnectorKubernetesModule } from 'src/connector-kubernetes/connector-kubernetes.module';
import { ForwarderService } from './forwarder.service';

@Module({
    imports: [ConnectorCloudwatchModule, ConnectorKubernetesModule],
    providers: [ForwarderService],
    exports: [ForwarderService]
})
export class ForwarderModule {}
