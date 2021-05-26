import { HttpModule, Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IssueManagerService } from './issue-manager/issue-manager.service';
import { IssueManagerController } from './issue-manager/issue-manager.controller';
import { ForwarderModule } from './forwarder/forwarder.module';
import { ConnectorAzureModule } from './connector-azure/connector-azure.module';
import { ConnectorCloudwatchModule } from './connector-cloudwatch/connector-cloudwatch.module';
import { ConnectorKubernetesModule } from './connector-kubernetes/connector-prometheus.module';

@Module({
  imports: [
    HttpModule,
    ForwarderModule,
    ConnectorAzureModule,
    ConnectorCloudwatchModule,
    ConnectorKubernetesModule,
  ],
  controllers: [AppController, IssueManagerController],
  providers: [Logger, IssueManagerService],
})
export class AppModule {}