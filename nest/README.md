# nest-gateway

An api gateway system powered by NestJS.

## Usage

### 1. config

You should config your database and other info in the `.config` directory in your project root directory.

For example, create `.config/.development.yaml`, and write the database configuration:

```yaml
# mongodb
MONGODB_CONFIG:
  host: localhost
  port: 27017
  username: xxx
  password: xxx
  type: mongodb
  database: nest_gateway
  entities: mongo
  logging: false
  synchronize: true
```
