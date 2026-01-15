import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        // Bước transcript
        await step.sleep("wait-a-moment", "10s");

        // Bước summary
        await step.sleep("wait-a-moment", "5s");
        return { message: `Xin chao ${event.data.email}!` };
    },
);