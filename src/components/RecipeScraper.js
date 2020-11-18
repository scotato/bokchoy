import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import ReactJson from "react-json-view";

const initialState = {
  isLoading: false,
  isFailed: false,
  metadata: null,
  jsonld: null,
  message: null,
  url: "https://www.bonappetit.com/recipe/slow-roast-gochujang-chicken",
};

export const RecipeScraper = () => {
  const [state, setState] = useState(initialState);
  const hasData = state.metadata || state.jsonld;

  const reset = (message) =>
    setState({
      ...initialState,
      url: state.url,
      message,
    });

  const handleSubmit = (e) => {
    e && e.preventDefault();
    const { url } = state;
    const isDev = window.location.hostname === "localhost";
    const lambdaRecipeScraper = isDev
      ? "http://localhost:9000/recipe-scraper"
      : "/.netlify/functions/recipe-scraper";

    setState({ isLoading: true });

    fetch(lambdaRecipeScraper, {
      method: "POST",
      body: JSON.stringify({ url }),
    })
      .then((response) => response.json())
      .then((json) => {
        setState({
          isLoading: false,
          isFailed: json.status !== 200,
          metadata: json.metadata,
          jsonld: json.jsonld,
        });
      })
      .catch((err) => {
        console.error(err);
        reset("unable to fetch page");
      });
  };

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={
              state.isLoading ? (
                <Spinner thickness="4px" size="md" />
              ) : (
                <LinkIcon boxSize={5} height="100%" />
              )
            }
          />
          <Input
            placeholder="url"
            size="lg"
            value={state.url}
            onChange={(e) => setState({ url: e.target.value })}
            required
          />
        </InputGroup>

        <Button
          type="submit"
          size="lg"
          colorScheme="blue"
          disabled={state.isLoading}
        >
          get data
        </Button>

        <Button
          size="lg"
          onClick={() =>
            setState({
              ...initialState,
              url: "",
            })
          }
        >
          clear
        </Button>
      </HStack>

      {hasData && (
        <Box marginTop={9}>
          <h3>metadata</h3>
          <ReactJson src={state.metadata} />
          <br />
          <h3>json-ld</h3>
          <ReactJson src={state.jsonld} />
        </Box>
      )}
      {state.message && <p>{state.message}</p>}
    </form>
  );
};
