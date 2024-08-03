import { Button, Input, Typography } from "@/components";

export const LoginForm = () => {
  return (
    <div className="px-8 py-12 border border-gray-300 rounded-xl">
      <div className="flex flex-col">
        <Typography
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Login
        </Typography>

        <Typography
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-8"
        >
          Please enter your credentials to login
        </Typography>

        <Typography
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Username
        </Typography>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />

        <Typography
          as="label"
          htmlFor="password"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Password
        </Typography>
        <Input id="password" type="password" placeholder={"Password"} />

        <Button type="submit" className="mt-10">
          Login
        </Button>
      </div>
    </div>
  );
};
