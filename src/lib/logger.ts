import * as Sentry from "@sentry/nextjs";

interface ILogMessage {
  message: string;
  tag?: string;
  level?: Sentry.SeverityLevel;
}
interface ILogError {
  error: Error;
  tag?: string;
  level?: Sentry.SeverityLevel;
}

export const Logger = {
  logMessage: (event: ILogMessage) => {
    Sentry.withScope((scope) => {
      if (event.tag) {
        scope.setTag("tag", event.tag);
      }
      if (event.level) {
        scope.setLevel(event.level);
      }

      scope.captureMessage(event.message);
    });
  },
  logError: (event: ILogError) => {
    Sentry.withScope((scope) => {
      if (event.tag) {
        scope.setTag("tag", event.tag);
      }
      if (event.level) {
        scope.setLevel(event.level);
      }

      scope.captureException(event.error);
    });
  },
};
