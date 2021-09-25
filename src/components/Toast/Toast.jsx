import { useToast } from "@chakra-ui/react";

export function Toast({ title, description, status, text }) {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: { title },
          description: { description },
          status: { status },
          duration: 9000,
          isClosable: true,
          position="top-right"
        })
      }
    >
      {text}
    </Button>
  );
}
