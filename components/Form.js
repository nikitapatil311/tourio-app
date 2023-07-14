import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";

const FormContainer = styled.form`
    display: grid;
    gap: 0.5rem;
`;

const Input = styled.input`
    padding: 0.5rem;
    font-size: inherit;
    border: 3px solid black;
    border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
    font-family: inherit;
    border: 3px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const Label = styled.label`
    font-weight: bold;
`;

export default function Form({ onSubmit, formName, defaultData, id }) {
    function handleSubmitAdd(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        const data = Object.fromEntries(formData);
        console.log(data);
        onSubmit(data);
    }

    function handleSubmitUpdate(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        const data = {};

        for (let [key, value] of formData.entries()) {
            if (value) {
                data[key] = value;
            }
        }
        console.log(data);
        onSubmit(data, id);
    }

    return (
        <FormContainer
            aria-labelledby={formName}
            onSubmit={defaultData ? handleSubmitUpdate : handleSubmitAdd}
        >
            <Label htmlFor="name">Name</Label>
            <Input
                id="name"
                name="name"
                type="text"
                defaultValue={defaultData?.name}
            />
            <Label htmlFor="image-url">Image Url</Label>
            <Input
                id="image-url"
                name="image"
                type="text"
                defaultValue={defaultData?.image}
            />
            <Label htmlFor="location">Location</Label>
            <Input
                id="location"
                name="location"
                type="text"
                defaultValue={defaultData?.location}
            />
            <Label htmlFor="map-url">Map Url</Label>
            <Input
                id="map-url"
                name="mapURL"
                type="text"
                defaultValue={defaultData?.mapURL}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                defaultValue={defaultData?.description}
            ></Textarea>
            <StyledButton type="submit">
                {defaultData ? "Update place" : "Add place"}
            </StyledButton>
        </FormContainer>
    );
}
