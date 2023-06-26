#!/bin/bash
for i in {1..10000}; do
  curl http://a4c4c5a0ab6ff45b59eb9daa7dfda864-2047837136.us-east-1.elb.amazonaws.com/
  sleep $1
done
