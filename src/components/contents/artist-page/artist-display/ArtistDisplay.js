import { useParams } from "react-router-dom";

export default function ArtistDisplay() {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            ARTIST NUMBER {id}
        </div>
    );
}