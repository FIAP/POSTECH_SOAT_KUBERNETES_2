#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsIacStack } from '../lib/ts_iac-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION;

const env = {account, region};

new TsIacStack(app, 'CursoK8SFIAP', {env});