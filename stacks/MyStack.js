import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const table = new sst.Table(this, "Counter", {
      fields: {
        counter: sst.TableFieldType.STRING
      },
      primaryIndex: { partitionKey: "counter" },
    });

    const site = new sst.NextjsSite(this, "Site", {
      path: "frontend-next",
      environment: {
        REGION: scope.region,
        TABLE_NAME: table.tableName
      }
    });

    site.attachPermissions([table]);

    this.addOutputs({
      URL: site.url,
    });
  }
}
