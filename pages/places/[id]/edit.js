import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import Form from "../../../components/Form.js";
import { StyledLink } from "../../../components/StyledLink.js";

export default function EditPage() {
    const router = useRouter();
    const { isReady } = router;
    const { id } = router.query;
    console.log(id);
    const { data: place, isLoading, error } = useSWR(`/api/places/${id}`);

    async function editPlace(place, id) {
        const response = await fetch(`/api/places/${id}`, {
            method: "PATCH",
            body: JSON.stringify(place),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            await response.json();
            router.push("/");
        }
    }
    console.log("Place edited (but not really...");

    if (!isReady || isLoading || error) return <h2>Loading...</h2>;

    return (
        <>
            <h2 id="edit-place">Edit Place</h2>
            <Link href={`/places/${id}`} passHref legacyBehavior>
                <StyledLink justifySelf="start">back</StyledLink>
            </Link>
            <Form
                onSubmit={editPlace}
                formName={"edit-place"}
                defaultData={place}
                id={id}
            />
        </>
    );
}
