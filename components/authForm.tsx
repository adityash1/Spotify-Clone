import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex height="100px" align="center" justify="center">
        hello
      </Flex>
      <Flex height="calc(100vh-100px)" align="center" justify="center">
        form
      </Flex>
    </Box>
  );
};

export default AuthForm;
