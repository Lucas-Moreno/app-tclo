import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIA2XEZY3UMX3JLUIVH",
  secretAccessKey: "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",
  region: "eu-west-3",
});

const cloudwatchlogs = new AWS.CloudWatchLogs();

export async function sendLog(message: string): Promise<void> {
  const params: AWS.CloudWatchLogs.PutLogEventsRequest = {
    logEvents: [
      {
        message: message,
        timestamp: Date.now(),
      },
    ],
    logGroupName: "monitoring-logs-t-clo",
    logStreamName: "authentication-stream",
  };

  try {
    const data = await cloudwatchlogs.putLogEvents(params).promise();
    // eslint-disable-next-line no-console
    console.log(data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err as Error, (err as Error).stack);
  }
}
