version: 2.1

jobs:
  deploy:
    docker:
      - image: arvindr226/alpine-ssh
    steps:
      - checkout
      - add_ssh_keys:
          fingerprints:
            - "35:ea:0f:df:b5:f1:97:33:dc:c1:81:a7:85:6b:a7:2e"
      - run:
          name: Deploy to Remote Server
          command: |
            ssh -o StrictHostKeyChecking=no -v ubuntu@ec2-34-244-215-8.eu-west-1.compute.amazonaws.com "/home/ubuntu/saud4567/.circleci/deploy.sh"

workflows:
  version: 2
  deploy-to-ec2:
    jobs:
      - deploy
