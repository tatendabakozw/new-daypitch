import { Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

function PrimaryButton({ outlined, button_text, onClick, loading, className }) {
  return (
    <div
      onClick={
        !loading ? onClick : () => console.log("Loading, please wait...")
      }
      className={`${
        outlined
          ? "border border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white outline-none "
          : "bg-blue-900 text-white hover:bg-blue-800 outline-none "
      } ${className} uppercase p-2 rounded-lg text-center cursor-pointer outline-none my-2`}
    >
      {loading ? (
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.900"
          size="sm"
        />
      ) : (
        <Text size={'md'}> {button_text} </Text>
      )}
    </div>
  );
}

export default PrimaryButton;
