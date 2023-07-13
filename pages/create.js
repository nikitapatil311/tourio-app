import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
//import useSWR from "swr";
import { StyledLink } from "../components/StyledLink.js";

const StyledBackLink = styled(StyledLink)`
    justify-self: flex-start;
`;

export default function CreatePlacePage() {
    const router = useRouter();

    async function addPlace(data) {
        const response = await fetch("/api/places", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            await response.json();
            router.push("/");
        }
    }

    return (
        <>
            <h2 id="add-place">Add Place</h2>
            <Link href="/" passHref legacyBehavior>
                <StyledBackLink>back</StyledBackLink>
            </Link>
            <Form onSubmit={addPlace} formName={"add-place"} />
        </>
    );
}
