//? Type assertion

//* "as" syntax

type Status = "pending" | "approved" | "rejected";

const someStatus: string = "pending";

const showStatus = (status: Status) => {
    console.log("Your current application status is " + status);
}

showStatus(someStatus as Status);

//* non-null assertion

interface Config {
    port?: number;
}

const config: Config = {
    port: 5000,
};

const currentPort: number = config.port!;
const fixedPort: number = config.port as number;

//* constant assertion

const configuration = {
    port: 8080,
    prefix: "/api/v1",
} as const;

// configuration.port = 121324; // show error because it is read only property