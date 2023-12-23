import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as blueprints from "@aws-quickstart/eks-blueprints";

export class TsIacStack extends Construct {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const account = props?.env?.account;
    const region = props?.env?.region;

    blueprints.EksBlueprint.builder()
    .account(account)
    .region(region)
    .build(scope,`${id}-ClusterEKSFiap`)

  }
}
