import React from "react";
import { Box } from "@chakra-ui/react";

const Example = () => {
    return (
        <>
            <Box
                height={{
                    base: "100%", // 0-48em
                    md: "50%", // 48em-80em,
                    xl: "25%", // 80em+
                }}
                bg="teal.400"
                width={[
                    "100%", // 0-30em
                    "50%", // 30em-48em
                    "25%", // 48em-62em
                    "15%", // 62em+
                ]}
            >sdfsd</Box>
            {/* responsive font size */}
            <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
            {/* responsive margin */}
            <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato" />
            {/* responsive padding */}
            <Box bg="papayawhip" p={[2, 4, 6, 8]}>
                Padding
            </Box>
        </>
    )
}
export default Example;