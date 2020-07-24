import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { AwsProvider, S3Bucket } from './.gen/providers/aws'

const STAGE = 'remotedev';
const APP_NAME = 'playground-cdk-terraform';
const DEFAULT_REGION = 'eu-west-2';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'aws', { region: DEFAULT_REGION });
    new S3Bucket(this, 'www', { bucket: `${APP_NAME}-${STAGE}-www` });

  }
}

const app = new App();
new MyStack(app, 'playground-cdk-terraform');
app.synth();
